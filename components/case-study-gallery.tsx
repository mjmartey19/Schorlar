"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Download } from "lucide-react"
import { cn } from "@/lib/utils"

interface GalleryImage {
    _key: string
    asset: {
        _ref?: string
        url: string
    }
    alt?: string
    caption?: string
}

interface CaseStudyGalleryProps {
    images: GalleryImage[]
    className?: string
}

export default function CaseStudyGallery({ images, className }: CaseStudyGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const [lightboxIndex, setLightboxIndex] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)


    const goToNext = useCallback(() => {
        if (isLightboxOpen) {
            setLightboxIndex((prev) => (prev + 1) % images.length)
        } else {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }
        setIsZoomed(false)
    }, [images.length, isLightboxOpen])

    const goToPrevious = useCallback(() => {
        if (isLightboxOpen) {
            setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
        } else {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        }
        setIsZoomed(false)
    }, [images.length, isLightboxOpen])

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isLightboxOpen) return

            switch (e.key) {
                case "Escape":
                    setIsLightboxOpen(false)
                    setIsZoomed(false)
                    break
                case "ArrowLeft":
                    e.preventDefault()
                    goToPrevious()
                    break
                case "ArrowRight":
                    e.preventDefault()
                    goToNext()
                    break
                case "z":
                case "Z":
                    e.preventDefault()
                    setIsZoomed(!isZoomed)
                    break
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [isLightboxOpen, goToNext, goToPrevious, isZoomed])

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isLightboxOpen])

    

    const openLightbox = (index: number) => {
        setLightboxIndex(index)
        setIsLightboxOpen(true)
        setIsZoomed(false)
    }

    const closeLightbox = () => {
        setIsLightboxOpen(false)
        setIsZoomed(false)
    }

    const downloadImage = async () => {
        const currentImage = images[lightboxIndex]
        if (!currentImage?.asset?.url) return

        try {
            const response = await fetch(currentImage.asset.url)
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = `gallery-image-${lightboxIndex + 1}.jpg`
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
            document.body.removeChild(a)
        } catch (error) {
            console.error("Failed to download image:", error)
        }
    }

    if (!images || images.length === 0) {
        return null
    }

    return (
        <>
            {/* Main Carousel */}
            <div className={cn("relative", className)}>
                {/* Main Image Display */}
                <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                        src={images[currentIndex]?.asset?.url || "/placeholder.svg"}
                        alt={images[currentIndex]?.alt || "Gallery image"}
                        fill
                        className="object-contain cursor-zoom-in transition-transform duration-300 hover:scale-105"
                        onClick={() => openLightbox(currentIndex)}
                        priority
                    />

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full"
                                onClick={goToPrevious}
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full"
                                onClick={goToNext}
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </Button>
                        </>
                    )}

                    {/* Zoom Indicator */}
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                        <ZoomIn className="h-3 w-3" />
                        Click to expand
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>

                {/* Image Caption */}
                {images[currentIndex]?.caption && (
                    <div className="mb-4">
                        <p className="text-gray-600 text-center italic">{images[currentIndex].caption}</p>
                    </div>
                )}

                {/* Thumbnail Navigation */}
                {images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {images.map((image, index) => (
                            <button
                                key={image._key}
                                className={cn(
                                    "relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200",
                                    index === currentIndex ? "border-black shadow-md" : "border-gray-200 hover:border-gray-400",
                                )}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`View image ${index + 1}`}
                            >
                                <Image src={image.asset?.url || "/placeholder.svg"} alt={image.alt || ""} fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
                    {/* Close Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                    >
                        <X className="h-6 w-6" />
                    </Button>

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                                onClick={goToPrevious}
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="h-8 w-8" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                                onClick={goToNext}
                                aria-label="Next image"
                            >
                                <ChevronRight className="h-8 w-8" />
                            </Button>
                        </>
                    )}

                    {/* Controls */}
                    <div className="absolute top-4 left-4 flex gap-2 z-10">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/20"
                            onClick={() => setIsZoomed(!isZoomed)}
                            aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                        >
                            {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/20"
                            onClick={downloadImage}
                            aria-label="Download image"
                        >
                            <Download className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded z-10">
                        {lightboxIndex + 1} / {images.length}
                    </div>

                    {/* Main Image */}
                    <div className="relative w-full h-full flex items-center justify-center p-8">
                        <div
                            className={cn(
                                "relative max-w-full max-h-full transition-transform duration-300 cursor-zoom-in",
                                isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in",
                            )}
                            onClick={() => setIsZoomed(!isZoomed)}
                        >
                            <Image
                                src={images[lightboxIndex]?.asset?.url || "/placeholder.svg"}
                                alt={images[lightboxIndex]?.alt || "Gallery image"}
                                width={1200}
                                height={800}
                                className="max-w-full max-h-full object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Caption */}
                    {images[lightboxIndex]?.caption && (
                        <div className="absolute bottom-4 right-4 max-w-md text-white bg-black/50 p-3 rounded z-10">
                            <p className="text-sm">{images[lightboxIndex].caption}</p>
                        </div>
                    )}

                    {/* Keyboard Shortcuts Help */}
                    <div className="absolute bottom-4 left-4 text-white/70 text-xs z-10">
                        <p>← → Navigate • Z Zoom • ESC Close</p>
                    </div>
                </div>
            )}
        </>
    )
}

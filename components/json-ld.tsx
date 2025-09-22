import { siteConfig } from "@/lib/seo-config"

interface JsonLdProps {
    type: "Person" | "Organization" | "WebSite" | "WebPage" | "Article" | "BreadcrumbList" | "Project"
    data: Record<string, unknown>
}

export default function JsonLd({ type, data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": type,
                    ...data,
                }),
            }}
        />
    )
}

export function WebsiteJsonLd() {
    return (
        <JsonLd
            type="WebSite"
            data={{
                name: siteConfig.name,
                url: siteConfig.url,
                potentialAction: {
                    "@type": "SearchAction",
                    target: `${siteConfig.url}/search?q={search_term_string}`,
                    "query-input": "required name=search_term_string",
                },
            }}
        />
    )
}

export function OrganizationJsonLd() {
    return (
        <JsonLd
            type="Organization"
            data={{
                name: siteConfig.name,
                url: siteConfig.url,
                logo: `${siteConfig.url}/logo.png`,
                sameAs: [
                    siteConfig.links.twitter,
                    siteConfig.links.instagram,
                    siteConfig.links.linkedin,
                    siteConfig.links.github,
                ],
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+233551201245",
                    contactType: "customer service",
                    email: "scholarstudios@gmail.com",
                    areaServed: "GH",
                    availableLanguage: "English",
                },
            }}
        />
    )
}

export function PersonJsonLd() {
    return (
        <JsonLd
            type="Person"
            data={{
                name: siteConfig.author.name,
                url: siteConfig.author.url,
                jobTitle: "Creative Designer & Developer",
                worksFor: {
                    "@type": "Organization",
                    name: siteConfig.name,
                },
                sameAs: [
                    siteConfig.links.twitter,
                    siteConfig.links.instagram,
                    siteConfig.links.linkedin,
                    siteConfig.links.github,
                ],
            }}
        />
    )
}

export function ProjectJsonLd({
    name,
    description,
    image,
    datePublished,
    author,
    url,
}: {
    name: string
    description: string
    image: string
    datePublished: string
    author: string
    url: string
}) {
    return (
        <JsonLd
            type="Project"
            data={{
                name,
                description,
                image,
                datePublished,
                author: {
                    "@type": "Person",
                    name: author,
                },
                url,
            }}
        />
    )
}

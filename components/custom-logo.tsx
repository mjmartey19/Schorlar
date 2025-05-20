import Image from "next/image"
import Link from "next/link"

export default function CustomLogo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex gap-1 items-center">
        <Image
          src=
          "/logo.png"

          alt="Logo"
          width={25}
          height={25}
          className="object-cover rounded-md"
        />
        <span className="text-2xl font-bold tracking-tighter">
          <span className="text-primary font-sora">S</span>cholar
        </span>
      </div>
    </Link>
  )
}

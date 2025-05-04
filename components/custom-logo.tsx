import Link from "next/link"

export default function CustomLogo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-tighter">
          <span className="text-primary font-sora">S</span>CHOLAR
        </span>
      </div>
    </Link>
  )
}

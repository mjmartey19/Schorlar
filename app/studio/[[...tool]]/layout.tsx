export const metadata = {
    title: "Scholar Studio - Content Management",
    description: "Manage your portfolio content",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
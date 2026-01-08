// Central configuration for SEO metadata
export const siteConfig = {
  name: "Scholar",
  description:
    "Experienced web designer and developer specializing in Mobile & Web Application, Graphic Design, UI/UX and Creative Digital Solutions.",
  url: "https://schorlar.com",
  ogImage:
    "https://cdn.sanity.io/images/8cbl49nv/production/06d4e183a64f344de8f8bb0777ef698d3b8dacef-3548x4435.jpg",

  socials: {
    twitter: "https://twitter.com/scholar_studios",
    instagram: "https://www.instagram.com/scholar_studios",
    linkedin: "https://www.linkedin.com/in/jamel-martey-944981228/",
    github: "https://github.com/mjmartey19",
  },

  keywords: [
    "web design",
    "web development",
    "graphic design",
    "UI/UX design",
    "Ghana",
    "Accra",
    "portfolio",
    "freelance designer",
    "creative designer",
    "mobile app development",
    "branding",
    "logo design",
  ],

  author: {
    name: "Jamel Martey",
    url: "https://schorlar.com",
  },

  creator: "Jamel Martey",
  themeColor: "#0f172a",
}

// Helper function to generate metadata for each page
export function generateMetadata({
  title,
  description,
  path = "",
  ogImage = siteConfig.ogImage,
}: {
  title: string
  description?: string
  path?: string
  ogImage?: string
}) {
  const metaDescription = description || siteConfig.description
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description: metaDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription,
      images: [ogImage],
      creator: "@scholar_studios",
    },
  }
}

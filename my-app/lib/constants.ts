export const SITE_CONFIG = {
  name: "StarterKit",
  description: "Next.js 15 App Router 기반 모던 웹 스타터킷",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ogImage: "/og.png",
  links: {
    github: "https://github.com",
    docs: "/docs",
  },
} as const;

export const NAV_ITEMS = [
  { label: "홈", href: "/" },
  { label: "대시보드", href: "/dashboard" },
  { label: "예제", href: "/examples" },
  { label: "문서", href: "/docs" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];

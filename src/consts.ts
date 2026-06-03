import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Columbia DSA',
  description:
    'Columbia DSA — local chapter site for Columbia Democratic Socialists of America.',
  href: 'https://astro-erudite.vercel.app',
  author: 'Columbia DSA',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'News',
  },
  {
    href: '/calendar',
    label: 'Calendar',
  },
  {
    href: '/resources',
    label: 'Resources',
  },
  {
    href: 'https://shop.worxprinting.coop/collections/dsa-columbia',
    label: 'Shop',
  },
  {
    href: '/donate',
    label: 'Donate',
  },
  {
    href: '/contact',
    label: 'Contact Us',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://twitter.com/columbiadsa',
    label: 'Twitter',
  },
  {
    href: 'http://instagram.com/columbiadsa/',
    label: 'Instagram',
  },
  {
    href: 'https://www.facebook.com/ColumbiaSCDSA/',
    label: 'Facebook',
  },
  {
    href: 'https://discordapp.com',
    label: 'Discord',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  Instagram: 'lucide:instagram',
  Facebook: 'lucide:facebook',
  Discord: 'lucide:message-circle',
}

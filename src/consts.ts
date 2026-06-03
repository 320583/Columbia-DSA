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
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/calendar',
    label: 'Calendar',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/resources',
    label: 'Resources',
  },
  {
    href: '/social-media',
    label: 'Social Media',
  },
  {
    href: 'https://shop.worxprinting.coop/collections/dsa-columbia',
    label: 'Shop',
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
  Discord: 'lucide:message-circle-question',
}

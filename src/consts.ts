import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Columbia DSA',
  description:
    'Columbia DSA — local chapter site for Columbia Democratic Socialists of America.',
  href: 'https://astro-erudite.vercel.app',
  author: 'Columbia DSA',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 10,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfHvwVl_9pAdQEpJ5smm_GWY9O-q3AQyx6C_orgZnQHTHZfiw/viewform',
    label: 'Get Involved',
  },
  // TEMPORARILY-DISABLE-NEWS-FEED: hide the News nav link while blog/news
  // content is kept out of public view (routes disabled in
  // src/pages/_blog). Restore when news content is ready to be public again.
  // {
  //   href: '/blog',
  //   label: 'News',
  // },
  {
    href: '/resources',
    label: 'Resources',
  },
  {
    href: 'https://shop.worxprinting.coop/collections/dsa-columbia',
    label: 'Shop',
  },
  {
    href: 'https://donorbox.org/general-donations-429',
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
  // CONSTRUCTION-TEMP: Uncomment when Discord server is ready
  // {
  //   href: 'https://discordapp.com',
  //   label: 'Discord',
  // },
  // TEMPORARILY-DISABLE-NEWS-FEED: the RSS feed (src/pages/_rss.xml.ts) is
  // disabled along with the rest of the blog/news content. Restore when
  // news content is ready to be public again.
  // {
  //   href: '/rss.xml',
  //   label: 'RSS',
  // },
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

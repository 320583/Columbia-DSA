import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(value: string | Date) {
  const date = typeof value === 'string' ? new Date(value) : value
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function calculateWordCountFromHtml(html: string | undefined) {
  const text = html
    ? html
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    : ''

  return text.length > 0 ? text.split(' ').filter(Boolean).length : 0
}

export function readingTime(wordCount: number) {
  const wordsPerMinute = 200
  const minutes = Math.max(1, Math.round(wordCount / wordsPerMinute))
  return `${minutes} min read`
}

export function getHeadingMargin(depth: number) {
  switch (depth) {
    case 2:
      return 'pl-0'
    case 3:
      return 'pl-4'
    default:
      return 'pl-8'
  }
}

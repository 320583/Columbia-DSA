// CONSTRUCTION-TEMP: Remove this entire file when site is ready
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle } from 'lucide-react'

export default function ConstructionBanner() {
  return (
    <Alert className="rounded-none border-x-0 border-t-0 border-yellow-600 bg-yellow-50 text-yellow-900 dark:border-yellow-500 dark:bg-yellow-950 dark:text-yellow-100">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Site Under Construction</AlertTitle>
      <AlertDescription>
        This website is currently under construction. Much of the content is
        placeholder text and will be updated soon.
      </AlertDescription>
    </Alert>
  )
}

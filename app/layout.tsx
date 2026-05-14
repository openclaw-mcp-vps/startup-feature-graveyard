import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup Feature Graveyard — Learn from Abandoned Features',
  description: 'Database of failed startup features with reasons for abandonment, usage stats, and lessons learned from founders. Built for product managers and startup founders.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7b7fd7fe-49a7-4894-94fb-b1e0db454f13"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}

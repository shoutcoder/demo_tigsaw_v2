import type { Metadata } from 'next'
import './globals.css'
import { useEffect } from 'react'

export const metadata: Metadata = {
  title: 'Tigsaw Demo Store',
  description: 'Tigsaw Demo Store'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://tigsaw.com/api/delivery/8WAF685E/common"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function handleScrollToPercentage() {
                const urlParams = new URLSearchParams(window.location.search);
                const scrollToParam = urlParams.get('scrollTo');
                
                if (scrollToParam) {
                  const percentage = parseInt(scrollToParam, 10);
                  if (!isNaN(percentage) && percentage >= 0 && percentage <= 100) {
                    setTimeout(() => {
                      const documentHeight = Math.max(
                        document.body.scrollHeight,
                        document.body.offsetHeight,
                        document.documentElement.clientHeight,
                        document.documentElement.scrollHeight,
                        document.documentElement.offsetHeight
                      );
                      const scrollPosition = (documentHeight - window.innerHeight) * (percentage / 100);
                      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
                    }, 100);
                  }
                }
              }
              
              // Run on initial page load
              document.addEventListener('DOMContentLoaded', handleScrollToPercentage);
              
              // Also handle client-side navigation for Next.js
              if (typeof window !== 'undefined') {
                window.addEventListener('popstate', handleScrollToPercentage);
              }
            `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

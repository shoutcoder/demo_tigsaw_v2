import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

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
        <Script
          src="https://tigsaw.com/api/delivery/8WAF685E/common"
          async
        />
        <Script
          id="scroll-handler"
          dangerouslySetInnerHTML={{
            __html: `
              function handleScroll() {
                const urlParams = new URLSearchParams(window.location.search);
                const scrollToParam = urlParams.get('scrollTo');
                const scrollSelector = urlParams.get('scrollSelector');
                
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
                
                if (scrollSelector) {
                  setTimeout(() => {
                    try {
                      const element = document.querySelector(scrollSelector);
                      if (element) {
                        const elementRect = element.getBoundingClientRect();
                        const absoluteElementTop = elementRect.top + window.pageYOffset;
                        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
                        window.scrollTo({ top: middle, behavior: 'smooth' });
                      }
                    } catch (error) {
                      console.warn('Invalid selector or element not found:', scrollSelector);
                    }
                  }, 100);
                }
              }
              
              // Run on initial page load
              document.addEventListener('DOMContentLoaded', handleScroll);
              
              // Also handle client-side navigation for Next.js
              if (typeof window !== 'undefined') {
                window.addEventListener('popstate', handleScroll);
              }
            `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

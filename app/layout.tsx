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
          id="tigsaw-script" 
          tigsaw-id="8WAF685E"
          dangerouslySetInnerHTML={{
            __html: `
               (function(t,i,g,s,a,w){
        i=t.currentScript.getAttribute("tigsaw-id");
        (w||window).tigsawContainerId=i;
        g=t.createElement('script');
        g.src='https://static.tigsaw.com/delivery/smartscript.js';
        g.defer=true;
        t.head.appendChild(g);
      })(document,typeof window!=='undefined'?window:this);
            `
          }}
        />
        <Script
          id="scroll-handler"
          dangerouslySetInnerHTML={{
            __html: `
              function scrollToElement(element) {
                const elementRect = element.getBoundingClientRect();
                const absoluteElementTop = elementRect.top + window.pageYOffset;
                const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
                window.scrollTo({ top: middle, behavior: 'smooth' });
              }

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
                  let attempts = 0;
                  const maxAttempts = 50; // 5 seconds maximum (50 * 100ms)
                  
                  const findAndScroll = () => {
                    try {
                      const element = document.querySelector(scrollSelector);
                      if (element) {
                        scrollToElement(element);
                        return true;
                      }
                    } catch (error) {
                      console.warn('Invalid selector:', scrollSelector);
                      return true; // Stop trying if selector is invalid
                    }
                    
                    attempts++;
                    if (attempts < maxAttempts) {
                      setTimeout(findAndScroll, 100);
                    }
                    return false;
                  };
                  
                  findAndScroll();
                }
              }
              
              // Run on initial page load
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', handleScroll);
              } else {
                handleScroll();
              }
              
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

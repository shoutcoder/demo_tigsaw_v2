import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import SkeletonHero from "@/components/skeleton-hero"
import SkeletonProductCard from "@/components/skeleton-product-card"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            SkeleStore
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <SkeletonHero />

          <h2 className="text-2xl font-bold mt-12 mb-6">Featured Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Link href="/product" key={i}>
                <SkeletonProductCard />
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">New Arrivals</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Link href="/product" key={i}>
                <SkeletonProductCard />
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="h-4 bg-slate-200 rounded w-24 mb-4"></div>
              <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-slate-200 rounded w-3/4"></div>
            </div>
            <div>
              <div className="h-4 bg-slate-200 rounded w-24 mb-4"></div>
              <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-slate-200 rounded w-3/4"></div>
            </div>
            <div>
              <div className="h-4 bg-slate-200 rounded w-24 mb-4"></div>
              <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-slate-200 rounded w-3/4"></div>
            </div>
          </div>
          <div className="h-4 bg-slate-200 rounded w-full max-w-md mx-auto mt-8"></div>
        </div>
      </footer>
    </div>
  )
}


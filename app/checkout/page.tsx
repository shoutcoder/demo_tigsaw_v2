import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            SkeleStore
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <div className="h-6 bg-slate-200 rounded w-1/3 mb-4"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                    <div className="h-10 bg-slate-200 rounded w-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                    <div className="h-10 bg-slate-200 rounded w-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                  <div className="h-10 bg-slate-200 rounded w-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                    <div className="h-10 bg-slate-200 rounded w-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                    <div className="h-10 bg-slate-200 rounded w-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                    <div className="h-10 bg-slate-200 rounded w-full"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-6 bg-slate-200 rounded w-1/3 mb-4"></div>

                <div className="space-y-2">
                  <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                  <div className="h-10 bg-slate-200 rounded w-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                    <div className="h-10 bg-slate-200 rounded w-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                    <div className="h-10 bg-slate-200 rounded w-full"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-6 bg-slate-200 rounded w-1/3 mb-4"></div>

                <div className="space-y-2">
                  <div className="h-16 bg-slate-200 rounded w-full"></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="border rounded-lg p-6 space-y-4">
                <div className="h-6 bg-slate-200 rounded w-1/2 mb-4"></div>

                <div className="space-y-4">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-16 h-16 bg-slate-200 rounded-md"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                        <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between font-bold">
                  <div className="h-5 bg-slate-200 rounded w-1/3"></div>
                  <div className="h-5 bg-slate-200 rounded w-1/4"></div>
                </div>

                <Button className="w-full mt-4">Place Order</Button>
              </div>
            </div>
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


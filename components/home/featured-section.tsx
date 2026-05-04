import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FeaturedSection() {
  return (
    <section className="bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/sarees.jpg"
                  alt="Traditional Jaipuri sarees"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/jewellery.jpg"
                  alt="Indian artificial jewellery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/kurtis.jpg"
                  alt="Jaipuri kurti collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/suits.jpg"
                  alt="Ladies suits collection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-12">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              Why Choose Paavai
            </p>
            
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              <span className="text-balance">Authentic Jaipuri Craftsmanship</span>
            </h2>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif text-xl font-bold text-primary">
                  01
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Handpicked Collections</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Every piece is carefully selected to ensure quality and authenticity.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif text-xl font-bold text-primary">
                  02
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Traditional Artistry</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Supporting local artisans and preserving Rajasthani heritage.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif text-xl font-bold text-primary">
                  03
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Personal Styling</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Our team helps you find the perfect outfit for any occasion.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="mt-10 min-h-11 w-full rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90 sm:w-auto">
              <Link href="/about">
                Learn Our Story
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

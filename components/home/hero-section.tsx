import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-jaipuri.jpg"
          alt="Jaipuri ethnic wear collection at Paavai"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Jaipur&apos;s Finest Boutique
          </p>
          
          <h1 className="font-serif text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="text-balance">Paavai</span>
          </h1>
          
          <p className="mt-2 font-serif text-2xl italic text-muted-foreground md:text-3xl">
            Means Beautiful Girl
          </p>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-foreground/80">
            Discover the timeless elegance of Jaipuri ethnic wear. From exquisite 
            kurtis to stunning sarees, every piece tells a story of tradition and craftsmanship.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90">
              <Link href="/collections">
                Explore Collections
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary/30 px-8 hover:bg-primary/10">
              <Link href="/contact">
                Visit Our Store
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-muted-foreground">SCROLL</span>
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-20 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/store-interior.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20">
          <MapPin className="h-8 w-8 text-primary-foreground" />
        </div>

        <h2 className="font-serif text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="text-balance">Visit Our Store in Jaipur</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
          Experience the beauty of our collection in person. Our knowledgeable 
          staff is ready to help you find the perfect ethnic wear for any occasion.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:mt-10 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg" className="min-h-11 w-full rounded-full bg-primary-foreground px-8 text-primary hover:bg-primary-foreground/90 sm:w-auto">
            <Link href="/contact">
              Get Directions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-h-11 w-full rounded-full border-primary-foreground/30 px-8 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
            <Link href="/collections">
              Browse Collections
            </Link>
          </Button>
        </div>

        <p className="mt-8 text-sm text-primary-foreground/60">
          Open Monday - Saturday: 11:00 AM - 9:00 PM | Sunday: 11:00 AM - 8:00 PM
        </p>
      </div>
    </section>
  )
}

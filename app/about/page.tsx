import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Heart, Users, Gem, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Paavai Jaipur",
  description: "Learn about Paavai - a Jaipur-based boutique celebrating the timeless beauty of Jaipuri ethnic wear. Discover our story and commitment to quality.",
}

const values = [
  {
    icon: Heart,
    title: "Passion for Tradition",
    description: "We preserve and celebrate the rich heritage of Rajasthani textiles and craftsmanship in every piece we offer.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We provide personalized service to help you find the perfect outfit.",
  },
  {
    icon: Gem,
    title: "Quality Assured",
    description: "Every item is carefully selected for its quality, ensuring you receive only the finest ethnic wear.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Our Story
              </p>
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                <span className="text-balance">The Heart of Paavai</span>
              </h1>
              
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  <strong className="text-foreground">Paavai</strong> — a Tamil word meaning 
                  &ldquo;beautiful girl&rdquo; — embodies the essence of grace and elegance that 
                  we bring to every customer who walks through our doors.
                </p>
                <p>
                  Nestled in the vibrant streets of Jaipur, the Pink City known for its rich 
                  artistic heritage, Paavai was born from a simple dream: to bring the 
                  timeless beauty of Jaipuri ethnic wear to women who appreciate quality 
                  and tradition.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/store-interior.jpg"
                alt="Inside Paavai boutique Jaipur"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-6 py-3">
            <span className="font-serif text-lg text-primary">पावई • Paavai</span>
          </div>
          
          <h2 className="mt-8 font-serif text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">The Meaning Behind Our Name</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            In Tamil culture, &ldquo;Paavai&rdquo; is a term of endearment used to describe 
            a beautiful, graceful girl. We chose this name because we believe every woman 
            who wears our clothing should feel beautiful, confident, and celebrated. 
            Just as the word carries warmth and affection, we aim to create that same 
            feeling with every piece in our collection.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">Our Values</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-background p-8 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-4 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Identity */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
                Proudly Jaipur
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">A Local Boutique with Heart</span>
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  As a Jaipur-based boutique, we take immense pride in our city&apos;s artistic 
                  legacy. The Pink City has been a center of textile excellence for centuries, 
                  and we continue this tradition by working closely with local artisans.
                </p>
                <p>
                  When you shop at Paavai, you&apos;re not just buying clothing — you&apos;re 
                  supporting local craftspeople and helping preserve traditional techniques 
                  like block printing, hand embroidery, and tie-dye that have been passed 
                  down through generations.
                </p>
              </div>

              <Button asChild size="lg" className="mt-8 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  Visit Our Store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/kurtis.jpg"
                  alt="Jaipuri kurti craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/sarees.jpg"
                  alt="Traditional Jaipuri sarees"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
            <span className="text-balance">Your Trust is Our Greatest Asset</span>
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            For years, we&apos;ve built relationships with customers who return again 
            and again. Our commitment to quality, fair pricing, and genuine service 
            has made Paavai a trusted name in Jaipur&apos;s ethnic wear scene.
          </p>
        </div>
      </section>
    </div>
  )
}

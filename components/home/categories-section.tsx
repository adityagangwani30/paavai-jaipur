import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    title: "Kurtis",
    description: "Elegant everyday wear",
    image: "/images/kurtis.jpg",
    href: "/collections#kurtis",
  },
  {
    title: "Sarees",
    description: "Timeless grace",
    image: "/images/sarees.jpg",
    href: "/collections#sarees",
  },
  {
    title: "Ladies Suits",
    description: "Traditional elegance",
    image: "/images/suits.jpg",
    href: "/collections#suits",
  },
  {
    title: "Jewellery",
    description: "Artisan crafted",
    image: "/images/jewellery.jpg",
    href: "/collections#jewellery",
  },
  {
    title: "Bedsheets",
    description: "Jaipuri prints",
    image: "/images/bedsheets.jpg",
    href: "/collections#bedsheets",
  },
  {
    title: "Men&apos;s Kurtas",
    description: "Classic comfort",
    image: "/images/mens-kurtas.jpg",
    href: "/collections#mens-kurtas",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Our Collections
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Explore by Category</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted"
            >
              <Image
                src={category.image}
                alt={`${category.title} collection at Paavai Jaipur`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {category.title.replace("&apos;", "'")}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors group-hover:bg-white/30">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Collections | Paavai Jaipur",
  description: "Explore our curated collections of kurtis, sarees, suits, jewellery, bedsheets, and men's kurtas at Paavai Jaipur.",
}

const collections = [
  {
    id: "kurtis",
    title: "Kurtis",
    description: "Our kurti collection features the finest Jaipuri prints and embroidery. From casual everyday wear to elegant party pieces, find kurtis that blend comfort with style. Each piece showcases traditional block printing techniques passed down through generations.",
    images: [
      { src: "/images/kurtis.jpg", alt: "Jaipuri kurti collection" },
    ],
  },
  {
    id: "sarees",
    title: "Sarees",
    description: "Discover the timeless elegance of our saree collection. From silk to cotton, each saree tells a story of Rajasthani craftsmanship. Perfect for weddings, festivals, or adding grace to any special occasion.",
    images: [
      { src: "/images/sarees.jpg", alt: "Traditional sarees Jaipur" },
    ],
  },
  {
    id: "suits",
    title: "Ladies Suits",
    description: "Our ladies suits collection offers a perfect blend of tradition and contemporary style. Featuring intricate embroidery, premium fabrics, and beautiful dupattas that complete every look with elegance.",
    images: [
      { src: "/images/suits.jpg", alt: "Ladies suits collection Jaipur" },
    ],
  },
  {
    id: "jewellery",
    title: "Artificial Jewellery",
    description: "Adorn yourself with our stunning collection of artificial jewellery. From kundan sets to oxidized pieces, our jewellery complements every outfit. Crafted to perfection, each piece adds the perfect finishing touch.",
    images: [
      { src: "/images/jewellery.jpg", alt: "Indian artificial jewellery" },
    ],
  },
  {
    id: "bedsheets",
    title: "Bedsheets",
    description: "Bring the beauty of Jaipur into your home with our hand block-printed bedsheets. Made from premium cotton with traditional Jaipuri prints, these bedsheets add warmth and character to any bedroom.",
    images: [
      { src: "/images/bedsheets.jpg", alt: "Jaipuri block print bedsheets" },
    ],
  },
  {
    id: "mens-kurtas",
    title: "Men's Short Kurtas",
    description: "Classic comfort meets traditional style in our men's kurta collection. Perfect for festivals, family gatherings, or casual ethnic wear. Each kurta features quality cotton fabric and subtle embroidery details.",
    images: [
      { src: "/images/mens-kurtas.jpg", alt: "Men's short kurtas collection" },
    ],
  },
]

export default function CollectionsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-card py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Our Collections
          </p>
          <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-balance">Explore Our Curated Selection</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Each piece in our collection is handpicked for its quality, craftsmanship, 
            and authentic Jaipuri heritage. Discover something beautiful today.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                id={collection.id}
                className="scroll-mt-28"
              >
                <div className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative aspect-[4/5] overflow-hidden rounded-2xl ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={collection.images[0].src}
                      alt={collection.images[0].alt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:pr-12" : "lg:pl-12"}>
                    <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                      Collection {String(index + 1).padStart(2, "0")}
                    </div>
                    
                    <h2 className="mt-6 font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                      {collection.title}
                    </h2>

                    <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                      {collection.description}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-px flex-1 bg-border" />
                      <span className="text-sm text-muted-foreground">Visit store to explore</span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
            <span className="text-balance">Want to see more?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Visit our store in Jaipur to explore our complete collection and receive 
            personalized styling assistance from our team.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            Visit Our Store
          </a>
        </div>
      </section>
    </div>
  )
}

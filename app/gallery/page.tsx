"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/hero-jaipuri.jpg",
    alt: "Traditional Jaipuri ethnic wear",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/kurtis.jpg",
    alt: "Jaipuri kurti collection",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/sarees.jpg",
    alt: "Traditional sarees Jaipur",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Elegant ethnic wear showcase",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/suits.jpg",
    alt: "Ladies suits collection",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Colorful Jaipuri dupattas",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/jewellery.jpg",
    alt: "Indian artificial jewellery",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Intricate embroidery work",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Traditional bridal wear",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/images/bedsheets.jpg",
    alt: "Jaipuri block print bedsheets",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Colorful Jaipuri fabrics",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/mens-kurtas.jpg",
    alt: "Men's short kurtas",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Traditional kundan jewellery",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/store-interior.jpg",
    alt: "Inside Paavai boutique",
    span: "col-span-2 row-span-1",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Visual Journey
          </p>
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Our Gallery</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A glimpse into the world of Paavai. Explore our beautiful collection 
            of ethnic wear, jewellery, and the artistry that goes into every piece.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image.src)}
                className={`group relative overflow-hidden rounded-xl ${image.span} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/20" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-background/20 p-2 text-background transition-colors hover:bg-background/30"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={selectedImage}
              alt="Gallery image"
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            <span className="text-balance">See More in Person</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Photos can only capture so much. Visit our store in Jaipur to experience 
            the true beauty and quality of our collection.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Visit Our Store
          </a>
        </div>
      </section>
    </div>
  )
}

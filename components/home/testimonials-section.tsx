import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Jaipur",
    rating: 5,
    text: "Paavai has the most beautiful collection of kurtis I&apos;ve ever seen. The quality is exceptional and the staff is so helpful. This is now my go-to store for ethnic wear!",
  },
  {
    name: "Anjali Gupta",
    location: "Delhi",
    rating: 5,
    text: "I visited Paavai while on vacation in Jaipur and was blown away. The sarees are stunning and the prices are very reasonable. Highly recommend!",
  },
  {
    name: "Meera Patel",
    location: "Mumbai",
    rating: 5,
    text: "Found the perfect wedding outfit at Paavai. The attention to detail in their collection is remarkable. Will definitely visit again!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">What Our Customers Say</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-card p-8 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-6 text-foreground/80">
                &ldquo;{testimonial.text.replace(/&apos;/g, "'")}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-border pt-6">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

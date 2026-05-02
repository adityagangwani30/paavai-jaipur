import type { Metadata } from "next"
import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react"
import { ReviewsSection } from "@/components/reviews-section"

export const metadata: Metadata = {
  title: "Contact Us | Paavai Jaipur - Bapu Bazar",
  description: "Visit Paavai boutique at Shop No. 68, Bapu Bazar, Pink City, Jaipur. Find our location, store hours, phone number, and directions. We're located in the heart of Jaipur's shopping district.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Shop No. 68, Bapu Bazar", "Pink City, Jaipur", "Rajasthan 302003, India"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210"],
  },
  {
    icon: Clock,
    title: "Store Hours",
    details: [
      "Monday - Saturday: 10:00 AM - 8:00 PM",
      "Sunday: 11:00 AM - 6:00 PM",
    ],
  },
]

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-balance">Visit Our Store</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We&apos;d love to welcome you to Paavai. Come experience our beautiful 
            collection of ethnic wear and receive personalized styling assistance.
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                Contact Information
              </h2>
              
              <div className="mt-8 space-y-8">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.details.map((detail, index) => (
                        <p key={index} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-12 rounded-2xl bg-[#25D366]/10 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Chat with Us</h3>
                    <p className="text-sm text-muted-foreground">
                      Have questions? Reach out on WhatsApp!
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/919876543210?text=Hello!%20I'm%20interested%20in%20your%20collections%20at%20Paavai."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#25D366]/90"
                >
                  Start Chat
                </a>
              </div>

              {/* Get Directions */}
              <div className="mt-8 rounded-2xl bg-primary/10 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <Navigation className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Get Directions</h3>
                    <p className="text-sm text-muted-foreground">
                      Need directions? Open in Google Maps
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/RcFqsdWz2671kHAfA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Open Map
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.837265943945!2d75.81748397614635!3d26.92389487017205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4c8e3d0d0001%3A0xd1e3c3b3c3b3c3b3!2sShop%20No.%2068%2C%20Bapu%20Bazar%2C%20Pink%20City%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1699000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Paavai Boutique Location - Shop No. 68, Bapu Bazar, Jaipur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
            <span className="text-balance">We Look Forward to Meeting You</span>
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Whether you&apos;re looking for the perfect outfit for a special occasion 
            or just want to browse our beautiful collection, our doors are always open.
          </p>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from "next"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { ReviewsSection } from "@/components/reviews-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CallButton } from "@/components/call-button"
import { STORE_PHONE_DISPLAY } from "@/lib/contact"

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
    details: [STORE_PHONE_DISPLAY],
  },
  {
    icon: Clock,
    title: "Store Hours",
    details: [
      "Monday - Saturday: 11:00 AM - 9:00 PM",
      "Sunday: 11:00 AM - 8:00 PM",
    ],
  },
]

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-card py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Get in Touch
          </p>
          <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-balance">Visit Our Store</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            We&apos;d love to welcome you to Paavai. Come experience our beautiful 
            collection of ethnic wear and receive personalized styling assistance.
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <WhatsAppButton floating={false} iconOnly className="h-auto min-h-0 bg-transparent p-0 shadow-none hover:bg-transparent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Chat with Us</h3>
                    <p className="text-sm text-muted-foreground">
                      Have questions? Reach out on WhatsApp!
                    </p>
                  </div>
                </div>
                <WhatsAppButton floating={false} label="Start Chat" className="mt-4 min-h-11 w-full sm:w-auto" />
              </div>

              {/* Call CTA */}
              <div className="mt-8 rounded-2xl bg-primary/10 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call the Store</h3>
                    <p className="text-sm text-muted-foreground">
                      Speak to our team instantly for quick assistance.
                    </p>
                  </div>
                </div>
                <CallButton className="mt-4 min-h-11 w-full sm:w-auto" />
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
                  className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
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
                style={{ border: 0, minHeight: "320px" }}
                className="sm:min-h-[450px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Paavai - Shop No. 68, Bapu Bazar, Jaipur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-xl font-bold text-primary-foreground sm:text-2xl md:text-3xl">
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

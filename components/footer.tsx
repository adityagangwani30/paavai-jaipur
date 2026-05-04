import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

const collections = [
  { href: "/collections#kurtis", label: "Kurtis" },
  { href: "/collections#sarees", label: "Sarees" },
  { href: "/collections#suits", label: "Ladies Suits" },
  { href: "/collections#jewellery", label: "Jewellery" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary">Paavai</h2>
              <p className="text-sm tracking-widest text-muted-foreground">JAIPUR</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A boutique celebrating the timeless beauty of Jaipuri ethnic wear. 
              Discover elegance in every thread.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">Collections</h3>
            <ul className="space-y-3">
              {collections.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Shop No. 68, Bapu Bazar, Pink City, Jaipur, Rajasthan 302003</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+91 98290 32007</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Mon - Sat: 11:00 AM - 9:00 PM<br />Sunday: 11:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Paavai. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with love in Jaipur
          </p>
        </div>
      </div>
    </footer>
  )
}

import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { STORE_CALL_URL } from "@/lib/contact"

type CallButtonProps = {
  floating?: boolean
  className?: string
  label?: string
}

export function CallButton({
  floating = false,
  className,
  label = "Call Now",
}: CallButtonProps) {
  return (
    <a
      href={STORE_CALL_URL}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-medium transition-all",
        floating
          ? "fixed bottom-5 left-4 z-50 h-14 w-14 bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(217,109,138,0.35)] hover:scale-105 hover:bg-primary/90 sm:bottom-6 sm:left-6"
          : "bg-primary px-6 py-2.5 text-sm text-primary-foreground shadow-sm hover:bg-primary/90",
        className
      )}
      aria-label={floating ? "Call Paavai" : label}
      title={floating ? "Call Paavai" : label}
    >
      <Phone className="h-5 w-5" />
      {!floating && <span>{label}</span>}
    </a>
  )
}

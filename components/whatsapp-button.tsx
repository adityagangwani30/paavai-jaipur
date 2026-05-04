import { cn } from "@/lib/utils"
import { STORE_WHATSAPP_URL } from "@/lib/contact"

type WhatsAppButtonProps = {
  floating?: boolean
  className?: string
  label?: string
  iconOnly?: boolean
}

export function WhatsAppButton({
  floating = true,
  className,
  label = "Start Chat",
  iconOnly = false,
}: WhatsAppButtonProps) {
  return (
    <a
      href={STORE_WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full font-medium transition-all",
        floating
          ? "fixed bottom-5 right-4 z-50 h-14 w-14 bg-[#25D366] text-white shadow-[0_10px_30px_rgba(217,109,138,0.35)] hover:scale-105 hover:brightness-95 sm:bottom-6 sm:right-6"
          : "bg-[#25D366] px-6 py-2.5 text-sm text-white shadow-sm hover:bg-[#25D366]/90",
        className
      )}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M19.11 17.21c-.28-.14-1.63-.8-1.88-.89-.25-.09-.43-.14-.62.14-.18.28-.71.89-.87 1.07-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.36-.82-.73-1.38-1.63-1.54-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.49-.85-2.04-.22-.54-.45-.47-.62-.48h-.53c-.18 0-.46.07-.7.35-.24.28-.92.9-.92 2.2s.94 2.56 1.07 2.74c.13.18 1.86 2.84 4.5 3.98.63.27 1.13.44 1.52.56.64.2 1.22.17 1.68.1.51-.08 1.63-.67 1.86-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.18-.54-.32z"
        />
        <path
          fill="currentColor"
          d="M16.03 5.33c-5.87 0-10.64 4.77-10.64 10.64 0 1.87.49 3.7 1.42 5.31L5.33 26.67l5.53-1.45a10.6 10.6 0 005.17 1.35c5.87 0 10.64-4.77 10.64-10.64S21.9 5.33 16.03 5.33zm0 19.53c-1.63 0-3.22-.44-4.62-1.27l-.33-.2-3.29.86.88-3.21-.21-.33a8.88 8.88 0 01-1.37-4.74c0-4.93 4.01-8.94 8.94-8.94 2.39 0 4.64.93 6.33 2.62a8.89 8.89 0 012.62 6.33c0 4.93-4.01 8.94-8.95 8.94z"
        />
      </svg>
      {!floating && !iconOnly && <span>{label}</span>}
    </a>
  )
}

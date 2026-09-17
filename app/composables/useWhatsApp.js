/**
 * WhatsApp helpers — the single source for building conversion links.
 *
 * The number is NOT hardcoded: it comes from Nuxt runtime config
 * (`NUXT_PUBLIC_WHATSAPP_NUMBER` → `useRuntimeConfig().public.whatsappNumber`).
 */
export function useWhatsApp() {
  const config = useRuntimeConfig()

  const DEFAULT_MESSAGE =
    'السلام عليكم، أريد معرفة البرنامج المناسب لطفلي في أكاديمية سنـايا.'

  const normalizeNumber = (number) =>
    String(number || '')
      .replace(/[\s\-+()]/g, '')
      .replace(/^0+/, '')

  const whatsappNumber = normalizeNumber(config.public.whatsappNumber)

  function whatsappLink(message = DEFAULT_MESSAGE) {
    if (!whatsappNumber) {
      return '#'
    }
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  }

  return { whatsappNumber, whatsappLink, defaultMessage: DEFAULT_MESSAGE }
}
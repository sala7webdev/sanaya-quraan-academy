/**
 * Tracks whether the window has scrolled past a given vertical threshold.
 * Used by the header (scroll state) and the mobile sticky CTA.
 */
export function useScrollPast(threshold = 24) {
  const isPast = ref(false)

  let handler = null

  onMounted(() => {
    if (import.meta.server) {
      return
    }

    handler = () => {
      isPast.value = window.scrollY > threshold
    }
    handler()

    window.addEventListener('scroll', handler, { passive: true })
  })

  onBeforeUnmount(() => {
    if (handler) {
      window.removeEventListener('scroll', handler)
    }
  })

  return { isPast }
}
/**
 * Scroll-reveal intersection handling — the single observer engine for the
 * whole site (used by `UiReveal` and the QuranJourney path draw).
 *
 * Replaces framer-motion's `whileInView`: elements fade/translate in once
 * they enter the viewport, honoring `prefers-reduced-motion` by resolving
 * immediately. Fires `onVisible` whenever the visible state changes so the
 * caller can bind it to classes/styles.
 */
export function useScrollReveal(
  target,
  { once = true, threshold = 0.15, rootMargin = '0px 0px -10% 0px', onVisible } = {}
) {
  const isVisible = ref(false)
  let observer = null

  const resolve = () => {
    if (typeof target === 'function') {
      return target()
    }
    if (target && typeof target === 'object' && 'value' in target) {
      return target.value
    }
    return target
  }

  const setVisible = (value) => {
    if (isVisible.value === value) {
      return
    }
    isVisible.value = value
    onVisible?.(value)
  }

  const activate = () => {
    if (import.meta.server) {
      return
    }

    const el = resolve()
    if (!el) {
      setVisible(true)
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) {
              observer.disconnect()
            }
          } else if (!once) {
            setVisible(false)
          }
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
  }

  const stop = () => {
    observer?.disconnect()
    observer = null
  }

  return { isVisible, activate, stop }
}
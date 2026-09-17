<script setup>
/**
 * Scroll-reveal wrapper — the single animation primitive for the site.
 * Bakes the hidden state into SSR markup (no flash above the fold, no
 * hydration mismatch), then an IntersectionObserver flips `reveal-visible`
 * once the element enters the viewport. Honors `prefers-reduced-motion`.
 *
 * Usage:
 *   <UiReveal variant="fade-up" :delay="120">…</UiReveal>
 */
const props = defineProps({
  variant: {
    type: String,
    default: 'fade-up',
    validator: (value) =>
      ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'fade', 'scale'].includes(value)
  },
  delay: {
    type: Number,
    default: 0
  },
  amount: {
    type: Number,
    default: 0.15
  },
  className: {
    type: String,
    default: ''
  }
})

const isVisible = ref(false)
const root = ref(null)

const { activate, stop } = useScrollReveal(root, {
  threshold: props.amount,
  onVisible: (value) => {
    isVisible.value = value
  }
})

onMounted(() => activate())
onBeforeUnmount(() => stop())
</script>

<template>
  <div
    ref="root"
    :style="{ '--reveal-delay': `${props.delay}ms` }"
    :class="[`reveal reveal-${props.variant}`, className, { 'reveal-visible': isVisible }]">
    <slot />
  </div>
</template>
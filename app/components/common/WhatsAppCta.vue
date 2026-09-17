<script setup>
/**
 * The reusable WhatsApp conversion button.
 * Mirrors the React `WhatsAppCta` variants: solid / ivory / compact.
 * Extra classes passed by callers fall through to the root anchor.
 */
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'solid',
    validator: (value) => ['solid', 'ivory', 'compact'].includes(value)
  },
  showIcon: {
    type: Boolean,
    default: true
  }
})

const { whatsappLink } = useWhatsApp()

const variantClasses = {
  solid: 'bg-green-600 text-sand-50 px-7 py-4 text-base shadow-soft hover:bg-green-700 hover:shadow-lifted',
  ivory:
    'bg-sand-50 text-green-700 px-7 py-4 text-base shadow-soft hover:bg-white hover:shadow-lifted',
  compact: 'bg-green-600 text-sand-50 px-5 py-2.5 text-sm hover:bg-green-700'
}
</script>

<template>
  <a
    :href="whatsappLink()"
    target="_blank"
    rel="noopener noreferrer"
    class="sanaya-focus inline-flex items-center justify-center gap-2.5 font-semibold rounded-full transition-[transform,background-color,box-shadow] duration-150 ease-calm active:scale-[0.98]"
    :class="variantClasses[props.variant]">
    <Icon
      v-if="props.showIcon"
      name="lucide:message-circle"
      class="h-[1.15em] w-[1.15em]"
      aria-hidden="true" />
    <span>{{ props.label }}</span>
  </a>
</template>
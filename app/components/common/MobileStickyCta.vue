<script setup>
import { PRIMARY_CTA } from '~/data/content'

const { isPast: visible } = useScrollPast(640)
</script>

<template>
  <div
    class="fixed inset-x-0 bottom-0 z-40 border-t border-sand-200 bg-sand-50/95 px-4 py-3 backdrop-blur-md transition-[transform,opacity] duration-200 ease-calm lg:hidden"
    :class="visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'">
    <WhatsAppCta :label="PRIMARY_CTA" class="w-full py-3.5 text-[0.95rem]" />
  </div>
</template>
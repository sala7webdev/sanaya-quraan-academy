<script setup>
import { PRIMARY_CTA } from '~/data/content'
</script>

<template>
  <section
    id="final-cta"
    class="relative overflow-hidden bg-green-600 py-20 text-sand-50 lg:py-28">
    <div
      aria-hidden="true"
      class="sanaya-texture pointer-events-none absolute inset-0 opacity-[0.15]" />

    <UiReveal variant="fade" :delay="100" class="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full">
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 200"
        class="h-full w-full opacity-40"
        preserveAspectRatio="none">
        <path
          d="M0 140 C 240 60, 460 200, 700 110 S 1020 20, 1200 90"
          fill="none"
          stroke="rgba(214,178,99,0.5)"
          stroke-width="2"
          stroke-dasharray="6 10" />
      </svg>
    </UiReveal>

    <div class="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
      <UiReveal>
        <h2 class="text-3xl font-bold leading-[1.45] sm:text-5xl sm:leading-[1.35]">
          كل رحلة عظيمة تبدأ بخطوة
        </h2>
      </UiReveal>
      <UiReveal :delay="100">
        <p class="mx-auto mt-6 max-w-2xl text-base leading-[1.95] text-sand-100/85 sm:text-lg">
          ابدئي اليوم رحلة طفلك مع القرآن، ودعي سنـايا تساعدك في اختيار البداية المناسبة له.
        </p>
      </UiReveal>
      <UiReveal variant="scale" :delay="200">
        <div class="mt-10 flex flex-col items-center gap-3">
          <WhatsAppCta :label="PRIMARY_CTA" variant="ivory" class="w-full sm:w-auto" />
          <p class="text-sm text-sand-100/70">التواصل عبر WhatsApp</p>
        </div>
      </UiReveal>
    </div>
  </section>
</template>
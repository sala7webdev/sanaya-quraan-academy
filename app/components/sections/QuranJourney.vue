<script setup>
import { journeyStages } from '~/data/content'

const PATH = 'M 20 150 C 180 40, 300 240, 460 130 S 760 30, 960 160 S 1140 230, 1180 120'

const pathTarget = ref(null)
const { isVisible: pathVisible, activate: revealPath } = useScrollReveal(pathTarget, {
  threshold: 0.4
})

onMounted(() => revealPath())
</script>

<template>
  <section
    id="journey"
    class="relative overflow-hidden bg-green-700 py-20 text-sand-50 lg:py-28">
    <div
      aria-hidden="true"
      class="sanaya-texture pointer-events-none absolute inset-0 opacity-[0.18]" />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-400/20" />

    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <UiReveal class="max-w-2xl text-right">
        <span class="text-sm font-medium text-gold-200">الرحلة</span>
      </UiReveal>
      <UiReveal :delay="80" class="max-w-2xl text-right">
        <h2 class="mt-3 text-3xl font-bold sm:text-4xl">رحلة طفلك مع القرآن</h2>
      </UiReveal>
      <UiReveal :delay="160" class="max-w-2xl text-right">
        <p class="mt-4 text-lg leading-[1.9] text-sand-100/85">
          نتعلم، نحفظ، نُسمّع، نتقن... ثم نواصل الرحلة.
        </p>
      </UiReveal>

      <!-- Desktop: curved path -->
      <UiReveal variant="fade" :delay="200" class="mt-16 hidden lg:block">
        <div ref="pathTarget" class="relative">
          <svg
            viewBox="0 0 1200 280"
            class="h-[280px] w-full"
            role="img"
            aria-label="مسار منحني يمثل مراحل رحلة الطفل الست">
            <path
              :d="PATH"
              class="journey-path"
              :class="{ 'journey-path--drawn': pathVisible }"
              fill="none"
              stroke="rgba(214, 178, 99, 0.55)"
              stroke-width="2.5"
              stroke-dasharray="5000 5000"
              stroke-linecap="round" />
          </svg>

          <ol class="absolute inset-0 grid grid-cols-6" dir="rtl">
            <li
              v-for="(stage, i) in journeyStages"
              :key="stage.num"
              class="flex flex-col items-center px-2"
              :class="i % 2 === 0 ? 'justify-start pt-1' : 'justify-end pb-1'">
              <UiReveal
                :delay="160 + i * 60"
                class="flex flex-col items-center text-center">
                <span class="flex h-12 w-12 items-center justify-center rounded-full border border-gold-300/50 bg-green-600 text-sm font-semibold text-gold-200">
                  {{ stage.num }}
                </span>
                <h3 class="mt-4 text-xl font-bold">{{ stage.title }}</h3>
                <p class="mt-2 max-w-[11rem] text-sm leading-[1.8] text-sand-100/75">
                  {{ stage.note }}
                </p>
              </UiReveal>
            </li>
          </ol>
        </div>
      </UiReveal>

      <!-- Mobile / tablet: vertical journey -->
      <ol class="mt-12 space-y-0 lg:hidden">
        <li
          v-for="(stage, i) in journeyStages"
          :key="stage.num"
          class="relative pb-8 last:pb-0">
          <span
            v-if="i < journeyStages.length - 1"
            aria-hidden="true"
            class="absolute top-12 h-[calc(100%-3rem)] w-px border-e border-dashed border-gold-300/45 right-6" />
          <UiReveal :delay="i * 80" class="flex gap-5">
            <span class="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-300/50 bg-green-600 text-sm font-semibold text-gold-200">
              {{ stage.num }}
            </span>
            <div class="pt-1.5">
              <h3 class="text-lg font-bold">{{ stage.title }}</h3>
              <p class="mt-1.5 text-sm leading-[1.9] text-sand-100/75">{{ stage.note }}</p>
            </div>
          </UiReveal>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
/* Path entrance — replaces framer-motion's `pathLength` draw.
   The dash pattern (`5000 5000`, longer than the path) renders the whole
   curve as one segment; animating `stroke-dashoffset: 5000 → 0` sweeps
   the line in from its start, mirroring the framer-motion draw. */
.journey-path {
  stroke-dasharray: 5000 5000;
  stroke-dashoffset: 5000;
  transition: stroke-dashoffset 1.1s linear;
}

.journey-path--drawn {
  stroke-dashoffset: 0;
}
</style>
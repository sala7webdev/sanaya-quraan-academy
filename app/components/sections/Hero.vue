<script setup>
import { PRIMARY_CTA, SECONDARY_CTA } from '~/data/content'
</script>

<template>
  <section id="hero" class="relative overflow-hidden bg-sand-50 pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
    <div
      aria-hidden="true"
      class="sanaya-texture pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-60" />

    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-sage-100 opacity-70 blur-[2px]" />

    <div class="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      <div class="text-right">
        <UiReveal>
          <span class="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-green-600">
            أكاديمية قرآن أونلاين للأطفال
          </span>
        </UiReveal>

        <UiReveal :delay="80">
          <h1 class="mt-6 text-[2.1rem] font-bold leading-[1.28] text-green-700 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.22]">
            ساعدي طفلك على بناء
            <br class="hidden sm:block" />
            علاقة <span class="relative inline-block">
              <span class="relative z-10">جميلة</span>
              <span
                aria-hidden="true"
                class="absolute inset-x-[-4px] bottom-1 z-0 h-3 rounded-full bg-gold-100" />
            </span>
            مع القرآن
          </h1>
        </UiReveal>

        <UiReveal :delay="180">
          <p class="mt-6 max-w-xl text-base leading-[1.95] text-ink-soft sm:text-lg">
            تعليم القرآن للأطفال بأسلوب مبسط ومناسب لكل مرحلة عمرية، مع التركيز على الحفظ المتقن
            والتعلم الصحيح على يد معلمين مؤهلين.
          </p>
        </UiReveal>

        <UiReveal :delay="280">
          <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppCta :label="PRIMARY_CTA" class="w-full sm:w-auto" />
            <a
              href="#learning"
              class="sanaya-focus group inline-flex w-full items-center justify-center gap-2 rounded-full border border-green-200 px-7 py-4 text-base font-semibold text-green-700 transition-colors duration-150 ease-calm hover:bg-sage-100 sm:w-auto">
              {{ SECONDARY_CTA }}
              <Icon
                name="lucide:arrow-left"
                class="h-4 w-4 transition-transform duration-150 ease-calm group-hover:-translate-x-1"
                aria-hidden="true" />
            </a>
          </div>
        </UiReveal>

        <UiReveal :delay="360">
          <p class="mt-5 text-sm text-ink-muted">
            الجلسات أونلاين عبر Zoom أو Google Meet — والتواصل يبدأ عبر واتساب.
          </p>
        </UiReveal>
      </div>

      <UiReveal variant="scale" :delay="440" class="relative">
        <div class="relative overflow-hidden rounded-[2.75rem] border border-sand-200 bg-white shadow-lifted">
          <img
            src="/images/e14ef54b-ef9e-4a88-8dd8-dd843451f576.jpg"
            alt="رسم توضيحي لطفل يقرأ في المصحف ومن خلفه مسار مضيء يمثل رحلة تعلم القرآن"
            class="h-full w-full object-cover"
            loading="eager"
            fetchpriority="high" />
        </div>

        <div class="absolute -bottom-5 right-5 rounded-3xl border border-sand-200 bg-sand-50 px-5 py-3 shadow-soft sm:right-8">
          <p class="text-xs text-ink-muted">المرحلة العمرية</p>
          <p class="mt-1 text-sm font-semibold text-green-700">من 4 إلى 14 سنة</p>
        </div>
      </UiReveal>
    </div>
  </section>
</template>
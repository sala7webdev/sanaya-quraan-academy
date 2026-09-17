<script setup>
import { packages } from '~/data/content'
</script>

<template>
  <section class="bg-sand-100 py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <UiReveal class="max-w-2xl text-right">
        <h2 class="text-3xl font-bold text-green-700 sm:text-4xl">
          اختاري ما يناسب رحلة طفلك
        </h2>
      </UiReveal>
      <UiReveal :delay="100" class="max-w-2xl text-right">
        <p class="mt-4 text-base leading-[1.95] text-ink-soft">
          نعمل حاليًا على تجهيز تفاصيل البرامج والأسعار. تواصلي معنا ونساعدك في اختيار البداية
          المناسبة لطفلك.
        </p>
      </UiReveal>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <UiReveal
          v-for="(pkg, i) in packages"
          :key="pkg.name"
          :delay="i * 80">
          <article class="flex h-full flex-col rounded-organic border border-dashed border-sage-300 bg-sand-50 p-7 sm:p-8">
            <h3 class="text-2xl font-bold text-green-700">{{ pkg.name }}</h3>
            <p class="mt-2 text-sm text-ink-muted">{{ pkg.hint }}</p>

            <div class="mt-7 space-y-3" aria-hidden="true">
              <div class="h-3 w-3/4 rounded-full bg-sage-200" />
              <div class="h-3 w-1/2 rounded-full bg-sage-200/70" />
              <div class="h-3 w-2/3 rounded-full bg-sage-200/50" />
            </div>

            <div class="mt-7 flex items-center gap-2 rounded-2xl bg-sage-100 px-4 py-3 text-sm font-medium text-green-600">
              <Icon name="lucide:clock" class="h-4 w-4" aria-hidden="true" />
              {{ pkg.placeholder }}
            </div>

            <p class="mt-4 text-xs text-ink-muted">السعر سيتم تحديده</p>

            <div class="mt-auto pt-7">
              <WhatsAppCta
                label="اسألي عن هذا البرنامج"
                variant="ivory"
                :show-icon="false"
                class="w-full border border-green-200 py-3 text-sm" />
            </div>
          </article>
        </UiReveal>
      </div>
    </div>
  </section>
</template>
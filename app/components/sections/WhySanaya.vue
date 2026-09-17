<script setup>
import { whyCards } from '~/data/content'

const iconNames = {
  badge: 'lucide:shield-check',
  heart: 'lucide:heart-handshake',
  book: 'lucide:book-open',
  path: 'lucide:route',
  eye: 'lucide:eye'
}

const [feature, ...rest] = whyCards
</script>

<template>
  <section id="why" class="bg-sand-50 py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <UiReveal class="max-w-2xl text-right">
        <h2 class="text-3xl font-bold text-green-700 sm:text-4xl">لماذا سنـايا؟</h2>
      </UiReveal>
      <UiReveal :delay="100" class="max-w-2xl text-right">
        <p class="mt-4 text-lg leading-[1.9] text-ink-soft">
          لأن رحلة طفلك مع القرآن تستحق أكثر من مجرد حصة أسبوعية.
        </p>
      </UiReveal>

      <div class="mt-12 grid gap-5 lg:grid-cols-3">
        <!-- Lead card — carries the most weight -->
        <UiReveal :delay="80" class="lg:row-span-2">
          <article class="flex h-full flex-col rounded-organic bg-green-600 p-8 text-sand-50 shadow-lifted sm:p-10">
            <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12">
              <Icon :name="iconNames[feature.icon]" class="h-7 w-7 text-gold-200" aria-hidden="true" />
            </span>
            <h3 class="mt-7 text-2xl font-bold sm:text-3xl">{{ feature.title }}</h3>
            <p class="mt-4 text-base leading-[1.95] text-sand-100/90">{{ feature.text }}</p>
            <ul class="mt-auto space-y-2.5 pt-10 text-sm text-sand-100/85">
              <li>• إجازة في القرآن الكريم</li>
              <li>• شهادة في التجويد</li>
              <li>• خبرة في تعليم الأطفال</li>
            </ul>
          </article>
        </UiReveal>

        <UiReveal
          v-for="(card, i) in rest"
          :key="card.title"
          :delay="120 + i * 80">
          <article
            class="flex h-full flex-col rounded-organic border p-7 transition-[transform,box-shadow] duration-200 ease-calm hover:-translate-y-1 hover:shadow-lifted"
            :class="i % 3 === 1 ? 'border-sage-200 bg-sage-100' : 'border-sand-200 bg-white shadow-soft'">
            <span
              class="flex h-12 w-12 items-center justify-center rounded-2xl"
              :class="i % 3 === 1 ? 'bg-white' : 'bg-sage-100'">
              <Icon :name="iconNames[card.icon]" class="h-6 w-6 text-teal-400" aria-hidden="true" />
            </span>
            <h3 class="mt-6 text-xl font-bold text-green-700">{{ card.title }}</h3>
            <p class="mt-3 text-[0.95rem] leading-[1.9] text-ink-soft">{{ card.text }}</p>
          </article>
        </UiReveal>
      </div>
    </div>
  </section>
</template>
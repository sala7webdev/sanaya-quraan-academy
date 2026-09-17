<script setup>
import { reassuranceItems } from '~/data/content'
</script>

<template>
  <section class="relative overflow-hidden bg-sand-50 py-20 lg:py-28">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold-50" />

    <div class="relative mx-auto max-w-5xl px-5 sm:px-8">
      <UiReveal class="text-right">
        <p class="text-base font-medium text-teal-500">أنتِ لا تبحثين عن حصة فقط...</p>
      </UiReveal>
      <UiReveal :delay="100" class="text-right">
        <blockquote class="mt-6 max-w-4xl">
          <p class="text-[1.6rem] font-bold leading-[1.6] text-green-700 sm:text-4xl sm:leading-[1.55]">
            أنتِ تبحثين عن شخص تثقين به، وطريقة تناسب طفلك، ورحلة تستطيعين رؤية تقدمه فيها.
          </p>
        </blockquote>
      </UiReveal>

      <div class="mt-12 border-t border-sand-200 pt-10">
        <UiReveal>
          <h2 class="text-xl font-bold text-green-700">ستعرفين:</h2>
        </UiReveal>
        <ul class="mt-6 grid gap-x-10 gap-y-0 sm:grid-cols-2">
          <li
            v-for="(item, i) in reassuranceItems"
            :key="item">
            <UiReveal
              :delay="180 + i * 60"
              class="flex items-baseline gap-4 border-b border-dashed border-sand-200 py-4 text-base text-ink-soft sm:text-lg">
              <span class="text-sm font-semibold text-gold-400">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span>{{ item }}</span>
            </UiReveal>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
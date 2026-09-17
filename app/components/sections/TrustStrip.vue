<script setup>
import { trustStrip } from '~/data/content'
</script>

<template>
  <section aria-label="ما تقدمه سنـايا" class="border-y border-sand-200 bg-sand-100">
    <ul class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-6 sm:px-8">
      <li
        v-for="(item, i) in trustStrip"
        :key="item"
        class="flex items-center gap-10">
        <UiReveal :delay="i * 80">
          <span class="text-sm font-medium text-green-700 sm:text-[0.95rem]">{{ item }}</span>
        </UiReveal>
        <span
          v-if="i < trustStrip.length - 1"
          aria-hidden="true"
          class="hidden h-1.5 w-1.5 rounded-full bg-gold-300 sm:block" />
      </li>
    </ul>
  </section>
</template>
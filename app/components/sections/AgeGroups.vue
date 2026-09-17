<script setup>
import { ageGroups } from '~/data/content'

const looks = [
  {
    wrap: 'bg-gold-50 border-gold-100',
    chip: 'bg-gold-100 text-gold-500',
    tick: 'text-gold-400'
  },
  {
    wrap: 'bg-sage-100 border-sage-200',
    chip: 'bg-white text-teal-500',
    tick: 'text-teal-400'
  },
  {
    wrap: 'bg-white border-sand-200',
    chip: 'bg-green-50 text-green-600',
    tick: 'text-green-500'
  }
]
</script>

<template>
  <section class="bg-sand-50 py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <UiReveal class="max-w-2xl text-right">
        <h2 class="text-3xl font-bold text-green-700 sm:text-4xl">كل عمر له طريقته</h2>
      </UiReveal>
      <UiReveal :delay="100" class="max-w-2xl text-right">
        <p class="mt-4 text-lg leading-[1.9] text-ink-soft">
          لأن الطفل في الرابعة لا يتعلم بالطريقة نفسها التي يتعلم بها الطفل في الثانية عشرة.
        </p>
      </UiReveal>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <UiReveal
          v-for="(group, i) in ageGroups"
          :key="group.range"
          :delay="i * 80">
          <article
            class="flex h-full flex-col rounded-organic border p-7 shadow-soft transition-[transform,box-shadow] duration-200 ease-calm hover:-translate-y-1 hover:shadow-lifted sm:p-8"
            :class="looks[i].wrap">
            <span
              class="inline-flex w-fit rounded-full px-4 py-1.5 text-sm font-semibold"
              :class="looks[i].chip">
              {{ group.range }}
            </span>
            <h3 class="mt-6 text-2xl font-bold text-green-700">{{ group.title }}</h3>
            <ul class="mt-6 space-y-3 border-t border-black/5 pt-6">
              <li
                v-for="item in group.focus"
                :key="item"
                class="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                <Icon
                  name="lucide:check"
                  class="mt-1 h-4 w-4 shrink-0"
                  :class="looks[i].tick"
                  aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>
        </UiReveal>
      </div>
    </div>
  </section>
</template>
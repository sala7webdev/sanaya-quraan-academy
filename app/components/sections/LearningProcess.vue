<script setup>
import { learningSteps } from '~/data/content'
</script>

<template>
  <section id="learning" class="bg-sand-100 py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div class="text-right lg:sticky lg:top-28 lg:self-start">
        <UiReveal>
          <span class="text-sm font-medium text-teal-500">الجلسة</span>
        </UiReveal>
        <UiReveal :delay="80">
          <h2 class="mt-3 text-3xl font-bold text-green-700 sm:text-4xl">
            كيف تتم جلسة طفلك؟
          </h2>
        </UiReveal>
        <UiReveal :delay="160">
          <p class="mt-4 text-base leading-[1.95] text-ink-soft">
            كل جلسة تسير على ترتيب واضح، حتى يعرف الطفل ما ينتظره، ويعرف ولي الأمر ما تم إنجازه.
          </p>
        </UiReveal>
        <UiReveal :delay="240">
          <div class="mt-8 rounded-3xl border border-sand-200 bg-sand-50 p-6">
            <p class="text-sm font-semibold text-green-700">مدة الجلسة وعددها</p>
            <p class="mt-2 text-sm leading-[1.9] text-ink-muted">
              يتم تحديدها بعد تقييم مستوى الطفل واختيار البرنامج المناسب.
            </p>
          </div>
        </UiReveal>
      </div>

      <ol class="divide-y divide-sand-200 border-y border-sand-200">
        <li v-for="(step, i) in learningSteps" :key="step.title">
          <UiReveal
            :delay="i * 80"
            class="group grid grid-cols-[auto_1fr] items-start gap-5 py-6 sm:gap-8">
            <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-sage-100 text-base font-bold text-green-600 transition-colors duration-150 ease-calm group-hover:bg-green-600 group-hover:text-sand-50 sm:h-12 sm:w-12">
              {{ step.num }}
            </span>
            <div>
              <h3 class="text-lg font-bold text-green-700 sm:text-xl">{{ step.title }}</h3>
              <p class="mt-2 text-[0.95rem] leading-[1.9] text-ink-soft">{{ step.text }}</p>
            </div>
          </UiReveal>
        </li>
      </ol>
      </div>
    </div>
  </section>
</template>
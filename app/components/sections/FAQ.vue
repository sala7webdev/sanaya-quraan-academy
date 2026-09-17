<script setup>
import { faqs } from '~/data/content'

const openIndex = ref(0)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="bg-sand-50 py-20 lg:py-28">
    <div class="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
      <div class="text-right lg:sticky lg:top-28 lg:self-start">
        <UiReveal>
          <h2 class="text-3xl font-bold text-green-700 sm:text-4xl">أسئلة قد تدور في بالك</h2>
        </UiReveal>
        <UiReveal :delay="80">
          <p class="mt-4 text-base leading-[1.95] text-ink-soft">
            وإن لم تجدي سؤالك هنا، يمكنك سؤالنا مباشرة عبر واتساب.
          </p>
        </UiReveal>
      </div>

      <UiReveal variant="fade" :delay="80" class="divide-y divide-sand-200 border-y border-sand-200">
        <div v-for="(faq, i) in faqs" :key="faq.q">
          <UiReveal :delay="120 + i * 70">
            <h3>
              <button
                type="button"
                :aria-expanded="openIndex === i"
                :aria-controls="`faq-panel-${i}`"
                class="sanaya-focus flex w-full items-center justify-between gap-4 py-5 text-right"
                @click="toggle(i)">
                <span class="text-base font-semibold text-green-700 sm:text-lg">
                  {{ faq.q }}
                </span>
                <Icon
                  name="lucide:plus"
                  class="h-5 w-5 shrink-0 text-teal-400 transition-transform duration-150 ease-calm"
                  :class="openIndex === i ? 'rotate-45' : ''"
                  aria-hidden="true" />
              </button>
            </h3>

            <!-- Height animation via grid-template-rows: 0fr ↔ 1fr -->
            <div
              :id="`faq-panel-${i}`"
              class="grid transition-[grid-template-rows,opacity] duration-200 ease-calm"
              :class="openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
              <div class="overflow-hidden">
                <p class="pb-6 pe-10 text-[0.95rem] leading-[1.95] text-ink-soft">
                  {{ faq.a }}
                </p>
              </div>
            </div>
          </UiReveal>
        </div>
      </UiReveal>
    </div>
  </section>
</template>
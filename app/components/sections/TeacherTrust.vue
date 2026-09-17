<script setup>
import { teacherCredentials } from '~/data/content'

const tags = ['إجازة', 'شهادة تجويد', 'خبرة في التعليم', 'خبرة مع الأطفال']
const open = ref(false)

const toggle = () => {
  open.value = !open.value
}
</script>

<template>
  <section class="bg-sand-100 py-20 lg:py-28">
    <div class="mx-auto max-w-6xl px-5 sm:px-8">
      <UiReveal class="max-w-2xl text-right">
        <h2 class="text-3xl font-bold text-green-700 sm:text-4xl">
          لأن المعلم المناسب يصنع فرقًا
        </h2>
      </UiReveal>
      <UiReveal :delay="100" class="max-w-2xl text-right">
        <p class="mt-4 text-lg leading-[1.9] text-ink-soft">
          طفلك يستحق أن يتعلم على يد معلمة مؤهلة، خبيرة، وقادرة على التعامل مع احتياجاته
          التعليمية.
        </p>
      </UiReveal>

      <div class="mt-12 grid items-stretch gap-0 overflow-hidden rounded-[2.5rem] border border-sand-200 bg-sand-50 shadow-soft md:grid-cols-[0.8fr_1.2fr]">
        <UiReveal variant="fade-right" :delay="120" class="relative bg-sage-100">
          <img
            src="/images/a0309935-099f-4350-93fa-f3c6a4379f90.jpg"
            alt="صورة توضيحية للمعلمة — سيتم استبدالها بصورة المعلمة الفعلية"
            class="h-full w-full object-cover"
            loading="lazy" />
        </UiReveal>

        <UiReveal variant="fade-left" :delay="120" class="h-full">
          <div class="p-7 text-right sm:p-10">
            <span class="inline-flex rounded-full bg-green-50 px-3.5 py-1.5 text-xs font-medium text-green-600">
              معلمة القرآن
            </span>
            <h3 class="mt-5 text-2xl font-bold text-green-700 sm:text-3xl">اسم المعلمة</h3>
            <p class="mt-3 text-[0.95rem] leading-[1.95] text-ink-soft">
              معلمة مؤهلة لتعليم القرآن للأطفال، تعتمد على أسلوب هادئ يناسب عمر الطفل ومستواه،
              مع متابعة واضحة لولي الأمر.
            </p>

            <ul class="mt-7 flex flex-wrap gap-2">
              <li
                v-for="tag in tags"
                :key="tag"
                class="rounded-full border border-sage-200 bg-white px-3.5 py-1.5 text-sm text-ink-soft">
                {{ tag }}
              </li>
            </ul>

            <button
              type="button"
              :aria-expanded="open"
              aria-controls="teacher-credentials"
              class="sanaya-focus mt-7 inline-flex items-center gap-2 rounded-full border border-green-200 px-5 py-2.5 text-sm font-semibold text-green-700 transition-colors duration-150 ease-calm hover:bg-sage-100"
              @click="toggle">
              عرض المؤهلات
              <Icon
                name="lucide:chevron-down"
                class="h-4 w-4 transition-transform duration-150 ease-calm"
                :class="open ? 'rotate-180' : ''"
                aria-hidden="true" />
            </button>

            <!-- Height animation via grid-template-rows: 0fr ↔ 1fr -->
            <div
              id="teacher-credentials"
              class="grid transition-[grid-template-rows,opacity] duration-[0.22s] ease-calm"
              :class="open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
              <div class="overflow-hidden">
                <dl class="mt-6 divide-y divide-sand-200 border-t border-sand-200">
                  <div
                    v-for="credential in teacherCredentials"
                    :key="credential.title"
                    class="py-4">
                    <dt class="text-sm font-semibold text-green-700">{{ credential.title }}</dt>
                    <dd class="mt-1.5 text-sm leading-[1.85] text-ink-muted">
                      {{ credential.detail }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </UiReveal>
      </div>

      <UiReveal :delay="240">
        <p class="mt-8 text-center text-lg font-semibold text-green-600">
          طفلك بين يدي معلمة مؤهلة.
        </p>
      </UiReveal>
    </div>
  </section>
</template>
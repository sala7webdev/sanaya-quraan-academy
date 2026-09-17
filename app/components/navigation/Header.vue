<script setup>
import { navLinks } from '~/data/content'

const { isPast: scrolled } = useScrollPast(24)
const open = ref(false)

function closeMobileNav() {
  open.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-200 ease-calm"
    :class="scrolled ? 'bg-sand-50/90 backdrop-blur-md shadow-soft py-2' : 'bg-transparent py-4'">
    <div class="mx-auto flex max-w-7xl items-center gap-6 px-5 sm:px-8">
      <a href="#hero" class="sanaya-focus flex shrink-0 items-center gap-3">
        <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 text-lg font-bold text-sand-50">
          س
        </span>
        <span class="flex flex-col leading-none">
          <span class="text-lg font-bold text-green-700">سنـايا أكاديمي</span>
          <span class="mt-1 text-[10px] font-medium tracking-[0.18em] text-ink-muted">
            SANAYA ACADEMY
          </span>
        </span>
      </a>

      <nav aria-label="التنقل الرئيسي" class="hidden flex-1 justify-center lg:flex">
        <ul class="flex items-center gap-1">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="sanaya-focus block rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors duration-150 ease-calm hover:bg-sage-100 hover:text-green-700">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="ms-auto hidden lg:block">
        <WhatsAppCta label="ابدئي رحلة طفلك" variant="compact" :show-icon="false" />
      </div>

      <div class="ms-auto flex items-center gap-2 lg:hidden">
        <WhatsAppCta
          label="ابدئي"
          variant="compact"
          :show-icon="false"
          class="hidden sm:inline-flex" />

        <button
          type="button"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          :aria-label="open ? 'إغلاق القائمة' : 'فتح القائمة'"
          class="sanaya-focus flex h-11 w-11 items-center justify-center rounded-2xl border border-sage-200 bg-sand-50 text-green-700 transition-colors duration-150 ease-calm hover:bg-sage-100"
          @click="open = !open">
          <Icon :name="open ? 'lucide:x' : 'lucide:menu'" class="h-5 w-5" />
        </button>
      </div>
    </div>

    <nav
      v-if="open"
      id="mobile-nav"
      aria-label="التنقل على الجوال"
      class="mx-4 mt-3 rounded-4xl border border-sage-200 bg-sand-50 p-3 shadow-lifted lg:hidden">
      <ul class="flex flex-col">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="sanaya-focus block rounded-2xl px-4 py-3 text-base font-medium text-ink-soft transition-colors duration-150 ease-calm hover:bg-sage-100 hover:text-green-700"
            @click="closeMobileNav">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
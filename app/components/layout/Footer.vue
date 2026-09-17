<script setup>
import { footerLinks } from '~/data/content'

const { whatsappLink } = useWhatsApp()

const socials = [
  { label: 'فيسبوك', icon: 'lucide:facebook' },
  { label: 'إنستجرام', icon: 'lucide:instagram' },
  { label: 'يوتيوب', icon: 'lucide:youtube' }
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-sand-200 bg-sand-100 pb-24 pt-16 lg:pb-16">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <UiReveal>
          <div>
            <div class="flex items-center gap-3">
              <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 text-lg font-bold text-sand-50">
                س
              </span>
              <span class="flex flex-col leading-none">
                <span class="text-lg font-bold text-green-700">سنـايا أكاديمي</span>
                <span class="mt-1 text-[10px] font-medium tracking-[0.18em] text-ink-muted">
                  SANAYA ACADEMY
                </span>
              </span>
            </div>
            <p class="mt-5 max-w-sm text-[0.95rem] leading-[1.95] text-ink-soft">
              أكاديمية قرآن أونلاين للأطفال، تركّز على الحفظ المتقن بأسلوب يناسب كل مرحلة عمرية،
              على يد معلمين مؤهلين.
            </p>
            <ul class="mt-6 flex gap-2">
              <li v-for="social in socials" :key="social.label">
                <a
                  href="#hero"
                  :aria-label="`${social.label} — الرابط قريبًا`"
                  class="sanaya-focus flex h-10 w-10 items-center justify-center rounded-full border border-sage-200 bg-sand-50 text-green-600 transition-colors duration-150 ease-calm hover:bg-sage-100">
                  <Icon :name="social.icon" class="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </UiReveal>

        <UiReveal :delay="80">
          <nav aria-label="روابط الموقع">
            <h2 class="text-sm font-bold text-green-700">روابط</h2>
            <ul class="mt-5 space-y-3">
              <li v-for="link in footerLinks" :key="link.label">
                <a
                  :href="link.href"
                  class="sanaya-focus text-[0.95rem] text-ink-soft transition-colors duration-150 ease-calm hover:text-green-700">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>
        </UiReveal>

        <UiReveal :delay="160">
          <div>
            <h2 class="text-sm font-bold text-green-700">تواصل معنا</h2>
            <a
              :href="whatsappLink()"
              target="_blank"
              rel="noopener noreferrer"
              class="sanaya-focus mt-5 inline-flex items-center gap-2.5 rounded-full border border-green-200 bg-sand-50 px-5 py-3 text-sm font-semibold text-green-700 transition-colors duration-150 ease-calm hover:bg-sage-100">
              <Icon name="lucide:message-circle" class="h-4 w-4" aria-hidden="true" />
              رقم واتساب
            </a>
            <p class="mt-4 text-sm leading-[1.9] text-ink-muted">
              الجلسات أونلاين عبر Zoom أو Google Meet.
            </p>
          </div>
        </UiReveal>
      </div>

      <UiReveal :delay="200">
        <p class="mt-12 border-t border-sand-200 pt-6 text-center text-xs text-ink-muted">
          © {{ year }} سنـايا أكاديمي — جميع الحقوق محفوظة.
        </p>
      </UiReveal>
    </div>
  </footer>
</template>
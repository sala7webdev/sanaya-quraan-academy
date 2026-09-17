import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-16',

  modules: ['@nuxt/icon'],

  components: [{ path: '~/components', pathPrefix: false }],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl'
      },
      title: 'سنـايا أكاديمي — أكاديمية قرآن أونلاين للأطفال',
      meta: [
        {
          name: 'description',
          content:
            'أكاديمية قرآن أونلاين للأطفال، تركّز على الحفظ المتقن بأسلوب يناسب كل مرحلة عمرية، على يد معلمين مؤهلين.'
        },
        { name: 'theme-color', content: '#0f4c3a' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'سنـايا أكاديمي — أكاديمية قرآن أونلاين للأطفال' },
        {
          property: 'og:description',
          content:
            'ساعدي طفلك على بناء علاقة جميلة مع القرآن. جلسات أونلاين عبر Zoom أو Google Meet، والتواصل يبدأ عبر واتساب.'
        },
        { property: 'og:locale', content: 'ar_AR' },
        { name: 'twitter:card', content: 'summary' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel: 'canonical',
          href: 'https://sanaya.academy/'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
          crossorigin: ''
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap'
        }
      ],
      noscript: [
        {
          innerHTML:
            '.reveal{opacity:1!important;transform:none!important;transition:none!important;transition-delay:0ms!important}'
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      whatsappNumber: ''
    }
  }
})
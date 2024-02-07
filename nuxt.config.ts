export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    'nuxt-og-image'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  runtimeConfig: {
    public: {
      siteVersion: 'Alpha',
      siteTitle: 'Vue Hero',
      siteDescription: '日本語コミュニティのためのVue学習サイト',
      siteCopyright: {
        since: '2024',
        author: 'Nozomu Ikuta'
      }
    }
  }
})

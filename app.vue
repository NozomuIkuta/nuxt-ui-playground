<script setup lang="ts">
const siteTitle = useSiteTitle()
const siteVersion = useSiteVersion()
const siteCopyright = useSiteCopyright()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'ja'
  }
})

useSeoMeta({
  ogSiteName: siteTitle,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UHeader>
    <template #logo>
      {{ siteTitle }} <UBadge :label="siteVersion" variant="subtle" class="mb-0.5" />
    </template>
  </UHeader>

  <UMain>
    <NuxtPage />
  </UMain>

  <UFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        © {{ siteCopyright.since }} {{ siteCopyright.author }}
      </p>
    </template>

    <template #right>
      <UColorModeButton size="sm" />
    </template>
  </UFooter>
</template>

<script setup lang="ts">
interface CourseData {
  title: string
  description: string
  to: string
  icon: string
}

const siteTitle = useSiteTitle()
const siteDescription = useSiteDescription()

const { data: coursesPageDataRaw } = await useAsyncData('courses', () => queryContent('/courses').findOne())
const courses = computed<CourseData[]>(() => coursesPageDataRaw.value?.courses)

useSeoMeta({
  title: siteTitle,
  ogTitle: siteTitle,
  description: siteDescription,
  ogDescription: siteDescription
})
</script>

<template>
  <div>
    <ULandingHero
      :title="siteTitle"
      :description="siteDescription"
    />

    <UContainer>
      <UPageGrid>
        <UPageCard v-for="(course, index) in courses" :key="index" v-bind="course">
          <template #description>
            <span class="line-clamp-2">{{ course.description }}</span>
          </template>
        </UPageCard>
      </UPageGrid>
    </UContainer>
  </div>
</template>

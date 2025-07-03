<template>
  <section>
    <header class="bg-primary/10 py-20 text-secondary mb-6">
      <UContainer class="pt-20 pb-10">
        <UBreadcrumb :links="items" />
        <div>
          <h1 class="text-3xl mb-3 md:text-5xl leading-tight text-white font-bold">
            {{ page.title }}
          </h1>
          <p class="leading-tight text-white">
            {{ page.description }}
          </p>
        </div>
      </UContainer>
    </header>
    <section>
      <UContainer class="prose dark:prose-invert transition-colors duration-300">
        <ContentDoc />
      </UContainer>
    </section>
  </section>
</template>

<script setup lang="ts">
const {page} = useContent()
const items = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Services',
    to: '/services'
  },
  {
    label: page.value.title,
  }
]
</script>
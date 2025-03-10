<template>
  <header class="bg-primary/10 text-secondary mb-6">
    <UContainer class="py-10">
      <UBreadcrumb :links="items" />
      <div>
        <h1 class="font-bold text-3xl leading-tight">{{page.title}}</h1>
        <p class="leading-relaxed">{{page.description}}</p>
      </div>
    </UContainer>
  </header>
  <section>
    <UContainer class="prose">
      <ContentDoc />
    </UContainer>
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
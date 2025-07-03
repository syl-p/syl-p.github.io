<template>
  <section>
    <header class="bg-primary/50 text-secondary mb-10 pt-20 pb-18">
        <UContainer class="py-24 z-10">
          <UBreadcrumb :links="items" />
          <div class="mb-20">
            <h1 class="text-3xl mb-3 md:text-5xl leading-tight text-white font-bold">
              {{ page.title }}
            </h1>
            <p class="leading-tight text-white">
              {{ page.description }}
            </p>
          </div>
          <div class="flex space-x-3 justify-around items-center">
            <UButton icon="i-lucide-github" size="xl" variant="soft" v-if="page.github_link" :to="page.github_link">Github</UButton>
            <UButton icon="i-lucide-link" size="xl" variant="soft" v-if="page.external_link" :to="page.external_link">Demo</UButton>
          </div>
        </UContainer>
    </header>
    <section>
      <ContentDoc />
    </section>
  </section>
</template>

<script setup lang="ts">
const { page } = useContent();
const items = [
  {
    label: "Accueil",
    to: "/",
  },
  {
    label: page.value.title,
  },
];
</script>

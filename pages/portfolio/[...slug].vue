<template>
  <header class="bg-primary/50 text-secondary mb-10 py-20">
      <UContainer class="py-24 z-10">
        <UBreadcrumb :links="items" />
        <div>
          <h1 class="text-3xl md:text-5xl leading-tight text-white font-bold">
            {{ page.title }}
          </h1>
          <p class="text-xl leading-tight text-white">
            {{ page.description }}
          </p>
        </div>
      </UContainer>
  </header>
  <section>
    <ContentDoc />
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
    label: "Portfolio",
    to: "/#projects",
  },
  {
    label: page.value.title,
  },
];
</script>

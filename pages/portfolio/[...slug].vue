<template>
  <header class="bg-primary/10 text-secondary mb-6 py-24 relative">
    <img
        :src="'/img/portfolio/' + page.featured"
        alt="Portfolio hero image"
        class="absolute inset-0 object-cover w-full h-full opacity-30 -z-10"
      />
      <UContainer class="py-24 z-10">
        <UBreadcrumb :links="items" />
        <div>
          <h1 class="text-3xl md:text-5xl leading-tight text-primary">
            {{ page.title }}
          </h1>
          <p class="text-3xl md:text-5xl leading-tight text-white">
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
    label: "Home",
    to: "/",
  },
  {
    label: "Projets",
    to: "/projects",
  },
  {
    label: page.value.title,
  },
];
</script>

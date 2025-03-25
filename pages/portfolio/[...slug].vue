<template>
  <header class="bg-primary/10 text-secondary mb-6">
    <div
      class="py-24"
      :style="`background-image: url(/img/portfolio/${page.featured}); background-size: cover; background-position: center center;`"
    >
      <UContainer class="py-24">
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
    </div>
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

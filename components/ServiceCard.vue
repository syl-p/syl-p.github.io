<template>
  <UCard class="rounded-3xl">
    <h2 class="font-medium text-2xl">
      <NuxtLink :to="service._path">{{ service.title }}</NuxtLink>
    </h2>
    <p>lorem ipsum dolor sit amet</p>
    <template #header>
      <img src="https://picsum.photos/500/300" class="w-full rounded-3xl" />
    </template>
  </UCard>
</template>

<script setup lang="ts">
const { service } = defineProps(["service"]);
</script>

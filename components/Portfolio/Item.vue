<template>
  <div
    class="py-6 flex space-x-12 items-center"
    :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
  >
    <NuxtLink
      :to="item._path"
      class="block w-8/12 overflow-hidden rounded-full shadow-xl border"
    >
      <img
        :src="
          item.featured
            ? 'img/portfolio/' + item.featured
            : 'https://picsum.photos/700/400?random=' + index
        "
        :alt="item.title"
        class="h-full max-h-[300px] w-full object-cover"
      />
    </NuxtLink>
    <div class="flex-1">
      <h3 class="text-3xl font-bold">
        <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
      </h3>
      <p class="mb-3">{{ item.description }}</p>
      <UButton :to="item._path">Voir le projet</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { item, index } = defineProps(["item", "index"]);
</script>

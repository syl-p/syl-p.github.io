<template>
  <div class="p-6 border border-gray-200 rounded-lg shadow-lg">
    <NuxtLink :to="item._path" class="block mb-6">
      <img
        :src="
          item.featured
            ? 'img/portfolio/' + item.featured
            : 'https://picsum.photos/700/400?random=' + index
        "
        :alt="item.title"
        class="w-full object-cover rounded-lg mb-6 md:mb-0"
      />
    </NuxtLink>
    <div class="flex-1">
      <h3 class="text-xl font-bold">
        <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
      </h3>
      <p class="mb-3">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { item, index } = defineProps(["item", "index"]);
</script>

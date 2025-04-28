<template>
  <div
    class="py-6 md:flex md:space-x-12 items-center"
    :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
  >
    <NuxtLink
      :to="item._path"
      class="md:block md:w-1/2"
    >
      <img
        :src="
          item.featured
            ? 'img/portfolio/' + item.featured
            : 'https://picsum.photos/700/400?random=' + index
        "
        :alt="item.title"
        class=" w-full object-cover rounded-lg shadow-lg mb-6 md:mb-0"
      />
    </NuxtLink>
    <div class="flex-1">
      <h3 class="text-3xl font-bold">
        <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
      </h3>
      <p class="mb-3">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { item, index } = defineProps(["item", "index"]);
</script>

<template>
  <div class="flex space-x-3 items-center">
    <div>
      <span class="text-4xl">{{index + 1}}</span>.
    </div>
    <div>
      <h3 class="font-medium text-xl">
        <NuxtLink :to="service._path">{{ service.title }}</NuxtLink>
      </h3>
      <p>lorem ipsum dolor sit amet</p>
    </div>  
  </div>
</template>

<script setup lang="ts">
const { service, index } = defineProps(["service", "index"]);
</script>

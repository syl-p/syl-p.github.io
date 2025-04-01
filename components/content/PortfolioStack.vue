<template>
  <UContainer class="my-10">
    <div class="prose dark:prose-invert w-full mb-6">
      <slot />
    </div>
    <ul class="flex space-x-6">
      <li v-for="item of stack">
        <img :src="'/img/stack/' + item + '.png'" class="w-16 h-16" />
        <span class="block w-full text-center mt-3">{{ item }}</span>
      </li>
    </ul>
  </UContainer>
</template>

<script setup lang="ts">
defineProps(["stack"]);
</script>

<template>
  <main class="min-h-full">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </main>
</template>
<script setup lang="ts">
</script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.2s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>

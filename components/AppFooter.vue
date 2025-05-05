<template>
  <div
    v-if="visible"
    class="rounded-full bg-white fixed py-3 px-8 bottom-6 left-1/2 -translate-x-1/2 z-50 border"
  >
    <SocialList />
  </div>
</template>

<script setup lang="ts">
const visible = ref(false);
onMounted(() => {
  document.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      visible.value = true;
    } else {
      visible.value = false;
    }
  });
});
</script>

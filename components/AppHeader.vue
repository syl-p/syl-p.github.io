<template>
  <header class="fixed top-0 left-0 right-0 z-50 px-8 py-10">
        <div class="rounded-lg p-4 max-w-1/2 transition-all duration-300 ease-in-out"
          :class="{'bg-gray-100 dark:bg-gray-800 shadow-lg': opened}">
          <a href="#" @click.prevent="opened = !opened">Menu</a>
          <ul class="mt-6" v-show="opened">
            <li v-for="link in links" :key="link.label">
              <NuxtLink
                :to="link.to"
                class="block hover:underline py-2"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
  </header>
</template>

<script lang="ts" setup>
const opened = ref(false);
const links = [
  {
    label: "Nos services",
    to: "/services",
  },
  {
    label: "Développement web",
    to: "/web-dev",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
</script>

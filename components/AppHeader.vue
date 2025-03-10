<template>
  <header
    class="backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 lg:!border-transparent bg-gray-50 dark:bg-gray-950 py-6"
  >
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl flex items-center justify-between gap-3 h-[--header-height]"
    >
      <div class="lg:flex-1 flex items-center gap-1.5">
        <NuxtLink
          class="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5"
          to="/"
        >
          DigitalOc
        </NuxtLink>
      </div>
      <ul
        class="items-center ring-1 ring-gray-200 dark:ring-gray-800 px-3 gap-x-0 rounded-full hidden lg:flex"
      >
        <!--[-->
        <li class="relative" v-for="link in links">
          <NuxtLink
            class="text-sm/6 flex items-center gap-1 py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            :to="link.to"
            inactiveclass="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >{{ link.label }}</NuxtLink
          >
        </li>
      </ul>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <ColorScheme
          ><USelect
            v-model="$colorMode.preference"
            :options="['system', 'light', 'dark']"
        /></ColorScheme>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
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
    label: "Blog",
    to: "/blog",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
</script>

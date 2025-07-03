<template>
  <header
    class="fixed top-0 left-0 w-full backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px z-50 lg:!border-transparent py-6"
  >
    <UContainer>
    <div
      class="flex items-center justify-between gap-3 h-[--header-height]"
    >
      <div class="lg:flex-1 flex items-center gap-1.5">
        <NuxtLink
          class="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5"
          to="/"
        >
          websylvain
        </NuxtLink>
      </div>
      <ul
        class="items-center ring-1 ring-gray-200 dark:ring-gray-800 px-3 gap-x-0 rounded-full hidden lg:flex"
      >
        <!--[-->
        <li class="relative" v-for="link in links" :key="link.to">
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
    </UContainer>
  </header>
</template>

<script lang="ts" setup>
const links = [
  {
    label: "Contact",
    to: "/contact",
  },
];
</script>
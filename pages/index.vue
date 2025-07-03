<template>
  <UContainer class="pt-28">
      <header class="md:grid md:grid-cols-12 gap-6">
        <!-- Photo & Socials -->
        <div class="md:col-span-3 flex flex-col items-center items-start">
          <div class="rounded-[50px] overflow-hidden w-64 h-80 bg-gray-800">
          </div>
          <div class="mt-4 flex gap-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
            <a href="https://github.com/syl-p" target="_blank">Git.</a>
            <a href="https://www.linkedin.com/in/websylvain/" target="_blank">Lkn.</a>
          </div>
        </div>

        <!-- Text Content -->
        <div class="md:col-span-9 mt-8">
          <p class="text-lg">Hello World 👋</p>
          <h1 class="text-4xl font-bold mt-2">I'm Sylvain Pastor</h1>
          <h2 class="text-4xl font-semibold mt-1">
            I am a <span class="text-lime-400">developer.<span class="animate-blink">|</span></span>
          </h2>

          <div class="border-t border-gray-700 my-6"></div>

          <!-- Infos -->
          <div class="grid grid-rows-2 grid-flow-col gap-4">
            <div class="flex items-center gap-2">
              <span class="text-lime-400">
                <UIcon name="i-lucide-message-square" class="size-5" />
              </span> 
              <a href="mailto:contact@websylvain.com">contact@websylvain.com</a>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-lime-400">
                <UIcon name="i-lucide-phone" class="size-5" />
              </span> 
                07.61.74.17.02
            </div>
            <div class="flex items-center gap-2">
              <span class="text-lime-400">
                <UIcon name="i-lucide-map-pin" class="size-5" />
              </span> Carcassonne, France
            </div>
          </div>
        </div>
      </header>
      <section class="py-10">
        <!-- Description -->
        <p class="text-gray-300 leading-relaxed">
          Je suis Sylvain, Développeur Ruby et Javascript (+ typescript), + de 10
          ans d'expérience. J'ai choisi de me spécialiser dans l'utilisation de
          technologies modernes et performantes comme
          <strong>Ruby On Rails</strong>,
          <strong>Vue.js/NuxtJs</strong>, <strong>PostgreSQL</strong>, <strong>Redis</strong>,
          <strong>Docker</strong>...
          Ce site sera à la fois un portfolio pour les personnes voulant faire appel à mes services mais aussi un laboratoire ou je présenterai mes projets personnels.
        </p>
      </section>
      <section class="pt-10 pb-20">
        <h2 class="text-2xl mb-6 underline decoration-lime-400 leading-4">Mes services</h2>
         <ul
          class="grid grid-rows-2 grid-flow-col gap-4"
          v-if="services"
        >
          <li
            class="m-0 p-0 col-span-1"
            v-for="(service, index) in services"
            :key="index"
          >
            <ServiceCard :service="service" :index="index" />
          </li>
        </ul>
      </section>
      <!-- Bandeau défilant -->
      <section
        class="w-full overflow-hidden py-10 border-t border-b border-gray-200"
      >
        <div class="scrolling-banner flex">
          <!-- Première moitié du contenu répété -->
          <div
            class="flex items-center whitespace-nowrap text-2xl md:text-5xl uppercase"
          >
              <div v-for="(client, index) in [...page.clients, ...page.clients, ...page.clients]" 
                class="block mx-2 w-[150px]" :key="index">
                <a :href="client.link"
                  target="_blank" >
                  <img
                    :src="`/img/clients/${client.logo}`"
                    :alt="client.name"
                    class="w-[150px]"
                  />
                </a>
                <span><StarSvg /></span>  
              </div>
          </div>
        </div>
      </section>
      <section class="pt-10 pb-20">
        <h2 class="text-2xl mb-6 underline decoration-lime-400 leading-4">Portfolio</h2>
        <ul class="space-y-6 md:grid md:grid-cols-2 md:gap-6">
          <li v-for="(project, index) in portfolio" :key="index">
            <PortfolioItem :item="project" :index="index" />
          </li>
        </ul>
      </section>
    </UContainer>
</template>

<script setup lang="ts">
import "~/assets/styles.css";
const services = await queryContent("/services").skip(1).find();
const portfolio = await queryContent("/portfolio").skip(1).find();
const { page } = useContent();

useHead({
  title: "Sylvain Pastor | Développeur Web Fullstack",
  meta: [
    {
      name: "description",
      content:
        "Développeur Fullstack NodeJs, Typescript, Vuejs. Spécialisé dans la création d'applications web modernes, sécurisées et performantes pour les profressionnels.",
    },
  ],
});
</script>

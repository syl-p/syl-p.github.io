<template>
  <UContainer>
    <!-- Hero content -->
    <section
      class="flex flex-col pt-28 pb-16 justify-center items-center overflow-x-hidden lg:overflow-hidden relative text-center"
    >
      <div class="relative">
        <img
          class="w-36 h-36 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-6"
          src="/img/avatar.jpeg"
          alt="Bordered avatar"
        />
        <a
          href="tel:+33761741702"
          class="animate-pulse bottom-3 left-5 absolute w-10 h-10 flex flex-col justify-center items-center bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
        >
          <UIcon name="bx:bxs-phone" class="text-white size-6" />
        </a>
      </div>
      <h1 class="text-4xl md:text-6xl font-bold text-center mb-3">
        Sylvain <span class="text-primary">PASTOR</span>
      </h1>
      <p class="text-center text-2xl md:text-4xl mb-6">
        🚀 Développeur Web <span class="text-primary">Typescript</span> et
        <span class="text-primary">NodeJS</span>
      </p>
      <SocialList />
    </section>
  </UContainer>

  <!-- Bandeau défilant -->
  <section
    class="w-full overflow-hidden py-3 md:py-6 border-t border-b border-gray-200 rotate-3"
  >
    <div class="scrolling-banner flex">
      <!-- Première moitié du contenu répété -->
      <div
        class="flex items-center whitespace-nowrap text-2xl md:text-5xl uppercase"
      >
        <template
          v-for="client in [...page.clients, ...page.clients, ...page.clients]"
        >
          <a :href="client.link" target="_blank" class="block mx-2 w-[150px]">
            <img
              :src="`/img/clients/${client.logo}`"
              :alt="client.name"
              class="w-[150px]"
            />
          </a>
          <span class=""><StarSvg /></span>
        </template>
      </div>
    </div>
  </section>

  <UContainer>
    <section class="py-16" id="services">
      <header class="mb-6">
        <h2 class="uppercase font-bold text-3xl md:text-6xl">A propos</h2>
      </header>
      <p class="mb-6">
        Je suis Sylvain, Développeur Full-Stack Node.js & TypeScript, + de 10
        ans d'expérience. J'ai choisi de me spécialiser dans l'utilisation de
        technologies modernes et performantes comme
        <strong>Node.js</strong> (AdonisJs, NestJs et expressjs),
        <strong>Vue.js/NuxtJs</strong>, <strong>Htmx</strong>,
        <strong>PostgreSQL</strong>, <strong>Redis</strong>,
        <strong>Docker</strong>...
      </p>
      <p class="mb-6">
        🌟 Passionné par le développement web moderne, j'aide les PME, TPE et
        startups à transformer leurs idées en solutions concrètes.
      </p>
      <p class="mb-6">
        J'ai eu la chance de travailler avec le département de l'Aude, la CNIL,
        plusieurs bureaux d'études, startups et agences de communication...
      </p>
    </section>
  </UContainer>

  <!-- Bandeau défilant -->
  <!-- <section
    class="w-full overflow-hidden py-6 md:py-12 border-t border-b border-gray-200 rotate-3"
  >
    <div class="scrolling-banner flex">
      <div
        class="flex items-center whitespace-nowrap text-2xl md:text-5xl uppercase"
      >
        <span class="mx-2">APPLICATION WEB</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">MODERNE</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">PERFORMANCE</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">SECURISée</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">APPLICATION WEB</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">MODERNE</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">PERFORMANCE</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">SECURISée</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">APPLICATION WEB</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">MODERNE</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">PERFORMANCE</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">SECURISée</span>
        <span class=""><StarSvg /></span>
      </div>
    </div>
  </section> -->

  <UContainer>
    <section class="py-16" id="projects">
      <header class="mb-6">
        <h2 class="uppercase font-bold text-3xl md:text-6xl">
          Mes <span class="text-primary">projets</span>
        </h2>
      </header>
      <ul class="space-y-6 md:grid md:grid-cols-2 md:gap-6">
        <li v-for="(project, index) in portfolio">
          <PortfolioItem :item="project" :index="index" />
        </li>
      </ul>
      <!-- <div class="flex justify-center mt-10">
        <UButton to="/portfolio" class="py-3 px-4 uppercase font-mono"
          >Voir plus de projets</UButton
        >
      </div> -->
    </section>
    <section class="py-10" id="contact">
      <header class="pb-10 mb-6">
        <h2 class="uppercase font-bold text-4xl md:text-6xl text-center">
          Travaillons <span class="text-primary">ensemble</span>
        </h2>
      </header>

      <div
        class="md:flex md:justify-between space-y-6 md:space-y-0 md:space-x-10 mb-12"
      >
        <div>
          <h3>Par téléphone</h3>
          <a href="tel:+33761741702" class="text-3xl font-bold"
            >07.61.74.17.02</a
          >
        </div>
        <div>
          <h3>Par Email</h3>
          <a href="mailto:syl-p@ik.me" class="text-3xl font-bold"
            >syl-p@ik.me</a
          >
        </div>
      </div>
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

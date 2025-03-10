<template>
  <UContainer :ui="{ constrained: 'max-w-screen-2xl' }">
    <!-- Badges -->
    <section
      class="container mx-auto md:flex md:justify-between md:gap-4 md:px-6 pt-10"
    >
      <div class="flex space-x-4 max-w-1/2">
        <UButton
          icon="i-heroicons-pencil-square"
          label="DEVELOPPEMENT FULLSTACK"
          variant="outline"
          class="rounded-full py-2 px-4"
        ></UButton>
        <UButton
          icon="i-heroicons-pencil-square"
          label="PLUS DE 10 ANS D'EXP"
          variant="outline"
          class="rounded-full py-2 px-4"
        ></UButton>
      </div>
      <div class="border-b flex-1 hidden md:block">
        <svg class="h-6 w-6 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"
          />
        </svg>
      </div>
    </section>

    <!-- Hero content -->
    <section class="container mx-auto flex py-4">
      <div class="w-full">
        <!-- Main title -->
        <div class="mt-4">
          <div class="md:grid md:grid-cols-12 md:gap-6">
            <div class="col-span-12 flex items-center justify-center">
              <h2
                class="w-1/2 flex-1 text-6xl md:text-8xl font-bold flex space-x-4"
              >
                <svg
                  class="h-6 w-6 hidden md:block"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"
                  />
                </svg>
                VOTRE
              </h2>
              <div class="w-1/2 hidden md:block">
                Studio de développement d'application web performante, sécurisée
                et scalable. Disponible à Carcassonne et dans tout le
                département Audois.
              </div>
            </div>
            <div
              class="col-span-3 overflow-hidden rounded-full hidden md:block"
            >
              <img
                src="https://picsum.photos/400/300?random=1"
                alt="Developer"
                class="h-full max-h-[100px] w-full object-cover"
              />
            </div>
            <h2
              class="col-span-9 w-full text-6xl md:text-8xl font-bold text-primary"
            >
              NOUVEAU PROJECT
            </h2>
            <h2 class="col-span-5 w-full text-6xl md:text-8xl font-bold">
              INNOVANT
            </h2>
            <div
              class="hidden md:block relative col-span-7 overflow-hidden rounded-full bg-gray-200"
            >
              <img
                src="https://picsum.photos/400/300?random=2"
                alt="Video preview"
                class="h-full max-h-[100px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- sub infos -->
    <section class="container mx-auto md:flex md:gap-6 md:py-12">
      <article class="mb-12 md:mb-0">
        <!-- Description text -->
        <div class="my-6 md:w-3/4">
          Notre studio de développement web se spécialise dans la création de
          solutions digitales sur mesure pour les TPE et PME. Nous concevons des
          sites web professionnels, des applications métier et des stratégies
          digitales adaptés à vos besoins et à votre budget. Notre approche
          combine expertise technique, design moderne et compréhension
          approfondie des enjeux des petites et moyennes entreprises pour vous
          garantir un retour sur investissement optimal.
        </div>

        <!-- CTA buttons -->
        <div class="mt-6 flex items-center gap-4">
          <button
            class="rounded-full bg-primary px-8 py-3 font-medium text-white"
          >
            Consultation gratuite
          </button>
          <button class="rounded-full bg-primary p-3 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </article>
      <aside>
        <!-- Creative badge -->
        <div class="flex justify-center md:justify-start">
          <div class="relative h-[200px] w-[200px]">
            <svg viewBox="0 0 100 100" class="h-full w-full">
              <path
                id="curve"
                d="M 50 50 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0"
                fill="none"
              />
              <text font-size="13">
                <textPath href="#curve">
                  CREATIVE • DEVELOPER • CREATIVE •
                </textPath>
              </text>
            </svg>
            <svg
              class="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"
              />
            </svg>
          </div>
        </div>
      </aside>
    </section>
  </UContainer>

  <!-- Bandeau défilant -->
  <section
    class="w-full overflow-hidden py-6 md:py-12 my-12 border-t border-b border-gray-200"
  >
    <div class="scrolling-banner flex">
      <!-- Première moitié du contenu répété -->
      <div class="flex items-center whitespace-nowrap text-2xl md:text-5xl">
        <span class="mx-2">DEVELOPER STUDIO</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">DEVELOPER STUDIO</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">DEVELOPER STUDIO</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">DEVELOPER STUDIO</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">DEVELOPER STUDIO</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">DEVELOPER STUDIO</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">DEVELOPER STUDIO</span>
        <span class=""><StarSvg /></span>
        <span class="mx-2">DEVELOPER STUDIO</span>
        <span class=""><StarSvg /></span>
      </div>
    </div>
  </section>

  <section class="py-12 relative mb-6">
    <div
      class="bg-primary/25 absolute h-1/2 bottom-0 left-0 w-full -z-10"
    ></div>
    <UContainer :ui="{ constrained: 'max-w-screen-2xl' }" class="z-10">
      <article class="pb-10">
        <h2 class="uppercase text-3xl md:text-6xl pb-10 border-b mb-12">
          Les <span class="text-primary">services</span> proposés
        </h2>

        <ul
          class="flex-1 space-y-6 md:space-y-0 md:grid md:grid-cols-3 gap-6"
          v-if="services"
        >
          <li
            class="m-0 p-0 col-span-1"
            v-for="(service, index) in services"
            :key="index"
          >
            <ServiceCard :service="service" />
          </li>
        </ul>
      </article>

      <article class="py-10">
        <h2
          class="uppercase w-1/2 mx-auto text-center text-3xl md:text-6xl mb-12"
        >
          La réussite de nos clients est
          <span class="text-primary">notre objectif</span> !
        </h2>
      </article>
    </UContainer>
  </section>

  <UContainer :ui="{ constrained: 'max-w-screen-2xl' }">
    <section class="py-10">
      <header class="mb-6">
        <h2 class="uppercase text-3xl md:text-6xl pb-10 border-b mb-12">
          Nos <span class="text-primary">projets</span>
        </h2>
      </header>
      <ul class="space-y-6">
        <li v-for="(project, index) in portfolio">
          <PortfolioItem :item="project" :index="index" />
        </li>
      </ul>
      <div class="flex justify-center mt-10">
        <UButton to="/portfolio" class="py-3 px-4 uppercase font-mono"
          >Voir plus de projets</UButton
        >
      </div>
    </section>
    <section class="py-10">
      <header class="border-b pb-10 mb-12">
        <h2 class="uppercase text-3xl md:text-6xl">
          Nos <span class="text-primary">projets</span>
        </h2>
        <p>
          N'hésitez pas à me contacter pour que nous étudions ensemble votre
          projet !
        </p>
      </header>
      <div
        class="md:flex md:justify-between space-y-6 md:space-y-0 md:space-x-10"
      >
        <div>
          <h3>Par téléphone</h3>
          <p class="text-3xl font-bold">07.61.74.17.02</p>
        </div>
        <div>
          <h3>Par Email</h3>
          <p class="text-3xl font-bold">syl-p@ik.me</p>
        </div>
        <div>
          <h3>Sur les réseaux sociaux</h3>
          <ul class="flex space-x-3">
            <li>
              <a target="_blank" href="https://github.com/syl-p"
                ><i class="fa fa-github"></i
              ></a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/websylvain"
                ><i class="fa fa-twitter"></i
              ></a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/websylvain"
                ><i class="fa fa-linkedin"></i
              ></a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/syl-p.coding"
                ><i class="fa fa-instagram"></i
              ></a>
            </li>
          </ul>
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
</script>

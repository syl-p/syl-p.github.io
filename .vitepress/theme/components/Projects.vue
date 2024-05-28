<template>
    <ul class="projects-list">
      <li v-for="post of posts" :class="{'featured' : post.frontmatter.featured}">
        <div :href="post.url"  class="projects-list__thumb">
          <img :src="'/img/' + post.frontmatter.img" :alt="post.frontmatter.title"/>
          <div class="projects-list__thumb__overlay">
            <h3>
              <a :href="post.url">
                {{ post.frontmatter.title }}
              </a>
            </h3>
            <!-- <div v-if="post.frontmatter.tags">
              <Badge type="info" v-for="tag of post.frontmatter.tags">{{tag}}</Badge>
            </div> -->
          </div>
        </div>
      </li>
    </ul>  
</template>
<script setup>
  import {data as posts} from './projects.data.js'
</script>

<style scoped>
  ul.projects-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-auto-rows: 192px; /* Each row in the grid will have a height of 192px */
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* Create 3 equal columns */
    gap: 1rem;
  }

  @media screen and (max-width: 768px) {
    ul.projects-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  ul.projects-list li {
    margin: 0;
  }
  
  ul.projects-list li.featured {
    grid-column: span 2 / span 2;
  }

  ul.projects-list li .projects-list__thumb {
    width: 100%;
    height:180px;
    position: relative;
    overflow: hidden;
    margin-bottom: 5px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
  }

  ul.projects-list li .projects-list__thumb__overlay {
    transition: all 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-color: var(--vp-button-brand-bg);
    opacity: 0.4;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 1rem;
  }

  ul.projects-list li h3 {
    margin: 0 0 5px 0;
    padding: 0;
    border: none;
    font-weight: 600;
  }

  ul.projects-list li h3 a {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
  }
  
  ul.projects-list li p {
    margin: 0;
    padding: 0;
  }

  ul.projects-list li .projects-list__thumb img {
    margin-bottom: 5px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Ajustez selon vos besoins */
    object-fit: cover;
    transform: rotate(0);
    transition: all 1s ease;
  }

  ul.projects-list li .projects-list__thumb__overlay:hover {
    opacity: 0.75;
  }

  ul.projects-list li:hover .projects-list__thumb img {
    transform: rotate(10deg) scale(1.5);
  }
</style>
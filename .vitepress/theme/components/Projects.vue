<template>
    <ul class="projects-list">
      <li v-for="post of posts">
        <a :href="post.url"  class="projects-list__thumb">
          <img :src="'/img/' + post.frontmatter.img" :alt="post.frontmatter.title"/>
          <div v-if="post.frontmatter.tags">
            <Badge type="info" v-for="tag of post.frontmatter.tags">{{tag}}</Badge>
          </div>
        </a>
        <div class="projects-list__description">
          <h3>
            <a :href="post.url">
              {{ post.frontmatter.title }}
            </a>
          </h3>
          <p>{{ post.frontmatter.description }}</p>
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
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  @media screen and (max-width: 768px) {
    ul.projects-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  ul.projects-list li {
    margin: 0;
  }

  ul.projects-list li .projects-list__thumb {
    width: 100%;
    height:180px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 5px;
    padding: 10px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
  }

  ul.projects-list li .projects-list__thumb img {
    margin-bottom: 5px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Ajustez selon vos besoins */
    object-fit: cover;
  }

  ul.projects-list li .projects-list__description h3 {
    margin: 0 0 5px 0;
    padding: 0;
    border: none;
    font-weight: 600;
  }

  ul.projects-list li .projects-list__description p {
    margin: 0;
    padding: 0;
  }



</style>
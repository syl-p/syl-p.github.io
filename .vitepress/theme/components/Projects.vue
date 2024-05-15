<template>
    <ul class="projects-list">
      <li v-for="post of posts">
        <div class="projects-list__thumb">
          <a :href="post.url">
            <img :src="'/img/' + post.frontmatter.img" :alt="post.frontmatter.title"/>
          </a>
        </div>
        <div>
          <a :href="post.url">{{ post.frontmatter.title }}</a>
          <div v-html="post.excerpt"></div>
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
  }

  ul.projects-list li {
    display: flex;
    gap: 15px;
  }

  ul.projects-list .projects-list__thumb {
    width: 50%;
  }

  ul.projects-list li a img {
    margin-bottom: 5px;
    border-radius: 1em;
    width: 100%;
  }

</style>
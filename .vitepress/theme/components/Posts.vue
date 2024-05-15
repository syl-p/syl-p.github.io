<template>
    <ul>
      <li v-for="post of posts">
        <a :href="post.url">{{ post.frontmatter.title }}</a> <span>by {{ post.frontmatter.author }}</span>
      </li>
    </ul>  
</template>
<script setup>
    import {data as posts} from './posts.data.js'
</script>
<template>
    <div class="">


        <div v-for="post in recentFiles">
            <div class="timeline-content">
                <small>Par {{post.frontmatter.author}} | Le <span>{{post.frontmatter.published}}</span></small>
                <h2><a :href="post.path">{{post.title}}</a></h2>
                <a :href="post.path">
                  <img v-if='post.frontmatter.img && !noThumb' :src="$withBase('/img/uploads/' + post.frontmatter.img)" :alt="post.title" class="w-100"/>
                </a>
                <p>{{post.frontmatter.description}}<a :href="post.path"> &rarr; lire la suite</a></p>
            </div>
        </div>


    </div>
</template>


<script>
export default {
    props: {
        not: String,
        limit: Number,
        noThumb: {
          type: Boolean,
          default: false,
        }
    },
    data () {
        return {}
    },
    computed:{
        recentFiles() {
          return this.$site.pages
            .sort((a, b) => new Date(b.frontmatter.published) - new Date(a.frontmatter.published))
            .slice(0,parseInt(this.limit))
            .filter(x => x.path.startsWith('/posts/') && x.path !== this.not)
        }
    }
}
</script>
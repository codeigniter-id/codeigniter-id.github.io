<template>
  <div>
    <PostingCard :data="$static.jobs.edges"/>
  </div>
</template>


<script>
import PostingCard from "~/components/PostingCard.vue";

export default {
  components: {
    PostingCard
  }
};
</script>


<static-query>

query Job {
  jobs: allPost( filter: { category: { eq:"job"} , published: { eq: true }}, sortBy: "date",  limit: 5, order: DESC)  {
    edges {
      node { 
        id
        author
        published
        date (format: "D MMMM YYYY")
        title
        description
        category
        path
        cover_image
      }
    }
  }
}

</static-query>


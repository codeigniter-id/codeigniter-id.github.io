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
  jobs: allJob( filter: { category: { eq:"job"} , published: { eq: true }}, sortBy: "date",  limit: 4, order: DESC)  {
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
        location
      }
    }
  }
}

</static-query>


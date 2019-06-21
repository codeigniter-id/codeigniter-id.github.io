<template>
  <div>
    <PostingCard :data="$static.infos.edges"/>
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

query Info {
  infos: allInfo( filter: { category: { eq:"info"} , published: { eq: true }}, sortBy: "date",  limit: 5, order: DESC)  {
    edges {
      node { 
        id
        slug
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

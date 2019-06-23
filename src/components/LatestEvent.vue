<template>
  <div>
    <PostingCard :data="$static.events.edges"/>
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

query Event {
  events: allEvent( filter: { category: { eq:"event"} , published: { eq: true }}, sortBy: "date",  limit: 4, order: DESC)  {
    edges {
      node { 
        id
        author
        published
        date (format: "D MMMM YYYY")
        title
        category
        path
        cover_image
        location
      }
    }
  }
}

</static-query>


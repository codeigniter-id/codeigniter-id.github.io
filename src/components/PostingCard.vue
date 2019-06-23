<template>
  <div class="columns is-multiline">
    <div class="column is-6" v-for="edge in data" :key="edge.node.id">
      <div class="card is-marginless  has-padding-bottom-20  has-equal-height ">
        <div class="card-content is-paddingless">
          <div class="media has-margin-bottom-10">
            <div class="media-content">
              <p class="subtitle is-6 has-margin-bottom-5">
                <span class="tag is-info">{{edge.node.category}}</span>
              </p>

              <p
                class="subtitle is-7 has-text-grey has-padding-bottom-5 has-padding-top-5 "
              >Tanggal : {{edge.node.date}}</p>
              <p class="title is-6 ">
                <g-link class="has-text-grey-darker" :to="edge.node.path">{{edge.node.title}}</g-link>
              </p>
            </div>
          </div>

          <div
            class="content has-text-grey-darker has-margin-bottom-10 is-family-secondary"
          >{{edge.node.description}}</div>

          <Sharing :url="url+edge.node.path"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Sharing from "~/components/Sharing.vue";

export default {
  props: ["data"],
  components: {
    Sharing
  },
  data() {
    return {
      url: ""
    };
  },
  mounted() {
    this.url = window.location.origin;
  }
};
</script>


<style lang="scss" scoped>
.card {
  border-radius: 5px;
  box-shadow: none !important;
  border-bottom: 1px solid #f3f6f9 !important;
  background: transparent;
  &:hover {
  }
}

p {
  line-height: 1.2em !important;
}
</style>

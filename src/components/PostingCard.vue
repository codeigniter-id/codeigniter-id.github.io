<template>
  <div class="columns is-multiline">
    <div class="column is-6" v-for="edge in data" :key="edge.node.id">
      <div class="card has-equal-height is-marginless">
        <div class="card-content">
          <div class="media has-margin-bottom-10">
            <div class="media-content">
              <p class="subtitle is-6">
                <span class=" is-info">{{edge.node.category}}</span>
              </p>
              <p class="title is-4 has-margin-bottom-30">
                <g-link class="has-text-grey-darker" :to="edge.node.path">{{edge.node.title}}</g-link>
              </p>

              <p
                class="subtitle is-7 has-text-grey-darker has-margin-bottom-5 has-text-weight-semibold"
              >Tanggal : {{edge.node.date}}</p>
            </div>
          </div>

          <div
            class="content has-text-grey-darker has-margin-bottom-10 is-family-secondary"
          >{{edge.node.description}}</div>

          <hr class="has-margin-top-15">
          <social-sharing :url="url+edge.node.path" inline-template>
            <div>
              <span class="has-padding-top-15 is-size-7">
                <i class="fas fa-share has-margin-top-10"></i>
                Share
              </span>
              <network network="facebook" class="button is-white is-marginless">
                <i class="fab fa-facebook"></i>
              </network>
              <network network="linkedin" class="button is-white">
                <i class="fab fa-linkedin"></i>
              </network>
              <network network="twitter" class="button is-white">
                <i class="fab fa-twitter"></i>
              </network>
              <network network="whatsapp" class="button is-white">
                <i class="fab fa-whatsapp"></i>
              </network>
              <network network="telegram" class="button is-white">
                <i class="fab fa-telegram"></i>
              </network>
            </div>
          </social-sharing>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["data"],

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
  border: none !important;
  box-shadow: none !important;
}
</style>

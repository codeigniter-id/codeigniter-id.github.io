<template>
  <Layout>
    <div class="columns is-multiline">
      <div class="column is-6">
        <h1 class="subtitle is-6 has-margin-top-5">
          <span class>Tanggal :</span>
          {{ $page.event.date }}
          Lokasi : {{ $page.event.location }}
        </h1>
        <h1 class="title is-3">{{ $page.event.title }}</h1>
      </div>
      <div class="column is-7">
        <g-image :src="$page.event.poster" width="500"/>
      </div>
      <div class="column is-5">
        <div v-html="$page.event.content" class="has-margin-bottom-50"/>
      </div>
    </div>
    <h5 class="has-text-grey-light has-text-weight-semibold">Bagikan</h5>
    <social-sharing class="has-margin-top-20" :url="$page.event.path" inline-template>
      <div class="buttons">
        <source srcset type="image/">
        <network network="facebook" class="button is-white">
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
    <vue-disqus shortname="codeigniter-id" :identifier="$page.event.slut" :url="$page.event.slug"></vue-disqus>
  </Layout>
</template>


<page-query>
query Event ($path: String!) {
  event: event (path: $path) {
    title
    content
    date (format: "D MMMM YYYY")
    cover_image
    path
    location
    poster
  }
}
</page-query>


<script>
export default {
  metaInfo() {
    return {
      title: this.$page.event.title
    };
  }
};
</script>
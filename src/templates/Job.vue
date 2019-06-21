<template>
  <Layout>
    <div class="columns">
      <div class="column is-7">
        <h1 class="subtitle is-6 has-margin-top-5">
          Tanggal : {{ $page.job.date }}
          Lokasi : {{ $page.job.location }}
        </h1>
        <h1 class="title is-1">{{ $page.job.title }}</h1>
        <g-image :src="$page.job.poster" width="500"/>
      </div>
      <div class="column is-5">
        <div v-html="$page.job.content" class="has-margin-bottom-50"/>
      </div>
    </div>

    <social-sharing class="has-margin-bottom-20" :url="$page.job.path" inline-template>
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
    <vue-disqus shortname="codeigniter-id" :identifier="$page.job.path" :url="$page.job.path"></vue-disqus>
  </Layout>
</template>


<page-query>
query Job ($path: String!) {
  job: job (path: $path) {
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
      title: this.$page.job.title
    };
  }
};
</script>
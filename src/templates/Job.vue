<template>
  <Layout>
    <div class="columns is-multiline">
      <div class="column is-12">
      
        <h1 class="title is-3">{{ $page.job.title }}</h1>
          <h1 class="subtitle is-6">
          <span class="has-text-weight-bold has-text-grey-light	">
            Tanggal : {{ $page.job.date }} &nbsp;//
            Lokasi : {{ $page.job.location }}&nbsp;//
            Jenis : {{ $page.job.job_type}}
          </span>
        </h1>
      </div>
      <div class="column is-5" v-if="$page.job.content.length > 1">
        <div v-html="$page.job.content" class="has-margin-bottom-50"/>
      </div>
      <div class="column is-7">
        <g-image :src="$page.job.poster" width="500"/>
      </div>
    </div>
    <h5 class="has-text-grey-light has-text-weight-semibold">Bagikan</h5>
    <social-sharing class="has-margin-top-20" :url="$page.job.path" inline-template>
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

    <vue-disqus shortname="codeigniter-id" :identifier="$page.job.slug" :url="$page.job.slug"></vue-disqus>
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
    job_type
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
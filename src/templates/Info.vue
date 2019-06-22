<template>
  <Layout>
    <h1 class="title has-margin-top-20">{{ $page.info.title }}</h1>

    <div v-html="$page.info.content" class="has-margin-bottom-50"/>



    <social-sharing class="has-margin-bottom-20" :url="$page.info.path" inline-template>
      <div class="buttons"><source srcset="" type="image/">
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
    <br>
    <vue-disqus shortname="codeigniter-id" :identifier="$page.info.path" :url="$page.info.path"></vue-disqus>

  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.info.title
    };
  }
};
</script>


<page-query>
query Info ($path: String!) {
  info: info (path: $path) {
    title
    content
    category
    published
    description
  }
}
</page-query>
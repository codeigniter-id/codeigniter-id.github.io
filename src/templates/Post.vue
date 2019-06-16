<template>
  <Layout>
    <span class="has-padding-top-15 is-size-7">
      <i class="fas fa-share"></i>
      Share:
    </span>
    <social-sharing :url="$page.post.path" inline-template>
      <div>
        <network network="facebook" class="button is-white is-marginless has-padding-left-5">
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

    <h1 class="title has-margin-top-20">{{ $page.post.title }}</h1>

    <div v-html="$page.post.content" class="has-margin-bottom-50"/>

    <vue-disqus shortname="codeigniter-id" :identifier="$page.post.title"></vue-disqus>

  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>
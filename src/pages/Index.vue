<template>
  <Layout>
    <div class="columns">
      <div class="column is-5">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->

        <img
          src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/12803255_10206961661254942_8404149022163356260_n.jpg?_nc_cat=103&_nc_ht=scontent-sin6-1.xx&oh=3dc359e980ba816255f2653aa81ee487&oe=5DC71CD8"
          alt
        >
        <h1 class="title is-3 has-margin-bottom-20">Codeigniter Indonesia</h1>

        <p class="is-size-6 is-family-secondary">
          Codeigniter Indonesia merupakan wadah tempat berkumpulnya pengguna Codeigniter Framework khususnya di Indonesia
          Codeigniter sendiri merupakan php Framework MVC yang bersifat free dan opensource
        </p>
        <br>

        <div class="buttons">
          <a
            href="https://github.com/bcit-ci/CodeIgniter/archive/3.1.10.zip"
            class="button is-info"
          >
            <span class="icon">
              <font-awesome :icon="download"/>
            </span>
            <span>Download</span>
          </a>

          <a class="button is-success" href="https://www.codeigniter.com/docs" target="_blank">
            <span>Dokumentasi</span>
          </a>
        </div>

        <b-tabs type="is-boxed">
          <b-tab-item>
            <template slot="header">
              <b-icon icon="fas fa-code-branch is-marginless "></b-icon>
              <span>Github Feed</span>
            </template>
            <github-feed login="codeigniter-id"></github-feed>
          </b-tab-item>
          <b-tab-item>
            <template slot="header">
              <b-icon icon="fas fa-users"></b-icon>
              <span>Kontributor</span>
            </template>

            <Contributors/>
          </b-tab-item>
        </b-tabs>
      </div>
      <div class="column is-7">
        <h1 class="title is-5">Info Terbaru </h1>
        <LatestInfo/>
      </div>
    </div>
    <div class="columns">
      <div class="column"></div>
    </div>
  </Layout>
</template>

<script>
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Contributors from "~/components/Contributors.vue";
import LatestPosting from "~/components/LatestPosting.vue";
import LatestInfo from "~/components/LatestInfo.vue";

export default {
  data() {
    return {
      download: faDownload
    };
  },
  metaInfo: {
    title: "Codeigniter Indonesia Community",
    siteName: ""
  },
  components: {
    Contributors,
    LatestPosting,
    LatestInfo
  },
  mounted() {
    this.$snackbar.open(
      `Default, positioned bottom-right with a green 'OK' button`
    );
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

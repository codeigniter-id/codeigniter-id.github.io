<template>
  <Layout>
    <div class="columns">
      <div class="column is-5">
        <g-image
          src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/12803255_10206961661254942_8404149022163356260_n.jpg?_nc_cat=103&_nc_ht=scontent-sin6-1.xx&oh=3dc359e980ba816255f2653aa81ee487&oe=5DC71CD8"
          alt
        />
        <p class="title is-4 has-margin-top-10 has-margin-bottom-5">Codeigniter Indonesia</p>
        <p class="is-size-6 is-family-secondary">
          Codeigniter Indonesia merupakan wadah tempat berkumpulnya pengguna Codeigniter Framework khususnya di Indonesia
          Codeigniter sendiri merupakan php Framework MVC yang bersifat free dan opensource
        </p>

        <br>
        <div class="buttons">
          <a
            target="_blank"
            class="button is-white has-bg-transparent"
            href="https://www.facebook.com/groups/codeigniter.id/"
          >
            <i class="fab fa-facebook fa-2x"></i>
          </a>

          <a
            target="_blank"
            class="button is-white has-bg-transparent"
            href="https://t.me/codeigniterindonesia"
          >
            <i class="fab fa-telegram fa-2x"></i>
          </a>

          <a
            target="_blank"
            class="button is-white has-bg-transparent"
            href="https://github.com/codeigniter-id"
          >
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>

        <!-- Learn how to use images here: https://gridsome.org/docs/images -->

        <br>

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
        <h1 class="title is-5 has-margin-bottom-20">Info Terbaru</h1>
        <LatestInfo class="has-margin-bottom-20"/>
        <h1 class="title is-5 has-margin-bottom-20">Event Terbaru</h1>
        <LatestEvent class="has-margin-bottom-20"/>
        <h1 class="title is-5 has-margin-bottom-20">Lowongan Terbaru</h1>
        <LatestJob/>
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
import LatestJob from "~/components/LatestJob.vue";
import LatestInfo from "~/components/LatestInfo.vue";
import LatestEvent from "~/components/LatestEvent.vue";

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
    LatestJob,
    LatestInfo,
    LatestEvent
  },
  mounted() {
    this.$snackbar.open(
      `Website codeigniter indonesia masih dalam proses pengembangan`
    );
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

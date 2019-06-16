<template>
  <Layout>
    <div class="columns">
      <div class="column is-5">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <g-image
                src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/12803255_10206961661254942_8404149022163356260_n.jpg?_nc_cat=103&_nc_ht=scontent-sin6-1.xx&oh=3dc359e980ba816255f2653aa81ee487&oe=5DC71CD8"
                alt
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Codeigniter Indonesia</p>
              </div>
            </div>

            <div class="content">
              <p class="is-size-6 is-family-secondary">
                Codeigniter Indonesia merupakan wadah tempat berkumpulnya pengguna Codeigniter Framework khususnya di Indonesia
                Codeigniter sendiri merupakan php Framework MVC yang bersifat free dan opensource
              </p>
            </div>

          </div>
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
        <h1 class="title is-6 has-margin-bottom-10">Info Terbaru</h1>
        <LatestInfo class="has-margin-bottom-20"/>
        <h1 class="title is-6 has-margin-bottom-10">Event Terbaru</h1>
        <LatestEvent class="has-margin-bottom-20"/>

        <h1 class="title is-6 has-margin-bottom-10">Lowongan Terbaru</h1>
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
import LatestPosting from "~/components/LatestPosting.vue";
import LatestInfo from "~/components/LatestInfo.vue";
import LatestEvent from "~/components/LatestEvent.vue";
import LatestJob from "~/components/LatestJob.vue";

import PostingCard from "~/components/PostingCard.vue";

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
    LatestInfo,
    LatestEvent,
    LatestJob
  },
  mounted() {
    this.$snackbar.open(
      `Website codeigniter indonesia masih dalam proses pengembangan`
    );
  }
};
</script>


<page-query>

query Events {
  events: allPost (filter: {category: { eq:"event"} ,published: {eq:true}}sortBy : "date"){
    edges {
      node { 
        id
        title
        author
        by
        description
        cover_image
        path
        category
      }
    }
  }
}

</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

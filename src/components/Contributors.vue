<template>
  <div class="columns is-multiline">
    <div class="column is-6" v-for="member in members" :key="member.id">
      <article class="box media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img class="is-rounded" :src="member.avatar_url" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong class="title is-6">{{ member.login }}</strong>
              <br>
              <small>
                <a :href="member.html_url">
                  <i class="fab fa-github"></i>&nbsp;github
                </a>
              </small>
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.box {
  background: white;
  border: none;
  box-shadow: none;
}
</style>

<script>
import {
  faTelegram,
  faGithub,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

import axios from "axios";

export default {
  data() {
    return {
      members: null,
      github: faGithub
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/orgs/codeigniter-id/members")
      .then(response => (this.members = response.data));
  }
};
</script>

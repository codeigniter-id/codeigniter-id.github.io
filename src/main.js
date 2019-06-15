// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueGithubActivity from "vue-github-activity";
import Buefy from "buefy";
import SocialSharing from "vue-social-sharing";
import "bulma-helpers/css/bulma-helpers.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "~/assets/style/main.scss";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);
  Vue.use(Buefy, {
    defaultIconPack: "fas"
  });

  Vue.use(SocialSharing);
  Vue.use(VueGithubActivity);
}

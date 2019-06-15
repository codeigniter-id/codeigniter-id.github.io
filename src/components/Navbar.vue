<template>
  <section class>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <g-link class="navbar-item has-text-weight-bold is-paddingless" to="/">
          <img
            class="is-paddingless has-padding-right-5 has-margin-bottom-10"
            src="https://cdn1.iconfinder.com/data/icons/social-media-2106/24/social_media_social_media_logo_codeigniter-128.png"
          >
          <span>CODEIGNITER.ID</span>
        </g-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <g-link class="nav__link" to="/blog">blog</g-link>
          </div>
          <div class="navbar-item">
            <g-link class="nav__link" to="/events">events</g-link>
          </div>

        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a
                target="_blank"
                class="button is-white "
                href="https://www.facebook.com/groups/codeigniter.id/"
              >
                <font-awesome :icon="facebook"/>
              </a>

              <a
                target="_blank"
                class="button is-white "
                href="https://t.me/codeigniterindonesia"
              >
                <font-awesome :icon="telegram"/>
              </a>

              <a
                target="_blank"
                class="button is-white "
                href="https://github.com/codeigniter-id"
              >
                <font-awesome :icon="github"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>



<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import {
  faTelegram,
  faGithub,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

export default {
  data() {
    return {
      github: faGithub,
      telegram: faTelegram,
      facebook: faFacebook
    };
  },
  mounted() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }
};
</script>

<template>
  <social-sharing :url="url" inline-template>
    <div>
      <span class="has-padding-top-15 is-size-7">
        <i class="fas fa-share has-margin-top-10"></i>
        Share
      </span>
      <network network="facebook" class="button is-white is-marginless has-bg-transparent">
        <i class="fab fa-facebook"></i>
      </network>
      <network network="linkedin" class="button is-white is-marginless  has-bg-transparent">
        <i class="fab fa-linkedin"></i>
      </network>
      <network network="twitter" class="button is-white  is-marginless  has-bg-transparent">
        <i class="fab fa-twitter"></i>
      </network>
      <network network="whatsapp" class="button is-white  is-marginless  has-bg-transparent">
        <i class="fab fa-whatsapp"></i>
      </network>
      <network network="telegram" class="button is-white  is-marginless  has-bg-transparent">
        <i class="fab fa-telegram"></i>
      </network>
    </div>
  </social-sharing>
</template>



<script>
export default {
  props: ["url"]
};
</script>
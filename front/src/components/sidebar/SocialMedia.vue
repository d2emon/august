<template>
  <div class="connect">
    <a
      v-for="social in socials"
      :key="social.id"
      :id="social.id"
      :href="social.href"
      :title="social.title"
      class="social-link"
    >
      {{ social.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  props: [
    'socials',
  ],
};
</script>

<style scoped>
.connect {
  overflow: hidden;
  padding: 32px 48px 18px;
}

.social-link {
  width:37px;
  height:37px;
  display:inline-block;
  float:left;
  text-indent:-99999px;
  margin:0 2px;
}

.connect a#facebook {
  background:url(../../assets/images/icons.png) no-repeat 0 -83px;
}

.connect a#facebook:hover {
  background:url(../../assets/images/icons.png) no-repeat 0 -121px;
}

.connect a#twitter {
  background:url(../../assets/images/icons.png) no-repeat 0 -41px;
}

.connect a#twitter:hover {
  background:url(../../assets/images/icons.png) no-repeat 0 -197px;
}

.connect a#googleplus {
  background:url(../../assets/images/icons.png) no-repeat 0 0;
}

.connect a#googleplus:hover {
  background:url(../../assets/images/icons.png) no-repeat 0 -159px;
}
</style>

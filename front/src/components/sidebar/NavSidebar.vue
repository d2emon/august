<template>
  <div class="sidebar">
    <logo id="logo" />
    <nav-menu :navigation="navigation" />
    <feedback-form />
    <social-media :socials="social" />
    <div class="copyright">Автор сайта: {{ author }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NavSidebar',
  components: {
    Logo: () => import('./Logo.vue'),
    NavMenu: () => import('./NavMenu.vue'),
    FeedbackForm: () => import('./FeedbackForm.vue'),
    SocialMedia: () => import('./SocialMedia.vue'),
  },
  computed: {
    ...mapState([
      'author',
      'navigation',
      'social',
    ]),
  },
};
</script>

<style scoped>
.sidebar {
  width:229px;
  float:left;
  height:auto;
  position: relative;
}

.copyright {
  clear:both;
  text-align:center;
  color:#fff;
  text-shadow:0 1px 0 #797979;
  line-height:24px;
  font-size:12px;
  margin:0;
  letter-spacing:0.001em;
  font-family: 'Conv_Muli-Regular';
}
</style>

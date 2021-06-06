<template>
  <div class="about">
    <navigation-bar
      title="О нас"
      :links="links"
    />

    <div
      v-if="page"
      v-html="page.html"
    />
  </div>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';
import config from '@/helpers/config';

export default {
  name: 'About',
  components: {
    NavigationBar: () => import('@/components/NavigationBar.vue'),
  },
  computed: {
    ...mapState([
      'page',
      'pages',
    ]),
    links() {
      return this.pages.filter((page) => (page.slug !== config.defaultPage));
    },
  },
  methods: {
    ...mapActions([
      'fetchPages',
      'fetchPage',
    ]),
    load(pageId) {
      this.fetchPages();
      this.fetchPage(pageId || config.defaultAboutPage);
    },
  },
  mounted() {
    this.load(this.$route.params.id);
  },
  watch: {
    $route(value) {
      this.load(value.params.id);
    },
  },
};
</script>

<style>
.body .about {
  padding:0 0 85px 0;
}
.body .about img {
  margin: 27px 0 37px;
}
.body .about h4 {
  background: url("../assets/images/border.jpg") repeat-x scroll right center transparent;
  width:665px;
  overflow:hidden;
  margin:0 21px;
}
.body .about h4 span {
  background-color: #FFFFFF;
  color: #7D7D7D;
  display: inline;
  font-family: 'Conv_Muli-Regular';
  font-size: 18px;
  font-weight: normal;
  line-height:24px;
  margin:22px 0;
  padding:0 56px 0 0;
}
.body .about p {
  margin:25px 0 24px;
  font-size:13px;
}
</style>

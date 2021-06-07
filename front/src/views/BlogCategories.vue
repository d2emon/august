<template>
  <div class="blog-categories">
    <div
      v-if="category"
      class="content"
    >
      <h3><span>{{ category.title }}</span></h3>
      <ul
        v-if="articles"
      >
        <li
          v-for="article in articles"
          :key="article.id"
        >
          <router-link :to="article.to">{{ article.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'BlogCategories',
  computed: {
    ...mapState([
      'articleCategories',
      'articles',
    ]),
    category() {
      console.log(this.articleCategories);
      return this.articleCategories
        ? this.articleCategories.find((item) => (item.slug === this.$route.params.id))
        : null;
    },
  },
  methods: {
    ...mapActions([
      'fetchCategories',
      'fetchCategoryArticles',
    ]),
    async load(categoryId) {
      await this.fetchCategories();
      await this.fetchCategoryArticles(categoryId);
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

<style scoped>
.blog-categories ul.navigation {
  float:right;
  overflow:hidden;
  padding:32px 10px 22px 0;
  margin:0;
  list-style:none;
  clear:right;
}
.blog-categories ul.navigation li a:hover {
  color:#e6e6e6;
}
.content {
  margin: 0;
  overflow: initial;
}
.content h3 {
  background: url("../assets/images/border.jpg") repeat-x scroll right center transparent;
  margin: 0 21px 27px;
  overflow: hidden;
  width: 665px;
}
.content h3 span {
  background-color: #FFFFFF;
  color: #7D7D7D;
  display: inline;
  font-family: 'Conv_Muli-Regular';
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin: 22px 0;
  padding: 0 11px 0 0;
}
.content ul li {
  height: 280px;
}
.blog-categories ul {
  overflow:hidden;
  padding: 0 11px 40px;
}
.blog-categories ul li {
  width:217px;
  float:left;
  margin: 0 5px;
  text-align:center;
}
.blog-categories ul li a:first-child {
  margin:0;
}
.blog-categories ul li a:first-child img:hover {
  filter:alpha(opacity=90);/* Needed for IE8 and old versions */
  opacity:0.9;
}
.blog-categories ul li span {
  font-family:"Myriad Pro", sans-serif;
  font-size:12px;
  color:#7d7d7d;
  margin:14px 0 5px;
  display:block;
}
.blog-categories ul li a {
  text-decoration:none;
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color:#7d7d7d;
  text-transform:uppercase;
  font-size:14px;
  display:inline-block;
  margin:0 0 20px;
}
.blog-categories ul li a:hover {
  color:#404040;
}
</style>

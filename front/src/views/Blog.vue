<template>
  <div class="blog">
    <div
      class="article"
      v-if="article"
    >
      <h2>{{ article.title }}</h2>
      <div
        class="article-content"
        v-html="article.text"
      />
      <div class="share">
        <span>
          Опубликовано {{ article.published }} в
          <template v-for="(category, categoryId) in article.categories">
            <router-link
              :key="category.id"
              :to="category.to"
            >
              {{ category.title }}
            </router-link>
            <template v-if="categoryId < article.categories.length - 1">, </template>
          </template>
        </span>
        <span><a :href="article.toComments">Комментарии {{ article.comments }}</a></span>
      </div>
      <div class="paging">
        <router-link :to="article.prevPost" class="prev-post">
          &#60;&#60; Предыдущая Запись
        </router-link>
        <router-link :to="article.nextPost" class="next-post">
          Следующая Запись &#62;&#62;
        </router-link>
      </div>
    </div>

    <div class="section">
      <div>
        <h3>Новые статьи</h3>
        <ul v-if="recentArticles">
          <li
            v-for="a in recentArticles"
            :key="a.id"
          >
            <router-link :to="a.to">{{ a.title }}</router-link><br />
            <span>{{ a.published }}</span>
          </li>
        </ul>
      </div>
      <div>
        <h3>Популярные статьи</h3>
        <ul v-if="popularArticles">
          <li
            v-for="a in popularArticles"
            :key="a.id"
          >
            <router-link :to="a.to">{{ a.title }}</router-link><br />
            <span>{{ a.published }}</span>
          </li>
        </ul>
      </div>
      <div class="categories">
        <h3>Категории</h3>
        <ul v-if="articleCategories">
          <li
            v-for="category in articleCategories"
            :key="category.id"
          >
            <router-link :to="category.to">{{ category.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'Blog',
  computed: {
    ...mapState([
      'article',
      'recentArticles',
      'popularArticles',
      'articleCategories',
    ]),
  },
  methods: {
    ...mapActions(['fetchBlog']),
  },
  mounted() {
    this.fetchBlog();
  },
};
</script>

<style scoped>
.article {
  margin: 0;
}
.article-content img {
  margin:28px 0 0 21px;
}
.article-content p {
  font-size:13px;
  margin:14px 0 25px;
}
.share {
  background:url(../assets/images/bg-share.jpg) repeat-x;
  height:42px;
}
.share span:first-child {
  line-height: 43px;
  font-family:"Myriad Pro", sans-serif;
  font-size:11px;
  color:#808080;
  float:left;
}
.share span:first-child a {
  color:#333333;
  text-decoration:none;
  display:inline-block;
}
.share span {
  float:right;
  color:#333333;
  font-family:"Myriad Pro", sans-serif;
  font-size:11px;
  line-height: 43px;
  padding:0 20px 0 0;
}
.share span a {
  color:#333333;
  text-decoration:none;
}
.share span a:hover {
  text-decoration:underline;
}
.paging {
  overflow:hidden;
}
.paging a.prev-post {
  float:left;
  padding:0;
}
.paging a {
  color:#333333;
  font-family:"Myriad Pro", sans-serif;
  font-size:11px;
  line-height: 43px;
  text-transform:uppercase;
  text-decoration:none;
  float:right;
  padding:0 30px 0 0;
}
.paging a:hover, .share span:first-child a:hover {
  text-decoration:underline;
}
.section {
  margin: 0;
  background-color:#f4f4f4;
  -moz-box-shadow: 0 0 9px -1px #888888 inset;
  -webkit-box-shadow: 0 0 9px -1px #888888 inset;
  box-shadow: 0 0 9px -1px #888888 inset;
}
.section div:first-child {
  background:none;
}
.section div {
  width:195px;
  background:url(../assets/images/bg-border.jpg) repeat-y left top;
  float:left;
  margin:0;
  text-align:left;
  padding:0 20px;
}
.section div h3 {
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size:16px;
  color:#7d7d7d;
  text-transform:uppercase;
  background:none;
  margin:30px 0 15px;
}
.section div ul li {
  text-align:left;
  height:auto;
  background:none;
  margin:0 0 15px!important;
}
.section div ul li a {
  font-family:"Myriad Pro", sans-serif;
  text-decoration:none;
  font-size:13px;
  text-transform:none;
  color:#414141;
  margin:0 0 3px!important;
}
.section div ul li a:hover {
  text-decoration:underline;
  color:#414141;
}
.section .categories ul li {
  width:95px;
}
</style>

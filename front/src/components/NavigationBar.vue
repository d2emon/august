<template>
  <div>
    <h2 v-if="title">{{ title }}</h2>
    <ul
      v-if="links"
      class="navigation"
    >
      <li
        v-for="link in links"
        :key="link.id"
      >
        <router-link :to="link.to">{{link.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: [
    'title',
    'links',
  ],
};
</script>

<style scoped>
h2 {
  float: left;
}

ul.navigation {
  float:right;
  overflow:hidden;
  padding:32px 10px 22px 0;
  margin:0;
  list-style:none;
  clear:right;
}

ul.navigation li.selected,
ul.navigation li:hover {
  background:url(../assets/images/bg-nav-selected.jpg) repeat-x;
}
ul.navigation li:hover a {
  color:#fff;
}
ul.navigation li.selected a {
  color:#fff;
}
ul.navigation li:first-child {
  margin:0;
}
ul.navigation li {
  height:38px;
  float:left;
  border-radius:7px;
  background:url(../assets/images/bg-nav.jpg) repeat-x;
  margin:0 0 0 6px;
  border-width:2px;
  border-style:none solid;
  border-color:#f4f4f4;
  width: auto;
}

ul.navigation li .router-link-active {
  background:url(../assets/images/bg-nav-selected.jpg) repeat-x;
  color:#fff;
}

ul.navigation li a {
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size:16px;
  text-decoration:none;
  color:#7f7f7f;
  text-transform:uppercase;
  line-height: 38px;
  padding:0 12px;
  display:block;
}
</style>

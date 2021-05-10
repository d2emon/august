<template>
  <ul class="nav-menu">
    <li
      v-for="(link, linkId) in navigation"
      :key="linkId"
    >
      <router-link :to="link.to">{{ link.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavMenu',
  props: [
    'navigation',
  ],
};
</script>

<style scoped>
.nav-menu {
  padding:0;
  margin:0;
  list-style:none;
}

li:first-child {
  padding-top:0;
}

li {
  text-align:right;
  padding:29px 27px 0 0;
}

li.selected a,
li a:hover {
  color:#6b6b6b;
}

li a {
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size:24px;
  color:#919191;
  font-weight:normal;
  text-transform:uppercase;
  text-decoration:none;
  line-height:30px;
  text-shadow:0 1px 0 #dfdfdf;
}

.nav-menu li .router-link-active {
  color: #6b6b6b;
}
</style>

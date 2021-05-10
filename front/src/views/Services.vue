<template>
  <div class="services">
    <h2>Design</h2>

    <ul
      class="navigation"
      v-if="serviceLinks"
    >
      <li
        v-for="(link, linkId) in serviceLinks"
        :key="linkId"
      >
        <router-link :to="link.to">{{link.title}}</router-link>
      </li>
    </ul>

    <ul
      v-if="services"
    >
      <li
        v-for="(service, serviceId) in services"
        :key="serviceId"
      >
        <h3><span>{{ service.title }}</span></h3>
        <div>
          <img
            :src="service.img"
            :alt="service.title"
            :title="service.title"
          />
        </div>
        <div
          v-html="service.text"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Services',
  computed: {
    ...mapState([
      'serviceLinks',
      'services',
    ]),
  },
};
</script>

<style scoped>
.body .services h2, .body .portfolio h2 {
  float:left;
}
.body .services ul.navigation {
  float:right;
  overflow:hidden;
  padding:32px 10px 22px 0;
  margin:0;
  list-style:none;
  clear:right;
}
.body .services ul.navigation li.selected,
.body .portfolio ul.navigation li:hover,
.body .services ul.navigation li:hover {
  background:url(../assets/images/bg-nav-selected.jpg) repeat-x;
}
.body .services ul.navigation li:hover a {
  color:#fff;
}

.body .services ul.navigation li.selected a,
.body .portfolio ul.navigation li.selected a {
  color:#fff;
}
.body .services ul.navigation li:first-child,
.body .portfolio ul.navigation li:first-child {
  margin:0;
}
.body .services ul.navigation li,
.body .portfolio ul.navigation li {
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

.services .navigation li .router-link-active {
  background:url(../assets/images/bg-nav-selected.jpg) repeat-x;
  color:#fff;
}

.services .navigation li a {
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size:16px;
  text-decoration:none;
  color:#7f7f7f;
  text-transform:uppercase;
  line-height: 38px;
  padding:0 12px;
  display:block;
}

.body .portfolio ul.navigation li a {
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size:16px;
  text-decoration:none;
  color:#7f7f7f;
  text-transform:uppercase;
  line-height: 38px;
  padding:0 12px;
  display:block;
}

.body .services ul, .body .portfolio ul {
  clear:both;
  padding:0 0 195px;
  margin:0;
  list-style:none;
}
.body .services ul li {
  overflow:hidden;
}
.body .services ul li h3 {
  background: url("../assets/images/border.jpg") repeat-x scroll right center transparent;
  width:665px;
  overflow:hidden;
  margin:0 21px;
}
.body .services ul li h3 span {
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
.body .services ul li div {
  margin:35px 0 0 29px;
  width:251px;
  min-height:290px;
  height:auto;
  float:left;
}
.body .services ul li p {
  float: right;
  padding: 0 25px 0 0;
  width: 400px;
  margin: 20px 0;
  font-family: 'Conv_Muli-Regular';
  font-size:13px;
}
</style>

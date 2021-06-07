<template>
  <div class="what-we-do">
    <h3><span>{{title}}</span></h3>

    <slot />

    <ul v-if="links" class="service-links">
      <li
        v-for="link in links"
        :key="link.id"
        :id="link.id"
      >
        <v-card
          :to="link.to"
          height="257px"
          width="215px"
        >
          <v-img
            v-if="link.image"
            :src="link.image"
            height="257px"
            width="215px"
          >
            <div class="service-name">{{link.title}}</div>
          </v-img>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WhatWeDo',
  props: [
    'title',
    'links',
  ],
};
</script>

<style scoped>
.what-we-do {
  background:none;
  box-shadow:none;
  margin: 0 21px;
}
h3 {
  background:url(../assets/images/border.jpg) repeat-x right center;
  margin:20px 0 24px;
}
h3 span {
  font-family: 'Conv_Muli-Regular';
  font-size:18px;
  color:#7d7d7d;
  font-weight:normal;
  display:block;
  background-color:#fff;
  width: 140px;
}
div {
  margin:0;
}
p {
  padding:0;
}
ul.service-links {
  margin:0;
  padding:4px 0 7px;
  list-style:none;
  overflow:hidden;
}
ul.service-links li:first-child {
  margin:0;
}
ul.service-links li {
  float:left;
  height: 257px;
  width: 215px;
  position:relative;
  margin:0 0 0 7px;
}
ul.service-links li:hover {
  filter:alpha(opacity=90);/* Needed for IE8 and old versions */
  opacity:0.9;
}
ul.service-links li a {
  text-decoration: none;
}
.service-name {
  color:#7c7c7c;
  font-size:24px;
  text-transform:uppercase;
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-decoration:none;
}
.service-name:hover {
  color: #919191;
}
</style>

<template>
  <div id="app" class="border">
    <div id="bg"></div>
    <div class="page">
      <nav-sidebar />

      <div class="body">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'August',
  components: {
    NavSidebar: () => import('../components/sidebar/NavSidebar.vue'),
  },
};
</script>

<style>
body {
  background:url(../assets/images/bg-body.jpg);
  margin:0;
}
a {
  outline:none;
}
a img {
  border:0;
  display:block;
}
#app {
  position:relative;
  margin: 25px 0;
  -moz-box-shadow:    3px 3px 4px 0 #a3a3a3;
  -webkit-box-shadow: 3px 3px 4px 0 #a3a3a3;
  box-shadow:         3px 3px 4px 0 #a3a3a3;
  border-top:1px solid #9a9a9a;
  background:#e3e3e3;
}
.page {
  width:960px;
  margin:0 auto;
  overflow:hidden;
}
#bg {
  background:url(../assets/images/bg-sidebar.jpg);
  height: 99.8%;
  left: 0;
  margin: 0;
  position: absolute;
  text-indent: -99999px;
  width: 51%;
  z-index: 0;
  border-color: #E5E5E5;
  border-style: solid none none;
  border-width: 1px;
}
</style>

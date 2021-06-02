<template>
  <div class="portfolio">
    <h2>Портфолио</h2>
    <ul
      class="navigation"
      v-if="services"
    >
      <li
        v-for="service in services"
        :key="service.id"
        :id="service.id"
      >
        <router-link :to="service.toPortfolio">{{service.title}}</router-link>
      </li>
    </ul>
    <div
      v-if="service"
      class="content"
    >
      <h3><span>{{ service.title }}</span></h3>
      <ul
        v-if="service.projects"
      >
        <li
          v-for="project in service.projects"
          :key="project.id"
        >
          <a :href="project.image"><img :src="project.image" alt=""></a>
          <span>Клиент: {{ project.client }}</span>
          <router-link :to="project.to">Подробнее</router-link>
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
  name: 'Portfolio',
  computed: {
    ...mapState([
      'services',
      'service',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchServices',
      'fetchService',
    ]),
  },
  mounted() {
    this.fetchServices();
    this.fetchService(this.$route.params.service);
  },
  watch: {
    $route() {
      this.fetchService(this.$route.params.service);
    },
  },
};
</script>

<style scoped>
.portfolio ul.navigation {
  float:right;
  overflow:hidden;
  padding:32px 10px 22px 0;
  margin:0;
  list-style:none;
  clear:right;
}
.portfolio ul.navigation li a:hover {
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
.portfolio ul {
  overflow:hidden;
  padding: 0 11px 40px;
}
.portfolio ul li {
  width:217px;
  float:left;
  margin: 0 5px;
  text-align:center;
}
.portfolio ul li a:first-child {
  margin:0;
}
.portfolio ul li a:first-child img:hover {
  filter:alpha(opacity=90);/* Needed for IE8 and old versions */
  opacity:0.9;
}
.portfolio ul li span {
  font-family:"Myriad Pro", sans-serif;
  font-size:12px;
  color:#7d7d7d;
  margin:14px 0 5px;
  display:block;
}
.portfolio ul li a {
  text-decoration:none;
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color:#7d7d7d;
  text-transform:uppercase;
  font-size:14px;
  display:inline-block;
  margin:0 0 20px;
}
.portfolio ul li a:hover {
  color:#404040;
}
</style>

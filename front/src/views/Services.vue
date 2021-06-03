<template>
  <div class="services">
    <navigation-bar
      title="Наши услуги"
      :links="links"
    />

    <div
      class="service"
      v-if="service"
    >
      <h3><span>{{ service.title }}</span></h3>
      <div>
        <img
          :src="service.image"
          :alt="service.title"
          :title="service.title"
        />
      </div>
      <div
        v-html="service.text"
      />
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'Services',
  components: {
    NavigationBar: () => import('@/components/NavigationBar.vue'),
  },
  computed: {
    ...mapState([
      'services',
      'service',
    ]),
    links() {
      return this.services.map((service) => ({
        id: service.id,
        title: service.title,
        to: service.to,
      }));
    },
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
.services h2 {
  float:left;
}

.service {
  clear: both;
  padding: 0 0 195px;
  margin: 0;
}
.service h3 {
  background: url("../assets/images/border.jpg") repeat-x scroll right center transparent;
  width:665px;
  overflow:hidden;
  margin:0 21px;
}
.service h3 span {
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
.service div {
  margin:35px 0 0 29px;
  width:251px;
  min-height:290px;
  height:auto;
  float:left;
}
.service p {
  float: right;
  padding: 0 25px 0 0;
  width: 400px;
  margin: 20px 0;
  font-family: 'Conv_Muli-Regular';
  font-size:13px;
}
</style>

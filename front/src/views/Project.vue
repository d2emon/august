<template>
  <div class="projects">
    <div
      class="project"
      v-if="project"
    >
      <h3><span>{{ project.title }}</span></h3>
      <div>
        <img
          :src="project.image"
          :alt="project.title"
          :title="project.title"
        />
        <h4>Клиент: {{ project.client }}</h4>
      </div>
      <div
        v-html="project.html"
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
  name: 'Project',
  computed: {
    ...mapState([
      'project',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchProject',
    ]),
    load(projectId) {
      this.fetchProject(projectId);
    },
  },
  mounted() {
    this.load(this.$route.params.id);
  },
  watch: {
    $route(value) {
      this.fetchService(value.params.id);
    },
  },
};
</script>

<style scoped>
.project {
  clear: both;
  padding: 0 0 195px;
  margin: 0;
}
.project h3 {
  background: url("../assets/images/border.jpg") repeat-x scroll right center transparent;
  width:665px;
  overflow:hidden;
  margin:0 21px;
}
.project h3 span {
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
.project div {
  margin:35px 0 0 29px;
  width:251px;
  min-height:290px;
  height:auto;
  float:left;
}
.project p {
  float: right;
  padding: 0 25px 0 0;
  width: 400px;
  margin: 20px 0;
  font-family: 'Conv_Muli-Regular';
  font-size:13px;
}
</style>

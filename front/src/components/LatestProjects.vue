<template>
  <div class="latest-projects">
    <h3><span>{{ title }}</span></h3>
    <ul v-if="projects">
      <li
        v-for="(project, projectId) in projects"
        :key="projectId"
      >
        <router-link :to="project.to">
          <img
            :src="project.image"
            :alt="project.title"
          />
        </router-link>
        <span>Project: {{ project.title }}</span>
        <span>Client: {{ project.client }}</span>
        <router-link :to="project.to">Подробнее</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LatestServices',
  props: [
    'title',
    'projects',
  ],
};
</script>

<style scoped>
.latest-projects {
  background:none;
  box-shadow:none;
  margin: 0 21px;
}
.latest-projects h3 {
  background:url(../assets/images/border.jpg) repeat-x right center;
  margin:20px 0 24px;
}
.latest-projects h3 span {
  font-family: 'Conv_Muli-Regular';
  font-size:18px;
  color:#7d7d7d;
  font-weight:normal;
  display:block;
  background-color:#fff;
  width: 140px;
}
.latest-projects ul {
  margin:0;
  padding:4px 0 33px;
  list-style:none;
  overflow:hidden;
  height:200px;
}
.latest-projects ul li:first-child {
  margin:0;
}
.latest-projects ul li {
  float:left;
  height: 257px;
  width:200px;
  position:relative;
  margin: 0 0 0 32px;

  text-align:center;
  background:url(../assets/images/shadow.png) no-repeat 0 113px;
}
.latest-projects ul li a:first-child {
  height:auto;
  margin:0 0 13px 0;
}
.latest-projects ul li a:first-child img {
  border:1px solid #e3e3e3;
}
.latest-projects ul li span {
  font-family: 'Conv_Muli-Regular';
  color:#7d7d7d;
  font-size:12px;
  display:block;
  line-height:24px;
}
.latest-projects ul li a {
  height:auto;
  width:auto;
  display:inline-block;
  text-decoration:none;

  font-size:14px;
  color:#7d7d7d;
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-transform:uppercase;
  font-weight:normal;
}
.latest-projects ul li a:hover {
  color:#404040;
}
</style>

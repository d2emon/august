<template>
  <div class="section">
    <h3><span>{{ title }}</span></h3>
    <ul v-if="projects">
      <li
        v-for="(project, projectId) in projects"
        :key="projectId"
      >
        <router-link :to="project.to">
          <img
            :src="project.img"
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

</style>

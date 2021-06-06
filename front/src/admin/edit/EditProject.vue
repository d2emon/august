<template>
  <v-container>
    <edit-item
      title="Проекты"
      slug="project"
      :item="item"
      @load="load"
    >
      <project-form
        :form-values="item"
        :services="services"
        @submit="submit"
      />
    </edit-item>
  </v-container>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'EditProject',
  components: {
    EditItem: () => import('./EditItem.vue'),
    ProjectForm: () => import('../forms/ProjectForm.vue'),
  },
  computed: {
    ...mapState([
      'project',
      'services',
    ]),
    itemId() {
      return this.$route.params.id;
    },
    item() {
      return this.$route.params.id ? this.project : null;
    },
  },
  methods: {
    ...mapActions([
      'fetchProjectById',
      'addProject',
      'updateProject',
      'fetchServices',
    ]),
    load(itemId) {
      this.fetchServices();
      this.fetchProjectById(itemId);
    },
    submit({ id, values }) {
      if (id) {
        this.updateProject({
          id,
          values,
        });
      } else {
        this.addProject(values);
      }
      this.$router.push('/admin/project');
    },
  },
};
</script>

<style scoped>

</style>

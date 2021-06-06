<template>
  <v-container>
    <v-breadcrumbs
      :items="breadcrumbs"
    />
    <v-card
      min-height="70vh"
    >
      <service-form
        :form-values="page"
        @submit="submit"
      />
    </v-card>
  </v-container>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'EditService',
  components: {
    ServiceForm: () => import('./forms/ServiceForm.vue'),
  },
  computed: {
    ...mapState([
      'page',
    ]),
    itemId() {
      return this.$route.params.id;
    },
    breadcrumbs() {
      return [
        {
          text: 'Администрирование',
          to: '/admin',
          exact: true,
        },
        {
          text: 'Услуги',
          to: '/admin/services',
          exact: true,
        },
        {
          text: `${this.item ? this.item.title : 'Услуга'}`,
          to: `/admin/services/${this.item ? this.item.id : 'add'}`,
          exact: true,
        },
      ];
    },
  },
  methods: {
    ...mapActions([
      'fetchServiceById',
      'updateService',
    ]),
    load(itemId) {
      if (!itemId) {
        return;
      }
      this.fetchServiceById(itemId);
    },
    submit(values) {
      this.updateService({
        id: this.pageId,
        values,
      });
      this.$router.push('/admin/services');
    },
  },
  mounted() {
    this.load(this.itemId);
  },
  watch: {
    $route(value) {
      this.load(value.params.id);
    },
  },
};
</script>

<style scoped>

</style>

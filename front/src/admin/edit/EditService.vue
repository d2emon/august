<template>
  <v-container>
    <edit-item
      title="Услуги"
      slug="service"
      :item="item"
      @load="load"
    >
      <service-form
        :form-values="item"
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
  name: 'EditService',
  components: {
    EditItem: () => import('./EditItem.vue'),
    ServiceForm: () => import('../forms/ServiceForm.vue'),
  },
  computed: {
    ...mapState([
      'service',
    ]),
    itemId() {
      return this.$route.params.id;
    },
    item() {
      return this.$route.params.id ? this.service : null;
    },
  },
  methods: {
    ...mapActions([
      'fetchServiceById',
      'addService',
      'updateService',
    ]),
    load(itemId) {
      this.fetchServiceById(itemId);
    },
    submit({ id, values }) {
      if (id) {
        this.updateService({
          id,
          values,
        });
      } else {
        this.addService(values);
      }
      this.$router.push('/admin/service');
    },
  },
};
</script>

<style scoped>

</style>

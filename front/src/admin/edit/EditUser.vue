<template>
  <v-container>
    <edit-item
      title="Пользователи"
      slug="user"
      :item="item"
      @load="load"
      @delete="deleteItem"
    >
      <user-form
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
  name: 'EditUser',
  components: {
    EditItem: () => import('./EditItem.vue'),
    UserForm: () => import('../forms/UserForm.vue'),
  },
  computed: {
    ...mapState([
      'user',
    ]),
    itemId() {
      return this.$route.params.id;
    },
    item() {
      return this.$route.params.id ? this.user : null;
    },
  },
  methods: {
    ...mapActions([
      'fetchServiceById',
      'addService',
      'updateService',
      'deleteService',
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
      this.$router.push('/admin/user');
    },
    deleteItem(id) {
      this.deleteService(id);
      this.$router.push('/admin/user');
    },
  },
};
</script>

<style scoped>

</style>

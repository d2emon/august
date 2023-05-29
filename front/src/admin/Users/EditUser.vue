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
    EditItem: () => import('../edit/EditItem.vue'),
    UserForm: () => import('./UserForm.vue'),
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
      'fetchUser',
      'addUser',
      'updateUser',
      'deleteUser',
    ]),
    load(itemId) {
      this.fetchUser(itemId);
    },
    submit({ id, values }) {
      if (id) {
        this.updateUser({
          id,
          values,
        });
      } else {
        this.addUser(values);
      }
      this.$router.push('/admin/user');
    },
    deleteItem(id) {
      this.deleteUser(id);
      this.$router.push('/admin/user');
    },
  },
};
</script>

<style scoped>

</style>

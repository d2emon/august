<template>
  <v-container>
    <edit-item
      title="Рассылка"
      slug="email"
      :item="item"
      @load="load"
      @delete="deleteItem"
    >
      <email-form
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
  name: 'EditEmail',
  components: {
    EditItem: () => import('./EditItem.vue'),
    EmailForm: () => import('../forms/EmailForm.vue'),
  },
  computed: {
    ...mapState([
      'email',
    ]),
    itemId() {
      return this.$route.params.id;
    },
    item() {
      return this.$route.params.id ? this.email : null;
    },
  },
  methods: {
    ...mapActions([
      'fetchEmail',
      'addEmail',
      'updateEmail',
      'deleteEmail',
    ]),
    load(itemId) {
      this.fetchEmail(itemId);
    },
    submit({ id, values }) {
      if (id) {
        this.updateEmail({
          id,
          values,
        });
      } else {
        this.addEmail(values);
      }
      this.$router.push('/admin/email');
    },
    deleteItem(id) {
      this.deleteEmail(id);
      this.$router.push('/admin/email');
    },
  },
};
</script>

<style scoped>

</style>

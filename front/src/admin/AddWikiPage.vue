<template>
  <v-container>
    <v-breadcrumbs
      :items="breadcrumbs"
    />
    <v-card
      min-height="70vh"
    >
      <v-card-title>
        {{ pageId }}
      </v-card-title>
      <wiki-form
        :form-values="newItem"
        @submit="submit"
      />
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddWikiPage',
  components: {
    WikiForm: () => import('./forms/WikiForm.vue'),
  },
  computed: {
    pageId() {
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
          text: 'Страницы',
          to: '/admin/wiki',
          exact: true,
        },
        {
          text: 'Добавление',
          to: '/admin/wiki/add',
          exact: true,
        },
      ];
    },
    newItem() {
      return {
        title: '',
        text: '',
      };
    },
  },
  methods: {
    ...mapActions([
      'addPage',
    ]),
    submit(value) {
      this.addPage(value);
      this.$router.push('/admin/wiki');
    },
  },
};
</script>

<style scoped>

</style>

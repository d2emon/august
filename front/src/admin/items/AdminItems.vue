<template>
  <v-container>
    <v-breadcrumbs
      :items="breadcrumbs"
    />
    <v-card
      min-height="70vh"
    >
      <v-toolbar
        color="primary"
        dark
      >
        <v-btn
          text
          :to="`/admin/${slug}/add`"
        >
          Добавить
        </v-btn>
      </v-toolbar>
      <v-list
        nav
        dense
      >
        <v-list-item
          v-for="item in items"
          :key="item.id"
          :to="`/admin/${slug}/${item.id}`"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AdminItems',
  computed: {
    breadcrumbs() {
      return [
        {
          text: 'Администрирование',
          to: '/admin',
          exact: true,
        },
        {
          text: this.title,
          to: `/admin/${this.slug}`,
          exact: true,
        },
      ];
    },
  },
  props: [
    'items',
    'title',
    'slug',
  ],
};
</script>

<style scoped>

</style>

<template>
  <v-container>
    <v-breadcrumbs
      :items="breadcrumbs"
    />
    <v-card
      min-height="70vh"
    >
      <slot />
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'EditItem',
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
        {
          text: `${this.item ? this.item.title : 'Добавить'}`,
          to: `/admin/${this.slug}/${this.item ? this.item.id : 'add'}`,
          exact: true,
        },
      ];
    },
    itemId() {
      return this.$route.params.id;
    },
  },
  methods: {
    load(itemId) {
      if (!itemId) {
        return;
      }
      this.$emit('load', itemId);
    },
  },
  props: [
    'title',
    'slug',
    'item',
  ],
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

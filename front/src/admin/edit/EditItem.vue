<template>
  <v-container>
    <v-breadcrumbs
      :items="breadcrumbs"
    />
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Вы действительно хотите удалить?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card
      min-height="70vh"
    >
      <v-card-actions>
        <v-btn
          color="error"
          @click="showDeleteDialog"
        >
          Удалить
        </v-btn>
      </v-card-actions>
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
  data: () => ({
    dialogDelete: false,
  }),
  methods: {
    load(itemId) {
      if (!itemId) {
        return;
      }
      this.$emit('load', itemId);
    },
    showDeleteDialog() {
      this.dialogDelete = true;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    deleteItemConfirm() {
      this.$emit('delete', this.itemId);
      this.closeDelete();
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

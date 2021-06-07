<template>
  <v-container>
    <edit-item
      title="Социальные сети"
      slug="social"
      :item="item"
      @load="load"
    >
      <social-form
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
  name: 'EditSocial',
  components: {
    EditItem: () => import('./EditItem.vue'),
    SocialForm: () => import('../forms/SocialForm.vue'),
  },
  computed: {
    ...mapState([
      'socials',
    ]),
    itemId() {
      return this.$route.params.id;
    },
    item() {
      return this.$route.params.id
        ? this.socials.find((item) => (item.id === this.$route.params.id))
        : null;
    },
  },
  methods: {
    ...mapActions([
      'fetchSocials',
      'addSocial',
      'updateSocial',
    ]),
    load() {
      this.fetchSocials();
    },
    submit({ id, values }) {
      if (id) {
        this.updateSocial({
          id,
          values,
        });
      } else {
        this.addSocial(values);
      }
      this.$router.push('/admin/social');
    },
  },
};
</script>

<style scoped>

</style>

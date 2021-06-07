<template>
  <div class="connect">
    <v-btn
      v-for="social in socials"
      :key="social.id"
      :href="social.href"
      :title="social.title"
      class="mx-1"
      fab
      dark
      small
    >
      <v-icon
        dark
      >
        {{ linkMap[social.social] }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  props: [
    'socials',
  ],
  data: () => ({
    linkMap: {
      fb: 'mdi-facebook',
      twitter: 'mdi-twitter',
      vk: 'mdi-vk',
    },
  }),
};
</script>

<style scoped>
.connect {
  overflow: hidden;
  padding: 32px 0 18px;
  text-align: center;
}
</style>

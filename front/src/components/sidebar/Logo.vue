<template>
  <router-link to="/index" id="logo">
    <span>{{ title }}</span>
    <img src="@/assets/images/logo.png" alt="logo">
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  props: [
    'title',
  ],
};
</script>

<style scoped>
a {
  text-decoration: none;
}
span {
  display: block;
  text-align: center;
  padding-top: 24px;
  color: #6b6b6b;
}

</style>

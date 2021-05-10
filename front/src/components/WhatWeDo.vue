<template>
  <div>
    <h3><span>{{title}}</span></h3>

    <slot />

    <ul v-if="links">
      <li
        v-for="(link, linkId) in links"
        :key="linkId"
        :id="linkId"
      >
        <router-link :to="link.to"><span>{{link.title}}</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WhatWeDo',
  props: [
    'title',
    'links',
  ],
};
</script>

<style scoped>

</style>

<template>
  <v-row>
    <v-col>
      <v-textarea
        :label="label"
        :value="value"
        @input="onInput"
      />
    </v-col>
    <v-col>
      <div
        class="markdown-preview"
        v-html="html"
      />
    </v-col>
  </v-row>
</template>

<script>
import markdown from '@/helpers/markdown';

export default {
  name: 'MarkdownPreview',
  computed: {
    html() {
      return markdown.render(this.value || '');
    },
  },
  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
  props: [
    'label',
    'value',
  ],
};
</script>

<style scoped>
.markdown-preview {
  max-width: 350px;
  overflow: scroll;
}
</style>

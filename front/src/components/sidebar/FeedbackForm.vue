<template>
  <v-card
    flat
  >
    <v-card-title>Подписка на рассылку</v-card-title>
    <v-container>
      <v-text-field
        v-model="value"
        label="Введите адрес электронной почты"
      />
      <v-btn
        id="submit"
        :disabled="!value"
        @click="submit"
      >
        Подписаться
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'FeedbackForm',
  data: () => ({
    value: '',
  }),
  methods: {
    submit() {
      this.$emit('submit', this.value);
    },
  },
};
</script>

<style scoped>
.v-card {
  background-color: transparent;
  margin:100px 0 0;
  text-align:center;
}

.v-card__title {
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color:#7d7d7d;
  text-shadow:-1px 1px 0 #fff;
  font-size:18px;
  text-transform:uppercase;
  padding: 0 0 7px;
  display:block;
  word-break: break-word;
}

.v-card .v-btn {
  background: none #e6e6e6;
  /* width:84px; */
  border-radius:5px;
  border:1px solid #fff;
  /* padding:0; */
  height:23px;
  color:#767676;
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-transform:uppercase;
  font-size:13px;
  margin:12px 0 0;
  cursor:pointer;
  text-shadow:none;
}
</style>

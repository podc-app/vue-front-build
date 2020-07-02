<template>
  <v-container>
    <v-row dense wrap justify="center">
      <v-col cols="12">
        <v-switch
          v-model="isThemeDark"
          color="primary"
          :label="`Ночной режим: ${isThemeDark?'вкл.':'выкл.'}`"
        ></v-switch>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      isThemeDark: false
    };
  },
  watch: {
    isThemeDark(value) {
      console.log(value);
      this.$vuetify.theme.dark = value;
    }
  }
};
</script>

<style>
</style>
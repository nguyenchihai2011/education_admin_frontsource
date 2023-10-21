<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
    <v-spacer />
    <v-switch
      v-model="$vuetify.theme.dark"
      inset
      hide-details
      light
      color="white"
    ></v-switch>
    <v-icon v-if="$vuetify.theme.dark" color="white"
      >mdi-theme-light-dark</v-icon
    >
    <v-icon v-else color="black">mdi-theme-light-dark</v-icon>
  </v-app-bar>
</template>
<script>
export default {
  name: "DefaultBar",
  computed: {
    drawer: {
      get() {
        return this.$store.getters["app/getDrawer"];
      },
      set(value) {
        return this.$store.commit("app/setDrawer", value);
      }
    }
  }
};
</script>
<style lang="scss"></style>

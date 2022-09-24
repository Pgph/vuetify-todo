<template>
  <v-app>
    <v-main class="grey lighten-4 mx-4 mb-4">
      <Navbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>

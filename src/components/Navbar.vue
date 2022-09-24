<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added a new project. </span>
      <v-btn
        depressed
        small
        outlined
        color="white--text"
        @click="snackbar = false"
        >Close</v-btn
      >
    </v-snackbar>

    <v-toolbar flat app color="grey lighten-4">
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Patryk Borkowski</span>
        <span> Junior JavaScript Developer</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dopdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn depressed color="grey--text lighten-4" v-on="on">
            <v-icon left>mdi-menu-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn plain class="grey-text lighten-4">
        <span class="grey--text lighten-4">Sign Out</span>
        <v-icon class="grey--text lighten-4" right>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-10">
          <v-avatar size="100">
            <img src="/avatar-1.jpg" />
          </v-avatar>
          <p class="white--text subheading mt-1">Patryk Borkowski</p>
        </v-flex>
        <v-flex class="mt-4 mb-4">
          <Popup @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">
              {{ link.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">
            {{ link.text }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";

export default {
  components: { Popup },
  name: "NavBar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "Projects", route: "/projects" },
        { icon: "mdi-account-group", text: "Team", route: "/team" },
      ],
      snackbar: false,
    };
  },
};
</script>

<style>
.flex.mt-10 {
  display: grid;
  justify-items: center;
}
</style>

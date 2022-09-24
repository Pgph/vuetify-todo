<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="py-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              small
              depressed
              color="grey--text lighten-4"
              @click="sortBy('title')"
              v-on="tooltip"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              small
              depressed
              color="grey--text lighten-4"
              @click="sortBy('person')"
              v-on="tooltip"
            >
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort by person</span>
        </v-tooltip>
      </v-layout>

      <v-card depressed v-for="project in projects" :key="project.title">
        <v-layout my-1 row class="white">
          <v-flex xs12 md6 :class="`pl-3 py-3 project ${project.status}`">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="py-3">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2 class="py-3">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2 class="py-3">
            <div class="py-3 float-right pr-15">
              <v-chip
                small
                :class="`py-3 ${project.status} white--text caption my-2`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";
export default {
  name: "DashBoard",
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  created() {
    db.collection("projects").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.projects.push({ ...change.doc.data(), id: change.doc.id });
        }
      });
    });
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}
</style>

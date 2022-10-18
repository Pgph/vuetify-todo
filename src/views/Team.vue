<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn depressed class="grey--text">
                <v-icon small left>mdi-message-text</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TeAm",
  data() {
    return {
      team: [
        {
          name: "Frank",
          role: "Web developer",
          avatar: "/avatar-1.jpg",
        },
        {
          name: "Chun Li",
          role: "Graphic designer",
          avatar: "/avatar-2.jpg",
        },
        {
          name: "Ryu",
          role: "Web developer",
          avatar: "/avatar-3.jpg",
        },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar: "/avatar-4.jpg",
        },
        {
          name: "Yoshi",
          role: "Sales guru",
          avatar: "/avatar-5.jpg",
        },
      ],
    };
  },
};
</script>

<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn depressed color="primary lighten-1" v-on="on">
        Add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            :rules="inputRules"
            v-model="title"
            prepend-icon="mdi-folder"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            :rules="inputRules"
            prepend-icon="mdi-pencil"
          ></v-textarea>

          <v-menu>
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                :value="formatedDate"
                :rules="inputRules"
                label="Date"
                prepend-icon="mdi-calendar"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date"></v-date-picker>
          </v-menu>
          <v-btn
            flat
            class="success mx-0 mt-3"
            @click="submit"
            :loading="loading"
          >
            Add project
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import app from "../fb";
export default {
  name: "PopUp",
  data() {
    return {
      title: "",
      content: "",
      date: null,
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          date: this.date,
          person: "The Net Ninja",
          status: "ongoing",
        };
        app
          .collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("projectAdded");
          });
      }
    },
  },
};
</script>

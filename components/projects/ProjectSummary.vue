<template>
  <v-card
    color="blue-grey darken-1"
    class="project-summary my-2"
    elevation="2"
    hover
  >
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-text>{{ project.description }}</v-card-text>
    <v-card-subtitle>{{ dateFormat1 }}</v-card-subtitle>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
  props: {
    project: {
      required: true
    }
  },
  computed: {
    date() {
      return moment(this.project.createdAt.toDate()).calendar();
    },
    dateFormat1() {
      return moment(this.project.createdAt.toDate()).format(
        "dddd, MMMM Do YYYY, h:mm:ss a"
      );
    }
  }
};
</script>

<style></style>

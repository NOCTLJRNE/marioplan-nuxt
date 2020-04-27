<template>
  <v-card
    color="blue-grey darken-1"
    class="project-summary my-2"
    elevation="2"
    hover
  >
    <!-- <v-card-title>{{ project.title }}</v-card-title> -->
    <v-card-text>{{ notif.user + " " + notif.content }}</v-card-text>
    <v-card-subtitle>{{ date }}</v-card-subtitle>
  </v-card>
</template>

<script>
import moment from "moment";
export default {
  props: {
    notif: {
      required: true
    }
  },
  computed: {
    date() {
      return moment(this.notif.time.toDate()).calendar();
    },
    dateFormat1() {
      return moment(this.notif.time.toDate()).format(
        "dddd, MMMM Do YYYY, h:mm:ss a"
      );
    }
  }
};
</script>

<style></style>

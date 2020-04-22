<template>
  <v-card
    color="blue-grey darken-1"
    class="project-summary my-2"
    elevation="2"
    hover
  >
    <v-card-title>{{ project.title }}</v-card-title>
    <v-card-subtitle>1am 21th Apr 2020</v-card-subtitle>
    <v-card-text>Posted by me ......</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      required: true
    }
  }
};
</script>

<style></style>

<template>
  <v-container class="section project-details">
    <v-card color="blue-grey darken-1" class="my-2" hover>
      <v-card-title>Project n° {{projectID}}</v-card-title>
      <v-card-text>Posted by me ...... this is incredeble, this is madness, ok I have no ideawhat to doanymore</v-card-text>
      <v-card-subtitle>Posted by PHBA2061 on 1am 21th Apr 2020</v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    projectID() {
      return this.$route.params.projectID;
    }
  }
};
</script>

<style>
</style>
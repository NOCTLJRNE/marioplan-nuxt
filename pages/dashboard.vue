<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="6">
        <ProjectList v-bind:projectsList="projectsList" />
      </v-col>
      <v-col sm="12" md="5" offset-md="1">
        <Notifications />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Notifications from "@/components/dashboard/Notifications.vue";
import ProjectList from "@/components/projects/ProjectList.vue";
export default {
  components: {
    Notifications,
    ProjectList
  },
  computed: {
    ...mapState("projects", {
      // specifying the namespace, aka the js file name ...
      projectsList: state => state.projectsList // ... and the state to bind
    })
  }
};
</script>

<style></style>

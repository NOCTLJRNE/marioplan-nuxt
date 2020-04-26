<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="6">
        <ProjectList v-bind:projectsList="projects" />
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
  firestore() {
    return {
      projects: this.projectsList
        .where("authorId", "==", this.userID)
        .orderBy("createdAt", "desc")
        .limitToLast(4)
    };
  },
  data() {
    return {
      projects: []
    };
  },
  computed: {
    // ...mapState("projects", {
    //   // specifying the namespace, aka the js file name ...
    //   projectsList: state => state.projectsList // ... and the state to bind
    // }),
    ...mapState({
      userID: state => (state.authUser.uid ? state.authUser.uid : null),
      toRender: state => (state.authUser.uid ? true : false)
    }),
    projectsList() {
      return this.$fireStore.collection("projects");
    }
  }
};
</script>

<style></style>

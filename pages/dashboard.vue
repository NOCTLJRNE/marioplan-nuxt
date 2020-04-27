<template>
  <v-container>
    <v-row v-if="true">
      <v-col sm="12" md="6">
        <!-- <client-only placeholder="Loading..."> -->
        <div class="text-center" v-if="loading">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </div>
        <ProjectList v-if="!loading" v-bind:projectsList="projects" />
        <!-- </client-only> -->
        <div v-if="this.visible">
          Please <nuxt-link to="signup">Sign Up</nuxt-link> or
          <nuxt-link to="signin">Sign In</nuxt-link> first !
        </div>
      </v-col>
      <v-col sm="12" md="5" offset-md="1">
        <Notifications v-if="!loading" v-bind:notifsList="notifs" />
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

  mounted() {
    // console.log("userid: ", this.userID);
    this.visible = this.userID == null ? true : false;
    this.loading = false;
    // setTimeout(() => {
    //   this.visible = true;
    // }, 5000);
  },
  firestore() {
    return {
      projects: this.projectsList
        .where("authorId", "==", this.userID)
        .orderBy("createdAt", "desc")
        .limit(4),
      notifs: this.notifsList.orderBy("time", "desc").limit(3)
    };
  },
  data() {
    return {
      loading: true,
      visible: false,
      timer1: null,
      projects: [],
      notifs: []
    };
  },
  computed: {
    // ...mapState("projects", {
    //   // specifying the namespace, aka the js file name ...
    //   projectsList: state => state.projectsList // ... and the state to bind
    // }),
    ...mapState({
      userID: state => (state.authUser.uid ? state.authUser.uid : null)
    }),
    projectsList() {
      return this.$fireStore.collection("projects");
    },
    notifsList() {
      return this.$fireStore.collection("notifications");
    }
  }
};
</script>

<style></style>

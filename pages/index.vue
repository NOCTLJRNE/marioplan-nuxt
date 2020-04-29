<template>
  <v-layout column justify-center align-center>
    <!-- <v-flex xs12 sm8 md6>
      <div class="text-center"></div>
      <v-card>
        <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
        <v-card-text></v-card-text>
        <v-card-actions>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-flex>-->
    <dashboard />
  </v-layout>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import dashboard from "@/pages/dashboard.vue";
import { mapState } from "vuex";
export default {
  components: {
    dashboard
  },
  // beforeRouteLeave(to, from, next) {
  //   if (to.name === "CreateProject") next({ name: "SignInUp" });
  //   else next();
  // },
  computed: {
    ...mapState(["authUser"])
  }
};
</script>

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
export default {
  components: {
    dashboard
  }
};
</script>

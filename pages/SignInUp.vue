<template>
  <v-container>
    <v-card>
      <v-tabs fixed-tabs v-model="tab" background-color="red lighten-2">
        <v-tab>Sign In</v-tab>
        <v-tab>Sign up</v-tab>
      </v-tabs>
    </v-card>
    <v-tabs-items v-model="tab">
      <v-tab-item><SignIn /></v-tab-item>
      <v-tab-item><SignUp /></v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import SignIn from "@/components/auth/SignIn.vue";
import SignUp from "@/components/auth/SignUp.vue";
export default {
  components: {
    SignIn,
    SignUp
  },
  data() {
    return {
      tab: null
      //   items: [
      //       {tab}
      //   ]
    };
  }
};
</script>

<style></style>

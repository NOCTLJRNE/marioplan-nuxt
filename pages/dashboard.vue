<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="6">
        <ProjectList />
      </v-col>
      <v-col sm="12" md="5" offset-md="1">
        <Notifications />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Notifications from "@/components/dashboard/Notifications.vue";
import ProjectList from "@/components/projects/ProjectList.vue";
export default {
  components: {
    Notifications,
    ProjectList
  }
};
</script>

<style>
</style>
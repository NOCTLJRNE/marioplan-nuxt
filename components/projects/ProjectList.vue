<template>
  <div class="project-list section">
    <h2>Projects List</h2>
    <ProjectSummary
      v-for="project in projectsList"
      v-bind:project="project"
      :key="project.id"
    />
  </div>
</template>

<script>
import ProjectSummary from "@/components/projects/ProjectSummary.vue";
export default {
  props: {
    projectsList: {
      required: true
    }
  },
  components: {
    ProjectSummary
  }
};
</script>

<style></style>

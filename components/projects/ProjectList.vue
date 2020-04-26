<template>
  <div class="project-list section">
    <ProjectSummary
      v-for="project of projectsList"
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

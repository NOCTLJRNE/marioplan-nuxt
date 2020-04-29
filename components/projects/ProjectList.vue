<template>
  <div class="project-list section">
    <h2>Projects List</h2>
    <transition-group name="project" tag="div">
      <ProjectSummary v-for="project in projectsList" v-bind:project="project" :key="project.id" />
    </transition-group>
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

<style >
.project-enter-active,
.project-leave-active {
  transition: all 1s;
}
.project-enter,
.project-leave-to {
  opacity: 0;
}
</style>

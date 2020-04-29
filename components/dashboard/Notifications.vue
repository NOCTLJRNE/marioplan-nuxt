<template>
  <div>
    <h2>Notifications</h2>
    <transition-group name="notif" tag="div">
      <Notif v-for="notif in notifsList" :key="notif.id" :notif="notif"></Notif>
    </transition-group>
  </div>
</template>

<script>
import Notif from "@/components/dashboard/Notif.vue";
export default {
  components: {
    Notif
  },
  props: {
    notifsList: {
      required: true
    }
  }
};
</script>

<style>
.notif-enter-active,
.notif-leave-active {
  transition: all 1s;
}
.notif-enter,
.notif-leave-to {
  opacity: 0;
}
</style>

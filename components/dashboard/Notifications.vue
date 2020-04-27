<template>
  <div>
    <h2>Notifications</h2>
    <Notif v-for="notif in notifsList" :key="notif.id" :notif="notif"> </Notif>
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

<style></style>

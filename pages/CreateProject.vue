<template>
  <v-card color="blue-grey lighten-2" class="pa-5">
    <ValidationObserver ref="observer" v-slot="{ validate, reset }">
      <form v-on:keyup.enter="submit">
        <h3>Create A Project</h3>
        <ValidationProvider v-slot="{ errors }" name="Title" rules="required">
          <v-text-field v-model="title" :error-messages="errors" label="Title" required></v-text-field>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="Description" rules="required">
          <v-textarea v-model="description" :error-messages="errors" label="Description" required></v-textarea>
        </ValidationProvider>

        <br />

        <v-btn class="mr-4" @click="submit" color="purple">Create</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </ValidationObserver>
    <v-dialog v-model="loading" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12">
              <v-card-text v-if="creating" class="text-center">
                Creating your awesome project !
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
              </v-card-text>
              <v-card-text v-else class="text-center">Project created !</v-card-text>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-btn v-on:click="loading=false" color="success">OK</v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  beforeRouteEnter(to, from, next) {
    if (to.name === "CreateProject")
      next(vm => {
        if (vm.authUser.uid == null) return { name: "SignInUp" };
      });
    else next();
  },
  mounted() {
    // console.log("user doc", this.currentUsersDoc);
    if (this.authUser.uid == null) this.$router.push({ path: "signinup" });
  },
  data: () => ({
    show1: false,
    name: "",
    title: "",
    description: "",
    password: "",
    dialog: true,
    loading: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters"
    }
  }),

  methods: {
    ...mapActions("projects", {
      createProject: "createProject" // map this.$store.dispatch("projects/createProject", x) to this.createProject(x);
    }),
    async submit() {
      // this.$refs.observer.validate().then(resp => console.log(resp)).catch(error => console.error(error));
      let FormValid = await this.$refs.observer.validate();
      if (FormValid) {
        // this.$store.dispatch("projects/createProject", this.projectDetails);
        this.loading = true;
        this.createProject(this.projectDetails);
      } else {
        console.log("WRONGGG");
      }
    },
    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser,
      creating: state => state.projects.creating
    }),
    projectDetails() {
      return {
        title: this.title,
        description: this.description
      };
    },
    currentUsersDoc() {
      if (this.authUser.uid) {
        return this.$fireStore.collection("users").doc(this.authUser.uid);
      } else return "";
    }
  }
};
</script>

<style></style>

<template>
  <v-card color="blue-grey lighten-2" class="pa-5">
    <ValidationObserver ref="observer" v-slot="{ validate, reset }">
      <form>
        <h3>Create A Project</h3>
        <ValidationProvider v-slot="{ errors }" name="Title" rules="required">
          <v-text-field
            v-model="title"
            :error-messages="errors"
            label="Title"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="Description"
          rules="required"
        >
          <v-textarea
            v-model="description"
            :error-messages="errors"
            label="Description"
            required
          ></v-textarea>
        </ValidationProvider>

        <br />

        <v-btn class="mr-4" @click="submit" color="purple">Create</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </ValidationObserver>
  </v-card>
</template>

<script>
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
  data: () => ({
    show1: false,
    name: "",
    title: "",
    description: "",
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters"
    }
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    }
  }
};
</script>

<style></style>

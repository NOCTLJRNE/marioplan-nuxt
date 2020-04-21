<template>
  <v-card color="blue-grey lighten-2" class="pa-5">
    <ValidationObserver ref="observer" v-slot="{ validate, reset }">
      <form>
        <!-- <ValidationProvider
          v-slot="{ errors }"
          name="Name"
          rules="required|max:40"
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :error-messages="errors"
            label="Name"
            required
          ></v-text-field>
        </ValidationProvider> -->
        <ValidationProvider
          v-slot="{ errors }"
          name="E-mail"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="Password"
          rules="required|min:8"
        >
          <v-text-field
            v-model="password"
            :error-messages="errors"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </ValidationProvider>
        <br />
        <!-- <ValidationProvider v-slot="{ errors }" name="select" rules="required">
          <v-select
            v-model="select"
            :items="items"
            :error-messages="errors"
            label="Select"
            data-vv-name="select"
            required
          ></v-select>
        </ValidationProvider> -->
        <!-- <ValidationProvider
          v-slot="{ errors, valid }"
          rules="required"
          name="checkbox"
        >
          <v-checkbox
            v-model="checkbox"
            :error-messages="errors"
            value="1"
            label="Option"
            type="checkbox"
            required
          ></v-checkbox>
        </ValidationProvider> -->

        <v-btn class="mr-4" @click="submit" color="success">sign in</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </ValidationObserver>
  </v-card>
</template>

<script>
import { required, email, max, min } from "vee-validate/dist/rules";
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
extend("min", {
  ...min,
  message: "{_field_} must be at least {length} characters"
});
extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters"
});

extend("email", {
  ...email,
  message: "Email must be valid"
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    show1: false,
    name: "",
    email: "",
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters"
    },
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null
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

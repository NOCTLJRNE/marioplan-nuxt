<template>
  <v-card color="blue-grey lighten-2" class="pa-5">
    <ValidationObserver ref="observer" v-slot="{ validate, reset }">
      <form v-on:keyup.enter="submit">
        <ValidationProvider
          v-slot="{ errors }"
          name="First Name"
          rules="required|max:20"
        >
          <v-text-field
            v-model="firstName"
            :counter="20"
            :error-messages="errors"
            label="First Name"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="Last Name"
          rules="required|max:20"
        >
          <v-text-field
            v-model="lastName"
            :counter="20"
            :error-messages="errors"
            label="Last Name"
            required
          ></v-text-field>
        </ValidationProvider>
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
          rules="required|min:8|password:@confirm"
        >
          <v-text-field
            required
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            :error-messages="errors"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider name="confirm" rules="required" v-slot="{ errors }">
          <v-text-field
            required
            v-model="confirmation"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            :error-messages="errors"
            name="input-10-2"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show2 = !show2"
          ></v-text-field>
          <!-- <span>{{ errors[0] }}</span> -->
        </ValidationProvider>
        <br />

        <v-btn class="mr-4" @click="submit" color="primary">sign up</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </ValidationObserver>
    <v-card-text
      v-if="authError && authType == 'SIGNUP_ERROR'"
      style="color: red"
      >{{ authError.message }}</v-card-text
    >
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, email, min, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

setInteractionMode("eager");
extend("password", {
  params: ["target"],
  validate(value, { target }) {
    return value === target;
  },
  message: "Password confirmation does not match"
});
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
  created() {
    // console.log("fireStore: ", this.$fireStore);
    // console.log("fireStoreObj: ", this.$fireStoreObj);
  },
  data: () => ({
    show1: false,
    show2: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmation: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters"
    },
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null
  }),

  methods: {
    ...mapActions("auth", {
      signUp: "signUp"
    }),
    async submit() {
      let formValid = await this.$refs.observer.validate();
      if (formValid) {
        let credentials = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        };
        this.signUp(credentials);
        // try {
        //   await this.$fireAuth.createUserWithEmailAndPassword(
        //     this.email,
        //     this.password
        //   );
        // } catch (e) {
        //   console.error(e);
        // }
      } else {
        console.log("Wrong");
      }
    },
    clear() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
      this.$refs.observer.reset();
    }
  },
  computed: {
    ...mapState("auth", {
      authType: "authType",
      authError: "authError"
    })
  }
};
</script>

<style></style>

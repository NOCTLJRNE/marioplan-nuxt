<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-action v-if="miniVariant">
            <span style="color: #03A9F4">{{ initials }}</span>
          </v-list-item-action>
          <v-list-item-action v-else>&nbsp</v-list-item-action>
          <v-list-item-content style="display: block">
            <v-btn fab color="light-blue">{{ initials }}</v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in routesArray"
          v-on:click="userSignOut(item)"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>-->
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        // {
        //   icon: "mdi-account-alert-outline",
        //   title: "Sign Up",
        //   to: "/signup"
        // },
        {
          icon: "mdi-account-arrow-left-outline",
          title: "Sign In/Sign Up",
          to: "/signinup"
        },
        {
          icon: "mdi-file-multiple-outline",
          title: "New Project",
          to: "/createproject"
        },
        {
          icon: "mdi-account-arrow-right-outline",
          title: "Sign Out",
          to: "/signout"
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: "Mario Plan"
    };
  },
  methods: {
    userSignOut(item) {
      // console.log(item.to);
      if (item.to == "/signout") {
        this.$fireAuth.signOut();
      }
    }
  },
  computed: {
    ...mapState({
      initials: state =>
        state.authUser.initials != null
          ? state.authUser.initials.toUpperCase()
          : "📇",
      routesArray: state =>
        state.authUser.initials != null
          ? [
              {
                icon: "mdi-home",
                title: "Home",
                to: "/"
              },
              {
                icon: "mdi-file-multiple-outline",
                title: "New Project",
                to: "/createproject"
              },
              {
                icon: "mdi-account-arrow-right-outline",
                title: "Sign Out",
                to: "/signout"
              }
            ]
          : [
              {
                icon: "mdi-home",
                title: "Home",
                to: "/"
              },
              // {
              //   icon: "mdi-account-alert-outline",
              //   title: "Sign Up",
              //   to: "/signup"
              // },
              {
                icon: "mdi-account-arrow-left-outline",
                title: "Sign In/Sign Up",
                to: "/signinup"
              }
            ]
    })
  }
};
</script>

export const state = () => ({
  authType: "",
  authError: null
});
export const mutations = {
  AUTH(state, { type, error }) {
    if (type == "SIGNUP_SUCCESS") {
      state.authType = type;
      state.authError = null;
    } else if (type == "SIGNUP_ERROR") {
      state.authType = type;
      state.authError = error;
    } else if (type == "SIGNIN_SUCCESS") {
      state.authType = type;
      state.authError = null;
    } else if (type == "SIGNIN_ERROR") {
      state.authType = type;
      state.authError = error;
    }
  }
};
export const actions = {
  async signIn({ commit, state, rootState }, { email, password }) {
    try {
      let result = await this.$fireAuth.signInWithEmailAndPassword(
        email,
        password
      );
      //   console.log("result: ", result.user.uid);
      commit("AUTH", { type: "SIGNIN_SUCCESS", error: null });
      //   this.$router.push({ path: "/" });
    } catch (e) {
      commit("AUTH", { type: "SIGNIN_ERROR", error: e });
      console.error(e);
    }
  },
  async signUp({ commit, state, rootState }, credentials) {
    try {
      let resp = await this.$fireAuth.createUserWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
      //   console.log("sign up sucessful: ", resp.user.uid);
      await this.$fireStore
        .collection("users")
        .doc(resp.user.uid)
        .set({
          firstName: credentials.firstName,
          lastName: credentials.lastName,
          initials: credentials.firstName[0] + credentials.lastName[0]
        });
      //   await this.$fireStore.collection("notifications").add({
      //     user: credentials.firstName + credentials.lastName,
      //     content: "joined the club",
      //     time: new Date()
      //   });
      commit("AUTH", { type: "SIGNUP_SUCCESS", error: null });
    } catch (e) {
      commit("AUTH", { type: "SIGNUP_ERROR", error: e });
      console.error(e);
    }
  }
};

export const state = () => ({
  authUser: null
});

export const mutations = {
  SET_AUTH_USER(state, { authUser }) {
    if (authUser) {
      console.log(authUser.uid);
      state.authUser = {
        uid: authUser.uid,
        email: authUser.email
      };
    }
  },
  RESET_STORE(state, { authUser }) {}
};
export const actions = {
  onAuthStateChanged({ commit }, { authUser }) {
    commit("SET_AUTH_USER", { authUser });
    console.log("Auth State Changed !");
  }
};

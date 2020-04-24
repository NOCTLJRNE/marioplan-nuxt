export const state = () => ({
  authUser: null
});

export const mutations = {
  SET_AUTH_USER(state, { authUser }) {
    if (authUser) {
      console.log(authUser.uid);
      state.authUser = {
        ...state.authUser,
        uid: authUser.uid,
        email: authUser.email
      };
    }
  },
  SET_USER_NAME(state, { fullName, initials }) {
    state.authUser = {
      ...state.authUser,
      fullName: fullName,
      initials: initials
    };
  },
  RESET_STORE(state, { authUser }) {}
};
export const actions = {
  onAuthStateChanged({ commit }, { authUser }) {
    commit("SET_AUTH_USER", { authUser });
    this.$fireStore
      .collection("users")
      .doc(authUser.uid)
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          let data = doc.data();
          let fullName = data.firstName + data.lastName;
          commit("SET_USER_NAME", {
            fullName: fullName,
            initials: data.initials
          });
          //   console.log("Document data:", data);
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
      });
    console.log("Auth State Changed !");
  }
};

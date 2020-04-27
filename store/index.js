export const state = () => ({
  authUser: {
    uid: null,
    email: null,
    fullName: null,
    initials: null
  }
});

export const mutations = {
  SET_AUTH_USER(state, { authUser }) {
    if (!authUser) {
      state.authUser = {
        ...state.authUser,
        uid: null,
        email: null
      };
    } else {
      console.log(authUser.uid);
      state.authUser = {
        ...state.authUser,
        uid: authUser.uid,
        email: authUser.email
      };
      this.$router.push({ path: "/" });
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
    if (!authUser) {
      commit("SET_AUTH_USER", { authUser: null });
      commit("SET_USER_NAME", {
        fullName: null,
        initials: null
      });
      console.log("not signed in");
    } else {
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
            let fullName = data.firstName + " " + data.lastName;
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
      console.log("Signed in");
    }
  }
};

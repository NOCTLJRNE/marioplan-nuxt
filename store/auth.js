export const state = () => ({
  authState: null
});
export const actions = {
  async signIn({ commit, state, rootState }, { email, password }) {
    try {
      let result = await this.$fireAuth.signInWithEmailAndPassword(
        email,
        password
      );
      //   console.log("result: ", result.user.uid);
    } catch (e) {
      console.error(e);
    }
  },
  async signUp({ commit, state, rootState }, credentials) {
    try {
      await this.$fireAuth.createUserWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
    } catch (e) {
      console.error(e);
    }
  }
};

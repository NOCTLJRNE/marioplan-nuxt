export const state = () => ({
  // projectsList: [
  //   { id: "1", title: "help me find peach", content: "blah blah blah" },
  //   { id: "2", title: "collect all the stars", content: "blah blah blah" },
  //   { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" }
  // ]
});
export const mutations = {
  CREATE_PROJECT(state, project) {
    console.log("created:", project);
  }
};
export const actions = {
  async createProject({ commit, state, rootState }, project) {
    await this.$fireStore.collection("projects").add({
      ...project,
      authorFirstName: `${rootState.authUser.fullName.split(" ")[0]}`,
      authorLastName: `${rootState.authUser.fullName.split(" ")[1]}`,
      authorId: rootState.authUser.uid,
      createdAt: new Date()
    });
    commit("CREATE_PROJECT", project);
  }
};

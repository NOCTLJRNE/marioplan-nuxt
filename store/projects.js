export const state = () => ({
  // projectsList: [
  //   { id: "1", title: "help me find peach", content: "blah blah blah" },
  //   { id: "2", title: "collect all the stars", content: "blah blah blah" },
  //   { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" }
  // ]
  project: null,
  error: null,
  creating: false
});
export const mutations = {
  CREATE_PROJECT(state, { project, error, creating }) {
    // console.log(
    //   `project created: ${project.title}-${project.description}, error: ${error}`
    // );
    state.project = project;
    state.error = error;
    state.creating = creating;
    console.log(
      `project created: ${project}, error: ${error},creating: ${creating}`
    );
  }
};
export const actions = {
  async createProject({ commit, state, rootState }, project) {
    commit("CREATE_PROJECT", { creating: true });
    try {
      await this.$fireStore.collection("projects").add({
        ...project,
        authorFirstName: `${rootState.authUser.fullName.split(" ")[0]}`,
        authorLastName: `${rootState.authUser.fullName.split(" ")[1]}`,
        authorId: rootState.authUser.uid,
        createdAt: new Date()
      });
      setTimeout(
        commit("CREATE_PROJECT", { project, error: null, creating: false }),
        500
      );
      // commit("CREATE_PROJECT", { project, error: null, creating: false });
      // this.$router.push({ path: "/" });
    } catch (error) {
      setTimeout(
        commit("CREATE_PROJECT", { project: null, error, creating: false }),
        500
      );
      // commit("CREATE_PROJECT", { project: null, error, creating: false });
    }
    // await this.$fireStore.collection("notifications").add({
    //   user: rootState.authUser.fullName,
    //   content: "created a project !",
    //   time: new Date()
    // });
  }
};

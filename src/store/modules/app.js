const state = {
  drawer: true,
  gradient: "rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)",
  items: [
    { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
    { title: "Category", icon: "mdi-view-list", to: "/category" },
    {
      title: "Course",
      icon: "mdi-book-education",
      to: "/course"
    },
    {
      title: "Video",
      icon: "mdi-view-list-outline",
      to: "/video"
    },
    {
      title: "Teachers",
      icon: "mdi-format-text-variant-outline",
      to: "/teacher"
    },
    {
      title: "Students",
      icon: "mdi-table-settings",
      to: "/student"
    },
    {
      title: "Settings",
      icon: "mdi-form-select",
      items: [
        {
          title: "Profile",
          icon: "mdi-table-settings",
          to: "/typography"
        },
        {
          title: "Change password",
          icon: "mdi-table-settings",
          to: "/typography"
        }
      ]
    },
    { title: "Logout", icon: "mdi-logout", to: "/authentication/sign-in" }
  ]
};

const getters = {
  getDrawer: state => state.drawer
};

const mutations = {
  setDrawer(state, data) {
    state.drawer = data;
  }
};

const actions = {
  toggleDrawer({ commit }, value) {
    commit("setDrawer", value);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

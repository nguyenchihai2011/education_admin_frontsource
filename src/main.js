import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import "./router/permission";
import vuetify from "./plugins/vuetify";
import store from "./store";
import "./plugins";
import PrimeVue from "primevue/config";

Vue.use(PrimeVue);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");

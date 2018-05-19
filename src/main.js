// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueResource from 'vue-resource';
import router from "./app/router";
import store from "./app/store/store";
import i18next from "i18next";
import VueI18Next from "@panter/vue-i18next";
import enUS from "./app/store/locales/language-en-US";
import esMX from "./app/store/locales/language-es-MX";
import bootstrapSelect from "bootstrap-select/dist/js/bootstrap-select.js";

//import styles
import "./styles/main.scss";
import "bootstrap-sass/assets/stylesheets/_bootstrap.scss";

Vue.use(VueResource);
Vue.use(VueI18Next); //https://github.com/panter/vue-i18next
Vue.config.productionTip = false;

i18next.init({
  lng: "en-US",
  resources: {
    "en-US": { translation: enUS },
    "es-MX": { translation: esMX }
  }
});
const i18n = new VueI18Next(i18next);
new Vue({
  el: "#main",
  i18n: i18n,
  store,
  router
});

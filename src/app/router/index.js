import Vue from "vue";
import Router from "vue-router";
import * as lazy from "./lazy-routes";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: lazy.default.loginPage
    },
    {
      path: "/Home",
      name: "home",
      component: lazy.default.masterpage,
      redirect: "Home/reports",
      children: [
        {
          path: "reports",
          name: "reports-view",
          component: lazy.default.Reports
        },
        {
          path: "settings",
          name: "settings-view",
          component: lazy.default.Settings
        },
        {
          path: "employee",
          name: "employee-view",
          component: lazy.default.employee
        }
      ]
    }
  ]
});

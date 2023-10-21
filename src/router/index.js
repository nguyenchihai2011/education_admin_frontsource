import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Index"),
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () => import("@/views/Dashboard")
      },
      {
        path: "/category",
        name: "Category",
        component: () => import("@/views/Category")
      },
      {
        path: "/grid-system",
        name: "GridSystem",
        component: () => import("@/views/GridSystem")
      },
      {
        path: "/grid-list-page",
        name: "GridListPage",
        component: () => import("@/views/GridListPage")
      },
      {
        path: "/breakpoints",
        name: "Breakpoints",
        component: () => import("@/views/Breakpoints")
      },
      {
        path: "/typography",
        name: "Typography",
        component: () => import("@/views/Typography")
      },
      {
        path: "/tables/app-table",
        name: "AppTables",
        component: () => import("@/views/table/AppTables")
      },
      {
        path: "/tables/basic-table",
        name: "BasicTables",
        component: () => import("@/views/table/BasicTables")
      },
      {
        path: "/forms/validation-form",
        name: "ValidationForm",
        component: () => import("@/views/form/ValidationForms")
      },
      {
        path: "/forms/app-form",
        name: "AppForm",
        component: () => import("@/views/form/AppForms")
      },
      {
        path: "/buttons",
        name: "Buttons",
        component: () => import("@/views/Buttons")
      },
      {
        path: "/icons",
        name: "Icons",
        component: () => import("@/views/Icons")
      }
    ]
  },
  {
    path: "/authentication",
    component: () => import("@/layouts/authentication/Index"),
    children: [
      {
        path: "sign-in",
        name: "SignIn",
        component: () => import("@/views/authentication/SignIn")
      },
      {
        path: "sign-up",
        name: "SignUp",
        component: () => import("@/views/authentication/SignUp")
      }
    ]
  },
  {
    path: "/page",
    component: () => import("@/layouts/page/Index"),
    children: [
      {
        path: "product-list",
        name: "ProductList",
        component: () => import("@/views/page/ProductList")
      }
    ]
  }
];
const router = new VueRouter({
  mode: process.env.NODE_ENV === "production" ? "hash" : "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!checkUserLoggedIn() && to.name !== "SignIn") {
    next({ name: "SignIn" });
  } else {
    next();
  }
});

function checkUserLoggedIn() {
  return !!localStorage.getItem("token");
}

export default router;

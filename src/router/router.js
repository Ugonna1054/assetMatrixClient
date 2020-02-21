import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect : "/Login"
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login/Login.vue")
  },
  {
    path: "/ChangePassword",
    name: "ChangePassword",
    component: () => import("../views/Security/ChangePassword/ChangePassword.vue")
  },

  //Admin Routes
  {
    path: "/Admin/Dashboard",
    name: "Admin/Dashboard",
    component: () => import("../views/Admin/Dashboard/Dashboard.vue")
  },
  {
    path: "/Admin/User/Create",
    name: "Admin/User/Create",
    component: () => import("../views/Admin/User/CreateUser.vue")
  },
  {
    path: "/Admin/User/Manage",
    name: "Admin/User/Manage",
    component: () => import("../views/Admin/User/ManageUser.vue")
  },
  {
    path: "/Admin/Approvals",
    name: "Admin/Approvals",
    component: () => import("../views/Admin/Approvals/Approvals.vue")
  },
  {
    path: "/Admin/Approvals/Details",
    name: "Admin/Approvals/Details",
    component: () => import("../views/Admin/Approvals/Details.vue")
  },
  {
    path: "/Admin/Report",
    name: "Admin/Report",
    component: () => import("../views/Admin/Report/Report.vue")
  },

  //Client Routes
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () => import("../views/Client/Account/Account.vue")
  },
  {
    path: "/Loan",
    name: "Loan",
    component: () => import("../views/Client/Loan/Loan.vue")
  },
  {
    path: "/Loan/Precheck",
    name: "Loan/Precheck",
    component: () => import("../views/Client/Loan/Precheck.vue")
  },
  {
    path: "/Loan/Apply",
    name: "Loan/Apply",
    component: () => import("../views/Client/Loan/Apply.vue")
  },
  {
    path: "/Investment",
    name: "Investment",
    component: () => import("../views/Client/Investment/Investment.vue")
  },
  {
    path: "/Investment/Precheck",
    name: "Investment/Precheck",
    component: () => import("../views/Client/Investment/Precheck.vue")
  },
  {
    path: "/Investment/Apply",
    name: "Investment/Apply",
    component: () => import("../views/Client/Investment/Apply.vue")
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home";
import Resultado from "../views/Resultado";

Vue.use(Router);

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "resultado",
    path: "/resultado",
    component: Resultado,
    props: true,
  },
];

const router = new Router({ routes });

export default router;

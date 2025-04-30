import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import AzulComponent from "./components/AzulComponent.vue";


import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path: "/",
      },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name: "AzulComponent",
        component: AzulComponent,
        path: "/azul-comp",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

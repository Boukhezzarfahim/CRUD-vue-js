import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import AzulComponent from "./components/AzulComponent.vue";
import AddByComp from "./components/AddByComp.vue";
import UpdateByComp from "./components/UpdateByComp.vue";



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
    {
        name: "AddByComp",
        component: AddByComp,
        path: "/add",
    },   {
        name: "UpdateByComp",
        component: UpdateByComp,
        path: "/update:id",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

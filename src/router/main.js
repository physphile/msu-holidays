import PageHome from '@/components/pages/PageHome';
import {createRouter, createWebHashHistory} from "vue-router";
import PageRegistration from "@/components/pages/PageRegistration";

const routes = [
    {
        path: '/',
        component: PageHome
    },
    {
        path: '/registration',
        component: PageRegistration
    }
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

export default router;
import PageHome from '@/components/pages/PageHome';
import {createRouter, createWebHashHistory} from "vue-router";
import PageRegistration from "@/components/pages/PageRegistration";
import PageBooking1 from "@/components/pages/PageBooking1";
import PageProfile from "@/components/pages/PageProfile";

const routes = [
    {
        path: '/',
        component: PageHome
    },
    {
        path: '/registration',
        component: PageRegistration
    },
    {
        path: '/booking1',
        component: PageBooking1
    },
    {
        path: '/profile',
        component: PageProfile
    }
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

export default router;
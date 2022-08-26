import PageHome from '@/components/pages/PageHome';
import {createRouter, createWebHashHistory} from "vue-router";
import PageRegistration from "@/components/pages/PageRegistration";
import PageProfile from "@/components/pages/PageProfile";
import PageBooking from "@/components/pages/PageBooking";
import bookingRoutes from './booking'

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
        path: '/profile',
        component: PageProfile
    },
    {
        path: '/booking',
        component: PageBooking,
        children: bookingRoutes
    }

];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

export default router;
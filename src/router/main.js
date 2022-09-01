import PageHome from '@/components/PageHome/Index';
import {createRouter, createWebHashHistory} from "vue-router";
import PageRegistration from "@/components/PageRegistration/Index";
import PageProfile from "@/components/PageProfile/Index";
import PageBooking from "@/components/PageBooking/Index";
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
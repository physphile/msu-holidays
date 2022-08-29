import PageBooking2Frame from "@/components/PageBooking2Frame";
import PageBooking2Sidebar from "@/components/PageBooking2Sidebar";
import PageBooking1Frame from "@/components/PageBooking1Frame";
import PageBooking1Sidebar from "@/components/PageBooking1Sidebar";
import PageBooking3Frame from "@/components/PageBooking3Frame";
import PageBooking3Sidebar from "@/components/PageBooking3Sidebar";
import PageBooking4Frame from "@/components/PageBooking4Frame";
import PageBooking4Sidebar from "@/components/PageBooking4Sidebar";

const routes = [
    {   path: '1',
        name: 'booking1',
        components: {
            default: PageBooking1Frame,
            sidebar: PageBooking1Sidebar
        },
        meta: {
            step: 1
        }
    },
    {   path: '2',
        name: 'booking2',
        components: {
            default: PageBooking2Frame,
            sidebar: PageBooking2Sidebar
        },
        meta: {
            step: 2,
        }
    },
    {   path: '3',
        name: 'booking3',
        components: {
            default: PageBooking3Frame,
            sidebar: PageBooking3Sidebar
        },
        meta: {
            step: 3,
        }
    },
    {   path: '4',
        name: 'booking4',
        components: {
            default: PageBooking4Frame,
            sidebar: PageBooking4Sidebar
        },
        meta: {
            step: 4,
        }
    },
    {   path: ':tail',
        meta: {
            step: undefined
        }
    }
]

export default routes
import PageBooking2Frame from "@/components/PageBooking2Frame";
import PageBooking2Sidebar from "@/components/PageBooking2Sidebar";

const routes = [
    {
        path: '2',
        components: {
            default: PageBooking2Frame,
            sidebar: PageBooking2Sidebar
        }
    },
]

export default routes
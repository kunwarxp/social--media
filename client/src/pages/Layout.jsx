import Rreact from "react";
import Sidebar from '../components/Sidebar';
import { Outlet } from "react-router-dom";
import { X } from "lucide-react";
import { dummyUserData } from "../assets/assets";

const LayOut = () => {

        const user = dummyUserData
        const [SidebarOpen, seidebaropen] = useStatus(false);

    return user ? (
        <div className='w-full flex h-screen'>
            <Sidebar/>
            <div className='flex-1 bg slate-50'>
                <Outlet/>
            </div>
        {sidebarOpen ? (
        <X
            className="absolute top-3 right-3 p-2 z-[100] bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden"
            onClick={() => setSidebarOpen(false)}
            />
            ) : (
        <Menu
            className="absolute top-3 right-3 p-2 z-[100] bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden"
            onClick={() => setSidebarOpen(true)}
            />
            )}
        </div>

    ) : (
        <h1>Loading...</h1>
    )
}

export default LayOut

import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";


const Root = () => {
    return (
        <div >
           <Navbar /> 
           <div className="max-w-7xl mx-auto mt-20">
           <Outlet />
           </div>
        </div>
    );
};

export default Root;
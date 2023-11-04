import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";


const LayOuts = () => {
    return (
        <div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-0">
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>

        <Footer></Footer>
           
    </div>
    );
};

export default LayOuts;
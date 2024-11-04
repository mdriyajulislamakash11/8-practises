import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="w-10/12 mx-auto ">
            {/* navber */}
            <Navber></Navber>
            {/* daynmic section */}
            <div>
                <Outlet></Outlet>
            </div>
            {/* Footer */}
        </div>
    );
};

export default Home;
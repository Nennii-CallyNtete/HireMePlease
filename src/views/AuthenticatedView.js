import {React, useState} from "react";
import { Outlet } from "react-router-dom";
import NewApplicationModal from "../components/NewApplicationModal";
import SideNavigationBar from "../components/SideNavigationBar";
import { UserContext } from "../contexts/user.context";

const AuthenticatedView = () => {
    //const [open, setOpen] = useState(false);

    return(
        <div className="flex flex-row h-full w-full">
            <div className="flex flex-col w-2/12">
                <SideNavigationBar />
            </div>
            <div className="w-10/12">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthenticatedView;
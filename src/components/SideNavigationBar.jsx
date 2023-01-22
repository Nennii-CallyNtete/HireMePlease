import {React, useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

const SideNavigationBar = () => {
    const {currentUser} = useContext(UserContext);
    const lastName = currentUser.lastName;

    return(
        <div className="container mx-auto h-full">
            <div className="flex flex-col h-full place-content-between">
                <div className="h-1/4">
                    <ul className="h-full flex flex-col place-content-between text-md">
                        <li>
                            <Link>Overview</Link>
                        </li>
                        <li>
                            <Link to='applications'>Application Hub</Link>
                        </li>
                        <li>
                            <Link to='genhub'>GenHub <span className="ml-2 px-2 border-2 text-xs border-angry-color rounded-xl">Beta</span></Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row w-fit">
                    <div className="pr-5">
                        <img 
                        src='https://xsgames.co/randomusers/avatar.php?g=male'
                        alt='User-Avatar'
                        width={50} 
                        className='rounded-full' />
                    </div>
                    <div className="px-4 text-center text-md">
                        <span className="inline-block align-bottom">My Account</span>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default SideNavigationBar;
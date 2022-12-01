import { useContext } from "react";
import { AuthContext } from '../../use-auth'
import GuestUserView from './GuestUserView'
import LoggedInView from "./LoggedInView";

const Widgets = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <>
            <div className='w-2/6 flex-auto hidden md:block'>
                {isLoggedIn() ? <LoggedInView /> : <GuestUserView />}
            </div>
        </>

    )

}

export default Widgets
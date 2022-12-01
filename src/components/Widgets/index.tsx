import { useContext } from "react";
import useGetTrendingData from "../../pages/HomePg/useGetTrendingData";
import { AuthContext } from '../../use-auth'
import GuestUserView from './GuestUserView'
import LoggedInView from "./LoggedInView";

const Widgets = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const { trendingData } = useGetTrendingData()

    return (
        <>
            <div className='w-2/6 flex-auto hidden md:block'>
                {isLoggedIn() ? <LoggedInView data={trendingData} /> : <GuestUserView />}
            </div>
        </>

    )

}

export default Widgets
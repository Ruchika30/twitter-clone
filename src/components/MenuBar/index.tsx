//@ts-nocheck
import { useContext } from "react";
import { useHistory } from "react-router-dom"
import { TwitterIcon, } from '../Icons'
import TweetBtn from './TweetButton'
import { color } from '../../tokens/color'
import { AuthContext } from '../../use-auth'
import LoggedinView from "./LoggedInView";
import GuestUserView from './GuestUserView'


function MenuBar({ openTweetModal }: { openTweetModal?: any }) {
    const { isLoggedIn } = useContext(AuthContext);
    const history = useHistory()


    return (
        <div className="w-2/3 mt-4 mr-10">

            {/* twitter bird icon */}
            <div className="w-14 h-14 hover:bg-blue-100  dark:hover:bg-zinc-800  rounded-full flex items-center justify-center"
                onClick={() => history.push('/')}
            >
                <TwitterIcon fontSize="large"
                    className="cursor-pointer" sx={{ color: color.twitterBlue }} />
            </div>

            {/* menu options */}
            {
                isLoggedIn() ? <LoggedinView /> : <GuestUserView />
            }


            {/* menu panel tweet btn */}
            {isLoggedIn() &&
                <div className="mt-2">
                    <TweetBtn onClick={openTweetModal} />
                </div>
            }

        </div >
    );
}

export default MenuBar;

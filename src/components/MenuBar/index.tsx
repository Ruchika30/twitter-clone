//@ts-nocheck
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom"
import { TwitterIcon, CloseIcon } from '../Icons'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TweetBtn from './TweetButton'
import { color } from '../../tokens/color'
import TweetContainer from '../TweetContainer'
import { modalContentStyle } from './style'
import { AuthContext } from '../../use-auth'
import LoggedinView from "./LoggedInView";
import GuestUserView from './GuestUserView'


function MenuBar() {
    const { isLoggedIn } = useContext(AuthContext);
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false)

    const openTweetModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => [
        setIsOpen(false)
    ]

    const onClickTweet = () => {
        console.log("New tweet")
    }

    return (
        <div className="w-2/3 mt-4 mr-10">

            {/* twitter icon */}
            <div className="w-14 h-14 hover:bg-blue-100 rounded-full flex items-center justify-center"
                onClick={() => history.push('/')}
            >
                <TwitterIcon color="primary" fontSize="large"
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




            {/* Modal */}
            <Modal
                open={isOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={modalContentStyle} >
                    <div className="flex flex-col">
                        <CloseIcon className='text-black cursor-pointer' onClick={closeModal} />
                        <TweetContainer onClickTweet={onClickTweet} isFromModal />
                    </div>


                </Box>
            </Modal>
        </div >
    );
}

export default MenuBar;

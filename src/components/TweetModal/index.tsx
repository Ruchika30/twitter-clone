
import { Box, Modal } from '@material-ui/core';
import { CloseIcon, BackIcon } from '../../components/Icons'
import TweetContainer from '../../components/TweetContainer'
import { color } from '../../tokens/color';
import Drawer from '@mui/material/Drawer';


const TweetModal = ({ isMobile, isOpen, closeModal }: {
    isMobile: boolean, isOpen: boolean, closeModal: () => void
}) => {


    const onClickTweet = () => {
        console.log("New tweet")
    }

    const modalContentStyle = {
        position: 'absolute' as 'absolute',
        top: '30%',
        left: '50%',
        width: 600,
        height: 300,
        transform: 'translate(-50%, -50%)',
        background: color.white,
        boxShadow: '24',
        padding: '20px',
        borderRadius: '20px'
    }

    /* Open drawer in MobileView */
    if (isMobile && isOpen) {
        return (
            <Drawer
                sx={{ width: '100%' }}
                onClose={closeModal}
                open={isOpen}
                variant="temporary"
            >
                <div className="flex flex-col">
                    <div className='p-4'>
                        <BackIcon className='text-black cursor-pointer' onClick={closeModal} />

                    </div>
                    <TweetContainer submitTweet={onClickTweet} isFromModal />
                </div>

            </Drawer>
        )
    }

    /* Open modal in large View */
    return (
        <>
            {!isMobile && <Modal
                open={isOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={modalContentStyle} >
                    <div className="flex flex-col">
                        <CloseIcon className='text-black cursor-pointer' onClick={closeModal} />
                        <TweetContainer submitTweet={onClickTweet} isFromModal />
                    </div>


                </Box>
            </Modal>

            }
        </>
    )
}

export default TweetModal
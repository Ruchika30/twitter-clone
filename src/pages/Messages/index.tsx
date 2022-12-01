

import MenuOptions from '../../components/MenuBar'
import Widgets from '../../components/Widgets'


const MessagePg = () => {

    return (
        <div className="w-screen h-screen flex bg-white dark:bg-black" >

            {/* Menu sidebar */}
            <div className='w-2/6 flex align-middle justify-end'>
                <MenuOptions />
            </div>


            <div className="text-white h-full border border-solid border-gray-100	
                overflow-y-auto w-3/6 ">

                {/* Heading */}
                <div className='bg-white sticky top-0 z-30'>
                    <h1 className='text-lg text-black  font-bold py-3 pl-4'>Messages</h1>
                </div>
            </div>

            {/* side widgets */}
            <Widgets />

        </div >
    )
}

export default MessagePg
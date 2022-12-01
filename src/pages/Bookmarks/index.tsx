

import MenuOptions from '../../components/MenuBar'
import Widgets from '../../components/Widgets'


const BookmarksPg = () => {

    return (
        <div className="w-screen h-screen flex bg-white dark:bg-black" >

            {/* Menu sidebar */}
            <div className='w-2/6 flex align-middle justify-end'>
                <MenuOptions />
            </div>


            <div className="text-white h-full border border-solid border-gray-100  dark:border-slate-700	
                overflow-y-auto w-3/6 ">

                {/* Heading */}
                <div className='bg-white dark:bg-black sticky top-0 z-30'>
                    <h1 className='text-lg text-black dark:text-white font-bold py-3 pl-4'>Bookmarks</h1>
                </div>

            </div>

            {/* side widgets */}
            <Widgets />


        </div >
    )
}

export default BookmarksPg
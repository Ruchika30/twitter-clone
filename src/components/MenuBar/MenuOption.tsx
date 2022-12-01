//@ts-nocheck
import { useHistory } from 'react-router-dom';


const MenuOption = ({ menuName, Icon, route = '/' }: {

    menuName: string, Icon: any, route: string
}) => {
    const history = useHistory()

    return (
        <li className="cursor-pointer list-none">
            <div className="hover:bg-gray-200 flex items-center p-4 w-auto rounded-xl"
                onClick={() => history.push(route)}
            >
                <div className="pr-3 block">
                    <Icon />
                </div>
                <h1 className="text-xl hidden md:block">{menuName}</h1>
            </div >
        </li >
    )
}

export default MenuOption
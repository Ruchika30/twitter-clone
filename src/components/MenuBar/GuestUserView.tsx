
import MenuOption from './MenuOption'
import { SettingsIcon, TagIcon } from '../Icons'

const GuestUserView = () => {
    return (
        <>
            <MenuOption Icon={TagIcon} menuName="Explore" route="/" />
            <MenuOption Icon={SettingsIcon} menuName="Settings" route="/" />
        </>
    )
}

export default GuestUserView
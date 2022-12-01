

import MenuOption from './MenuOption'
import { HomeIcon, MoreHorizIcon, PermIdentityIcon, ListAltIcon, TagIcon, BookmarkBorderIcon, MailOutlineIcon, NotificationsNoneIcon } from '../Icons'

const LoggedinView = () => {

    return (
        <>
            <MenuOption Icon={HomeIcon} menuName="Home" route="/" />
            <MenuOption Icon={TagIcon} menuName="Explore" route="/explore" />
            <MenuOption Icon={NotificationsNoneIcon} menuName="Notifications" route='/notifications' />
            <MenuOption Icon={MailOutlineIcon} menuName="Messages" route='/messages' />
            <MenuOption Icon={BookmarkBorderIcon} menuName="Bookmarks" route='/bookmarks' />
            <MenuOption Icon={ListAltIcon} menuName="Lists" route='/lists' />
            <MenuOption Icon={PermIdentityIcon} menuName="Profile" route="/profile" />
            <MenuOption Icon={MoreHorizIcon} menuName="More" route='/more' />
        </>
    )
}


export default LoggedinView
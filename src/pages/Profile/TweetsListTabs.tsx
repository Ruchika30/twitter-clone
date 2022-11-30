
import { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel'
import SinglePost from '../../components/Posts/SinglePost'

const TweetsList = ({ tweetList }: { tweetList: [] }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Tweet" />
                        <Tab label="Tweet & replies" />
                        <Tab label="Media" />
                        <Tab label="Likes" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0} sx={{ padding: '5px' }}>

                    {/* tweet list */}
                    {tweetList.map((item, index) => {
                        console.log("itemitem--", item);
                        const { screen_name, username, verified, avatar, beforeTime, text, comment, repost, likes, reshare } = item

                        return (
                            <div key={`post${index}`}>
                                <SinglePost
                                    screenName={screen_name}
                                    userName={username}
                                    verified={verified}
                                    avatar={avatar}
                                    beforeTime={beforeTime}
                                    text={text}
                                    comment={comment}
                                    repost={repost}
                                    likes={likes}
                                    reshare={reshare}
                                />
                            </div>
                        )

                    })}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className='text-black'> Tweet & replies</div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className='text-black'>Media</div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className='text-black'>Likes</div>
                </TabPanel>
            </Box>
        </>
    )
}

export default TweetsList
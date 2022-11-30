
import SinglePost from "./SinglePost";


const Post = ({ newsFeedData
}: { newsFeedData: any }) => {

    return (
        <>
            {
                newsFeedData && newsFeedData?.map((post: any, index: number) => {
                    const { screen_name, username, verified, avatar, beforeTime, text, comment, repost, likes, reshare } = post

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
                })
            }
        </>

    )
}

export default Post
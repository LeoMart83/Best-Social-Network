import React from "react";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ posts, createPost }) => {

    return (
        <MyPosts
            posts={posts}
            createPost={createPost} />
    )
}

export default MyPostsContainer;
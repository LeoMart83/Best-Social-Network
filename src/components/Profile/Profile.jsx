import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ posts, profile, updateProfilePhoto, createPost, updateProfile, ...props }) => {
    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={props.status}
                isOwner={props.isOwner}
                updateProfilePhoto={updateProfilePhoto}
                updateStatus={props.updateStatus}
                updateProfile={updateProfile}
            />

            <MyPostsContainer
                posts={posts}
                createPost={createPost}
            />
        </div>
    )
}

export default Profile;
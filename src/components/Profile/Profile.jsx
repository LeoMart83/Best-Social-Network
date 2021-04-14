import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {requestPosts} from "../../redux/profile-reducer";

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}/>

            <MyPostsContainer requestPosts={props.requestPosts}
            />
        </div>
    )
}

export default Profile;
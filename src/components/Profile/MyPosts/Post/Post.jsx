import classes from './Post.module.css';
import user from '../../../../Assets/Images/user.png'
import {ReactComponent as Icon} from '../../../../Assets/Images/delete.svg'
import {connect} from "react-redux";
import {deletePostApi} from "../../../../redux/profile-reducer";

const Post = ({body, likes, id, deletePostApi}) => {

    return (
        <div className={classes.item}>
            <div className={classes.likesContainer}>
                <img src={user} className={classes.userImg}/>
                <span>Likes: {likes}</span>
            </div>

            <span className={classes.post}>{body}</span>
            <Icon onClick={() => deletePostApi(id)} className={classes.deleteIcon}/>
        </div>
    )
}



export default connect(null, {deletePostApi})(Post);
import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";


const MyPosts = React.memo(({ posts, createPost }) => {

    const postsElements = posts.map(p => <Post body={p.body} likes={p.likes}
        key={p.key} id={p.key} />);

    return (
        <div className={classes.postsBlock}>
            <h3> My Posts </h3>
            <AddPostFormRedux onSubmit={(values) => {
                createPost(values.newPostText)
            }} />
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength = maxLengthCreator(100);

const AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' placeholder='Enter new post'
                    validate={[required, maxLength]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;
import classes from './Post.module.css';

const Post = (props) => {

    return <div className={classes.item}>
        <img src='https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/viacom-Avatar-Sea1-Full-Image_GalleryBackground-en-US-1552014700974._SX1080_.jpg' />
        {props.message}    
        <div>
            <span>Likes </span> {props.likesCount}
        </div>
    </div>
}

export default Post;
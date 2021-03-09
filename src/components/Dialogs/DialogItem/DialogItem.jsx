import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <div >
                <img src={props.avatar} />
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </div>)
}


export default DialogItem;
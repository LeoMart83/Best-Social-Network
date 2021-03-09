import classes from './Sidebar.module.css';
import DialogItem from "../Dialogs/DialogItem/DialogItem";



const Sidebar = (props) => {

    let dialogsElements = props.state.map(d => <DialogItem id={d.id} avatar={d.avatarsrc} key={d.id}/>);

    return (
        <div className={classes.sidebar}>
                {dialogsElements}
        </div>
  )
}

export default Sidebar;
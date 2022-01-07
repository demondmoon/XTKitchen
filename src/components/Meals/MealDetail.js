import Modal from "../../UI/Modal";
import classes from "./MealDetail.module.css";

const MealDetail = (props) => {
  return (
    <Modal onClose={props.onHidePic}>
       <h2 className={classes.title}>{props.name}</h2>
        <img className={classes.img} src={props.src} alt={props.name} />
        <div className={classes.price}>${props.price}</div>
        <div className={classes.description}>{props.description}</div>
        <button onClick={props.onHidePic} className={classes.close}>Close</button>
    </Modal>
  );
};

export default MealDetail;

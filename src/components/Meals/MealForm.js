import React, { useState, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealForm.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; // 注意它的值永远是string，因此需要转换为number
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 99
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);  // 这里没有直接使用context的内容，而是使用了一个props传来的函数，是因为在当前的组件中，我们只获取了amount，而item中有多个属性。
  };

  return (
    <form className={classes.mealForm} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        // 注意custom component不能直接用ref，而需要从child中使用forward ref暴露给parent
        // 这样，ref的值就是child中input元素dom node
        label="Amount"
        input={{
          id: "amount_" + props.id,
          // 这里可以用props的id属性（从AvailableMeals.js传给MealItem.js，传给当前组件的。）设置唯一id，避免出现bug
          type: "number",
          min: "1",
          max: "99",
          step: "1",
          defaultValue: "1",
        }}
      />
      
      {amountIsValid ?<button>Add to Cart</button>: <p>Please enter a valid number</p>}
    </form>
  );
}

export default MealItemForm;


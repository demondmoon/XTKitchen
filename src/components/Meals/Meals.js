// import { mealData } from "./mealdata";
import { useEffect, useState } from "react";
import classes from "./Meals.module.css";
import MealItem from "./MealItem";
import { useData } from "../../hooks/useData";
const Meals = ({ searchContent }) => {
  const { documents, error, isPending } = useData("meals");
  const [filterMeal, setFilterMeal] = useState([]);

  useEffect(() => {
    if (documents) {
      setFilterMeal(
        documents.filter((meal) => {
          if (searchContent === "") {
            return true;
          } else
            return (
              meal.name.toLowerCase().includes(searchContent.toLowerCase()) ||
              meal.description
                .toLowerCase()
                .includes(searchContent.toLowerCase()) ||
              meal.price.toString().includes(searchContent)
            );
        })
      );
    }
  }, [documents, searchContent, setFilterMeal]);

  // const filterMeal = mealData.filter((meal) => {
  //   if (searchContent === "") {
  //     return true;
  //   } else
  //     return (
  //       meal.name.toLowerCase().includes(searchContent.toLowerCase()) ||
  //       meal.description.toLowerCase().includes(searchContent.toLowerCase()) ||
  //       meal.price.toString().includes(searchContent)
  //     );
  // });
  return (
    <section className={classes.menu}>
      {isPending && <div>Loading</div>}
      {error && <div>Sorry, there is something wrong with this page.</div>}
      {filterMeal && filterMeal.map((meal) => {
        return (
          <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            price={meal.price}
            description={meal.description}
            src={meal.src}
          />
        );
      })}
      {!isPending && !filterMeal.length && (
        <div className={classes.warning}>
          <p>Oops, no result found!</p>
          <p> Maybe try something else!</p>
        </div>
      )}
    </section>
  );
};
export default Meals;

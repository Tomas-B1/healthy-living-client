import { useState, useEffect } from "react";
import MealCard from "../MealCard/MealCard"
import axios from "axios";
import "../MealList/MealList.scss"

function MealList() {
  const [meals, setMeals] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      axios.get(`http://localhost:8080/meals`)
    .then((response) => {
      setMeals(response.data);
      setIsLoading(false);
    });
  }, []);


  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
      <main className="meal">
        <h1 className="meal__title">Meals</h1>

        <div className="meal__list">
        {meals.map((meal) => {
          return (    
          <MealCard
          key={meal.id}
          id={meal.id}
          name={meal.name}
          img={meal.product_img}
        />
          );
        })}
      </div>
      </main>
    );
  }
  
  export default MealList;
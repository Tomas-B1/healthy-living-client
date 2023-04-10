import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MealDetails from "../../Components/MealDetail/MealDetail"

function MealInfo() {
  const [mealInfo, setMealInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/meals/${id}`)
      .then((res) => {
        setMealInfo(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!mealInfo) {
    return <h2>Loading meals data...</h2>;
  }

  return (
    <main className="page">
      <MealDetails mealInfo={mealInfo} />
    </main>
  );
}

export default MealInfo;
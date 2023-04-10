import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/icons/back-arrow.png";
import "./MealDetail.scss";

function MealDetail({ mealInfo }) {
  const navigate = useNavigate();
    
    const previousPage = () => {
        navigate(-1);
      }

  return (
    <section className="mealDetail">
      <div className="mealDetail__page">
      <img
          className="mealDetail__arrow-icon"
          src={backArrow}
          alt="backArrow"
          onClick={previousPage}
        />
        <img
          className="mealDetail__img"
          src={mealInfo.product_img}
          alt={mealInfo.name}
        />
        <div className="mealDetail__info">
          <h2 className="mealDetail__title">{mealInfo.name.toUpperCase()}</h2>
          <ul className="mealDetail__list">  
          <li className="mealDetail__item">{mealInfo.ingredient1}</li>
          <li className="mealDetail__item">{mealInfo.ingredient2}</li>
          <li className="mealDetail__item">{mealInfo.ingredient3}</li>
          <li className="mealDetail__item">{mealInfo.ingredient4}</li>
          <li className="mealDetail__item">{mealInfo.ingredient5}</li>
          <li className="mealDetail__item">{mealInfo.ingredient6}</li>
          <li className="mealDetail__item">{mealInfo.ingredient7}</li>
          <li className="mealDetail__item">{mealInfo.ingredient8}</li>
        </ul>
            <div className="mealDetail__direction">  
                <h3 className="mealDetail__dirTitle">Directions</h3>
                <p >{mealInfo.directions}</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default MealDetail;
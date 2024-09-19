import React from "react";

const DrinkDetail = ({ drink, onClose }) => {
  return (
    <div className="drink-detail">
      <h2>{drink.strDrink}</h2>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <h3>Ingredients:</h3>
      <ul>
        {Object.keys(drink)
          .filter((key) => key.startsWith("strIngredient") && drink[key])
          .map((key, index) => (
            <li key={index}>{drink[key]}</li>
          ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{drink.strInstructions}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default DrinkDetail;

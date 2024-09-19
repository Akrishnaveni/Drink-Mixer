import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import DrinkCard from "./DrinkCard";
import DrinkDetail from "./DrinkDetails";
import "./App.css";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        )
        .then((response) => {
          setDrinks(response.data.drinks || []);
        });
    } else {
      setDrinks([]);
    }
  }, [searchTerm]);

  const handleCardClick = (drink) => {
    setSelectedDrink(drink);
  };

  const handleCloseDetail = () => {
    setSelectedDrink(null);
  };

  return (
    <div className="App">
      <h1>Cocktail Mixer</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="drink-list">
        {drinks.map((drink) => (
          <DrinkCard
            key={drink.idDrink}
            drink={drink}
            onClick={() => handleCardClick(drink)}
          />
        ))}
      </div>
      {selectedDrink && (
        <DrinkDetail drink={selectedDrink} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default App;

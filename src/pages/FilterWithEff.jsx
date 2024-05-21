import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from "../components/Table";
const FilterWithEff = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    //Fetch the initial set of recipes...
    const fetchInitialRecipes = async () => {
      try {
        const { data } = await axios('https://dummyjson.com/recipes?limit=10&skip=0&select=name,image,ingredients,instructions');
        setRecipes(data?.recipes || []); 
      } catch (e) {
        console.log(e);
      }
    };

    fetchInitialRecipes();
  }, []);

  useEffect(() => {
    //Fetch recipes based on the query...
    const fetchQueryRecipes = async () => {
      if (query) {
        try {
          const { data } = await axios(`https://dummyjson.com/recipes/search?q=${query}`);
          setRecipes(data?.recipes || []); 
        } catch (e) {
          console.log(e);
        }
      }
    };

    fetchQueryRecipes();
  }, [query]);

  const handleIngredientCheckboxChange = () => {
    setShowIngredients(!showIngredients);
  };

  const handleInstructionCheckboxChange = () => {
    setShowInstructions(!showInstructions);
  };
  const headers = ['Name', 'Image'];
  const tableData = recipes.map(recipe => ({
    Name: recipe.name,
    Image: <img src={recipe.image} alt={recipe.name} style={{ width: '100px' }} />,
    Ingredients: showIngredients ? (recipe.ingredients || 'N/A') : null,
    Instructions: showInstructions ? (recipe.instructions || 'N/A') : null,
  }));

  return (
    <div>
      <h1>Recipes</h1>
      <input
        placeholder="Enter Your Query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        <label>
          <input
            type="checkbox"
            checked={showIngredients}
            onChange={handleIngredientCheckboxChange}
          />
          Show Ingredients
        </label>
        <label>
          <input
            type="checkbox"
            checked={showInstructions}
            onChange={handleInstructionCheckboxChange}
          />
          Show Instructions
        </label>
      </div>
      <Table headers={headers.concat(showIngredients ? ['Ingredients'] : [], showInstructions ? ['Instructions'] : [])} data={tableData} />
    </div>
  );
};

export default FilterWithEff;

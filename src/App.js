import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";

const App = () => {
  //   const APP_ID = "7562e085";
  //   const APP_KEY = "476f63dd7e11b053d6010a5a9353aa39";

  //   const reqURL =
  //     "https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=7562e085&app_key=476f63dd7e11b053d6010a5a9353aa39";

  //   const reqURL2 =
  //     "https://api.edamam.com/search?q=pizza&app_id=7562e085&app_key=476f63dd7e11b053d6010a5a9353aa39";

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=7562e085&app_key=476f63dd7e11b053d6010a5a9353aa39`
      );
      //   console.log(response.data.hits);
      setRecipe(response.data.hits);
    };
    request();
  }, [query]);

  //console.log(recipe);

  const recipeCrd = recipes.map((recipe) => {
    return <Recipe key={recipe.recipe.label} recipe={recipe} />;
  });

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const handleClick = () => {
    setQuery(search);
    // console.log(query);
    setSearch("");
  };

  return (
    <div>
      <div className="d-flex justify-content-center m-5">
        <div className="d-flex align-items-center m-3">
          <input
            type="text"
            onChange={(e) => {
              updateSearch(e);
            }}
            value={search}
          />
        </div>
        <div>
          <button
            onClick={() => {
              handleClick();
            }}
            className="btn btn-primary m-3"
          >
            Search
          </button>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">{recipeCrd}</div>
    </div>
  );
};

export default App;

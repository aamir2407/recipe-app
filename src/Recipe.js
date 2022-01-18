import React from "react";

const Recipe = ({ recipe }) => {
  console.log(recipe);

  const ingredients = recipe.recipe.ingredients.map((ingredient) => {
    return <li>{ingredient.text}</li>;
  });

  return (
    <div className="m-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={recipe.recipe.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{recipe.recipe.label}</h5>
          {/* <p className="card-text">Ingredients</p>
          <ul>{ingredients}</ul> */}
          <a
            href={recipe.recipe.url}
            target="_blank"
            className="btn btn-primary"
          >
            Go to recipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

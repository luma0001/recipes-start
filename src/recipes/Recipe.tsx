import { useParams } from "react-router-dom";
import { Recipe as ApiRecipe } from "../services/apiFacade.ts";
import { useEffect, useState } from "react";

export default function Recipe() {
  const { id } = useParams();
  console.log("id", id);

  // DUMMYS

  const [recipe, setRecipe] = useState<ApiRecipe | null>(null);
  useEffect(() => {
    getRecipe(Number(id)).then((res) => setRecipe(res));
  }, [id]);

  return (
    <>
      {recipe ? (
        <>
          <h3>
            {" "}
            {recipe.name} ({recipe.id})
          </h3>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: 200, margin: 10, flexDirection: "column" }}
              src={recipe.thumb}
              alt={recipe.name}
            />
            <p style={{ display: "inline", flexDirection: "column" }}>
              {recipe.ingredients}
            </p>
          </div>
          <hr />
          <p style={{ whiteSpace: "pre-wrap" }}>{recipe.instructions}</p>
        </>
      ) : (
        <h2>Sorry. Recipe not found</h2>
      )}
    </>
  );
}

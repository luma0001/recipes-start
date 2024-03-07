import { API_URL } from "../settings";
import { makeOptions, handleHttpErrors } from "./fetchUtils";
const CATEGORIES_URL = API_URL + "/categories";
const RECIPE_URL = API_URL + "/recipes";
const INFO_URL = API_URL + "/info";

interface Recipe {
  id: number | null;
  name: string;
  category: string;
  instructions: string;
  thumb: string;
  youTube: string;
  ingredients: string;
  source: string;
}

interface Info {
  reference: string;
  created: string;
  info: string;
}

// den her kan gemmes i en objekt hvor jeg casher, der kan jeg sætte en timestamp ind for at gøre det automatisk over tid.
let categories: Array<string> = [];
let recipes: Array<Recipe> = [];
// det her er et javaScript
// let info: Info = { reference: "", created: "", info: "" };
let info: Info | null = null;

async function getCategories(): Promise<Array<string>> {
  if (categories.length > 0) return [...categories];
  const res = await fetch(CATEGORIES_URL).then(handleHttpErrors);
  categories = [...res];
  return categories;
}
async function getRecipes(category: string | null): Promise<Array<Recipe>> {
  //if (recipes.length > 0) return [...recipes];
  console.log("category", category);
  const queryParams = category ? "?category=" + category : "";
  return fetch(RECIPE_URL + queryParams).then(handleHttpErrors);
}

async function addCategory(newCategory: string){

  const options = makeOptions("POST", null,true);
  fetch(CATEGORIES_URL+"/"+newCategory, options).then(handleHttpErrors);

}



async function getRecipe(id: number): Promise<Recipe> {
  //if (recipes.length > 0) return [...recipes];
  return fetch(RECIPE_URL + "/" + id).then(handleHttpErrors);
}
async function addRecipe(newRecipe: Recipe): Promise<Recipe> {
  const method = newRecipe.id ? "PUT" : "POST";
  const options = makeOptions(method, newRecipe, true);
  
  const URL = newRecipe.id ? `${RECIPE_URL}/${newRecipe.id}` : RECIPE_URL;
  return fetch(URL, options).then(handleHttpErrors);
}
async function deleteRecipe(id: number): Promise<Recipe> {
  const options = makeOptions("DELETE", null);
  return fetch(`${RECIPE_URL}/${id}`, options).then(handleHttpErrors);
}

async function getInfo(): Promise<Info> {
  if (info != null) {
    return info;
  }
  info = (await fetch(INFO_URL).then(handleHttpErrors)) as Info;
  return info;
}

export type { Recipe, Info };
// eslint-disable-next-line react-refresh/only-export-components
export {
  getCategories,
  getRecipes,
  getRecipe,
  addCategory,
  addRecipe,
  deleteRecipe,
  getInfo,
};

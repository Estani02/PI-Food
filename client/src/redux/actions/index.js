export const GET_ALL_RECIPES = "GET_ALL_RECIPES";

const URL_API = "http://localhost:3001/recipes";

export function getAllRecipes(){
    const urlAllRecipes = `${URL_API}`
    return async function(dispatch){
        const r = await fetch(urlAllRecipes);
        const data = await r.json();
        await dispatch({ type: GET_ALL_RECIPES, payload: data })
    }
}
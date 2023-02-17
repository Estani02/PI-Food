export const GET_ALL_RECIPES = "GET_ALL_RECIPES";

const URL_API = "http://localhost:3001";

export function getAllRecipes(){
    const urlAllRecipes = `${URL_API}/recipes`
    return async function(dispatch){
        const r = await fetch(urlAllRecipes);
        const data = await r.json();
        await dispatch({ type: GET_ALL_RECIPES, payload: data })
    }
}
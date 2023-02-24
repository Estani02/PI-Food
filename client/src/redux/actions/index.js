import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_SEARCH_RECIPES = "GET_SEARCH_RECIPES"
export const GET_ORDER_RECIPES = "GET_ORDER_RECIPES"
export const GET_ORDER_ORIGIN = "GET_ORDER_ORIGIN"
export const GET_RECIPE_FILTER = "GET_RECIPE_FILTER"
export const GET_ALL_DIETS = "GET_ALL_DIETS"
export const GET_ORDER_SCORE = "GET_ORDER_SCORE"
export const POST_RECIPE = "POST_RECIPE"

const URL_API = "http://localhost:3001";


export function getAllRecipes() {
    const urlAllRecipes = `${URL_API}/recipes`
    return async function (dispatch) {
        const r = await fetch(urlAllRecipes);
        const data = await r.json();
        await dispatch({ type: GET_ALL_RECIPES, payload: data })
    }
};

export function getDiets() {
    const urlAllDiets = `${URL_API}/diets`
    return async function (dispatch) {
        const r = await fetch(urlAllDiets);
        const data = await r.json();
        await dispatch({ type: GET_ALL_DIETS, payload: data })
    }
}

export function getSearchRecipes(title) {
    return {
        type: GET_SEARCH_RECIPES,
        payload: title
    }
};

export function orderByAlphabetical(order) {
    return {
        type: GET_ORDER_RECIPES,
        payload: order
    }
};

export function orderByOrigin(order) {
    return {
        type: GET_ORDER_ORIGIN,
        payload: order
    }
};

export function filterByDiet(diet) {
    return {
        type: GET_RECIPE_FILTER,
        payload: diet
    }
};

export function orderByHealthScore(score) {
    return {
        type: GET_ORDER_SCORE,
        payload: score
    }
};

export function postRecipe(data) {
    return async function (dispatch) {
        const r = axios.post(`${URL_API}/recipes`, data);
        console.log(r);
        return r
    }
}




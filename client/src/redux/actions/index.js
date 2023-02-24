import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES"
export const GET_SEARCH_RECIPES = "GET_SEARCH_RECIPES"
export const ORDER_ALPHA = "ORDER_ALPHA"
export const GET_ALL_DIETS = "GET_ALL_DIETS"
export const ORIGIN_FILTER = "ORIGIN_FILTER"
export const DIET_FILTER = "DIET_FILTER"
export const ORDER_SCORE = "ORDER_SCORE"
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
        type: ORDER_ALPHA,
        payload: order
    }
};

export function filterByDiet(diet) {
    return {
        type: DIET_FILTER,
        payload: diet
    }
};

export function filterByOrigin(diet) {
    return {
        type: ORIGIN_FILTER,
        payload: diet
    }
};

export function orderByHealthScore(score) {
    return {
        type: ORDER_SCORE,
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




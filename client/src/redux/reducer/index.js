import { GET_ALL_DIETS, GET_ALL_RECIPES, GET_ORDER_ORIGIN, GET_ORDER_RECIPES, GET_RECIPE_FILTER, GET_SEARCH_RECIPES } from "../actions";


const initialState = {
    allRecipes: [],
    temporal: [],
    diets: []
};

const rootReducer = (state = initialState, { type, payload }) => {

    //funcion para utilizar 'sort'
    const sort_list = (key, list, inverse) =>
        inverse
            ? [...list].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
            : [...list].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))

    switch (type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                allRecipes: payload,
                temporal: payload
            }
        case GET_ALL_DIETS:
            return{
                ...state,
                diets: payload
            }
        case GET_SEARCH_RECIPES:
            return {
                ...state,
                temporal: [
                    ...state.allRecipes.filter((element) =>
                        element.title.toString().toLowerCase().includes(payload.toString().toLowerCase()))
                ]
            }
        case GET_ORDER_RECIPES:
            if (payload === "a-z") {
                return {
                    ...state,
                    temporal: sort_list("title", state.temporal)
                }
            } else {
                return {
                    ...state,
                    temporal: sort_list("title", state.temporal, true)
                }
            }
        case GET_ORDER_ORIGIN:
            if (payload === "all") {
                return {
                    ...state,
                    temporal: state.allRecipes
                }
            } else if (payload === "api") {
                return {
                    ...state,
                    temporal: state.temporal.filter((recipe) =>
                        !recipe.hasOwnProperty("createInDb")
                    )
                }
            } else {
                return {
                    ...state,
                    temporal: state.temporal.filter((recipe) =>
                        recipe.hasOwnProperty("createInDb")
                    )
                }
            }
        case GET_RECIPE_FILTER:
            if(payload === "all"){
                return{
                    ...state,
                    temporal: state.allRecipes
                }
            }
            return {
                ...state,
                temporal: state.temporal.filter((recipe) => 
                    recipe.diets.includes(payload)
                    )
            }
        default:
            return { ...state }
    }
}

export default rootReducer;
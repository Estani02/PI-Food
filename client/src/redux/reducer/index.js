import {
    GET_ALL_RECIPES,
    GET_SEARCH_RECIPES,
    ORDER_ALPHA,
    GET_ALL_DIETS,
    ORIGIN_FILTER,
    DIET_FILTER,
    ORDER_SCORE,
    //POST_RECIPE
} from "../actions";


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
            return {
                ...state,
                diets: payload
            }

        case GET_SEARCH_RECIPES:
            return {
                ...state,
                temporal: [
                    ...state.temporal.filter((element) =>
                        element.title.toString().toLowerCase().includes(payload.toString().toLowerCase()))
                ]
            }

        case ORDER_ALPHA:
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

        case ORDER_SCORE:
            if (payload === "asc") {
                return {
                    ...state,
                    temporal: sort_list("healthScore", state.temporal)
                }
            } else {
                return {
                    ...state,
                    temporal: sort_list("healthScore", state.temporal, true)
                }
            }

        case DIET_FILTER:
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

        case ORIGIN_FILTER:
            if (payload === "all") {
                return {
                    ...state,
                    temporal: state.allRecipes
                }
            } else if (payload === "api") {
                return {
                    ...state,
                    temporal: state.allRecipes.filter((recipe) =>
                        !recipe.hasOwnProperty("createInDb")
                    )
                }
            } else {
                return {
                    ...state,
                    temporal: state.allRecipes.filter((recipe) =>
                        recipe.hasOwnProperty("createInDb")
                    )
                }
            }


        default:
            return { ...state }
    }
}

export default rootReducer;
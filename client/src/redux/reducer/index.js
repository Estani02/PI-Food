import { GET_ALL_RECIPES, GET_SEARCH_RECIPES } from "../actions";


const initialState = {
    allRecipes: [],
    temporal: []
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                allRecipes: payload,
                temporal: payload
            }
        case GET_SEARCH_RECIPES:
            return {
                ...state,
                temporal: [
                    ...state.allRecipes.filter((element) => 
                    element.title.toString().toLowerCase().includes(payload.toString().toLowerCase()))
                ]
            }
        default:
            return { ...state }
    }
}

export default rootReducer;
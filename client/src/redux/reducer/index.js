import { GET_ALL_RECIPES } from "../actions";


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
    
        default:
            return { ...state }
    }
}

export default rootReducer;
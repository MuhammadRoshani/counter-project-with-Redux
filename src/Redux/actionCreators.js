import { incrementAction, decrementAction, resetAction } from "./actionTypes.js"

//actions
export const incActionCreator = () => {
    return { type: incrementAction }
}

export const decActionCreator = () => {
    return { type: decrementAction }
}

export const resetActionCreator = () => {
    return { type: resetAction }
}

// we better use uppercase for writing type value in our actions.

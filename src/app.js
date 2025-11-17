// redux cdn
import * as Redux from 'https://unpkg.com/redux@latest/dist/redux.browser.mjs'
import { incActionCreator, decActionCreator, resetActionCreator } from './Redux/actionCreators.js'
import { incrementAction, decrementAction, resetAction } from './Redux/actionTypes.js'

const incBtn = document.getElementById('incBtn')
const resetBtn = document.getElementById('resetBtn')
const decBtn = document.getElementById('decBtn')
const result = document.querySelector('.result')

// reducer
const counterReducer = (state = 0, action) => {
    // also better we use switch case structure in our reducer function instead of if && else.
    switch (action.type) {
        case incrementAction: {
            return state + 1
        }
        case decrementAction: {
            return state - 1
        }
        case resetAction: {
            return 0
        }
        default: {
            return state
        }
    }
}

// create store
const store = Redux.createStore(counterReducer)


// eventHandler | dispatch
incBtn.addEventListener('click', () => {
    store.dispatch(incActionCreator())
})

resetBtn.addEventListener('click', () => {
    store.dispatch(resetActionCreator())
})

decBtn.addEventListener('click', () => {
    store.dispatch(decActionCreator())
})

// renderUI function
// we use this function for our state value in reducer if sometimes change our default value show and render new number value in html page.
const renderUI = () => {
    result.innerHTML = store.getState()
}

renderUI()

// subscribe
store.subscribe(renderUI)

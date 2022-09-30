const {createStore} = require('redux')

// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const ADD_USER = "ADD_USER";

// //State
// const initialStateCounter = {
//   counter: 0,
// };

// const initialUserCounter = [{ name: "Sushanta" }];

// //Action

// const counterReducer = (state = initialStateCounter, action) => {
//     switch(action.type){
//         case INCREMENT:
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//         case DECREMENT:
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         default:
//             return state;
//     }
// }

// const incrementCounter = () => {
//   return {
//     type: INCREMENT,
//   };
// };

// const decrementCounter = () => {
//   return {
//     type: DECREMENT,
//   };
// };

// const addUser = () => {
//   return {
//     type: ADD_USER,
//     user: { name: "Rahaman" }, // payload
//   };
// };


// //Store Creation

// const store = createStore(counterReducer)

// store.subscribe(() => {
//     console.log(store.getState())
// })


// setInterval(() => {
//     store.dispatch(incrementCounter())
// }, 1000)


//////////////****************************//////////////// */

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

//INITIALSTATE
const initialState = {
    count: 0
}
//ACTIONS

//INCREMENT ACTION
const incrementCount = () => {
    return {
        type: INCREMENT
    }
}

//DECREMENT ACTION
const decrementCount = () => {
    return {
        type: DECREMENT
    }
}
//RESET ACTION
const resetCount = () => {
    return {
        type: RESET
    }
}

const countReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount())
store.dispatch(decrementCount())
store.dispatch(incrementCount())
store.dispatch(resetCount())
store.dispatch(incrementCount())
const {createStore} = require('redux')

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

//State
const initialStateCounter = {
  counter: 0,
};

const initialUserCounter = [{ name: "Sushanta" }];

//Action

const counterReducer = (state = initialStateCounter, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const addUser = () => {
  return {
    type: ADD_USER,
    user: { name: "Rahaman" }, // payload
  };
};


//Store Creation

const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
})


setInterval(() => {
    store.dispatch(incrementCounter())
}, 1000)


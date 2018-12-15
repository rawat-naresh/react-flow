import { createStore } from 'redux';

const initialState = {
    count:0
};


//Other than the first time,the reducer will always be called with latest state
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'INCREMENT':
           return Object.assign({},state,{count:state.count+1});
        default:
            return state;

    }
}

//reducer will be called once,with initialState,  when we call the createStore 

const store = createStore(reducer);

export default store;
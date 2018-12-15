import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
    return (
        <div>
            <h1>I'm a Counter.</h1>
            <p>Count:{props.count}</p>
            <button onClick={props.onIncrementClick}>increment</button>
        </div>
    );
}

//function that maps the state to the props
function mapStateToProps(state){
    return {
        count:state.count
        //this is the props that will be passed to this component by
        //connect
    }
}

//function that maps actions to the props
function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick:() => {
            const action = {type:'INCREMENT'}
            dispatch(action);
        }
    }
}


//connect takes a function, that knows how to map state to the props
//connect then returns a function which we call by passing current Component
//which inturns return a new Component, and pass the props that were
//mapped already by the mapStateToProps function.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//redux will pass 'state' instance as argument to the first function passed
//to connect and 'dispatch' function to the second function passed to
//connect  
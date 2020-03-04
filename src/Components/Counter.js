import React from 'react';
import '../App.css';
// To get the count out of Redux, we first need to
//  import the connect function 
import { connect } from 'react-redux'
import { INCREMENT, DECREMENT, RESET } from './Actions';


// Add this function:
function mapStateToProps( state ){
    return {
      count: state.count
    };
  }

class Counter extends React.Component {
        // state = { count : 0}  <--- Remove This


  increment = () =>{
// ** Remove This code below*
    // this.setState(
    //     {count : this.state.count + 1}
    // )
    this.props.dispatch({type: INCREMENT });
    }

    decrement = () => {
// Also remove this   
        // this.setState(
        //     {count: this.state.count - 1}
        // )
        this.props.dispatch({ type: DECREMENT });
    }

    reset = ()=>{
        this.props.dispatch({type:  RESET });
    }
    render(){
        return(
            <div className='card bg-light'>
                <h1>Niecey's Counter</h1>
                <div className='card-body'>
                    <button type="button" className="btn btn-lg" onClick={this.increment}>+</button>
              
                    <button type="button" className="btn btn-lg" onClick={this.decrement}>-</button>
                    <span className="count"> {this.props.count}</span>
                </div><div>

                <button type="button" className="btn btn-lg" id="reset " onClick={this.reset}>Reset</button>

                </div>
            </div>
                
        )
    // Replace this.state.count With props
    }
}

// Then replace this:
// export default Counter;


// With this:
export default connect(mapStateToProps)(Counter);

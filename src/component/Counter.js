import React, {Component} from 'react';
class Counter extends Component{
    constructor(props){
        super(props)
        this.state={number:0}
    }
    Reset=()=>{
        this.setState({number:0})
    }
    Add=()=>{
        this.setState({number:this.state.number+1})
    }
    Sub=()=>{
        this.setState({number:this.state.number-1})
    }
    render(){
        return(
          <div className="center_div">
              <h1>{this.state.number}</h1><br/>
              <button onClick={this.Sub}>-</button>
              <button onClick={this.Add}>+</button>
              <button onClick={this.Reset}>Reset</button>
          </div>
        );
    }
}
export default Counter;
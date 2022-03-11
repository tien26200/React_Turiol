import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = {  

        counters:[
            {id:1, value:0},
            
        ]
    } 
    render() { 
        return (
            <> 
                {this.state.counters.map(counter => <Counter key= {counter.id} />)}
            </>
        )
    }
}
 
export default Counters;
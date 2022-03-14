import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = {  

        counters:[
            {id:1, value:3},
            {id:2, value:2},
                     
        ]
    };

    handleDelete = counterId => {
        
        const counters = this.state.counter.filter(c =>c.id !== counterId);
        this.setState({counters});

    };
    render() { 
        
        return (
            <> 
                {this.state.counters.map(counter => (
                <Counter 
                key= {counter.id}  
                onDelete={this.handleDelete} 
                value ={counter.value}
                >

                </Counter>    
                ))}
                
            </>
        )
    }
}
 
export default Counters;
import React, { Component } from 'react';

class  Counter extends Component {
    
    state={
      count: 0,
      tags:["tag1", "tag2", "tag3"]
    };

    // Hàm render render tag
    renderTags(){
        // condition render
        if(this.state.tags.length === 0) return <p>There are no tag</p>;     
        return <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>;
    }
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = product => {   
        console.log(product);
        this.setState({count: this.state.count + 1 });
    };
    handleUndo= () =>{
        this.setState({count: this.state.count - 1});
    };


    render() {    
        return (

            <div>
                <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
                {/* Button reduction */}
                <button 
                onClick={this.handleUndo} 
                className="btn btn-secondary m-2 btn-sm ">reduction</button>
                 {/* Button Increment  */}
                <button 
                onClick={this.handleIncrement} 
                className="btn btn-secondary btn-sm">Increment</button>
                <div>
                    {this.state.tags.length === 0 &&'Please index a new tag!!'}
                    {this.renderTags()}
                </div>

            </div>
            
            
        );
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        
        return (
            count === 0 ? "Zero" :count
                // count === 1 ? "Number1" : count
        )                    
    }
}
 
export default Counter;

import React, { Component } from 'react';

class  Counter extends Component {
    
    state={
      count: this.props.value,
      tags:["tag1", "tag2", "tag3"],
      image: "data:image/jpeg;base64,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"
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

                 {/* <img src={this.state.image} alt=""/> */}
                <button 
                onClick={this.handleIncrement} 
                className="btn btn-secondary btn-sm">Increment</button>
                
                <button onclick={() => this.props.onDelete(this.props.id)} 
                className ="btn btn-danger btn-sm m-2">
                    Delele</button>

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

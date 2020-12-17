import React, { Component } from 'react';

export class AddTodo extends Component {
    
    state = {
        title: ''
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }

    // state change by the value entered in the input field; check what 
    // happens when [e.target.name] is put instead of title
    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                <input 
                    type="text" 
                    title="name" 
                    style={{ flex: '10', padding: '5px'}}
                    placeholder="Add todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="Submit" 
                    value="Submit" 
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTodo

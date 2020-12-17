import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            // Implementation with ternary operator
            textDecoration: this.props.todo.completed ?
             "line-through" : "none"
        }
        // Alternative, explicit implementation
        // if (this.props.todo.completed) {
        //     return {
        //         textDecoration: "line-through"
        //     }
        // } else {
        //     return {
        //         textDecoration: "none"
        //     }
        // }
    }

    render() {
        const { id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind
                (this, id)}/> {" "}
                {title}
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}></button>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}

const btnStyle = {
    background: "#ff0000",
    color: "white",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
}

export default TodoItem

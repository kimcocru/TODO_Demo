import React from 'react'
import PropTypes from 'prop-types'

class ToDoItem extends React.Component {

    render() {
        //console.log(this.props)
        return (
            <div>
                <li id={this.props.todo.id}>{this.props.todo.value} <span> <input id="checkBox" type="checkbox" onChange={()=>this.props.onItemDone(this.props.todo.id)} /> </span></li> 
            </div>
        );
    }
}

ToDoItem.propTypes = {
    todos: PropTypes.object,
    onItemDone: PropTypes.func
}

ToDoItem.defaultProps = {
    todos: [],
    onItemDone: () => {}
}

export default ToDoItem;
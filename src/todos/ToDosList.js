import React from 'react'
import ToDoItem from './ToDoItem'
import PropTypes from 'prop-types'
class ToDosList extends React.Component {

    render() {
        var props = this.props
        return (
            <ul>
                {
                    props.todos.map(function (item) {
                        if (item.done === false) {
                            return < ToDoItem key={item.id} todo={item} onItemDone={props.onItemDone} />
                        }

                    })
                }
            </ul>
        );
        return <div></div>
    }


}

ToDosList.propTypes = {
    todos: PropTypes.object,
    onItemDone: PropTypes.func
}

ToDosList.defaultProps = {
    todos: [],
    onItemDone: () => {}
}

export default ToDosList;

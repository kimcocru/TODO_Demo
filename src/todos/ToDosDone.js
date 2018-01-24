import React from 'react'
import ToDoItem from './ToDoItem'
import PropTypes from 'prop-types'

class ToDosDone extends React.Component {

    render() {
        //console.log(this.props)
        var props = this.props
        return (
            <ul>
                {
                    props.todos.map(function (item) {
                        if (item.done === true) {
                            return < ToDoItem key={item.id} todo={item} onItemDone={props.onItemDone} />
                        }

                    })
                }
            </ul>
        );
        return <div></div>
    }
}

ToDosDone.propTypes = {
    todos: PropTypes.object,
    onItemDone: PropTypes.func
}

ToDosDone.defaultProps = {
    todos: [],
    onItemDone: () => {}
}

export default ToDosDone;
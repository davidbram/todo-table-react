import React from 'react'
import {ToDoContext} from '../ToDoList';

const DeleteButton = (props) => {


    return (
        <ToDoContext.Consumer>
            {
                deleteItem => <button onClick={() => {
                    deleteItem(props.id);
                }}>Delete</button>
            }
    
        </ToDoContext.Consumer>
    )
}

export default DeleteButton


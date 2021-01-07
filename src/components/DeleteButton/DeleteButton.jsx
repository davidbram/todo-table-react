import React from 'react'
import {DeleteItemContext} from '../ToDoList';

const DeleteButton = (props) => {

    return (
        <DeleteItemContext.Consumer>
            {
                deleteItem => <button onClick={() => {
                    deleteItem(props.id);
                }}>Delete</button>
            }
    
        </DeleteItemContext.Consumer>
    )
}

export default DeleteButton


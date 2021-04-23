import React from 'react'
import {ListGroup, ListGroupItem, Button} from 'reactstrap'
import { useDispatch } from "react-redux"

import {deleteTodo, changeStatus} from "../redux/actions/todoAction"

export default function TodoItem({ todo}) {
    const dispatch = useDispatch()

    const handleChangeStatus = () => {
        // const action ={
        //     type: "CHANGE_STATUS",
        //     payload: {
        //         id: todo.id,
        //     }
        // }
        // dispatch(action)

        dispatch(changeStatus(todo.id))
    }

    const handleDelete = () => {
        // const action = {
        //     type: "DELETE_TODO",
        //     payload: {
        //         id: todo.id,
        //     }
        // }
        // dispatch(action)

        dispatch(deleteTodo(todo.id));
    }
    return (
        <ListGroupItem className="d-flex align-items-center justify-content-between">
            <span>{todo.name}</span>
            <div>
                <Button color="success" onClick={handleChangeStatus} className="mr-4">
                    {todo.isCompleted ? "Cancel" : "Complete"}
                </Button>
                <Button color="danger" onClick={handleDelete} className="mr-4">Delete</Button>
            </div>
        </ListGroupItem>
    )
}

import React, {useState} from 'react'
import {Input, Button} from 'reactstrap'
import {useDispatch} from 'react-redux'
import {addTodo} from "../redux/actions/todoAction"

export default function AddTodo() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        setTodo(evt.target.value);
    }

    const handleAddTodo = () => {
        // const action = {
        //     type: "ADD_TODO",
        //     payload: {
        //         todo,
        //     }
        // }
        // dispatch(action)

        dispatch(addTodo(todo));
    }
    return (
        <div className="w-50 d-flex mb-3">
            <Input value={todo} onChange={handleChange} />
            <Button color="primary ml-3" onClick={handleAddTodo}>Add</Button>
        </div>
    )
}

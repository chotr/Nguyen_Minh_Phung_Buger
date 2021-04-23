import React from "react";
import { Button } from "reactstrap";
import {useDispatch} from "react-redux"
import {filterTodo} from "../redux/actions/todoAction"

export default function FilterTodo() {
    const dispatch = useDispatch ();
    const filterTodos =status => {
        // const action = {
        //     type: "FILTER_TODO",
        //     payload: {
        //         status,
        //     }
        // }
        // dispatch(action)

        dispatch(filterTodo(status))
    }

  return (
    <div className="d-flex mt-4">
      <Button
        color="primary"
        className="mr-4"
        onClick={() => filterTodos("all")}
      >
        All
      </Button>
      <Button
        color="success"
        className="mr-4"
        onClick={() => filterTodos("Completed")}
      >
        Completed
      </Button>
      <Button color="warning" onClick={() => filterTodos("Uncompleted")}>
        Uncompleted
      </Button>
    </div>
  );
}

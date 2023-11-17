import React, { useState } from "react";
function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo,
          id: e.target.value
        })} />
      <a href={`${API}/${todo.id}`}
        className="btn btn-primary me-2">
        Get Todo by ID
      </a>

      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`}
        className="btn btn-primary me-2" >
        Get Completed Todos
      </a>

      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`}
        className="btn btn-primary me-2">
        Create Todo
      </a>

      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
      <input
        value={todo.completed}
        onChange={(e) => setTodo({
          ...todo, completed: e.target.checked })}
        className="form-check-input mb-2"
        type="checkbox"
      />
      
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2" >
        Update Title to {todo.title}
      </a>

      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}
         className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>

      <h4>Extra Credit</h4>
      <p>(use same id field as before and update the completed field in the checkbox below title box)</p>
      <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2">
          Update Completed to {todo.completed.toString()}
      </a>
      <p>I am not sure what you want us to do for the description part, since our todos in the kanbas-node-server part do not have a description field. I am not sure if you wanted us to add it or do something else, so I skipped this extra credit part (but I do know how to implement this if we just wanted to add descriptions as a field for our todo items and update them individually like how we did the update title)
      </p>
      

    </div>
  );
}
export default WorkingWithArrays;


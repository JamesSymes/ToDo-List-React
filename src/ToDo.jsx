import React, { useState } from 'react'; // Import React and the useState hook from the 'react' library

import './styles.css'; // Import the CSS file for styling

const Todo = () => { // Create a functional component called Todo
  const [todos, setTodos] = useState([]); // Create a state variable 'todos' and a function to update it 'setTodos', initialized to an empty array
  const [inputValue, setInputValue] = useState(''); // Create a state variable 'inputValue' and a function to update it 'setInputValue', initialized to an empty string

  const handleInputChange = (event) => { // Create a function 'handleInputChange' to handle the change event of the input field
    setInputValue(event.target.value); // Update the 'inputValue' state with the new value entered in the input field
  };

  const handleAddTodo = () => { // Create a function 'handleAddTodo' to handle adding a new todo item
    if (inputValue.trim() !== '') { // Check if the trimmed input value is not empty
      setTodos([...todos, { text: inputValue, completed: false }]); // Update the 'todos' state by adding a new todo object to the existing array
      setInputValue(''); // Reset the 'inputValue' state to an empty string
    }
  };

  const handleToggleTodo = (index) => { // Create a function 'handleToggleTodo' to handle toggling the completed status of a todo item
    const updatedTodos = todos.map((todo, i) => // Map over the 'todos' array and create a new array 'updatedTodos' with the updated completed status
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos); // Update the 'todos' state with the updated array
  };

  const handleDeleteTodo = (index) => { // Create a function 'handleDeleteTodo' to handle deleting a todo item
    const updatedTodos = todos.filter((_, i) => i !== index); // Filter out the todo item at the given index and create a new array 'updatedTodos'
    setTodos(updatedTodos); // Update the 'todos' state with the updated array
  };

  return (
    <div>
      <h1>React ToDo List</h1> {/* Render a heading for the ToDo List */}
      <input type="text" value={inputValue} onChange={handleInputChange} /> {/* Render an input field for entering todo items, with value and onChange event handler */}
      <button onClick={handleAddTodo}>Add</button> {/* Render a button for adding a new todo item, with onClick event handler */}
      <ul className="todo-list"> {/* Render an unordered list for displaying the todo items */}
        {todos.map((todo, index) => ( // Map over the 'todos' array and render a list item for each todo item
          <li key={index} className="todo-item"> {/* Render a list item with a unique key and 'todo-item' class */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(index)}
            /> {/* Render a checkbox input for marking the todo item as completed */}
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            > {/* Render the text of the todo item with a style based on its completed status */}
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button> {/* Render a button for deleting the todo item, with onClick event handler */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo; // Export the Todo component as the default export

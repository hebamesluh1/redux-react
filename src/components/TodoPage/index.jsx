import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteTodos, getAllTodos } from '../../redux/todo';

const TodoPage = () => {
    const { isLoading, todos } = useSelector((state) => state.todo);
    const [title, setTitle] = useState(''); // Set initial state to an empty string
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(getAllTodos([
                { title: "heba", id: Math.round(Math.random() * 100) },
                { title: "shoman", id: Math.round(Math.random() * 100) },
                { title: "yara", id: Math.round(Math.random() * 100) }
            ]));
        }, 1000);
    }, [dispatch]);

    const deletetodo = (id) => {
        dispatch(deleteTodos(id));
    };

    const createtodo = (title) => { // Change parameter name to "title"
        dispatch(createTodo({
            id: Math.round(Math.random() * 100),
            title // Short for "title: title"
        }));
        setTitle("");
    };

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault(); // Prevent form submission
                createtodo(title); // Call createtodo with the title as an argument
            }}>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                <button type="submit">Submit</button> {/* Added type="submit" to the button */}
            </form>
            {isLoading ? "loading" : (
                <>
                    {todos.length > 0 ?
                        todos.map(todo => {
                            return (
                                <div key={todo.id}> {/* Added key attribute to the mapped div */}
                                    {todo.title} <button onClick={() => deletetodo(todo.id)}>X</button>
                                </div>
                            )
                        }) : "no todoes to show" // Changed "shown" to "show"
                    }
                </>
            )}
        </div>
    );
};

export default TodoPage;

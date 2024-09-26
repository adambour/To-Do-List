import React, { useState } from 'react';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import Edit from './Edit';

const TodoList = () => {
    const [todoValue, setTodo] = useState([]);

    const createTodo = (todo) => {
        setTodo([
            ...todoValue,
            {
                id: uuidv4(),
                task: todo,
                isEditing: false,
            },
        ]);
    };

    const deleteTodo = (id) => {
        setTodo(todoValue.filter((todo) => todo.id !== id));
    };

    const editTodo = (id) => {
        setTodo(
            todoValue.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const editTask = (task, id) => {
        setTodo(
            todoValue.map(todo => todo.id === id ? {
                ...todo,
                task,
                isEditing: !todo.isEditing
            } : todo)
        );
    };

    return (
        <div className="flex justify-center items-center h-screen bg-black"> 
            <div className="bg-gray-700 p-8 rounded-md w-96"> 
                <Form createTodo={createTodo} />
                {
                    todoValue.map((todo, idx) => (
                        todo.isEditing ? (
                            <Edit editTodo={editTask} task={todo} key={idx} />
                        ) : (
                            <Todo
                                task={todo}
                                key={idx}
                                deLeteTodo={deleteTodo}
                                editTodo={editTodo}
                            />
                        )
                    ))
                }
            </div>
        </div>
    );
};

export default TodoList;


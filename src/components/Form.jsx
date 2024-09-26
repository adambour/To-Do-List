import React, { useState } from 'react';

const Form = ({ createTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(value);
        setValue('');
    };

    return (
        <form className="flex justify-center items-center mb-4 font-primary" onSubmit={handleSubmit}>
            <input
                type="text"
                className="outline-none bg-transparent border border-gray-500 p-4  text-white mb-0 rounded placeholder:text-gray-300"
                placeholder="What task do you have today?"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button className="bg-gray-700 border p-2 text-white cursor-pointer rounded ml-2">
                Add Task
            </button>
        </form>
    );
};

export default Form;

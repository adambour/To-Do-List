import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

const Todo = ({ task, deLeteTodo, editTodo }) => {
    return (
        <div className='flex justify-between items-center bg-blue-500 text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
            <p className='font-primary text-wrap w-56 '>{task.task}</p>
            <div className='flex items-center gap-x-4'>
                <AiFillEdit className='text-xl' onClick={() => editTodo(task.id)} />
                <BsFillTrashFill className='text-xl' onClick={() => deLeteTodo(task.id)} />
            </div>
        </div>
    );
}

export default Todo;

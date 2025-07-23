"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const TodoDisplay = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const name = useSelector((state: RootState) => state.user.name);

  return (
    <div className="w-full max-w-md p-4 bg-gray-50 rounded shadow mt-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Nama Pengguna</h2>
        <p className="mt-2 text-lg text-gray-600">
          {name ? name : 'Belum ada nama'}
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Daftar Todo</h2>
        {todos.length === 0 ? (
          <p className="text-gray-600">Belum ada todo yang ditambahkan.</p>
        ) : (
          <ul className="list-disc list-inside">
            {todos.map((todo, index) => (
              <li key={index} className="text-gray-700">
                {todo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoDisplay;

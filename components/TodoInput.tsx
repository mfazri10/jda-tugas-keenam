"use client";

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
import { setName } from '../store/userSlice';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');
  const [name, setNameInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoText.trim()) {
      setError("Todo tidak boleh kosong.");
      return;
    }
    dispatch(addTodo(todoText));
    setTodoText('');
    setError(null);
  };

  const handleSetName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Nama tidak boleh kosong.");
      return;
    }
    dispatch(setName(name));
    setNameInput('');
    setError(null);
  };

  return (
    <div className="w-full max-w-md p-4 bg-white rounded shadow">
      {/* Todo Form */}
      <form onSubmit={handleAddTodo} className="mb-6">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="todo">
          Tambahkan Todo
        </label>
        <div className="flex">
          <input
            type="text"
            id="todo"
            className="flex-grow border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Masukkan todo..."
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition-colors"
          >
            Tambah
          </button>
        </div>
      </form>

      {/* Set Name Form */}
      <form onSubmit={handleSetName} className="mb-2">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Masukkan Nama
        </label>
        <div className="flex">
          <input
            type="text"
            id="name"
            className="flex-grow border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Masukkan nama..."
            value={name}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 rounded-r hover:bg-green-600 transition-colors"
          >
            Set
          </button>
        </div>
      </form>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TodoInput;

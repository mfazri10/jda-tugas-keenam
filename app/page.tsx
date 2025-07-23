import TodoInput from "../components/TodoInput";
import TodoDisplay from "../components/TodoDisplay";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-10 text-gray-800">Aplikasi Todolist</h1>
      <TodoInput />
      <TodoDisplay />
    </div>
  );
}

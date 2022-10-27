import TodoInput from "../src/components/TodoInput";
import TodoList from "../src/components/TodoList";
import TodoTitle from "../src/components/TodoTitle";

export default function Home() {
  return (
    <div>
      <TodoTitle />
      <TodoList />
      <TodoInput />
    </div>
  );
}

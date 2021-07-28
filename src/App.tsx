import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { ITask } from "./component/interface";
import TodoTask from "./component/TodoTask";
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };
  const addTask = (): void => {
    setTodoList([...todoList, { taskName: task, deadline: deadline }]);
    setTask("");
    setDeadline(0);
  };
  const deleteTodo = (task: string): void => {
    setTodoList(todoList.filter((todo) => todo.taskName !== task));
  };
  return (
    <div className="App">
      <h1>Todo App with React and Typescript</h1>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline...."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList?.map((todo: ITask, i: number) => {
          return <TodoTask key={i} todo={todo} deleteTodo={deleteTodo} />;
        })}
      </div>
    </div>
  );
};

export default App;

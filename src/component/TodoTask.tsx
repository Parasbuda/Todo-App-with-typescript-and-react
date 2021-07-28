import React from "react";
import { ITask } from "../component/interface";

interface Props {
  todo: ITask;
  deleteTodo(taskNameToDelete: string): void;
}

const TodoTask = ({ todo, deleteTodo }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{todo.taskName}</span>
        <span>{todo.deadline}</span>
      </div>
      <button
        onClick={() => {
          deleteTodo(todo.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;

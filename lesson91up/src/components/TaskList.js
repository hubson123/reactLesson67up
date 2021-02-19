import React from "react";
import Task from "./Task";
const TaskList = (props) => {
  const activeTasks = props.tasks.filter((task) => task.active);
  const doneTasks = props.tasks.filter((task) => !task.active);
  if (doneTasks.length >= 2) {
    doneTasks.sort((a, b) => b.finishDate - a.finishDate);
  }
  if (activeTasks.length >= 2) {
    activeTasks.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }
  const mapActiveTasks = activeTasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      changeTaskStatus={props.changeTaskStatus}
      deleteTask={props.deleteTask}
    />
  ));
  const mapDoneTasks = doneTasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      changeTaskStatus={props.changeTaskStatus}
      deleteTask={props.deleteTask}
    />
  ));

  return (
    <>
      <div className="active">
        <h3>lista zadań do zrobienia</h3>
        {mapActiveTasks.length > 0
          ? mapActiveTasks
          : "Brak zadań do wyświetlenia"}
      </div>
      <div className="done">
        <h4>lista zadań wykonanych {mapDoneTasks.length}</h4>

        {mapDoneTasks.length > 5 && (
          <span style={{ fontSize: 10 }}>
            Wyświetlone zostaje jedynie 5 ostatnich zadań.
          </span>
        )}
        {mapDoneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;

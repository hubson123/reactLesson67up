import React from "react";
const Task = (props) => {
  const styl = {
    color: "red",
  };
  const { text, date, finishDate, important, active, id } = props.task;
  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? styl : null}>{text}</strong> - do{" "}
          <span>{date} </span>
          <button onClick={() => props.changeTaskStatus(id)}>
            Zostało zrobione
          </button>
          <button onClick={() => props.deleteTask(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finishTime = new Date(finishDate).toLocaleDateString();
    return (
      <div>
        <p>
          <strong>{text}</strong> <em>(zrobić do {date})</em>
          <br />
          -potwierdzenie wykonania <span>{finishTime}</span>
          <button onClick={() => props.deleteTask(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;

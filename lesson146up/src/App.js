import React, { useEffect, useReducer } from "react";
import CourseInfo from "./CourseInfo";

const testArray = [
  {
    id: "3527-3928-3893",
    title: "Kurs z REact",
  },
  {
    id: "4527-3928-3893",
    title: "Kurs z HTML",
  },
  {
    id: "2527-3928-3893",
    title: "Kurs z C#",
  },
  {
    id: "1527-3928-3893",
    title: "Kurs z PHP",
  },
  {
    id: "5527-3928-3893",
    title: "Kurs z CSS",
  },
  {
    id: "6527-3928-3893",
    title: "Kurs z EmberJS",
  },
  {
    id: "7527-3928-3893",
    title: "Kurs z VueJS",
  },
];

const coursesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.push();
    case "SUB":
      return state.filter((course) => course.id !== action.id);
    case "FETCH":
      return action.data;
    default:
      throw new Error("NIe znaleziono akcji.");
  }
};
const fetchAsyncData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
};
const App = () => {
  const [state, dispatch] = useReducer(coursesReducer, testArray);
  const courseElement = state.map((course) => (
    <CourseInfo key={course.id} click={dispatch} {...course} />
  ));
  const asyncFetch = async () => {
    await fetchAsyncData();
    dispatch({ type: "FETCH", data: testArray });
  };
  useEffect(() => {
    asyncFetch();
  }, []);
  return <div>{courseElement}</div>;
};

export default App;

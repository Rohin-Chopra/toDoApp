import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import ToDoList from "./ToDoList";
import "./app.css";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleNewToDo = (e) => {
    if (e.key === "Enter") {
      const _ = [...toDos];
      _.push({ task: e.target.value, id: uniqid(), completed: false });
      setToDos(_);
    }
  };
  const handleEdit = (id, val) => {
    const _ = [...toDos];
    const currToDo = _.find((toDo) => toDo.id === id);
    currToDo.task = val;
    setToDos(_);
  };
  const handleDelete = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const handleComplete = (id, val) => {
    const _ = [...toDos];
    const currToDo = _.find((toDo) => toDo.id === id);
    currToDo.completed = val;
    setToDos(_);
  };
  const dark = isDarkMode ? "dark" : "light";
  return (
    <div className={`vh-100 vw-100 ${dark} d-flex flex-column`}>
      <Button
        onClick={() => setIsDarkMode(!isDarkMode)}
        variant={isDarkMode ? "light" : "dark"}
        style={{ width: "10rem", alignSelf: "flex-end", marginRight: "2rem" }}
      >
        <FontAwesomeIcon className={`${dark}-text`} icon={faMoon} />{" "}
        {isDarkMode ? "Light" : "Dark"} Mode
      </Button>
      <Container
        className={`${dark} d-flex flex-column justify-content-center wrapper`}
      >
        <h4 style={{ borderBottom: "2px solid #333" }}>Add Task</h4>
        <Form.Control
          type="text"
          placeholder="Enter task"
          onKeyDown={(e) => handleNewToDo(e)}
          className={`${`${dark}-2`} mb-2`}
        />
        <h4 className="mt-2" style={{ borderBottom: "2px solid #333" }}>To Do</h4>
        <ToDoList
          toDos={toDos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleComplete={handleComplete}
          completed={false}
          className={dark + "-2"}
        />
        <h4 className="mt-2" style={{ borderBottom: "2px solid #333" }}>Completed</h4>
        <ToDoList
          toDos={toDos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleComplete={handleComplete}
          completed={true}
          className={dark + "-2"}
        />
      </Container>
    </div>
  );
};
export default App;

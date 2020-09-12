import React, { useState } from "react";
import { ListGroup, Button, Form } from "react-bootstrap";

const ToDo = ({
  task,
  handleComplete,
  handleDelete,
  handleEdit,
  completed,
  className,
}) => {
  const [isEditable, setIsEditable] = useState(false);

  const editableContent = () =>
    isEditable ? (
      <Form.Control
        type="text"
        className={`w-50 ${className}`}
        value={task}
        onChange={handleEdit}
        style={
          className === "dark-2"
            ? { border: "1px solid #fff", borderRadius: "8px" }
            : null
        }
        onKeyDown={(e) => (e.key === "Enter" ? setIsEditable(false) : null)}
      />
    ) : (
      <span
        style={{ textDecoration: `${completed ? "line-through" : "none"}` }}
      >
        {task}
      </span>
    );

  return (
    <ListGroup.Item
      className={"d-flex justify-content-space-between " + className}
    >
      <input type="checkbox" className="align-self-center" onChange={handleComplete} checked={completed} />
      {editableContent()}
      <div>
        <Button
          variant={isEditable ? "success" : "warning"}
          onClick={() => {
            setIsEditable(!isEditable);
          }}
        >
          Edit
        </Button>
        <Button variant="danger" className="ml-1" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ToDo;

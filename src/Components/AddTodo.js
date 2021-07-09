import React, { useState } from "react";
export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be blank");
    } else {
      props.addTodo(title, desc);
    }
    setTitle("");
    setDesc("");
    alert('added your todo item');
  };
  let style = {
    width: "30%",
  };
  return (
    <div className="container">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="InputText" className="form-label">
            Title
          </label>
          <input
            style={style}
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="InputText"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            style={style}
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Add to your List
        </button>
      </form>
    </div>
  );
}

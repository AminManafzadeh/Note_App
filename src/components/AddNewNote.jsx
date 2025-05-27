import React from "react";

function AddNewNote() {
  return (
    <div className="space-y-6">
      <h1 className="font-bold text-2xl">Add New Note</h1>
      <form className="space-y-6">
        <input className="text-field" type="text" placeholder="Note Title" />
        <input
          className="text-field"
          type="text"
          placeholder="Note Description"
        />
        <button className="btn btn--primary w-full font-bold" type="submit">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;

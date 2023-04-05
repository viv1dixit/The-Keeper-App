import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNote = () => {
    setNotes([...notes, inputValue]);
    setInputValue("");
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Keeper App</h1>
      <input
        type="text"
        placeholder="Take a note..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddNote}>Add Note</button>
      <div className="notes-container">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p>{note}</p>
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const chalk = require("chalk");
const fs = require("fs");

// add note

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("notes Added"));
  } else {
    console.log(chalk.red.inverse("notes already there"));
  }
};

//  remove note
const removeNote = (title) => {
  const notes = loadNotes();

  const notesToRemove = notes.filter((note) => note.title !== title);

  if (notes.length > notesToRemove.length) {
    console.log(chalk.green.inverse("Note Removed"));
    saveNotes(notesToRemove);
  } else {
    console.log(chalk.red.inverse("No Note Found"));
  }
};

// List Notes
const listNote = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("Your Notes"));

  notes.forEach((note) => console.log(note.title));
};

// Read Note
const readNote = (title) => {
  const notes = loadNotes();
  const notesToRead = notes.find((note) => note.title === title);

  if (notesToRead) {
    console.log(chalk.grey.inverse(notesToRead.title));
    console.log(notesToRead.body);
  } else {
    console.log(chalk.red.inverse("No Note Found"));
  }
};

//  save notes
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// Load Notes

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};

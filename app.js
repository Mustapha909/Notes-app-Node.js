const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Custmize yargs version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// create remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// create list command

yargs.command({
  command: "list",
  describe: "Listing notes",
  handler: () => {
    notes.listNote();
  },
});

// create read command

yargs.command({
  command: "read",
  describe: "Reading a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

yargs.parse();

// console.log(yargs.argv);

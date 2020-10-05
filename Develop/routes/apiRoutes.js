const fs = require("fs");
const express = require("express");
const path = require("path");
const util = require("util");
const router = require("express").Router();
const { v4: uuid4 } = require("uuid");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const getNotes = async() => {  
    const notes = await readFile("db/db.json", "utf8");
    return JSON.parse(notes);
}

router.get("/notes", async(req,res) => {
    const notes = await getNotes();
    res.json(notes);
})

const addNote = async(note) => {  
    const notesJson = await readFile("db/db.json", "utf8");
    const notes = JSON.parse(notesJson);
    console.log("notes", notes);
    const {title, text} = note;
    const newNote = {title, text, id: uuid4()};
    notes.push(newNote);
    await writeFile("db/db.json", JSON.stringify(notes));   
}

router.post("/notes", async(req,res) => {
    const newNote = req.body;
    await addNote(newNote);
    res.json(newNote);
})


module.exports = router;


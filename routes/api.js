const express = require("express");
const router = express.Router();
const Note = require('../controllers/note');

//Save a new note
router.post('/new/:userid', Note.saveNewNote)

//Update a previously saved note
router.put('/update/:noteid', Note.updateNote)

//Delete a saved note
router.delete('/delete/:noteid', Note.deleteNote)

//Archive a note
router.put('/archive/:noteid', Note.archiveNote)

//Unarchive a previously archived note
router.put('/unarchive/:noteid', Note.unarchiveNote)

//List saved notes that aren't archived
router.get('/view/:userid', Note.viewUnarchivedNotes)

//List notes that are archived
router.get('/viewarchived/:userid', Note.viewArchivedNotes)

module.exports = router;

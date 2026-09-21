const express = require("express");
const { createNotessController, getAllNotesController, getSingleNoteController, updateNoteController, deleteNoteController, singleEntityUpdateController } = require("../controllers/notes.controller");


const router = express.Router();

// post api - to create a note
router.post("/create", createNotessController)
// get api to featch all notes
router.get("/allNotes", getAllNotesController)
// get api to featch single note by id
router.get("/:id", getSingleNoteController)
//  put api to update note by id
router.put("/:id", updateNoteController)
// patch api to update a note by id for specific fields
router.patch("/:id/single", singleEntityUpdateController)
// delete api to delete note by id
router.delete("/:id", deleteNoteController)

module.exports = router;

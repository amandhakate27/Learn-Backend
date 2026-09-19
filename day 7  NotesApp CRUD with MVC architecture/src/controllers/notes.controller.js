const notesModel = require("../models/notes.model");
const createNotessController = async (req,res)=>{
    try{
        let {title, description} = req.body;
        let newNote = await notesModel.create({
            title, 
            description
        });
        return res.status(201).json({
            message : "Note Created Successfully",
            data : newNote
        })
    }catch(err){
        console.log("error in creation", err);
    }
}
const getAllNotesController = async (req, res)=>{
    try{
       const allNotes = await notesModel.find();
       return res.status(200).json({
        message : "All Notes fetched successfully",
        data : allNotes
       })
    }catch(err){
        console.log("error in notes get api - ",err)
    }
}
const getSingleNoteController = async (req,res)=>{
    try{
        let noteId = req.params.id;
        let note = await notesModel.findById(noteId);
        return res.status(200).json({
            message : "Note fetched successfully",
            data : note
        })
    }catch(err){
        console.log("error in get by id api -", err);
    }
}

const updateNoteController= async (req, res)=>{
    try{
        let noteId = req.params.id;
        let body = req.body;
        let updatedNote = await notesModel.findByIdAndUpdate(noteId, body, {new : true});
        return res.status(200).json({
            message : "Note updated successfully",
            data : updatedNote
        })
    }catch(err){
        return res.status(500).json({
            message : "error in update note api",
            error : err.message
        })  
    }
}

const deleteNoteController = async (req, res)=>{
    try{
        let noteId = req.params.id;
        let deletedNote = await notesModel.findByIdAndDelete(noteId);
        return res.status(200).json({
            message : "Note deleted successfully",
            data : deletedNote
        })
    }catch(err){
        return res.status(500).json({
            message : "error in delete note api",
            error : err.message
        })  
    }
}
module.exports = {createNotessController, getAllNotesController, getSingleNoteController , updateNoteController, deleteNoteController};
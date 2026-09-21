import { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./components/NoteCard";
export default function App() {

  // Stores form input values
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });
  // Stores fetched notes
  const [allNotes, setAllNotes] = useState([]);
  // Tracks note being edited
  const [noteIdForUpdate, setNoteIdForUpdate] = useState(null);

  // Fetches all saved notes
  const getAllNotes = async () => {
    try {
      const res = await axios.get("http://localhost:3000/notes/allNotes");
      console.log(res.data);
      setAllNotes(res.data.data);
    } catch (err) {
      console.log("error in get all api -", err);
    }
  };

  // Handles form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Creates or updates note
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (noteIdForUpdate) {
      const res = await axios.put(`http://localhost:3000/notes/${noteIdForUpdate}`, formValues);
      console.log(res.data);
      setNoteIdForUpdate(null);
    } else {
      const res = await axios.post("http://localhost:3000/notes/create", formValues);
      console.log(res.data);
    }

    setFormValues({
      title: "",
      description: "",
    });
    getAllNotes();
  };

  // Deletes selected note
  const deleteNote = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/notes/${id}`);
      console.log(res.data);
      getAllNotes();
    } catch (err) {
      console.log("error in delete api -", err);
    }
  };

  // Loads note for editing
  const noteForUpdate = (note) => {
    setNoteIdForUpdate(note._id);
    setFormValues({
      title: note.title,
      description: note.description,
    });
  };

  useEffect(() => {
    getAllNotes();
  }, []);


  return (
    <div className="min-h-screen bg-white p-4 font-sans selection:bg-black selection:text-white">

      <main className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-6xl gap-8 md:grid-cols-[minmax(260px,0.7fr)_minmax(0,1.3fr)]">

        <form onSubmit={handleSubmit} className="self-start space-y-6">

          {/* Title Input */}
          <div>
            <label className="block text-black font-bold uppercase tracking-wider mb-2 text-sm">
              Title
            </label>

            <input
              type="text"
              name="title"
              onChange={handleInputChange}
              value={formValues.title}
              placeholder="Enter title..."
              className="w-full px-4 py-3 border-2 border-black bg-white text-black placeholder-gray-400 rounded-none focus:outline-none focus:ring-0 focus:border-black focus:bg-gray-50"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-black font-bold uppercase tracking-wider mb-2 text-sm">
              Description
            </label>

            <textarea
              minLength={20}
              name="description"
              onChange={handleInputChange}
              value={formValues.description}
              placeholder="Enter description..."
              rows="5"
              className="w-full px-4 py-3 border-2 border-black bg-white text-black placeholder-gray-400 rounded-none focus:outline-none focus:ring-0 focus:border-black focus:bg-gray-50 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-bold text-lg py-4 border-4 border-black rounded-none hover:bg-white hover:text-black uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
          >
            {noteIdForUpdate ? "Update Note" : "Add Note"}
          </button>

        </form>

        <section className="self-start">
          <h1 className="text-2xl font-bold uppercase tracking-wider text-black">
            Notes
          </h1>
          {allNotes.length === 0 ? (
            <p className="mt-4 border-2 border-dashed border-gray-400 p-5 text-gray-500">
              No notes yet.
            </p>
          ) : (
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {allNotes.map((note) => (
                <NoteCard
                  key={note._id}
                  note={note}
                  deleteNote={deleteNote}
                  noteForUpdate={noteForUpdate}
                />
              ))}
            </div>
          )}
        </section>
      </main>

    </div>

  );
}
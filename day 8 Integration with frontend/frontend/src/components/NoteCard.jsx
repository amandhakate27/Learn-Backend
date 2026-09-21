export default function NoteCard({ note, deleteNote, noteForUpdate }) {
    
    const description = note.description.length > 20
        ? `${note.description.substring(0, 20)}...`
        : note.description;

    return (
        <article className="border-2 border-black bg-white p-3">
            <h2 className="mb-2 truncate text-lg font-bold uppercase tracking-wide text-black">
                {note.title}
            </h2>
            <p className="line-clamp-3 whitespace-pre-wrap text-sm text-gray-700">{description}</p>
            <div className="mt-3 flex gap-2">
                <button
                    onClick={() => noteForUpdate(note)}
                    type="button"
                    className="border-2 border-black bg-black px-3 py-1 text-sm font-bold uppercase tracking-wide text-white hover:bg-white hover:text-black"
                >
                    Update
                </button>
                <button
                    onClick={() => deleteNote(note._id)}
                    type="button"
                    className="border-2 border-red-700 px-3 py-1 text-sm font-bold uppercase tracking-wide text-red-700 hover:bg-red-700 hover:text-white"
                >
                    Delete
                </button>
            </div>
        </article>
    );
}
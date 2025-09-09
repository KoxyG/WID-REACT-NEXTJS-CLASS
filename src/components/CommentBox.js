import { useState } from "react";

export default function CommentBox() {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  function addComment(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setComments((prev) => [{ id: Date.now(), text }, ...prev]);
    setText("");
  }
  return (
    <div className="space-y-3">
      <form onSubmit={addComment} className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment"
          className="flex-1 rounded-lg border border-slate-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/50 px-3 py-2"
        />
        <button className="px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700" type="submit">
          Comment
        </button>
      </form>
      <ul className="space-y-2">
        {comments.map((c) => (
          <li key={c.id} className="rounded-lg border border-slate-200 dark:border-gray-800 p-3">{c.text}</li>
        ))}
      </ul>
    </div>
  );
}



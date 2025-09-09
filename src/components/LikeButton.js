// Local state for counting likes
import { useState } from "react";

// Button that increments an internal like counter
export default function LikeButton({ initial = 0, label = "Like" }) {
  const [likes, setLikes] = useState(initial);
  return (
    <button
      className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700"
      onClick={() => setLikes((l) => l + 1)}
    >
      {label}: {likes}
    </button>
  );
}



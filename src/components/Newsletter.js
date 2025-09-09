// Import state hook to build controlled inputs and handle events
import { useState } from "react";

// Newsletter signup form demonstrating controlled input and submit handling
export default function Newsletter() {
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Subscribed: ${email || "(empty)"}`);
    setEmail("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 rounded-lg border border-slate-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/50 px-3 py-2"
      />
      <button type="submit" className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Subscribe</button>
    </form>
  );
}
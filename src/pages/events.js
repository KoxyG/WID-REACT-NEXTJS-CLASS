// Import state hook to build controlled inputs and handle events
import { useState } from "react";

// Newsletter signup form demonstrating controlled input and submit handling
function Newsletter() {
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

// Page component focusing on event handling patterns
export default function EventsPage() {
  return (
    <section className="space-y-8">
      {/* Page header */}
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Events</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">Handle user actions like clicks, input, and submit.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Example column with a newsletter form */}
        <div className="rounded-xl border border-slate-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/40">
          <h2 className="font-semibold mb-3">Example</h2>
          <div className="rounded-lg border border-slate-200 dark:border-gray-800 p-4">
            <Newsletter />
          </div>
        </div>

        {/* Key points and references */}
        <div className="rounded-xl border border-slate-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/40">
          <h2 className="font-semibold mb-3">Key points</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Use camelCase event props like <code>onClick</code>, <code>onSubmit</code>.</li>
            <li>Pass a function as the handler, not the result of calling it.</li>
            <li>Use <code>event.preventDefault()</code> for forms.</li>
          </ul>
          <div className="mt-4 text-sm">
            <a className="text-blue-600 hover:underline" href="https://react.dev/learn/responding-to-events" target="_blank" rel="noreferrer">React: Responding to events</a>
            <span className="mx-2">·</span>
            <a className="text-blue-600 hover:underline" href="https://www.geeksforgeeks.org/reactjs/react-js-events/" target="_blank" rel="noreferrer">GfG: Events</a>
          </div>
        </div>
      </div>
    </section>
  );
}



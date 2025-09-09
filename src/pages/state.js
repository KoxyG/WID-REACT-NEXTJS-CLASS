// Import the React hook for local component state
import { useState } from "react";

// Reusable counter demonstrating useState and updater functions
function Counter({initial = 0}) {

  const [count, setCount] = useState(initial); // uses for props
  // const [count, setCount] = useState(0); // used when there is no props but setting a number
  // const [count, setCount] = useState(""); // used when there is no props but setting a string


  return (
    <div className="flex items-center gap-2">
      {/* Decrement using functional updater */}
      <button className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-gray-800 hover:bg-slate-200" onClick={() => setCount((c) => c - 1)}>-</button>
      {/* Current count display */}
      <span className="min-w-12 text-center font-medium">{count}</span>
      {/* Increment using functional updater */}
      <button className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-gray-800 hover:bg-slate-200" onClick={() => setCount((c) => c + 1)}>+</button>
      {/* Reset to initial value */}
      <button className="px-3 py-1 rounded-lg bg-sky-600 text-white hover:bg-sky-700" onClick={() => setCount(initial)}>Reset</button>
    </div>
  );
}

// Page component focused on React state basics
export default function StatePage() {
  return (
    <section className="space-y-8">
      {/* Page header */}
      <header>
        <h1 className="text-3xl font-bold tracking-tight">State</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">Component memory managed with setters.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Example column */}
        <div className="rounded-xl border border-slate-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/40">
          <h2 className="font-semibold mb-3">Example</h2>
          <div className="rounded-lg border border-slate-200 dark:border-gray-800 p-4">
            <Counter initial={0} />
          </div>
        </div>

        {/* Key points and references */}
        <div className="rounded-xl border border-slate-200 dark:border-gray-800 p-5 bg-white/60 dark:bg-gray-900/40">
          <h2 className="font-semibold mb-3">Key points</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Use <code>useState</code> for local component state.</li>
            <li>Avoid mutating objects/arrays in place; create new copies.</li>
            <li>Keep the minimal necessary state; derive the rest.</li>
          </ul>
          <div className="mt-4 text-sm">
            <a className="text-blue-600 hover:underline" href="https://www.geeksforgeeks.org/reactjs/reactjs-state/" target="_blank" rel="noreferrer">GfG: State</a>
            <span className="mx-2">·</span>
            <a className="text-blue-600 hover:underline" href="https://react.dev/learn/choosing-the-state-structure" target="_blank" rel="noreferrer">React: Choosing state structure</a>
          </div>
        </div>
      </div>
    </section>
  );
}



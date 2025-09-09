// Import global Tailwind CSS styles for the entire app
import "@/styles/globals.css";
// Import Next.js Link component for client-side navigation
import Link from "next/link";

// Layout component wraps all pages to provide a shared header, main, and footer
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-black text-slate-800 dark:text-slate-100">
      {/* App header with a sticky navigation bar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-gray-900/70 border-b border-slate-200 dark:border-gray-800">
        {/* Container for nav content with max width and padding */}
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Brand link to home page */}
          <Link href="/" className="font-semibold tracking-tight text-xl">React Teaching Lab</Link>
          {/* Primary navigation links */}
          <div className="flex gap-3 text-sm">
            {/* Link to Components page */}
            <Link className="hover:text-blue-600" href="/components">Components</Link>
            {/* Link to JSX page */}
            <Link className="hover:text-blue-600" href="/jsx">JSX</Link>
            {/* Link to Props page */}
            <Link className="hover:text-blue-600" href="/props">Props</Link>
            {/* Link to State page */}
            <Link className="hover:text-blue-600" href="/state">State</Link>
            {/* Link to Events page */}
            <Link className="hover:text-blue-600" href="/events">Events</Link>
            {/* Link to integrated Demo page */}
            <Link className="hover:text-blue-600" href="/demo">Demo</Link>
          </div>
        </nav>
      </header>
      {/* Main content area where pages are rendered */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">{children}</main>
      {/* Simple footer */}
      <footer className="border-t border-slate-200 dark:border-gray-800 py-6 text-center text-sm text-slate-500">
        Built with Next.js + Tailwind
      </footer>
    </div>
  );
}

// Custom App component wraps every page with the Layout defined above
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* Render the current page component with its props */}
      <Component {...pageProps} />
    </Layout>
  );
}

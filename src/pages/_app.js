// Import global Tailwind CSS styles for the entire app
import "@/styles/globals.css";
import Navbar from "./navbar";


// Custom App component wraps every page with the Navbar defined above
export default function App({ Component, pageProps }) {
  return (
    <Navbar>
      {/* Render the current page component with its props */}
      <Component {...pageProps} />
    </Navbar>
  );
}

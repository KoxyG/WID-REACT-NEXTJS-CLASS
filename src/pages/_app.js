// Import global Tailwind CSS styles for the entire app
import "@/styles/globals.css";
import Layout from "./layout";


// Custom App component wraps every page with the Layout defined above
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* Render the current page component with its props */}
      <Component {...pageProps} />
    </Layout>
  );
}

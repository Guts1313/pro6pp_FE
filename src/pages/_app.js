import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <div className="bg-indigo-950 bg-opacity-75 min-h-screen">
        <Component {...pageProps} />
      </div>
  );
}

export default MyApp;

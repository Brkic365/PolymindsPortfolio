import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <div className="circle1" />
      <div className="circle2" />
      <div className="circle3" />
    </>
  );
}

export default MyApp;

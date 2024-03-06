import { HashLink as Link } from "react-router-hash-link";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="wrapper">
    <Header />
    <div className="container not-found-container">
        <h1 className="not-found-header glitch">404 Not Found</h1>
        <p className="error-description my-5">Oops! It looks like we couldn't find the page you were looking for. We're sorry for the inconvenience!</p>
        <Link className="back-to-home" to="/">Back To Home</Link>
        
        

    </div>
    <Footer />
</div>
  );
}

export default NotFound;

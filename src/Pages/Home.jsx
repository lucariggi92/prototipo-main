
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>

            <div className="min-vh-100 d-flex flex-column miao-banner">
                <div className="container">
                    <div className="row vh-100">
                        <div className="col-12 text-center d-flex justify-content-center align-items-center flex-column">
                            <h1 className="display-4 fw-bold mb-3 text-light">Benvenuti nella lista viaggi della miao corporation</h1>
                            <p className="lead text-light fs-2"> i Viaggi gatteschi più sgravati di Boolean!</p>
                            <NavLink className="btn btn-outline-info py-3 mb-4" to="/viaggi">VOLA VERSO I GATTINI</NavLink>
                        </div>





                    </div>
                </div>


                <Footer />
            </div>

        </>
    );
}

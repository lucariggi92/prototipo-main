
export default function Footer() {
    return (
        <footer className="mt-auto bg-dark p-2">
            <div className="container">
                <h2 className=" mb-2 text-center text-info">Sai dove contattarci</h2>
                <div className="row text-center text-info">


                    <div className="col-4">
                        <ul className="list-unstyled">
                            <li className=""><a href="#" className="text-info text-decoration-none fs-6">Miao Corp</a></li>
                            <li className="mt-2"><a href="#" className="text-info text-decoration-none fs-6">Servizi</a></li>
                            <li className="mt-2"><a href="#" className="text-info text-decoration-none fs-6">Chi Siamo</a></li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <ul className="list-unstyled mt-2">
                            <li className=""><a href="#" className="text-info text-decoration-none fs-6">Contatti</a></li>
                            <li className="mt-2"><a href="#" className="text-info text-decoration-none fs-6">Privacy</a></li>
                            <li className="mt-2"><a href="#" className="text-info text-decoration-none fs-6">Termini</a></li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <ul className="list-unstyled mt-2">
                            <li className="fs-6">© 2026 Miao Corp</li>
                            <li className="mt-2 fs-6">italia</li>
                            <li className="mt-2 fs-6">Boolean WDFT150</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
}

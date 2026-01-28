import { Link } from "react-router-dom"
import { viaggi } from "../assets/data.js"
import { useState } from "react"


export default function Viaggi() {

    const [travels, setTravels] = useState(viaggi)
    const [destination, setDestination] = useState()


    function update(event) {
        event.preventDefault();
        const filterViaggio = viaggi.filter((viaggio) => viaggio.localita === destination ? viaggio : "")
        setTravels(filterViaggio)
    }

    return (
        <>
            <h1 className="text-center my-3 ">DESTINAZIONI</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md 2 g-4">

                    <div className="col col-lg-12">
                        <form onSubmit={update}>

                            <label className="form-label" htmlFor="">DESTINAZIONE VIAGGIO:</label>
                            <div className="d-flex ">
                                <input className="form-control" type="text" placeholder="es: Londra" onChange={(event) => setDestination(event.target.value)} />
                                <button className="btn btn-success ms-2" type="submit">CERCA</button>
                            </div>

                        </form>
                    </div>






                    {travels.map((viaggio) => {
                        return (
                            <>


                                <div className="col col-sm-12 col-md-6 col-lg-4 mb-4 ">
                                    <div className="card h-100">

                                        <div className="card-header">
                                            <h2 className="card-title">{viaggio.localita}</h2>
                                        </div>
                                        <img src={viaggio.img} alt={viaggio.localita} className="img-fluid w-100 h-50" />
                                        <div className="card-body">
                                            <p className="text-black">Stato: <span className={viaggio.stato === "in corso" ? "badge text-bg-success rounded-pill" : viaggio.stato === "terminato" ? "badge text-bg-danger rounded-pill" : "badge text-bg-warning rounded-pill"} >{viaggio.stato}</span></p>
                                            <Link className="btn btn-primary" to={`/viaggi/${viaggio.id}`}>Visualizza Dettagli</Link>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })}

                </div>
            </div>

        </>
    )
}
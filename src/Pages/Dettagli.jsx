import { useNavigate, useParams } from "react-router-dom"
import { viaggi } from "../assets/data";
import { viaggiatori } from "../assets/data";
import { use, useState } from "react"


export default function Dettagli() {


    const { id } = useParams();
    const [viaggio, setViaggio] = useState(viaggi[id - 1]);
    const [search, setSearch] = useState("")
    const [btn, setBtn] = useState(false)

    const navigate = useNavigate()


    const takePeople = [];

    for (let i = 0; i < viaggiatori.length; i++) {
        const curPerson = viaggiatori[i];


        if (curPerson.viaggioId === parseInt(id)) {
            takePeople.push(curPerson);
        }
    }




    let textIniziato = "";
    let textFinito = "";

    if (viaggio.stato === "in corso") {
        textIniziato = `INIZIATO`;
        textFinito = `FINIRA'`;

    } else if (viaggio.stato === "terminato"){
        textIniziato = `INIZIATO IL  `;
        textFinito = `FINITO IL `;
    }else{
        textIniziato = `INIZIO PROGRAMMATO`;
        textFinito = `FINE`;
    }


    function showPeople() {
        setBtn(!btn);
    }


    function goBack() {
        navigate(-1)
    }


    const [filter, setFilter] = useState(takePeople)


    function updateForm(event) {

        event.preventDefault()

        if (search != "") {
            const filterdArray = takePeople.filter((element) => element.nome === search ? element : "")
            setFilter(filterdArray)
            console.log(filter);
        }



        console.log(search);


    }









    return (
        <>

            <div className="container my-5 py-5">
                <h1 className="text-center my-4">{viaggio.localita}</h1>
                <div className="row row-cols-1 row-cols-ms-1">
                    {/* //IMMAGINE */}
                    <div className="col">
                        <div className="card ">

                            <img className="card-img" src={viaggio.img} alt="" />
                        </div>


                    </div>
                    {/* //DETTAGLI DEL VIAGGIO */}
                    <div className="col mt-2">
                        <div className="card">
                            <div className="card-header">
                                <h2>DETTAGLI DEL VIAGGIO:</h2>
                            </div>
                            <div className="card-body">

                                <h3>{textIniziato} <span className="text-success">{viaggio.dataInizio}</span></h3>
                                <h3>{textFinito} <span className="text-danger">{viaggio.dataFine}</span></h3>
                                <h3>Tipologia: {viaggio.tipologia}</h3>
                                <h3>Partecipanti: {takePeople.length}</h3>

                            </div>
                        </div>

                    </div>



                    {/* //COLONNA CON L'ACCORDION DENTRO  */}
                    <div className="col mt-3">
                        <div className="card">
                            <div className="card-body d-flex">



                                {/* //ACCORDION      */}
                                <div className="accordion accordion-flush">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" onClick={showPeople} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Vedi Partecipanti
                                            </button>
                                        </h2>
                                        {/* //CONDIZIONE DELLO STATO */}
                                        <div id="flush-collapseOne" className={btn === false ? "accordion-collapse collapse" : "accordion-collapse"} data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body bg-whithe-smoke">
                                                <ul className="list-group">
                                                    {takePeople.map((person) => {
                                                        return (
                                                            <>
                                                                <li className="list-group-item"><span className="text-danger">{person.nome} {person.cognome}</span> <br />Cell: <a className="text-info">{person.telefono}</a> Email:<a className="text-info"> {person.email}</a></li>
                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-6 mt-3">

                        <form onSubmit={updateForm}>
                            <div>
                                <label className="form-label" htmlFor="ricerca">Inserisci un nome:</label>
                                <div className="d-flex">
                                    <input type="search" id="ricerca" className="form-control" placeholder="es: Nome" onChange={(event) => setSearch(event.target.value)} />
                                    <button type="submit" className="btn btn-primary ms-2">INVIA</button>
                                </div>
                            </div>


                        </form>
                    </div>
                    <div className={filter.length === 2 ? "d-none" : "col-12 mt-2"}>
                        <div className="row">
                            <div className="col-sm-12 col-md-8 col-lg-8">
                                <div className="card">
                                    <div className="card-body ">
                                        <h3>{filter[0].nome} {filter[0].cognome}</h3>
                                        <h3>Email: <a href="">{filter[0].email}</a></h3>
                                        <h3>Cell: <a href="">{filter[0].telefono}</a></h3>
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="d-flex justify-content-center align-items-center card h-100">
                                    <img className="miao-img" src="/img/profile.png" alt="" />
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="col-12 mt-3">
                        <button className="btn btn-secondary" onClick={goBack}>Torna Indietro</button>

                    </div>
                </div>

            </div>


        </>
    )
}


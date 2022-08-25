import React, {useEffect}from 'react'

function SirKartica({sir,dodajNaListu,ukloniSaListe,prikaziSir,korpa}) {
    const stil={marginRight:15+'px',}

    return (
    <div className="col">
        <div className="card">
            <div className="col-5 col-sm-4">
                <img className="img-fluid w-100" src="../public/kozji_halumi_sa_lavandom" alt="Neka slika sira" />
            </div>
            <div className="col-7 col-sm-8">
                <div className="card-body">
                    <h5 className="card-title">
                    </h5>
                    <h6 className="card-title">

                    </h6>
                    <p className="card-title">
                    {korpa===0?(sir.narudzbine===0?(
                                            <><button className='btn btn-primary btn-sm' onClick={()=>dodajNaListu(sir.id)} style={stil} >Dodaj na listu</button>
                                                <button className='btn btn-success btn-sm' onClick={()=>prikaziSir(sir)} style={stil} >Detaljnije</button></>
                                        ):(
                                           <> <button className='btn btn-primary btn-sm' onClick={()=>ukloniSaListe(sir.id)} style={stil} >Ukloni</button>
                                               <button className='btn btn-success btn-sm' onClick={()=>prikaziSir(sir)} style={stil} >Detaljnije</button></>
                                        )

                                    )
                                   :
                                    (null)}

                    </p>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default SirKartica

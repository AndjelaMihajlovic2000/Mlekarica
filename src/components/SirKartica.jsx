import React, {useEffect}from 'react'

function SirKartica({sir,dodajNaListu,ukloniSaListe,prikaziSir,korpa}) {
    const stil={marginRight:10+'px',}

    return (
    <div className="col">
        <div className="card">
            <div className="col-5 col-sm-4">
                <img className="img-fluid w-100" src="https:/picsum.photos/id/24/4855/1803" alt="Neka slika sira" />
            </div>
            <div className="col-7 col-sm-8">
                <div className="card-body">
                    <h5 className="card-title">
                        {sir.naziv}
                    </h5>
                    <h6 className="card-title">
                        {sir.dodatak}
                    </h6>
                    <p className="card-title">{sir.proizvodjac}</p>
                    {korpa===0?(sir.narudzbina===0?(
                                            <><button className='btn btn-primary btn-sm' onClick={()=>dodajNaListu(sir.id)} style={stil} >Dodaj na listu</button>
                                                <button className='btn btn-success btn-sm' onClick={()=>prikaziSir(sir)} style={stil} >Detaljnije</button></>
                                        ):(
                                           <> <button className='btn btn-primary btn-sm' onClick={()=>ukloniSaListe(sir.id)} style={stil} >Ukloni</button>
                                               <button className='btn btn-success btn-sm' onClick={()=>prikaziSir(sir)} style={stil} >Detaljnije</button></>
                                        )

                                    )
                                   :
                    (null)}

                    
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default SirKartica

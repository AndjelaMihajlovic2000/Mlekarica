import React from 'react';
import { useNavigate } from 'react-router-dom';
import SirKartica from "./SirKartica";

function Pocetna({sirevi,dodajNaListu,ukloniSaListe,setSirStranica}) {
  
    let navigate = useNavigate();
    function prikaziSir(sir){
        setSirStranica(sir);
        navigate('/sir');
    }

    return (
    <>
    <h3>Svi sirevi</h3>
    <div className="row row-cols-1 row-cols-sm-2 g-3">
    {sirevi.map((sir)=>(
                   <SirKartica key={sir.id}
                                  sir={sir}
                                  dodajNaListu={dodajNaListu}
                                  prikaziSir={prikaziSir}
                                  ukloniSaListe={ukloniSaListe}
                                  korpa={0}/>
               ))}
    </div>
    
    </>
  )
}

export default Pocetna

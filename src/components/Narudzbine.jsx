import React from 'react';
import SirKartica from "./SirKartica";

function Narudzbine({sirevi}) {
    const stil={width:55+'vw', marginLeft:'auto',marginRight:'auto'}
    return (
    <div style={stil}>
    <h3>Sirevi za narudzbinu</h3>
    {sirevi.map((sir)=>(
       <div key={sir.id} style={{marginTop: 20 + "px"}}>
           <SirKartica
                          sir={sir}
                          dodajNaListu={()=>{}}
                          prikaziKnjigu={()=>{}}
                          ukloniSaListe={()=>{}}/>
       </div>
    ))}
</div>
);
}

export default Narudzbine

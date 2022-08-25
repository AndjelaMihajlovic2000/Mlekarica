import React from 'react';
import {Link} from "react-router-dom";



function SirStranica({sir}) {
  return (
    <div>
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{sir.naziv}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{sir.proizvodjac}</h6>
                <p className="card-subtitle mb-2 text-muted">{sir.dodatak}</p>
                <p className="card-text">{sir.opis}</p>
                <Link to="/" className="card-link">Vrati se</Link>
            </div>
        </div>
      
    </div>
  )
}

export default SirStranica

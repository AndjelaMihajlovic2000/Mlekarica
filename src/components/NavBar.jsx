import React from 'react';
import {Link} from "react-router-dom";
import {GiCheeseWedge} from "react-icons/gi";

function NavBar({brojSireva,pronadjiSireve}) {
  
    const stilNaslov={textAlign:'center'};
    return (
        <div>
            <h1 className="display-6" style={stilNaslov}>Mlekara/ProdajaSireva</h1>
            <nav className="nav nav-pills nav-fill">
            </nav>
            <nav className="navbar navbar-expand-xl navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Meni</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarLight" aria-controls="navbarLight" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse show" id="navbarLight">
                        <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Početna</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/pozajmica">Pozajmice</Link>

                            </li>
                            <li>
                                <p><GiCheeseWedge size={30}/> Broj sireva koji su naruceni: {brojSireva} </p>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" onInput={pronadjiSireve} />
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
    
  
}

export default NavBar

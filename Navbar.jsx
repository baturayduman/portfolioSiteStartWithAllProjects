import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const anasayfayagit = () => {
        navigate('/');
    }

    const uyepanelinegit = () => {
        navigate("/uyepaneli");
    }

    const todopanelinegit = () => {
        navigate("/todopaneli");
    }

    const sayiduzenlemeyegit = () => {
        navigate("/sayiduzenleme");;
    }

    return (



        <div className="navbar" >
            <div className="solnavbar">
                BATURAY DUMAN
            </div>

            <button onClick={anasayfayagit}> ANASAYFAYA  </button>

            <button onClick={uyepanelinegit}> UYE PANELİ </button>

            <button onClick={todopanelinegit}> TODO PANELİ </button>

            <button onClick={sayiduzenlemeyegit}> SAYI PANELİ </button>




            <button className="sagnavbar">
                ÇIKIŞ YAP
            </button>
        </div>



    )
}


export default Navbar


import React from "react";

function UyePaneli() {





    return (
        <div className="container">

            <h1 className="uyeyazisi">UYE PANELİ</h1>

            <div className="uyeyeri">
                <input type="email" placeholder="e-mail giriniz" />
                <input type="password" placeholder="şifre giriniz" />
                <div className="butonlarkayit">
                    <button className="buton" >  KAYIT OL </button>
                    <button className="buton" >  GİRİŞ YAP </button>
                </div>
            </div>

        </div>
    )
}


export default UyePaneli
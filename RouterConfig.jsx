import React from "react";
import { Routes, Route } from 'react-router-dom'
import Anasayfa from "../sayfalar/Anasayfa";
import UyePaneli from "../sayfalar/UyePaneli";
import TodoPaneli from "../sayfalar/TodoPaneli";
import SayiDuzenleme from "../sayfalar/SayiDuzenleme";

function RouterConfig() {


    return (
        <Routes>
            <Route exact path='/' element={<Anasayfa />} > ANASAYFA</Route>
            <Route exact path='/uyepaneli' element={<UyePaneli />} > UYE PANELİ</Route>
            <Route exact path='/todopaneli' element={<TodoPaneli />} > TODO PANELİ</Route>
            <Route exact path='/sayiduzenleme' element={<SayiDuzenleme />}> SAYİ PANELİ</Route>
        </Routes>
    )

}

export default RouterConfig





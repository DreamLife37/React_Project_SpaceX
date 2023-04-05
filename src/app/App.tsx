import {ShipsPage} from 'pages/shipsPage';
import React from 'react';
import {ShipCardPage} from "pages/shipCardPage";
import {Routes, Route} from 'react-router-dom';

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<ShipsPage/>}/>
            <Route path={'/ships'} element={<ShipsPage/>}/>
            <Route path='/ships'>
                <Route path={':shipId'} element={<ShipCardPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;

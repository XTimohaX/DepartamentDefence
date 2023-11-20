import React, {useEffect, useState} from 'react';
import './Styles/App.css';
import './Styles/history.css';
import './Styles/modal.css';
import './Styles/footer.css';

import {Route, Routes} from "react-router-dom";
import {Router} from "./router";
function App() {


    return (
        <div className="body">
            <Routes>
                {Router.map((x) => (
                    <Route
                        key={x.path}
                        path={x.path}
                        element={<x.Component/>}
                    />
                ))}
            </Routes>
        </div>



    );
}

export default App;

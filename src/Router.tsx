import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import RouterWrapper from "./RouterWrapper";


const A = () => {
    return (
        <div>Success</div>
    );
}

const B = () => {
    return (
        <div>Error</div>
    );
}
const Router = () => {
    const config = [{
        url: "/people",
        callbackOnSuccess: () => <App/>,
        callbackOnError: () => <B/>
    }]

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<RouterWrapper availableURLs={config}><App/></RouterWrapper>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

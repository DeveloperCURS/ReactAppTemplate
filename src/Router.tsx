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
        forAuth: false,
        url: "/people",
        callbackOnSuccess: () => <App/>,
        callbackOnError: () => <B/>,
        callbackOnAuthError: () => <B/>
    },
        {
            forAuth: true,
            url: "/posts",
            callbackOnSuccess: () => <App/>,
            callbackOnError: () => <B/>,
            callbackOnAuthError: () => <B/>
        }]

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<RouterWrapper availableURLs={config} isAuth={false}><App/></RouterWrapper>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

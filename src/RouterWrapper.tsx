import React, {FC, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router";
import {IURLs} from "./types/types";


interface IProps {
    availableURLs: Array<IURLs>;
    isAuth: boolean;
}

const RouterWrapper: FC<IProps> = ({children, availableURLs, isAuth}) => {
    const location = useLocation();
    useEffect(() => {
        console.log(location)
    });
    return (
        <div>
            {availableURLs.filter((item) => {
                return location.pathname == item.url
            }).map((item) => {
                if (location.pathname !== item.url) {
                    return item.callbackOnError();
                }
                if (isAuth == false && item.forAuth == true) {
                    return item.callbackOnAuthError();
                }
                if (item.forAuth && isAuth) {
                    return item.callbackOnSuccess();
                }
                if (item.forAuth == false) {
                    return item.callbackOnSuccess();
                }
            })}
        </div>
    );
};

export default RouterWrapper;

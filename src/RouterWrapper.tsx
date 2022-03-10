import React, {FC, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router";
import {IURLs} from "./types/types";


interface IProps {
    availableURLs: Array<IURLs>;
}

const RouterWrapper: FC<IProps> = ({children, availableURLs}) => {
    const location = useLocation();
    useEffect(() => {
        console.log(location)
    });
    return (
        <div>
            {availableURLs.map((item)=>{
                if (location.pathname !== item.url) {
                    return item.callbackOnError();
                }
                return item.callbackOnSuccess();
            })}
        </div>
    );
};

export default RouterWrapper;

import React, {memo, useRef, useState} from 'react';
import "./assets/App.css";
import {Button} from "@mui/material";
import AppBar from "./AppBar";
import {AppBarItem} from "./types/types";
import "./assets/common.scss";
import Content from "./Content";
import classNames from "classnames";


const A = () => {
    return (
        <div>asdsad</div>
    );
}

const B = () => {
    return (
        <div>asdasdsadasdasd</div>
    );
}

const App = () => {
    const [currentComponent, setCurrentComponent] = useState(<A/>);
    let data: Array<AppBarItem> = [
        {
            title: "title 1",
            callback: () => {
                setCurrentComponent(<A/>);
            },
            classNames: ["h-100"]
        },
        {
            title: "title 2",
            callback: () => {
                setCurrentComponent(<B/>);
            },
            classNames: ["h-100"]
        }
    ]
    return ( 
        <div className="d-flex h-100vh">
            <AppBar data={data} direction={"vertical"}
                    render={(children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, onClick: any, cssNames: Array<string>) => (
                        <Button className={classNames("d-flex", cssNames)} onClick={onClick}>{children}</Button>
                    )} cssNames={["h-100"]}/>
            <Content ContentComponent={() => <h1>Content</h1>} cssNames={[]}>
                {currentComponent}
            </Content>
        </div>
    );
};

export default memo(App);

import React from 'react';
import "./assets/App.css";
import {Button} from "@mui/material";
import AppBar from "./AppBar";
import {AppBarItem} from "./types/types";
import "./assets/common.scss";
import Content from "./Content";

const App = () => {
    let data: Array<AppBarItem> = [
        {
            title: "title 1",
            callback: () => {
                console.log("clicked");
            },
            classNames: []
        },
        {
            title: "title 2",
            callback: () => {
                console.log("clicked");
            },
            classNames: []
        }
    ]
    return (
        <div className="d-flex">
            <AppBar data={data}
                    render={(children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => (
                        <Button className="d-flex">{children}</Button>
                    )} cssNames={[]}/>
            <Content ContentComponent={()=><h1>Content</h1>} cssNames={[]}/>
        </div>
    );
};

export default App;

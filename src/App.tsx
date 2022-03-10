import React, {memo} from 'react';
import "./assets/App.css";
import {Button} from "@mui/material";
import AppBar from "./AppBar";
import {AppBarItem} from "./types/types";
import "./assets/common.scss";
import Content from "./Content";


const A = () => {
    return (
        <div>asdsad</div>
    );
}

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
                    render={(children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, onClick: any) => (
                        <Button className="d-flex" onClick={onClick}>{children}</Button>
                    )} cssNames={[]}/>
            <Content ContentComponent={() => <h1>Content</h1>} cssNames={[]}>
                <h1>something</h1>
            </Content>
        </div>
    );
};

export default memo(App);

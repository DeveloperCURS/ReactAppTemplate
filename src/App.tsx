import React, {memo, useRef, useState} from 'react';
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

const B = () => {
    return (
        <div>asdasdsadasdasd</div>
    );
}


const components = {
    'page1': A,
    'page2': B,
}

const App = () => {
    const [currentComponent, setCurrentComponent] = useState(()=><A/>);
    let data: Array<AppBarItem> = [
        {
            title: "title 1",
            callback: () => {
                setCurrentComponent(() => <A/>);
            },
            classNames: []
        },
        {
            title: "title 2",
            callback: () => {
                setCurrentComponent(() => <B/>);
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
                {currentComponent}
            </Content>
        </div>
    );
};

export default memo(App);

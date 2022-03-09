import React, {FC, ReactElement, ReactNode} from 'react';
import {AppBarItem, directions} from "./types/types";
import App from "./App";
import classNames from "classnames";

interface IProps {
    direction?: directions;
    render: any;
    data: Array<AppBarItem>;
    cssNames?: Array<String>;
}

const AppBar: FC<IProps> = ({direction = "horizontal", data, render, cssNames}) => {
    let result = data.map((item) => {
        return render(item.title);
    });
    return <div className = {classNames(cssNames)}>{result}</div>
};

export default AppBar;


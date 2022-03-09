import React, {FC, ReactElement, ReactNode} from 'react';
import {AppBarItem, directions} from "./types/types";
import App from "./App";
import classNames from "classnames";

interface IProps {
    direction?: directions;
    render: any;
    data: Array<AppBarItem>;
}

const AppBar: FC<IProps> = ({direction = "horizontal", data, render}) => {
    /*let result = data.map((item) => {
        return <ItemComponent>
            asdasd
        </ItemComponent>
    });*/
    return <div>{render("something")}</div>
};

export default AppBar;

import React, {FC} from 'react';
import {AppBarItem, directions} from "./types/types";
import App from "./App";

interface IProps {
    direction: directions;
    AppBarItem: AppBarItem;
}

const AppBar: FC<IProps> = ({direction = "vertical"}) => {
    return (
        <div>
        </div>
    );
};

export default AppBar;

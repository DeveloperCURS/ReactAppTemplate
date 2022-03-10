interface AppBar {
}

type directions = "vertical" | "horizontal";


interface AppBarItem {
    title: string;
    callback: ()=>void;
    classNames: Array<String>;
}

export type {AppBar, directions, AppBarItem};


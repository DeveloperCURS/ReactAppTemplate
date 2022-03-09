interface AppBar {
}

type directions = "vertical" | "horizontal";


interface AppBarItem {
    title: string;
    callback: any;
    classNames: Array<String>;
}

export type {AppBar, directions, AppBarItem};

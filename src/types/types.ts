interface AppBar {
}

type directions = "vertical" | "horizontal";


interface AppBarItem {
    title: string;
    callback: () => void;
    classNames: Array<String>;
}





interface IURLs {
    url: string;
    callbackOnSuccess: any;
    callbackOnError: any;
}

export type {AppBar, directions, AppBarItem, IURLs};


interface AppBar {
}

type directions = "vertical" | "horizontal";


interface AppBarItem {
    title: string;
    callback: () => void;
    classNames: Array<String>;
}





interface IURLs {
    forAuth: boolean;
    url: string;
    callbackOnSuccess: any;
    callbackOnError: any;
    callbackOnAuthError: any;
}

export type {AppBar, directions, AppBarItem, IURLs};


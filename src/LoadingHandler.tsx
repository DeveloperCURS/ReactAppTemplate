import React, {FC, memo, ReactNode} from 'react';
import {CircularProgress} from "@mui/material";

interface IProps {
    LoadingComponent?: React.ReactNode;
    isLoading: boolean;
    children: React.ReactNode;
}

const LoadingHandler: FC<IProps> = ({children, isLoading, LoadingComponent}) => {
    if (isLoading && LoadingComponent !== undefined) {
        return <>
            {LoadingComponent}
        </>;
    }
    if (isLoading) {
        return <>
            <CircularProgress/>
        </>
    }
    return (
        <>
            {children}
        </>
    );
};

export default memo(LoadingHandler);

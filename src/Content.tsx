import React, {FC, forwardRef, memo, ReactElement} from 'react';
import classNames from "classnames";

interface IProps {
    ContentComponent: React.ElementType;
    cssNames: Array<String>;
    children: React.ReactNode;
}

const Content: FC<IProps> = (props, ref) => {
    return (
        <div className={classNames(props.cssNames)}>
            {props.children}
        </div>
    );
};

export default memo(Content);

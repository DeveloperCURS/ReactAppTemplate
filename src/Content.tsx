import React, {FC, ReactElement} from 'react';
import classNames from "classnames";

interface IProps {
    ContentComponent: React.ElementType;
    cssNames: Array<String>;
}

const Content: FC<IProps> = ({ContentComponent, cssNames}) => {
    return (
        <div className={classNames(cssNames)}>
            <ContentComponent/>
        </div>
    );
};

export default Content;

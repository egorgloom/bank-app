import React, { FC } from 'react';

import './BtnSidebar.scss';

interface IBtnSidebar {
    children?: React.ReactNode,
    title?: string,
    icon?: React.ReactNode,
}



const BtnSidebar: FC<IBtnSidebar> = ({ children, title, icon }) => {
    return (
        <>
            <div className="btnBlock" >
                {children}
                <div className="bgImg">
                    {icon}
                </div>
                <p>{title}</p>
            </div>
            <i className="arrow"></i>
        </>
    );
};

export default BtnSidebar;
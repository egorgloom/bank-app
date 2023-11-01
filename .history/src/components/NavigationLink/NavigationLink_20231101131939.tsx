import { FC } from 'react';

import { NavLink } from "react-router-dom";

interface INavigationLink {

    active?: boolean,
    setActive?: any,

}



const NavigationLink: FC<INavigationLink> = ({active, setActive}) => {

    const pages = ['Summary', 'Cards', 'Activity', 'Recipients', 'Help Center', 'Earn Gifts']

    return (
        <>

            <nav className={active ? 'navContainer active' : 'navContainer'} onClick={()=>setActive(false)}>
                <ul className={active ? 'navLink active' : 'navLink'} >
                    {pages.map((page: string, index) =>
                    <li key={index}>
                        <NavLink to={`/${page}`}
                            style={({ isActive }) => ({
                                color: isActive ? "black" : 'rgb(184,182,184)',
                            })}
                        >
                            {page}
                        </NavLink>
                    </li>)}
                </ul>
            </nav>
        </>

    );
};

export default NavigationLink;
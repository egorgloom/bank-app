import { FC, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

// import styles from './NavigationLink.module.scss';

import { NavLink } from "react-router-dom";
import BtnCircle from '../UI/BtnCircle/BtnCircle';

interface INavigationLink {

    active?: boolean,
    setActive?: any,

}



const NavigationLink: FC<INavigationLink> = ({active, setActive}) => {




    return (
        <>

            {/* onClick={(e)=> e.stopPropagation()} */}
            <nav className={active ? 'navContainer active' : 'navContainer'} onClick={()=>setActive(false)}>
                <ul className='navLink'>
                    <li>
                        <NavLink to={'/summary'}
                            style={({ isActive }) => ({
                                color: isActive ? "black" : 'rgb(184,182,184)',
                            })}
                        >
                            Summary
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/cards'}
                            style={({ isActive }) => ({
                                color: isActive ? 'black' : 'rgb(184,182,184)',
                            })}>
                            Cards
                        </NavLink></li>
                    <li>
                        <NavLink to={'/activity'}
                            style={({ isActive }) => ({
                                color: isActive ? 'black' : 'rgb(184,182,184)',
                            })}
                        >
                            Activity
                        </NavLink></li>
                    <li>
                        <NavLink to={'/recipients'}
                            style={({ isActive }) => ({
                                color: isActive ? 'black' : 'rgb(184,182,184)',
                            })}
                        >
                            Recipients
                        </NavLink></li>
                    <li>
                        <NavLink to={'/helpCenter'}
                            style={({ isActive }) => ({
                                color: isActive ? 'black' : 'rgb(184,182,184)',
                            })}
                        >
                            Help Center
                        </NavLink></li>
                    <li>
                        <NavLink to={'/earnGifts'}
                            style={({ isActive }) => ({
                                color: isActive ? 'black' : 'rgb(184,182,184)',
                            })}
                        >
                            Earn Gifts
                        </NavLink></li>
                </ul>
            </nav>
        </>

    );
};

export default NavigationLink;
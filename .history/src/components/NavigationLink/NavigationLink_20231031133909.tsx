import { FC, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

// import styles from './NavigationLink.module.scss';

import { NavLink } from "react-router-dom";
import BtnCircle from '../UI/BtnCircle/BtnCircle';



const NavigationLink: FC = () => {

    const [menuActive, setMenuActive] = useState<boolean>(false)


    return (
        <>
            <div className='burger' onClick={()=>setMenuActive(!menuActive)}>
                <BtnCircle color={'purple60'} icon={<GiHamburgerMenu />}/>
           
            </div>
            <nav className={menuActive ? 'navContainer active' : 'navContainer'} onClick={()=>setMenuActive(false)}>
                <ul className='navLink' onClick={(e)=> e.stopPropagation()}>
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
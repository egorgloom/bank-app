import { FC, useState } from 'react';

import styles from './NavigationLink.module.scss';

import { NavLink } from "react-router-dom";


const NavigationLink: FC = () => {
    const [visible, isVisible] = useState<boolean>(true);

    return (
        <div className='flex'>
            <nav className={visible ? [styles.navContainer, styles.active].join(' '): [styles.navContainer]} >
                <ul className={styles.navLink} >
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
            <button className={styles.burger} onClick={() => isVisible(false)}>BURGER</button>
            
        </div>

    );
};

export default NavigationLink;
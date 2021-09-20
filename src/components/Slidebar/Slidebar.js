import React from "react";
import { ReactComponent as HomeIcon } from '../svg/home.svg';
import { ReactComponent as SearchIcon } from '../svg/search.svg';
import { ReactComponent as LibraryIcon } from '../svg/library_music.svg';

const Slidebar = () => {
    return (
        <div className="sideBar">
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M9.5,14.67V9.33c0-0.79,0.88-1.27,1.54-0.84 l4.15,2.67c0.61,0.39,0.61,1.29,0,1.68l-4.15,2.67C10.38,15.94,9.5,15.46,9.5,14.67z"/>
                </svg>
                <span>Music Player</span>
            </div>
            <ul>
                <li className="active">
                    <HomeIcon />
                    Inicio
                </li>
                <li>
                    <SearchIcon />
                    Buscar
                </li>
                <li>
                    <LibraryIcon />
                    Libreria
                </li>
            </ul>
            <div className="cookies">
                <span>Cookies</span>
                <span>Privacidad</span>
            </div>
        </div>
    );
}

export default Slidebar;
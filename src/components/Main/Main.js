import React from "react";
import { ReactComponent as PlayIcon } from '../svg/play.svg';

const Main = () => {
    return (
        <div className="main">
            <div className="navbar">
                Texto
            </div>
            <div className="mainContent">
                <div className="cardsWrap">
                    <h1>Para ti</h1>
                    <div className="card">
                        <div className="cardImg">
                            <img src="https://images.unsplash.com/photo-1565053266993-18ae409835ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Pic 1" />
                            <div className="playIcon">
                                <PlayIcon />
                            </div>
                        </div>
                        <div className="cardContent">
                            <h3>Canciones que te gustaron</h3>
                        </div>
                        
                    </div>
                </div>
                <div className="cardsWrap">
                    <h2>Listas de éxitos</h2>
                    <div className="card">
                        <div className="cardImg">
                            <img src="https://images.unsplash.com/photo-1565053266993-18ae409835ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Pic 1" />
                            <div className="playIcon">
                                <PlayIcon />
                            </div>
                        </div>
                        <div className="cardContent">
                            <h3>Canciones que te gustaron</h3>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
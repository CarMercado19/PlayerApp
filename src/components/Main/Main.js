import React from "react";

const Main = () => {
    return (
        <div className="main">
            <div className="navbar">
                Texto
            </div>
            <div className="mainContent">
                <h1>Para ti</h1>
                <div className="cardsWrap">
                    <div className="card">
                        <div className="cardImg">
                            <img src="https://images.unsplash.com/photo-1565053266993-18ae409835ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Pic 1" />
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
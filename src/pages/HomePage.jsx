import React from "react";
import NavButtons from "../components/NavButtons.jsx";

function HomePage() {

    return (
        <div>
            <div id="header">
                <h1>Welcome to Tic-Tac-Toe</h1>
            </div>
            <div id="body">
                <h2>Select Game Mode</h2>
                <NavButtons
                    name={"navbutton"}
                    to="/Multiplayer"
                    text={"Multiplayer"}
                />
            </div>
        </div>
    )
}

export default HomePage;
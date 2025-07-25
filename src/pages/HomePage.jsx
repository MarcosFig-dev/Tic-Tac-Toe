import React from "react";
import NavButtons from "../components/NavButtons.jsx";
import "./HomePage.css";

function HomePage() {

    return (
        <div id="body">
            <div id="header">
                <h1>Welcome to Tic-Tac-Toe</h1>
            </div>
            <div id="card">
                <h2>Select Game Mode</h2>
                <NavButtons
                    to="/Multiplayer"
                    text={"Multiplayer"}
                />
                <br />
                <br />
                <NavButtons
                    to="/Multiplayer"
                    text={"Verus The Computer"}
                />
            </div>
        </div>
    )
}

export default HomePage;
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home.jsx";

let number = 0;

setInterval(function () {
    number++;

    const one = Math.floor(number / 1) % 10;
    const two = Math.floor(number / 10) % 10;
    const three = Math.floor(number / 100) % 10;
    const four = Math.floor(number / 1000) % 10;
    const five = Math.floor(number / 10000) % 10;

    ReactDOM.createRoot(document.getElementById('app')).render(
        <Home one={one} two={two} three={three} four={four} five={five} />
    );
}, 1000);

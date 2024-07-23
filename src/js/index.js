//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Counter from "./component/counter.jsx";

let number = 0;

let IntervalNumber = setInterval(function () {
    number++;

    ReactDOM.createRoot(document.getElementById('app')).render(<Counter number={number} />)
}, 1000);
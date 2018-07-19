import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/app.jsx"
require("../scss/main.scss");



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
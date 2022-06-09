import React from "react";
import ReactDom from "react-dom/client";
import App from "./routes/App";


const root = ReactDom.createRoot(document.getElementById('App'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchComp from './profile/components/SearchComp';
import properties from "./profile/libs/properties";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className="header">{properties.labels.title}</div>
        <div className="container">
            <SearchComp/>
        </div>
    </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MapProvider from './components/UI/Map/MapContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MapProvider>
        <App />
    </MapProvider>
);

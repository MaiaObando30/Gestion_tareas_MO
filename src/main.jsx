// Importamos React (la librería principal) y ReactDOM (para mostrar la app en el navegador)
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importamos el componente principal de la app
import App from './App.jsx'

// Importamos los estilos globales
import './index.css'

// Le decimos a React que queremos mostrar la aplicación dentro del elemento con id 'root' (en el HTML)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Acá se muestra el componente principal de la app */}
    <App />
  </React.StrictMode>,
)

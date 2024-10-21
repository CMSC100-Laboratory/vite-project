import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// In general, this initializes the react application
createRoot(document.getElementById('root')).render(
  // createRoot() - is a method that renders the react component tree
  // document.getElementById('root') - calls the DOM method where it will mount the REACT application
  // render(...) - this method will render what's inside of it.
  // additional note: the 'root' is located on the index.html

  <StrictMode> 
    <App />
  </StrictMode>,
  // <StrickMode> element don't render anything visible on your react application, it runs checks and provides warning in the development mode.
  // <App /> component is 
)

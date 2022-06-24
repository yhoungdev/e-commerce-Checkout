
import './App.css'
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import Main from './components/main/main'
function App() {
  
  return (
    <div className="App">
      <Homepage/>
      <Main/>
    </div>
  )
}

export default App

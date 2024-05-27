import { useEffect } from 'react'
import './App.css'
import Home from './screens/Home'
import Response from './screens/Response'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Page404 from './screens/Page404'

const App = () => {

    return <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/response' element={ <Response /> } />
      <Route path='*' element={ <Page404 />} />
    </Routes>
  </Router>
}

export default App
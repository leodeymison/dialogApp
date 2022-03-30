import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Components
import NavbarTop from '../components/navbar/top'

// views
import Home from './Home/Home'
import People from './People/People'

const App: React.FC = () => {
  return (
    <Router>
      <NavbarTop />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/people/:id" element={<People />} />
      </Routes>
    </Router>
  );
}

export default App;

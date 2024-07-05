import React from 'react'
import './Home.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


export const Home = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </Router>
  )
}

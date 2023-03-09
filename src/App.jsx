import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaProdutos from '../pages/listaProdutos';
import './App.css'

function App() {

  return (
    <>

      <Router>

        <Routes>
          <Route path='/' element={<ListaProdutos />} />
        </Routes>

      </Router>

    </>
  )
}

export default App
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaProdutos from '../pages/listaProdutos';
import Carrinho from '../pages/carrinho';
import TelaConfirmacao from '../pages/telaConfirmacao';
import './App.css'

function App() {

  return (
    <>

      <Router>

        <Routes>
          <Route path='/' element={<ListaProdutos />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/confirmacao' element={<TelaConfirmacao />} />
        </Routes>

      </Router>

    </>
  )
}

export default App
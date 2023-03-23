import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaProdutos from './pages/listaProdutos';
import Carrinho from './pages/carrinho';
import TelaConfirmacao from './pages/telaConfirmacao';
import CarrinhoProvider from './context/CarrinhoProvider';
import './App.css'

function App() {

  return (
    <>
      <CarrinhoProvider>
        <Router>
          <Routes>
            <Route path='/' element={<ListaProdutos />} />
            <Route path='/produtos' element={<ListaProdutos />} />
            <Route path='/carrinho' element={<Carrinho />} />
            <Route path='/carrinho/confirmacao' element={<TelaConfirmacao />} />
          </Routes>
        </Router>
      </CarrinhoProvider>
    </>
  )
}

export default App
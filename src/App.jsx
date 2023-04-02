import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaProdutos from './pages/listaProdutos';
import Carrinho from './pages/carrinho';
import TelaConfirmacao from './pages/telaConfirmacao';
import ConfirmacaoEntrega from './pages/confirmacaoEntrega';
import CarrinhoProvider from './context/CarrinhoProvider';
import './App.css'

function App() {

  return (
    <div className='bg'>

      <CarrinhoProvider>
        <Router>
          <Routes>
            <Route path='/' element={<ListaProdutos />} />
            <Route path='/produtos' element={<ListaProdutos />} />
            <Route path='/carrinho' element={<Carrinho />} />
            <Route path='/carrinho/infoClientes' element={<ConfirmacaoEntrega />} />
            <Route path='/carrinho/confirmacao' element={<TelaConfirmacao />} />
          </Routes>
        </Router>
      </CarrinhoProvider>

    </div>
  )
}

export default App
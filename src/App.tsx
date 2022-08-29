import React from 'react'
import Chat from './pages/Chat/Chat'
import Login from './pages/Login/Login'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}>
      </Route>
      <Route path='/chat' element={<Chat />}>
      </Route>
    </Routes>
  )
}

export default App

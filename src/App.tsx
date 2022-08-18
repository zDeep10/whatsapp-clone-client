import React from 'react'
import Header from './layout/Header/Header'
import Cardapio from './pages/Cardapio/Cardapio'

function App() {
  return (
    <>
      {/* HEADER */}
      <Header />
      {/* END HEADER */}

      {/* MAIN CONTENT */}
      <Cardapio />
      {/* END MAIN CONTENT */}
    </>
  )
}

export default App

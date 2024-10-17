import './index.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Eride from './pages/Eride'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/eride' element={<Eride />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

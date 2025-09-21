import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

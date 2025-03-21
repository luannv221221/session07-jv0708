import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Register from './pages/Register'
import Product from './pages/Product'
import Detail from './pages/Detail'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Category from './pages/admin/category/Category'
import AddCategory from './pages/admin/category/AddCategory'
import EditCategory from './pages/admin/category/EditCategory'
function App() {


  return (
    <Routes>
      <Route path='' element={<DefaultLayout />}>
        <Route index element={<Home />}></Route>
        <Route path='product-detail/:id' element={<Detail />}></Route>
        <Route path='product' element={<Product />}></Route>
      </Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path='category' element={<Category />}></Route>
        <Route path='add-category' element={<AddCategory />}></Route>
        <Route path='edit-category/:id' element={<EditCategory />}></Route>
      </Route>
    </Routes>
  )
}

export default App

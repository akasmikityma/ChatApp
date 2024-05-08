import React,{lazy} from 'react'
import {BrowserRouter as Router, Routes,Route, BrowserRouter} from "react-router-dom"
const Home=lazy(()=>import("./pages/Home"))
const Login=lazy(()=>import("./pages/Login"))
const Chat=lazy(()=>import("./pages/Chat"))
const Groups=lazy(()=>import("./pages/Groups"))
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/chat/:chatID' element={<Chat/>} />
        <Route path='/groups' element={<Groups/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
//do the routes home ,about 
// in src components ,pages hooks, lib ,utils
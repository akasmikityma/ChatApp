import React,{Suspense, lazy} from 'react'
import {BrowserRouter as Router, Routes,Route, BrowserRouter} from "react-router-dom"
import ProtectRoute from './components/auth/ProtectRoute'
import Loaders from './components/layout/Loaders'
const NotFound=lazy(()=>import("./pages/NotFound"))
const Home=lazy(()=>import("./pages/Home"))
const Login=lazy(()=>import("./pages/Login"))
const Chat=lazy(()=>import("./pages/Chat"))
const Groups=lazy(()=>import("./pages/Groups"))
let user =true;
export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Suspense fallback={<Loaders/>}>
       <Routes>
        <Route element={<ProtectRoute user={user}/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/chat/:chatID' element={<Chat/>} />
        <Route path='/groups' element={<Groups/>} />
        </Route>
        <Route path='/login' element={<ProtectRoute user={!user} redirect='/'>
          <Login/>
        </ProtectRoute>} />
       <Route path='*' element={<NotFound/>}/>
      </Routes>
       </Suspense>
      </BrowserRouter>
    </div>
  )
}
//do the routes home ,about 
// in src components ,pages hooks, lib ,utils
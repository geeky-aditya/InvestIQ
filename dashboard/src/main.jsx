import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import AuthCheck from "./AuthCheck";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <AuthCheck />
  <Routes>
     <Route path='/*' element={<Home/>}></Route>
  </Routes>
  </BrowserRouter>
)
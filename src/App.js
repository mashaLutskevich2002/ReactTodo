import React from "react";
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import CreateNavbar from "./components/UI/Navbar/CreateNavbar";
import AppRouter from "./components/AppRouter";

function App() {
 return(
     <BrowserRouter>
        <CreateNavbar/>
        <AppRouter/>
     </BrowserRouter>
 )
}

export default App;

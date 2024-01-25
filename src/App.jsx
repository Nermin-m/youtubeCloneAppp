
import './App.css'
import {BrowserRouter, Route, Routes,Link} from "react-router-dom";
import Home from "./pages/home.jsx";
import Details from "./pages/details.jsx";
import Search from "./pages/search.jsx";
import Navbar from "./components/navbar.jsx";
import SideBar from "./components/sideBar.jsx";
import PageContainers from "./containers/pageContainers.jsx";
function App() {

  return (
      <div>
     <BrowserRouter>
         <Navbar/>
         <PageContainers>
         <SideBar/>
         <Routes>
             <Route path={'/'} element={<Home/>}></Route>
             <Route path={'videos/:id'} element={<Details/>}></Route>
             <Route path={'search/:keyword'} element={<Search/>}></Route>
         </Routes>
         </PageContainers>
     </BrowserRouter>
      </div>
  )
}

export default App

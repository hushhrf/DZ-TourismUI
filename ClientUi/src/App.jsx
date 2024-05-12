import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Accommodation from "./pages/Accommodation"
import List from "./pages/List"
import Login from "./components/Login/Login"


function App() {
  

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Accommodation" element={<Accommodation />}/>
      <Route path="/Hotels" element={<List />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App

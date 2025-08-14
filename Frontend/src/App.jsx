import Dashboard from "./components/dashboard"
import Signin from "./components/signin"
import Signup from "./components/signup"
import Person from "./components/person"
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom"



function App() {


  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

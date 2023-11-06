
import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/Login"
import SignupPage from "./pages/Signup"
import StagingPage from "./pages/staging"


function App() {

  return (
    <>
    <Routes>
    {/* <Route path="/dashTiket" element={<DashboardTiket/>}/>
    <Route path="/dashProfile" element={<DashboardProfile/>}/> */}
    {/* <Route path="/bree" element={<TransactionPage/>}/> */}
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/" element={<SignupPage/>}/>
      
      
    </Routes>
      {/* <StagingPage/> */}
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}
    </>
  )
}

export default App

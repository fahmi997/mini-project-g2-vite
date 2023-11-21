
import { Route, Routes } from "react-router-dom"
import DashboardTiket from "./pages/dashboard/indexTiket"
import LoginPage from "./pages/Login"
import SignupPage from "./pages/Signup"
import StagingPage from "./pages/staging"
import CreateEventPage from "./pages/CreateEvent"
import DashboardProfile from "./pages/dashboard/indexProfile"
import TransactionPage from "./pages/transaction"


function App() {

  return (
    <>
    <Routes>
    <Route path="/dashTiket" element={<DashboardTiket/>}/>
    <Route path="/dashProfile" element={<DashboardProfile/>}/>
    <Route path="/" element={<TransactionPage/>}/>
      
      
    </Routes>
      {/* <StagingPage/> */}
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}
      <CreateEventPage/>
    </>
  )
}

export default App

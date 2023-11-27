
import { Route, Routes } from "react-router-dom"
import DashboardTiket from "./pages/dashboard/indexTiket"
import LoginPage from "./pages/Login"
import SignupPage from "./pages/Signup"
// import StagingPage from "./pages/staging"
import CreateEventPage from "./pages/CreateEvent"
import DashboardProfile from "./pages/dashboard/indexProfile"
import TransactionPageEnded from "./pages/transaction/ended"
import TransactionPageActive from "./pages/transaction/active"
import LandingPage from "./pages/LandingPage"
import ExplorePage from "./pages/ExplorePage.jsx"
import DetailEvent from "./pages/DetailEventPage"
import Navbar from "./components/Navbar/index.jsx"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/event/:id" element={<DetailEvent />} />
        <Route path="/dashTiket" element={<DashboardTiket />} />
        <Route path="/dashProfile" element={<DashboardProfile />} />
        <Route path="/checkoutTiket" element={<TransactionPageEnded />} />
        {/* <Route path="/" element={<TransactionPageActive />} /> */}
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sign-up" element={<SignupPage/>}/>
      </Routes>
    </>
  );
}

export default App;

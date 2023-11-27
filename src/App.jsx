import CreateEventPage from "./pages/CreateEvent";
import DashboardTiket from "./pages/dashboard/indexTiket";
// import StagingPage from "./pages/staging";
import DashboardProfile from "./pages/dashboard/indexProfile";
import TransactionPageEnded from "./pages/transaction/ended";
import TransactionPageActive from "./pages/transaction/active"
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkDataAccount, login } from "../src/redux/slice/accountSlice";
// import { Route, Routes } from "react-router-dom"
// import LoginPage from "./pages/Login"
// import SignupPage from "./pages/Signup"
// import StagingPage from "./pages/staging"
// import CreateEventPage from "./pages/CreateEvent"
// import DashboardProfile from "./pages/dashboard/indexProfile"
// import TransactionPageEnded from "./pages/transaction/ended"
// import TransactionPageActive from "./pages/transaction/active"
import LandingPage from "./pages/LandingPage"
import ExplorePage from "./pages/ExplorePage.jsx"
import DetailEvent from "./pages/DetailEventPage"
import Navbar from "./components/Navbar/index.jsx"
import MyPromo from "./pages/MyPromo/index.jsx";
import MyEvent from "./pages/MyEvent/index.jsx";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAcc = useSelector((state) => {
    return state.accountSlice;
  });

  useEffect(() => {
    dispatch(checkDataAccount());
    // console.log(loginAcc);
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/event/:id" element={<DetailEvent />} />
        <Route path="/dashTiket" element={<DashboardTiket />} />
        <Route path="/dashProfile" element={<DashboardProfile />} />
        <Route path="/checkoutTiket" element={<TransactionPageEnded />} />
        {/* <Route path="/" element={<TransactionPageActive />} /> */}
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sign-up" element={<SignupPage/>}/>
        <Route path="/checkoutTiketActive" element={<TransactionPageActive />} />
        <Route path="/my-promo" element={<MyPromo />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/my-event" element={<MyEvent />} />
      </Routes>
    </>
  );
}

export default App;

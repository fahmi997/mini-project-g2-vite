import CreateEventPage from "./pages/CreateEvent";
import DashboardTiket from "./pages/dashboard/indexTiket";
// import StagingPage from "./pages/staging";
import DashboardProfile from "./pages/dashboard/indexProfile";
import TransactionPageEnded from "./pages/transaction/ended";
import TransactionPageActive from "./pages/transaction/active"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkDataAccount, login } from "../src/redux/slice/accountSlice";
import LandingPage from "./pages/LandingPage"
import ExplorePage from "./pages/ExplorePage.jsx"
import DetailEvent from "./pages/DetailEventPage"
import Navbar from "./components/Navbar/index.jsx"
import BoxCheckout from "./components/TransactionPage/ContentActive/BoxCheckout.jsx";
// import accountSlice from "./redux/slice/accountSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const loginAcc = useSelector((state) => {
    return state.accountSlice;
  });
  const checkLocal = localStorage.getItem("token")


  console.log("INI local storage", localStorage.getItem("token"));
  // if(!checkLocal){
  //   navigate("/login")
  // }

  useEffect(() => {
    dispatch(checkDataAccount());
    console.log("ini loginAcc", loginAcc);
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
        <Route path="/checkoutTiketEnded" element={<TransactionPageEnded />} />
        <Route path="/checkoutTiketActive" element={<TransactionPageActive />} />
        <Route path="/boxCheckout" element={<BoxCheckout />} />
      </Routes>
    </>
  );
}

export default App;

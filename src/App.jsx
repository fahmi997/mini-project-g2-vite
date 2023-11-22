import CreateEventPage from "./pages/CreateEvent";
import DashboardTiket from "./pages/dashboard/indexTiket";
import StagingPage from "./pages/staging";
import DashboardProfile from "./pages/dashboard/indexProfile";
import TransactionPageEnded from "./pages/transaction/ended";
import TransactionPageActive from "./pages/transaction/active";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkDataAccount, login } from "../src/redux/slice/accountSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAcc = useSelector((state) => {
    return state.accountSlice;
  });

  useEffect(() => {
    dispatch(checkDataAccount());
    console.log(loginAcc);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SignupPage />} />
        <Route path="/dashTiket" element={<DashboardTiket />} />
        <Route path="/dashProfile" element={<DashboardProfile />} />
        <Route path="/checkoutTiket" element={<TransactionPageEnded />} />
        <Route path="/checkoutTiketActive" element={<TransactionPageActive />} />
      </Routes>
    </>
  );
}

export default App;

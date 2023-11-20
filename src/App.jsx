import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import StagingPage from "./pages/staging";

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
        {/* <Route path="/dashTiket" element={<DashboardTiket/>}/>
    <Route path="/dashProfile" element={<DashboardProfile/>}/> */}
        {/* <Route path="/bree" element={<TransactionPage/>}/> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SignupPage />} />
      </Routes>
      {/* <StagingPage/> */}
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import DashboardTiket from "./pages/dashboard/indexTiket";
import StagingPage from "./pages/staging";
import DashboardProfile from "./pages/dashboard/indexProfile";
import TransactionPageEnded from "./pages/transaction/ended";
import TransactionPageActive from "./pages/transaction/active";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashTiket" element={<DashboardTiket />} />
        <Route path="/dashProfile" element={<DashboardProfile />} />
        <Route path="/checkoutTiket" element={<TransactionPageEnded />} />
        <Route path="/" element={<TransactionPageActive />} />
      </Routes>
    </>
  );
}

export default App;

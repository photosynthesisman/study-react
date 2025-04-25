import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer"; // Adjusted the path to locate the Footer module correctly
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <main style={{ width: "100%", padding: "1rem" }}>
          <Outlet /> {/* 이게 있어야 Dashboard나 Settings가 나와요! */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

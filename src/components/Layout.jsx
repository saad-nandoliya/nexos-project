import { Outlet } from "react-router-dom";
import Navbar from "../layout/client/Navbar";
import Footer from "../layout/client/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-100">
        <Outlet />
      </main>
      <Footer />  
    </div>
  );
};

export default Layout;

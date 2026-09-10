import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-body bg-white">
      <Navbar />
      <main className="flex-1 w-full bg-white">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
import Navbar from "./Navbar";
import { Outlet } from 'react-router';

/** The shared layout for all pages of the app */
const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

  export default Layout;
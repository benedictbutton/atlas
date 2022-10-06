// import Header from "./header";
// import Footer from "./footer";
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <Header /> */}
      <main className="p-3">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

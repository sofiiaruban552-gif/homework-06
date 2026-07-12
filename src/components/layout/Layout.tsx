import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="wrapper__content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

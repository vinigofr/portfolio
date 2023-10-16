import Header from "../Header";
import Footer from "../Footer";

const RootLayout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;

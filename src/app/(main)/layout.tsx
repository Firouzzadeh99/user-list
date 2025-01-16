import Header from "@/_components/Header";
import "../globals.scss";
import Footer from "@/_components/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrapper_layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

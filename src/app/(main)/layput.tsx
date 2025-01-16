import "../globals.css";
 
import Footer from "../../_components/footer";
import Header from "../../_components/header";
  
export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <div className="wrapper_layout">
      <Header />
      {children}
      <Footer  />
     </div>
  );
}

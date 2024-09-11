import { MyProvider } from "@/context/MyProvider";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import { ModalProvider } from "@/context/ModalProvider";
import TerminalModal from "@/components/TerminalModal";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollisio";
export const metadata = {
  title: "Home | Sartiz Alam Ayon",
  description: "Protfoilo of a Sartiz Alam Ayon, a full stack developer, web devloper, front end devloper, software engineer from Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.png" sizes="any" />
      
      <body className="bg-primary min-h-screen chess-bg">
        {/* implement background */}
        <MyProvider>
        <ModalProvider>
        <Navbar />
        
        <BackgroundBeamsWithCollision>
        <div className="w-full">
          <div className="container mx-auto max-w-7xl">
          {children} 
          <TerminalModal />
          </div>
        </div>
        </BackgroundBeamsWithCollision>
        </ModalProvider>
        </MyProvider>
      
      </body>
    </html>
  );
}

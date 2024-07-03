import "./globals.css";


export const metadata = {
  title: "Home",
  description: "Protfoilo of a sSartiz Alam Ayon",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary min-h-screen">
        {children}
      </body>
    </html>
  );
}

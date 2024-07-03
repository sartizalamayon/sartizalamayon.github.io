import "./globals.css";


export const metadata = {
  title: "Home",
  description: "Protfoilo of a software engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

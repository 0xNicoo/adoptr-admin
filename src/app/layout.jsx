import "./globals.css";


export const metadata = {
  title: "ADMIN",
  description: "Adoptr admin",
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

import "./globals.css";

export const metadata = {
  title: "Artan Bajqinca - Developer & Designer",
  description: "Developer and designer based in Sweden. I have a passion for creating beautiful and functional websites and applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800">{children}</body>
    </html>
  );
}

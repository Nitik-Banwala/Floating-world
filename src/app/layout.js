
import "./globals.css";

export const metadata = {
  title: "Floating World",
  description: "Floating World",
  images: ["/meta.png"],
  openGraph: {
    title: "Floating World",
    description: "Floating World",
    images: ["/meta.png"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en" 
    >
      <body >{children}</body>
    </html>
  );
}

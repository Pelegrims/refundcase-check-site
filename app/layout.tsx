import "./globals.css";

export const metadata = {
  title: "RefundCase Check",
  description: "Case review for broker disputes and crypto scam recovery matters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

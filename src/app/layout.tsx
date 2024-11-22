import Navbar from '@/components/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Fixed Top Navbar */}
        <Navbar />
        {/* Page Content */}
        <main className="pt-16">{children}</main> {/* Push content below Navbar */}
      </body>
    </html>
  );
}

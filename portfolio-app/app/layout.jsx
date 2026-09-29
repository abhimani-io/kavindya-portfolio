import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'Kavindya — IT & Software Engineering Student | Portfolio',
  description: "Hi, I'm Kavindya — an IT and Software Engineering student passionate about full-stack development, cloud systems, and building tools that solve real problems. Available for internships.",
  keywords: 'software engineering intern, IT intern, full-stack developer, web development, portfolio, Kavindya',
  openGraph: {
    title: 'Kavindya — IT & Software Engineering Portfolio',
    description: 'Clean code. Practical solutions. Ready to build on Day 1.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%232563EB'/><text y='22' x='7' font-size='18' font-family='monospace' fill='white'>K</text></svg>"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

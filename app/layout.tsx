import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Akira Yuki Aganan | Portfolio',
  description: 'Computer Engineering Graduate Portfolio',
};

// Runs BEFORE React loads and BEFORE the page paints. It reads the saved
// theme from sessionStorage (cleared when the tab/browser is closed) and
// puts it on <html> immediately. Every new visit starts in dark; a switch to
// light only lasts until the visitor closes the site.
const themeInitScript = `
(function () {
  try {
    var saved = sessionStorage.getItem('theme');
    var theme = saved === 'light' ? 'light' : 'dark';
    document.documentElement.className = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={poppins.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
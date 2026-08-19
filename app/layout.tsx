import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Tevexxo — Build Skills. Build Your Future.',
  description:
    'Industry-focused technology training programs. Learn AI, Full Stack, Data Analytics, Cyber Security, Cloud & DevOps, and UI/UX with real-world projects and expert mentors.',
  keywords: ['Tevexxo', 'tech training', 'courses', 'AI', 'full stack', 'cyber security'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

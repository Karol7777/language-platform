import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { AuthInitializer } from '@/components/AuthInitializer/AuthInitializer';

export const metadata: Metadata = {
  title: 'Language Learning Platform',
  description: 'Learn languages easily!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthInitializer />
          {children}
        </Providers>
      </body>
    </html>
  );
}

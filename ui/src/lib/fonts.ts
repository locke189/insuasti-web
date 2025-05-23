import { Fira_Code } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Fjalla_One } from 'next/font/google';

export const fira = Fira_Code({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fira',
});

export const fjallaOne = Fjalla_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

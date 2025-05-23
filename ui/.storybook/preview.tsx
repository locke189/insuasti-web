import React from 'react';
import type { Preview } from '@storybook/react';

import { fira, inter, fjallaOne } from '../src/lib/fonts';
import { ThemeProvider } from '../src/components/theme-provider';

import '@/app/globals.css';
import './storybook.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${inter.variable} ${fira.variable} ${fjallaOne.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange={false}>
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
};

export default preview;

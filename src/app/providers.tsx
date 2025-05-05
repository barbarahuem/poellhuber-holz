'use client';

import { ThemeProvider } from '@emotion/react';
import AppTheme from './appTheme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={AppTheme}>
      {children}
    </ThemeProvider>
  );
}
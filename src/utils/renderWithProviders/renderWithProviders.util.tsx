import type { PreloadedState } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import type {
  PropsWithChildren,
  ReactElement,
} from 'react';

import type {
  AppStore,
  RootState,
} from '../../redux/store';

import {
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import i18n from '../../i18n';
import { setupStore } from '../../redux/store';
import { baseTheme } from '../../styles/theme';

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({ children }: PropsWithChildren<{}>): ReactElement {
    return (
      <HelmetProvider>
        <Provider store={store}>
          <ThemeProvider theme={baseTheme}>
          <I18nextProvider i18n={i18n}>
            <CssBaseline />
            <BrowserRouter>{children}</BrowserRouter>
          </I18nextProvider>
          </ThemeProvider>
        </Provider>
      </HelmetProvider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

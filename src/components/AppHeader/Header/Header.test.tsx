import {
  render,
  screen,
} from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import { vi } from 'vitest';

import i18n from '../../../i18n';
import { Header } from './Header.component';

test("renders Header component", () => {
  const userEmail = "hello@gmail.com";
  const handleLogout = vi.fn();
  const handleLogin = vi.fn();
  render(
    <I18nextProvider i18n={i18n}>
      <Router>
        <Header
          userEmail={userEmail}
          handleLogout={handleLogout}
          handleLogin={handleLogin}
        />
      </Router>
    </I18nextProvider>
  );

  expect(screen.queryByText(userEmail)).toBeInTheDocument();
});

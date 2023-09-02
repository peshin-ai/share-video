import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import { vi } from 'vitest';

import i18n from '../../../i18n';
import { LoggedContent } from './LoggedContent.component';

describe("LoggedContent", () => {
  const userEmail = "user@example.com";
  const onLogout = vi.fn();

  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Router>
          <LoggedContent userEmail={userEmail} onLogout={onLogout} />
        </Router>
      </I18nextProvider>
    );
  });

  it("renders user email", () => {
    const userEmailElement = screen.getByText(`${userEmail}`);
    expect(userEmailElement).toBeInTheDocument();
  });

  it("renders share button with the correct text", () => {
    const shareButton = screen.getByText("Share");
    expect(shareButton).toBeInTheDocument();
  });

  it("renders logout button with the correct text", () => {
    const logoutButton = screen.getByText("Logout");
    expect(logoutButton).toBeInTheDocument();
  });

  it("calls onLogout when logout button is clicked", () => {
    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);
    expect(onLogout).toHaveBeenCalledTimes(1);
  });
});

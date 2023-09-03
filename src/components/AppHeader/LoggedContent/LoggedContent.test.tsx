import {
  fireEvent,
  screen,
} from '@testing-library/react';
import { renderWithProviders } from '@utils/index';
import { vi } from 'vitest';

import { LoggedContent } from './LoggedContent.component';

describe("LoggedContent", () => {
  const userEmail = "user@example.com";
  const onLogout = vi.fn();

  beforeEach(() => {
    renderWithProviders(
      <LoggedContent userEmail={userEmail} onLogout={onLogout} />
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

import { screen } from '@testing-library/react';
import { renderWithProviders } from '@utils/index';
import { vi } from 'vitest';

import { Header } from './Header.component';

describe("Header", () => {
  
  const handleLogout = vi.fn();
  const handleLogin = vi.fn();


  test("renders Header component", () => {
    const userEmail = "hello@gmail.com";
    renderWithProviders(
      <Header
        userEmail={userEmail}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
      />
    );
    expect(screen.queryByText(userEmail)).toBeInTheDocument();
  });

  test("call userEmail null when user Logout", () => {
    const userEmail = "hello@gmail.com";
    renderWithProviders(
      <Header
        userEmail={userEmail}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
      />
    );
    const logoutButton = screen.getByText("Logout");
    logoutButton.click();
    expect(handleLogout).toHaveBeenCalledTimes(1);
  });


  test('userEmail null when user Login', () => {
    const userEmail = undefined;
    renderWithProviders(<Header
      userEmail={userEmail}
      handleLogout={handleLogout}
      handleLogin={handleLogin}
    />);

    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
  });
});

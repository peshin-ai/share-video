import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from '@utils/index';
import { FieldValues } from 'react-hook-form';
import {
  expect,
  it,
  vi,
} from 'vitest';

import { LoginForm } from './LoginForm.component';

describe("LoginForm submits data correctly", () => {
  const onLoginMock = vi.fn((data: FieldValues) => data);
  it("renders with default props", () => {
    const { getByText } = renderWithProviders(
      <LoginForm onLogin={onLoginMock} />
    );

    const emailInput = getByText("Email");
    const passwordInput = getByText("Password");
    const loginButton = getByText("Login / Register");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("renders with default props", () => {
    const { getByTestId } = renderWithProviders(
      <LoginForm onLogin={onLoginMock} />
    );

    const emailInput = getByTestId("email");
    const passwordInput = getByTestId("password");
    const loginButton = getByTestId("loginButton");

    // Simulate user input
    fireEvent.click(emailInput);
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(passwordInput);
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(loginButton);
    expect(loginButton).toBeInTheDocument();
  });
});

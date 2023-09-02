import {
  fireEvent,
  render,
} from '@testing-library/react';
import { FieldValues } from 'react-hook-form';
import { I18nextProvider } from 'react-i18next';
import {
  expect,
  it,
  vi,
} from 'vitest';

import i18n from '../../../i18n';
import { LoginForm } from './LoginForm.component';

describe("LoginForm submits data correctly", () => {
  const onLoginMock = vi.fn((data: FieldValues) => data);
  it("renders with default props", () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <LoginForm onLogin={onLoginMock} />
      </I18nextProvider>
    );

    const emailInput = getByText("Email");
    const passwordInput = getByText("Password");
    const loginButton = getByText("Login / Register");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("renders with default props", () => {
    const { getByTestId } = render(
      <I18nextProvider i18n={i18n}>
        <LoginForm onLogin={onLoginMock} />
      </I18nextProvider>
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

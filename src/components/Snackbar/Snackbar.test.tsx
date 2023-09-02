import '@testing-library/jest-dom';

import { jest } from '@jest/globals';
import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import { CustomizedSnackbar } from './Snackbar.component';

describe("CustomizedSnackbars", () => {
  it("renders correctly with open=true", () => {
    const handleClose = jest.fn();

    render(
      <CustomizedSnackbar
        open={true}
        handleClose={handleClose}
        severity="success"
        message="Success message"
      />
    );

    // Ensure the Snackbar and Alert components are rendered
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Success message")).toBeInTheDocument();

    // Simulate closing the Snackbar
    fireEvent.click(screen.getByRole("button")); // Assuming there's a close button in your Snackbar

    // Ensure the handleClose function is called
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does not render when open=false", () => {
    const handleClose = jest.fn();

    render(
      <CustomizedSnackbar
        open={false}
        handleClose={handleClose}
        severity="success"
        message="Success message"
      />
    );

    // Ensure the Snackbar and Alert components are not rendered
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});

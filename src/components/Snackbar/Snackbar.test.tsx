import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import {
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import { CustomizedSnackbar } from './Snackbar.component';

describe("CustomizedSnackbars", () => {
  it("renders correctly with open=true", () => {
    const handleClose = vi.fn();

    render(
      <CustomizedSnackbar
        open={true}
        handleClose={handleClose}
        severity="success"
        message="Success message"
      />
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Success message")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does not render when open=false", () => {
    const handleClose = vi.fn();

    render(
      <CustomizedSnackbar
        open={false}
        handleClose={handleClose}
        severity="success"
        message="Success message"
      />
    );

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});

import {
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/dom';
import { checkEmpty } from '@utils/checkEmpty/checkEmpty.util';
import { renderWithProviders } from '@utils/index';
import { ReactElement } from 'react';
import {
  FormProvider,
  useForm,
} from 'react-hook-form';
import {
  describe,
  it,
  vi,
} from 'vitest';

import {
  ShareForm,
  ShareFormProps,
} from './ShareForm.component';

const TestComponent = ({ onShareMovie }: ShareFormProps): ReactElement => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <ShareForm onShareMovie={onShareMovie} />
      </form>
    </FormProvider>
  );
};

describe("SharePage submits data correctly", () => {
  const onShareMovieMock = vi.fn();
  it("renders with default props", () => {
    const { getByText } = renderWithProviders(
      <TestComponent onShareMovie={onShareMovieMock} />
    );
    expect(getByText("Share a Youtube Movie")).toBeInTheDocument();
    const urlInput = getByText("Youtube URL");
    const titleInput = getByText("Title");
    const descriptionButton = getByText("Description");
    const shareButton = getByText("Share");

    expect(titleInput).toBeInTheDocument();
    expect(urlInput).toBeInTheDocument();
    expect(descriptionButton).toBeInTheDocument();
    expect(shareButton).toHaveClass("Mui-disabled");
  });

  it("share button is disabled and un-disabled correctly", async () => {
    const { getByText } = renderWithProviders(
      <TestComponent onShareMovie={onShareMovieMock} />
    );
    const shareButton = getByText("Share");

    expect(shareButton).toHaveClass("Mui-disabled");

    // Simulate user input

    const inputMovieId = screen.getByTestId("movieId");
    const inputMovieTitle = screen.getByTestId("movieTitle");

    fireEvent.change(inputMovieId, {
      target: { value: "sdfsdf" },
    });
    fireEvent.click(inputMovieTitle);
    fireEvent.change(inputMovieTitle, { target: { value: "test url" } });

    await waitFor(() => {
      expect(shareButton).not.toHaveClass("Mui-disabled");
    });

    fireEvent.click(shareButton);
    expect(shareButton).toBeInTheDocument();
  });
});

describe("checkEmpty function", () => {
  it("should return true for undefined", () => {
    expect(checkEmpty(undefined)).toBe(true);
  });

  it("should return true for null", () => {
    expect(checkEmpty(null)).toBe(true);
  });

  it("should return true for an empty string", () => {
    expect(checkEmpty("")).toBe(true);
  });

  it("should return true for an empty array", () => {
    expect(checkEmpty([])).toBe(true);
  });

  it("should return true for an empty object", () => {
    expect(checkEmpty({})).toBe(true);
  });

  it("should return false for a non-empty string", () => {
    expect(checkEmpty("Hello")).toBe(false);
  });

  it("should return false for a non-empty array", () => {
    expect(checkEmpty([1, 2, 3])).toBe(false);
  });

  it("should return false for a non-empty object", () => {
    expect(checkEmpty({ key: "value" })).toBe(false);
  });

  it("should return false for a number", () => {
    expect(checkEmpty(42)).toBe(false);
  });

  it("should return false for a boolean", () => {
    expect(checkEmpty(true)).toBe(false);
  });

  // Add more test cases as needed to cover different value types and edge cases
});

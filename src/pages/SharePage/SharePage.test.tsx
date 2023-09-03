import {
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/dom';
import { renderWithProviders } from '@utils/index';
import { ReactElement } from 'react';
import {
  FormProvider,
  useForm,
} from 'react-hook-form';
import {
  describe,
  it,
} from 'vitest';

import { SharePage } from './SharePage.page';

const TestComponent = (): ReactElement => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <SharePage />
      </form>
    </FormProvider>
  );
};

describe("SharePage", () => {
  it("renders with default props", () => {
    const { getByText } = renderWithProviders(<TestComponent />);
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
    const { getByText } = renderWithProviders(<TestComponent />);
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

import { screen } from '@testing-library/dom';
import {
  describe,
  it,
} from 'vitest';

import { APP_INITIAL_STATE } from '../../redux/appStore/app.slice';
import {
  renderWithProviders,
} from '../../utils/renderWithProviders/renderWithProviders.util';
import HomePage from './HomePage.page';

describe("HomePage Component", () => {
  beforeEach(() => {
    renderWithProviders(<HomePage />, {
      preloadedState: {
        app: {
          ...APP_INITIAL_STATE,
          userEmail: "tuna.ung@gmail.com",
          movies: [
            {
              _id: "64f19c72090dfa22773ecdef",
              movieId: "SNES5Y-tYxM?si=Wu-8OOrzmUO1hPb3",
              movieTitle: "BINZ - OK (Official Music Video)",
              movieAuthor: "tuna.ung@gmail.com",
              movieLikes: 1,
              movieDislikes: 2,
              movieLikesBy: ["tuna.ung@gmail.com"],
              movieDislikesBy: ["tuna.ung@gmail.com", "tuna@gmail.com"],
            },
          ],
        },
      },
    });
  });

  it("renders without errors", () => {
    const authorText = screen.getByText("tuna.ung@gmail.com");
    expect(authorText).toBeInTheDocument();
  });
});

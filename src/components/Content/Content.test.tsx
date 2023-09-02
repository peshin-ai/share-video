import {
  render,
  screen,
} from '@testing-library/react';
import { Movie } from 'models/app.model';
import {
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import { Content } from './Content.component';

describe("Content", () => {
  const mockMovieContent = {
    _id: "testId",
    movieId: "testMovieId",
    movieTitle: "testMovieTitle",
    movieAuthor: "testMovieAuthor",
    movieLikes: 0,
    movieDislikes: 0,
    movieDescription: "testMovieDescription",
    movieLikesBy: [],
    movieDislikesBy: [],
  } as Movie;
  const handleLikeItem = vi.fn();
  const handleDislikeItem = vi.fn();

  it("renders correctly 2 un-voted buttons", () => {
    render(
      <Content
        {...mockMovieContent}
        onLikesMovie={handleLikeItem}
        onDislikesMovie={handleDislikeItem}
        isUserVoted={undefined}
      />
    );

    expect(screen.getByText("testMovieTitle")).toBeInTheDocument();
    expect(screen.getByTestId("unLikesVoted-button")).toBeInTheDocument();
    expect(screen.getByTestId("unDislikesVoted-button")).toBeInTheDocument();
  });

  it("renders correctly when user click dislike", () => {
    render(
      <Content
        {...mockMovieContent}
        onLikesMovie={handleLikeItem}
        onDislikesMovie={handleDislikeItem}
        isUserVoted={false}
      />
    );

    expect(screen.getByText("testMovieTitle")).toBeInTheDocument();
    expect(screen.getByTestId("unLikesVoted-button")).toBeInTheDocument();
    expect(screen.getByTestId("dislikesVoted-button")).toBeInTheDocument();
  });

  it("renders correctly when user click like", () => {
    render(
      <Content
        {...mockMovieContent}
        onLikesMovie={handleLikeItem}
        onDislikesMovie={handleDislikeItem}
        isUserVoted={true}
      />
    );

    expect(screen.getByText("testMovieTitle")).toBeInTheDocument();
    expect(screen.getByTestId("likesVoted-button")).toBeInTheDocument();
    expect(screen.getByTestId("unDislikesVoted-button")).toBeInTheDocument();
  });
});
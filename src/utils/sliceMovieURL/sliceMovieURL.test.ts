import {
  describe,
  expect,
  it,
} from 'vitest';

import {
  sliceMovieURL,
} from './sliceMovieURL.util'; // Replace 'your-module' with the actual module path

describe("sliceMovieURL", () => {
  it("it correctly slices the movie URL", () => {
    const url = "https://www.example.com/movies/12345";
    const result = sliceMovieURL(url);

    // Check that it returns the expected movieId
    expect(result).toBe("12345");
  });

  it("it handles empty URLs", () => {
    const url = "";
    const result = sliceMovieURL(url);

    // Check that it returns an empty string for empty URLs
    expect(result).toBe("");
  });
});

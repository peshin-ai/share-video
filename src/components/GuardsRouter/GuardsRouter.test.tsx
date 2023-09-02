import { render } from '@testing-library/react';
import {
  MemoryRouter,
  Route,
} from 'react-router-dom';

import { GuardsRouter } from './GuardsRouter.component';

describe("GuardsRouter", () => {
  it("renders children when accessToken is provided", () => {
    const accessToken = "testAccessToken";
    const { container } = render(
      <GuardsRouter accessToken={accessToken}>Child Component</GuardsRouter>
    );

    expect(container).toHaveTextContent("Child Component");
  });

  it("redirects to /home when accessToken is not provided", () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <GuardsRouter>
          <Route path="/share">Share Component</Route>
        </GuardsRouter>
      </MemoryRouter>
    );

    expect(window.location.pathname).toBe("/");
  });
});

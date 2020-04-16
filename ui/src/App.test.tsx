import * as React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const apiStatus = getByText(/The status of the API server/i);
  expect(apiStatus).toBeInTheDocument();
});

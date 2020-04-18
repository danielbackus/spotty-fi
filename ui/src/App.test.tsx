import "@testing-library/jest-dom";
import * as React from "react";
import ky from "ky";
import { render, screen, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders AP", () => {
  const { getByText } = render(<App />);
  const apiStatus = getByText(/The status of the API server/i);
  expect(apiStatus).toBeInTheDocument();
});

describe("App", () => {
  let mockAPI: jest.SpyInstance;
  beforeEach(() => {
    mockAPI = jest.spyOn(ky, "get");
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  const okResponse = {
    statusText: "OK",
  } as Response;
  it("reports OK API status", async () => {
    mockAPI.mockResolvedValueOnce(okResponse);
    render(<App />);
    await waitForElement(() =>
      screen.getByText(/The status of the API server is OK./)
    );
  });
  it("reports bad API status", async () => {
    mockAPI.mockImplementationOnce(() => {
      throw new Error();
    });
    render(<App />);
    await waitForElement(() =>
      screen.getByText(/The status of the API server is bad./)
    );
  });
});

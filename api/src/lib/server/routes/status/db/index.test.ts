jest.mock("@lib/db");
import { getConnection } from "@lib/db";
import { statusHandler } from ".";

describe("routes/status/db", () => {
  const mockConnection = {
    query: jest.fn(),
  };
  afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    jest.resetModules;
  });
  const mockRequest: any = {};
  const mockResponse: any = {
    end: jest.fn(),
    status: jest.fn(),
  };

  it("should get a connection and execute test query", async () => {
    (getConnection as jest.Mock).mockReturnValueOnce(mockConnection);
    await statusHandler(mockRequest, mockResponse);
    expect(mockConnection.query).toBeCalledWith("SELECT 1");
    expect(mockResponse.end).toBeCalled();
  });
  it("should have status 500 if it can't get connection", async () => {
    (getConnection as jest.Mock).mockImplementationOnce(() => {
      throw new Error();
    });
    await statusHandler(mockRequest, mockResponse);
    expect(mockResponse.status).toBeCalledWith(500);
    expect(mockConnection.query).not.toBeCalled();
    expect(mockResponse.end).toBeCalled();
  });
});

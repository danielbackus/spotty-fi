jest.mock("@lib/db");
import { connect } from "@lib/db";
jest.mock("@lib/logger");
import logger from "@lib/logger";
import { init } from ".";

describe("lib/server", () => {
  describe("init", () => {
    beforeAll(() => {
      (connect as jest.Mock).mockImplementation(Promise.resolve);
    });
    beforeEach(() => {
      jest.resetAllMocks();
    });
    afterAll(() => {
      jest.resetModules();
    });

    it("should call lib/db/connect", async () => {
      await init();
      expect(connect).toBeCalled();
      expect(logger.log).toBeCalledWith("connected to database");
    });

    it("should log error if lib/db/connect throws", async () => {
      const err = "oh no!";
      (connect as jest.Mock).mockImplementation(() => {
        throw err;
      });
      await init();
      expect(logger.error).toBeCalledWith("error connecting to database", {
        err,
      });
    });
  });
});

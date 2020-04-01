import { isEvenMinute } from "./date";

describe("isEvenMinute()", () => {
  it("returns true when the current minute is even", () => {
    Date.now = jest.fn(() => Date.parse("2020-03-25 09:00:00"));

    expect(isEvenMinute()).toBe(true);
  });

  it("returns false when the current minute is odd", () => {
    Date.now = jest.fn(() => Date.parse("2020-03-25 09:01:00"));

    expect(isEvenMinute()).toBe(false);
  });
});

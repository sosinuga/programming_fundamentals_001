const utils = require('../app/bookshop_utils');
describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });
  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});
describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});
describe("utils.makeHalfPrice", () => {
  test("returns 50 when passed 100", () => {
    expect(utils.makeHalfPrice(100)).toBe(50);
  });
})
describe("utils.countBooks", () => {
  test("returns 1 when passed ['Sapiens']", () => {
    expect(utils.countBooks(["Sapiens"])).toBe(1);
  });
})
describe("utils.isInStock", () => {
  test("returns true when passed 9", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    };
      expect(utils.isInStock(book)).toBe(true);
  });
})
describe("utils.isInStock", () => {
  test("returns false when passed 0", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 0
    };
      expect(utils.isInStock(book)).toBe(false);
  });
})
describe("utils.getTotalOrderPrice", () => {
  test("returns 4 when passed 10, 2", () => {
    
      expect(utils.getTotalOrderPrice(10,2)).toBe(4);
  });
})
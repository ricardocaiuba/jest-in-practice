"use strinct";

import { expect } from "chai";
import some from "./some";

it("some should be a function", () => {
  expect(some).to.be.a("function");
});

it("some([], (item) => item) should return false", () => {
  expect(some([], (item) => item)).to.not.be.ok;
});

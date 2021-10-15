const { expect } = require("chai");
const {
  generateTable,
  generateHeader,
  generateBody,
} = require("../src/modules/index");
const datas = [
  {
    name: {
      last: "Test",
      first: "Test",
    },
    eyeColor: "green",
    age: 88,
    email: "test@prisma.fr",
    company: "Prisma",
    phone: Math.floor(Math.random() * 1000000000),
  },
];
describe("Test generating table", function () {
  it("should return 'Aucune donnée trouvée' when no body was provided", function () {
    const headers = generateHeader;
    const table = generateTable(headers);
    expect(table).to.be.a("string").which.is.equal("Aucune donnée trouvée");
  });
  it("should return a table tag element", function () {
    const headers = generateHeader;
    const table = generateTable(headers, generateBody(datas));
    expect(table).to.be.a("string");
    expect(table.includes("<table>")).to.be.true;
  });
});

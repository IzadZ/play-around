const { expect } = require("chai");
const { generateHeader } = require("../src/modules/index");
describe("Test table header generation", function () {
  it("should return a string with multiple th tag containing the name", function () {
    const headers = generateHeader;
    expect(headers).to.be.a("string");
    expect(headers).to.be.equal(
      "<th>Nom</th><th>Prénom</th><th>Âge</th><th>Couleur des yeux</th><th>Email</th><th>Entreprise</th><th>Téléphone</th>"
    );
  });
});

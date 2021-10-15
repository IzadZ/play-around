const { expect } = require("chai");
const { generateBody } = require("../src/modules/index");
const possibleColorParams = ["green", "brown", "blue"];

const generateRandomData = (eyeColor = false) => {
  if (eyeColor) {
    return possibleColorParams[
      Math.floor(Math.random() * possibleColorParams.length)
    ];
  }
  return (Math.random() + 1).toString(36).substring(7);
};

const randomIntFromInterval = (min = 1, max = 100) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

describe("Test table body generation", function () {
  it("should return null when no data was provided", function () {
    const body = generateBody([]);
    expect(body).to.be.null;
  });

  it("should return all datas", function () {
    const datas = [];
    for (let index = 0; index < 10; index++) {
      datas.push({
        name: {
          last: generateRandomData(),
          first: generateRandomData(),
        },
        eyeColor: generateRandomData(true),
        age: randomIntFromInterval(),
        email: "test@prisma.fr",
        company: generateRandomData(),
        phone: Math.floor(Math.random() * 1000000000),
      });
    }
    const body = generateBody(datas);
    expect(body).to.be.a("string");
    for (const data of datas) {
      for (const key in data) {
        if (key === "name") {
          expect(body.includes(data[key].last)).to.be.true;
          expect(body.includes(data[key].first)).to.be.true;
          continue;
        }
        expect(body.includes(data[key])).to.be.true;
      }
    }
  });

  it("should return all datas filtered by age 20 to 25", function () {
    const datas = [];
    for (let index = 0; index < 10; index++) {
      if (index % 3 === 0) {
        datas.push({
          name: {
            last: generateRandomData(),
            first: generateRandomData(),
          },
          eyeColor: generateRandomData(true),
          age: randomIntFromInterval(20, 25),
          email: "test@prisma.fr",
          company: generateRandomData(),
          phone: Math.floor(Math.random() * 1000000000),
        });
        continue;
      }
      datas.push({
        name: {
          last: generateRandomData(),
          first: generateRandomData(),
        },
        eyeColor: generateRandomData(true),
        age: randomIntFromInterval(50, 70),
        email: "test@prisma.fr",
        company: generateRandomData(),
        phone: Math.floor(Math.random() * 1000000000),
      });
    }
    const body = generateBody(datas, { age: { min: 20, max: 25 } });
    expect(body).to.be.a("string");
    const expetedResult = datas.filter(
      (data) => data.age >= 20 && data.age <= 25
    );
    const unexpetedResult = datas.filter(
      (data) => data.age < 20 || data.age > 25
    );

    for (const unExpRes of unexpetedResult) {
      const { name } = unExpRes;
      expect(body.includes(name.last)).to.be.false;
      expect(body.includes(name.first)).to.be.false;
    }

    for (const expRes of expetedResult) {
      const { name } = expRes;
      expect(body.includes(name.last)).to.be.true;
      expect(body.includes(name.first)).to.be.true;
    }
  });
  it("should return all datas filtered by eyeColor", function () {
    const datas = [];
    for (let index = 0; index < 10; index++) {
      datas.push({
        name: {
          last: generateRandomData(),
          first: generateRandomData(),
        },
        eyeColor: generateRandomData(true),
        age: randomIntFromInterval(50, 70),
        email: "test@prisma.fr",
        company: generateRandomData(),
        phone: Math.floor(Math.random() * 1000000000),
      });
    }
    const body = generateBody(datas, { eyeColor: "green" });
    expect(body).to.be.a("string");
    const expetedResult = datas.filter((data) => data.eyeColor === "green");
    const unexpetedResult = datas.filter((data) => data.eyeColor !== "green");

    for (const unExpRes of unexpetedResult) {
      const { eyeColor } = unExpRes;
      expect(body.includes(eyeColor)).to.be.false;
      expect(body.includes(eyeColor)).to.be.false;
    }

    for (const expRes of expetedResult) {
      const { eyeColor } = expRes;
      expect(body.includes(eyeColor)).to.be.true;
      expect(body.includes(eyeColor)).to.be.true;
    }
  });
});

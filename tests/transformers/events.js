/* global describe it */
const fs = require("fs"),
    expect = require("chai").expect;

const eventsTransformer = require("../../transformers/events.js");

describe("Bitbutcket json filtered", () => {
    it("convert PR Delete", () => {
        const requestJson = JSON.parse(fs.readFileSync("./tests/transformers/json/prDelete-request.json", "utf8"));
        const resultJson = JSON.parse(fs.readFileSync("./tests/transformers/json/prDelete-result.json", "utf8"));

        expect(eventsTransformer(requestJson)).to.deep.equal(resultJson);
    });

    it("convert PR Opened", () => {
        const requestJson = JSON.parse(fs.readFileSync("./tests/transformers/json/prOpened-request.json", "utf8"));
        const resultJson = JSON.parse(fs.readFileSync("./tests/transformers/json/prOpened-result.json", "utf8"));

        expect(eventsTransformer(requestJson)).to.deep.equal(resultJson);
    });

    it("convert Repository Ref Update", () => {
        const requestJson = JSON.parse(fs.readFileSync("./tests/transformers/json/repoRefUpdate-request.json", "utf8"));
        const resultJson = JSON.parse(fs.readFileSync("./tests/transformers/json/repoRefUpdate-result.json", "utf8"));

        expect(eventsTransformer(requestJson)).to.deep.equal(resultJson);
    });
});

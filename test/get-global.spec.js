/**
* @license get-global https://github.com/cosmosio/get-global
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
var sut = require("../index"),
	chai = require("chai"),
	expect = chai.expect;

describe("GIVEN get-global AND the global object", function () {

	var thisGlobalObject = GLOBAL;

	describe("WHEN calling get-global", function () {

		var globalObject = sut();

		it("THEN returns the global object", function () {
			expect(thisGlobalObject).to.equal(globalObject);
		});

	});
});

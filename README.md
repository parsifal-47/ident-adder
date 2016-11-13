Indent-adder
========

Node module for transformation from indent-based grammar to a non indent-based.

To install package with npm:

	npm install git+https://git@github.com/parsifal-47/indent-adder.git

or

	npm install indent-adder


To convert from indent-based JavaScript to ordinary:

	var indentadder = require("indent-adder");

	console.log(indentadder.add_indents(
	"for (var i=0;i<5;i++)\n" +
	"    console.log(i);",
	"{", "}","#", "'\"", "([", ")]"));

Ident-adder
========

Node module for transformation from ident-based grammar to a non indent-based.

To install package with npm:

	npm install git+https://git@github.com/parsifal-47/ident-adder.git

or

	npm install ident-adder


To convert from ident-based JavaScript to ordinary:

	var identadder = require("ident-adder");

	console.log(identadder.add_indents(
	"for (var i=0;i<5;i++)\n" +
	"    console.log(i);",
	"{", "}","#", "'\"", "([", ")]"));

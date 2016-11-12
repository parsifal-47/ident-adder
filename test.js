var identadd = require("./index.js");

var assertEq = function (A, B) {
	var Result = identadd.add_indents(A, "__INDENT__", "__DEDENT__ ",
					"#", "'\"", "([", ")]");
	if (Result !== B) {
		console.log("Assert failed, expecting:\n" + B + "\ngot:\n" + Result);
		process.exit(1);
	}
}

assertEq("My something\n" +
	"	Something",
	"My something\n" +
"__INDENT__	Something\n" +
"__DEDENT__ ");

console.log("All tests succeeded");
var identadd = require("./index.js");

var assertEq = function (A, B) {
	var Result = identadd.add_indents(A, "__INDENT__", "__DEDENT__ ",
					"#", "'\"", "([", ")]");
	if (Result !== B) {
		console.log("Assert failed, expecting:\n" + B + "\ngot:\n" + Result);
		process.exit(1);
	}
}

assertEq("foo = f(a,b,c)\n" +
"   a+b+c, a-b-c",
"foo = f(a,b,c)\n" +
"__INDENT__   a+b+c, a-b-c\n" +
"__DEDENT__ ");

assertEq("	# Test program\n" +
"foo = f(a,b,c)\n" +
"   a+b+c, a-b-c",
"	# Test program\n" +
"foo = f(a,b,c)\n" +
"__INDENT__   a+b+c, a-b-c\n" +
"__DEDENT__ ");

assertEq("	# Test program\n" +
"foo = f(a,b,c)\n" +
"   a+b+c, 'string with bracket (', a-b-c",
"	# Test program\n" +
"foo = f(a,b,c)\n" +
"__INDENT__   a+b+c, 'string with bracket (', a-b-c\n" +
"__DEDENT__ ");

assertEq("foo = f(\n" +
"	a\n" +
"	,\n" +
"	b\n" +
"	,\n" +
"	c\n" +
"	)\n" +
"   a+b+c, a-b-c",
"foo = f(\n" +
"	a\n" +
"	,\n" +
"	b\n" +
"	,\n" +
"	c\n" +
"	)\n" +
"__INDENT__   a+b+c, a-b-c\n" +
"__DEDENT__ ");

assertEq("Main = f(N)\n" +
"    let\n" +
"       Pi = 3.1415926535897932D\n" +
"       DRN = double(N)\n" +
"       X = for J in [1..N]\n" +
"                  Rvalue = sin( (DRN * Pi) / 8.0 );\n" +
"                  Ivalue = 0.0\n" +
"       returns array of (R = Rvalue, I = Ivalue)\n" +
"    in\n" +
"       dft( N, X )",
"Main = f(N)\n" +
"__INDENT__    let\n" +
"__INDENT__       Pi = 3.1415926535897932D\n" +
"       DRN = double(N)\n" +
"       X = for J in [1..N]\n" +
"__INDENT__                  Rvalue = sin( (DRN * Pi) / 8.0 );\n" +
"                  Ivalue = 0.0\n" +
"__DEDENT__        returns array of (R = Rvalue, I = Ivalue)\n" +
"__DEDENT__     in\n" +
"__INDENT__       dft( N, X )\n" +
"__DEDENT__ __DEDENT__ ");

console.log("All tests succeeded");
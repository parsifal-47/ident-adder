exports.add_idents = function(text, ident_token, dedent_token, line_comment, commas, brackets) {
	var lines = text.split("\n");
	var idents = [0];
	var bracket = [];
	var comma = null;
	var result = "";
	
	for (var i in lines) {
		var line = lines[i];
		if (bracket.length == 0 && comma == null) {
			
		} else {
			// eat brackets
		}
	}
}
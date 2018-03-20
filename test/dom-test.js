var definition = require("../package.json");
var { dom }=require("../"+definition.main);
var tape=require("tape");



tape("empty test", function(test) {
	test.ok(true);
	test.end();
});


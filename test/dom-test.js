var jsdom = require("jsdom");
var definition = require("../package.json");
var { dom }=require("../"+definition.main);
var tape=require("tape");

var doc=new jsdom.JSDOM("<!DOCTYPE html><h1 id='one'></h1>")
global.window=doc.window;
global.document =global.window.document;

var element=document.getElementById("one")
var e=dom(element)


tape("dom() creates new element", function(test) {
	test.ok(e.e===element,
	"dom() sets base element to the specified element")
	test.end();
});
tape("dom().addClass() adds correct class", function(test) {
	e.addClass('class1')
	test.deepEqual(element.classList,["class1"],
	"addClass() adds classes to element")
	
	test.end();
});
tape("dom().removeClass() adds correct class", function(test) {
	e.removeClass('class1')
	test.deepEqual(element.classList,[],
	"removeClass() removes classes to element")
	test.end();
});
tape("dom().hasClass() adds correct class", function(test) {
	e.addClass('class1b')
	test.ok(!e.hasClass('class1') && e.hasClass('class1b') ,
	"hasClass() checks if class exist")
	test.end();
});
tape("dom().replaceClass() replaces class", function(test) {
	e.replaceClass('class1b',"class1")
	test.ok(e.hasClass('class1') && !e.hasClass('class1b') ,
	"replaceClass() replaces classes")
	test.end();
});
tape("dom().toggleClass() toggles class", function(test) {
	e.toggleClass('class1b')
	test.ok(e.hasClass('class1b') && (e.toggleClass('class1b',false),!e.hasClass('class1b')) ,
	"toggleClass() toggles classes")
	test.end();
});

tape("dom().attr() sets attributevalues", function(test) {
	e.attr('class1b',true)
	test.ok(element.getAttribute("class1b")==="true" ,
	"attr() sets correct values")
	test.end();
});
tape("dom().parent() gets parentnodes", function(test) {
	test.ok(e.parents().length===4  && e.parents()[0].e===document,
	"parent() gets parentnodes")
	test.end();
});
tape("dom().isVisible() returns boolean", function(test) {
	test.ok(e.isVisible()===false  && dom(document).isVisible,
	"isVisible() returns boolean")
	test.end();
});
tape("dom().getDimensions() returns dimensions", function(test) {
	test.deepEqual(e.getDimensions(),{ bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 },
	"getDimensions() returns dimensions")
	test.end();
});





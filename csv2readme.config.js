var csv2readme = require('csv2readme');
const definition = require("./package.json");

var options={
	input:{
		base:"../../helpData/csv/base.csv",
		functionParam:"../../helpData/csv/functionParameters.csv",
		classDef:"../../helpData/csv/classDefinition.csv"
	},
	moduleName:"xassist-dom",
	globalTOC:false,
	header:{
		title:"@xassist/xassist-dom",
		explanation:["Basic helperfunctions for DOM-elements"].join("\r\n")
	},
	headerFiles:["../../helpData/markdown/installationModule.md"],
	includeDependencies:true,
	includeLicense:true,
	footerFiles:[/*"dependencies.md","src/license.md"*/],
	subTitle:"API",
	output:{
		file:"README.md"
	},
	baseLevel:3,
	headerTemplates:{
		moduleName:"xassist-dom",
		moduleUrl:"https://raw.githubusercontent.com/GregBee2/xassist-csv/master/dist/xAssist-dom.min.js",
		libraryName:"xassist",
		libraryUrl:"https://github.com/GregBee2/xassist",
		moduleTest:"dom()"
	},
	footerTemplates:{
		/*license:definition.license,
		licenseUrl:"https://choosealicense.com/licenses/"+definition.license.toLowerCase()*/
	}
};
csv2readme.init(options);

	
	
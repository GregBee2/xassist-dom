# @xassist/xassist-dom
Basic helperfunctions for DOM-elements
## Installation

If you use [NPM](https://www.npmjs.com/), you can install the module via `npm install xassist-dom`. Otherwise, you can download the latest [minified file](https://raw.githubusercontent.com/GregBee2/xassist-csv/master/dist/xAssist-dom.min.js). Be aware any dependencies are not installed by default; you should consider downloading them yourself.
If you want, you can install the complete library from github [xassist](https://github.com/GregBee2/xassist), this includes all dependencies you may need.

The module uses [UMD](https://github.com/umdjs/umd) and supports [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) and vanilla environments. Using vanilla: the `xa`global is exported:

```html
<script>
xa.dom()
</script>
```



## API
### dom()

The base function object() creates a new Class instance which gives access to some helper Object-functions
```js
dom(/*element::HTMLElement*/)
```
note that the new- keyword should not be used to create the class-instance.
#### Parameters for dom()
`dom()` takes 1 parameters:
- **element** [`HTMLElement`]:an Element on which we will execute the underlying methods
#### Result for dom()
`dom()` returns a new class instance of the Class `XaDOMelement`
```js
dom(a).constructor.name==="XaDOMelement"
```
`XaDOMelement` returns 9 method:
- `addClass()`: adds a classname to the current element
- `removeClass()`: removes a classname from the current element
- `hasClass()`: checks if the element has a specified classname
- `replaceClass()`: replaces a certain class with another
- `toggleClass()`: toggle the specified classname
- `attr()`: sets an attribute to a certain value
- `parents()`: returns all parents of specified element
- `isVisible()`: checks if the current element is visible
- `getDimensions()`: gets the dimensions of the element, evne when it's hidden

`XaDOMelement` has 1 own attributes:
- `e`[`HTMLElement`]:the current base DOM element, provided via the simple factory-function `dom()`
#### Example for dom()
```js
dom(document.getElementById('test'))
```
### dom().addClass()

adds a classname to the current element
```js
dom(elm).addClass(className::String)
```
#### Parameters for dom().addClass()
`dom().addClass()` takes 1 parameters:
- **className** [`String`]:the name of the class we are looking for
#### Result for dom().addClass()
this method returns the original `XaDOMElement`, so it can be used for currying
### dom().removeClass()

removes a classname from the current element
```js
dom(elm).removeClass(className::String)
```
#### Parameters for dom().removeClass()
`dom().removeClass()` takes 1 parameters:
- **className** [`String`]:the name of the class we are looking for
#### Result for dom().removeClass()
this method returns the original `XaDOMElement`, so it can be used for currying
### dom().hasClass()

checks if the element has a specified classname
```js
dom(elm).hasClass(className::String)
```
#### Parameters for dom().hasClass()
`dom().hasClass()` takes 1 parameters:
- **className** [`String`]:the name of the class we are looking for
#### Result for dom().hasClass()
this method returns a Boolean indicating if the class exists on the current element
### dom().replaceClass()

replaces a certain class with another
```js
dom(elm).replaceClass(className::String,newClassName::String)
```
#### Parameters for dom().replaceClass()
`dom().replaceClass()` takes 1 parameters:
- **className** [`String`]:the name of the class we are looking for
#### Result for dom().replaceClass()
this method returns the original `XaDOMElement`, so it can be used for currying
### dom().toggleClass()

toggle the specified classname
```js
dom(elm).toggleClass(className::String [,toggle::Boolean])
```
#### Parameters for dom().toggleClass()
`dom().toggleClass()` takes 2 parameters:
- **className** [`String`]:the name of the class we are looking for
- *toggle* [`Boolean`,defaults to: `!this.hasClass(className)`]:a boolean indicating if we should add(true) or remove (false) the `className`
#### Result for dom().toggleClass()
this method returns the original `XaDOMElement`, so it can be used for currying
### dom().attr()

sets an attribute to a certain value
```js
dom(elm).attr(attrName::String,value)
```
#### Parameters for dom().attr()
`dom().attr()` takes 2 parameters:
- **attrName** [*any datatype*]:the name of the attribute we want to set
- **value** [*any datatype*]:the value of the attribute we need.
#### Result for dom().attr()
this method returns the original `XaDOMElement`, so it can be used for currying
### dom().parents()

returns all parents of specified element
```js
dom(elm).parents()
```
`dom().parents()` requires no parameters.
#### Result for dom().parents()
this method returns an Array with all parents of the current element
### dom().isVisible()

checks if the current element is visible
```js
dom(elm).isVisible()
```
`dom().isVisible()` requires no parameters.
#### Result for dom().isVisible()
this method returns a Boolean indicating the visibility of the element
### dom().getDimensions()

gets the dimensions of the element, evne when it's hidden
```js
dom(elm).getDimensions()
```
`dom().getDimensions()` requires no parameters.
#### Result for dom().getDimensions()
this method returns `BoundingClientRect-object`
## DevDependencies
- [csv2readme](https://github.com/GregBee2/csv2readme#readme): read csv file with fixed format and parse a readme markdown file
- [jsdom](https://github.com/jsdom/jsdom#readme): A JavaScript implementation of many web standards
- [rimraf](https://github.com/isaacs/rimraf#readme): A deep deletion module for node (like `rm -rf`)
- [rollup](https://github.com/rollup/rollup): Next-generation ES6 module bundler
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers
## License

This module is licensed under the terms of [GPL-3.0](https://choosealicense.com/licenses/gpl-3.0).

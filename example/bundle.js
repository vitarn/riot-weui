/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _riot = __webpack_require__(6);
	
	var _riot2 = _interopRequireDefault(_riot);
	
	__webpack_require__(8);
	
	__webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_riot2.default.mount('*');

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./weui.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./weui.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * WeUI v0.2.2 (https://github.com/weui/weui)\n * Copyright 2015 Tencent, Inc.\n * Licensed under the MIT license\n */\nhtml {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  line-height: 1.6;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\na img {\n  border: 0;\n}\na {\n  text-decoration: none;\n}\n@font-face {\n  font-weight: normal;\n  font-style: normal;\n  font-family: \"weui\";\n  src: url('data:application/octet-stream;base64,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') format('truetype'), url('data:application/octet-stream;base64,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') format('woff'), url('data:application/octet-stream;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PiAKPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIiA+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CiAgPGZvbnQgaWQ9IndldWkiIGhvcml6LWFkdi14PSIxMDAwIj4KICAgIDxmb250LWZhY2UgZm9udC1mYW1pbHk9IndldWkiCiAgICAgIHVuaXRzLXBlci1lbT0iMTAwMCIgYXNjZW50PSIxMDAwIgogICAgICBkZXNjZW50PSIwIiAvPgogICAgPG1pc3NpbmctZ2x5cGggaG9yaXotYWR2LXg9IjAiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iY2lyY2xlIgogICAgICB1bmljb2RlPSImI3hFQTAxOyIKICAgICAgaG9yaXotYWR2LXg9IjEwMDAiIGQ9IiBNNTAwLjU1MyA5NDAuODQ4QzI1Ni42NzkgOTQwLjg0OCA1OS4wMDEgNzQzLjE2MDAwMDAwMDAwMDEgNTkuMDAxIDQ5OS4yODZDNTkuMDAxIDI1NS40NTAwMDAwMDAwMDAxIDI1Ni42NzkgNTcuNzMzOTk5OTk5OTk5OSA1MDAuNTUzIDU3LjczMzk5OTk5OTk5OTlTOTQyLjEwNCAyNTUuNDUgOTQyLjEwNCA0OTkuMjg1OTk5OTk5OTk5OUM5NDIuMTA0IDc0My4xNiA3NDQuNDI3IDk0MC44NDggNTAwLjU1MzAwMDAwMDAwMDEgOTQwLjg0OHpNNTAwLjU1MyA5MS43NDI5OTk5OTk5OTk5QzI3Ny44NjUgOTEuNzQyOTk5OTk5OTk5OSA5Ny4zOTcgMjcyLjI2NyA5Ny4zOTcgNDk0Ljg4OUM5Ny4zOTcgNzE3LjU1OSAyNzcuODY1IDg5OC4wNTUgNTAwLjU1MyA4OTguMDU1QzcyMy4yMDMgODk4LjA1NSA5MDMuNzA5IDcxNy41NTkgOTAzLjcwOSA0OTQuODg5QzkwMy43MDkgMjcyLjI2Nzk5OTk5OTk5OTkgNzIzLjIwMzAwMDAwMDAwMDEgOTEuNzQyOTk5OTk5OTk5OSA1MDAuNTUzMDAwMDAwMDAwMSA5MS43NDI5OTk5OTk5OTk5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJkb3dubG9hZCIKICAgICAgdW5pY29kZT0iJiN4RUEwMjsiCiAgICAgIGhvcml6LWFkdi14PSIxMDAwIiBkPSIgTTQ5NC40NzUgOTQ2LjY4QzI1My4zMDUwMDAwMDAwMDAxIDk0Ni42OCA1My4zMjEgNzQ2LjY5NiA1My4zMjEgNDk0LjQ4NEM1My4zMjEgMjUzLjMwNSAyNTMuMzA1MDAwMDAwMDAwMSA1My4zMjA5OTk5OTk5OTk5IDQ5NC40NzUgNTMuMzIwOTk5OTk5OTk5OUM3NDYuNjk2IDUzLjMyMDk5OTk5OTk5OTkgOTQ2LjY4IDI1My4zMDUgOTQ2LjY4IDQ5NC40ODM5OTk5OTk5OTk5Qzk0Ni42OCA3NDYuNjk0OTk5OTk5OTk5OSA3NDYuNjk1IDk0Ni42OCA0OTQuNDc1MDAwMDAwMDAwMSA5NDYuNjh6TTY1MS45ODMwMDAwMDAwMDAxIDQxOC41MDM5OTk5OTk5OTk5TDUzNC4xMzMgMjY1LjI2NTk5OTk5OTk5OTlDNTE1LjI4NCAyNDAuNzQ2OTk5OTk5OTk5OSA0ODQuNzY4IDI0MC42NjQ5OTk5OTk5OTk5IDQ2NS44NjUgMjY1LjIzODk5OTk5OTk5OThMMzQ4LjAxNSA0MTguNTE4OTk5OTk5OTk5OEMzMjkuMTY5IDQ0My4wMzY5OTk5OTk5OTk4IDMzOC44OTMgNDYyLjk5OTk5OTk5OTk5OTggMzY5LjYwOSA0NjIuOTk5OTk5OTk5OTk5OEg0NjNWNzQxLjk1MDk5OTk5OTk5OThDNDYzIDc1Mi4yMjg5OTk5OTk5OTk4IDQ3MS4xMTkgNzYwLjk5OTk5OTk5OTk5OTggNDgxLjM4OSA3NjAuOTk5OTk5OTk5OTk5OEg1MTguNjEyQzUyOC44ODIgNzYwLjk5OTk5OTk5OTk5OTggNTM3LjAwMSA3NTIuMjI4OTk5OTk5OTk5OCA1MzcuMDAxIDc0MS45NTA5OTk5OTk5OTk4VjQ2Mi45OTk5OTk5OTk5OTk4SDYzMC4zOTE5OTk5OTk5OTk5QzY2MS4xOCA0NjIuOTk5OTk5OTk5OTk5OCA2NzAuODg2IDQ0My4wNzc5OTk5OTk5OTk4IDY1MS45ODMgNDE4LjUwMzk5OTk5OTk5OTh6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImluZm8iCiAgICAgIHVuaWNvZGU9IiYjeEVBMDM7IgogICAgICBob3Jpei1hZHYteD0iMTAwMCIgZD0iIE00OTUuNTY4IDkzOUMyNTcuOTkgOTM5IDYxIDc0Mi4wMSA2MSA0OTMuNTY4QzYxIDI1NS45OSAyNTcuOTkgNTkgNDk1LjU2OCA1OUM3NDQuMDEgNTkgOTQxIDI1NS45OSA5NDEgNDkzLjU2OEM5NDEgNzQyLjAxIDc0NC4wMSA5MzkgNDk1LjU2OCA5Mzl6TTUzMiAyODMuMDIxQzUzMiAyNzMuNTA3OTk5OTk5OTk5OSA1MjQuMDYyIDI2NiA1MTQuNTYxIDI2Nkg0ODcuNDQyQzQ3Ny45MiAyNjYgNDcwLjAwMSAyNzMuNTY4IDQ3MC4wMDEgMjgzLjAyMVY1NjQuOTk2QzQ3MC4wMDEgNTY5Ljg1NyA0NzQuMTQ3IDU3NCA0NzkuMDI2IDU3NEg1MjIuOTc1QzUyNy44NDcgNTc0IDUzMiA1NjkuODQ4OTk5OTk5OTk5OSA1MzIgNTY0Ljk5NlYyODMuMDIxek01MDEgNjIyLjE5OTk5OTk5OTk5OTlDNDc2LjY5OSA2MjIuMTk5OTk5OTk5OTk5OSA0NTcgNjQxLjg5ODk5OTk5OTk5OTkgNDU3IDY2Ni4xOTk5OTk5OTk5OTk5UzQ3Ni42OTkgNzEwLjE5OTk5OTk5OTk5OTkgNTAxIDcxMC4xOTk5OTk5OTk5OTk5QzUyNS4zMDMgNzEwLjE5OTk5OTk5OTk5OTkgNTQ1IDY5MC41MDEgNTQ1IDY2Ni4xOTk5OTk5OTk5OTk5UzUyNS4zMDMgNjIyLjE5OTk5OTk5OTk5OTkgNTAxIDYyMi4xOTk5OTk5OTk5OTk5eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJzYWZlX3N1Y2Nlc3MiCiAgICAgIHVuaWNvZGU9IiYjeEVBMDQ7IgogICAgICBob3Jpei1hZHYteD0iMTAwMCIgZD0iIE01MDAgOTYyQzMyNy4xMDYgOTIyLjc1MyAyMDEuMTA1IDg3OS40NjM5OTk5OTk5OTk5IDg2LjYzMiA4NDMuMTk5MDAwMDAwMDAwMUM4Ni42MzIgNzIyLjYwOCA4Ni43OTMgNjI3LjA5MzAwMDAwMDAwMDEgODYuNzkzIDUyNi40MDAwMDAwMDAwMDAxQzg2Ljc5MyAyNDIuNzEzIDMxOC4zNiA4Ni42NTAwMDAwMDAwMDAxIDUwMCAzOEM2ODEuNjQyIDg2LjY1IDkxMy4yMDcgMjQyLjcxMyA5MTMuMjA3IDUyNi40QzkxMy4yMDcgNjI3LjA5MiA5MTMuMzY4IDcyMi42MDggOTEzLjM2OCA4NDMuMTk5Qzc5OC44OTUgODc5LjQ2Mzk5OTk5OTk5OTkgNjcyLjg5NCA5MjIuNzUzIDQ5OS45OTk5OTk5OTk5OTk5IDk2MnpNNzUxLjQ5OCA2NDAuOTU2TDQyOS45MjEwMDAwMDAwMDAxIDMyNC40OEM0MjguMDA1MDAwMDAwMDAwMSAzMjIuNTk0MDAwMDAwMDAwMSA0MjQuOTIwMDAwMDAwMDAwMSAzMjIuNjU2MDAwMDAwMDAwMSA0MjMuMDcwMDAwMDAwMDAwMSAzMjQuNTY1MDAwMDAwMDAwMUwyNzQuODEzMDAwMDAwMDAwMSA0NzguMDA3MDAwMDAwMDAwMUMyNzIuOTQ2MDAwMDAwMDAwMSA0NzkuOTQwMDAwMDAwMDAwMSAyNzIuNjkyMDAwMDAwMDAwMSA0ODMuMjIxMDAwMDAwMDAwMSAyNzQuMzMxIDQ4NS40NTMwMDAwMDAwMDAxTDI5NC42OTgwMDAwMDAwMDAxIDUxMy4xNjUwMDAwMDAwMDAxQzI5Ni4yOTkwMDAwMDAwMDAxIDUxNS4zNDUgMjk5LjMyMjAwMDAwMDAwMDEgNTE1Ljc4NjAwMDAwMDAwMDEgMzAxLjQ1NDAwMDAwMDAwMDEgNTE0LjE1Mkw0MjIuNjA4MDAwMDAwMDAwMSA0MjEuMjk3MDAwMDAwMDAwMkM0MjQuNzM4MDAwMDAwMDAwMSA0MTkuNjYzMDAwMDAwMDAwMSA0MjguMTY1MDAwMDAwMDAwMSA0MTkuNzU4MDAwMDAwMDAwMiA0MzAuMTc2MDAwMDAwMDAwMSA0MjEuNDM1MDAwMDAwMDAwMkw3MjUuMDgzMDAwMDAwMDAwMSA2NjcuMTIwMDAwMDAwMDAwMUM3MjcuMTM2MDAwMDAwMDAwMSA2NjguODI1MDAwMDAwMDAwMiA3MzAuMzU0IDY2OC42NzMwMDAwMDAwMDAyIDczMi4yNzMwMDAwMDAwMDAxIDY2Ni43NzgwMDAwMDAwMDAyTDc1MS40ODkwMDAwMDAwMDAxIDY0Ny44MDAwMDAwMDAwMDAyQzc1My40MDYwMDAwMDAwMDAyIDY0NS45MDQwMDAwMDAwMDAyIDc1My40MjYwMDAwMDAwMDAyIDY0Mi44NTUwMDAwMDAwMDAyIDc1MS40OTgwMDAwMDAwMDAyIDY0MC45NTYwMDAwMDAwMDAxeiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJzYWZlX3dhcm4iCiAgICAgIHVuaWNvZGU9IiYjeEVBMDU7IgogICAgICBob3Jpei1hZHYteD0iMTAwMCIgZD0iIE01MDEgOTQzLjcwNkMzMzQuOTUyIDkwNi4wMTMgMjEzLjk0MSA4NjQuNDM4IDEwNCA4MjkuNjA5QzEwNCA3MTMuNzkzIDEwNC4xNTUgNjIyLjA2IDEwNC4xNTUgNTI1LjM1NUMxMDQuMTU1IDI1Mi45MDEwMDAwMDAwMDAxIDMyNi41NTIgMTAzLjAxOCA1MDEgNTYuMjkzQzY3NS40NDQgMTAzLjAxOCA4OTcuODQ1IDI1Mi45IDg5Ny44NDUgNTI1LjM1NUM4OTcuODQ1IDYyMi4wNiA4OTggNzEzLjc5MyA4OTggODI5LjYwOUM3ODguMDU5IDg2NC40MzgwMDAwMDAwMDAxIDY2Ny4wNDggOTA2LjAxMyA1MDEgOTQzLjcwNnpNNDc3LjY3NCA2NjhINTI0LjMyNkM1MjkuNTA3MDAwMDAwMDAwMSA2NjggNTMzLjQ5OCA2NjMuOTExMDAwMDAwMDAwMSA1MzMuMjU2IDY1OC43ODRMNTIzLjAyMSA0NDIuOUM1MjIuODk3OTk5OTk5OTk5OSA0NDAuMzMyIDUyMC43MDggNDM4IDUxOC4xMzEgNDM4SDQ4My44NjdDNDgxLjMwNiA0MzggNDc5LjEwMyA0NDAuMzQ1MDAwMDAwMDAwMSA0NzguOTggNDQyLjkzNjAwMDAwMDAwMDFMNDY4Ljc0NDk5OTk5OTk5OTkgNjU4LjY2NEM0NjguNTA0IDY2My43NjcgNDcyLjQ5OTk5OTk5OTk5OTkgNjY4IDQ3Ny42NzM5OTk5OTk5OTk5IDY2OHpNNTAxIDMzMS44NTg5OTk5OTk5OTk5QzQ4Mi45NDIgMzMxLjg1ODk5OTk5OTk5OTkgNDY4LjMwNiAzNDYuNTQ2IDQ2OC4zMDYgMzY0LjY2Njk5OTk5OTk5OTlTNDgyLjk0MyAzOTcuNDc0OTk5OTk5OTk5OSA1MDEgMzk3LjQ3NDk5OTk5OTk5OTlTNTMzLjY5NCAzODIuNzg3OTk5OTk5OTk5OSA1MzMuNjk0IDM2NC42NjY5OTk5OTk5OTk5UzUxOS4wNTggMzMxLjg1ODk5OTk5OTk5OTkgNTAwLjk5OTk5OTk5OTk5OTkgMzMxLjg1ODk5OTk5OTk5OTl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InN1Y2Nlc3MiCiAgICAgIHVuaWNvZGU9IiYjeEVBMDY7IgogICAgICBob3Jpei1hZHYteD0iMTAwMCIgZD0iIE0yODguMzgyIDQ1NC44ODhDMjgwLjY5NyA0NjIuODIyIDI3OS44MjUgNDc2LjU1OTAwMDAwMDAwMDEgMjg2LjE1MSA0ODUuMTU2MDAwMDAwMDAwMUwyODkuMjU1IDQ4OS4zNjcwMDAwMDAwMDAxQzI5NS42OTcgNDk4LjEzODAwMDAwMDAwMDEgMzA3LjkyMjAwMDAwMDAwMDEgNDk5Ljg4NDAwMDAwMDAwMDEgMzE2LjYzNCA0OTMuMjEwMDAwMDAwMDAwMUw0MTUuNDIgNDE3LjQ5NTAwMDAwMDAwMDFDNDI0LjA5MyA0MTAuODQxMDAwMDAwMDAwMSA0MzguMDg0IDQxMS4yNDcwMDAwMDAwMDAxIDQ0Ni4yOTEgNDE4LjA3ODAwMDAwMDAwMDFMNzIxLjQ3NyA2NDcuMzM0MDAwMDAwMDAwMUM3MjkuODM4OTk5OTk5OTk5OSA2NTQuMzAwMDAwMDAwMDAwMSA3NDMuMDM0IDY1My42MjIwMDAwMDAwMDAxIDc1MC43NzUgNjQ1Ljk3NjAwMDAwMDAwMDFMNzQ4LjkxMyA2NDcuODJDNzU2LjczNCA2NDAuMDk3IDc1Ni43MzQgNjI3LjYwMTAwMDAwMDAwMDEgNzQ4Ljc5OCA2MTkuODAxTDQ0NS4zNzggMzIxLjE5MkM0MzcuNSAzMTMuNDMxMDAwMDAwMDAwMSA0MjQuOTg1IDMxMy41MDgwMDAwMDAwMDAxIDQxNy4yMjMgMzIxLjU0MjAwMDAwMDAwMDFMMjg4LjM4MiA0NTQuODg4ek05NTcgNDk0LjM1MzAwMDAwMDAwMDFDOTU3IDc1Mi40MDUwMDAwMDAwMDAxIDc1Mi40MDUgOTU3IDQ5NC4zNTMgOTU3QzI0Ny41OTUgOTU3IDQzIDc1Mi40MDUwMDAwMDAwMDAxIDQzIDQ5NC4zNTMwMDAwMDAwMDAxQzQzIDI0Ny41OTUwMDAwMDAwMDAxIDI0Ny41OTUgNDMgNDk0LjM1MyA0M0M3NTIuNDA1IDQzIDk1NyAyNDcuNTk1MDAwMDAwMDAwMSA5NTcgNDk0LjM1M3oiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ic3VjY2Vzc19jaXJjbGUiCiAgICAgIHVuaWNvZGU9IiYjeEVBMDc7IgogICAgICBob3Jpei1hZHYteD0iMTAwMCIgZD0iIE01MDAuNTUzIDk0MC44NDhDMjU2LjY3OSA5NDAuODQ4IDU5LjAwMSA3NDMuMTYwMDAwMDAwMDAwMSA1OS4wMDEgNDk5LjI4NkM1OS4wMDEgMjU1LjQ1MDAwMDAwMDAwMDEgMjU2LjY3OSA1Ny43MzM5OTk5OTk5OTk5IDUwMC41NTMgNTcuNzMzOTk5OTk5OTk5OVM5NDIuMTA0IDI1NS40NSA5NDIuMTA0IDQ5OS4yODU5OTk5OTk5OTk5Qzk0Mi4xMDQgNzQzLjE2IDc0NC40MjcgOTQwLjg0OCA1MDAuNTUzMDAwMDAwMDAwMSA5NDAuODQ4ek01MDAuNTUzIDkxLjc0Mjk5OTk5OTk5OTlDMjc3Ljg2NSA5MS43NDI5OTk5OTk5OTk5IDk3LjM5NyAyNzIuMjY3IDk3LjM5NyA0OTQuODg5Qzk3LjM5NyA3MTcuNTU5IDI3Ny44NjUgODk4LjA1NSA1MDAuNTUzIDg5OC4wNTVDNzIzLjIwMyA4OTguMDU1IDkwMy43MDkgNzE3LjU1OSA5MDMuNzA5IDQ5NC44ODlDOTAzLjcwOSAyNzIuMjY3OTk5OTk5OTk5OSA3MjMuMjAzMDAwMDAwMDAwMSA5MS43NDI5OTk5OTk5OTk5IDUwMC41NTMwMDAwMDAwMDAxIDkxLjc0Mjk5OTk5OTk5OTl6TTcxNC41NCA2NDIuMzg3OTk5OTk5OTk5OUw0NDguNTkzIDQyMC44MjdDNDQwLjY2IDQxNC4yMjYgNDI3LjE0IDQxMy44MzMgNDE4Ljc1OCA0MjAuMjY0TDMyMy4yODkgNDkzLjQzNkMzMTQuODY5IDQ5OS44ODcwMDAwMDAwMDAxIDMwMy4wNTYgNDk4LjIgMjk2LjgyOSA0ODkuNzIzTDI5My44MjkgNDg1LjY1NEMyODcuNzE2IDQ3Ny4zNDcgMjg4LjU1OTAwMDAwMDAwMDEgNDY0LjA3MDAwMDAwMDAwMDEgMjk1Ljk4NSA0NTYuNEw0MjAuNTAyIDMyNy41MzRDNDI4LjAwMyAzMTkuNzcgNDQwLjA5OCAzMTkuNjk1IDQ0Ny43MTEgMzI3LjE5NjAwMDAwMDAwMDFMNzQwLjk0MyA2MTUuNzc3Qzc0OC4yOTcgNjIzLjAwNjAwMDAwMDAwMDEgNzQ4LjU3OTk5OTk5OTk5OTkgNjM0LjM5NCA3NDEuOTMgNjQxLjkwMDAwMDAwMDAwMDFDNzM0LjM1ODk5OTk5OTk5OTkgNjQ4LjQ4NSA3MjIuMzAzIDY0OC44NTMwMDAwMDAwMDAxIDcxNC41NCA2NDIuMzg4ek03NDEuMDU2IDY0Mi44NTZDNzQxLjM2OCA2NDIuNTQ5IDc0MS42NDYwMDAwMDAwMDAxIDY0Mi4yMjIgNzQxLjkzMSA2NDEuOUM3NDIuMjQzIDY0MS42Mjg5OTk5OTk5OTk5IDc0Mi41NjAwMDAwMDAwMDAxIDY0MS4zNjYgNzQyLjg1NiA2NDEuMDc0TDc0MS4wNTYgNjQyLjg1NnoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ic3VjY2Vzc19ub19jaXJjbGUiCiAgICAgIHVuaWNvZGU9IiYjeEVBMDg7IgogICAgICBob3Jpei1hZHYteD0iMTAwMCIgZD0iIE02MC45NTUgNDM1LjIxMUM0Ny4yMTUgNDQ5LjE2IDQzLjIyOCA0NzUuMDMxMDAwMDAwMDAwMSA1MS44NjUgNDkyLjUxMkw1Ny40OTQgNTAzLjk3OUM2Ni4yMzQgNTIxLjY3IDg2LjIzIDUyNi42NjggMTAyLjE3NCA1MTUuMDk4TDMwNS4wMTYgMzY4LjAxNkMzMjAuOTk1IDM1Ni40NzkgMzQ2LjM3NSAzNTcuMzU0IDM2MS40NDQgMzY5Ljc5OUw5MDIuMDc3IDgxNS42MTg5OTk5OTk5OTk5QzkxNy4yODYgODI4LjE3MiA5NDAuOTg5IDgyNi44MDcgOTU0LjY1OSA4MTIuOTI4TDk0MS44MjkgODI1Ljk2ODk5OTk5OTk5OTlDOTU1LjYzOCA4MTEuOTQ5IDk1NS42MDIgNzg5LjExODk5OTk5OTk5OTkgOTQxLjY1MyA3NzQuOTYxTDM1OS4xMzQ5OTk5OTk5OTk5IDE4My43MzgwMDAwMDAwMDAxQzM0NS4xODU5OTk5OTk5OTk5IDE2OS42MTMwMDAwMDAwMDAxIDMyMi42MDE5OTk5OTk5OTk5IDE2OS42MTMwMDAwMDAwMDAxIDMwOS4wMzY5OTk5OTk5OTk5IDE4My4zODhMNjAuOTU0OTk5OTk5OTk5OSA0MzUuMjExeiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ3YWl0aW5nIgogICAgICB1bmljb2RlPSImI3hFQTA5OyIKICAgICAgaG9yaXotYWR2LXg9IjEwMDAiIGQ9IiBNNDk0LjQyMSA5NTJDMjUwLjM2MyA5NTIgNDggNzQ5LjYzOSA0OCA0OTQuNDIxQzQ4IDI1MC4zNjIgMjUwLjM2MyA0OCA0OTQuNDIxIDQ4Qzc0OS42MzggNDggOTUyIDI1MC4zNjIgOTUyIDQ5NC40MjFDOTUyIDc0OS42MzkgNzQ5LjYzOCA5NTIgNDk0LjQyMSA5NTJ6TTc0OC42IDQwMC41NjEwMDAwMDAwMDAxSDQ1NC44VjczNS4wNEg1MDBWNDQ1Ljc2SDc0OC42VjQwMC41NjEwMDAwMDAwMDAxeiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ3YWl0aW5nX2NpcmNsZSIKICAgICAgdW5pY29kZT0iJiN4RUEwQTsiCiAgICAgIGhvcml6LWFkdi14PSIxMDAwIiBkPSIgTTc0MS4wNTYgNjQyLjg1NkM3NDEuMzY4IDY0Mi41NDkgNzQxLjY0NjAwMDAwMDAwMDEgNjQyLjIyMiA3NDEuOTMxIDY0MS45Qzc0Mi4yNDMgNjQxLjYyODk5OTk5OTk5OTkgNzQyLjU2MDAwMDAwMDAwMDEgNjQxLjM2NiA3NDIuODU2IDY0MS4wNzRMNzQxLjA1NiA2NDIuODU2eiBNNTAwLjU1MyA5NDAuODQ4QzI1Ni42NzkgOTQwLjg0OCA1OS4wMDEgNzQzLjE2MDAwMDAwMDAwMDEgNTkuMDAxIDQ5OS4yODZDNTkuMDAxIDI1NS40NTAwMDAwMDAwMDAxIDI1Ni42NzkgNTcuNzMzOTk5OTk5OTk5OSA1MDAuNTUzIDU3LjczMzk5OTk5OTk5OTlTOTQyLjEwNCAyNTUuNDUgOTQyLjEwNCA0OTkuMjg1OTk5OTk5OTk5OUM5NDIuMTA0IDc0My4xNiA3NDQuNDI3IDk0MC44NDggNTAwLjU1MzAwMDAwMDAwMDEgOTQwLjg0OHpNNTAwLjU1MyA5MS43NDI5OTk5OTk5OTk5QzI3Ny44NjUgOTEuNzQyOTk5OTk5OTk5OSA5Ny4zOTcgMjcyLjI2NyA5Ny4zOTcgNDk0Ljg4OUM5Ny4zOTcgNzE3LjU1OSAyNzcuODY1IDg5OC4wNTUgNTAwLjU1MyA4OTguMDU1QzcyMy4yMDMgODk4LjA1NSA5MDMuNzA5IDcxNy41NTkgOTAzLjcwOSA0OTQuODg5QzkwMy43MDkgMjcyLjI2Nzk5OTk5OTk5OTkgNzIzLjIwMzAwMDAwMDAwMDEgOTEuNzQyOTk5OTk5OTk5OSA1MDAuNTUzMDAwMDAwMDAwMSA5MS43NDI5OTk5OTk5OTk5ek00NTUgNjUzSDQxOVY0MDBINjcyVjQzNkg0NTV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9Indhcm4iCiAgICAgIHVuaWNvZGU9IiYjeEVBMEI7IgogICAgICBob3Jpei1hZHYteD0iMTAwMCIgZD0iIE00OTQuMjg1IDk2M0MyNDQuMjg4IDk2MyAzNyA3NTUuNzEyIDM3IDQ5NC4yODVDMzcgMjQ0LjI4NzAwMDAwMDAwMDEgMjQ0LjI4OCAzNyA0OTQuMjg1IDM3Qzc1NS43MTMgMzcgOTYzIDI0NC4yODcwMDAwMDAwMDAxIDk2MyA0OTQuMjg1Qzk2MyA3NTUuNzEyIDc1NS43MTMgOTYzIDQ5NC4yODUgOTYzek00NzIuNzYzIDcyN0g1MjcuMjM4QzUzNy4yNTggNzI3IDU0NS4wMTYwMDAwMDAwMDAxIDcxOC44NTMwMDAwMDAwMDAxIDU0NC41NTEgNzA4LjgyN0w1MzAuNjkyIDQwOC4zMzUwMDAwMDAwMDAxQzUzMC40NTMgNDAzLjIxMiA1MjYuMTE3IDM5OCA1MjEuMDAzIDM5OEg0NzguOTk5QzQ3My44OTggMzk4IDQ2OS41NDkgNDAzLjIxMSA0NjkuMzA5IDQwOC4zMjRMNDU1LjQ1IDcwOC4yOTE5OTk5OTk5OTk5QzQ1NC45ODQgNzE4LjM2Nzk5OTk5OTk5OTkgNDYyLjczNCA3MjcgNDcyLjc2MyA3Mjd6TTUwMC4wMDAwMDAwMDAwMDAxIDI1NC44ODFDNDc0LjkyOSAyNTQuODgxIDQ1NC42MDkgMjc1LjIwNSA0NTQuNjA5IDMwMC4yNzNDNDU0LjYwOSAzMjUuMzQ0MDAwMDAwMDAwMSA0NzQuOTI5IDM0NS42NjkgNTAwLjAwMDAwMDAwMDAwMDEgMzQ1LjY2OUM1MjUuMDcyIDM0NS42NjkgNTQ1LjM5MiAzMjUuMzQ1MDAwMDAwMDAwMSA1NDUuMzkyIDMwMC4yNzNDNTQ1LjM5MiAyNzUuMjA1MDAwMDAwMDAwMSA1MjUuMDcyIDI1NC44ODEgNTAwLjAwMDAwMDAwMDAwMDEgMjU0Ljg4MXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iaW5mb19jaXJjbGUiCiAgICAgIHVuaWNvZGU9IiYjeEVBMEM7IgogICAgICBob3Jpei1hZHYteD0iMTAwMCIgZD0iIE01MDAgNjcyLjIyMUM1MzEuNzA0IDY3Mi4yMjEgNTU3LjQxIDY5Ny45MjU5OTk5OTk5OTk5IDU1Ny40MSA3MjkuNjNDNTU3LjQxIDc2MS4zMzYgNTMxLjcwNCA3ODcuMDM5IDUwMCA3ODcuMDM5QzQ2OC4yOTQgNzg3LjAzOSA0NDIuNTkxIDc2MS4zMzUgNDQyLjU5MSA3MjkuNjNDNDQyLjU5MSA2OTcuOTI1OTk5OTk5OTk5OSA0NjguMjk0IDY3Mi4yMjEgNTAwIDY3Mi4yMjF6TTU1Ny40MSA2MTQuODE1SDQxMy44ODlWNTg2LjExMUg0NzEuMjk1VjI3MC4zNjg5OTk5OTk5OTk5SDQxMy44ODlWMjQxLjY2Nzk5OTk5OTk5OTlINjE0LjgxOVYyNzAuMzY4OTk5OTk5OTk5OUg1NTcuNDFWNjE0LjgxNDk5OTk5OTk5OTl6TTUxMy45IDk1OS4yNjFDMjQ2LjM1NiA5NTkuMjYxIDQwLjczOSA3NTMuNjQ0IDQwLjczOSA0ODYuMUM0MC43MzkgMjQ2LjM0NDAwMDAwMDAwMDEgMjQ2LjM1NiA0MC43NCA1MTMuOSA0MC43NEM3NTMuNjU2IDQwLjc0IDk1OS4yNiAyNDYuMzQ0MDAwMDAwMDAwMSA5NTkuMjYgNDg2LjFDOTU5LjI2MSA3NTMuNjQ0IDc1My42NTYgOTU5LjI2MSA1MTMuOSA5NTkuMjYxek01MDAgOTguMTQ5MDAwMDAwMDAwMUMyNzguMDYyIDk4LjE0OTAwMDAwMDAwMDEgOTguMTQ4IDI3OC4wNDgwMDAwMDAwMDAxIDk4LjE0OCA1MDAuMDAwMDAwMDAwMDAwMUM5OC4xNDggNzIxLjkzODAwMDAwMDAwMDEgMjc4LjA2MiA5MDEuODUyIDUwMCA5MDEuODUyQzcyMS45NTIgOTAxLjg1MiA5MDEuODUxIDcyMS45MzgwMDAwMDAwMDAxIDkwMS44NTEgNTAwLjAwMDAwMDAwMDAwMDFDOTAxLjg1MSAyNzguMDQ4MDAwMDAwMDAwMSA3MjEuOTUyIDk4LjE0OTAwMDAwMDAwMDEgNTAwIDk4LjE0OTAwMDAwMDAwMDF6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImNhbmNlbCIKICAgICAgdW5pY29kZT0iJiN4RUEwRDsiCiAgICAgIGhvcml6LWFkdi14PSIxMDAwIiBkPSIgTTY1My43OTggNjgxLjc1OUw1MDAgNTI3Ljk2TDM0Ni4yMDEgNjgxLjc1OUwzMTguMjQxMDAwMDAwMDAwMSA2NTMuNzk5TDQ3Mi4wNDAwMDAwMDAwMDAxIDUwMEwzMTguMjQxMDAwMDAwMDAwMSAzNDYuMjAyTDM0Ni4yMDEwMDAwMDAwMDAxIDMxOC4yNDJMNTAwLjAwMDAwMDAwMDAwMDEgNDcyLjA0TDY1My43OTgwMDAwMDAwMDAxIDMxOC4yNDJMNjgxLjc1ODAwMDAwMDAwMDIgMzQ2LjIwMkw1MjcuOTYwMDAwMDAwMDAwMiA1MDBMNjgxLjc1ODAwMDAwMDAwMDIgNjUzLjc5OXpNNTAwIDkzNUMyNTkuNzUzIDkzNSA2NSA3NDAuMjQ3MDAwMDAwMDAwMSA2NSA1MDBDNjUgMjU5Ljc1NCAyNTkuNzUzIDY1IDUwMCA2NUM3NDAuMjQ2IDY1IDkzNSAyNTkuNzU0IDkzNSA1MDBDOTM1IDc0MC4yNDcwMDAwMDAwMDAxIDc0MC4yNDYgOTM1IDUwMCA5MzV6TTUwMCAxMDQuNTQ2MDAwMDAwMDAwMUMyODEuNTkyIDEwNC41NDYwMDAwMDAwMDAxIDEwNC41NDUgMjgxLjU5MzAwMDAwMDAwMDEgMTA0LjU0NSA1MDAuMDAwMDAwMDAwMDAwMUMxMDQuNTQ1IDcxOC40MDggMjgxLjU5MiA4OTUuNDU1IDUwMCA4OTUuNDU1QzcxOC40MDcgODk1LjQ1NSA4OTUuNDU0IDcxOC40MDggODk1LjQ1NCA1MDAuMDAwMDAwMDAwMDAwMUM4OTUuNDU0IDI4MS41OTMwMDAwMDAwMDAxIDcxOC40MDY5OTk5OTk5OTk5IDEwNC41NDYwMDAwMDAwMDAxIDQ5OS45OTk5OTk5OTk5OTk5IDEwNC41NDYwMDAwMDAwMDAxeiIgLz4KICA8L2ZvbnQ+CjwvZGVmcz4KPC9zdmc+Cg==') format('svg');\n}\n[class^=\"weui_icon_\"]:before,\n[class*=\" weui_icon_\"]:before {\n  font-family: \"weui\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n  display: inline-block;\n  vertical-align: middle;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: .2em;\n  text-align: center;\n  /* opacity: .8; */\n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n  /* fix buttons height, for twitter bootstrap */\n  line-height: 1em;\n  /* Animation center compensation - margins should be symmetric */\n  /* remove if not needed */\n  margin-left: .2em;\n  /* you can be more comfortable with increased icons size */\n  /* font-size: 120%; */\n  /* Uncomment for 3D effect */\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */\n}\n.weui_icon_circle:before {\n  content: \"\\EA01\";\n}\n/* '' */\n.weui_icon_download:before {\n  content: \"\\EA02\";\n}\n/* '' */\n.weui_icon_info:before {\n  content: \"\\EA03\";\n}\n/* '' */\n.weui_icon_safe_success:before {\n  content: \"\\EA04\";\n}\n/* '' */\n.weui_icon_safe_warn:before {\n  content: \"\\EA05\";\n}\n/* '' */\n.weui_icon_success:before {\n  content: \"\\EA06\";\n}\n/* '' */\n.weui_icon_success_circle:before {\n  content: \"\\EA07\";\n}\n/* '' */\n.weui_icon_success_no_circle:before {\n  content: \"\\EA08\";\n}\n/* '' */\n.weui_icon_waiting:before {\n  content: \"\\EA09\";\n}\n/* '' */\n.weui_icon_waiting_circle:before {\n  content: \"\\EA0A\";\n}\n/* '' */\n.weui_icon_warn:before {\n  content: \"\\EA0B\";\n}\n/* '' */\n.weui_icon_info_circle:before {\n  content: \"\\EA0C\";\n}\n/* '' */\n.weui_icon_cancel:before {\n  content: \"\\EA0D\";\n}\n/* '' */\n[class^=\"weui_icon_\"]:before,\n[class*=\" weui_icon_\"]:before {\n  margin: 0;\n}\n.weui_icon_success:before {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui_icon_waiting:before {\n  font-size: 23px;\n  color: #10AEFF;\n}\n.weui_icon_warn:before {\n  font-size: 23px;\n  color: #F43530;\n}\n.weui_icon_info:before {\n  font-size: 23px;\n  color: #10AEFF;\n}\n.weui_icon_success_circle:before {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui_icon_success_no_circle:before {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui_icon_waiting_circle:before {\n  font-size: 23px;\n  color: #10AEFF;\n}\n.weui_icon_circle:before {\n  font-size: 23px;\n  color: #C9C9C9;\n}\n.weui_icon_download:before {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui_icon_info_circle:before {\n  font-size: 23px;\n  color: #09BB07;\n}\n.weui_icon_safe_success:before {\n  color: #09BB07;\n}\n.weui_icon_safe_warn:before {\n  color: #FFBE00;\n}\n.weui_icon_cancel:before {\n  color: #F43530;\n  font-size: 22px;\n}\n.weui_icon_msg:before {\n  font-size: 104px;\n}\n.weui_icon_warn.weui_icon_msg:before {\n  color: #F76260;\n}\n.weui_icon_safe:before {\n  font-size: 104px;\n}\n.weui_btn.weui_btn_mini {\n  line-height: 1.9;\n  font-size: 14px;\n  padding: 0 .75em;\n  display: inline-block;\n}\nbutton.weui_btn,\ninput.weui_btn {\n  width: 100%;\n  border-width: 0;\n  outline: 0;\n  -webkit-appearance: none;\n}\nbutton.weui_btn:focus,\ninput.weui_btn:focus {\n  outline: 0;\n}\nbutton.weui_btn_inline,\ninput.weui_btn_inline,\nbutton.weui_btn_mini,\ninput.weui_btn_mini {\n  width: auto;\n}\n/*gap between btn*/\n.weui_btn + .weui_btn {\n  margin-top: 15px;\n}\n.weui_btn.weui_btn_inline + .weui_btn.weui_btn_inline {\n  margin-top: auto;\n  margin-left: 15px;\n}\n.weui_btn_area {\n  margin: 1.17647059em 15px 0.3em;\n}\n.weui_btn_area.weui_btn_area_inline {\n  -webkit-display: -webkit-box;\n  -webkit-display: -webkit-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.weui_btn_area.weui_btn_area_inline .weui_btn {\n  margin-top: auto;\n  margin-right: 15px;\n  width: 100%;\n  -webkit-flex: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.weui_btn_area.weui_btn_area_inline .weui_btn:last-child {\n  margin-right: 0;\n}\n.weui_btn {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  color: #FFFFFF;\n  line-height: 2.33333333;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  overflow: hidden;\n}\n.weui_btn:after {\n  content: \" \";\n  width: 200%;\n  height: 200%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\n.weui_btn.weui_btn_inline {\n  display: inline-block;\n}\n.weui_btn_default {\n  background-color: #F7F7F7;\n  color: #454545;\n}\n.weui_btn_default:not(.weui_btn_disabled):visited {\n  color: #454545;\n}\n.weui_btn_default:not(.weui_btn_disabled):active {\n  color: #A1A1A1;\n  background-color: #DEDEDE;\n}\n.weui_btn_primary {\n  background-color: #04BE02;\n}\n.weui_btn_primary:not(.weui_btn_disabled):visited {\n  color: #FFFFFF;\n}\n.weui_btn_primary:not(.weui_btn_disabled):active {\n  color: rgba(255, 255, 255, 0.4);\n  background-color: #039702;\n}\n.weui_btn_warn {\n  background-color: #EF4F4F;\n}\n.weui_btn_warn:not(.weui_btn_disabled):visited {\n  color: #FFFFFF;\n}\n.weui_btn_warn:not(.weui_btn_disabled):active {\n  color: rgba(255, 255, 255, 0.4);\n  background-color: #C13E3E;\n}\n.weui_btn_disabled {\n  color: rgba(255, 255, 255, 0.6);\n}\n.weui_btn_disabled.weui_btn_default {\n  color: #C9C9C9;\n}\n.weui_btn_plain_primary {\n  color: #04BE02;\n  border: 1px solid #04BE02;\n}\nbutton.weui_btn_plain_primary,\ninput.weui_btn_plain_primary {\n  border-width: 1px;\n  background-color: transparent;\n}\n.weui_btn_plain_primary:active {\n  border-color: #039702;\n}\n.weui_btn_plain_primary:after {\n  border-width: 0;\n}\n.weui_btn_plain_default {\n  color: #5A5A5A;\n  border: 1px solid #5A5A5A;\n}\nbutton.weui_btn_plain_default,\ninput.weui_btn_plain_default {\n  border-width: 1px;\n  background-color: transparent;\n}\n.weui_btn_plain_default:after {\n  border-width: 0;\n}\n.weui_cell {\n  position: relative;\n}\n.weui_cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n  left: 15px;\n}\n.weui_cell:first-child:before {\n  display: none;\n}\n.weui_cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.weui_cells:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui_cells:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui_cells_title {\n  margin-top: .77em;\n  margin-bottom: .3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #888;\n  font-size: 14px;\n}\n.weui_cells_title + .weui_cells {\n  margin-top: 0;\n}\n.weui_cells_tips {\n  margin-top: .3em;\n  color: #888;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n.weui_cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.weui_cell_ft {\n  text-align: right;\n  color: #888;\n}\n.weui_cell_primary {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.weui_cells_access .weui_cell:not(.no_access) {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.weui_cells_access .weui_cell:not(.no_access):active {\n  background-color: #ECECEC;\n}\n.weui_cells_access a.weui_cell {\n  color: inherit;\n}\n.weui_cells_access .weui_cell_ft:after {\n  content: \" \";\n  display: inline-block;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  position: relative;\n  top: -2px;\n  top: -1px;\n  margin-left: .3em;\n}\n.weui_check_label {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.weui_check {\n  position: absolute;\n  left: -9999em;\n}\n.weui_cells_radio .weui_cell_ft {\n  padding-left: 0.35em;\n}\n.weui_cells_radio .weui_cell:active {\n  background-color: #ECECEC;\n}\n.weui_cells_radio .weui_check:checked + .weui_icon_checked:before {\n  content: '\\EA08';\n  color: #09BB07;\n  font-size: 16px;\n}\n.weui_cells_checkbox .weui_cell_hd {\n  padding-right: 0.35em;\n}\n.weui_cells_checkbox .weui_cell:active {\n  background-color: #ECECEC;\n}\n.weui_cells_checkbox .weui_icon_checked:before {\n  content: '\\EA01';\n  color: #C9C9C9;\n  font-size: 23px;\n  display: block;\n}\n.weui_cells_checkbox .weui_check:checked + .weui_icon_checked:before {\n  content: '\\EA06';\n  color: #09BB07;\n}\n.weui_label {\n  display: block;\n  width: 3em;\n}\n.weui_input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  -webkit-appearance: none;\n  background-color: transparent;\n  font-size: inherit;\n  color: inherit;\n  height: 1.41176471em;\n  line-height: 1.41176471;\n}\n.weui_input::-webkit-outer-spin-button,\n.weui_input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.weui_textarea {\n  display: block;\n  border: 0;\n  resize: none;\n  width: 100%;\n  font-size: 1em;\n  line-height: inherit;\n  outline: 0;\n}\n.weui_toptips {\n  display: none;\n  position: fixed;\n  -webkit-transform: translateZ(0);\n  width: 100%;\n  top: 0;\n  line-height: 2.3;\n  font-size: 14px;\n  text-align: center;\n  color: #FFF;\n  z-index: 2;\n}\n.weui_toptips.weui_warn {\n  background-color: #E64340;\n}\n.weui_cells_form .weui_cell_warn {\n  color: #E64340;\n}\n.weui_cells_form .weui_cell_warn .weui_icon_warn {\n  display: inline-block;\n}\n.weui_cells_form .weui_cell_hd {\n  padding-right: .3em;\n}\n.weui_cells_form .weui_cell_ft {\n  font-size: 0;\n}\n.weui_cells_form .weui_icon_warn {\n  display: none;\n}\n.weui_cell_select {\n  padding: 0;\n}\n.weui_cell_select .weui_select {\n  padding-right: 30px;\n}\n.weui_cell_select .weui_cell_bd:after {\n  content: \" \";\n  display: inline-block;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  margin-top: -3px;\n}\n.weui_select {\n  -webkit-appearance: none;\n  border: 0;\n  outline: 0;\n  background-color: transparent;\n  width: 100%;\n  font-size: inherit;\n  height: 44px;\n  position: relative;\n  z-index: 1;\n  padding-left: 15px;\n}\n.weui_select_before {\n  padding-right: 15px;\n}\n.weui_select_before .weui_select {\n  width: auto;\n}\n.weui_select_before .weui_cell_hd {\n  position: relative;\n}\n.weui_select_before .weui_cell_hd:after {\n  content: \" \";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-right: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.weui_select_before .weui_cell_hd:before {\n  content: \" \";\n  display: inline-block;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  margin-top: -3px;\n}\n.weui_select_before .weui_cell_bd {\n  padding-left: 15px;\n}\n.weui_select_before .weui_cell_bd:after {\n  display: none;\n}\n.weui_select_after {\n  padding-left: 15px;\n}\n.weui_vcode {\n  padding-top: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n}\n.weui_vcode .weui_cell_ft img {\n  margin-left: 5px;\n  height: 44px;\n  vertical-align: middle;\n}\n.weui_cell_switch {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.weui_switch {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: relative;\n  width: 52px;\n  height: 32px;\n  border: 1px solid #DFDFDF;\n  outline: 0;\n  border-radius: 16px;\n  box-sizing: border-box;\n  background: #DFDFDF;\n}\n.weui_switch:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FDFDFD;\n  -webkit-transition: -webkit-transform .3s;\n          transition: transform .3s;\n}\n.weui_switch:after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  -webkit-transition: -webkit-transform .3s;\n          transition: transform .3s;\n}\n.weui_switch:checked {\n  border-color: #04BE02;\n  background-color: #04BE02;\n}\n.weui_switch:checked:before {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.weui_switch:checked:after {\n  -webkit-transform: translateX(20px);\n          transform: translateX(20px);\n}\n.weui_msg {\n  padding-top: 36px;\n  text-align: center;\n}\n.weui_msg .weui_icon_area {\n  margin-bottom: 30px;\n}\n.weui_msg .weui_text_area {\n  margin-bottom: 25px;\n  padding: 0 20px;\n}\n.weui_msg .weui_msg_title {\n  margin-bottom: 5px;\n  font-weight: 400;\n  font-size: 20px;\n}\n.weui_msg .weui_msg_desc {\n  font-size: 14px;\n  color: #888;\n}\n.weui_msg .weui_opr_area {\n  margin-bottom: 25px;\n}\n.weui_msg .weui_extra_area {\n  margin-bottom: 15px;\n  font-size: 14px;\n  color: #888;\n}\n.weui_msg .weui_extra_area a {\n  color: #61749B;\n}\n@media screen and (min-height: 438px) {\n  .weui_extra_area {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n  }\n}\n.weui_article {\n  padding: 20px 15px;\n  font-size: 15px;\n}\n.weui_article section {\n  margin-bottom: 1.5em;\n}\n.weui_article h1 {\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: .75em;\n}\n.weui_article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: .3em;\n}\n.weui_article h3 {\n  font-weight: 400;\n  font-size: 15px;\n}\n.weui_progress {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.weui_progress_bar {\n  background-color: #EBEBEB;\n  height: 3px;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.weui_progress_inner_bar {\n  width: 0;\n  height: 100%;\n  background-color: #09BB07;\n}\n.weui_progress_opr {\n  display: block;\n  margin-left: 15px;\n  font-size: 0;\n}\n.weui_dialog {\n  position: fixed;\n  z-index: 13;\n  width: 85%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: #FAFAFC;\n  text-align: center;\n  border-radius: 3px;\n}\n.weui_dialog_confirm .weui_dialog .weui_dialog_hd {\n  text-align: left;\n  padding: 1.2em 20px .5em;\n}\n.weui_dialog_confirm .weui_dialog .weui_dialog_bd {\n  text-align: left;\n}\n.weui_dialog_hd {\n  padding: 1.2em 0 .5em;\n}\n.weui_dialog_title {\n  font-weight: 400;\n  font-size: 17px;\n}\n.weui_dialog_bd {\n  padding: 0 20px;\n  font-size: 15px;\n  color: #888;\n}\n.weui_dialog_ft {\n  position: relative;\n  line-height: 42px;\n  margin-top: 20px;\n  font-size: 17px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.weui_dialog_ft a {\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #3CC51F;\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.weui_dialog_ft a:active {\n  background-color: #EEEEEE;\n}\n.weui_dialog_ft:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D5D5D6;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui_dialog_confirm .weui_dialog_ft a {\n  position: relative;\n}\n.weui_dialog_confirm .weui_dialog_ft a:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-left: 1px solid #D5D5D6;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.weui_dialog_confirm .weui_dialog_ft a:first-child:after {\n  display: none;\n}\n.weui_btn_dialog.default {\n  color: #353535;\n}\n.weui_btn_dialog.primary {\n  color: #0BB20C;\n}\n@media screen and (min-width: 1024px) {\n  .weui_dialog {\n    width: 35%;\n  }\n}\n.weui_toast {\n  position: fixed;\n  z-index: 3;\n  width: 7.6em;\n  min-height: 7.6em;\n  top: 180px;\n  left: 50%;\n  margin-left: -3.8em;\n  background: rgba(40, 40, 40, 0.75);\n  text-align: center;\n  border-radius: 5px;\n  color: #FFFFFF;\n}\n.weui_icon_toast {\n  margin: 22px 0 0;\n  display: block;\n}\n.weui_icon_toast:before {\n  content: '\\EA08';\n  color: #FFFFFF;\n  font-size: 55px;\n}\n.weui_toast_content {\n  margin: 0 0 15px;\n}\n.weui_loading_toast .weui_toast_content {\n  margin-top: 64%;\n  font-size: 14px;\n}\n.weui_loading {\n  position: absolute;\n  width: 0px;\n  z-index: 2000000000;\n  left: 50%;\n  top: 38%;\n}\n.weui_loading_leaf {\n  position: absolute;\n  top: -1px;\n  opacity: 0.25;\n}\n.weui_loading_leaf:before {\n  content: \" \";\n  position: absolute;\n  width: 8.14px;\n  height: 3.08px;\n  background: #d1d1d5;\n  box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px;\n  border-radius: 1px;\n  -webkit-transform-origin: left 50% 0px;\n          transform-origin: left 50% 0px;\n}\n.weui_loading_leaf_0 {\n  -webkit-animation: opacity-60-25-0-12 1.25s linear infinite;\n          animation: opacity-60-25-0-12 1.25s linear infinite;\n}\n.weui_loading_leaf_0:before {\n  -webkit-transform: rotate(0deg) translate(7.92px, 0px);\n          transform: rotate(0deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_1 {\n  -webkit-animation: opacity-60-25-1-12 1.25s linear infinite;\n          animation: opacity-60-25-1-12 1.25s linear infinite;\n}\n.weui_loading_leaf_1:before {\n  -webkit-transform: rotate(30deg) translate(7.92px, 0px);\n          transform: rotate(30deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_2 {\n  -webkit-animation: opacity-60-25-2-12 1.25s linear infinite;\n          animation: opacity-60-25-2-12 1.25s linear infinite;\n}\n.weui_loading_leaf_2:before {\n  -webkit-transform: rotate(60deg) translate(7.92px, 0px);\n          transform: rotate(60deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_3 {\n  -webkit-animation: opacity-60-25-3-12 1.25s linear infinite;\n          animation: opacity-60-25-3-12 1.25s linear infinite;\n}\n.weui_loading_leaf_3:before {\n  -webkit-transform: rotate(90deg) translate(7.92px, 0px);\n          transform: rotate(90deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_4 {\n  -webkit-animation: opacity-60-25-4-12 1.25s linear infinite;\n          animation: opacity-60-25-4-12 1.25s linear infinite;\n}\n.weui_loading_leaf_4:before {\n  -webkit-transform: rotate(120deg) translate(7.92px, 0px);\n          transform: rotate(120deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_5 {\n  -webkit-animation: opacity-60-25-5-12 1.25s linear infinite;\n          animation: opacity-60-25-5-12 1.25s linear infinite;\n}\n.weui_loading_leaf_5:before {\n  -webkit-transform: rotate(150deg) translate(7.92px, 0px);\n          transform: rotate(150deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_6 {\n  -webkit-animation: opacity-60-25-6-12 1.25s linear infinite;\n          animation: opacity-60-25-6-12 1.25s linear infinite;\n}\n.weui_loading_leaf_6:before {\n  -webkit-transform: rotate(180deg) translate(7.92px, 0px);\n          transform: rotate(180deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_7 {\n  -webkit-animation: opacity-60-25-7-12 1.25s linear infinite;\n          animation: opacity-60-25-7-12 1.25s linear infinite;\n}\n.weui_loading_leaf_7:before {\n  -webkit-transform: rotate(210deg) translate(7.92px, 0px);\n          transform: rotate(210deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_8 {\n  -webkit-animation: opacity-60-25-8-12 1.25s linear infinite;\n          animation: opacity-60-25-8-12 1.25s linear infinite;\n}\n.weui_loading_leaf_8:before {\n  -webkit-transform: rotate(240deg) translate(7.92px, 0px);\n          transform: rotate(240deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_9 {\n  -webkit-animation: opacity-60-25-9-12 1.25s linear infinite;\n          animation: opacity-60-25-9-12 1.25s linear infinite;\n}\n.weui_loading_leaf_9:before {\n  -webkit-transform: rotate(270deg) translate(7.92px, 0px);\n          transform: rotate(270deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_10 {\n  -webkit-animation: opacity-60-25-10-12 1.25s linear infinite;\n          animation: opacity-60-25-10-12 1.25s linear infinite;\n}\n.weui_loading_leaf_10:before {\n  -webkit-transform: rotate(300deg) translate(7.92px, 0px);\n          transform: rotate(300deg) translate(7.92px, 0px);\n}\n.weui_loading_leaf_11 {\n  -webkit-animation: opacity-60-25-11-12 1.25s linear infinite;\n          animation: opacity-60-25-11-12 1.25s linear infinite;\n}\n.weui_loading_leaf_11:before {\n  -webkit-transform: rotate(330deg) translate(7.92px, 0px);\n          transform: rotate(330deg) translate(7.92px, 0px);\n}\n@-webkit-keyframes opacity-60-25-0-12 {\n  0% {\n    opacity: 0.25;\n  }\n  0.01% {\n    opacity: 0.25;\n  }\n  0.02% {\n    opacity: 1;\n  }\n  60.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-1-12 {\n  0% {\n    opacity: 0.25;\n  }\n  8.34333% {\n    opacity: 0.25;\n  }\n  8.35333% {\n    opacity: 1;\n  }\n  68.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-2-12 {\n  0% {\n    opacity: 0.25;\n  }\n  16.6767% {\n    opacity: 0.25;\n  }\n  16.6867% {\n    opacity: 1;\n  }\n  76.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-3-12 {\n  0% {\n    opacity: 0.25;\n  }\n  25.01% {\n    opacity: 0.25;\n  }\n  25.02% {\n    opacity: 1;\n  }\n  85.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-4-12 {\n  0% {\n    opacity: 0.25;\n  }\n  33.3433% {\n    opacity: 0.25;\n  }\n  33.3533% {\n    opacity: 1;\n  }\n  93.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@-webkit-keyframes opacity-60-25-5-12 {\n  0% {\n    opacity: 0.270958333333333;\n  }\n  41.6767% {\n    opacity: 0.25;\n  }\n  41.6867% {\n    opacity: 1;\n  }\n  1.67667% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.270958333333333;\n  }\n}\n@-webkit-keyframes opacity-60-25-6-12 {\n  0% {\n    opacity: 0.375125;\n  }\n  50.01% {\n    opacity: 0.25;\n  }\n  50.02% {\n    opacity: 1;\n  }\n  10.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.375125;\n  }\n}\n@-webkit-keyframes opacity-60-25-7-12 {\n  0% {\n    opacity: 0.479291666666667;\n  }\n  58.3433% {\n    opacity: 0.25;\n  }\n  58.3533% {\n    opacity: 1;\n  }\n  18.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.479291666666667;\n  }\n}\n@-webkit-keyframes opacity-60-25-8-12 {\n  0% {\n    opacity: 0.583458333333333;\n  }\n  66.6767% {\n    opacity: 0.25;\n  }\n  66.6867% {\n    opacity: 1;\n  }\n  26.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.583458333333333;\n  }\n}\n@-webkit-keyframes opacity-60-25-9-12 {\n  0% {\n    opacity: 0.687625;\n  }\n  75.01% {\n    opacity: 0.25;\n  }\n  75.02% {\n    opacity: 1;\n  }\n  35.01% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.687625;\n  }\n}\n@-webkit-keyframes opacity-60-25-10-12 {\n  0% {\n    opacity: 0.791791666666667;\n  }\n  83.3433% {\n    opacity: 0.25;\n  }\n  83.3533% {\n    opacity: 1;\n  }\n  43.3433% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.791791666666667;\n  }\n}\n@-webkit-keyframes opacity-60-25-11-12 {\n  0% {\n    opacity: 0.895958333333333;\n  }\n  91.6767% {\n    opacity: 0.25;\n  }\n  91.6867% {\n    opacity: 1;\n  }\n  51.6767% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.895958333333333;\n  }\n}\n.weui_mask {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui_mask_transparent {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.weui_mask_transition {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0);\n  -webkit-transition: background .3s;\n          transition: background .3s;\n}\n.weui_fade_toggle {\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui_actionsheet {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  -webkit-transform: translate(0, 100%);\n          transform: translate(0, 100%);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 2;\n  width: 100%;\n  background-color: #EFEFF4;\n  -webkit-transition: -webkit-transform .3s;\n          transition: transform .3s;\n}\n.weui_actionsheet_menu {\n  background-color: #FFFFFF;\n}\n.weui_actionsheet_action {\n  margin-top: 6px;\n  background-color: #FFFFFF;\n}\n.weui_actionsheet_cell {\n  position: relative;\n  padding: 10px 0;\n  text-align: center;\n  font-size: 18px;\n}\n.weui_actionsheet_cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui_actionsheet_cell:active {\n  background-color: #ECECEC;\n}\n.weui_actionsheet_cell:first-child:before {\n  display: none;\n}\n.weui_actionsheet_toggle {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlL2Jhc2UvcmVzZXQubGVzcyIsInN0eWxlL2Jhc2UvdmFyaWFibGUvZ2xvYmFsLmxlc3MiLCJzdHlsZS9pY29uL3dldWlfZm9udC5sZXNzIiwic3R5bGUvaWNvbi93ZXVpX2ljb25fZm9udC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWlfYnV0dG9uL3dldWlfYnV0dG9uLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aV9idXR0b24vd2V1aV9idG5fZ2xvYmFsLmxlc3MiLCJzdHlsZS9iYXNlL21peGluL21vYmlsZS5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWlfYnV0dG9uL3dldWlfYnRuX2RlZmF1bHQubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpX2J1dHRvbi93ZXVpX2J0bl9wcmltYXJ5Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aV9idXR0b24vd2V1aV9idG5fd2Fybi5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWlfYnV0dG9uL3dldWlfYnRuX2Rpc2FibGVkLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aV9idXR0b24vd2V1aV9idG5fcGxhaW4ubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpX2NlbGwvd2V1aV9jZWxsX2dsb2JhbC5sZXNzIiwic3R5bGUvYmFzZS9taXhpbi9zZXRPbmVweC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWlfY2VsbC93ZXVpX2FjY2Vzcy5sZXNzIiwic3R5bGUvYmFzZS9taXhpbi9zZXRBcnJvdy5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWlfY2VsbC93ZXVpX2NoZWNrL3dldWlfY2hlY2tfY29tbW9uLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aV9jZWxsL3dldWlfY2hlY2svd2V1aV9yYWRpby5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWlfY2VsbC93ZXVpX2NoZWNrL3dldWlfY2hlY2tib3gubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpX2NlbGwvd2V1aV9mb3JtL3dldWlfZm9ybV9jb21tb24ubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpX2NlbGwvd2V1aV9mb3JtL3dldWlfc2VsZWN0Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aV9jZWxsL3dldWlfZm9ybS93ZXVpX3NlbGVjdF9iZWZvcmUubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpX2NlbGwvd2V1aV9mb3JtL3dldWlfc2VsZWN0X2FmdGVyLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aV9jZWxsL3dldWlfZm9ybS93ZXVpX3Zjb2RlLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aV9jZWxsL3dldWlfc3dpdGNoLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aV9wYWdlL3dldWlfbXNnLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aV9wYWdlL3dldWlfYXJ0aWNsZS5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWlfcHJvZ3Jlc3Mvd2V1aV9wcm9ncmVzcy5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWlfdGlwcy93ZXVpX2RpYWxvZy5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWlfdGlwcy93ZXVpX3RvYXN0Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aV90aXBzL3dldWlfbWFzay5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWlfdGlwcy93ZXVpX2FjdGlvbnNoZWV0Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwwQkFBQTtFQUNBLDhCQUFBOztBQUdKO0VBQ0ksZ0JBQUE7RUFDQSxhQ1JNLDhDRFFOOztBQUdKO0VBQ0ksU0FBQTtFQUNBLFVBQUE7O0FBR0osQ0FBRTtFQUNFLFNBQUE7O0FBR0o7RUFDSSxxQkFBQTs7QUV0Qko7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBYSxNQUFiO0VBQ0EsU0FBUyxxeUZBQXF5RixPQUFPLGlCQUNqekYscTZJQUFxNkksT0FBTyxhQUM1NkksNnJkQUE2cmQsT0FBTyxNQUZ4c2Q7O0FBS0oscUJBQXFCO0FBQVMsc0JBQXNCO0VBQ2hELGFBQWEsTUFBYjtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEscUJBQUE7RUFD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OztBQUNSO0VBQ0M7SUFBSywwQkFBQTs7RUFDTDtJQUFXLGFBQUE7O0VBQ1g7SUFBVyxVQUFBOztFQUNYO0lBQVcsYUFBQTs7RUFDWDtJQUFPLDBCQUFBOzs7QUN0TVQ7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTs7QUFHSjtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTs7QUFHSjtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBOztBQUVKO0VBQ0ksOEJBQUE7O0FDL0JKO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBVyxrQkFBWDtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUVBLHlCQUFBOztBQUVKO0VBQ0kseUJBQUE7O0FBRUo7RUFDSSxlQUFBO0VBQ0EseUJBQUE7O0FBRUo7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7O0FBQ0Esc0JBQUM7RWxCeEJELFNBQVMsR0FBVDtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFXLFdBQVg7O0FrQm1CQSxzQkFBQztFQUNHLHlCQUFBOztBQUdBLHNCQURILFlBQ0k7RUFDRyxhQUFBOztBQU1aO0VBQ0ksV0FBVyxlQUFYIiwiZmlsZSI6InN0eWxlL3dldWkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImZuXCI7XHJcblxyXG5odG1sIHtcclxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBmb250LWZhbWlseTogQHNhbnNGb250O1xyXG59XHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmEgaW1nIHtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iLCIvLyBmb250IGZhbWlseVxyXG5Ac2Fuc0ZvbnQ6XCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xyXG5Ac2VyaWZGb250Okdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsVGltZXMsc2VyaWY7XHJcbkB3cEZvbnQ6XCJNaWNyb3NvZnQgWWFIZWlcIixzYW5zLXNlcmlmO1xyXG5AYml6Rm9udDpcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLFwiSGlyYWdpbm8gU2FucyBHQlwiLFwiTWljcm9zb2Z0IFlhSGVpXCIsXCLlvq7ova/pm4Xpu5FcIixBcmlhbCxzYW5zLXNlcmlmO1xyXG5AZ2xvYmFsRm9udDpAc2Fuc0ZvbnQ7XHJcbkBnbG9iYWxGb250U2l6ZToxNHB4O1xyXG5cclxuLy8gZm9udCBjb2xvclxyXG5AZ2xvYmFsTGlua0NvbG9yOiAjNjE3NDlCO1xyXG5AZ2xvYmFsRGVzY0NvbG9yOiAjQjJCMkIyO1xyXG5AZ2xvYmFsV2FybkNvbG9yOiAjRTY0MzQwO1xyXG5AZ2xvYmFsTmlja05hbWVDb2xvcjogIzU3NkI5NTtcclxuQGdsb2JhbFRleHRDb2xvcjogIzg4ODtcclxuQGdsb2JhbFRpdGxlQ29sb3I6ICMwMDA7XHJcblxyXG4vL2JvcmRlclxyXG5AZ2xvYmFsQm9yZGVyQ29sb3I6ICNCQ0JBQjY7XHJcblxyXG4vL2Fycm93XHJcbkBnbG9iYWxBcnJvd0NvbG9yOiAjQzdDN0NDO1xyXG5cclxuLy9jb21wb25lbnRcclxuQGl0ZW1BY3RpdmVDb2xvcjogI0U0RTRFNDtcclxuXHJcbi8vcGFnZVxyXG5AcGFnZURlZmF1bHRCYWNrZ3JvdW5kQ29sb3I6I0VGRUZGNDtcclxuXHJcbi8vIGdhcFxyXG5AZ2FwNTo1cHg7XHJcbkBnYXAxMDoxMHB4O1xyXG5AZ2FwMTU6MTVweDtcclxuIiwiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1mYW1pbHk6IFwid2V1aVwiO1xyXG4gICAgc3JjOiB1cmwoJ2RhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxkMDlHUmdBQkFBQUFBQWc4QUFzQUFBQUFEUndBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkhVMVZDQUFBQkNBQUFBRE1BQUFCQ3NQNno3VTlUTHpJQUFBRThBQUFBUHdBQUFGWkFLRXhwWTIxaGNBQUFBWHdBQUFDRkFBQUNHT3R2cysxbmJIbG1BQUFDQkFBQUJBRUFBQVlvRU5MRTgyaGxZV1FBQUFZSUFBQUFMZ0FBQURZSHY5Q2VhR2hsWVFBQUJqZ0FBQUFjQUFBQUpBZ0dBL2RvYlhSNEFBQUdWQUFBQUJBQUFBQTRNc2dBQUd4dlkyRUFBQVprQUFBQUhnQUFBQjRMUmdtZWJXRjRjQUFBQm9RQUFBQWZBQUFBSUFFY0FENXVZVzFsQUFBR3BBQUFBUjRBQUFIbTQxd2UySEJ2YzNRQUFBZkVBQUFBZHdBQUFNVUxwK1hoZUp4allHUmdZT0Jpa0dQUVlXQjBjZk1KWWVCZ1lHR0FBSkFNWTA1bWVpSlFETW9EeXJHQWFRNGdab09JQWdDS0l3TlBBSGljWTJCa1hzZzRnWUdWZ1lPcGlta1BBd05ERDRSbWZNQmd5TWpFd01ERXdNck1nQlVFcExtbU1EaThZbnpGeS93Q3lJMENrMENOSUFJQTdCMExGUUI0bk8yUjJ3MERJUXdFaDRQalh0QkpLa2hCK1VwcHFZd21MbDQyWmNUU2VPWEZJR1FESzVDRFIxQWd2VWtvWHVHbTZXZk82UmVlczZmSUgvMitJeWZscU12TVMvU1dlTEd5c1hQRXZZdEdqNlBLUDlyTW4xL1ZOVDB6NTdrWXBObG9MNk1ZVFhpc1Jqc2IxU0RkRE5MZElEME0wdE5vbCtNeVNKdlI3MFkzOUMrZ0FpSGRBQUFBZUp4MVZGMUxIRmNZUHUrY3I5a1ozWFYyZE1hZHJCLzc0VXlKdXFtdTJVVkZjMTBvQVNHM1F1bC9hQzVTQ3YyNERMUWs3VTI5NnAyaHF6UmlLUzRhYTdUQmlFZ0xUU0VwSkY2WUlMMFJLVm1iTmU3WWQzYmRqUW5zY0hnNE0vUE1lZC9ubWVjY29oQzg2RTkwbnVqRUpnVENJTHZCbm9SOEJtZ0dQSnpnYlJpZ3RGTG12THl5SE9EeTNCN25lM09GQU9sODhQU1lzZVBsbGZMSnoreDVvZkNjVlpHUTJ0cUxkQkhYVHJ5enRoVEpTK0RteHNFWVFSaTJPb3pzc0FVSHhkZWN2eTZ1KzV6NzZlc1JOM0k5M05JNXJVdFgxYVk3VytnaTk5ZnJqRXBwSmhxZGlUcGdxN3F1K3Y4NFdLcGFiNTRXc0Y2TUpOK3AyQzc2SWVsZU5uTDVyR1Y3R1JqSkRWdnRBZzZYampnL1dsbzk1dng0UnBOeHFZRTZvRUtQR1l1NXNSZ3Q4T1BWT3FQeWlkUTBDWTRLb0k1Q3JDK0dJeWhaMDNtYnJwTlcwbE9yYWxqTXpxWHpSZ1pNRUNqMEN1UjZ3TXIzQlFndnYzaDRMUVQwMWkyZ29Xc1BiL2kvTXZvZFZUb292VUVaZUl5YWxLNTNUOFQ5alVlSDZmVGhJNWlJVC9oUC9RMkZmczlvbk5GcFJUbWkxR1JuZXIra2Q3RnVRNjlSRTR5VlpkYnFrRUttM0Vzd1lpYmRNNzJsVCs5UGhjbzNiNVpEVS9kdlowSWFzQ1FEclRjY2pjYWpVWHEzYTl6eGY5L2VUNlgydDJISUdmOFAxTWNNZ0QxVy9RVVRDWEd6b2ZjZXZZZUpTV0hWREZ5QlNVQmx3eWdRdmJYYUpRalg2M09KSjRpMGlKMGowTXNWVG5tYi9GaEdCWmpTRUlvUS9oK2lUU2h4N2xjMlYwOEo1MEJXTjRIQ3BqQWtrd3Iva1BFWEFwRFlKdnkvY0RLSEwvazVNbUZ2WlhlUUREWFByOG5EZ0w5QlJFQlkxVWF4WVRkcFcwTjIwMlQzKzBmWTVrY2lnbjJEK0l5M0NlampvRWZhQVpxSFhrays1Y0EvNElwZytQSG5na09DUjNSME1HaTFDblNaamdVN3pXeTRsc3REdzdXa042RUp5ZFZZeTNacnI2NTB0WFRyclpwV0tlcHhIUmIxUkZodmxhRnZRNkRCYWtqUld2VXV2YktnYTI4eXVFU1gwQXNEU3drbDhBRWo2Qkl6WVdTTkxCeXNWRGl2ckR3QU5PK1VqUGwvRDVicEVzNGVOSjVYbnNGVmYvZThyNVJFeUlYcTNrV25hQk52YWFvamV6bWx2QUQ0dDRtVlQ5S1ZKOHBYQUREUTFMZkJTdm9zenh0MEF6VmNJT2xBeFZsOFVJWEU4NkVEV3dnMnNVZEhjbThTZmJEbW4yQWUyTm9XU014SCtWbE8xY0xBMlVYR0lheWxUTWR4SFlkdTRKdXRjOHg5VGZYL1pFSXdHRkIxL3ozSGk4VThwNjU5amE0UmxVUkpON21JWFV6Q2lKc1U3WmFOUW8ycVdCbzB4Z0lyWE9XdFkvSmxaeUx4ZmlJeDljM282TlpZLzQ3L2lqRlFkNHFuYVBsbVlZK3h2VUlWbFIrZ2Q2Z1h4MWlYLzFzOHJpd3cvMVdOVmR3QjlXUzJ6a01rOVhOdGxzNVdjeDdzT09sSlc5cDVPKy9sbS8wVjVldVptWGg5L0ZJc2NWNHExdkRPTG1PN2Q2cW8vSGlPQkxFR3BWZzYyYXh6RUFuNUg1NDJpSDRBQUFCNG5HTmdaR0JnQUdMMlR1ZDE4ZncyWHhtNG1WOEFSUmd1NWJ2K1JxYVpEek1mQmxJY0RFd2dIZ0F5WXdxeEFBQjRuR05nWkdCZ2ZzSEF3QkFGSmhtWUR6TXdNcUFDUGdCTUJ3TUhlSnhqWUdCZ1lINUJPZ1lBUXFNTDhBQUFBQUFBTGdCbUFLSUEzZ0VhQVY0QnRnSGtBZ29DUmdLSUF0SURGQUFBZUp4allHUmdZT0JqTUdKZ1lRQUJKaURtQWtJR2h2OWdQZ01BRHdJQld3QjRuRjJRd1U3Q1FCUkZiNkdnUXFJbUppN054SVVia3haWThnR3djc09DdGFWTUM2UjBtdWtVd3NhbFgrSFNiL0dqWEhtblBsazRMNTEzNXN6dFMxb0F0L2hDQUw4Q2hPM3VWd2NYUFAxeWx6UVVEbGszd2ozYU8rRSsvWVB3QU05NEZQYUpGMDRJd2l1YVM3d0tkM0NOalhDWC9pQWNrdCtFZTdqSHUzQ2Yva040Z0NVK2hZZDR3dmRSTjl1Rnpwc2lzUjc5czlTMjNwcFNqYU9SUDg1MXFXM2k5RnF0VHFvKzVCUG5NcFZaczFjelV6cGRGRVpWMXV4MDZxS05jOVUwampQeFVXcjJPRUtqd1JZTDlweFVJSUU5MjcrK1pMZW9TUVlsRk1hSU1EcmZ6dG5MTnBIQXNhK1pXT0hFdmViWDU1alFPbVE4Wjh3WTdFbXpkcEpQRnl4RFU3VjNPNXFVUHVJLzlHOVZtQ0ptWmYveUVWT2M5QU5ZUUZEdkFBQjRuRzJOM1FyQ01CU0RUMlp0OTJmRkp4emxySk5DT1lWVjZldkwzUEhPM0lSOGtJUTZPalhTZjNsMHVNRGdDZ3VISGdOR1RKaHhnOGVkTEtlZGMrelgwaVNYc0pva1c1bHIyT0pTMzh5eDF1RWJXdGpGS2ZIcXk5bDkvS0lVSmE2RjlFcnk5T3FLelRFeUhRY0tMQWZobUlrK2tzb3lWUUE9JykgZm9ybWF0KCd0cnVldHlwZScpLFxyXG4gICAgdXJsKCdkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsQUFFQUFBQUxBSUFBQXdBd1IxTlZRckQrcyswQUFBRTRBQUFBUWs5VEx6SkFLRXhwQUFBQmZBQUFBRlpqYldGdzYyK3o3UUFBQWd3QUFBSVlaMng1WmhEU3hQTUFBQVJFQUFBR0tHaGxZV1FIdjlDZUFBQUE0QUFBQURab2FHVmhDQVlEOXdBQUFMd0FBQUFrYUcxMGVETElBQUFBQUFIVUFBQUFPR3h2WTJFTFJnbWVBQUFFSkFBQUFCNXRZWGh3QVJ3QVBnQUFBUmdBQUFBZ2JtRnRaZU5jSHRnQUFBcHNBQUFCNW5CdmMzUUxwK1hoQUFBTVZBQUFBTVVBQVFBQUErZ0FBQUJhQStnQUFBQUFBOE1BQVFBQUFBQUFBQUFBQUFBQUFBQUFBQTRBQVFBQUFBRUFBQWVKYWxaZkR6ejFBQXNENkFBQUFBRFNiMFg3QUFBQUFOSnZSZnNBQUFBQUE4TUR3d0FBQUFnQUFnQUFBQUFBQUFBQkFBQUFEZ0F5QUFRQUFBQUFBQUlBQUFBS0FBb0FBQUQvQUFBQUFBQUFBQUVBQUFBS0FCNEFMQUFCUkVaTVZBQUlBQVFBQUFBQUFBQUFBUUFBQUFGc2FXZGhBQWdBQUFBQkFBQUFBUUFFQUFRQUFBQUJBQWdBQVFBR0FBQUFBUUFBQUFBQUFRT2hBWkFBQlFBSUFub0N2QUFBQUl3Q2VnSzhBQUFCNEFBeEFRSUFBQUlBQlFNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVR1pGWkFCQTZnSHFEUVBvQUFBQVdnUG9BQUFBQUFBQkFBQUFBQUFBQUFBQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBRDZBQUFBK2dBQUFQb0FBQUQ2QUFBQStnQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBQUFBQUZBQUFBQXdBQUFDd0FBQUFFQUFBQmJBQUJBQUFBQUFCbUFBTUFBUUFBQUN3QUF3QUtBQUFCYkFBRUFEb0FBQUFFQUFRQUFRQUE2ZzMvL3dBQTZnSC8vd0FBQUFFQUJBQUFBQUVBQWdBREFBUUFCUUFHQUFjQUNBQUpBQW9BQ3dBTUFBMEFBQUVHQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXdBQUFBQUFLd0FBQUFBQUFBQURRQUE2Z0VBQU9vQkFBQUFBUUFBNmdJQUFPb0NBQUFBQWdBQTZnTUFBT29EQUFBQUF3QUE2Z1FBQU9vRUFBQUFCQUFBNmdVQUFPb0ZBQUFBQlFBQTZnWUFBT29HQUFBQUJnQUE2Z2NBQU9vSEFBQUFCd0FBNmdnQUFPb0lBQUFBQ0FBQTZna0FBT29KQUFBQUNRQUE2Z29BQU9vS0FBQUFDZ0FBNmdzQUFPb0xBQUFBQ3dBQTZnd0FBT29NQUFBQURBQUE2ZzBBQU9vTkFBQUFEUUFBQUFBQUxnQm1BS0lBM2dFYUFWNEJ0Z0hrQWdvQ1JnS0lBdElERkFBQUFBSUFBQUFBQTY4RHJRQUxBQmNBQUFFT0FRY2VBUmMrQVRjdUFRTXVBU2MrQVRjZUFSY09BUUgxdlBrRkJmbTh1L2tGQmZtN3JPTUZCZU9zcStNRkJlTURyUVg1dkx2NkJBVDZ1N3o1L0xRRTVLdXI1QVFFNUt1cjVBQUFBZ0FBQUFBRHN3T3pBQXNBSVFBQUFRNEJCeDRCRno0Qk55NEJBd2NHSWk4QkpqWTdBUkUwTmpzQk1oWVZFVE15RmdIdXVmc0ZCZnU1d3Y0RkJmNGtkZzhtRDNZT0RCaGRDd2NtQ0FwZEdBd0Rzd1grd3JuN0JRWDd1Y0wrL2ZXYUVoS2FFaG9CRndnTEN3ais2Um9BQUFNQUFBQUFBNjBEcXdBTEFCa0FJZ0FBQVE0QkJ4NEJGejRCTnk0QkF4UUdLd0VpSmpVUk5qY3pGaGNuTGdFME5qSVdGQVlCOExqMkJRWDJ1TDc2QlFYNm1nb0hIQWNLQVFnc0NBRWZFeGtaSmhrWkE2c0YrcjY0OWdVRjlyaSsrdjExQndvS0J3RWFDQUVCQ0RrQkdTVVpHU1VaQUFBQUFBSUFBQUFBQTVJRHdnQU5BQjhBQUFFT0FRY1JGZ1FYTmlRM0VTNEJFd0VHTHdFbVB3RTJId0VXTnlVMkh3RVdBZlNCeUZRSkFRT1JrUUVEQ1ZUSWV2Ni9CQU9VQXdJVkF3TjZBd1FCSndRREV3TUR3aDQ5SFA3RDFQQWtKUERVQVQwY1BmN2Qvc01DQTVrRUF4d0VBMTBDQXZZREF4TUVBQU1BQUFBQUE0SURzQUFOQUJrQUlnQUFBUTRCQnhFZUFSYytBVGNSTGdFSE14WVZCd1lISXlZdkFUUVRJaVkwTmpJV0ZBWUI5WHZCVVFuNWk0djVDVkhCa2k0SkNnRUVJZ1FCQ2lBT0VoSWNFaElEc0IwN0d2N1B5K2NqSStmTEFURWFPL2NCQ05nRUFRRUUyQWorc1JNY0VoSWNFd0FBQUFJQUFBQUFBNzBEdlFBWEFDTUFBQUV1QVQ4QlBnRWZBUll5TnlVMkZoY25GaFFIQVFZbUp5VW1BQ2NHQUFjV0FCYzJBQUVnQlFJRkF3VVFCMklIRWdZQkV3Y1JCZ0lHQnY3UUJoQUdBaHdGL3YzSHZ2OEFCUVVCQUw3SEFRTUJ4d1lSQndRSEFnVk1CQVhsQmdFR0FnWVFCdjdWQmdFR3JNY0JBd1VGL3YzSHZ2OEFCUVVCQUFBRUFBQUFBQU92QTYwQUN3QVhBQzBBTVFBQUFRNEJCeDRCRno0Qk55NEJBeTRCSno0Qk54NEJGdzRCRXdVT0FTOEJKZ1lQQVFZV0h3RVdNamNCUGdFbUloY1dNUmNCOWJ6NUJRWDV2THY1QlFYNXU2empCUVhqckt2akJRWGpLLzcyQnhFR1lBWVBCUU1GQVFaOUJSQUdBU1VGQVFzUEZBRUJBNjBGK2J5NytnUUUrcnU4K2Z5MEJPU3JxK1FFQk9TcnErUUNJdDBGQVFWSkJRSUdCQWNSQm9BR0JRRWhCUThMQkFFQkFBQUFBQUVBQUFBQUE3c0RPZ0FYQUFBVExnRS9BVDRCSHdFV05qY0JOaFlYSnhZVUJ3RUdJaWM5Q2dZSEJRZ1pETXNOSUFzQ0hRd2VDdzBLQ3YyNUN4d0xBYk1MSVE0TERRY0prd2tCQ2dHK0NRSUtEUXNkQy8yeEN3b0FBQUFBQWdBQUFBQUR1QU80QUFzQUVRQUFBUVlDQng0QkZ6WWtOeVlBRXlFUk14RXpBZTY4L1FVRi9iekZBUUFGQmY4QU92N2FMZmtEdUFYL0FNVzgvUVVGL2J6RkFRRDkzZ0ZPL3Q4QUFBUUFBQUFBQTY4RHJRQURBQThBR3dBaEFBQUJGakVYQXc0QkJ4NEJGejRCTnk0QkF5NEJKejRCTng0QkZ3NEJBeU1WTXpVakF1VUJBZks4K1FVRitieTcrUVVGK2J1czR3VUY0NnlyNHdVRjQ5a2svZGtDZ3dFQkFTd0YrYnk3K2dRRStydTgrZnkwQk9TcnErUUVCT1NycStRQ0xmMGtBQU1BQUFBQUE4TUR3d0FMQUJzQUpBQUFBUVlBQnhZQUZ6WUFOeVlBQnpNeUZoVUREZ0VyQVNJbUp3TTBOaE1pSmpRMk1oWVVCZ0h1d1A3OEJRVUJCTURKQVFjRkJmNzUzallJQ2c0QkJRUXFCQVVCRGdvakV4b2FKaG9hQThNRi92bkp3UDc4QlFVQkJNREpBUWZuQ2dqKzB3UUdCZ1FCTEFnTC9pZ2FKeGtaSnhvQUFBUUFBQUFBQThBRHdBQUlBQklBSGdBcUFBQUJQZ0UwSmlJR0ZCWVhJeFV6RVNNVk16VWpBd1lBQnhZRUZ6NEJOeVlDQXk0Qkp6NEJOeDRCRnc0QkFmUVlJU0V3SVNGUmp6azV5VG9yemY3NEJBUUJDTTI1L3dVRi84ZXI0d1FFNDZ1cjR3UUU0d0tnQVNBeElDQXhJRG9kL3NRY0hBS3hCUDc0emJuL0JRWC91YzBCQ1B5bkJPT3JxK01FQk9PcnErTUFBQUFEQUFBQUFBT25BNmNBQ3dBWEFDTUFBQUVISndjWEJ4YzNGemNuTndNT0FRY2VBUmMrQVRjdUFRTXVBU2MrQVRjZUFSY09BUUtPbXBvY21wb2NtcG9jbXBxMnVmVUZCZlc1dWZVRkJmVzVxTjhFQk4rb3FOOEVCTjhDcXBxYUhKcWFISnFhSEpxYUFSa0Y5Ym01OVFVRjlibTU5ZnpIQk4rb3FOOEVCTitvcU44QUFBQUFBQkFBeGdBQkFBQUFBQUFCQUFRQUFBQUJBQUFBQUFBQ0FBY0FCQUFCQUFBQUFBQURBQVFBQ3dBQkFBQUFBQUFFQUFRQUR3QUJBQUFBQUFBRkFBc0FFd0FCQUFBQUFBQUdBQVFBSGdBQkFBQUFBQUFLQUNzQUlnQUJBQUFBQUFBTEFCTUFUUUFEQUFFRUNRQUJBQWdBWUFBREFBRUVDUUFDQUE0QWFBQURBQUVFQ1FBREFBZ0FkZ0FEQUFFRUNRQUVBQWdBZmdBREFBRUVDUUFGQUJZQWhnQURBQUVFQ1FBR0FBZ0FuQUFEQUFFRUNRQUtBRllBcEFBREFBRUVDUUFMQUNZQStuZGxkV2xTWldkMWJHRnlkMlYxYVhkbGRXbFdaWEp6YVc5dUlERXVNSGRsZFdsSFpXNWxjbUYwWldRZ1lua2djM1puTW5SMFppQm1jbTl0SUVadmJuUmxiR3h2SUhCeWIycGxZM1F1YUhSMGNEb3ZMMlp2Ym5SbGJHeHZMbU52YlFCM0FHVUFkUUJwQUZJQVpRQm5BSFVBYkFCaEFISUFkd0JsQUhVQWFRQjNBR1VBZFFCcEFGWUFaUUJ5QUhNQWFRQnZBRzRBSUFBeEFDNEFNQUIzQUdVQWRRQnBBRWNBWlFCdUFHVUFjZ0JoQUhRQVpRQmtBQ0FBWWdCNUFDQUFjd0IyQUdjQU1nQjBBSFFBWmdBZ0FHWUFjZ0J2QUcwQUlBQkdBRzhBYmdCMEFHVUFiQUJzQUc4QUlBQndBSElBYndCcUFHVUFZd0IwQUM0QWFBQjBBSFFBY0FBNkFDOEFMd0JtQUc4QWJnQjBBR1VBYkFCc0FHOEFMZ0JqQUc4QWJRQUFBQUlBQUFBQUFBQUFDZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURnRUNBUU1CQkFFRkFRWUJCd0VJQVFrQkNnRUxBUXdCRFFFT0FROEFCbU5wY21Oc1pRaGtiM2R1Ykc5aFpBUnBibVp2REhOaFptVmZjM1ZqWTJWemN3bHpZV1psWDNkaGNtNEhjM1ZqWTJWemN3NXpkV05qWlhOelgyTnBjbU5zWlJGemRXTmpaWE56WDI1dlgyTnBjbU5zWlFkM1lXbDBhVzVuRG5kaGFYUnBibWRmWTJseVkyeGxCSGRoY200TGFXNW1iMTlqYVhKamJHVUdZMkZ1WTJWc0FBQUFBQUE9JykgZm9ybWF0KCd3b2ZmJyksXHJcbiAgICB1cmwoJ2RhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJ6ZEdGdVpHRnNiMjVsUFNKdWJ5SS9QaUFLUENGRVQwTlVXVkJGSUhOMlp5QlFWVUpNU1VNZ0lpMHZMMWN6UXk4dlJGUkVJRk5XUnlBeExqRXZMMFZPSWlBaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdlIzSmhjR2hwWTNNdlUxWkhMekV1TVM5RVZFUXZjM1puTVRFdVpIUmtJaUErQ2p4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtQR1JsWm5NK0NpQWdQR1p2Ym5RZ2FXUTlJbmRsZFdraUlHaHZjbWw2TFdGa2RpMTRQU0l4TURBd0lqNEtJQ0FnSUR4bWIyNTBMV1poWTJVZ1ptOXVkQzFtWVcxcGJIazlJbmRsZFdraUNpQWdJQ0FnSUhWdWFYUnpMWEJsY2kxbGJUMGlNVEF3TUNJZ1lYTmpaVzUwUFNJeE1EQXdJZ29nSUNBZ0lDQmtaWE5qWlc1MFBTSXdJaUF2UGdvZ0lDQWdQRzFwYzNOcGJtY3RaMng1Y0dnZ2FHOXlhWG90WVdSMkxYZzlJakFpSUM4K0NpQWdJQ0E4WjJ4NWNHZ2daMng1Y0dndGJtRnRaVDBpWTJseVkyeGxJZ29nSUNBZ0lDQjFibWxqYjJSbFBTSW1JM2hGUVRBeE95SUtJQ0FnSUNBZ2FHOXlhWG90WVdSMkxYZzlJakV3TURBaUlHUTlJaUJOTlRBd0xqVTFNeUE1TkRBdU9EUTRRekkxTmk0Mk56a2dPVFF3TGpnME9DQTFPUzR3TURFZ056UXpMakUyTURBd01EQXdNREF3TURFZ05Ua3VNREF4SURRNU9TNHlPRFpETlRrdU1EQXhJREkxTlM0ME5UQXdNREF3TURBd01EQXhJREkxTmk0Mk56a2dOVGN1TnpNek9UazVPVGs1T1RrNU9TQTFNREF1TlRVeklEVTNMamN6TXprNU9UazVPVGs1T1RsVE9UUXlMakV3TkNBeU5UVXVORFVnT1RReUxqRXdOQ0EwT1RrdU1qZzFPVGs1T1RrNU9UazVPVU01TkRJdU1UQTBJRGMwTXk0eE5pQTNORFF1TkRJM0lEazBNQzQ0TkRnZ05UQXdMalUxTXpBd01EQXdNREF3TURFZ09UUXdMamcwT0hwTk5UQXdMalUxTXlBNU1TNDNOREk1T1RrNU9UazVPVGs1UXpJM055NDROalVnT1RFdU56UXlPVGs1T1RrNU9UazVPU0E1Tnk0ek9UY2dNamN5TGpJMk55QTVOeTR6T1RjZ05EazBMamc0T1VNNU55NHpPVGNnTnpFM0xqVTFPU0F5TnpjdU9EWTFJRGc1T0M0d05UVWdOVEF3TGpVMU15QTRPVGd1TURVMVF6Y3lNeTR5TURNZ09EazRMakExTlNBNU1ETXVOekE1SURjeE55NDFOVGtnT1RBekxqY3dPU0EwT1RRdU9EZzVRemt3TXk0M01Ea2dNamN5TGpJMk56azVPVGs1T1RrNU9Ua2dOekl6TGpJd016QXdNREF3TURBd01ERWdPVEV1TnpReU9UazVPVGs1T1RrNU9TQTFNREF1TlRVek1EQXdNREF3TURBd01TQTVNUzQzTkRJNU9UazVPVGs1T1RrNWVpSWdMejRLSUNBZ0lEeG5iSGx3YUNCbmJIbHdhQzF1WVcxbFBTSmtiM2R1Ykc5aFpDSUtJQ0FnSUNBZ2RXNXBZMjlrWlQwaUppTjRSVUV3TWpzaUNpQWdJQ0FnSUdodmNtbDZMV0ZrZGkxNFBTSXhNREF3SWlCa1BTSWdUVFE1TkM0ME56VWdPVFEyTGpZNFF6STFNeTR6TURVd01EQXdNREF3TURBeElEazBOaTQyT0NBMU15NHpNakVnTnpRMkxqWTVOaUExTXk0ek1qRWdORGswTGpRNE5FTTFNeTR6TWpFZ01qVXpMak13TlNBeU5UTXVNekExTURBd01EQXdNREF3TVNBMU15NHpNakE1T1RrNU9UazVPVGs1SURRNU5DNDBOelVnTlRNdU16SXdPVGs1T1RrNU9UazVPVU0zTkRZdU5qazJJRFV6TGpNeU1EazVPVGs1T1RrNU9Ua2dPVFEyTGpZNElESTFNeTR6TURVZ09UUTJMalk0SURRNU5DNDBPRE01T1RrNU9UazVPVGs1UXprME5pNDJPQ0EzTkRZdU5qazBPVGs1T1RrNU9UazVPU0EzTkRZdU5qazFJRGswTmk0Mk9DQTBPVFF1TkRjMU1EQXdNREF3TURBd01TQTVORFl1TmpoNlRUWTFNUzQ1T0RNd01EQXdNREF3TURBeElEUXhPQzQxTURNNU9UazVPVGs1T1RrNVREVXpOQzR4TXpNZ01qWTFMakkyTlRrNU9UazVPVGs1T1RsRE5URTFMakk0TkNBeU5EQXVOelEyT1RrNU9UazVPVGs1T1NBME9EUXVOelk0SURJME1DNDJOalE1T1RrNU9UazVPVGs1SURRMk5TNDROalVnTWpZMUxqSXpPRGs1T1RrNU9UazVPVGhNTXpRNExqQXhOU0EwTVRndU5URTRPVGs1T1RrNU9UazVPRU16TWprdU1UWTVJRFEwTXk0d016WTVPVGs1T1RrNU9UazRJRE16T0M0NE9UTWdORFl5TGprNU9UazVPVGs1T1RrNU9UZ2dNelk1TGpZd09TQTBOakl1T1RrNU9UazVPVGs1T1RrNU9FZzBOak5XTnpReExqazFNRGs1T1RrNU9UazVPVGhETkRZeklEYzFNaTR5TWpnNU9UazVPVGs1T1RrNElEUTNNUzR4TVRrZ056WXdMams1T1RrNU9UazVPVGs1T1RnZ05EZ3hMak00T1NBM05qQXVPVGs1T1RrNU9UazVPVGs1T0VnMU1UZ3VOakV5UXpVeU9DNDRPRElnTnpZd0xqazVPVGs1T1RrNU9UazVPVGdnTlRNM0xqQXdNU0EzTlRJdU1qSTRPVGs1T1RrNU9UazVPQ0ExTXpjdU1EQXhJRGMwTVM0NU5UQTVPVGs1T1RrNU9UazRWalEyTWk0NU9UazVPVGs1T1RrNU9UazRTRFl6TUM0ek9URTVPVGs1T1RrNU9UazVRelkyTVM0eE9DQTBOakl1T1RrNU9UazVPVGs1T1RrNU9DQTJOekF1T0RnMklEUTBNeTR3TnpjNU9UazVPVGs1T1RrNElEWTFNUzQ1T0RNZ05ERTRMalV3TXprNU9UazVPVGs1T1RoNklpQXZQZ29nSUNBZ1BHZHNlWEJvSUdkc2VYQm9MVzVoYldVOUltbHVabThpQ2lBZ0lDQWdJSFZ1YVdOdlpHVTlJaVlqZUVWQk1ETTdJZ29nSUNBZ0lDQm9iM0pwZWkxaFpIWXRlRDBpTVRBd01DSWdaRDBpSUUwME9UVXVOVFk0SURrek9VTXlOVGN1T1RrZ09UTTVJRFl4SURjME1pNHdNU0EyTVNBME9UTXVOVFk0UXpZeElESTFOUzQ1T1NBeU5UY3VPVGtnTlRrZ05EazFMalUyT0NBMU9VTTNORFF1TURFZ05Ua2dPVFF4SURJMU5TNDVPU0E1TkRFZ05Ea3pMalUyT0VNNU5ERWdOelF5TGpBeElEYzBOQzR3TVNBNU16a2dORGsxTGpVMk9DQTVNemw2VFRVek1pQXlPRE11TURJeFF6VXpNaUF5TnpNdU5UQTNPVGs1T1RrNU9UazVPU0ExTWpRdU1EWXlJREkyTmlBMU1UUXVOVFl4SURJMk5rZzBPRGN1TkRReVF6UTNOeTQ1TWlBeU5qWWdORGN3TGpBd01TQXlOek11TlRZNElEUTNNQzR3TURFZ01qZ3pMakF5TVZZMU5qUXVPVGsyUXpRM01DNHdNREVnTlRZNUxqZzFOeUEwTnpRdU1UUTNJRFUzTkNBME56a3VNREkySURVM05FZzFNakl1T1RjMVF6VXlOeTQ0TkRjZ05UYzBJRFV6TWlBMU5qa3VPRFE0T1RrNU9UazVPVGs1T1NBMU16SWdOVFkwTGprNU5sWXlPRE11TURJeGVrMDFNREVnTmpJeUxqRTVPVGs1T1RrNU9UazVPVGxETkRjMkxqWTVPU0EyTWpJdU1UazVPVGs1T1RrNU9UazVPU0EwTlRjZ05qUXhMamc1T0RrNU9UazVPVGs1T1RrZ05EVTNJRFkyTmk0eE9UazVPVGs1T1RrNU9UazVVelEzTmk0Mk9Ua2dOekV3TGpFNU9UazVPVGs1T1RrNU9Ua2dOVEF4SURjeE1DNHhPVGs1T1RrNU9UazVPVGs1UXpVeU5TNHpNRE1nTnpFd0xqRTVPVGs1T1RrNU9UazVPVGtnTlRRMUlEWTVNQzQxTURFZ05UUTFJRFkyTmk0eE9UazVPVGs1T1RrNU9UazVVelV5TlM0ek1ETWdOakl5TGpFNU9UazVPVGs1T1RrNU9Ua2dOVEF4SURZeU1pNHhPVGs1T1RrNU9UazVPVGs1ZWlJZ0x6NEtJQ0FnSUR4bmJIbHdhQ0JuYkhsd2FDMXVZVzFsUFNKellXWmxYM04xWTJObGMzTWlDaUFnSUNBZ0lIVnVhV052WkdVOUlpWWplRVZCTURRN0lnb2dJQ0FnSUNCb2IzSnBlaTFoWkhZdGVEMGlNVEF3TUNJZ1pEMGlJRTAxTURBZ09UWXlRek15Tnk0eE1EWWdPVEl5TGpjMU15QXlNREV1TVRBMUlEZzNPUzQwTmpNNU9UazVPVGs1T1RrNUlEZzJMall6TWlBNE5ETXVNVGs1TURBd01EQXdNREF3TVVNNE5pNDJNeklnTnpJeUxqWXdPQ0E0Tmk0M09UTWdOakkzTGpBNU16QXdNREF3TURBd01ERWdPRFl1TnpreklEVXlOaTQwTURBd01EQXdNREF3TURBeFF6ZzJMamM1TXlBeU5ESXVOekV6SURNeE9DNHpOaUE0Tmk0Mk5UQXdNREF3TURBd01EQXhJRFV3TUNBek9FTTJPREV1TmpReUlEZzJMalkxSURreE15NHlNRGNnTWpReUxqY3hNeUE1TVRNdU1qQTNJRFV5Tmk0MFF6a3hNeTR5TURjZ05qSTNMakE1TWlBNU1UTXVNelk0SURjeU1pNDJNRGdnT1RFekxqTTJPQ0E0TkRNdU1UazVRemM1T0M0NE9UVWdPRGM1TGpRMk16azVPVGs1T1RrNU9Ua2dOamN5TGpnNU5DQTVNakl1TnpVeklEUTVPUzQ1T1RrNU9UazVPVGs1T1RrNUlEazJNbnBOTnpVeExqUTVPQ0EyTkRBdU9UVTJURFF5T1M0NU1qRXdNREF3TURBd01EQXhJRE15TkM0ME9FTTBNamd1TURBMU1EQXdNREF3TURBd01TQXpNakl1TlRrME1EQXdNREF3TURBd01TQTBNalF1T1RJd01EQXdNREF3TURBd01TQXpNakl1TmpVMk1EQXdNREF3TURBd01TQTBNak11TURjd01EQXdNREF3TURBd01TQXpNalF1TlRZMU1EQXdNREF3TURBd01Vd3lOelF1T0RFek1EQXdNREF3TURBd01TQTBOemd1TURBM01EQXdNREF3TURBd01VTXlOekl1T1RRMk1EQXdNREF3TURBd01TQTBOemt1T1RRd01EQXdNREF3TURBd01TQXlOekl1TmpreU1EQXdNREF3TURBd01TQTBPRE11TWpJeE1EQXdNREF3TURBd01TQXlOelF1TXpNeElEUTROUzQwTlRNd01EQXdNREF3TURBeFRESTVOQzQyT1Rnd01EQXdNREF3TURBeElEVXhNeTR4TmpVd01EQXdNREF3TURBeFF6STVOaTR5T1Rrd01EQXdNREF3TURBeElEVXhOUzR6TkRVZ01qazVMak15TWpBd01EQXdNREF3TURFZ05URTFMamM0TmpBd01EQXdNREF3TURFZ016QXhMalExTkRBd01EQXdNREF3TURFZ05URTBMakUxTWt3ME1qSXVOakE0TURBd01EQXdNREF3TVNBME1qRXVNamszTURBd01EQXdNREF3TWtNME1qUXVOek00TURBd01EQXdNREF3TVNBME1Ua3VOall6TURBd01EQXdNREF3TVNBME1qZ3VNVFkxTURBd01EQXdNREF3TVNBME1Ua3VOelU0TURBd01EQXdNREF3TWlBME16QXVNVGMyTURBd01EQXdNREF3TVNBME1qRXVORE0xTURBd01EQXdNREF3TWt3M01qVXVNRGd6TURBd01EQXdNREF3TVNBMk5qY3VNVEl3TURBd01EQXdNREF3TVVNM01qY3VNVE0yTURBd01EQXdNREF3TVNBMk5qZ3VPREkxTURBd01EQXdNREF3TWlBM016QXVNelUwSURZMk9DNDJOek13TURBd01EQXdNREF5SURjek1pNHlOek13TURBd01EQXdNREF4SURZMk5pNDNOemd3TURBd01EQXdNREF5VERjMU1TNDBPRGt3TURBd01EQXdNREF4SURZME55NDRNREF3TURBd01EQXdNREF5UXpjMU15NDBNRFl3TURBd01EQXdNREF5SURZME5TNDVNRFF3TURBd01EQXdNREF5SURjMU15NDBNall3TURBd01EQXdNREF5SURZME1pNDROVFV3TURBd01EQXdNREF5SURjMU1TNDBPVGd3TURBd01EQXdNREF5SURZME1DNDVOVFl3TURBd01EQXdNREF4ZWlJZ0x6NEtJQ0FnSUR4bmJIbHdhQ0JuYkhsd2FDMXVZVzFsUFNKellXWmxYM2RoY200aUNpQWdJQ0FnSUhWdWFXTnZaR1U5SWlZamVFVkJNRFU3SWdvZ0lDQWdJQ0JvYjNKcGVpMWhaSFl0ZUQwaU1UQXdNQ0lnWkQwaUlFMDFNREVnT1RRekxqY3dOa016TXpRdU9UVXlJRGt3Tmk0d01UTWdNakV6TGprME1TQTROalF1TkRNNElERXdOQ0E0TWprdU5qQTVRekV3TkNBM01UTXVOemt6SURFd05DNHhOVFVnTmpJeUxqQTJJREV3TkM0eE5UVWdOVEkxTGpNMU5VTXhNRFF1TVRVMUlESTFNaTQ1TURFd01EQXdNREF3TURBeElETXlOaTQxTlRJZ01UQXpMakF4T0NBMU1ERWdOVFl1TWprelF6WTNOUzQwTkRRZ01UQXpMakF4T0NBNE9UY3VPRFExSURJMU1pNDVJRGc1Tnk0NE5EVWdOVEkxTGpNMU5VTTRPVGN1T0RRMUlEWXlNaTR3TmlBNE9UZ2dOekV6TGpjNU15QTRPVGdnT0RJNUxqWXdPVU0zT0RndU1EVTVJRGcyTkM0ME16Z3dNREF3TURBd01EQXhJRFkyTnk0d05EZ2dPVEEyTGpBeE15QTFNREVnT1RRekxqY3dObnBOTkRjM0xqWTNOQ0EyTmpoSU5USTBMak15TmtNMU1qa3VOVEEzTURBd01EQXdNREF3TVNBMk5qZ2dOVE16TGpRNU9DQTJOak11T1RFeE1EQXdNREF3TURBd01TQTFNek11TWpVMklEWTFPQzQzT0RSTU5USXpMakF5TVNBME5ESXVPVU0xTWpJdU9EazNPVGs1T1RrNU9UazVPU0EwTkRBdU16TXlJRFV5TUM0M01EZ2dORE00SURVeE9DNHhNekVnTkRNNFNEUTRNeTQ0TmpkRE5EZ3hMak13TmlBME16Z2dORGM1TGpFd015QTBOREF1TXpRMU1EQXdNREF3TURBd01TQTBOemd1T1RnZ05EUXlMamt6TmpBd01EQXdNREF3TURGTU5EWTRMamMwTkRrNU9UazVPVGs1T1RrZ05qVTRMalkyTkVNME5qZ3VOVEEwSURZMk15NDNOamNnTkRjeUxqUTVPVGs1T1RrNU9UazVPVGtnTmpZNElEUTNOeTQyTnpNNU9UazVPVGs1T1RrNUlEWTJPSHBOTlRBeElETXpNUzQ0TlRnNU9UazVPVGs1T1RrNVF6UTRNaTQ1TkRJZ016TXhMamcxT0RrNU9UazVPVGs1T1RrZ05EWTRMak13TmlBek5EWXVOVFEySURRMk9DNHpNRFlnTXpZMExqWTJOams1T1RrNU9UazVPVGxUTkRneUxqazBNeUF6T1RjdU5EYzBPVGs1T1RrNU9UazVPU0ExTURFZ016azNMalEzTkRrNU9UazVPVGs1T1RsVE5UTXpMalk1TkNBek9ESXVOemczT1RrNU9UazVPVGs1T1NBMU16TXVOamswSURNMk5DNDJOalk1T1RrNU9UazVPVGs1VXpVeE9TNHdOVGdnTXpNeExqZzFPRGs1T1RrNU9UazVPVGtnTlRBd0xqazVPVGs1T1RrNU9UazVPVGtnTXpNeExqZzFPRGs1T1RrNU9UazVPVGw2SWlBdlBnb2dJQ0FnUEdkc2VYQm9JR2RzZVhCb0xXNWhiV1U5SW5OMVkyTmxjM01pQ2lBZ0lDQWdJSFZ1YVdOdlpHVTlJaVlqZUVWQk1EWTdJZ29nSUNBZ0lDQm9iM0pwZWkxaFpIWXRlRDBpTVRBd01DSWdaRDBpSUUweU9EZ3VNemd5SURRMU5DNDRPRGhETWpnd0xqWTVOeUEwTmpJdU9ESXlJREkzT1M0NE1qVWdORGMyTGpVMU9UQXdNREF3TURBd01ERWdNamcyTGpFMU1TQTBPRFV1TVRVMk1EQXdNREF3TURBd01Vd3lPRGt1TWpVMUlEUTRPUzR6Tmpjd01EQXdNREF3TURBeFF6STVOUzQyT1RjZ05EazRMakV6T0RBd01EQXdNREF3TURFZ016QTNMamt5TWpBd01EQXdNREF3TURFZ05EazVMamc0TkRBd01EQXdNREF3TURFZ016RTJMall6TkNBME9UTXVNakV3TURBd01EQXdNREF3TVV3ME1UVXVORElnTkRFM0xqUTVOVEF3TURBd01EQXdNREZETkRJMExqQTVNeUEwTVRBdU9EUXhNREF3TURBd01EQXdNU0EwTXpndU1EZzBJRFF4TVM0eU5EY3dNREF3TURBd01EQXhJRFEwTmk0eU9URWdOREU0TGpBM09EQXdNREF3TURBd01ERk1Oekl4TGpRM055QTJORGN1TXpNME1EQXdNREF3TURBd01VTTNNamt1T0RNNE9UazVPVGs1T1RrNU9TQTJOVFF1TXpBd01EQXdNREF3TURBd01TQTNORE11TURNMElEWTFNeTQyTWpJd01EQXdNREF3TURBeElEYzFNQzQzTnpVZ05qUTFMamszTmpBd01EQXdNREF3TURGTU56UTRMamt4TXlBMk5EY3VPREpETnpVMkxqY3pOQ0EyTkRBdU1EazNJRGMxTmk0M016UWdOakkzTGpZd01UQXdNREF3TURBd01ERWdOelE0TGpjNU9DQTJNVGt1T0RBeFREUTBOUzR6TnpnZ016SXhMakU1TWtNME16Y3VOU0F6TVRNdU5ETXhNREF3TURBd01EQXdNU0EwTWpRdU9UZzFJRE14TXk0MU1EZ3dNREF3TURBd01EQXhJRFF4Tnk0eU1qTWdNekl4TGpVME1qQXdNREF3TURBd01ERk1Namc0TGpNNE1pQTBOVFF1T0RnNGVrMDVOVGNnTkRrMExqTTFNekF3TURBd01EQXdNREZET1RVM0lEYzFNaTQwTURVd01EQXdNREF3TURBeElEYzFNaTQwTURVZ09UVTNJRFE1TkM0ek5UTWdPVFUzUXpJME55NDFPVFVnT1RVM0lEUXpJRGMxTWk0ME1EVXdNREF3TURBd01EQXhJRFF6SURRNU5DNHpOVE13TURBd01EQXdNREF4UXpReklESTBOeTQxT1RVd01EQXdNREF3TURBeElESTBOeTQxT1RVZ05ETWdORGswTGpNMU15QTBNME0zTlRJdU5EQTFJRFF6SURrMU55QXlORGN1TlRrMU1EQXdNREF3TURBd01TQTVOVGNnTkRrMExqTTFNM29pSUM4K0NpQWdJQ0E4WjJ4NWNHZ2daMng1Y0dndGJtRnRaVDBpYzNWalkyVnpjMTlqYVhKamJHVWlDaUFnSUNBZ0lIVnVhV052WkdVOUlpWWplRVZCTURjN0lnb2dJQ0FnSUNCb2IzSnBlaTFoWkhZdGVEMGlNVEF3TUNJZ1pEMGlJRTAxTURBdU5UVXpJRGswTUM0NE5EaERNalUyTGpZM09TQTVOREF1T0RRNElEVTVMakF3TVNBM05ETXVNVFl3TURBd01EQXdNREF3TVNBMU9TNHdNREVnTkRrNUxqSTROa00xT1M0d01ERWdNalUxTGpRMU1EQXdNREF3TURBd01ERWdNalUyTGpZM09TQTFOeTQzTXpNNU9UazVPVGs1T1RrNUlEVXdNQzQxTlRNZ05UY3VOek16T1RrNU9UazVPVGs1T1ZNNU5ESXVNVEEwSURJMU5TNDBOU0E1TkRJdU1UQTBJRFE1T1M0eU9EVTVPVGs1T1RrNU9UazVRemswTWk0eE1EUWdOelF6TGpFMklEYzBOQzQwTWpjZ09UUXdMamcwT0NBMU1EQXVOVFV6TURBd01EQXdNREF3TVNBNU5EQXVPRFE0ZWswMU1EQXVOVFV6SURreExqYzBNams1T1RrNU9UazVPVGxETWpjM0xqZzJOU0E1TVM0M05ESTVPVGs1T1RrNU9UazVJRGszTGpNNU55QXlOekl1TWpZM0lEazNMak01TnlBME9UUXVPRGc1UXprM0xqTTVOeUEzTVRjdU5UVTVJREkzTnk0NE5qVWdPRGs0TGpBMU5TQTFNREF1TlRVeklEZzVPQzR3TlRWRE56SXpMakl3TXlBNE9UZ3VNRFUxSURrd015NDNNRGtnTnpFM0xqVTFPU0E1TURNdU56QTVJRFE1TkM0NE9EbERPVEF6TGpjd09TQXlOekl1TWpZM09UazVPVGs1T1RrNU9TQTNNak11TWpBek1EQXdNREF3TURBd01TQTVNUzQzTkRJNU9UazVPVGs1T1RrNUlEVXdNQzQxTlRNd01EQXdNREF3TURBeElEa3hMamMwTWprNU9UazVPVGs1T1RsNlRUY3hOQzQxTkNBMk5ESXVNemczT1RrNU9UazVPVGs1T1V3ME5EZ3VOVGt6SURReU1DNDRNamRETkRRd0xqWTJJRFF4TkM0eU1qWWdOREkzTGpFMElEUXhNeTQ0TXpNZ05ERTRMamMxT0NBME1qQXVNalkwVERNeU15NHlPRGtnTkRrekxqUXpOa016TVRRdU9EWTVJRFE1T1M0NE9EY3dNREF3TURBd01EQXhJRE13TXk0d05UWWdORGs0TGpJZ01qazJMamd5T1NBME9Ea3VOekl6VERJNU15NDRNamtnTkRnMUxqWTFORU15T0RjdU56RTJJRFEzTnk0ek5EY2dNamc0TGpVMU9UQXdNREF3TURBd01ERWdORFkwTGpBM01EQXdNREF3TURBd01ERWdNamsxTGprNE5TQTBOVFl1TkV3ME1qQXVOVEF5SURNeU55NDFNelJETkRJNExqQXdNeUF6TVRrdU56Y2dORFF3TGpBNU9DQXpNVGt1TmprMUlEUTBOeTQzTVRFZ016STNMakU1TmpBd01EQXdNREF3TURGTU56UXdMamswTXlBMk1UVXVOemMzUXpjME9DNHlPVGNnTmpJekxqQXdOakF3TURBd01EQXdNREVnTnpRNExqVTNPVGs1T1RrNU9UazVPVGtnTmpNMExqTTVOQ0EzTkRFdU9UTWdOalF4TGprd01EQXdNREF3TURBd01ERkROek0wTGpNMU9EazVPVGs1T1RrNU9Ua2dOalE0TGpRNE5TQTNNakl1TXpBeklEWTBPQzQ0TlRNd01EQXdNREF3TURBeElEY3hOQzQxTkNBMk5ESXVNemc0ZWswM05ERXVNRFUySURZME1pNDROVFpETnpReExqTTJPQ0EyTkRJdU5UUTVJRGMwTVM0Mk5EWXdNREF3TURBd01EQXhJRFkwTWk0eU1qSWdOelF4TGprek1TQTJOREV1T1VNM05ESXVNalF6SURZME1TNDJNamc1T1RrNU9UazVPVGs1SURjME1pNDFOakF3TURBd01EQXdNREF4SURZME1TNHpOallnTnpReUxqZzFOaUEyTkRFdU1EYzBURGMwTVM0d05UWWdOalF5TGpnMU5ub2lJQzgrQ2lBZ0lDQThaMng1Y0dnZ1oyeDVjR2d0Ym1GdFpUMGljM1ZqWTJWemMxOXViMTlqYVhKamJHVWlDaUFnSUNBZ0lIVnVhV052WkdVOUlpWWplRVZCTURnN0lnb2dJQ0FnSUNCb2IzSnBlaTFoWkhZdGVEMGlNVEF3TUNJZ1pEMGlJRTAyTUM0NU5UVWdORE0xTGpJeE1VTTBOeTR5TVRVZ05EUTVMakUySURRekxqSXlPQ0EwTnpVdU1ETXhNREF3TURBd01EQXdNU0ExTVM0NE5qVWdORGt5TGpVeE1rdzFOeTQwT1RRZ05UQXpMamszT1VNMk5pNHlNelFnTlRJeExqWTNJRGcyTGpJeklEVXlOaTQyTmpnZ01UQXlMakUzTkNBMU1UVXVNRGs0VERNd05TNHdNVFlnTXpZNExqQXhOa016TWpBdU9UazFJRE0xTmk0ME56a2dNelEyTGpNM05TQXpOVGN1TXpVMElETTJNUzQwTkRRZ016WTVMamM1T1V3NU1ESXVNRGMzSURneE5TNDJNVGc1T1RrNU9UazVPVGs1UXpreE55NHlPRFlnT0RJNExqRTNNaUE1TkRBdU9UZzVJRGd5Tmk0NE1EY2dPVFUwTGpZMU9TQTRNVEl1T1RJNFREazBNUzQ0TWprZ09ESTFMamsyT0RrNU9UazVPVGs1T1RsRE9UVTFMall6T0NBNE1URXVPVFE1SURrMU5TNDJNRElnTnpnNUxqRXhPRGs1T1RrNU9UazVPVGtnT1RReExqWTFNeUEzTnpRdU9UWXhURE0xT1M0eE16UTVPVGs1T1RrNU9UazVJREU0TXk0M016Z3dNREF3TURBd01EQXhRek0wTlM0eE9EVTVPVGs1T1RrNU9UazVJREUyT1M0Mk1UTXdNREF3TURBd01EQXhJRE15TWk0Mk1ERTVPVGs1T1RrNU9UazVJREUyT1M0Mk1UTXdNREF3TURBd01EQXhJRE13T1M0d016WTVPVGs1T1RrNU9UazVJREU0TXk0ek9EaE1OakF1T1RVME9UazVPVGs1T1RrNU9TQTBNelV1TWpFeGVpSWdMejRLSUNBZ0lEeG5iSGx3YUNCbmJIbHdhQzF1WVcxbFBTSjNZV2wwYVc1bklnb2dJQ0FnSUNCMWJtbGpiMlJsUFNJbUkzaEZRVEE1T3lJS0lDQWdJQ0FnYUc5eWFYb3RZV1IyTFhnOUlqRXdNREFpSUdROUlpQk5ORGswTGpReU1TQTVOVEpETWpVd0xqTTJNeUE1TlRJZ05EZ2dOelE1TGpZek9TQTBPQ0EwT1RRdU5ESXhRelE0SURJMU1DNHpOaklnTWpVd0xqTTJNeUEwT0NBME9UUXVOREl4SURRNFF6YzBPUzQyTXpnZ05EZ2dPVFV5SURJMU1DNHpOaklnT1RVeUlEUTVOQzQwTWpGRE9UVXlJRGMwT1M0Mk16a2dOelE1TGpZek9DQTVOVElnTkRrMExqUXlNU0E1TlRKNlRUYzBPQzQySURRd01DNDFOakV3TURBd01EQXdNREF4U0RRMU5DNDRWamN6TlM0d05FZzFNREJXTkRRMUxqYzJTRGMwT0M0MlZqUXdNQzQxTmpFd01EQXdNREF3TURBeGVpSWdMejRLSUNBZ0lEeG5iSGx3YUNCbmJIbHdhQzF1WVcxbFBTSjNZV2wwYVc1blgyTnBjbU5zWlNJS0lDQWdJQ0FnZFc1cFkyOWtaVDBpSmlONFJVRXdRVHNpQ2lBZ0lDQWdJR2h2Y21sNkxXRmtkaTE0UFNJeE1EQXdJaUJrUFNJZ1RUYzBNUzR3TlRZZ05qUXlMamcxTmtNM05ERXVNelk0SURZME1pNDFORGtnTnpReExqWTBOakF3TURBd01EQXdNREVnTmpReUxqSXlNaUEzTkRFdU9UTXhJRFkwTVM0NVF6YzBNaTR5TkRNZ05qUXhMall5T0RrNU9UazVPVGs1T1RrZ056UXlMalUyTURBd01EQXdNREF3TURFZ05qUXhMak0yTmlBM05ESXVPRFUySURZME1TNHdOelJNTnpReExqQTFOaUEyTkRJdU9EVTJlaUJOTlRBd0xqVTFNeUE1TkRBdU9EUTRRekkxTmk0Mk56a2dPVFF3TGpnME9DQTFPUzR3TURFZ056UXpMakUyTURBd01EQXdNREF3TURFZ05Ua3VNREF4SURRNU9TNHlPRFpETlRrdU1EQXhJREkxTlM0ME5UQXdNREF3TURBd01EQXhJREkxTmk0Mk56a2dOVGN1TnpNek9UazVPVGs1T1RrNU9TQTFNREF1TlRVeklEVTNMamN6TXprNU9UazVPVGs1T1RsVE9UUXlMakV3TkNBeU5UVXVORFVnT1RReUxqRXdOQ0EwT1RrdU1qZzFPVGs1T1RrNU9UazVPVU01TkRJdU1UQTBJRGMwTXk0eE5pQTNORFF1TkRJM0lEazBNQzQ0TkRnZ05UQXdMalUxTXpBd01EQXdNREF3TURFZ09UUXdMamcwT0hwTk5UQXdMalUxTXlBNU1TNDNOREk1T1RrNU9UazVPVGs1UXpJM055NDROalVnT1RFdU56UXlPVGs1T1RrNU9UazVPU0E1Tnk0ek9UY2dNamN5TGpJMk55QTVOeTR6T1RjZ05EazBMamc0T1VNNU55NHpPVGNnTnpFM0xqVTFPU0F5TnpjdU9EWTFJRGc1T0M0d05UVWdOVEF3TGpVMU15QTRPVGd1TURVMVF6Y3lNeTR5TURNZ09EazRMakExTlNBNU1ETXVOekE1SURjeE55NDFOVGtnT1RBekxqY3dPU0EwT1RRdU9EZzVRemt3TXk0M01Ea2dNamN5TGpJMk56azVPVGs1T1RrNU9Ua2dOekl6TGpJd016QXdNREF3TURBd01ERWdPVEV1TnpReU9UazVPVGs1T1RrNU9TQTFNREF1TlRVek1EQXdNREF3TURBd01TQTVNUzQzTkRJNU9UazVPVGs1T1RrNWVrMDBOVFVnTmpVelNEUXhPVlkwTURCSU5qY3lWalF6TmtnME5UVjZJaUF2UGdvZ0lDQWdQR2RzZVhCb0lHZHNlWEJvTFc1aGJXVTlJbmRoY200aUNpQWdJQ0FnSUhWdWFXTnZaR1U5SWlZamVFVkJNRUk3SWdvZ0lDQWdJQ0JvYjNKcGVpMWhaSFl0ZUQwaU1UQXdNQ0lnWkQwaUlFMDBPVFF1TWpnMUlEazJNME15TkRRdU1qZzRJRGsyTXlBek55QTNOVFV1TnpFeUlETTNJRFE1TkM0eU9EVkRNemNnTWpRMExqSTROekF3TURBd01EQXdNREVnTWpRMExqSTRPQ0F6TnlBME9UUXVNamcxSURNM1F6YzFOUzQzTVRNZ016Y2dPVFl6SURJME5DNHlPRGN3TURBd01EQXdNREF4SURrMk15QTBPVFF1TWpnMVF6azJNeUEzTlRVdU56RXlJRGMxTlM0M01UTWdPVFl6SURRNU5DNHlPRFVnT1RZemVrMDBOekl1TnpZeklEY3lOMGcxTWpjdU1qTTRRelV6Tnk0eU5UZ2dOekkzSURVME5TNHdNVFl3TURBd01EQXdNREF4SURjeE9DNDROVE13TURBd01EQXdNREF4SURVME5DNDFOVEVnTnpBNExqZ3lOMHcxTXpBdU5qa3lJRFF3T0M0ek16VXdNREF3TURBd01EQXhRelV6TUM0ME5UTWdOREF6TGpJeE1pQTFNall1TVRFM0lETTVPQ0ExTWpFdU1EQXpJRE01T0VnME56Z3VPVGs1UXpRM015NDRPVGdnTXprNElEUTJPUzQxTkRrZ05EQXpMakl4TVNBME5qa3VNekE1SURRd09DNHpNalJNTkRVMUxqUTFJRGN3T0M0eU9URTVPVGs1T1RrNU9UazVRelExTkM0NU9EUWdOekU0TGpNMk56azVPVGs1T1RrNU9Ua2dORFl5TGpjek5DQTNNamNnTkRjeUxqYzJNeUEzTWpkNlRUVXdNQzR3TURBd01EQXdNREF3TURBeElESTFOQzQ0T0RGRE5EYzBMamt5T1NBeU5UUXVPRGd4SURRMU5DNDJNRGtnTWpjMUxqSXdOU0EwTlRRdU5qQTVJRE13TUM0eU56TkRORFUwTGpZd09TQXpNalV1TXpRME1EQXdNREF3TURBd01TQTBOelF1T1RJNUlETTBOUzQyTmprZ05UQXdMakF3TURBd01EQXdNREF3TURFZ016UTFMalkyT1VNMU1qVXVNRGN5SURNME5TNDJOamtnTlRRMUxqTTVNaUF6TWpVdU16UTFNREF3TURBd01EQXdNU0ExTkRVdU16a3lJRE13TUM0eU56TkROVFExTGpNNU1pQXlOelV1TWpBMU1EQXdNREF3TURBd01TQTFNalV1TURjeUlESTFOQzQ0T0RFZ05UQXdMakF3TURBd01EQXdNREF3TURFZ01qVTBMamc0TVhvaUlDOCtDaUFnSUNBOFoyeDVjR2dnWjJ4NWNHZ3RibUZ0WlQwaWFXNW1iMTlqYVhKamJHVWlDaUFnSUNBZ0lIVnVhV052WkdVOUlpWWplRVZCTUVNN0lnb2dJQ0FnSUNCb2IzSnBlaTFoWkhZdGVEMGlNVEF3TUNJZ1pEMGlJRTAxTURBZ05qY3lMakl5TVVNMU16RXVOekEwSURZM01pNHlNakVnTlRVM0xqUXhJRFk1Tnk0NU1qVTVPVGs1T1RrNU9UazVJRFUxTnk0ME1TQTNNamt1TmpORE5UVTNMalF4SURjMk1TNHpNellnTlRNeExqY3dOQ0EzT0RjdU1ETTVJRFV3TUNBM09EY3VNRE01UXpRMk9DNHlPVFFnTnpnM0xqQXpPU0EwTkRJdU5Ua3hJRGMyTVM0ek16VWdORFF5TGpVNU1TQTNNamt1TmpORE5EUXlMalU1TVNBMk9UY3VPVEkxT1RrNU9UazVPVGs1T1NBME5qZ3VNamswSURZM01pNHlNakVnTlRBd0lEWTNNaTR5TWpGNlRUVTFOeTQwTVNBMk1UUXVPREUxU0RReE15NDRPRGxXTlRnMkxqRXhNVWcwTnpFdU1qazFWakkzTUM0ek5qZzVPVGs1T1RrNU9UazVTRFF4TXk0NE9EbFdNalF4TGpZMk56azVPVGs1T1RrNU9UbElOakUwTGpneE9WWXlOekF1TXpZNE9UazVPVGs1T1RrNU9VZzFOVGN1TkRGV05qRTBMamd4TkRrNU9UazVPVGs1T1RsNlRUVXhNeTQ1SURrMU9TNHlOakZETWpRMkxqTTFOaUE1TlRrdU1qWXhJRFF3TGpjek9TQTNOVE11TmpRMElEUXdMamN6T1NBME9EWXVNVU0wTUM0M016a2dNalEyTGpNME5EQXdNREF3TURBd01ERWdNalEyTGpNMU5pQTBNQzQzTkNBMU1UTXVPU0EwTUM0M05FTTNOVE11TmpVMklEUXdMamMwSURrMU9TNHlOaUF5TkRZdU16UTBNREF3TURBd01EQXdNU0E1TlRrdU1qWWdORGcyTGpGRE9UVTVMakkyTVNBM05UTXVOalEwSURjMU15NDJOVFlnT1RVNUxqSTJNU0ExTVRNdU9TQTVOVGt1TWpZeGVrMDFNREFnT1RndU1UUTVNREF3TURBd01EQXdNVU15TnpndU1EWXlJRGs0TGpFME9UQXdNREF3TURBd01ERWdPVGd1TVRRNElESTNPQzR3TkRnd01EQXdNREF3TURBeElEazRMakUwT0NBMU1EQXVNREF3TURBd01EQXdNREF3TVVNNU9DNHhORGdnTnpJeExqa3pPREF3TURBd01EQXdNREVnTWpjNExqQTJNaUE1TURFdU9EVXlJRFV3TUNBNU1ERXVPRFV5UXpjeU1TNDVOVElnT1RBeExqZzFNaUE1TURFdU9EVXhJRGN5TVM0NU16Z3dNREF3TURBd01EQXhJRGt3TVM0NE5URWdOVEF3TGpBd01EQXdNREF3TURBd01ERkRPVEF4TGpnMU1TQXlOemd1TURRNE1EQXdNREF3TURBd01TQTNNakV1T1RVeUlEazRMakUwT1RBd01EQXdNREF3TURFZ05UQXdJRGs0TGpFME9UQXdNREF3TURBd01ERjZJaUF2UGdvZ0lDQWdQR2RzZVhCb0lHZHNlWEJvTFc1aGJXVTlJbU5oYm1ObGJDSUtJQ0FnSUNBZ2RXNXBZMjlrWlQwaUppTjRSVUV3UkRzaUNpQWdJQ0FnSUdodmNtbDZMV0ZrZGkxNFBTSXhNREF3SWlCa1BTSWdUVFkxTXk0M09UZ2dOamd4TGpjMU9VdzFNREFnTlRJM0xqazJURE0wTmk0eU1ERWdOamd4TGpjMU9Vd3pNVGd1TWpReE1EQXdNREF3TURBd01TQTJOVE11TnprNVREUTNNaTR3TkRBd01EQXdNREF3TURBeElEVXdNRXd6TVRndU1qUXhNREF3TURBd01EQXdNU0F6TkRZdU1qQXlURE0wTmk0eU1ERXdNREF3TURBd01EQXhJRE14T0M0eU5ESk1OVEF3TGpBd01EQXdNREF3TURBd01ERWdORGN5TGpBMFREWTFNeTQzT1Rnd01EQXdNREF3TURBeElETXhPQzR5TkRKTU5qZ3hMamMxT0RBd01EQXdNREF3TURJZ016UTJMakl3TWt3MU1qY3VPVFl3TURBd01EQXdNREF3TWlBMU1EQk1Oamd4TGpjMU9EQXdNREF3TURBd01ESWdOalV6TGpjNU9YcE5OVEF3SURrek5VTXlOVGt1TnpVeklEa3pOU0EyTlNBM05EQXVNalEzTURBd01EQXdNREF3TVNBMk5TQTFNREJETmpVZ01qVTVMamMxTkNBeU5Ua3VOelV6SURZMUlEVXdNQ0EyTlVNM05EQXVNalEySURZMUlEa3pOU0F5TlRrdU56VTBJRGt6TlNBMU1EQkRPVE0xSURjME1DNHlORGN3TURBd01EQXdNREF4SURjME1DNHlORFlnT1RNMUlEVXdNQ0E1TXpWNlRUVXdNQ0F4TURRdU5UUTJNREF3TURBd01EQXdNVU15T0RFdU5Ua3lJREV3TkM0MU5EWXdNREF3TURBd01EQXhJREV3TkM0MU5EVWdNamd4TGpVNU16QXdNREF3TURBd01ERWdNVEEwTGpVME5TQTFNREF1TURBd01EQXdNREF3TURBd01VTXhNRFF1TlRRMUlEY3hPQzQwTURnZ01qZ3hMalU1TWlBNE9UVXVORFUxSURVd01DQTRPVFV1TkRVMVF6Y3hPQzQwTURjZ09EazFMalExTlNBNE9UVXVORFUwSURjeE9DNDBNRGdnT0RrMUxqUTFOQ0ExTURBdU1EQXdNREF3TURBd01EQXdNVU00T1RVdU5EVTBJREk0TVM0MU9UTXdNREF3TURBd01EQXhJRGN4T0M0ME1EWTVPVGs1T1RrNU9UazVJREV3TkM0MU5EWXdNREF3TURBd01EQXhJRFE1T1M0NU9UazVPVGs1T1RrNU9UazVJREV3TkM0MU5EWXdNREF3TURBd01EQXhlaUlnTHo0S0lDQThMMlp2Ym5RK0Nqd3ZaR1ZtY3o0S1BDOXpkbWMrQ2c9PScpIGZvcm1hdCgnc3ZnJyk7XHJcbn1cclxuXHJcbltjbGFzc149XCJ3ZXVpX2ljb25fXCJdOmJlZm9yZSwgW2NsYXNzKj1cIiB3ZXVpX2ljb25fXCJdOmJlZm9yZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJ3ZXVpXCI7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgc3BlYWs6IG5vbmU7XHJcblxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogLjJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIG9wYWNpdHk6IC44OyAqL1xyXG5cclxuICAgIC8qIEZvciBzYWZldHkgLSByZXNldCBwYXJlbnQgc3R5bGVzLCB0aGF0IGNhbiBicmVhayBnbHlwaCBjb2RlcyovXHJcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5cclxuICAgIC8qIGZpeCBidXR0b25zIGhlaWdodCwgZm9yIHR3aXR0ZXIgYm9vdHN0cmFwICovXHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG5cclxuICAgIC8qIEFuaW1hdGlvbiBjZW50ZXIgY29tcGVuc2F0aW9uIC0gbWFyZ2lucyBzaG91bGQgYmUgc3ltbWV0cmljICovXHJcbiAgICAvKiByZW1vdmUgaWYgbm90IG5lZWRlZCAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IC4yZW07XHJcblxyXG4gICAgLyogeW91IGNhbiBiZSBtb3JlIGNvbWZvcnRhYmxlIHdpdGggaW5jcmVhc2VkIGljb25zIHNpemUgKi9cclxuICAgIC8qIGZvbnQtc2l6ZTogMTIwJTsgKi9cclxuXHJcbiAgICAvKiBVbmNvbW1lbnQgZm9yIDNEIGVmZmVjdCAqL1xyXG4gICAgLyogdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMTI3LCAxMjcsIDEyNywgMC4zKTsgKi9cclxufVxyXG5cclxuLndldWlfaWNvbl9jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDFcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpX2ljb25fZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDJcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpX2ljb25faW5mbzpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwM1wiIH0gLyogJ+6ggCcgKi9cclxuLndldWlfaWNvbl9zYWZlX3N1Y2Nlc3M6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDRcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpX2ljb25fc2FmZV93YXJuOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTA1XCIgfSAvKiAn7qCAJyAqL1xyXG4ud2V1aV9pY29uX3N1Y2Nlc3M6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDZcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpX2ljb25fc3VjY2Vzc19jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDdcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpX2ljb25fc3VjY2Vzc19ub19jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDhcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpX2ljb25fd2FpdGluZzpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwOVwiIH0gLyogJ+6ggCcgKi9cclxuLndldWlfaWNvbl93YWl0aW5nX2NpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwQVwiIH0gLyogJ+6ggCcgKi9cclxuLndldWlfaWNvbl93YXJuOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTBCXCIgfSAvKiAn7qCAJyAqL1xyXG4ud2V1aV9pY29uX2luZm9fY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTBDXCIgfSAvKiAn7qCAJyAqL1xyXG4ud2V1aV9pY29uX2NhbmNlbDpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwRFwiIH0gLyogJ+6ggCcgKi8iLCJAaW1wb3J0IFwid2V1aV9mb250XCI7XHJcblxyXG5bY2xhc3NePVwid2V1aV9pY29uX1wiXTpiZWZvcmUsIFtjbGFzcyo9XCIgd2V1aV9pY29uX1wiXTpiZWZvcmUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG46YmVmb3JlIHtcclxuICAgIC53ZXVpX2ljb25fc3VjY2VzcyYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBjb2xvcjogIzA5QkIwNztcclxuICAgIH1cclxuICAgIC53ZXVpX2ljb25fd2FpdGluZyYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBjb2xvcjogIzEwQUVGRjtcclxuICAgIH1cclxuICAgIC53ZXVpX2ljb25fd2FybiYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBjb2xvcjogI0Y0MzUzMDtcclxuICAgIH1cclxuICAgIC53ZXVpX2ljb25faW5mbyYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBjb2xvcjogIzEwQUVGRjtcclxuICAgIH1cclxuXHJcbiAgICAud2V1aV9pY29uX3N1Y2Nlc3NfY2lyY2xlJiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjMDlCQjA3O1xyXG4gICAgfVxyXG4gICAgLndldWlfaWNvbl9zdWNjZXNzX25vX2NpcmNsZSYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBjb2xvcjogIzA5QkIwNztcclxuICAgIH1cclxuICAgIC53ZXVpX2ljb25fd2FpdGluZ19jaXJjbGUmIHtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgY29sb3I6ICMxMEFFRkY7XHJcbiAgICB9XHJcbiAgICAud2V1aV9pY29uX2NpcmNsZSYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBjb2xvcjogI0M5QzlDOTtcclxuICAgIH1cclxuICAgIC53ZXVpX2ljb25fZG93bmxvYWQmIHtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgY29sb3I6ICMwOUJCMDc7XHJcbiAgICB9XHJcblxyXG4gICAgLndldWlfaWNvbl9pbmZvX2NpcmNsZSYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBjb2xvcjogIzA5QkIwNztcclxuICAgIH1cclxuXHJcbiAgICAud2V1aV9pY29uX3NhZmVfc3VjY2VzcyYge1xyXG4gICAgICAgIGNvbG9yOiAjMDlCQjA3O1xyXG4gICAgfVxyXG4gICAgLndldWlfaWNvbl9zYWZlX3dhcm4mIHtcclxuICAgICAgICBjb2xvcjogI0ZGQkUwMDtcclxuICAgIH1cclxuXHJcbiAgICAud2V1aV9pY29uX2NhbmNlbCYge1xyXG4gICAgICAgIGNvbG9yOiAjRjQzNTMwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxufVxyXG5cclxuOmJlZm9yZSB7XHJcbiAgICAud2V1aV9pY29uX21zZyYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTA0cHg7XHJcbiAgICAgICAgLndldWlfaWNvbl93YXJuJiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRjc2MjYwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOmJlZm9yZSB7XHJcbiAgICAud2V1aV9pY29uX3NhZmUmIHtcclxuICAgICAgICBmb250LXNpemU6IDEwNHB4O1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuLy8g5a2Y5Zyo5qC35byP5LyY5YWI57qn55qE6Zeu6aKY77yM5pWF6L+Z6YeM5a+55YW25LuWd2V1aV9idG7nmoTlvJXnlKjmlL7lnKjlupXpg6hcclxuLy8g5Li76KaB5pivYnV0dG9uLndldWlfYnRu5Zyod2V1aV9idG5fcGxhaW7kuIvph43lhplib3JkZXItd2lkdGhcclxuXHJcbi53ZXVpX2J0biB7XHJcbiAgICAmLndldWlfYnRuX21pbmkge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBAd2V1aUJ0bk1pbmlIZWlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiBAd2V1aUJ0bk1pbmlGb250U2l6ZTtcclxuICAgICAgICBwYWRkaW5nOiAwIC43NWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9uLCBpbnB1dCB7XHJcbiAgICAmLndldWlfYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi53ZXVpX2J0bl9pbmxpbmUsJi53ZXVpX2J0bl9taW5pIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLypnYXAgYmV0d2VlbiBidG4qL1xyXG4ud2V1aV9idG4gKyAud2V1aV9idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogQHdldWlCdG5EZWZhdWx0R2FwO1xyXG59XHJcblxyXG4ud2V1aV9idG4ud2V1aV9idG5faW5saW5lICsgLndldWlfYnRuLndldWlfYnRuX2lubGluZSB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IEB3ZXVpQnRuRGVmYXVsdEdhcDtcclxufVxyXG5cclxuLndldWlfYnRuX2FyZWEge1xyXG4gICAgbWFyZ2luOiBAd2V1aUNlbGxzTWFyZ2luVG9wIEB3ZXVpQnRuRGVmYXVsdEdhcCAuM2VtO1xyXG4gICAgJi53ZXVpX2J0bl9hcmVhX2lubGluZSB7XHJcbiAgICAgICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLndldWlfYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBAd2V1aUJ0bkRlZmF1bHRHYXA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbXBvcnQgXCJ3ZXVpX2J0bl9nbG9iYWxcIjtcclxuQGltcG9ydCBcIndldWlfYnRuX2RlZmF1bHRcIjtcclxuQGltcG9ydCBcIndldWlfYnRuX3ByaW1hcnlcIjtcclxuQGltcG9ydCBcIndldWlfYnRuX3dhcm5cIjtcclxuQGltcG9ydCBcIndldWlfYnRuX2Rpc2FibGVkXCI7XHJcbkBpbXBvcnQgXCJ3ZXVpX2J0bl9wbGFpblwiOyIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aV9idG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiBAd2V1aUJ0bkZvbnRTaXplO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IEB3ZXVpQnRuRm9udENvbG9yO1xyXG4gICAgbGluZS1oZWlnaHQ6IHVuaXQoQHdldWlCdG5IZWlnaHQvQHdldWlCdG5Gb250U2l6ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiBAd2V1aUJ0bkJvcmRlclJhZGl1cztcclxuICAgIC5zZXRUYXBDb2xvcigpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNSk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQHdldWlCdG5Cb3JkZXJSYWRpdXMqMjtcclxuICAgIH1cclxuXHJcbiAgICAmLndldWlfYnRuX2lubGluZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG59IiwiLy8gdGFwY29sb3JcclxuLnNldFRhcENvbG9yKEBjOnJnYmEoMCwwLDAsMCkpIHtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogQGM7XHJcbn1cclxuXHJcbi8vdXNlciBhY3Rpb25cclxuLm5vX3NlbGVjdCgpIHtcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aV9idG5fZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0bkRlZmF1bHRCZztcclxuICAgIGNvbG9yOiBAd2V1aUJ0bkRlZmF1bHRGb250Q29sb3I7XHJcbiAgICAmOm5vdCgud2V1aV9idG5fZGlzYWJsZWQpOnZpc2l0ZWQge1xyXG4gICAgICAgIGNvbG9yOiBAd2V1aUJ0bkRlZmF1bHRGb250Q29sb3I7XHJcbiAgICB9XHJcbiAgICAmOm5vdCgud2V1aV9idG5fZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6IEB3ZXVpQnRuRGVmYXVsdEFjdGl2ZUZvbnRDb2xvcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0bkRlZmF1bHRBY3RpdmVCZztcclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aV9idG5fcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0blByaW1hcnlCZztcclxuICAgICY6bm90KC53ZXVpX2J0bl9kaXNhYmxlZCk6dmlzaXRlZCB7XHJcbiAgICAgICAgY29sb3I6IEB3ZXVpQnRuRm9udENvbG9yO1xyXG4gICAgfVxyXG4gICAgJjpub3QoLndldWlfYnRuX2Rpc2FibGVkKTphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiBAd2V1aUJ0bkFjdGl2ZUZvbnRDb2xvcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0blByaW1hcnlBY3RpdmVCZztcclxuICAgIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWlfYnRuX3dhcm4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlCdG5XYXJuQmc7XHJcbiAgICAmOm5vdCgud2V1aV9idG5fZGlzYWJsZWQpOnZpc2l0ZWQge1xyXG4gICAgICAgIGNvbG9yOiBAd2V1aUJ0bkZvbnRDb2xvcjtcclxuICAgIH1cclxuICAgICY6bm90KC53ZXVpX2J0bl9kaXNhYmxlZCk6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogQHdldWlCdG5BY3RpdmVGb250Q29sb3I7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlCdG5XYXJuQWN0aXZlQmc7XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpX2J0bl9kaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogQHdldWlCdG5EaXNhYmxlZEZvbnRDb2xvcjtcclxuICAgICYud2V1aV9idG5fZGVmYXVsdCB7XHJcbiAgICAgICAgY29sb3I6IEB3ZXVpQnRuRGVmYXVsdERpc2FibGVkRm9udENvbG9yO1xyXG4gICAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aV9idG5fcGxhaW5fcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogQHdldWlCdG5QcmltYXJ5Qmc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBAd2V1aUJ0blByaW1hcnlCZztcclxuICAgIGJ1dHRvbiYsIGlucHV0JiB7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBAd2V1aUJ0blByaW1hcnlBY3RpdmVCZztcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLndldWlfYnRuX3BsYWluX2RlZmF1bHQge1xyXG4gICAgY29sb3I6ICM1QTVBNUE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNUE1QTVBO1xyXG4gICAgYnV0dG9uJiwgaW5wdXQmIHtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aV9jZWxsIHtcclxuICAgIC8vIG9uZXB4XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgLnNldFRvcExpbmUoQHdldWlDZWxsQm9yZGVyQ29sb3IpO1xyXG4gICAgICAgIGxlZnQ6IEB3ZXVpQ2VsbEdhcEg7XHJcbiAgICB9XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ud2V1aV9jZWxscyB7XHJcbiAgICBtYXJnaW4tdG9wOiBAd2V1aUNlbGxzTWFyZ2luVG9wO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlDZWxsQmc7XHJcbiAgICBsaW5lLWhlaWdodDogQHdldWlDZWxsTGluZUhlaWdodDtcclxuICAgIGZvbnQtc2l6ZTogQHdldWlDZWxsRm9udFNpemU7IC8vY2VsbOS4remXtOacieaViOmrmOW6pjIzcHjvvIzot5/lrqLmiLfnq6/pu5jorqTlm77moIflsLrlr7jkuIDoh7RcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvL+WboOS4uuavj+S4qmNlbGznmoRib3JkZXLkvb/nlKhiZWZvcmXlhYPntKBsZWZ05pCe55qE77yMaWXkuIvkvKrlhYPntKDnmoRjb250YWluaW5nIGJsb2Nr5Lyw6K6h6Lef5qCH5YeG5LiN5ZCM77yM5ZyoY2VsbOS4iueUqG9o5LiN55Sf5pWIXHJcblxyXG4gICAgLy8gb25lcHhcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICAuc2V0VG9wTGluZShAd2V1aUNlbGxCb3JkZXJDb2xvcik7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICAuc2V0Qm90dG9tTGluZShAd2V1aUNlbGxCb3JkZXJDb2xvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpX2NlbGxzX3RpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IC43N2VtOyAvLyAxNXB4IC0g6KGM6auYXHJcbiAgICBtYXJnaW4tYm90dG9tOiAuM2VtOyAvLyA4cHggLSDooYzpq5hcclxuICAgIHBhZGRpbmctbGVmdDogQHdldWlDZWxsR2FwSDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IEB3ZXVpQ2VsbEdhcEg7XHJcbiAgICBjb2xvcjogQGdsb2JhbFRleHRDb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogQHdldWlDZWxsVGlwc0ZvbnRTaXplO1xyXG5cclxuICAgICYgKyAud2V1aV9jZWxscyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLndldWlfY2VsbHNfdGlwcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAuM2VtOyAvLyA4cHggLSDooYzpq5hcclxuICAgIGNvbG9yOiBAZ2xvYmFsVGV4dENvbG9yO1xyXG4gICAgcGFkZGluZy1sZWZ0OiBAd2V1aUNlbGxHYXBIO1xyXG4gICAgcGFkZGluZy1yaWdodDogQHdldWlDZWxsR2FwSDtcclxuICAgIGZvbnQtc2l6ZTogQHdldWlDZWxsVGlwc0ZvbnRTaXplO1xyXG59XHJcblxyXG4ud2V1aV9jZWxsIHtcclxuICAgIHBhZGRpbmc6IEB3ZXVpQ2VsbEdhcFYgQHdldWlDZWxsR2FwSDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLy/ov5nkuKrmmK/kuLrkuoblhbzlrrljZWxsc+WuueWZqG9uZXB45pa55qGI6KKrYmVmb3Jl5oyh5L2P6ICM5YGa55qEXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLndldWlfY2VsbF9mdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiBAZ2xvYmFsVGV4dENvbG9yO1xyXG59XHJcblxyXG4ud2V1aV9jZWxsX3ByaW1hcnkge1xyXG4gICAgZmxleDogMTtcclxufSIsIlxyXG4uc2V0VG9wTGluZShAYzogI0M3QzdDNykge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBAYztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XHJcbn1cclxuXHJcbi5zZXRCb3R0b21MaW5lKEBjOiAjQzdDN0M3KSB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIEBjO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcclxufVxyXG5cclxuLnNldExlZnRMaW5lKEBjOiAjQzdDN0M3KSB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBAYztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuNSk7XHJcbn1cclxuXHJcbi5zZXRSaWdodExpbmUoQGM6ICNDN0M3QzcpIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgQGM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpX2NlbGxzX2FjY2VzcyB7XHJcbiAgICAud2V1aV9jZWxsOm5vdCgubm9fYWNjZXNzKSB7XHJcbiAgICAgICAgLy8g5ZyoY2VsbF9hY2Nlc3PlkozlhbblroPnsbvlnovnmoRjZWxs5re3552A55So55qE5Zy65pmv5LiL77yM5YW25a6DY2VsbOimgeWKoG5vX2FjY2Vzc++8jOmBv+WFjeacieeCueWHu+aAgVxyXG4gICAgICAgIC5zZXRUYXBDb2xvcjtcclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYS53ZXVpX2NlbGwge1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgLndldWlfY2VsbF9mdCB7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgICAuc2V0QXJyb3dfV2FwKHJpZ2h0LCA2cHgsICNDOEM4Q0QsIDJweCk7XHJcbiAgICAgICAgICAgIHRvcDogLTFweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LjNlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gY3NzMiBhcnJvd1xyXG4uYXJyb3coQGJvcmRlcldpZHRoLCBAYm9yZGVyQ29sb3IpIHtcclxuICAgIC5zZXRBcnJvd1dpZHRoKEBib3JkZXJXaWR0aCk7XHJcbiAgICAuc2V0QXJyb3dDb2xvcihAYm9yZGVyQ29sb3IpO1xyXG59XHJcblxyXG4uc2V0QXJyb3dDb2xvcihAYm9yZGVyQ29sb3IpIHtcclxuICAgICYuYXJyb3dfdCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogQGJvcmRlckNvbG9yO1xyXG4gICAgfVxyXG4gICAgJi5hcnJvd19yIHtcclxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogQGJvcmRlckNvbG9yO1xyXG4gICAgfVxyXG4gICAgJi5hcnJvd19iIHtcclxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiBAYm9yZGVyQ29sb3I7XHJcbiAgICB9XHJcbiAgICAmLmFycm93X2wge1xyXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogQGJvcmRlckNvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2V0QXJyb3dXaWR0aChAYm9yZGVyV2lkdGgpIHtcclxuICAgIGJvcmRlci13aWR0aDogQGJvcmRlcldpZHRoO1xyXG59XHJcblxyXG4uc2V0QXJyb3coQGRpcmVjdGlvbiwgQGJvcmRlcldpZHRoLCBAYm9yZGVyQ29sb3IpIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBAYm9yZGVyV2lkdGg7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgLmFycm93X3QoQGJvcmRlckNvbG9yKTtcclxufVxyXG5cclxuLnNldEFycm93KEBkaXJlY3Rpb24sIEBib3JkZXJXaWR0aCwgQGJvcmRlckNvbG9yKSB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBAYm9yZGVyV2lkdGg7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAuYXJyb3dfcihAYm9yZGVyQ29sb3IpO1xyXG59XHJcblxyXG4uc2V0QXJyb3coQGRpcmVjdGlvbiwgQGJvcmRlcldpZHRoLCBAYm9yZGVyQ29sb3IpIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiBAYm9yZGVyV2lkdGg7XHJcbiAgICBib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAuYXJyb3dfYihAYm9yZGVyQ29sb3IpO1xyXG59XHJcblxyXG4uc2V0QXJyb3coQGRpcmVjdGlvbiwgQGJvcmRlcldpZHRoLCBAYm9yZGVyQ29sb3IpIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci13aWR0aDogQGJvcmRlcldpZHRoO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLmFycm93X2woQGJvcmRlckNvbG9yKTtcclxufVxyXG5cclxuLmFycm93X3QoQGMpIHtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBAYztcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4uYXJyb3dfcihAYykge1xyXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IEBjO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4uYXJyb3dfYihAYykge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IEBjO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi5hcnJvd19sKEBjKSB7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogQGM7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4vLyBjc3MzIGFycm93XHJcbi5zZXRBcnJvd1dpZHRoX1dhcChAYm9yZGVyV2lkdGgpIHtcclxuICAgIGJvcmRlci13aWR0aDogQGJvcmRlcldpZHRoIEBib3JkZXJXaWR0aCAwIDA7XHJcbn1cclxuXHJcbi5zZXRBcnJvd1NpemVfV2FwKEBhcnJvd3NpemUpIHtcclxuICAgIGhlaWdodDogQGFycm93c2l6ZTtcclxuICAgIHdpZHRoOiBAYXJyb3dzaXplO1xyXG59XHJcblxyXG4uc2V0QXJyb3dfV2FwKEBkaXJlY3Rpb24sIEBhcnJvd3NpemUsIEBib3JkZXJDb2xvcixAYm9yZGVyV2lkdGgpIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC50cmFuc2Zvcm0odHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgtNDVkZWcpKTtcclxuICAgIC5zZXRBcnJvd1NpemVfV2FwKEBhcnJvd3NpemUpO1xyXG4gICAgLnNldEFycm93V2lkdGhfV2FwKEBib3JkZXJXaWR0aCk7XHJcbiAgICBib3JkZXItY29sb3I6IEBib3JkZXJDb2xvcjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi5zZXRBcnJvd19XYXAoQGRpcmVjdGlvbiwgQGFycm93c2l6ZSwgQGJvcmRlckNvbG9yLEBib3JkZXJXaWR0aCkgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAuc2V0QXJyb3dTaXplX1dhcChAYXJyb3dzaXplKTtcclxuICAgIC5zZXRBcnJvd1dpZHRoX1dhcChAYm9yZGVyV2lkdGgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBAYm9yZGVyQ29sb3I7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMnB4O1xyXG59XHJcblxyXG4uc2V0QXJyb3dfV2FwKEBkaXJlY3Rpb24sIEBhcnJvd3NpemUsIEBib3JkZXJDb2xvcixAYm9yZGVyV2lkdGgpIHdoZW4gKEBkaXJlY3Rpb24gPSBkb3duKSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgLnNldEFycm93U2l6ZV9XYXAoQGFycm93c2l6ZSk7XHJcbiAgICAuc2V0QXJyb3dXaWR0aF9XYXAoQGJvcmRlcldpZHRoKTtcclxuICAgIGJvcmRlci1jb2xvcjogQGJvcmRlckNvbG9yO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbn1cclxuXHJcbi5zZXRBcnJvd19XYXAoQGRpcmVjdGlvbiwgQGFycm93c2l6ZSwgQGJvcmRlckNvbG9yLEBib3JkZXJXaWR0aCkgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgLnNldEFycm93U2l6ZV9XYXAoQGFycm93c2l6ZSk7XHJcbiAgICAuc2V0QXJyb3dXaWR0aF9XYXAoQGJvcmRlcldpZHRoKTtcclxuICAgIGJvcmRlci1jb2xvcjogQGJvcmRlckNvbG9yO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWlfY2hlY2tfbGFiZWwge1xyXG4gICAgLnNldFRhcENvbG9yKCk7XHJcbn1cclxuXHJcbi53ZXVpX2NoZWNre1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTk5OTllbTtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLy8gbWV0aG9kMiBhY2Nlc3NiaWxpdHlcclxuLndldWlfY2VsbHNfcmFkaW97XHJcbiAgICAud2V1aV9jZWxsX2Z0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IEB3ZXVpQ2VsbElubmVyR2FwSDtcclxuICAgIH1cclxuICAgIC53ZXVpX2NlbGwge1xyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLndldWlfY2hlY2sge1xyXG4gICAgLy8gcmFkaW9cclxuICAgIC53ZXVpX2NlbGxzX3JhZGlvICYge1xyXG4gICAgICAgICY6Y2hlY2tlZCB7XHJcbiAgICAgICAgICAgICYgKyAud2V1aV9pY29uX2NoZWNrZWQge1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXEVBMDgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDlCQjA3O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aV9jZWxsc19jaGVja2JveCB7XHJcbiAgICAud2V1aV9jZWxsX2hkIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiBAd2V1aUNlbGxJbm5lckdhcEg7XHJcbiAgICB9XHJcbiAgICAud2V1aV9jZWxsIHtcclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndldWlfaWNvbl9jaGVja2VkIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXEVBMDEnO1xyXG4gICAgICAgICAgICBjb2xvcjogI0M5QzlDOTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIG1ldGhvZDIgYWNjZXNzYmlsaXR5XHJcbi53ZXVpX2NoZWNrIHtcclxuICAgIC8vIGNoZWNrYm94XHJcbiAgICAud2V1aV9jZWxsc19jaGVja2JveCAmIHtcclxuICAgICAgICAmOmNoZWNrZWQge1xyXG4gICAgICAgICAgICAmICsgLndldWlfaWNvbl9jaGVja2VkIHtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxFQTA2JztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzA5QkIwNztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aV9sYWJlbHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHdpZHRoOjNlbTtcclxufVxyXG4ud2V1aV9pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiB1bml0KEB3ZXVpQ2VsbExpbmVIZWlnaHQsIGVtKTtcclxuICAgIGxpbmUtaGVpZ2h0OiBAd2V1aUNlbGxMaW5lSGVpZ2h0O1xyXG5cclxuICAgIC8vIGhpZGVzIHRoZSBzcGluLWJ1dHRvblxyXG4gICAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiwgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbntcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcbi53ZXVpX3RleHRhcmVhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLndldWlfdG9wdGlwcyB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMztcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgJi53ZXVpX3dhcm4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBnbG9iYWxXYXJuQ29sb3I7XHJcbiAgICB9XHJcbn1cclxuLndldWlfY2VsbHNfZm9ybSB7XHJcbiAgICAud2V1aV9jZWxsX3dhcm57XHJcbiAgICAgICAgY29sb3I6QGdsb2JhbFdhcm5Db2xvcjtcclxuICAgICAgICAud2V1aV9pY29uX3dhcm57ZGlzcGxheTppbmxpbmUtYmxvY2s7fVxyXG4gICAgfVxyXG4gICAgLndldWlfY2VsbF9oZCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogLjNlbTtcclxuICAgIH1cclxuICAgIC53ZXVpX2NlbGxfZnR7Zm9udC1zaXplOjA7fVxyXG4gICAgLndldWlfaWNvbl93YXJue1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWlfY2VsbF9zZWxlY3Qge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC53ZXVpX3NlbGVjdCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC53ZXVpX2FjY2Vzc19pY29uIHtcclxuXHJcbiAgICB9XHJcbiAgICAud2V1aV9jZWxsX2Jke1xyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgICAuc2V0QXJyb3dfV2FwKHJpZ2h0LCA2cHgsICNDOEM4Q0QsIDJweCk7XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICByaWdodDogQHdldWlDZWxsR2FwSDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpX3NlbGVjdCB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIGhlaWdodDogQHdldWlDZWxsSGVpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmctbGVmdDogQHdldWlDZWxsR2FwSDtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYmFzZS9mblwiO1xyXG5AaW1wb3J0IFwiLi93ZXVpX3NlbGVjdFwiO1xyXG5cclxuLndldWlfc2VsZWN0X2JlZm9yZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OkB3ZXVpQ2VsbEdhcEg7XHJcbiAgICAud2V1aV9zZWxlY3R7d2lkdGg6YXV0bzt9XHJcbiAgICAud2V1aV9jZWxsX2hkIHtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgLnNldFJpZ2h0TGluZShAd2V1aUNlbGxCb3JkZXJDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAgICAgLnNldEFycm93X1dhcChyaWdodCwgNnB4LCAjQzhDOENELCAycHgpO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IEB3ZXVpQ2VsbEdhcEg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndldWlfY2VsbF9iZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OkB3ZXVpQ2VsbEdhcEg7XHJcbiAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XHJcbkBpbXBvcnQgXCIuL3dldWlfc2VsZWN0XCI7XHJcblxyXG4ud2V1aV9zZWxlY3RfYWZ0ZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OkB3ZXVpQ2VsbEdhcEg7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWlfdmNvZGUge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAud2V1aV9jZWxsX2Z0IHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IEB3ZXVpQ2VsbEhlaWdodDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5Ad2V1aVN3aXRjaEhlaWdodDogMzJweDtcclxuLndldWlfY2VsbF9zd2l0Y2h7XHJcbiAgICBwYWRkaW5nLXRvcDogKEB3ZXVpQ2VsbEhlaWdodCAtIEB3ZXVpU3dpdGNoSGVpZ2h0KSAvIDI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogKEB3ZXVpQ2VsbEhlaWdodCAtIEB3ZXVpU3dpdGNoSGVpZ2h0KSAvIDI7XHJcbn1cclxuLndldWlfc3dpdGNoe1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgaGVpZ2h0OiBAd2V1aVN3aXRjaEhlaWdodDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERkRGREY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiAjREZERkRGO1xyXG4gICAgJjpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogQHdldWlTd2l0Y2hIZWlnaHQgLSAyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkRGRDtcclxuICAgICAgICB0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3M7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVye1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogQHdldWlTd2l0Y2hIZWlnaHQgLSAyO1xyXG4gICAgICAgIGhlaWdodDogQHdldWlTd2l0Y2hIZWlnaHQgLSAyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgIHRyYW5zaXRpb246dHJhbnNmb3JtIC4zcztcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWR7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDRCRTAyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEJFMDI7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5AaW1wb3J0IFwiLi4vd2V1aV9idXR0b24vd2V1aV9idXR0b25cIjtcclxuXHJcbi53ZXVpX21zZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogQHdldWlNc2dQYWRkaW5nVG9wO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC53ZXVpX2ljb25fYXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHdldWlNc2dJY29uR2FwO1xyXG4gICAgfVxyXG5cclxuICAgIC53ZXVpX3RleHRfYXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHdldWlNc2dUZXh0R2FwO1xyXG4gICAgICAgIHBhZGRpbmc6MCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLndldWlfbXNnX3RpdGxlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBAd2V1aU1zZ1RpdGxlR2FwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLndldWlfbXNnX2Rlc2Mge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogQGdsb2JhbFRleHRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAud2V1aV9vcHJfYXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHdldWlNc2dPcHJHYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLndldWlfZXh0cmFfYXJlYSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHdldWlNc2dFeHRyYUFyZWFHYXA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiBAZ2xvYmFsVGV4dENvbG9yO1xyXG4gICAgICAgIGF7Y29sb3I6IEBnbG9iYWxMaW5rQ29sb3I7fVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogQHdldWlNc2dFeHRyYUFyZWFPZk1pbkhlaWdodCkge1xyXG4gICAgLndldWlfZXh0cmFfYXJlYSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aV9hcnRpY2xlIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjc1ZW07XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuM2VtO1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWlfcHJvZ3Jlc3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53ZXVpX3Byb2dyZXNzX2JhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aVByb2dyZXNzQmc7XHJcbiAgICBoZWlnaHQ6IEB3ZXVpUHJvZ3Jlc3NIZWlnaHQ7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4ud2V1aV9wcm9ncmVzc19pbm5lcl9iYXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aVByb2dyZXNzQ29sb3I7XHJcbn1cclxuXHJcbi53ZXVpX3Byb2dyZXNzX29wciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbkB3ZXVpRGlhbG9nQmFja2dyb3VuZENvbG9yOiAjRkFGQUZDO1xyXG5Ad2V1aURpYWxvZ0xpbmVDb2xvcjogI0Q1RDVENjtcclxuQHdldWlEaWFsb2dMaW5rQ29sb3I6ICMzQ0M1MUY7XHJcbkB3ZXVpRGlhbG9nTGlua0FjdGl2ZUJjOiAjRUVFRUVFO1xyXG5cclxuLndldWlfZGlhbG9nIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEzO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlEaWFsb2dCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAud2V1aV9kaWFsb2dfY29uZmlybSAmIHtcclxuICAgICAgICAud2V1aV9kaWFsb2dfaGQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjJlbSAyMHB4IC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53ZXVpX2RpYWxvZ19iZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ud2V1aV9kaWFsb2dfaGQge1xyXG4gICAgcGFkZGluZzogMS4yZW0gMCAuNWVtO1xyXG59XHJcblxyXG4ud2V1aV9kaWFsb2dfdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLndldWlfZGlhbG9nX2JkIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBAZ2xvYmFsVGV4dENvbG9yO1xyXG59XHJcblxyXG4ud2V1aV9kaWFsb2dfZnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgY29sb3I6IEB3ZXVpRGlhbG9nTGlua0NvbG9yO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAuc2V0VGFwQ29sb3I7XHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aURpYWxvZ0xpbmtBY3RpdmVCYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAuc2V0VG9wTGluZShAd2V1aURpYWxvZ0xpbmVDb2xvcik7XHJcbiAgICB9XHJcbiAgICAud2V1aV9kaWFsb2dfY29uZmlybSAmIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgLnNldExlZnRMaW5lKEB3ZXVpRGlhbG9nTGluZUNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpX2J0bl9kaWFsb2cge1xyXG4gICAgJi5kZWZhdWx0IHtcclxuICAgICAgICBjb2xvcjogIzM1MzUzNTtcclxuICAgIH1cclxuICAgICYucHJpbWFyeSB7XHJcbiAgICAgICAgY29sb3I6ICMwQkIyMEM7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLndldWlfZGlhbG9nIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aV90b2FzdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgd2lkdGg6IDcuNmVtO1xyXG4gICAgbWluLWhlaWdodDogNy42ZW07XHJcbiAgICB0b3A6IDE4MHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zLjhlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCwgMC43NSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4ud2V1aV9pY29uX3RvYXN0IHtcclxuICAgIG1hcmdpbjogMjJweCAwIDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnXFxFQTA4JztcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICB9XHJcbn1cclxuLndldWlfdG9hc3RfY29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xyXG59XHJcblxyXG4vLyBsb2FkaW5nIHRvYXN0XHJcbi53ZXVpX2xvYWRpbmdfdG9hc3R7XHJcbiAgICAud2V1aV90b2FzdF9jb250ZW50e1xyXG4gICAgICBtYXJnaW4tdG9wOjY0JTtcclxuICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB9XHJcbn1cclxuLndldWlfbG9hZGluZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICB6LWluZGV4OiAyMDAwMDAwMDAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAzOCU7XHJcbn1cclxuLndldWlfbG9hZGluZ19sZWFme1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgb3BhY2l0eTogMC4yNTtcclxuICAgICY6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6XCIgXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA4LjE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzLjA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDIwOSwgMjA5LCAyMTMpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOTgwMzkyKSAwcHggMHB4IDFweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCA1MCUgMHB4O1xyXG4gICAgfVxyXG4gICAgJl8we1xyXG4gICAgICAgIGFuaW1hdGlvbjogb3BhY2l0eS02MC0yNS0wLTEyIDEuMjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmXzF7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTEtMTIgMS4yNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmXzJ7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTItMTIgMS4yNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmXzN7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTMtMTIgMS4yNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmXzR7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTQtMTIgMS4yNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpIHRyYW5zbGF0ZSg3LjkycHgsIDBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl81e1xyXG4gICAgICAgIGFuaW1hdGlvbjogb3BhY2l0eS02MC0yNS01LTEyIDEuMjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKSB0cmFuc2xhdGUoNy45MnB4LCAwcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfNntcclxuICAgICAgICBhbmltYXRpb246IG9wYWNpdHktNjAtMjUtNi0xMiAxLjI1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmXzd7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTctMTIgMS4yNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpIHRyYW5zbGF0ZSg3LjkycHgsIDBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl84e1xyXG4gICAgICAgIGFuaW1hdGlvbjogb3BhY2l0eS02MC0yNS04LTEyIDEuMjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKSB0cmFuc2xhdGUoNy45MnB4LCAwcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfOXtcclxuICAgICAgICBhbmltYXRpb246IG9wYWNpdHktNjAtMjUtOS0xMiAxLjI1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmXzEwe1xyXG4gICAgICAgIGFuaW1hdGlvbjogb3BhY2l0eS02MC0yNS0xMC0xMiAxLjI1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwMGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmXzExe1xyXG4gICAgICAgIGFuaW1hdGlvbjogb3BhY2l0eS02MC0yNS0xMS0xMiAxLjI1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtMC0xMiB7XHJcbiAgMCUgeyBvcGFjaXR5OiAwLjI1OyB9XHJcbiAgMC4wMSUgeyBvcGFjaXR5OiAwLjI1OyB9XHJcbiAgMC4wMiUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgNjAuMDElIHsgb3BhY2l0eTogMC4yNTsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjI1OyB9XHJcbn1ALXdlYmtpdC1rZXlmcmFtZXMgb3BhY2l0eS02MC0yNS0xLTEyIHtcclxuICAwJSB7IG9wYWNpdHk6IDAuMjU7IH1cclxuICA4LjM0MzMzJSB7IG9wYWNpdHk6IDAuMjU7IH1cclxuICA4LjM1MzMzJSB7IG9wYWNpdHk6IDE7IH1cclxuICA2OC4zNDMzJSB7IG9wYWNpdHk6IDAuMjU7IH1cclxuICAxMDAlIHsgb3BhY2l0eTogMC4yNTsgfVxyXG59QC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtMi0xMiB7XHJcbiAgMCUgeyBvcGFjaXR5OiAwLjI1OyB9XHJcbiAgMTYuNjc2NyUgeyBvcGFjaXR5OiAwLjI1OyB9XHJcbiAgMTYuNjg2NyUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgNzYuNjc2NyUgeyBvcGFjaXR5OiAwLjI1OyB9XHJcbiAgMTAwJSB7IG9wYWNpdHk6IDAuMjU7IH1cclxufUAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5LTYwLTI1LTMtMTIge1xyXG4gIDAlIHsgb3BhY2l0eTogMC4yNTsgfVxyXG4gIDI1LjAxJSB7IG9wYWNpdHk6IDAuMjU7IH1cclxuICAyNS4wMiUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgODUuMDElIHsgb3BhY2l0eTogMC4yNTsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjI1OyB9XHJcbn1ALXdlYmtpdC1rZXlmcmFtZXMgb3BhY2l0eS02MC0yNS00LTEyIHtcclxuICAwJSB7IG9wYWNpdHk6IDAuMjU7IH1cclxuICAzMy4zNDMzJSB7IG9wYWNpdHk6IDAuMjU7IH1cclxuICAzMy4zNTMzJSB7IG9wYWNpdHk6IDE7IH1cclxuICA5My4zNDMzJSB7IG9wYWNpdHk6IDAuMjU7IH1cclxuICAxMDAlIHsgb3BhY2l0eTogMC4yNTsgfVxyXG59QC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtNS0xMiB7XHJcbiAgMCUgeyBvcGFjaXR5OiAwLjI3MDk1ODMzMzMzMzMzMzsgfVxyXG4gIDQxLjY3NjclIHsgb3BhY2l0eTogMC4yNTsgfVxyXG4gIDQxLjY4NjclIHsgb3BhY2l0eTogMTsgfVxyXG4gIDEuNjc2NjclIHsgb3BhY2l0eTogMC4yNTsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjI3MDk1ODMzMzMzMzMzMzsgfVxyXG59QC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtNi0xMiB7XHJcbiAgMCUgeyBvcGFjaXR5OiAwLjM3NTEyNTsgfVxyXG4gIDUwLjAxJSB7IG9wYWNpdHk6IDAuMjU7IH1cclxuICA1MC4wMiUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgMTAuMDElIHsgb3BhY2l0eTogMC4yNTsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjM3NTEyNTsgfVxyXG59QC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtNy0xMiB7XHJcbiAgMCUgeyBvcGFjaXR5OiAwLjQ3OTI5MTY2NjY2NjY2NzsgfVxyXG4gIDU4LjM0MzMlIHsgb3BhY2l0eTogMC4yNTsgfVxyXG4gIDU4LjM1MzMlIHsgb3BhY2l0eTogMTsgfVxyXG4gIDE4LjM0MzMlIHsgb3BhY2l0eTogMC4yNTsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjQ3OTI5MTY2NjY2NjY2NzsgfVxyXG59QC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtOC0xMiB7XHJcbiAgMCUgeyBvcGFjaXR5OiAwLjU4MzQ1ODMzMzMzMzMzMzsgfVxyXG4gIDY2LjY3NjclIHsgb3BhY2l0eTogMC4yNTsgfVxyXG4gIDY2LjY4NjclIHsgb3BhY2l0eTogMTsgfVxyXG4gIDI2LjY3NjclIHsgb3BhY2l0eTogMC4yNTsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjU4MzQ1ODMzMzMzMzMzMzsgfVxyXG59QC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtOS0xMiB7XHJcbiAgMCUgeyBvcGFjaXR5OiAwLjY4NzYyNTsgfVxyXG4gIDc1LjAxJSB7IG9wYWNpdHk6IDAuMjU7IH1cclxuICA3NS4wMiUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgMzUuMDElIHsgb3BhY2l0eTogMC4yNTsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAwLjY4NzYyNTsgfVxyXG59QC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtMTAtMTIge1xyXG4gIDAlIHsgb3BhY2l0eTogMC43OTE3OTE2NjY2NjY2Njc7IH1cclxuICA4My4zNDMzJSB7IG9wYWNpdHk6IDAuMjU7IH1cclxuICA4My4zNTMzJSB7IG9wYWNpdHk6IDE7IH1cclxuICA0My4zNDMzJSB7IG9wYWNpdHk6IDAuMjU7IH1cclxuICAxMDAlIHsgb3BhY2l0eTogMC43OTE3OTE2NjY2NjY2Njc7IH1cclxufUAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5LTYwLTI1LTExLTEyIHtcclxuICAwJSB7IG9wYWNpdHk6IDAuODk1OTU4MzMzMzMzMzMzOyB9XHJcbiAgOTEuNjc2NyUgeyBvcGFjaXR5OiAwLjI1OyB9XHJcbiAgOTEuNjg2NyUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgNTEuNjc2NyUgeyBvcGFjaXR5OiAwLjI1OyB9XHJcbiAgMTAwJSB7IG9wYWNpdHk6IDAuODk1OTU4MzMzMzMzMzMzOyB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpX21hc2sge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjYpO1xyXG59XHJcblxyXG4ud2V1aV9tYXNrX3RyYW5zcGFyZW50IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi53ZXVpX21hc2tfdHJhbnNpdGlvbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcclxuICAgIHRyYW5zaXRpb246YmFja2dyb3VuZCAuM3M7XHJcbn1cclxuLndldWlfZmFkZV90b2dnbGV7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC42KTtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcbkBiZ0NvbG9yOiNFQ0VDRUM7XHJcbi53ZXVpX2FjdGlvbnNoZWV0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IEBwYWdlRGVmYXVsdEJhY2tncm91bmRDb2xvcjtcclxuICAgIC8vc2xpZGUgdXAgYW5pbWF0aW9uXHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xyXG59XHJcbi53ZXVpX2FjdGlvbnNoZWV0X21lbnV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi53ZXVpX2FjdGlvbnNoZWV0X2FjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi53ZXVpX2FjdGlvbnNoZWV0X2NlbGwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIC5zZXRUb3BMaW5lKEB3ZXVpQ2VsbEJvcmRlckNvbG9yKTtcclxuICAgIH1cclxuICAgICY6YWN0aXZle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBiZ0NvbG9yO1xyXG4gICAgfVxyXG4gICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vYWN0aW9uU2hlZXQgYW5pYW10aW9uXHJcbi53ZXVpX2FjdGlvbnNoZWV0X3RvZ2dsZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9 */\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* Riot v2.3.12, @license MIT, (c) 2015 Muut Inc. + contributors */
	
	;(function(window, undefined) {
	  'use strict';
	var riot = { version: 'v2.3.12', settings: {} },
	  // be aware, internal usage
	  // ATTENTION: prefix the global dynamic variables with `__`
	
	  // counter to give a unique id to all the Tag instances
	  __uid = 0,
	  // tags instances cache
	  __virtualDom = [],
	  // tags implementation cache
	  __tagImpl = {},
	
	  /**
	   * Const
	   */
	  // riot specific prefixes
	  RIOT_PREFIX = 'riot-',
	  RIOT_TAG = RIOT_PREFIX + 'tag',
	
	  // for typeof == '' comparisons
	  T_STRING = 'string',
	  T_OBJECT = 'object',
	  T_UNDEF  = 'undefined',
	  T_FUNCTION = 'function',
	  // special native tags that cannot be treated like the others
	  SPECIAL_TAGS_REGEX = /^(?:opt(ion|group)|tbody|col|t[rhd])$/,
	  RESERVED_WORDS_BLACKLIST = ['_item', '_id', '_parent', 'update', 'root', 'mount', 'unmount', 'mixin', 'isMounted', 'isLoop', 'tags', 'parent', 'opts', 'trigger', 'on', 'off', 'one'],
	
	  // version# for IE 8-11, 0 for others
	  IE_VERSION = (window && window.document || {}).documentMode | 0
	/* istanbul ignore next */
	riot.observable = function(el) {
	
	  /**
	   * Extend the original object or create a new empty one
	   * @type { Object }
	   */
	
	  el = el || {}
	
	  /**
	   * Private variables and methods
	   */
	
	  var callbacks = {},
	    onEachEvent = function(e, fn) { e.replace(/\S+/g, fn) },
	    defineProperty = function (key, value) {
	      Object.defineProperty(el, key, {
	        value: value,
	        enumerable: false,
	        writable: false,
	        configurable: false
	      })
	    }
	
	  /**
	   * Listen to the given space separated list of `events` and execute the `callback` each time an event is triggered.
	   * @param  { String } events - events ids
	   * @param  { Function } fn - callback function
	   * @returns { Object } el
	   */
	
	  defineProperty('on', function(events, fn) {
	    if (typeof fn != 'function')  return el
	
	    onEachEvent(events, function(name, pos) {
	      (callbacks[name] = callbacks[name] || []).push(fn)
	      fn.typed = pos > 0
	    })
	
	    return el
	  })
	
	  /**
	   * Removes the given space separated list of `events` listeners
	   * @param   { String } events - events ids
	   * @param   { Function } fn - callback function
	   * @returns { Object } el
	   */
	
	  defineProperty('off', function(events, fn) {
	    if (events == '*') callbacks = {}
	    else {
	      onEachEvent(events, function(name) {
	        if (fn) {
	          var arr = callbacks[name]
	          for (var i = 0, cb; cb = arr && arr[i]; ++i) {
	            if (cb == fn) arr.splice(i--, 1)
	          }
	        } else delete callbacks[name]
	      })
	    }
	    return el
	  })
	
	  /**
	   * Listen to the given space separated list of `events` and execute the `callback` at most once
	   * @param   { String } events - events ids
	   * @param   { Function } fn - callback function
	   * @returns { Object } el
	   */
	
	  defineProperty('one', function(events, fn) {
	    function on() {
	      el.off(events, on)
	      fn.apply(el, arguments)
	    }
	    return el.on(events, on)
	  })
	
	  /**
	   * Execute all callback functions that listen to the given space separated list of `events`
	   * @param   { String } events - events ids
	   * @returns { Object } el
	   */
	
	  defineProperty('trigger', function(events) {
	
	    // getting the arguments
	    // skipping the first one
	    var arglen = arguments.length - 1,
	      args = new Array(arglen)
	    for (var i = 0; i < arglen; i++) {
	      args[i] = arguments[i + 1]
	    }
	
	    onEachEvent(events, function(name) {
	
	      var fns = (callbacks[name] || []).slice(0)
	
	      for (var i = 0, fn; fn = fns[i]; ++i) {
	        if (fn.busy) return
	        fn.busy = 1
	
	        try {
	          fn.apply(el, fn.typed ? [name].concat(args) : args)
	        } catch (e) { el.trigger('error', e) }
	        if (fns[i] !== fn) { i-- }
	        fn.busy = 0
	      }
	
	      if (callbacks.all && name != 'all')
	        el.trigger.apply(el, ['all', name].concat(args))
	
	    })
	
	    return el
	  })
	
	  return el
	
	}
	/* istanbul ignore next */
	;(function(riot) { if (!window) return;
	
	/**
	 * Simple client-side router
	 * @module riot-route
	 */
	
	
	var RE_ORIGIN = /^.+?\/+[^\/]+/,
	  EVENT_LISTENER = 'EventListener',
	  REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER,
	  ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER,
	  HAS_ATTRIBUTE = 'hasAttribute',
	  REPLACE = 'replace',
	  POPSTATE = 'popstate',
	  HASHCHANGE = 'hashchange',
	  TRIGGER = 'trigger',
	  MAX_EMIT_STACK_LEVEL = 3,
	  win = window,
	  doc = document,
	  loc = win.history.location || win.location, // see html5-history-api
	  prot = Router.prototype, // to minify more
	  clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click',
	  started = false,
	  central = riot.observable(),
	  routeFound = false,
	  debouncedEmit,
	  base, current, parser, secondParser, emitStack = [], emitStackLevel = 0
	
	/**
	 * Default parser. You can replace it via router.parser method.
	 * @param {string} path - current path (normalized)
	 * @returns {array} array
	 */
	function DEFAULT_PARSER(path) {
	  return path.split(/[/?#]/)
	}
	
	/**
	 * Default parser (second). You can replace it via router.parser method.
	 * @param {string} path - current path (normalized)
	 * @param {string} filter - filter string (normalized)
	 * @returns {array} array
	 */
	function DEFAULT_SECOND_PARSER(path, filter) {
	  var re = new RegExp('^' + filter[REPLACE](/\*/g, '([^/?#]+?)')[REPLACE](/\.\./, '.*') + '$'),
	    args = path.match(re)
	
	  if (args) return args.slice(1)
	}
	
	/**
	 * Simple/cheap debounce implementation
	 * @param   {function} fn - callback
	 * @param   {number} delay - delay in seconds
	 * @returns {function} debounced function
	 */
	function debounce(fn, delay) {
	  var t
	  return function () {
	    clearTimeout(t)
	    t = setTimeout(fn, delay)
	  }
	}
	
	/**
	 * Set the window listeners to trigger the routes
	 * @param {boolean} autoExec - see route.start
	 */
	function start(autoExec) {
	  debouncedEmit = debounce(emit, 1)
	  win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit)
	  win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit)
	  doc[ADD_EVENT_LISTENER](clickEvent, click)
	  if (autoExec) emit(true)
	}
	
	/**
	 * Router class
	 */
	function Router() {
	  this.$ = []
	  riot.observable(this) // make it observable
	  central.on('stop', this.s.bind(this))
	  central.on('emit', this.e.bind(this))
	}
	
	function normalize(path) {
	  return path[REPLACE](/^\/|\/$/, '')
	}
	
	function isString(str) {
	  return typeof str == 'string'
	}
	
	/**
	 * Get the part after domain name
	 * @param {string} href - fullpath
	 * @returns {string} path from root
	 */
	function getPathFromRoot(href) {
	  return (href || loc.href)[REPLACE](RE_ORIGIN, '')
	}
	
	/**
	 * Get the part after base
	 * @param {string} href - fullpath
	 * @returns {string} path from base
	 */
	function getPathFromBase(href) {
	  return base[0] == '#'
	    ? (href || loc.href).split(base)[1] || ''
	    : getPathFromRoot(href)[REPLACE](base, '')
	}
	
	function emit(force) {
	  // the stack is needed for redirections
	  var isRoot = emitStackLevel == 0
	  if (MAX_EMIT_STACK_LEVEL <= emitStackLevel) return
	
	  emitStackLevel++
	  emitStack.push(function() {
	    var path = getPathFromBase()
	    if (force || path != current) {
	      central[TRIGGER]('emit', path)
	      current = path
	    }
	  })
	  if (isRoot) {
	    while (emitStack.length) {
	      emitStack[0]()
	      emitStack.shift()
	    }
	    emitStackLevel = 0
	  }
	}
	
	function click(e) {
	  if (
	    e.which != 1 // not left click
	    || e.metaKey || e.ctrlKey || e.shiftKey // or meta keys
	    || e.defaultPrevented // or default prevented
	  ) return
	
	  var el = e.target
	  while (el && el.nodeName != 'A') el = el.parentNode
	  if (
	    !el || el.nodeName != 'A' // not A tag
	    || el[HAS_ATTRIBUTE]('download') // has download attr
	    || !el[HAS_ATTRIBUTE]('href') // has no href attr
	    || el.target && el.target != '_self' // another window or frame
	    || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) == -1 // cross origin
	  ) return
	
	  if (el.href != loc.href) {
	    if (
	      el.href.split('#')[0] == loc.href.split('#')[0] // internal jump
	      || base != '#' && getPathFromRoot(el.href).indexOf(base) !== 0 // outside of base
	      || !go(getPathFromBase(el.href), el.title || doc.title) // route not found
	    ) return
	  }
	
	  e.preventDefault()
	}
	
	/**
	 * Go to the path
	 * @param {string} path - destination path
	 * @param {string} title - page title
	 * @returns {boolean} - route not found flag
	 */
	function go(path, title) {
	  title = title || doc.title
	  // browsers ignores the second parameter `title`
	  history.pushState(null, title, base + normalize(path))
	  // so we need to set it manually
	  doc.title = title
	  routeFound = false
	  emit()
	  return routeFound
	}
	
	/**
	 * Go to path or set action
	 * a single string:                go there
	 * two strings:                    go there with setting a title
	 * a single function:              set an action on the default route
	 * a string/RegExp and a function: set an action on the route
	 * @param {(string|function)} first - path / action / filter
	 * @param {(string|RegExp|function)} second - title / action
	 */
	prot.m = function(first, second) {
	  if (isString(first) && (!second || isString(second))) go(first, second)
	  else if (second) this.r(first, second)
	  else this.r('@', first)
	}
	
	/**
	 * Stop routing
	 */
	prot.s = function() {
	  this.off('*')
	  this.$ = []
	}
	
	/**
	 * Emit
	 * @param {string} path - path
	 */
	prot.e = function(path) {
	  this.$.concat('@').some(function(filter) {
	    var args = (filter == '@' ? parser : secondParser)(normalize(path), normalize(filter))
	    if (typeof args != 'undefined') {
	      this[TRIGGER].apply(null, [filter].concat(args))
	      return routeFound = true // exit from loop
	    }
	  }, this)
	}
	
	/**
	 * Register route
	 * @param {string} filter - filter for matching to url
	 * @param {function} action - action to register
	 */
	prot.r = function(filter, action) {
	  if (filter != '@') {
	    filter = '/' + normalize(filter)
	    this.$.push(filter)
	  }
	  this.on(filter, action)
	}
	
	var mainRouter = new Router()
	var route = mainRouter.m.bind(mainRouter)
	
	/**
	 * Create a sub router
	 * @returns {function} the method of a new Router object
	 */
	route.create = function() {
	  var newSubRouter = new Router()
	  // stop only this sub-router
	  newSubRouter.m.stop = newSubRouter.s.bind(newSubRouter)
	  // return sub-router's main method
	  return newSubRouter.m.bind(newSubRouter)
	}
	
	/**
	 * Set the base of url
	 * @param {(str|RegExp)} arg - a new base or '#' or '#!'
	 */
	route.base = function(arg) {
	  base = arg || '#'
	  current = getPathFromBase() // recalculate current path
	}
	
	/** Exec routing right now **/
	route.exec = function() {
	  emit(true)
	}
	
	/**
	 * Replace the default router to yours
	 * @param {function} fn - your parser function
	 * @param {function} fn2 - your secondParser function
	 */
	route.parser = function(fn, fn2) {
	  if (!fn && !fn2) {
	    // reset parser for testing...
	    parser = DEFAULT_PARSER
	    secondParser = DEFAULT_SECOND_PARSER
	  }
	  if (fn) parser = fn
	  if (fn2) secondParser = fn2
	}
	
	/**
	 * Helper function to get url query as an object
	 * @returns {object} parsed query
	 */
	route.query = function() {
	  var q = {}
	  loc.href[REPLACE](/[?&](.+?)=([^&]*)/g, function(_, k, v) { q[k] = v })
	  return q
	}
	
	/** Stop routing **/
	route.stop = function () {
	  if (started) {
	    win[REMOVE_EVENT_LISTENER](POPSTATE, debouncedEmit)
	    win[REMOVE_EVENT_LISTENER](HASHCHANGE, debouncedEmit)
	    doc[REMOVE_EVENT_LISTENER](clickEvent, click)
	    central[TRIGGER]('stop')
	    started = false
	  }
	}
	
	/**
	 * Start routing
	 * @param {boolean} autoExec - automatically exec after starting if true
	 */
	route.start = function (autoExec) {
	  if (!started) {
	    if (document.readyState == 'complete') start(autoExec)
	    // the timeout is needed to solve
	    // a weird safari bug https://github.com/riot/route/issues/33
	    else win[ADD_EVENT_LISTENER]('load', function() {
	      setTimeout(function() { start(autoExec) }, 1)
	    })
	    started = true
	  }
	}
	
	/** Prepare the router **/
	route.base()
	route.parser()
	
	riot.route = route
	})(riot)
	/* istanbul ignore next */
	
	/**
	 * The riot template engine
	 * @version v2.3.19
	 */
	
	/**
	 * @module brackets
	 *
	 * `brackets         ` Returns a string or regex based on its parameter
	 * `brackets.settings` Mirrors the `riot.settings` object (use brackets.set in new code)
	 * `brackets.set     ` Change the current riot brackets
	 */
	
	var brackets = (function (UNDEF) {
	
	  var
	    REGLOB  = 'g',
	
	    MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,
	    STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,
	
	    S_QBSRC = STRINGS.source + '|' +
	      /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' +
	      /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,
	
	    DEFAULT = '{ }',
	
	    FINDBRACES = {
	      '(': RegExp('([()])|'   + S_QBSRC, REGLOB),
	      '[': RegExp('([[\\]])|' + S_QBSRC, REGLOB),
	      '{': RegExp('([{}])|'   + S_QBSRC, REGLOB)
	    }
	
	  var
	    cachedBrackets = UNDEF,
	    _regex,
	    _pairs = []
	
	  function _loopback(re) { return re }
	
	  function _rewrite(re, bp) {
	    if (!bp) bp = _pairs
	    return new RegExp(
	      re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : ''
	    )
	  }
	
	  function _create(pair) {
	    var
	      cvt,
	      arr = pair.split(' ')
	
	    if (pair === DEFAULT) {
	      arr[2] = arr[0]
	      arr[3] = arr[1]
	      cvt = _loopback
	    }
	    else {
	      if (arr.length !== 2 || /[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(pair)) {
	        throw new Error('Unsupported brackets "' + pair + '"')
	      }
	      arr = arr.concat(pair.replace(/(?=[[\]()*+?.^$|])/g, '\\').split(' '))
	      cvt = _rewrite
	    }
	    arr[4] = cvt(arr[1].length > 1 ? /{[\S\s]*?}/ : /{[^}]*}/, arr)
	    arr[5] = cvt(/\\({|})/g, arr)
	    arr[6] = cvt(/(\\?)({)/g, arr)
	    arr[7] = RegExp('(\\\\?)(?:([[({])|(' + arr[3] + '))|' + S_QBSRC, REGLOB)
	    arr[8] = pair
	    return arr
	  }
	
	  function _reset(pair) {
	    if (!pair) pair = DEFAULT
	
	    if (pair !== _pairs[8]) {
	      _pairs = _create(pair)
	      _regex = pair === DEFAULT ? _loopback : _rewrite
	      _pairs[9] = _regex(/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/)
	      _pairs[10] = _regex(/(^|[^\\]){=[\S\s]*?}/)
	      _brackets._rawOffset = _pairs[0].length
	    }
	    cachedBrackets = pair
	  }
	
	  function _brackets(reOrIdx) {
	    return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _pairs[reOrIdx]
	  }
	
	  _brackets.split = function split(str, tmpl, _bp) {
	    // istanbul ignore next: _bp is for the compiler
	    if (!_bp) _bp = _pairs
	
	    var
	      parts = [],
	      match,
	      isexpr,
	      start,
	      pos,
	      re = _bp[6]
	
	    isexpr = start = re.lastIndex = 0
	
	    while (match = re.exec(str)) {
	
	      pos = match.index
	
	      if (isexpr) {
	
	        if (match[2]) {
	          re.lastIndex = skipBraces(match[2], re.lastIndex)
	          continue
	        }
	
	        if (!match[3])
	          continue
	      }
	
	      if (!match[1]) {
	        unescapeStr(str.slice(start, pos))
	        start = re.lastIndex
	        re = _bp[6 + (isexpr ^= 1)]
	        re.lastIndex = start
	      }
	    }
	
	    if (str && start < str.length) {
	      unescapeStr(str.slice(start))
	    }
	
	    return parts
	
	    function unescapeStr(str) {
	      if (tmpl || isexpr)
	        parts.push(str && str.replace(_bp[5], '$1'))
	      else
	        parts.push(str)
	    }
	
	    function skipBraces(ch, pos) {
	      var
	        match,
	        recch = FINDBRACES[ch],
	        level = 1
	      recch.lastIndex = pos
	
	      while (match = recch.exec(str)) {
	        if (match[1] &&
	          !(match[1] === ch ? ++level : --level)) break
	      }
	      return match ? recch.lastIndex : str.length
	    }
	  }
	
	  _brackets.hasExpr = function hasExpr(str) {
	    return _brackets(4).test(str)
	  }
	
	  _brackets.loopKeys = function loopKeys(expr) {
	    var m = expr.match(_brackets(9))
	    return m ?
	      { key: m[1], pos: m[2], val: _pairs[0] + m[3].trim() + _pairs[1] } : { val: expr.trim() }
	  }
	
	  _brackets.array = function array(pair) {
	    return _create(pair || cachedBrackets)
	  }
	
	  var _settings
	  function _setSettings(o) {
	    var b
	    o = o || {}
	    b = o.brackets
	    Object.defineProperty(o, 'brackets', {
	      set: _reset,
	      get: function () { return cachedBrackets },
	      enumerable: true
	    })
	    _settings = o
	    _reset(b)
	  }
	  Object.defineProperty(_brackets, 'settings', {
	    set: _setSettings,
	    get: function () { return _settings }
	  })
	
	  /* istanbul ignore next: in the node version riot is not in the scope */
	  _brackets.settings = typeof riot !== 'undefined' && riot.settings || {}
	  _brackets.set = _reset
	
	  _brackets.R_STRINGS = STRINGS
	  _brackets.R_MLCOMMS = MLCOMMS
	  _brackets.S_QBLOCKS = S_QBSRC
	
	  return _brackets
	
	})()
	
	/**
	 * @module tmpl
	 *
	 * tmpl          - Root function, returns the template value, render with data
	 * tmpl.hasExpr  - Test the existence of a expression inside a string
	 * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
	 */
	
	var tmpl = (function () {
	
	  var _cache = {}
	
	  function _tmpl(str, data) {
	    if (!str) return str
	
	    return (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr)
	  }
	
	  _tmpl.isRaw = function (expr) {
	    return expr[brackets._rawOffset] === "="
	  }
	
	  _tmpl.haveRaw = function (src) {
	    return brackets(10).test(src)
	  }
	
	  _tmpl.hasExpr = brackets.hasExpr
	
	  _tmpl.loopKeys = brackets.loopKeys
	
	  _tmpl.errorHandler = null
	
	  function _logErr(err, ctx) {
	
	    if (_tmpl.errorHandler) {
	
	      err.riotData = {
	        tagName: ctx && ctx.root && ctx.root.tagName,
	        _riot_id: ctx && ctx._riot_id  //eslint-disable-line camelcase
	      }
	      _tmpl.errorHandler(err)
	    }
	  }
	
	  function _create(str) {
	
	    var expr = _getTmpl(str)
	    if (expr.slice(0, 11) !== 'try{return ') expr = 'return ' + expr
	
	    return new Function('E', expr + ';')
	  }
	
	  var
	    RE_QBLOCK = RegExp(brackets.S_QBLOCKS, 'g'),
	    RE_QBMARK = /\x01(\d+)~/g
	
	  function _getTmpl(str) {
	    var
	      qstr = [],
	      expr,
	      parts = brackets.split(str.replace(/\u2057/g, '"'), 1)
	
	    if (parts.length > 2 || parts[0]) {
	      var i, j, list = []
	
	      for (i = j = 0; i < parts.length; ++i) {
	
	        expr = parts[i]
	
	        if (expr && (expr = i & 1 ?
	
	              _parseExpr(expr, 1, qstr) :
	
	              '"' + expr
	                .replace(/\\/g, '\\\\')
	                .replace(/\r\n?|\n/g, '\\n')
	                .replace(/"/g, '\\"') +
	              '"'
	
	          )) list[j++] = expr
	
	      }
	
	      expr = j < 2 ? list[0] :
	             '[' + list.join(',') + '].join("")'
	    }
	    else {
	
	      expr = _parseExpr(parts[1], 0, qstr)
	    }
	
	    if (qstr[0])
	      expr = expr.replace(RE_QBMARK, function (_, pos) {
	        return qstr[pos]
	          .replace(/\r/g, '\\r')
	          .replace(/\n/g, '\\n')
	      })
	
	    return expr
	  }
	
	  var
	    CS_IDENT = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\x01(\d+)~):/,
	    RE_BRACE = /,|([[{(])|$/g
	
	  function _parseExpr(expr, asText, qstr) {
	
	    if (expr[0] === "=") expr = expr.slice(1)
	
	    expr = expr
	          .replace(RE_QBLOCK, function (s, div) {
	            return s.length > 2 && !div ? '\x01' + (qstr.push(s) - 1) + '~' : s
	          })
	          .replace(/\s+/g, ' ').trim()
	          .replace(/\ ?([[\({},?\.:])\ ?/g, '$1')
	
	    if (expr) {
	      var
	        list = [],
	        cnt = 0,
	        match
	
	      while (expr &&
	            (match = expr.match(CS_IDENT)) &&
	            !match.index
	        ) {
	        var
	          key,
	          jsb,
	          re = /,|([[{(])|$/g
	
	        expr = RegExp.rightContext
	        key  = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1]
	
	        while (jsb = (match = re.exec(expr))[1]) skipBraces(jsb, re)
	
	        jsb  = expr.slice(0, match.index)
	        expr = RegExp.rightContext
	
	        list[cnt++] = _wrapExpr(jsb, 1, key)
	      }
	
	      expr = !cnt ? _wrapExpr(expr, asText) :
	          cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0]
	    }
	    return expr
	
	    function skipBraces(jsb, re) {
	      var
	        match,
	        lv = 1,
	        ir = jsb === '(' ? /[()]/g : jsb === '[' ? /[[\]]/g : /[{}]/g
	
	      ir.lastIndex = re.lastIndex
	      while (match = ir.exec(expr)) {
	        if (match[0] === jsb) ++lv
	        else if (!--lv) break
	      }
	      re.lastIndex = lv ? expr.length : ir.lastIndex
	    }
	  }
	
	  // istanbul ignore next: not both
	  var JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').'
	  var JS_VARNAME = /[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g
	
	  function _wrapExpr(expr, asText, key) {
	    var tb
	
	    expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
	      if (mvar) {
	        pos = tb ? 0 : pos + match.length
	
	        if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
	          match = p + '("' + mvar + JS_CONTEXT + mvar
	          if (pos) tb = (s = s[pos]) === '.' || s === '(' || s === '['
	        }
	        else if (pos)
	          tb = !/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/.test(s.slice(pos))
	      }
	      return match
	    })
	
	    if (tb) {
	      expr = 'try{return ' + expr + '}catch(e){E(e,this)}'
	    }
	
	    if (key) {
	
	      expr = (tb ?
	          'function(){' + expr + '}.call(this)' : '(' + expr + ')'
	        ) + '?"' + key + '":""'
	    }
	    else if (asText) {
	
	      expr = 'function(v){' + (tb ?
	          expr.replace('return ', 'v=') : 'v=(' + expr + ')'
	        ) + ';return v||v===0?v:""}.call(this)'
	    }
	
	    return expr
	  }
	
	  // istanbul ignore next: compatibility fix for beta versions
	  _tmpl.parse = function (s) { return s }
	
	  return _tmpl
	
	})()
	
	  tmpl.version = brackets.version = 'v2.3.19'
	
	
	/*
	  lib/browser/tag/mkdom.js
	
	  Includes hacks needed for the Internet Explorer version 9 and bellow
	
	*/
	// http://kangax.github.io/compat-table/es5/#ie8
	// http://codeplanet.io/dropping-ie8/
	
	var mkdom = (function (checkIE) {
	
	  var rootEls = {
	      'tr': 'tbody',
	      'th': 'tr',
	      'td': 'tr',
	      'tbody': 'table',
	      'col': 'colgroup'
	    },
	    GENERIC = 'div'
	
	  checkIE = checkIE && checkIE < 10
	
	  // creates any dom element in a div, table, or colgroup container
	  function _mkdom(html) {
	
	    var match = html && html.match(/^\s*<([-\w]+)/),
	      tagName = match && match[1].toLowerCase(),
	      rootTag = rootEls[tagName] || GENERIC,
	      el = mkEl(rootTag)
	
	    el.stub = true
	
	    /* istanbul ignore next */
	    if (checkIE && tagName && (match = tagName.match(SPECIAL_TAGS_REGEX)))
	      ie9elem(el, html, tagName, !!match[1])
	    else
	      el.innerHTML = html
	
	    return el
	  }
	
	  // creates tr, th, td, option, optgroup element for IE8-9
	  /* istanbul ignore next */
	  function ie9elem(el, html, tagName, select) {
	
	    var div = mkEl(GENERIC),
	      tag = select ? 'select>' : 'table>',
	      child
	
	    div.innerHTML = '<' + tag + html + '</' + tag
	
	    child = $(tagName, div)
	    if (child)
	      el.appendChild(child)
	
	  }
	  // end ie9elem()
	
	  return _mkdom
	
	})(IE_VERSION)
	
	/**
	 * Convert the item looped into an object used to extend the child tag properties
	 * @param   { Object } expr - object containing the keys used to extend the children tags
	 * @param   { * } key - value to assign to the new object returned
	 * @param   { * } val - value containing the position of the item in the array
	 * @returns { Object } - new object containing the values of the original item
	 *
	 * The variables 'key' and 'val' are arbitrary.
	 * They depend on the collection type looped (Array, Object)
	 * and on the expression used on the each tag
	 *
	 */
	function mkitem(expr, key, val) {
	  var item = {}
	  item[expr.key] = key
	  if (expr.pos) item[expr.pos] = val
	  return item
	}
	
	/**
	 * Unmount the redundant tags
	 * @param   { Array } items - array containing the current items to loop
	 * @param   { Array } tags - array containing all the children tags
	 */
	function unmountRedundant(items, tags) {
	
	  var i = tags.length,
	    j = items.length
	
	  while (i > j) {
	    var t = tags[--i]
	    tags.splice(i, 1)
	    t.unmount()
	  }
	}
	
	/**
	 * Move the nested custom tags in non custom loop tags
	 * @param   { Object } child - non custom loop tag
	 * @param   { Number } i - current position of the loop tag
	 */
	function moveNestedTags(child, i) {
	  Object.keys(child.tags).forEach(function(tagName) {
	    var tag = child.tags[tagName]
	    if (isArray(tag))
	      each(tag, function (t) {
	        moveChildTag(t, tagName, i)
	      })
	    else
	      moveChildTag(tag, tagName, i)
	  })
	}
	
	/**
	 * Adds the elements for a virtual tag
	 * @param { Tag } tag - the tag whose root's children will be inserted or appended
	 * @param { Node } src - the node that will do the inserting or appending
	 * @param { Tag } target - only if inserting, insert before this tag's first child
	 */
	function addVirtual(tag, src, target) {
	  var el = tag._root
	  tag._virts = []
	  while (el) {
	    var sib = el.nextSibling
	    if (target)
	      src.insertBefore(el, target._root)
	    else
	      src.appendChild(el)
	
	    tag._virts.push(el) // hold for unmounting
	    el = sib
	  }
	}
	
	/**
	 * Move virtual tag and all child nodes
	 * @param { Tag } tag - first child reference used to start move
	 * @param { Node } src  - the node that will do the inserting
	 * @param { Tag } target - insert before this tag's first child
	 * @param { Number } len - how many child nodes to move
	 */
	function moveVirtual(tag, src, target, len) {
	  var el = tag._root
	  for (var i = 0; i < len; i++) {
	    var sib = el.nextSibling
	    src.insertBefore(el, target._root)
	    el = sib
	  }
	}
	
	
	/**
	 * Manage tags having the 'each'
	 * @param   { Object } dom - DOM node we need to loop
	 * @param   { Tag } parent - parent tag instance where the dom node is contained
	 * @param   { String } expr - string contained in the 'each' attribute
	 */
	function _each(dom, parent, expr) {
	
	  // remove the each property from the original tag
	  remAttr(dom, 'each')
	
	  var mustReorder = typeof getAttr(dom, 'no-reorder') !== T_STRING || remAttr(dom, 'no-reorder'),
	    tagName = getTagName(dom),
	    impl = __tagImpl[tagName] || { tmpl: dom.outerHTML },
	    useRoot = SPECIAL_TAGS_REGEX.test(tagName),
	    root = dom.parentNode,
	    ref = document.createTextNode(''),
	    child = getTag(dom),
	    isOption = /option/gi.test(tagName), // the option tags must be treated differently
	    tags = [],
	    oldItems = [],
	    hasKeys,
	    isVirtual = dom.tagName == 'VIRTUAL'
	
	  // parse the each expression
	  expr = tmpl.loopKeys(expr)
	
	  // insert a marked where the loop tags will be injected
	  root.insertBefore(ref, dom)
	
	  // clean template code
	  parent.one('before-mount', function () {
	
	    // remove the original DOM node
	    dom.parentNode.removeChild(dom)
	    if (root.stub) root = parent.root
	
	  }).on('update', function () {
	    // get the new items collection
	    var items = tmpl(expr.val, parent),
	      // create a fragment to hold the new DOM nodes to inject in the parent tag
	      frag = document.createDocumentFragment()
	
	
	
	    // object loop. any changes cause full redraw
	    if (!isArray(items)) {
	      hasKeys = items || false
	      items = hasKeys ?
	        Object.keys(items).map(function (key) {
	          return mkitem(expr, key, items[key])
	        }) : []
	    }
	
	    // loop all the new items
	    items.forEach(function(item, i) {
	      // reorder only if the items are objects
	      var _mustReorder = mustReorder && item instanceof Object,
	        oldPos = oldItems.indexOf(item),
	        pos = ~oldPos && _mustReorder ? oldPos : i,
	        // does a tag exist in this position?
	        tag = tags[pos]
	
	      item = !hasKeys && expr.key ? mkitem(expr, item, i) : item
	
	      // new tag
	      if (
	        !_mustReorder && !tag // with no-reorder we just update the old tags
	        ||
	        _mustReorder && !~oldPos || !tag // by default we always try to reorder the DOM elements
	      ) {
	
	        tag = new Tag(impl, {
	          parent: parent,
	          isLoop: true,
	          hasImpl: !!__tagImpl[tagName],
	          root: useRoot ? root : dom.cloneNode(),
	          item: item
	        }, dom.innerHTML)
	
	        tag.mount()
	        if (isVirtual) tag._root = tag.root.firstChild // save reference for further moves or inserts
	        // this tag must be appended
	        if (i == tags.length) {
	          if (isVirtual)
	            addVirtual(tag, frag)
	          else frag.appendChild(tag.root)
	        }
	        // this tag must be insert
	        else {
	          if (isVirtual)
	            addVirtual(tag, root, tags[i])
	          else root.insertBefore(tag.root, tags[i].root)
	          oldItems.splice(i, 0, item)
	        }
	
	        tags.splice(i, 0, tag)
	        pos = i // handled here so no move
	      } else tag.update(item)
	
	      // reorder the tag if it's not located in its previous position
	      if (pos !== i && _mustReorder) {
	        // update the DOM
	        if (isVirtual)
	          moveVirtual(tag, root, tags[i], dom.childNodes.length)
	        else root.insertBefore(tag.root, tags[i].root)
	        // update the position attribute if it exists
	        if (expr.pos)
	          tag[expr.pos] = i
	        // move the old tag instance
	        tags.splice(i, 0, tags.splice(pos, 1)[0])
	        // move the old item
	        oldItems.splice(i, 0, oldItems.splice(pos, 1)[0])
	        // if the loop tags are not custom
	        // we need to move all their custom tags into the right position
	        if (!child) moveNestedTags(tag, i)
	      }
	
	      // cache the original item to use it in the events bound to this node
	      // and its children
	      tag._item = item
	      // cache the real parent tag internally
	      defineProperty(tag, '_parent', parent)
	
	    }, true) // allow null values
	
	    // remove the redundant tags
	    unmountRedundant(items, tags)
	
	    // insert the new nodes
	    if (isOption) root.appendChild(frag)
	    else root.insertBefore(frag, ref)
	
	    // set the 'tags' property of the parent tag
	    // if child is 'undefined' it means that we don't need to set this property
	    // for example:
	    // we don't need store the `myTag.tags['div']` property if we are looping a div tag
	    // but we need to track the `myTag.tags['child']` property looping a custom child node named `child`
	    if (child) parent.tags[tagName] = tags
	
	    // clone the items array
	    oldItems = items.slice()
	
	  })
	
	}
	
	
	function parseNamedElements(root, tag, childTags, forceParsingNamed) {
	
	  walk(root, function(dom) {
	    if (dom.nodeType == 1) {
	      dom.isLoop = dom.isLoop || (dom.parentNode && dom.parentNode.isLoop || getAttr(dom, 'each')) ? 1 : 0
	
	      // custom child tag
	      if (childTags) {
	        var child = getTag(dom)
	
	        if (child && !dom.isLoop)
	          childTags.push(initChildTag(child, {root: dom, parent: tag}, dom.innerHTML, tag))
	      }
	
	      if (!dom.isLoop || forceParsingNamed)
	        setNamed(dom, tag, [])
	    }
	
	  })
	
	}
	
	function parseExpressions(root, tag, expressions) {
	
	  function addExpr(dom, val, extra) {
	    if (tmpl.hasExpr(val)) {
	      var expr = { dom: dom, expr: val }
	      expressions.push(extend(expr, extra))
	    }
	  }
	
	  walk(root, function(dom) {
	    var type = dom.nodeType
	
	    // text node
	    if (type == 3 && dom.parentNode.tagName != 'STYLE') addExpr(dom, dom.nodeValue)
	    if (type != 1) return
	
	    /* element */
	
	    // loop
	    var attr = getAttr(dom, 'each')
	
	    if (attr) { _each(dom, tag, attr); return false }
	
	    // attribute expressions
	    each(dom.attributes, function(attr) {
	      var name = attr.name,
	        bool = name.split('__')[1]
	
	      addExpr(dom, attr.value, { attr: bool || name, bool: bool })
	      if (bool) { remAttr(dom, name); return false }
	
	    })
	
	    // skip custom tags
	    if (getTag(dom)) return false
	
	  })
	
	}
	function Tag(impl, conf, innerHTML) {
	
	  var self = riot.observable(this),
	    opts = inherit(conf.opts) || {},
	    dom = mkdom(impl.tmpl),
	    parent = conf.parent,
	    isLoop = conf.isLoop,
	    hasImpl = conf.hasImpl,
	    item = cleanUpData(conf.item),
	    expressions = [],
	    childTags = [],
	    root = conf.root,
	    fn = impl.fn,
	    tagName = root.tagName.toLowerCase(),
	    attr = {},
	    propsInSyncWithParent = []
	
	  if (fn && root._tag) root._tag.unmount(true)
	
	  // not yet mounted
	  this.isMounted = false
	  root.isLoop = isLoop
	
	  // keep a reference to the tag just created
	  // so we will be able to mount this tag multiple times
	  root._tag = this
	
	  // create a unique id to this tag
	  // it could be handy to use it also to improve the virtual dom rendering speed
	  defineProperty(this, '_riot_id', ++__uid) // base 1 allows test !t._riot_id
	
	  extend(this, { parent: parent, root: root, opts: opts, tags: {} }, item)
	
	  // grab attributes
	  each(root.attributes, function(el) {
	    var val = el.value
	    // remember attributes with expressions only
	    if (tmpl.hasExpr(val)) attr[el.name] = val
	  })
	
	  if (dom.innerHTML && !/^(select|optgroup|table|tbody|tr|col(?:group)?)$/.test(tagName))
	    // replace all the yield tags with the tag inner html
	    dom.innerHTML = replaceYield(dom.innerHTML, innerHTML)
	
	  // options
	  function updateOpts() {
	    var ctx = hasImpl && isLoop ? self : parent || self
	
	    // update opts from current DOM attributes
	    each(root.attributes, function(el) {
	      opts[toCamel(el.name)] = tmpl(el.value, ctx)
	    })
	    // recover those with expressions
	    each(Object.keys(attr), function(name) {
	      opts[toCamel(name)] = tmpl(attr[name], ctx)
	    })
	  }
	
	  function normalizeData(data) {
	    for (var key in item) {
	      if (typeof self[key] !== T_UNDEF && isWritable(self, key))
	        self[key] = data[key]
	    }
	  }
	
	  function inheritFromParent () {
	    if (!self.parent || !isLoop) return
	    each(Object.keys(self.parent), function(k) {
	      // some properties must be always in sync with the parent tag
	      var mustSync = !contains(RESERVED_WORDS_BLACKLIST, k) && contains(propsInSyncWithParent, k)
	      if (typeof self[k] === T_UNDEF || mustSync) {
	        // track the property to keep in sync
	        // so we can keep it updated
	        if (!mustSync) propsInSyncWithParent.push(k)
	        self[k] = self.parent[k]
	      }
	    })
	  }
	
	  defineProperty(this, 'update', function(data) {
	
	    // make sure the data passed will not override
	    // the component core methods
	    data = cleanUpData(data)
	    // inherit properties from the parent
	    inheritFromParent()
	    // normalize the tag properties in case an item object was initially passed
	    if (data && typeof item === T_OBJECT) {
	      normalizeData(data)
	      item = data
	    }
	    extend(self, data)
	    updateOpts()
	    self.trigger('update', data)
	    update(expressions, self)
	    // the updated event will be triggered
	    // once the DOM will be ready and all the reflow are completed
	    // this is useful if you want to get the "real" root properties
	    // 4 ex: root.offsetWidth ...
	    rAF(function() { self.trigger('updated') })
	    return this
	  })
	
	  defineProperty(this, 'mixin', function() {
	    each(arguments, function(mix) {
	      var instance
	
	      mix = typeof mix === T_STRING ? riot.mixin(mix) : mix
	
	      // check if the mixin is a function
	      if (isFunction(mix)) {
	        // create the new mixin instance
	        instance = new mix()
	        // save the prototype to loop it afterwards
	        mix = mix.prototype
	      } else instance = mix
	
	      // loop the keys in the function prototype or the all object keys
	      each(Object.getOwnPropertyNames(mix), function(key) {
	        // bind methods to self
	        if (key != 'init')
	          self[key] = isFunction(instance[key]) ?
	                        instance[key].bind(self) :
	                        instance[key]
	      })
	
	      // init method will be called automatically
	      if (instance.init) instance.init.bind(self)()
	    })
	    return this
	  })
	
	  defineProperty(this, 'mount', function() {
	
	    updateOpts()
	
	    // initialiation
	    if (fn) fn.call(self, opts)
	
	    // parse layout after init. fn may calculate args for nested custom tags
	    parseExpressions(dom, self, expressions)
	
	    // mount the child tags
	    toggle(true)
	
	    // update the root adding custom attributes coming from the compiler
	    // it fixes also #1087
	    if (impl.attrs || hasImpl) {
	      walkAttributes(impl.attrs, function (k, v) { setAttr(root, k, v) })
	      parseExpressions(self.root, self, expressions)
	    }
	
	    if (!self.parent || isLoop) self.update(item)
	
	    // internal use only, fixes #403
	    self.trigger('before-mount')
	
	    if (isLoop && !hasImpl) {
	      // update the root attribute for the looped elements
	      self.root = root = dom.firstChild
	
	    } else {
	      while (dom.firstChild) root.appendChild(dom.firstChild)
	      if (root.stub) self.root = root = parent.root
	    }
	
	    // parse the named dom nodes in the looped child
	    // adding them to the parent as well
	    if (isLoop)
	      parseNamedElements(self.root, self.parent, null, true)
	
	    // if it's not a child tag we can trigger its mount event
	    if (!self.parent || self.parent.isMounted) {
	      self.isMounted = true
	      self.trigger('mount')
	    }
	    // otherwise we need to wait that the parent event gets triggered
	    else self.parent.one('mount', function() {
	      // avoid to trigger the `mount` event for the tags
	      // not visible included in an if statement
	      if (!isInStub(self.root)) {
	        self.parent.isMounted = self.isMounted = true
	        self.trigger('mount')
	      }
	    })
	  })
	
	
	  defineProperty(this, 'unmount', function(keepRootTag) {
	    var el = root,
	      p = el.parentNode,
	      ptag
	
	    self.trigger('before-unmount')
	
	    // remove this tag instance from the global virtualDom variable
	    __virtualDom.splice(__virtualDom.indexOf(self), 1)
	
	    if (this._virts) {
	      each(this._virts, function(v) {
	        v.parentNode.removeChild(v)
	      })
	    }
	
	    if (p) {
	
	      if (parent) {
	        ptag = getImmediateCustomParentTag(parent)
	        // remove this tag from the parent tags object
	        // if there are multiple nested tags with same name..
	        // remove this element form the array
	        if (isArray(ptag.tags[tagName]))
	          each(ptag.tags[tagName], function(tag, i) {
	            if (tag._riot_id == self._riot_id)
	              ptag.tags[tagName].splice(i, 1)
	          })
	        else
	          // otherwise just delete the tag instance
	          ptag.tags[tagName] = undefined
	      }
	
	      else
	        while (el.firstChild) el.removeChild(el.firstChild)
	
	      if (!keepRootTag)
	        p.removeChild(el)
	      else
	        // the riot-tag attribute isn't needed anymore, remove it
	        remAttr(p, 'riot-tag')
	    }
	
	
	    self.trigger('unmount')
	    toggle()
	    self.off('*')
	    self.isMounted = false
	    // somehow ie8 does not like `delete root._tag`
	    root._tag = null
	
	  })
	
	  function toggle(isMount) {
	
	    // mount/unmount children
	    each(childTags, function(child) { child[isMount ? 'mount' : 'unmount']() })
	
	    // listen/unlisten parent (events flow one way from parent to children)
	    if (parent) {
	      var evt = isMount ? 'on' : 'off'
	
	      // the loop tags will be always in sync with the parent automatically
	      if (isLoop)
	        parent[evt]('unmount', self.unmount)
	      else
	        parent[evt]('update', self.update)[evt]('unmount', self.unmount)
	    }
	  }
	
	  // named elements available for fn
	  parseNamedElements(dom, this, childTags)
	
	}
	/**
	 * Attach an event to a DOM node
	 * @param { String } name - event name
	 * @param { Function } handler - event callback
	 * @param { Object } dom - dom node
	 * @param { Tag } tag - tag instance
	 */
	function setEventHandler(name, handler, dom, tag) {
	
	  dom[name] = function(e) {
	
	    var ptag = tag._parent,
	      item = tag._item,
	      el
	
	    if (!item)
	      while (ptag && !item) {
	        item = ptag._item
	        ptag = ptag._parent
	      }
	
	    // cross browser event fix
	    e = e || window.event
	
	    // override the event properties
	    if (isWritable(e, 'currentTarget')) e.currentTarget = dom
	    if (isWritable(e, 'target')) e.target = e.srcElement
	    if (isWritable(e, 'which')) e.which = e.charCode || e.keyCode
	
	    e.item = item
	
	    // prevent default behaviour (by default)
	    if (handler.call(tag, e) !== true && !/radio|check/.test(dom.type)) {
	      if (e.preventDefault) e.preventDefault()
	      e.returnValue = false
	    }
	
	    if (!e.preventUpdate) {
	      el = item ? getImmediateCustomParentTag(ptag) : tag
	      el.update()
	    }
	
	  }
	
	}
	
	
	/**
	 * Insert a DOM node replacing another one (used by if- attribute)
	 * @param   { Object } root - parent node
	 * @param   { Object } node - node replaced
	 * @param   { Object } before - node added
	 */
	function insertTo(root, node, before) {
	  if (root) {
	    root.insertBefore(before, node)
	    root.removeChild(node)
	  }
	}
	
	/**
	 * Update the expressions in a Tag instance
	 * @param   { Array } expressions - expression that must be re evaluated
	 * @param   { Tag } tag - tag instance
	 */
	function update(expressions, tag) {
	
	  each(expressions, function(expr, i) {
	
	    var dom = expr.dom,
	      attrName = expr.attr,
	      value = tmpl(expr.expr, tag),
	      parent = expr.dom.parentNode
	
	    if (expr.bool)
	      value = value ? attrName : false
	    else if (value == null)
	      value = ''
	
	    // leave out riot- prefixes from strings inside textarea
	    // fix #815: any value -> string
	    if (parent && parent.tagName == 'TEXTAREA') {
	      value = ('' + value).replace(/riot-/g, '')
	      // change textarea's value
	      parent.value = value
	    }
	
	    // no change
	    if (expr.value === value) return
	    expr.value = value
	
	    // text node
	    if (!attrName) {
	      dom.nodeValue = '' + value    // #815 related
	      return
	    }
	
	    // remove original attribute
	    remAttr(dom, attrName)
	    // event handler
	    if (isFunction(value)) {
	      setEventHandler(attrName, value, dom, tag)
	
	    // if- conditional
	    } else if (attrName == 'if') {
	      var stub = expr.stub,
	        add = function() { insertTo(stub.parentNode, stub, dom) },
	        remove = function() { insertTo(dom.parentNode, dom, stub) }
	
	      // add to DOM
	      if (value) {
	        if (stub) {
	          add()
	          dom.inStub = false
	          // avoid to trigger the mount event if the tags is not visible yet
	          // maybe we can optimize this avoiding to mount the tag at all
	          if (!isInStub(dom)) {
	            walk(dom, function(el) {
	              if (el._tag && !el._tag.isMounted) el._tag.isMounted = !!el._tag.trigger('mount')
	            })
	          }
	        }
	      // remove from DOM
	      } else {
	        stub = expr.stub = stub || document.createTextNode('')
	        // if the parentNode is defined we can easily replace the tag
	        if (dom.parentNode)
	          remove()
	        // otherwise we need to wait the updated event
	        else (tag.parent || tag).one('updated', remove)
	
	        dom.inStub = true
	      }
	    // show / hide
	    } else if (/^(show|hide)$/.test(attrName)) {
	      if (attrName == 'hide') value = !value
	      dom.style.display = value ? '' : 'none'
	
	    // field value
	    } else if (attrName == 'value') {
	      dom.value = value
	
	    // <img src="{ expr }">
	    } else if (startsWith(attrName, RIOT_PREFIX) && attrName != RIOT_TAG) {
	      if (value)
	        setAttr(dom, attrName.slice(RIOT_PREFIX.length), value)
	
	    } else {
	      if (expr.bool) {
	        dom[attrName] = value
	        if (!value) return
	      }
	
	      if (value && value != 0 && typeof value !== T_OBJECT)
	        setAttr(dom, attrName, value)
	
	    }
	
	  })
	
	}
	/**
	 * Loops an array
	 * @param   { Array } els - collection of items
	 * @param   {Function} fn - callback function
	 * @returns { Array } the array looped
	 */
	function each(els, fn) {
	  for (var i = 0, len = (els || []).length, el; i < len; i++) {
	    el = els[i]
	    // return false -> remove current item during loop
	    if (el != null && fn(el, i) === false) i--
	  }
	  return els
	}
	
	/**
	 * Detect if the argument passed is a function
	 * @param   { * } v - whatever you want to pass to this function
	 * @returns { Boolean } -
	 */
	function isFunction(v) {
	  return typeof v === T_FUNCTION || false   // avoid IE problems
	}
	
	/**
	 * Remove any DOM attribute from a node
	 * @param   { Object } dom - DOM node we want to update
	 * @param   { String } name - name of the property we want to remove
	 */
	function remAttr(dom, name) {
	  dom.removeAttribute(name)
	}
	
	/**
	 * Convert a string containing dashes to camel case
	 * @param   { String } string - input string
	 * @returns { String } my-string -> myString
	 */
	function toCamel(string) {
	  return string.replace(/-(\w)/g, function(_, c) {
	    return c.toUpperCase()
	  })
	}
	
	/**
	 * Get the value of any DOM attribute on a node
	 * @param   { Object } dom - DOM node we want to parse
	 * @param   { String } name - name of the attribute we want to get
	 * @returns { String | undefined } name of the node attribute whether it exists
	 */
	function getAttr(dom, name) {
	  return dom.getAttribute(name)
	}
	
	/**
	 * Set any DOM attribute
	 * @param { Object } dom - DOM node we want to update
	 * @param { String } name - name of the property we want to set
	 * @param { String } val - value of the property we want to set
	 */
	function setAttr(dom, name, val) {
	  dom.setAttribute(name, val)
	}
	
	/**
	 * Detect the tag implementation by a DOM node
	 * @param   { Object } dom - DOM node we need to parse to get its tag implementation
	 * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
	 */
	function getTag(dom) {
	  return dom.tagName && __tagImpl[getAttr(dom, RIOT_TAG) || dom.tagName.toLowerCase()]
	}
	/**
	 * Add a child tag to its parent into the `tags` object
	 * @param   { Object } tag - child tag instance
	 * @param   { String } tagName - key where the new tag will be stored
	 * @param   { Object } parent - tag instance where the new child tag will be included
	 */
	function addChildTag(tag, tagName, parent) {
	  var cachedTag = parent.tags[tagName]
	
	  // if there are multiple children tags having the same name
	  if (cachedTag) {
	    // if the parent tags property is not yet an array
	    // create it adding the first cached tag
	    if (!isArray(cachedTag))
	      // don't add the same tag twice
	      if (cachedTag !== tag)
	        parent.tags[tagName] = [cachedTag]
	    // add the new nested tag to the array
	    if (!contains(parent.tags[tagName], tag))
	      parent.tags[tagName].push(tag)
	  } else {
	    parent.tags[tagName] = tag
	  }
	}
	
	/**
	 * Move the position of a custom tag in its parent tag
	 * @param   { Object } tag - child tag instance
	 * @param   { String } tagName - key where the tag was stored
	 * @param   { Number } newPos - index where the new tag will be stored
	 */
	function moveChildTag(tag, tagName, newPos) {
	  var parent = tag.parent,
	    tags
	  // no parent no move
	  if (!parent) return
	
	  tags = parent.tags[tagName]
	
	  if (isArray(tags))
	    tags.splice(newPos, 0, tags.splice(tags.indexOf(tag), 1)[0])
	  else addChildTag(tag, tagName, parent)
	}
	
	/**
	 * Create a new child tag including it correctly into its parent
	 * @param   { Object } child - child tag implementation
	 * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
	 * @param   { String } innerHTML - inner html of the child node
	 * @param   { Object } parent - instance of the parent tag including the child custom tag
	 * @returns { Object } instance of the new child tag just created
	 */
	function initChildTag(child, opts, innerHTML, parent) {
	  var tag = new Tag(child, opts, innerHTML),
	    tagName = getTagName(opts.root),
	    ptag = getImmediateCustomParentTag(parent)
	  // fix for the parent attribute in the looped elements
	  tag.parent = ptag
	  // store the real parent tag
	  // in some cases this could be different from the custom parent tag
	  // for example in nested loops
	  tag._parent = parent
	
	  // add this tag to the custom parent tag
	  addChildTag(tag, tagName, ptag)
	  // and also to the real parent tag
	  if (ptag !== parent)
	    addChildTag(tag, tagName, parent)
	  // empty the child node once we got its template
	  // to avoid that its children get compiled multiple times
	  opts.root.innerHTML = ''
	
	  return tag
	}
	
	/**
	 * Loop backward all the parents tree to detect the first custom parent tag
	 * @param   { Object } tag - a Tag instance
	 * @returns { Object } the instance of the first custom parent tag found
	 */
	function getImmediateCustomParentTag(tag) {
	  var ptag = tag
	  while (!getTag(ptag.root)) {
	    if (!ptag.parent) break
	    ptag = ptag.parent
	  }
	  return ptag
	}
	
	/**
	 * Helper function to set an immutable property
	 * @param   { Object } el - object where the new property will be set
	 * @param   { String } key - object key where the new property will be stored
	 * @param   { * } value - value of the new property
	* @param   { Object } options - set the propery overriding the default options
	 * @returns { Object } - the initial object
	 */
	function defineProperty(el, key, value, options) {
	  Object.defineProperty(el, key, extend({
	    value: value,
	    enumerable: false,
	    writable: false,
	    configurable: false
	  }, options))
	  return el
	}
	
	/**
	 * Get the tag name of any DOM node
	 * @param   { Object } dom - DOM node we want to parse
	 * @returns { String } name to identify this dom node in riot
	 */
	function getTagName(dom) {
	  var child = getTag(dom),
	    namedTag = getAttr(dom, 'name'),
	    tagName = namedTag && !tmpl.hasExpr(namedTag) ?
	                namedTag :
	              child ? child.name : dom.tagName.toLowerCase()
	
	  return tagName
	}
	
	/**
	 * Extend any object with other properties
	 * @param   { Object } src - source object
	 * @returns { Object } the resulting extended object
	 *
	 * var obj = { foo: 'baz' }
	 * extend(obj, {bar: 'bar', foo: 'bar'})
	 * console.log(obj) => {bar: 'bar', foo: 'bar'}
	 *
	 */
	function extend(src) {
	  var obj, args = arguments
	  for (var i = 1; i < args.length; ++i) {
	    if (obj = args[i]) {
	      for (var key in obj) {
	        // check if this property of the source object could be overridden
	        if (isWritable(src, key))
	          src[key] = obj[key]
	      }
	    }
	  }
	  return src
	}
	
	/**
	 * Check whether an array contains an item
	 * @param   { Array } arr - target array
	 * @param   { * } item - item to test
	 * @returns { Boolean } Does 'arr' contain 'item'?
	 */
	function contains(arr, item) {
	  return ~arr.indexOf(item)
	}
	
	/**
	 * Check whether an object is a kind of array
	 * @param   { * } a - anything
	 * @returns {Boolean} is 'a' an array?
	 */
	function isArray(a) { return Array.isArray(a) || a instanceof Array }
	
	/**
	 * Detect whether a property of an object could be overridden
	 * @param   { Object }  obj - source object
	 * @param   { String }  key - object property
	 * @returns { Boolean } is this property writable?
	 */
	function isWritable(obj, key) {
	  var props = Object.getOwnPropertyDescriptor(obj, key)
	  return typeof obj[key] === T_UNDEF || props && props.writable
	}
	
	
	/**
	 * With this function we avoid that the internal Tag methods get overridden
	 * @param   { Object } data - options we want to use to extend the tag instance
	 * @returns { Object } clean object without containing the riot internal reserved words
	 */
	function cleanUpData(data) {
	  if (!(data instanceof Tag) && !(data && typeof data.trigger == T_FUNCTION)) return data
	
	  var o = {}
	  for (var key in data) {
	    if (!contains(RESERVED_WORDS_BLACKLIST, key))
	      o[key] = data[key]
	  }
	  return o
	}
	
	/**
	 * Walk down recursively all the children tags starting dom node
	 * @param   { Object }   dom - starting node where we will start the recursion
	 * @param   { Function } fn - callback to transform the child node just found
	 */
	function walk(dom, fn) {
	  if (dom) {
	    // stop the recursion
	    if (fn(dom) === false) return
	    else {
	      dom = dom.firstChild
	
	      while (dom) {
	        walk(dom, fn)
	        dom = dom.nextSibling
	      }
	    }
	  }
	}
	
	/**
	 * Minimize risk: only zero or one _space_ between attr & value
	 * @param   { String }   html - html string we want to parse
	 * @param   { Function } fn - callback function to apply on any attribute found
	 */
	function walkAttributes(html, fn) {
	  var m,
	    re = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g
	
	  while (m = re.exec(html)) {
	    fn(m[1].toLowerCase(), m[2] || m[3] || m[4])
	  }
	}
	
	/**
	 * Check whether a DOM node is in stub mode, useful for the riot 'if' directive
	 * @param   { Object }  dom - DOM node we want to parse
	 * @returns { Boolean } -
	 */
	function isInStub(dom) {
	  while (dom) {
	    if (dom.inStub) return true
	    dom = dom.parentNode
	  }
	  return false
	}
	
	/**
	 * Create a generic DOM node
	 * @param   { String } name - name of the DOM node we want to create
	 * @returns { Object } DOM node just created
	 */
	function mkEl(name) {
	  return document.createElement(name)
	}
	
	/**
	 * Create a generic DOM node, and fill it with innerHTML
	 * @param   { String } name - name of the DOM node we want to create
	 * @param   { String } innerHTML - innerHTML of the new DOM
	 * @returns { Object } DOM node just created
	 */
	function mkElWithInnerHTML(name, innerHTML) {
	  var el = mkEl(name)
	  el.innerHTML = innerHTML || ''
	  return el
	}
	
	/**
	 * Replace the yield tag from any tag template with the innerHTML of the
	 * original tag in the page
	 * @param   { String } tmpl - tag implementation template
	 * @param   { String } innerHTML - original content of the tag in the DOM
	 * @returns { String } tag template updated without the yield tag
	 */
	function replaceYield(tmpl, innerHTML) {
	  var tmplElement = mkElWithInnerHTML('div', tmpl)
	  // if ($('yield[from]'.tmplElement)) { // this issues test errors
	  if (tmplElement.querySelector && tmplElement.querySelector('yield[from]')) { // code coverage path not taken (?)
	    // yield to(s) must be direct children from innerHTML(root), all other tags are ignored
	    each(mkElWithInnerHTML('div', innerHTML).childNodes, function(toYield) {
	      if (toYield.nodeType == 1 && toYield.tagName == 'YIELD' && toYield.getAttribute('to')) {
	        // replace all yield[from]
	        each($$('yield[from="'+toYield.getAttribute('to')+'"]', tmplElement), function(fromYield) {
	          fromYield.outerHTML = toYield.innerHTML
	        })
	      }
	    })
	    return tmplElement.innerHTML
	  } else
	    // just replace yield in tmpl with the innerHTML
	    return tmpl.replace(/<yield\s*(?:\/>|>\s*<\/yield\s*>)/gi, innerHTML || '')
	}
	
	/**
	 * Shorter and fast way to select multiple nodes in the DOM
	 * @param   { String } selector - DOM selector
	 * @param   { Object } ctx - DOM node where the targets of our search will is located
	 * @returns { Object } dom nodes found
	 */
	function $$(selector, ctx) {
	  return (ctx || document).querySelectorAll(selector)
	}
	
	/**
	 * Shorter and fast way to select a single node in the DOM
	 * @param   { String } selector - unique dom selector
	 * @param   { Object } ctx - DOM node where the target of our search will is located
	 * @returns { Object } dom node found
	 */
	function $(selector, ctx) {
	  return (ctx || document).querySelector(selector)
	}
	
	/**
	 * Simple object prototypal inheritance
	 * @param   { Object } parent - parent object
	 * @returns { Object } child instance
	 */
	function inherit(parent) {
	  function Child() {}
	  Child.prototype = parent
	  return new Child()
	}
	
	/**
	 * Get the name property needed to identify a DOM node in riot
	 * @param   { Object } dom - DOM node we need to parse
	 * @returns { String | undefined } give us back a string to identify this dom node
	 */
	function getNamedKey(dom) {
	  return getAttr(dom, 'id') || getAttr(dom, 'name')
	}
	
	/**
	 * Set the named properties of a tag element
	 * @param { Object } dom - DOM node we need to parse
	 * @param { Object } parent - tag instance where the named dom element will be eventually added
	 * @param { Array } keys - list of all the tag instance properties
	 */
	function setNamed(dom, parent, keys) {
	  // get the key value we want to add to the tag instance
	  var key = getNamedKey(dom),
	    // add the node detected to a tag instance using the named property
	    add = function(value) {
	      // avoid to override the tag properties already set
	      if (contains(keys, key)) return
	      // check whether this value is an array
	      var isArr = isArray(value)
	      // if the key was never set
	      if (!value)
	        // set it once on the tag instance
	        parent[key] = dom
	      // if it was an array and not yet set
	      else if (!isArr || isArr && !contains(value, dom)) {
	        // add the dom node into the array
	        if (isArr)
	          value.push(dom)
	        else
	          parent[key] = [value, dom]
	      }
	    }
	
	  // skip the elements with no named properties
	  if (!key) return
	
	  // check whether this key has been already evaluated
	  if (tmpl.hasExpr(key))
	    // wait the first updated event only once
	    parent.one('updated', function() {
	      key = getNamedKey(dom)
	      add(parent[key])
	    })
	  else
	    add(parent[key])
	
	}
	
	/**
	 * Faster String startsWith alternative
	 * @param   { String } src - source string
	 * @param   { String } str - test string
	 * @returns { Boolean } -
	 */
	function startsWith(src, str) {
	  return src.slice(0, str.length) === str
	}
	
	/**
	 * Function needed to inject in runtime the custom tags css
	 */
	var injectStyle = (function() {
	
	  if (!window) return // skip injection on the server
	
	  // create the style node
	  var styleNode = mkEl('style'),
	    placeholder = $('style[type=riot]')
	
	  setAttr(styleNode, 'type', 'text/css')
	
	  // inject the new node into the DOM -- in head
	  if (placeholder) {
	    placeholder.parentNode.replaceChild(styleNode, placeholder)
	    placeholder = null
	  }
	  else document.getElementsByTagName('head')[0].appendChild(styleNode)
	
	  /**
	   * This is the function exported that will be used to update the style tag just created
	   * innerHTML seems slow: http://jsperf.com/riot-insert-style
	   * @param   { String } css [description]
	   */
	  return styleNode.styleSheet ?
	    function (css) { styleNode.styleSheet.cssText += css } :
	    function (css) { styleNode.innerHTML += css }
	
	})()
	
	/**
	 * requestAnimationFrame polyfill
	 */
	var rAF = (function(w) {
	  return  w.requestAnimationFrame       ||
	          w.webkitRequestAnimationFrame ||
	          w.mozRequestAnimationFrame    ||
	          function(cb) { setTimeout(cb, 1000 / 60) }
	})(window || {})
	
	/**
	 * Mount a tag creating new Tag instance
	 * @param   { Object } root - dom node where the tag will be mounted
	 * @param   { String } tagName - name of the riot tag we want to mount
	 * @param   { Object } opts - options to pass to the Tag instance
	 * @returns { Tag } a new Tag instance
	 */
	function mountTo(root, tagName, opts) {
	  var tag = __tagImpl[tagName],
	    // cache the inner HTML to fix #855
	    innerHTML = root._innerHTML = root._innerHTML || root.innerHTML
	
	  // clear the inner html
	  root.innerHTML = ''
	
	  if (tag && root) tag = new Tag(tag, { root: root, opts: opts }, innerHTML)
	
	  if (tag && tag.mount) {
	    tag.mount()
	    // add this tag to the virtualDom variable
	    if (!contains(__virtualDom, tag)) __virtualDom.push(tag)
	  }
	
	  return tag
	}
	/**
	 * Riot public api
	 */
	
	// share methods for other riot parts, e.g. compiler
	riot.util = { brackets: brackets, tmpl: tmpl }
	
	/**
	 * Create a mixin that could be globally shared across all the tags
	 */
	riot.mixin = (function() {
	  var mixins = {}
	
	  /**
	   * Create/Return a mixin by its name
	   * @param   { String } name - mixin name
	   * @param   { Object } mixin - mixin logic
	   * @returns { Object } the mixin logic
	   */
	  return function(name, mixin) {
	    if (!mixin) return mixins[name]
	    mixins[name] = mixin
	  }
	
	})()
	
	/**
	 * Create a new riot tag implementation
	 * @param   { String }   name - name/id of the new riot tag
	 * @param   { String }   html - tag template
	 * @param   { String }   css - custom tag css
	 * @param   { String }   attrs - root tag attributes
	 * @param   { Function } fn - user function
	 * @returns { String } name/id of the tag just created
	 */
	riot.tag = function(name, html, css, attrs, fn) {
	  if (isFunction(attrs)) {
	    fn = attrs
	    if (/^[\w\-]+\s?=/.test(css)) {
	      attrs = css
	      css = ''
	    } else attrs = ''
	  }
	  if (css) {
	    if (isFunction(css)) fn = css
	    else if (injectStyle) injectStyle(css)
	  }
	  __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn }
	  return name
	}
	
	/**
	 * Create a new riot tag implementation (for use by the compiler)
	 * @param   { String }   name - name/id of the new riot tag
	 * @param   { String }   html - tag template
	 * @param   { String }   css - custom tag css
	 * @param   { String }   attrs - root tag attributes
	 * @param   { Function } fn - user function
	 * @param   { string }  [bpair] - brackets used in the compilation
	 * @returns { String } name/id of the tag just created
	 */
	riot.tag2 = function(name, html, css, attrs, fn, bpair) {
	  if (css && injectStyle) injectStyle(css)
	  //if (bpair) riot.settings.brackets = bpair
	  __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn }
	  return name
	}
	
	/**
	 * Mount a tag using a specific tag implementation
	 * @param   { String } selector - tag DOM selector
	 * @param   { String } tagName - tag implementation name
	 * @param   { Object } opts - tag logic
	 * @returns { Array } new tags instances
	 */
	riot.mount = function(selector, tagName, opts) {
	
	  var els,
	    allTags,
	    tags = []
	
	  // helper functions
	
	  function addRiotTags(arr) {
	    var list = ''
	    each(arr, function (e) {
	      list += ', *[' + RIOT_TAG + '="' + e.trim() + '"]'
	    })
	    return list
	  }
	
	  function selectAllTags() {
	    var keys = Object.keys(__tagImpl)
	    return keys + addRiotTags(keys)
	  }
	
	  function pushTags(root) {
	    var last
	
	    if (root.tagName) {
	      if (tagName && (!(last = getAttr(root, RIOT_TAG)) || last != tagName))
	        setAttr(root, RIOT_TAG, tagName)
	
	      var tag = mountTo(root, tagName || root.getAttribute(RIOT_TAG) || root.tagName.toLowerCase(), opts)
	
	      if (tag) tags.push(tag)
	    } else if (root.length)
	      each(root, pushTags)   // assume nodeList
	
	  }
	
	  // ----- mount code -----
	
	  if (typeof tagName === T_OBJECT) {
	    opts = tagName
	    tagName = 0
	  }
	
	  // crawl the DOM to find the tag
	  if (typeof selector === T_STRING) {
	    if (selector === '*')
	      // select all the tags registered
	      // and also the tags found with the riot-tag attribute set
	      selector = allTags = selectAllTags()
	    else
	      // or just the ones named like the selector
	      selector += addRiotTags(selector.split(','))
	
	    // make sure to pass always a selector
	    // to the querySelectorAll function
	    els = selector ? $$(selector) : []
	  }
	  else
	    // probably you have passed already a tag or a NodeList
	    els = selector
	
	  // select all the registered and mount them inside their root elements
	  if (tagName === '*') {
	    // get all custom tags
	    tagName = allTags || selectAllTags()
	    // if the root els it's just a single tag
	    if (els.tagName)
	      els = $$(tagName, els)
	    else {
	      // select all the children for all the different root elements
	      var nodeList = []
	      each(els, function (_el) {
	        nodeList.push($$(tagName, _el))
	      })
	      els = nodeList
	    }
	    // get rid of the tagName
	    tagName = 0
	  }
	
	  if (els.tagName)
	    pushTags(els)
	  else
	    each(els, pushTags)
	
	  return tags
	}
	
	/**
	 * Update all the tags instances created
	 * @returns { Array } all the tags instances
	 */
	riot.update = function() {
	  return each(__virtualDom, function(tag) {
	    tag.update()
	  })
	}
	
	/**
	 * Export the Tag constructor
	 */
	riot.Tag = Tag
	  // support CommonJS, AMD & browser
	  /* istanbul ignore next */
	  if (typeof exports === T_OBJECT)
	    module.exports = riot
	  else if ("function" === T_FUNCTION && typeof __webpack_require__(7) !== T_UNDEF)
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return (window.riot = riot) }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else
	    window.riot = riot
	
	})(typeof window != 'undefined' ? window : void 0);


/***/ },
/* 7 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(9);

	__webpack_require__(10);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {'use strict';
	
	//src: src/article.tag
	riot.tag2('weui-article', '<yield></yield>', '', 'class="weui_article"', function (opts) {});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {'use strict';
	
	//src: src/action-sheet.tag
	riot.tag2('weui-action-sheet', '<div class="weui_mask_transition {weui_fade_toggle: opts.show}" show="{opts.show}" onclick="{opts.onclose}"></div> <div class="weui_actionsheet {weui_actionsheet_toggle: opts.show}"> <div class="weui_actionsheet_menu"> <yield></yield> </div> <div class="weui_actionsheet_action"> <weui-action-sheet-cell onclick="{opts.onclose}">取消</weui-action-sheet-cell> </div> </div>', 'weui-action-sheet .weui_mask_transition,[riot-tag="weui-action-sheet"] .weui_mask_transition{display:block}', '', function (opts) {}, '{ }');
	
	riot.tag2('weui-action-sheet-cell', '<yield></yield>', 'weui-action-sheet-cell,[riot-tag="weui-action-sheet-cell"]{display:block}', 'class="weui_actionsheet_cell"', function (opts) {});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {'use strict';
	
	//src: example/app.tag
	riot.tag2('app', '<article> <h2>Article title</h2> </article> <button class="weui_btn weui_btn_primary" onclick="{openActionSheet}">打开 Action Sheet</button> <weui-action-sheet show="{showActionSheet}" onclose="{closeActionSheet}"> <weui-action-sheet-cell onclick="{parent.clickActionSheetMenu0}"> <i>关闭 Action Sheet</i> </weui-action-sheet-cell> <weui-action-sheet-cell onclick="{parent.clickActionSheetMenu1}"> <b>菜单一</b> </weui-action-sheet-cell> <weui-action-sheet-cell onclick="{parent.clickActionSheetMenu2}"> <i>菜单二</i> </weui-action-sheet-cell> </weui-action-sheet>', '', '', function (opts) {
	  'use strict';
	
	  var _this = this;
	
	  /**
	   * Action Sheet
	   */
	
	  this.showActionSheet = false;
	  this.openActionSheet = function (e) {
	    _this.showActionSheet = true;
	    console.log('打开 Action Sheet');
	  };
	  this.closeActionSheet = function (e) {
	    _this.showActionSheet = false;
	    console.log('关闭 Action Sheet');
	  };
	  this.clickActionSheetMenu0 = function (e) {
	    alert('点击关闭 Action Sheet');
	    _this.showActionSheet = false;
	  };
	  this.clickActionSheetMenu1 = function (e) {
	    alert('点击菜单一');
	  };
	  this.clickActionSheetMenu2 = function (e) {
	    alert('点击菜单二');
	  };
	}, '{ }');
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjkzYjY4ZGNkZWFhZTMwNjJhNjYiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3dldWkvZGlzdC9zdHlsZS93ZXVpLmNzcz9lMDkwIiwid2VicGFjazovLy8uL34vd2V1aS9kaXN0L3N0eWxlL3dldWkuY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL34vcmlvdC9yaW90LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXJ0aWNsZS50YWciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi1zaGVldC50YWciLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9hcHAudGFnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBLGdCQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsQzs7Ozs7O0FDTGY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLDhKQUE2SiwrQkFBK0IsbUNBQW1DLEdBQUcsUUFBUSxx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O0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBdUQ7QUFDdkQ7O0FBRUEsOEJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDdlBBOztBQUVBLEVBQUM7QUFDRDtBQUNBLGFBQVksaUNBQWlDLEVBQUU7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUErQztB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dXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDI5M2I2OGRjZGVhYWUzMDYyYTY2XG4gKiovIiwiaW1wb3J0ICd3ZXVpJ1xuaW1wb3J0IHJpb3QgZnJvbSAncmlvdCdcbmltcG9ydCAnLi4vc3JjJ1xuaW1wb3J0ICcuL2FwcC50YWcnXG5cbnJpb3QubW91bnQoJyonKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlL2luZGV4LmpzXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL3dldWkuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi93ZXVpLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vd2V1aS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3dldWkvZGlzdC9zdHlsZS93ZXVpLmNzc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiFcXG4gKiBXZVVJIHYwLjIuMiAoaHR0cHM6Ly9naXRodWIuY29tL3dldWkvd2V1aSlcXG4gKiBDb3B5cmlnaHQgMjAxNSBUZW5jZW50LCBJbmMuXFxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXFxuICovXFxuaHRtbCB7XFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuYSBpbWcge1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ3ZXVpXFxcIjtcXG4gIHNyYzogdXJsKCdkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsZDA5R1JnQUJBQUFBQUFnOEFBc0FBQUFBRFJ3QUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJIVTFWQ0FBQUJDQUFBQURNQUFBQkNzUDZ6N1U5VEx6SUFBQUU4QUFBQVB3QUFBRlpBS0V4cFkyMWhjQUFBQVh3QUFBQ0ZBQUFDR090dnMrMW5iSGxtQUFBQ0JBQUFCQUVBQUFZb0VOTEU4MmhsWVdRQUFBWUlBQUFBTGdBQUFEWUh2OUNlYUdobFlRQUFCamdBQUFBY0FBQUFKQWdHQS9kb2JYUjRBQUFHVkFBQUFCQUFBQUE0TXNnQUFHeHZZMkVBQUFaa0FBQUFIZ0FBQUI0TFJnbWViV0Y0Y0FBQUJvUUFBQUFmQUFBQUlBRWNBRDV1WVcxbEFBQUdwQUFBQVI0QUFBSG00MXdlMkhCdmMzUUFBQWZFQUFBQWR3QUFBTVVMcCtYaGVKeGpZR1JnWU9CaWtHUFFZV0IwY2ZNSlllQmdZR0dBQUpBTVkwNW1laUpRRE1vRHlyR0FhUTRnWm9PSUFnQ0tJd05QQUhpY1kyQmtYc2c0Z1lHVmdZT3BpbWtQQXdOREQ0Um1mTUJneU1qRXdNREV3TXJNZ0JVRXBMbW1NRGk4WW56Rnkvd0N5STBDazBDTklBSUE3QjBMRlFCNG5PMlIydzBESVF3RWg0UGpYdEJKS2toQitVcHBxWXdtTGw0MlpjVFNlT1hGSUdRREs1Q0RSMUFndlVrb1h1R202V2ZPNlJlZXM2ZklILzIrSXlmbHFNdk1TL1NXZUxHeXNYUEV2WXRHajZQS1A5ck1uMS9WTlQwejU3a1lwTmxvTDZNWVRYaXNSanNiMVNEZEROTGRJRDBNMHROb2wrTXlTSnZSNzBZMzlDK2dBaUhkQUFBQWVKeDFWRjFMSEZjWVB1K2NyOWtaM1hWMmRNYWRyQi83NFV5SnVxbXUyVVZGYzEwb0FTRzNRdWwvYUM1U0N2MjRETFFrN1UyOTZwMmhxelJpS1M0YWE3VEJpRWdMVFNFcEpGNllJTDBSS1ZtYk5lN1lkM2JkalFuc2NIZzRNL1BNZWQvbm1lY2NvaEM4NkU5MG51akVKZ1RDSUx2Qm5vUjhCbWdHUEp6Z2JSaWd0Rkxtdkx5eUhPRHkzQjduZTNPRkFPbDg4UFNZc2VQbGxmTEp6K3g1b2ZDY1ZaR1EydHFMZEJIWFRyeXp0aFRKUytEbXhzRVlRUmkyT296c3NBVUh4ZGVjdnk2dSs1ejc2ZXNSTjNJOTNOSTVyVXRYMWFZN1crZ2k5OWZyakVwcEpocWRpVHBncTdxdSt2ODRXS3BhYjU0V3NGNk1KTitwMkM3NkllbGVObkw1ckdWN0dSakpEVnZ0QWc2WGpqZy9XbG85NXZ4NFJwTnhxWUU2b0VLUEdZdTVzUmd0OE9QVk9xUHlpZFEwQ1k0S29JNUNyQytHSXloWjAzbWJycE5XMGxPcmFsak16cVh6UmdaTUVDajBDdVI2d01yM0JRZ3Z2M2g0TFFUMDFpMmdvV3NQYi9pL012b2RWVG9vdlVFWmVJeWFsSzUzVDhUOWpVZUg2ZlRoSTVpSVQvaFAvUTJGZnM5b25ORnBSVG1pMUdSbmVyK2tkN0Z1UTY5UkU0eVZaZGJxa0VLbTNFc3dZaWJkTTcybFQrOVBoY28zYjVaRFUvZHZaMElhc0NRRHJUY2NqY2FqVVhxM2E5enhmOS9lVDZYMnQySElHZjhQMU1jTWdEMVcvUVVUQ1hHem9mY2V2WWVKU1dIVkRGeUJTVUJsd3lnUXZiWGFKUWpYNjNPSko0aTBpSjBqME1zVlRubWIvRmhHQlpqU0VJb1EvaCtpVFNoeDdsYzJWMDhKNTBCV040SENwakFra3dyL2tQRVhBcERZSnZ5L2NES0hML2s1TW1GdlpYZVFERFhQcjhuRGdMOUJSRUJZMVVheFlUZHBXME4yMDJUMyswZlk1a2NpZ24yRCtJeTNDZWpqb0VmYUFacUhYa2srNWNBLzRJcGcrUEhuZ2tPQ1IzUjBNR2kxQ25TWmpnVTd6V3k0bHN0RHc3V2tONkVKeWRWWXkzWnJyNjUwdFhUcnJacFdLZXB4SFJiMVJGaHZsYUZ2UTZEQmFralJXdlV1dmJLZ2EyOHl1RVNYMEFzRFN3a2w4QUVqNkJJellXU05MQnlzVkRpdnJEd0FOTytValBsL0Q1YnBFczRlTko1WG5zRlZmL2U4cjVSRXlJWHEza1duYUJOdmFhb2plem1sdkFENHQ0bVZUOUtWSjhwWEFERFExTGZCU3Zvc3p4dDBBelZjSU9sQXhWbDhVSVhFODZFRFd3ZzJzVWRIY204U2ZiRG1uMkFlMk5vV1NNeEgrVmxPMWNMQTJVWEdJYXlsVE1keEhZZHU0SnV0Yzh4OVRmWC9aRUl3R0ZCMS96M0hpOFU4cDY1OWphNFJsVVJKTjdtSVhVekNpSnNVN1phTlFvMnFXQm8weGdJclhPV3RZL0psWnlMeGZpSXg5YzNvNk5aWS80Ny9pakZRZDRxbmFQbG1ZWSt4dlVJVmxSK2dkNmdYeDFpWC8xczhyaXd3LzFXTlZkd0I5V1MyemtNazlYTnRsczVXY3g3c09PbEpXOXA1TysvbG0vMFY1ZXVabVhoOS9GSXNjVjRxMXZET0xtTzdkNnFvL0hpT0JMRUdwVmc2MmF4ekVBbjVINTQyaUg0QUFBQjRuR05nWkdCZ0FHTDJUdWQxOGZ3Mlh4bTRtVjhBUlJndTViditScWFaRHpNZkJsSWNERXdnSGdBeVl3cXhBQUI0bkdOZ1pHQmdmc0hBd0JBRkpobVlEek13TXFBQ1BnQk1Cd01IZUp4allHQmdZSDVCT2dZQVFxTUw4QUFBQUFBQUxnQm1BS0lBM2dFYUFWNEJ0Z0hrQWdvQ1JnS0lBdElERkFBQWVKeGpZR1JnWU9Cak1HSmdZUUFCSmlEbUFrSUdodjlnUGdNQUR3SUJXd0I0bkYyUXdVN0NRQlJGYjZHZ1FxSW1KaTdOeElVYmt4Wlk4Z0d3Y3NPQ3RhVk1DNlIwbXVrVXdzYWxYK0hTYi9HalhIbW5QbGs0TDUxMzVzenRTMW9BdC9oQ0FMOENoTzN1VndjWFBQMXlselFVRGxrM3dqM2FPK0UrL1lQd0FNOTRGUGFKRjA0SXdpdWFTN3dLZDNDTmpYQ1gvaUFja3QrRWU3akh1M0NmL2tONGdDVStoWWQ0d3ZkUk45dUZ6cHNpc1I3OXM5UzIzcHBTamFPUlA4NTFxVzNpOUZxdFRxbys1QlBuTXBWWnMxY3pVenBkRkVaVjF1eDA2cUtOYzlVMGpqUHhVV3IyT0VLandSWUw5cHhVSUlFOTI3KytaTGVvU1FZbEZNYUlNRHJmenRuTE5wSEFzYStaV09IRXZlYlg1NWpRT21ROFo4d1k3RW16ZHBKUEZ5eERVN1YzTzVxVVB1SS85RzlWbUNKbVpmL3lFVk9jOUFOWVFGRHZBQUI0bkcyTjNRckNNQlNEVDJadDkyZkZKeHpsckpOQ09ZVlY2ZXZMM1BITzNJUjhrSVE2T2pYU2YzbDB1TURnQ2d1SEhnTkdUSmh4ZzhlZExLZWRjK3pYMGlTWHNKb2tXNWxyMk9KUzM4eXgxdUViV3RqRktmSHF5OWw5L0tJVUphNkY5RXJ5OU9xS3pURXlIUWNLTEFmaG1Jaytrc295VlFBPScpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCdkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsQUFFQUFBQUxBSUFBQXdBd1IxTlZRckQrcyswQUFBRTRBQUFBUWs5VEx6SkFLRXhwQUFBQmZBQUFBRlpqYldGdzYyK3o3UUFBQWd3QUFBSVlaMng1WmhEU3hQTUFBQVJFQUFBR0tHaGxZV1FIdjlDZUFBQUE0QUFBQURab2FHVmhDQVlEOXdBQUFMd0FBQUFrYUcxMGVETElBQUFBQUFIVUFBQUFPR3h2WTJFTFJnbWVBQUFFSkFBQUFCNXRZWGh3QVJ3QVBnQUFBUmdBQUFBZ2JtRnRaZU5jSHRnQUFBcHNBQUFCNW5CdmMzUUxwK1hoQUFBTVZBQUFBTVVBQVFBQUErZ0FBQUJhQStnQUFBQUFBOE1BQVFBQUFBQUFBQUFBQUFBQUFBQUFBQTRBQVFBQUFBRUFBQWVKYWxaZkR6ejFBQXNENkFBQUFBRFNiMFg3QUFBQUFOSnZSZnNBQUFBQUE4TUR3d0FBQUFnQUFnQUFBQUFBQUFBQkFBQUFEZ0F5QUFRQUFBQUFBQUlBQUFBS0FBb0FBQUQvQUFBQUFBQUFBQUVBQUFBS0FCNEFMQUFCUkVaTVZBQUlBQVFBQUFBQUFBQUFBUUFBQUFGc2FXZGhBQWdBQUFBQkFBQUFBUUFFQUFRQUFBQUJBQWdBQVFBR0FBQUFBUUFBQUFBQUFRT2hBWkFBQlFBSUFub0N2QUFBQUl3Q2VnSzhBQUFCNEFBeEFRSUFBQUlBQlFNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVR1pGWkFCQTZnSHFEUVBvQUFBQVdnUG9BQUFBQUFBQkFBQUFBQUFBQUFBQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBRDZBQUFBK2dBQUFQb0FBQUQ2QUFBQStnQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBQUFBQUZBQUFBQXdBQUFDd0FBQUFFQUFBQmJBQUJBQUFBQUFCbUFBTUFBUUFBQUN3QUF3QUtBQUFCYkFBRUFEb0FBQUFFQUFRQUFRQUE2ZzMvL3dBQTZnSC8vd0FBQUFFQUJBQUFBQUVBQWdBREFBUUFCUUFHQUFjQUNBQUpBQW9BQ3dBTUFBMEFBQUVHQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXdBQUFBQUFLd0FBQUFBQUFBQURRQUE2Z0VBQU9vQkFBQUFBUUFBNmdJQUFPb0NBQUFBQWdBQTZnTUFBT29EQUFBQUF3QUE2Z1FBQU9vRUFBQUFCQUFBNmdVQUFPb0ZBQUFBQlFBQTZnWUFBT29HQUFBQUJnQUE2Z2NBQU9vSEFBQUFCd0FBNmdnQUFPb0lBQUFBQ0FBQTZna0FBT29KQUFBQUNRQUE2Z29BQU9vS0FBQUFDZ0FBNmdzQUFPb0xBQUFBQ3dBQTZnd0FBT29NQUFBQURBQUE2ZzBBQU9vTkFBQUFEUUFBQUFBQUxnQm1BS0lBM2dFYUFWNEJ0Z0hrQWdvQ1JnS0lBdElERkFBQUFBSUFBQUFBQTY4RHJRQUxBQmNBQUFFT0FRY2VBUmMrQVRjdUFRTXVBU2MrQVRjZUFSY09BUUgxdlBrRkJmbTh1L2tGQmZtN3JPTUZCZU9zcStNRkJlTURyUVg1dkx2NkJBVDZ1N3o1L0xRRTVLdXI1QVFFNUt1cjVBQUFBZ0FBQUFBRHN3T3pBQXNBSVFBQUFRNEJCeDRCRno0Qk55NEJBd2NHSWk4QkpqWTdBUkUwTmpzQk1oWVZFVE15RmdIdXVmc0ZCZnU1d3Y0RkJmNGtkZzhtRDNZT0RCaGRDd2NtQ0FwZEdBd0Rzd1grd3JuN0JRWDd1Y0wrL2ZXYUVoS2FFaG9CRndnTEN3ais2Um9BQUFNQUFBQUFBNjBEcXdBTEFCa0FJZ0FBQVE0QkJ4NEJGejRCTnk0QkF4UUdLd0VpSmpVUk5qY3pGaGNuTGdFME5qSVdGQVlCOExqMkJRWDJ1TDc2QlFYNm1nb0hIQWNLQVFnc0NBRWZFeGtaSmhrWkE2c0YrcjY0OWdVRjlyaSsrdjExQndvS0J3RWFDQUVCQ0RrQkdTVVpHU1VaQUFBQUFBSUFBQUFBQTVJRHdnQU5BQjhBQUFFT0FRY1JGZ1FYTmlRM0VTNEJFd0VHTHdFbVB3RTJId0VXTnlVMkh3RVdBZlNCeUZRSkFRT1JrUUVEQ1ZUSWV2Ni9CQU9VQXdJVkF3TjZBd1FCSndRREV3TUR3aDQ5SFA3RDFQQWtKUERVQVQwY1BmN2Qvc01DQTVrRUF4d0VBMTBDQXZZREF4TUVBQU1BQUFBQUE0SURzQUFOQUJrQUlnQUFBUTRCQnhFZUFSYytBVGNSTGdFSE14WVZCd1lISXlZdkFUUVRJaVkwTmpJV0ZBWUI5WHZCVVFuNWk0djVDVkhCa2k0SkNnRUVJZ1FCQ2lBT0VoSWNFaElEc0IwN0d2N1B5K2NqSStmTEFURWFPL2NCQ05nRUFRRUUyQWorc1JNY0VoSWNFd0FBQUFJQUFBQUFBNzBEdlFBWEFDTUFBQUV1QVQ4QlBnRWZBUll5TnlVMkZoY25GaFFIQVFZbUp5VW1BQ2NHQUFjV0FCYzJBQUVnQlFJRkF3VVFCMklIRWdZQkV3Y1JCZ0lHQnY3UUJoQUdBaHdGL3YzSHZ2OEFCUVVCQUw3SEFRTUJ4d1lSQndRSEFnVk1CQVhsQmdFR0FnWVFCdjdWQmdFR3JNY0JBd1VGL3YzSHZ2OEFCUVVCQUFBRUFBQUFBQU92QTYwQUN3QVhBQzBBTVFBQUFRNEJCeDRCRno0Qk55NEJBeTRCSno0Qk54NEJGdzRCRXdVT0FTOEJKZ1lQQVFZV0h3RVdNamNCUGdFbUloY1dNUmNCOWJ6NUJRWDV2THY1QlFYNXU2empCUVhqckt2akJRWGpLLzcyQnhFR1lBWVBCUU1GQVFaOUJSQUdBU1VGQVFzUEZBRUJBNjBGK2J5NytnUUUrcnU4K2Z5MEJPU3JxK1FFQk9TcnErUUNJdDBGQVFWSkJRSUdCQWNSQm9BR0JRRWhCUThMQkFFQkFBQUFBQUVBQUFBQUE3c0RPZ0FYQUFBVExnRS9BVDRCSHdFV05qY0JOaFlYSnhZVUJ3RUdJaWM5Q2dZSEJRZ1pETXNOSUFzQ0hRd2VDdzBLQ3YyNUN4d0xBYk1MSVE0TERRY0prd2tCQ2dHK0NRSUtEUXNkQy8yeEN3b0FBQUFBQWdBQUFBQUR1QU80QUFzQUVRQUFBUVlDQng0QkZ6WWtOeVlBRXlFUk14RXpBZTY4L1FVRi9iekZBUUFGQmY4QU92N2FMZmtEdUFYL0FNVzgvUVVGL2J6RkFRRDkzZ0ZPL3Q4QUFBUUFBQUFBQTY4RHJRQURBQThBR3dBaEFBQUJGakVYQXc0QkJ4NEJGejRCTnk0QkF5NEJKejRCTng0QkZ3NEJBeU1WTXpVakF1VUJBZks4K1FVRitieTcrUVVGK2J1czR3VUY0NnlyNHdVRjQ5a2svZGtDZ3dFQkFTd0YrYnk3K2dRRStydTgrZnkwQk9TcnErUUVCT1NycStRQ0xmMGtBQU1BQUFBQUE4TUR3d0FMQUJzQUpBQUFBUVlBQnhZQUZ6WUFOeVlBQnpNeUZoVUREZ0VyQVNJbUp3TTBOaE1pSmpRMk1oWVVCZ0h1d1A3OEJRVUJCTURKQVFjRkJmNzUzallJQ2c0QkJRUXFCQVVCRGdvakV4b2FKaG9hQThNRi92bkp3UDc4QlFVQkJNREpBUWZuQ2dqKzB3UUdCZ1FCTEFnTC9pZ2FKeGtaSnhvQUFBUUFBQUFBQThBRHdBQUlBQklBSGdBcUFBQUJQZ0UwSmlJR0ZCWVhJeFV6RVNNVk16VWpBd1lBQnhZRUZ6NEJOeVlDQXk0Qkp6NEJOeDRCRnc0QkFmUVlJU0V3SVNGUmp6azV5VG9yemY3NEJBUUJDTTI1L3dVRi84ZXI0d1FFNDZ1cjR3UUU0d0tnQVNBeElDQXhJRG9kL3NRY0hBS3hCUDc0emJuL0JRWC91YzBCQ1B5bkJPT3JxK01FQk9PcnErTUFBQUFEQUFBQUFBT25BNmNBQ3dBWEFDTUFBQUVISndjWEJ4YzNGemNuTndNT0FRY2VBUmMrQVRjdUFRTXVBU2MrQVRjZUFSY09BUUtPbXBvY21wb2NtcG9jbXBxMnVmVUZCZlc1dWZVRkJmVzVxTjhFQk4rb3FOOEVCTjhDcXBxYUhKcWFISnFhSEpxYUFSa0Y5Ym01OVFVRjlibTU5ZnpIQk4rb3FOOEVCTitvcU44QUFBQUFBQkFBeGdBQkFBQUFBQUFCQUFRQUFBQUJBQUFBQUFBQ0FBY0FCQUFCQUFBQUFBQURBQVFBQ3dBQkFBQUFBQUFFQUFRQUR3QUJBQUFBQUFBRkFBc0FFd0FCQUFBQUFBQUdBQVFBSGdBQkFBQUFBQUFLQUNzQUlnQUJBQUFBQUFBTEFCTUFUUUFEQUFFRUNRQUJBQWdBWUFBREFBRUVDUUFDQUE0QWFBQURBQUVFQ1FBREFBZ0FkZ0FEQUFFRUNRQUVBQWdBZmdBREFBRUVDUUFGQUJZQWhnQURBQUVFQ1FBR0FBZ0FuQUFEQUFFRUNRQUtBRllBcEFBREFBRUVDUUFMQUNZQStuZGxkV2xTWldkMWJHRnlkMlYxYVhkbGRXbFdaWEp6YVc5dUlERXVNSGRsZFdsSFpXNWxjbUYwWldRZ1lua2djM1puTW5SMFppQm1jbTl0SUVadmJuUmxiR3h2SUhCeWIycGxZM1F1YUhSMGNEb3ZMMlp2Ym5SbGJHeHZMbU52YlFCM0FHVUFkUUJwQUZJQVpRQm5BSFVBYkFCaEFISUFkd0JsQUhVQWFRQjNBR1VBZFFCcEFGWUFaUUJ5QUhNQWFRQnZBRzRBSUFBeEFDNEFNQUIzQUdVQWRRQnBBRWNBWlFCdUFHVUFjZ0JoQUhRQVpRQmtBQ0FBWWdCNUFDQUFjd0IyQUdjQU1nQjBBSFFBWmdBZ0FHWUFjZ0J2QUcwQUlBQkdBRzhBYmdCMEFHVUFiQUJzQUc4QUlBQndBSElBYndCcUFHVUFZd0IwQUM0QWFBQjBBSFFBY0FBNkFDOEFMd0JtQUc4QWJnQjBBR1VBYkFCc0FHOEFMZ0JqQUc4QWJRQUFBQUlBQUFBQUFBQUFDZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURnRUNBUU1CQkFFRkFRWUJCd0VJQVFrQkNnRUxBUXdCRFFFT0FROEFCbU5wY21Oc1pRaGtiM2R1Ykc5aFpBUnBibVp2REhOaFptVmZjM1ZqWTJWemN3bHpZV1psWDNkaGNtNEhjM1ZqWTJWemN3NXpkV05qWlhOelgyTnBjbU5zWlJGemRXTmpaWE56WDI1dlgyTnBjbU5zWlFkM1lXbDBhVzVuRG5kaGFYUnBibWRmWTJseVkyeGxCSGRoY200TGFXNW1iMTlqYVhKamJHVUdZMkZ1WTJWc0FBQUFBQUE9JykgZm9ybWF0KCd3b2ZmJyksIHVybCgnZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQnpkR0Z1WkdGc2IyNWxQU0p1YnlJL1BpQUtQQ0ZFVDBOVVdWQkZJSE4yWnlCUVZVSk1TVU1nSWkwdkwxY3pReTh2UkZSRUlGTldSeUF4TGpFdkwwVk9JaUFpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2UjNKaGNHaHBZM012VTFaSEx6RXVNUzlFVkVRdmMzWm5NVEV1WkhSa0lpQStDanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BHUmxabk0rQ2lBZ1BHWnZiblFnYVdROUluZGxkV2tpSUdodmNtbDZMV0ZrZGkxNFBTSXhNREF3SWo0S0lDQWdJRHhtYjI1MExXWmhZMlVnWm05dWRDMW1ZVzFwYkhrOUluZGxkV2tpQ2lBZ0lDQWdJSFZ1YVhSekxYQmxjaTFsYlQwaU1UQXdNQ0lnWVhOalpXNTBQU0l4TURBd0lnb2dJQ0FnSUNCa1pYTmpaVzUwUFNJd0lpQXZQZ29nSUNBZ1BHMXBjM05wYm1jdFoyeDVjR2dnYUc5eWFYb3RZV1IyTFhnOUlqQWlJQzgrQ2lBZ0lDQThaMng1Y0dnZ1oyeDVjR2d0Ym1GdFpUMGlZMmx5WTJ4bElnb2dJQ0FnSUNCMWJtbGpiMlJsUFNJbUkzaEZRVEF4T3lJS0lDQWdJQ0FnYUc5eWFYb3RZV1IyTFhnOUlqRXdNREFpSUdROUlpQk5OVEF3TGpVMU15QTVOREF1T0RRNFF6STFOaTQyTnprZ09UUXdMamcwT0NBMU9TNHdNREVnTnpRekxqRTJNREF3TURBd01EQXdNREVnTlRrdU1EQXhJRFE1T1M0eU9EWkROVGt1TURBeElESTFOUzQwTlRBd01EQXdNREF3TURBeElESTFOaTQyTnprZ05UY3VOek16T1RrNU9UazVPVGs1T1NBMU1EQXVOVFV6SURVM0xqY3pNems1T1RrNU9UazVPVGxUT1RReUxqRXdOQ0F5TlRVdU5EVWdPVFF5TGpFd05DQTBPVGt1TWpnMU9UazVPVGs1T1RrNU9VTTVOREl1TVRBMElEYzBNeTR4TmlBM05EUXVOREkzSURrME1DNDRORGdnTlRBd0xqVTFNekF3TURBd01EQXdNREVnT1RRd0xqZzBPSHBOTlRBd0xqVTFNeUE1TVM0M05ESTVPVGs1T1RrNU9UazVRekkzTnk0NE5qVWdPVEV1TnpReU9UazVPVGs1T1RrNU9TQTVOeTR6T1RjZ01qY3lMakkyTnlBNU55NHpPVGNnTkRrMExqZzRPVU01Tnk0ek9UY2dOekUzTGpVMU9TQXlOemN1T0RZMUlEZzVPQzR3TlRVZ05UQXdMalUxTXlBNE9UZ3VNRFUxUXpjeU15NHlNRE1nT0RrNExqQTFOU0E1TURNdU56QTVJRGN4Tnk0MU5Ua2dPVEF6TGpjd09TQTBPVFF1T0RnNVF6a3dNeTQzTURrZ01qY3lMakkyTnprNU9UazVPVGs1T1RrZ056SXpMakl3TXpBd01EQXdNREF3TURFZ09URXVOelF5T1RrNU9UazVPVGs1T1NBMU1EQXVOVFV6TURBd01EQXdNREF3TVNBNU1TNDNOREk1T1RrNU9UazVPVGs1ZWlJZ0x6NEtJQ0FnSUR4bmJIbHdhQ0JuYkhsd2FDMXVZVzFsUFNKa2IzZHViRzloWkNJS0lDQWdJQ0FnZFc1cFkyOWtaVDBpSmlONFJVRXdNanNpQ2lBZ0lDQWdJR2h2Y21sNkxXRmtkaTE0UFNJeE1EQXdJaUJrUFNJZ1RUUTVOQzQwTnpVZ09UUTJMalk0UXpJMU15NHpNRFV3TURBd01EQXdNREF4SURrME5pNDJPQ0ExTXk0ek1qRWdOelEyTGpZNU5pQTFNeTR6TWpFZ05EazBMalE0TkVNMU15NHpNakVnTWpVekxqTXdOU0F5TlRNdU16QTFNREF3TURBd01EQXdNU0ExTXk0ek1qQTVPVGs1T1RrNU9UazVJRFE1TkM0ME56VWdOVE11TXpJd09UazVPVGs1T1RrNU9VTTNORFl1TmprMklEVXpMak15TURrNU9UazVPVGs1T1RrZ09UUTJMalk0SURJMU15NHpNRFVnT1RRMkxqWTRJRFE1TkM0ME9ETTVPVGs1T1RrNU9UazVRemswTmk0Mk9DQTNORFl1TmprME9UazVPVGs1T1RrNU9TQTNORFl1TmprMUlEazBOaTQyT0NBME9UUXVORGMxTURBd01EQXdNREF3TVNBNU5EWXVOamg2VFRZMU1TNDVPRE13TURBd01EQXdNREF4SURReE9DNDFNRE01T1RrNU9UazVPVGs1VERVek5DNHhNek1nTWpZMUxqSTJOVGs1T1RrNU9UazVPVGxETlRFMUxqSTROQ0F5TkRBdU56UTJPVGs1T1RrNU9UazVPU0EwT0RRdU56WTRJREkwTUM0Mk5qUTVPVGs1T1RrNU9UazVJRFEyTlM0NE5qVWdNalkxTGpJek9EazVPVGs1T1RrNU9UaE1NelE0TGpBeE5TQTBNVGd1TlRFNE9UazVPVGs1T1RrNU9FTXpNamt1TVRZNUlEUTBNeTR3TXpZNU9UazVPVGs1T1RrNElETXpPQzQ0T1RNZ05EWXlMams1T1RrNU9UazVPVGs1T1RnZ016WTVMall3T1NBME5qSXVPVGs1T1RrNU9UazVPVGs1T0VnME5qTldOelF4TGprMU1EazVPVGs1T1RrNU9UaERORFl6SURjMU1pNHlNamc1T1RrNU9UazVPVGs0SURRM01TNHhNVGtnTnpZd0xqazVPVGs1T1RrNU9UazVPVGdnTkRneExqTTRPU0EzTmpBdU9UazVPVGs1T1RrNU9UazVPRWcxTVRndU5qRXlRelV5T0M0NE9ESWdOell3TGprNU9UazVPVGs1T1RrNU9UZ2dOVE0zTGpBd01TQTNOVEl1TWpJNE9UazVPVGs1T1RrNU9DQTFNemN1TURBeElEYzBNUzQ1TlRBNU9UazVPVGs1T1RrNFZqUTJNaTQ1T1RrNU9UazVPVGs1T1RrNFNEWXpNQzR6T1RFNU9UazVPVGs1T1RrNVF6WTJNUzR4T0NBME5qSXVPVGs1T1RrNU9UazVPVGs1T0NBMk56QXVPRGcySURRME15NHdOemM1T1RrNU9UazVPVGs0SURZMU1TNDVPRE1nTkRFNExqVXdNems1T1RrNU9UazVPVGg2SWlBdlBnb2dJQ0FnUEdkc2VYQm9JR2RzZVhCb0xXNWhiV1U5SW1sdVptOGlDaUFnSUNBZ0lIVnVhV052WkdVOUlpWWplRVZCTURNN0lnb2dJQ0FnSUNCb2IzSnBlaTFoWkhZdGVEMGlNVEF3TUNJZ1pEMGlJRTAwT1RVdU5UWTRJRGt6T1VNeU5UY3VPVGtnT1RNNUlEWXhJRGMwTWk0d01TQTJNU0EwT1RNdU5UWTRRell4SURJMU5TNDVPU0F5TlRjdU9Ua2dOVGtnTkRrMUxqVTJPQ0ExT1VNM05EUXVNREVnTlRrZ09UUXhJREkxTlM0NU9TQTVOREVnTkRrekxqVTJPRU01TkRFZ056UXlMakF4SURjME5DNHdNU0E1TXprZ05EazFMalUyT0NBNU16bDZUVFV6TWlBeU9ETXVNREl4UXpVek1pQXlOek11TlRBM09UazVPVGs1T1RrNU9TQTFNalF1TURZeUlESTJOaUExTVRRdU5UWXhJREkyTmtnME9EY3VORFF5UXpRM055NDVNaUF5TmpZZ05EY3dMakF3TVNBeU56TXVOVFk0SURRM01DNHdNREVnTWpnekxqQXlNVlkxTmpRdU9UazJRelEzTUM0d01ERWdOVFk1TGpnMU55QTBOelF1TVRRM0lEVTNOQ0EwTnprdU1ESTJJRFUzTkVnMU1qSXVPVGMxUXpVeU55NDRORGNnTlRjMElEVXpNaUExTmprdU9EUTRPVGs1T1RrNU9UazVPU0ExTXpJZ05UWTBMams1TmxZeU9ETXVNREl4ZWswMU1ERWdOakl5TGpFNU9UazVPVGs1T1RrNU9UbERORGMyTGpZNU9TQTJNakl1TVRrNU9UazVPVGs1T1RrNU9TQTBOVGNnTmpReExqZzVPRGs1T1RrNU9UazVPVGtnTkRVM0lEWTJOaTR4T1RrNU9UazVPVGs1T1RrNVV6UTNOaTQyT1RrZ056RXdMakU1T1RrNU9UazVPVGs1T1RrZ05UQXhJRGN4TUM0eE9UazVPVGs1T1RrNU9UazVRelV5TlM0ek1ETWdOekV3TGpFNU9UazVPVGs1T1RrNU9Ua2dOVFExSURZNU1DNDFNREVnTlRRMUlEWTJOaTR4T1RrNU9UazVPVGs1T1RrNVV6VXlOUzR6TURNZ05qSXlMakU1T1RrNU9UazVPVGs1T1RrZ05UQXhJRFl5TWk0eE9UazVPVGs1T1RrNU9UazVlaUlnTHo0S0lDQWdJRHhuYkhsd2FDQm5iSGx3YUMxdVlXMWxQU0p6WVdabFgzTjFZMk5sYzNNaUNpQWdJQ0FnSUhWdWFXTnZaR1U5SWlZamVFVkJNRFE3SWdvZ0lDQWdJQ0JvYjNKcGVpMWhaSFl0ZUQwaU1UQXdNQ0lnWkQwaUlFMDFNREFnT1RZeVF6TXlOeTR4TURZZ09USXlMamMxTXlBeU1ERXVNVEExSURnM09TNDBOak01T1RrNU9UazVPVGs1SURnMkxqWXpNaUE0TkRNdU1UazVNREF3TURBd01EQXdNVU00Tmk0Mk16SWdOekl5TGpZd09DQTROaTQzT1RNZ05qSTNMakE1TXpBd01EQXdNREF3TURFZ09EWXVOemt6SURVeU5pNDBNREF3TURBd01EQXdNREF4UXpnMkxqYzVNeUF5TkRJdU56RXpJRE14T0M0ek5pQTROaTQyTlRBd01EQXdNREF3TURBeElEVXdNQ0F6T0VNMk9ERXVOalF5SURnMkxqWTFJRGt4TXk0eU1EY2dNalF5TGpjeE15QTVNVE11TWpBM0lEVXlOaTQwUXpreE15NHlNRGNnTmpJM0xqQTVNaUE1TVRNdU16WTRJRGN5TWk0Mk1EZ2dPVEV6TGpNMk9DQTRORE11TVRrNVF6YzVPQzQ0T1RVZ09EYzVMalEyTXprNU9UazVPVGs1T1RrZ05qY3lMamc1TkNBNU1qSXVOelV6SURRNU9TNDVPVGs1T1RrNU9UazVPVGs1SURrMk1ucE5OelV4TGpRNU9DQTJOREF1T1RVMlREUXlPUzQ1TWpFd01EQXdNREF3TURBeElETXlOQzQwT0VNME1qZ3VNREExTURBd01EQXdNREF3TVNBek1qSXVOVGswTURBd01EQXdNREF3TVNBME1qUXVPVEl3TURBd01EQXdNREF3TVNBek1qSXVOalUyTURBd01EQXdNREF3TVNBME1qTXVNRGN3TURBd01EQXdNREF3TVNBek1qUXVOVFkxTURBd01EQXdNREF3TVV3eU56UXVPREV6TURBd01EQXdNREF3TVNBME56Z3VNREEzTURBd01EQXdNREF3TVVNeU56SXVPVFEyTURBd01EQXdNREF3TVNBME56a3VPVFF3TURBd01EQXdNREF3TVNBeU56SXVOamt5TURBd01EQXdNREF3TVNBME9ETXVNakl4TURBd01EQXdNREF3TVNBeU56UXVNek14SURRNE5TNDBOVE13TURBd01EQXdNREF4VERJNU5DNDJPVGd3TURBd01EQXdNREF4SURVeE15NHhOalV3TURBd01EQXdNREF4UXpJNU5pNHlPVGt3TURBd01EQXdNREF4SURVeE5TNHpORFVnTWprNUxqTXlNakF3TURBd01EQXdNREVnTlRFMUxqYzROakF3TURBd01EQXdNREVnTXpBeExqUTFOREF3TURBd01EQXdNREVnTlRFMExqRTFNa3cwTWpJdU5qQTRNREF3TURBd01EQXdNU0EwTWpFdU1qazNNREF3TURBd01EQXdNa00wTWpRdU56TTRNREF3TURBd01EQXdNU0EwTVRrdU5qWXpNREF3TURBd01EQXdNU0EwTWpndU1UWTFNREF3TURBd01EQXdNU0EwTVRrdU56VTRNREF3TURBd01EQXdNaUEwTXpBdU1UYzJNREF3TURBd01EQXdNU0EwTWpFdU5ETTFNREF3TURBd01EQXdNa3czTWpVdU1EZ3pNREF3TURBd01EQXdNU0EyTmpjdU1USXdNREF3TURBd01EQXdNVU0zTWpjdU1UTTJNREF3TURBd01EQXdNU0EyTmpndU9ESTFNREF3TURBd01EQXdNaUEzTXpBdU16VTBJRFkyT0M0Mk56TXdNREF3TURBd01EQXlJRGN6TWk0eU56TXdNREF3TURBd01EQXhJRFkyTmk0M056Z3dNREF3TURBd01EQXlURGMxTVM0ME9Ea3dNREF3TURBd01EQXhJRFkwTnk0NE1EQXdNREF3TURBd01EQXlRemMxTXk0ME1EWXdNREF3TURBd01EQXlJRFkwTlM0NU1EUXdNREF3TURBd01EQXlJRGMxTXk0ME1qWXdNREF3TURBd01EQXlJRFkwTWk0NE5UVXdNREF3TURBd01EQXlJRGMxTVM0ME9UZ3dNREF3TURBd01EQXlJRFkwTUM0NU5UWXdNREF3TURBd01EQXhlaUlnTHo0S0lDQWdJRHhuYkhsd2FDQm5iSGx3YUMxdVlXMWxQU0p6WVdabFgzZGhjbTRpQ2lBZ0lDQWdJSFZ1YVdOdlpHVTlJaVlqZUVWQk1EVTdJZ29nSUNBZ0lDQm9iM0pwZWkxaFpIWXRlRDBpTVRBd01DSWdaRDBpSUUwMU1ERWdPVFF6TGpjd05rTXpNelF1T1RVeUlEa3dOaTR3TVRNZ01qRXpMamswTVNBNE5qUXVORE00SURFd05DQTRNamt1TmpBNVF6RXdOQ0EzTVRNdU56a3pJREV3TkM0eE5UVWdOakl5TGpBMklERXdOQzR4TlRVZ05USTFMak0xTlVNeE1EUXVNVFUxSURJMU1pNDVNREV3TURBd01EQXdNREF4SURNeU5pNDFOVElnTVRBekxqQXhPQ0ExTURFZ05UWXVNamt6UXpZM05TNDBORFFnTVRBekxqQXhPQ0E0T1RjdU9EUTFJREkxTWk0NUlEZzVOeTQ0TkRVZ05USTFMak0xTlVNNE9UY3VPRFExSURZeU1pNHdOaUE0T1RnZ056RXpMamM1TXlBNE9UZ2dPREk1TGpZd09VTTNPRGd1TURVNUlEZzJOQzQwTXpnd01EQXdNREF3TURBeElEWTJOeTR3TkRnZ09UQTJMakF4TXlBMU1ERWdPVFF6TGpjd05ucE5ORGMzTGpZM05DQTJOamhJTlRJMExqTXlOa00xTWprdU5UQTNNREF3TURBd01EQXdNU0EyTmpnZ05UTXpMalE1T0NBMk5qTXVPVEV4TURBd01EQXdNREF3TVNBMU16TXVNalUySURZMU9DNDNPRFJNTlRJekxqQXlNU0EwTkRJdU9VTTFNakl1T0RrM09UazVPVGs1T1RrNU9TQTBOREF1TXpNeUlEVXlNQzQzTURnZ05ETTRJRFV4T0M0eE16RWdORE00U0RRNE15NDROamRETkRneExqTXdOaUEwTXpnZ05EYzVMakV3TXlBME5EQXVNelExTURBd01EQXdNREF3TVNBME56Z3VPVGdnTkRReUxqa3pOakF3TURBd01EQXdNREZNTkRZNExqYzBORGs1T1RrNU9UazVPVGtnTmpVNExqWTJORU0wTmpndU5UQTBJRFkyTXk0M05qY2dORGN5TGpRNU9UazVPVGs1T1RrNU9Ua2dOalk0SURRM055NDJOek01T1RrNU9UazVPVGs1SURZMk9IcE5OVEF4SURNek1TNDROVGc1T1RrNU9UazVPVGs1UXpRNE1pNDVORElnTXpNeExqZzFPRGs1T1RrNU9UazVPVGtnTkRZNExqTXdOaUF6TkRZdU5UUTJJRFEyT0M0ek1EWWdNelkwTGpZMk5qazVPVGs1T1RrNU9UbFRORGd5TGprME15QXpPVGN1TkRjME9UazVPVGs1T1RrNU9TQTFNREVnTXprM0xqUTNORGs1T1RrNU9UazVPVGxUTlRNekxqWTVOQ0F6T0RJdU56ZzNPVGs1T1RrNU9UazVPU0ExTXpNdU5qazBJRE0yTkM0Mk5qWTVPVGs1T1RrNU9UazVVelV4T1M0d05UZ2dNek14TGpnMU9EazVPVGs1T1RrNU9Ua2dOVEF3TGprNU9UazVPVGs1T1RrNU9Ua2dNek14TGpnMU9EazVPVGs1T1RrNU9UbDZJaUF2UGdvZ0lDQWdQR2RzZVhCb0lHZHNlWEJvTFc1aGJXVTlJbk4xWTJObGMzTWlDaUFnSUNBZ0lIVnVhV052WkdVOUlpWWplRVZCTURZN0lnb2dJQ0FnSUNCb2IzSnBlaTFoWkhZdGVEMGlNVEF3TUNJZ1pEMGlJRTB5T0RndU16Z3lJRFExTkM0NE9EaERNamd3TGpZNU55QTBOakl1T0RJeUlESTNPUzQ0TWpVZ05EYzJMalUxT1RBd01EQXdNREF3TURFZ01qZzJMakUxTVNBME9EVXVNVFUyTURBd01EQXdNREF3TVV3eU9Ea3VNalUxSURRNE9TNHpOamN3TURBd01EQXdNREF4UXpJNU5TNDJPVGNnTkRrNExqRXpPREF3TURBd01EQXdNREVnTXpBM0xqa3lNakF3TURBd01EQXdNREVnTkRrNUxqZzROREF3TURBd01EQXdNREVnTXpFMkxqWXpOQ0EwT1RNdU1qRXdNREF3TURBd01EQXdNVXcwTVRVdU5ESWdOREUzTGpRNU5UQXdNREF3TURBd01ERkROREkwTGpBNU15QTBNVEF1T0RReE1EQXdNREF3TURBd01TQTBNemd1TURnMElEUXhNUzR5TkRjd01EQXdNREF3TURBeElEUTBOaTR5T1RFZ05ERTRMakEzT0RBd01EQXdNREF3TURGTU56SXhMalEzTnlBMk5EY3VNek0wTURBd01EQXdNREF3TVVNM01qa3VPRE00T1RrNU9UazVPVGs1T1NBMk5UUXVNekF3TURBd01EQXdNREF3TVNBM05ETXVNRE0wSURZMU15NDJNakl3TURBd01EQXdNREF4SURjMU1DNDNOelVnTmpRMUxqazNOakF3TURBd01EQXdNREZNTnpRNExqa3hNeUEyTkRjdU9ESkROelUyTGpjek5DQTJOREF1TURrM0lEYzFOaTQzTXpRZ05qSTNMall3TVRBd01EQXdNREF3TURFZ056UTRMamM1T0NBMk1Ua3VPREF4VERRME5TNHpOemdnTXpJeExqRTVNa00wTXpjdU5TQXpNVE11TkRNeE1EQXdNREF3TURBd01TQTBNalF1T1RnMUlETXhNeTQxTURnd01EQXdNREF3TURBeElEUXhOeTR5TWpNZ016SXhMalUwTWpBd01EQXdNREF3TURGTU1qZzRMak00TWlBME5UUXVPRGc0ZWswNU5UY2dORGswTGpNMU16QXdNREF3TURBd01ERkRPVFUzSURjMU1pNDBNRFV3TURBd01EQXdNREF4SURjMU1pNDBNRFVnT1RVM0lEUTVOQzR6TlRNZ09UVTNRekkwTnk0MU9UVWdPVFUzSURReklEYzFNaTQwTURVd01EQXdNREF3TURBeElEUXpJRFE1TkM0ek5UTXdNREF3TURBd01EQXhRelF6SURJME55NDFPVFV3TURBd01EQXdNREF4SURJME55NDFPVFVnTkRNZ05EazBMak0xTXlBME0wTTNOVEl1TkRBMUlEUXpJRGsxTnlBeU5EY3VOVGsxTURBd01EQXdNREF3TVNBNU5UY2dORGswTGpNMU0zb2lJQzgrQ2lBZ0lDQThaMng1Y0dnZ1oyeDVjR2d0Ym1GdFpUMGljM1ZqWTJWemMxOWphWEpqYkdVaUNpQWdJQ0FnSUhWdWFXTnZaR1U5SWlZamVFVkJNRGM3SWdvZ0lDQWdJQ0JvYjNKcGVpMWhaSFl0ZUQwaU1UQXdNQ0lnWkQwaUlFMDFNREF1TlRVeklEazBNQzQ0TkRoRE1qVTJMalkzT1NBNU5EQXVPRFE0SURVNUxqQXdNU0EzTkRNdU1UWXdNREF3TURBd01EQXdNU0ExT1M0d01ERWdORGs1TGpJNE5rTTFPUzR3TURFZ01qVTFMalExTURBd01EQXdNREF3TURFZ01qVTJMalkzT1NBMU55NDNNek01T1RrNU9UazVPVGs1SURVd01DNDFOVE1nTlRjdU56TXpPVGs1T1RrNU9UazVPVk01TkRJdU1UQTBJREkxTlM0ME5TQTVOREl1TVRBMElEUTVPUzR5T0RVNU9UazVPVGs1T1RrNVF6azBNaTR4TURRZ056UXpMakUySURjME5DNDBNamNnT1RRd0xqZzBPQ0ExTURBdU5UVXpNREF3TURBd01EQXdNU0E1TkRBdU9EUTRlazAxTURBdU5UVXpJRGt4TGpjME1qazVPVGs1T1RrNU9UbERNamMzTGpnMk5TQTVNUzQzTkRJNU9UazVPVGs1T1RrNUlEazNMak01TnlBeU56SXVNalkzSURrM0xqTTVOeUEwT1RRdU9EZzVRemszTGpNNU55QTNNVGN1TlRVNUlESTNOeTQ0TmpVZ09EazRMakExTlNBMU1EQXVOVFV6SURnNU9DNHdOVFZETnpJekxqSXdNeUE0T1RndU1EVTFJRGt3TXk0M01Ea2dOekUzTGpVMU9TQTVNRE11TnpBNUlEUTVOQzQ0T0RsRE9UQXpMamN3T1NBeU56SXVNalkzT1RrNU9UazVPVGs1T1NBM01qTXVNakF6TURBd01EQXdNREF3TVNBNU1TNDNOREk1T1RrNU9UazVPVGs1SURVd01DNDFOVE13TURBd01EQXdNREF4SURreExqYzBNams1T1RrNU9UazVPVGw2VFRjeE5DNDFOQ0EyTkRJdU16ZzNPVGs1T1RrNU9UazVPVXcwTkRndU5Ua3pJRFF5TUM0NE1qZERORFF3TGpZMklEUXhOQzR5TWpZZ05ESTNMakUwSURReE15NDRNek1nTkRFNExqYzFPQ0EwTWpBdU1qWTBURE15TXk0eU9Ea2dORGt6TGpRek5rTXpNVFF1T0RZNUlEUTVPUzQ0T0Rjd01EQXdNREF3TURBeElETXdNeTR3TlRZZ05EazRMaklnTWprMkxqZ3lPU0EwT0RrdU56SXpUREk1TXk0NE1qa2dORGcxTGpZMU5FTXlPRGN1TnpFMklEUTNOeTR6TkRjZ01qZzRMalUxT1RBd01EQXdNREF3TURFZ05EWTBMakEzTURBd01EQXdNREF3TURFZ01qazFMams0TlNBME5UWXVORXcwTWpBdU5UQXlJRE15Tnk0MU16UkROREk0TGpBd015QXpNVGt1TnpjZ05EUXdMakE1T0NBek1Ua3VOamsxSURRME55NDNNVEVnTXpJM0xqRTVOakF3TURBd01EQXdNREZNTnpRd0xqazBNeUEyTVRVdU56YzNRemMwT0M0eU9UY2dOakl6TGpBd05qQXdNREF3TURBd01ERWdOelE0TGpVM09UazVPVGs1T1RrNU9Ua2dOak0wTGpNNU5DQTNOREV1T1RNZ05qUXhMamt3TURBd01EQXdNREF3TURGRE56TTBMak0xT0RrNU9UazVPVGs1T1RrZ05qUTRMalE0TlNBM01qSXVNekF6SURZME9DNDROVE13TURBd01EQXdNREF4SURjeE5DNDFOQ0EyTkRJdU16ZzRlazAzTkRFdU1EVTJJRFkwTWk0NE5UWkROelF4TGpNMk9DQTJOREl1TlRRNUlEYzBNUzQyTkRZd01EQXdNREF3TURBeElEWTBNaTR5TWpJZ056UXhMamt6TVNBMk5ERXVPVU0zTkRJdU1qUXpJRFkwTVM0Mk1qZzVPVGs1T1RrNU9UazVJRGMwTWk0MU5qQXdNREF3TURBd01EQXhJRFkwTVM0ek5qWWdOelF5TGpnMU5pQTJOREV1TURjMFREYzBNUzR3TlRZZ05qUXlMamcxTm5vaUlDOCtDaUFnSUNBOFoyeDVjR2dnWjJ4NWNHZ3RibUZ0WlQwaWMzVmpZMlZ6YzE5dWIxOWphWEpqYkdVaUNpQWdJQ0FnSUhWdWFXTnZaR1U5SWlZamVFVkJNRGc3SWdvZ0lDQWdJQ0JvYjNKcGVpMWhaSFl0ZUQwaU1UQXdNQ0lnWkQwaUlFMDJNQzQ1TlRVZ05ETTFMakl4TVVNME55NHlNVFVnTkRRNUxqRTJJRFF6TGpJeU9DQTBOelV1TURNeE1EQXdNREF3TURBd01TQTFNUzQ0TmpVZ05Ea3lMalV4TWt3MU55NDBPVFFnTlRBekxqazNPVU0yTmk0eU16UWdOVEl4TGpZM0lEZzJMakl6SURVeU5pNDJOamdnTVRBeUxqRTNOQ0ExTVRVdU1EazRURE13TlM0d01UWWdNelk0TGpBeE5rTXpNakF1T1RrMUlETTFOaTQwTnprZ016UTJMak0zTlNBek5UY3VNelUwSURNMk1TNDBORFFnTXpZNUxqYzVPVXc1TURJdU1EYzNJRGd4TlM0Mk1UZzVPVGs1T1RrNU9UazVRemt4Tnk0eU9EWWdPREk0TGpFM01pQTVOREF1T1RnNUlEZ3lOaTQ0TURjZ09UVTBMalkxT1NBNE1USXVPVEk0VERrME1TNDRNamtnT0RJMUxqazJPRGs1T1RrNU9UazVPVGxET1RVMUxqWXpPQ0E0TVRFdU9UUTVJRGsxTlM0Mk1ESWdOemc1TGpFeE9EazVPVGs1T1RrNU9Ua2dPVFF4TGpZMU15QTNOelF1T1RZeFRETTFPUzR4TXpRNU9UazVPVGs1T1RrNUlERTRNeTQzTXpnd01EQXdNREF3TURBeFF6TTBOUzR4T0RVNU9UazVPVGs1T1RrNUlERTJPUzQyTVRNd01EQXdNREF3TURBeElETXlNaTQyTURFNU9UazVPVGs1T1RrNUlERTJPUzQyTVRNd01EQXdNREF3TURBeElETXdPUzR3TXpZNU9UazVPVGs1T1RrNUlERTRNeTR6T0RoTU5qQXVPVFUwT1RrNU9UazVPVGs1T1NBME16VXVNakV4ZWlJZ0x6NEtJQ0FnSUR4bmJIbHdhQ0JuYkhsd2FDMXVZVzFsUFNKM1lXbDBhVzVuSWdvZ0lDQWdJQ0IxYm1samIyUmxQU0ltSTNoRlFUQTVPeUlLSUNBZ0lDQWdhRzl5YVhvdFlXUjJMWGc5SWpFd01EQWlJR1E5SWlCTk5EazBMalF5TVNBNU5USkRNalV3TGpNMk15QTVOVElnTkRnZ056UTVMall6T1NBME9DQTBPVFF1TkRJeFF6UTRJREkxTUM0ek5qSWdNalV3TGpNMk15QTBPQ0EwT1RRdU5ESXhJRFE0UXpjME9TNDJNemdnTkRnZ09UVXlJREkxTUM0ek5qSWdPVFV5SURRNU5DNDBNakZET1RVeUlEYzBPUzQyTXprZ056UTVMall6T0NBNU5USWdORGswTGpReU1TQTVOVEo2VFRjME9DNDJJRFF3TUM0MU5qRXdNREF3TURBd01EQXhTRFExTkM0NFZqY3pOUzR3TkVnMU1EQldORFExTGpjMlNEYzBPQzQyVmpRd01DNDFOakV3TURBd01EQXdNREF4ZWlJZ0x6NEtJQ0FnSUR4bmJIbHdhQ0JuYkhsd2FDMXVZVzFsUFNKM1lXbDBhVzVuWDJOcGNtTnNaU0lLSUNBZ0lDQWdkVzVwWTI5a1pUMGlKaU40UlVFd1FUc2lDaUFnSUNBZ0lHaHZjbWw2TFdGa2RpMTRQU0l4TURBd0lpQmtQU0lnVFRjME1TNHdOVFlnTmpReUxqZzFOa00zTkRFdU16WTRJRFkwTWk0MU5Ea2dOelF4TGpZME5qQXdNREF3TURBd01ERWdOalF5TGpJeU1pQTNOREV1T1RNeElEWTBNUzQ1UXpjME1pNHlORE1nTmpReExqWXlPRGs1T1RrNU9UazVPVGtnTnpReUxqVTJNREF3TURBd01EQXdNREVnTmpReExqTTJOaUEzTkRJdU9EVTJJRFkwTVM0d056Uk1OelF4TGpBMU5pQTJOREl1T0RVMmVpQk5OVEF3TGpVMU15QTVOREF1T0RRNFF6STFOaTQyTnprZ09UUXdMamcwT0NBMU9TNHdNREVnTnpRekxqRTJNREF3TURBd01EQXdNREVnTlRrdU1EQXhJRFE1T1M0eU9EWkROVGt1TURBeElESTFOUzQwTlRBd01EQXdNREF3TURBeElESTFOaTQyTnprZ05UY3VOek16T1RrNU9UazVPVGs1T1NBMU1EQXVOVFV6SURVM0xqY3pNems1T1RrNU9UazVPVGxUT1RReUxqRXdOQ0F5TlRVdU5EVWdPVFF5TGpFd05DQTBPVGt1TWpnMU9UazVPVGs1T1RrNU9VTTVOREl1TVRBMElEYzBNeTR4TmlBM05EUXVOREkzSURrME1DNDRORGdnTlRBd0xqVTFNekF3TURBd01EQXdNREVnT1RRd0xqZzBPSHBOTlRBd0xqVTFNeUE1TVM0M05ESTVPVGs1T1RrNU9UazVRekkzTnk0NE5qVWdPVEV1TnpReU9UazVPVGs1T1RrNU9TQTVOeTR6T1RjZ01qY3lMakkyTnlBNU55NHpPVGNnTkRrMExqZzRPVU01Tnk0ek9UY2dOekUzTGpVMU9TQXlOemN1T0RZMUlEZzVPQzR3TlRVZ05UQXdMalUxTXlBNE9UZ3VNRFUxUXpjeU15NHlNRE1nT0RrNExqQTFOU0E1TURNdU56QTVJRGN4Tnk0MU5Ua2dPVEF6TGpjd09TQTBPVFF1T0RnNVF6a3dNeTQzTURrZ01qY3lMakkyTnprNU9UazVPVGs1T1RrZ056SXpMakl3TXpBd01EQXdNREF3TURFZ09URXVOelF5T1RrNU9UazVPVGs1T1NBMU1EQXVOVFV6TURBd01EQXdNREF3TVNBNU1TNDNOREk1T1RrNU9UazVPVGs1ZWswME5UVWdOalV6U0RReE9WWTBNREJJTmpjeVZqUXpOa2cwTlRWNklpQXZQZ29nSUNBZ1BHZHNlWEJvSUdkc2VYQm9MVzVoYldVOUluZGhjbTRpQ2lBZ0lDQWdJSFZ1YVdOdlpHVTlJaVlqZUVWQk1FSTdJZ29nSUNBZ0lDQm9iM0pwZWkxaFpIWXRlRDBpTVRBd01DSWdaRDBpSUUwME9UUXVNamcxSURrMk0wTXlORFF1TWpnNElEazJNeUF6TnlBM05UVXVOekV5SURNM0lEUTVOQzR5T0RWRE16Y2dNalEwTGpJNE56QXdNREF3TURBd01ERWdNalEwTGpJNE9DQXpOeUEwT1RRdU1qZzFJRE0zUXpjMU5TNDNNVE1nTXpjZ09UWXpJREkwTkM0eU9EY3dNREF3TURBd01EQXhJRGsyTXlBME9UUXVNamcxUXprMk15QTNOVFV1TnpFeUlEYzFOUzQzTVRNZ09UWXpJRFE1TkM0eU9EVWdPVFl6ZWswME56SXVOell6SURjeU4wZzFNamN1TWpNNFF6VXpOeTR5TlRnZ056STNJRFUwTlM0d01UWXdNREF3TURBd01EQXhJRGN4T0M0NE5UTXdNREF3TURBd01EQXhJRFUwTkM0MU5URWdOekE0TGpneU4wdzFNekF1TmpreUlEUXdPQzR6TXpVd01EQXdNREF3TURBeFF6VXpNQzQwTlRNZ05EQXpMakl4TWlBMU1qWXVNVEUzSURNNU9DQTFNakV1TURBeklETTVPRWcwTnpndU9UazVRelEzTXk0NE9UZ2dNems0SURRMk9TNDFORGtnTkRBekxqSXhNU0EwTmprdU16QTVJRFF3T0M0ek1qUk1ORFUxTGpRMUlEY3dPQzR5T1RFNU9UazVPVGs1T1RrNVF6UTFOQzQ1T0RRZ056RTRMak0yTnprNU9UazVPVGs1T1RrZ05EWXlMamN6TkNBM01qY2dORGN5TGpjMk15QTNNamQ2VFRVd01DNHdNREF3TURBd01EQXdNREF4SURJMU5DNDRPREZETkRjMExqa3lPU0F5TlRRdU9EZ3hJRFExTkM0Mk1Ea2dNamMxTGpJd05TQTBOVFF1TmpBNUlETXdNQzR5TnpORE5EVTBMall3T1NBek1qVXVNelEwTURBd01EQXdNREF3TVNBME56UXVPVEk1SURNME5TNDJOamtnTlRBd0xqQXdNREF3TURBd01EQXdNREVnTXpRMUxqWTJPVU0xTWpVdU1EY3lJRE0wTlM0Mk5qa2dOVFExTGpNNU1pQXpNalV1TXpRMU1EQXdNREF3TURBd01TQTFORFV1TXpreUlETXdNQzR5TnpORE5UUTFMak01TWlBeU56VXVNakExTURBd01EQXdNREF3TVNBMU1qVXVNRGN5SURJMU5DNDRPREVnTlRBd0xqQXdNREF3TURBd01EQXdNREVnTWpVMExqZzRNWG9pSUM4K0NpQWdJQ0E4WjJ4NWNHZ2daMng1Y0dndGJtRnRaVDBpYVc1bWIxOWphWEpqYkdVaUNpQWdJQ0FnSUhWdWFXTnZaR1U5SWlZamVFVkJNRU03SWdvZ0lDQWdJQ0JvYjNKcGVpMWhaSFl0ZUQwaU1UQXdNQ0lnWkQwaUlFMDFNREFnTmpjeUxqSXlNVU0xTXpFdU56QTBJRFkzTWk0eU1qRWdOVFUzTGpReElEWTVOeTQ1TWpVNU9UazVPVGs1T1RrNUlEVTFOeTQwTVNBM01qa3VOak5ETlRVM0xqUXhJRGMyTVM0ek16WWdOVE14TGpjd05DQTNPRGN1TURNNUlEVXdNQ0EzT0RjdU1ETTVRelEyT0M0eU9UUWdOemczTGpBek9TQTBOREl1TlRreElEYzJNUzR6TXpVZ05EUXlMalU1TVNBM01qa3VOak5ETkRReUxqVTVNU0EyT1RjdU9USTFPVGs1T1RrNU9UazVPU0EwTmpndU1qazBJRFkzTWk0eU1qRWdOVEF3SURZM01pNHlNakY2VFRVMU55NDBNU0EyTVRRdU9ERTFTRFF4TXk0NE9EbFdOVGcyTGpFeE1VZzBOekV1TWprMVZqSTNNQzR6TmpnNU9UazVPVGs1T1RrNVNEUXhNeTQ0T0RsV01qUXhMalkyTnprNU9UazVPVGs1T1RsSU5qRTBMamd4T1ZZeU56QXVNelk0T1RrNU9UazVPVGs1T1VnMU5UY3VOREZXTmpFMExqZ3hORGs1T1RrNU9UazVPVGw2VFRVeE15NDVJRGsxT1M0eU5qRkRNalEyTGpNMU5pQTVOVGt1TWpZeElEUXdMamN6T1NBM05UTXVOalEwSURRd0xqY3pPU0EwT0RZdU1VTTBNQzQzTXprZ01qUTJMak0wTkRBd01EQXdNREF3TURFZ01qUTJMak0xTmlBME1DNDNOQ0ExTVRNdU9TQTBNQzQzTkVNM05UTXVOalUySURRd0xqYzBJRGsxT1M0eU5pQXlORFl1TXpRME1EQXdNREF3TURBd01TQTVOVGt1TWpZZ05EZzJMakZET1RVNUxqSTJNU0EzTlRNdU5qUTBJRGMxTXk0Mk5UWWdPVFU1TGpJMk1TQTFNVE11T1NBNU5Ua3VNall4ZWswMU1EQWdPVGd1TVRRNU1EQXdNREF3TURBd01VTXlOemd1TURZeUlEazRMakUwT1RBd01EQXdNREF3TURFZ09UZ3VNVFE0SURJM09DNHdORGd3TURBd01EQXdNREF4SURrNExqRTBPQ0ExTURBdU1EQXdNREF3TURBd01EQXdNVU01T0M0eE5EZ2dOekl4TGprek9EQXdNREF3TURBd01ERWdNamM0TGpBMk1pQTVNREV1T0RVeUlEVXdNQ0E1TURFdU9EVXlRemN5TVM0NU5USWdPVEF4TGpnMU1pQTVNREV1T0RVeElEY3lNUzQ1TXpnd01EQXdNREF3TURBeElEa3dNUzQ0TlRFZ05UQXdMakF3TURBd01EQXdNREF3TURGRE9UQXhMamcxTVNBeU56Z3VNRFE0TURBd01EQXdNREF3TVNBM01qRXVPVFV5SURrNExqRTBPVEF3TURBd01EQXdNREVnTlRBd0lEazRMakUwT1RBd01EQXdNREF3TURGNklpQXZQZ29nSUNBZ1BHZHNlWEJvSUdkc2VYQm9MVzVoYldVOUltTmhibU5sYkNJS0lDQWdJQ0FnZFc1cFkyOWtaVDBpSmlONFJVRXdSRHNpQ2lBZ0lDQWdJR2h2Y21sNkxXRmtkaTE0UFNJeE1EQXdJaUJrUFNJZ1RUWTFNeTQzT1RnZ05qZ3hMamMxT1V3MU1EQWdOVEkzTGprMlRETTBOaTR5TURFZ05qZ3hMamMxT1V3ek1UZ3VNalF4TURBd01EQXdNREF3TVNBMk5UTXVOems1VERRM01pNHdOREF3TURBd01EQXdNREF4SURVd01Fd3pNVGd1TWpReE1EQXdNREF3TURBd01TQXpORFl1TWpBeVRETTBOaTR5TURFd01EQXdNREF3TURBeElETXhPQzR5TkRKTU5UQXdMakF3TURBd01EQXdNREF3TURFZ05EY3lMakEwVERZMU15NDNPVGd3TURBd01EQXdNREF4SURNeE9DNHlOREpNTmpneExqYzFPREF3TURBd01EQXdNRElnTXpRMkxqSXdNa3cxTWpjdU9UWXdNREF3TURBd01EQXdNaUExTURCTU5qZ3hMamMxT0RBd01EQXdNREF3TURJZ05qVXpMamM1T1hwTk5UQXdJRGt6TlVNeU5Ua3VOelV6SURrek5TQTJOU0EzTkRBdU1qUTNNREF3TURBd01EQXdNU0EyTlNBMU1EQkROalVnTWpVNUxqYzFOQ0F5TlRrdU56VXpJRFkxSURVd01DQTJOVU0zTkRBdU1qUTJJRFkxSURrek5TQXlOVGt1TnpVMElEa3pOU0ExTURCRE9UTTFJRGMwTUM0eU5EY3dNREF3TURBd01EQXhJRGMwTUM0eU5EWWdPVE0xSURVd01DQTVNelY2VFRVd01DQXhNRFF1TlRRMk1EQXdNREF3TURBd01VTXlPREV1TlRreUlERXdOQzQxTkRZd01EQXdNREF3TURBeElERXdOQzQxTkRVZ01qZ3hMalU1TXpBd01EQXdNREF3TURFZ01UQTBMalUwTlNBMU1EQXVNREF3TURBd01EQXdNREF3TVVNeE1EUXVOVFExSURjeE9DNDBNRGdnTWpneExqVTVNaUE0T1RVdU5EVTFJRFV3TUNBNE9UVXVORFUxUXpjeE9DNDBNRGNnT0RrMUxqUTFOU0E0T1RVdU5EVTBJRGN4T0M0ME1EZ2dPRGsxTGpRMU5DQTFNREF1TURBd01EQXdNREF3TURBd01VTTRPVFV1TkRVMElESTRNUzQxT1RNd01EQXdNREF3TURBeElEY3hPQzQwTURZNU9UazVPVGs1T1RrNUlERXdOQzQxTkRZd01EQXdNREF3TURBeElEUTVPUzQ1T1RrNU9UazVPVGs1T1RrNUlERXdOQzQxTkRZd01EQXdNREF3TURBeGVpSWdMejRLSUNBOEwyWnZiblErQ2p3dlpHVm1jejRLUEM5emRtYytDZz09JykgZm9ybWF0KCdzdmcnKTtcXG59XFxuW2NsYXNzXj1cXFwid2V1aV9pY29uX1xcXCJdOmJlZm9yZSxcXG5bY2xhc3MqPVxcXCIgd2V1aV9pY29uX1xcXCJdOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcIndldWlcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHNwZWFrOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG4gIHdpZHRoOiAxZW07XFxuICBtYXJnaW4tcmlnaHQ6IC4yZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAvKiBvcGFjaXR5OiAuODsgKi9cXG4gIC8qIEZvciBzYWZldHkgLSByZXNldCBwYXJlbnQgc3R5bGVzLCB0aGF0IGNhbiBicmVhayBnbHlwaCBjb2RlcyovXFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgLyogZml4IGJ1dHRvbnMgaGVpZ2h0LCBmb3IgdHdpdHRlciBib290c3RyYXAgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxZW07XFxuICAvKiBBbmltYXRpb24gY2VudGVyIGNvbXBlbnNhdGlvbiAtIG1hcmdpbnMgc2hvdWxkIGJlIHN5bW1ldHJpYyAqL1xcbiAgLyogcmVtb3ZlIGlmIG5vdCBuZWVkZWQgKi9cXG4gIG1hcmdpbi1sZWZ0OiAuMmVtO1xcbiAgLyogeW91IGNhbiBiZSBtb3JlIGNvbWZvcnRhYmxlIHdpdGggaW5jcmVhc2VkIGljb25zIHNpemUgKi9cXG4gIC8qIGZvbnQtc2l6ZTogMTIwJTsgKi9cXG4gIC8qIFVuY29tbWVudCBmb3IgM0QgZWZmZWN0ICovXFxuICAvKiB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgxMjcsIDEyNywgMTI3LCAwLjMpOyAqL1xcbn1cXG4ud2V1aV9pY29uX2NpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFQTAxXFxcIjtcXG59XFxuLyogJ+6ggCcgKi9cXG4ud2V1aV9pY29uX2Rvd25sb2FkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEVBMDJcXFwiO1xcbn1cXG4vKiAn7qCAJyAqL1xcbi53ZXVpX2ljb25faW5mbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFQTAzXFxcIjtcXG59XFxuLyogJ+6ggCcgKi9cXG4ud2V1aV9pY29uX3NhZmVfc3VjY2VzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFQTA0XFxcIjtcXG59XFxuLyogJ+6ggCcgKi9cXG4ud2V1aV9pY29uX3NhZmVfd2FybjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFQTA1XFxcIjtcXG59XFxuLyogJ+6ggCcgKi9cXG4ud2V1aV9pY29uX3N1Y2Nlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRUEwNlxcXCI7XFxufVxcbi8qICfuoIAnICovXFxuLndldWlfaWNvbl9zdWNjZXNzX2NpcmNsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFQTA3XFxcIjtcXG59XFxuLyogJ+6ggCcgKi9cXG4ud2V1aV9pY29uX3N1Y2Nlc3Nfbm9fY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEVBMDhcXFwiO1xcbn1cXG4vKiAn7qCAJyAqL1xcbi53ZXVpX2ljb25fd2FpdGluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFQTA5XFxcIjtcXG59XFxuLyogJ+6ggCcgKi9cXG4ud2V1aV9pY29uX3dhaXRpbmdfY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEVBMEFcXFwiO1xcbn1cXG4vKiAn7qCAJyAqL1xcbi53ZXVpX2ljb25fd2FybjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFQTBCXFxcIjtcXG59XFxuLyogJ+6ggCcgKi9cXG4ud2V1aV9pY29uX2luZm9fY2lyY2xlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEVBMENcXFwiO1xcbn1cXG4vKiAn7qCAJyAqL1xcbi53ZXVpX2ljb25fY2FuY2VsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEVBMERcXFwiO1xcbn1cXG4vKiAn7qCAJyAqL1xcbltjbGFzc149XFxcIndldWlfaWNvbl9cXFwiXTpiZWZvcmUsXFxuW2NsYXNzKj1cXFwiIHdldWlfaWNvbl9cXFwiXTpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ud2V1aV9pY29uX3N1Y2Nlc3M6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGNvbG9yOiAjMDlCQjA3O1xcbn1cXG4ud2V1aV9pY29uX3dhaXRpbmc6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGNvbG9yOiAjMTBBRUZGO1xcbn1cXG4ud2V1aV9pY29uX3dhcm46YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGNvbG9yOiAjRjQzNTMwO1xcbn1cXG4ud2V1aV9pY29uX2luZm86YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGNvbG9yOiAjMTBBRUZGO1xcbn1cXG4ud2V1aV9pY29uX3N1Y2Nlc3NfY2lyY2xlOmJlZm9yZSB7XFxuICBmb250LXNpemU6IDIzcHg7XFxuICBjb2xvcjogIzA5QkIwNztcXG59XFxuLndldWlfaWNvbl9zdWNjZXNzX25vX2NpcmNsZTpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbiAgY29sb3I6ICMwOUJCMDc7XFxufVxcbi53ZXVpX2ljb25fd2FpdGluZ19jaXJjbGU6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGNvbG9yOiAjMTBBRUZGO1xcbn1cXG4ud2V1aV9pY29uX2NpcmNsZTpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbiAgY29sb3I6ICNDOUM5Qzk7XFxufVxcbi53ZXVpX2ljb25fZG93bmxvYWQ6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGNvbG9yOiAjMDlCQjA3O1xcbn1cXG4ud2V1aV9pY29uX2luZm9fY2lyY2xlOmJlZm9yZSB7XFxuICBmb250LXNpemU6IDIzcHg7XFxuICBjb2xvcjogIzA5QkIwNztcXG59XFxuLndldWlfaWNvbl9zYWZlX3N1Y2Nlc3M6YmVmb3JlIHtcXG4gIGNvbG9yOiAjMDlCQjA3O1xcbn1cXG4ud2V1aV9pY29uX3NhZmVfd2FybjpiZWZvcmUge1xcbiAgY29sb3I6ICNGRkJFMDA7XFxufVxcbi53ZXVpX2ljb25fY2FuY2VsOmJlZm9yZSB7XFxuICBjb2xvcjogI0Y0MzUzMDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuLndldWlfaWNvbl9tc2c6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMTA0cHg7XFxufVxcbi53ZXVpX2ljb25fd2Fybi53ZXVpX2ljb25fbXNnOmJlZm9yZSB7XFxuICBjb2xvcjogI0Y3NjI2MDtcXG59XFxuLndldWlfaWNvbl9zYWZlOmJlZm9yZSB7XFxuICBmb250LXNpemU6IDEwNHB4O1xcbn1cXG4ud2V1aV9idG4ud2V1aV9idG5fbWluaSB7XFxuICBsaW5lLWhlaWdodDogMS45O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMCAuNzVlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuYnV0dG9uLndldWlfYnRuLFxcbmlucHV0LndldWlfYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuYnV0dG9uLndldWlfYnRuOmZvY3VzLFxcbmlucHV0LndldWlfYnRuOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbmJ1dHRvbi53ZXVpX2J0bl9pbmxpbmUsXFxuaW5wdXQud2V1aV9idG5faW5saW5lLFxcbmJ1dHRvbi53ZXVpX2J0bl9taW5pLFxcbmlucHV0LndldWlfYnRuX21pbmkge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi8qZ2FwIGJldHdlZW4gYnRuKi9cXG4ud2V1aV9idG4gKyAud2V1aV9idG4ge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuLndldWlfYnRuLndldWlfYnRuX2lubGluZSArIC53ZXVpX2J0bi53ZXVpX2J0bl9pbmxpbmUge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG4ud2V1aV9idG5fYXJlYSB7XFxuICBtYXJnaW46IDEuMTc2NDcwNTllbSAxNXB4IDAuM2VtO1xcbn1cXG4ud2V1aV9idG5fYXJlYS53ZXVpX2J0bl9hcmVhX2lubGluZSB7XFxuICAtd2Via2l0LWRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgLXdlYmtpdC1kaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLndldWlfYnRuX2FyZWEud2V1aV9idG5fYXJlYV9pbmxpbmUgLndldWlfYnRuIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxufVxcbi53ZXVpX2J0bl9hcmVhLndldWlfYnRuX2FyZWFfaW5saW5lIC53ZXVpX2J0bjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLndldWlfYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgbGluZS1oZWlnaHQ6IDIuMzMzMzMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ud2V1aV9idG46YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgd2lkdGg6IDIwMCU7XFxuICBoZWlnaHQ6IDIwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLndldWlfYnRuLndldWlfYnRuX2lubGluZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi53ZXVpX2J0bl9kZWZhdWx0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XFxuICBjb2xvcjogIzQ1NDU0NTtcXG59XFxuLndldWlfYnRuX2RlZmF1bHQ6bm90KC53ZXVpX2J0bl9kaXNhYmxlZCk6dmlzaXRlZCB7XFxuICBjb2xvcjogIzQ1NDU0NTtcXG59XFxuLndldWlfYnRuX2RlZmF1bHQ6bm90KC53ZXVpX2J0bl9kaXNhYmxlZCk6YWN0aXZlIHtcXG4gIGNvbG9yOiAjQTFBMUExO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RFREVERTtcXG59XFxuLndldWlfYnRuX3ByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0QkUwMjtcXG59XFxuLndldWlfYnRuX3ByaW1hcnk6bm90KC53ZXVpX2J0bl9kaXNhYmxlZCk6dmlzaXRlZCB7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuLndldWlfYnRuX3ByaW1hcnk6bm90KC53ZXVpX2J0bl9kaXNhYmxlZCk6YWN0aXZlIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM5NzAyO1xcbn1cXG4ud2V1aV9idG5fd2FybiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUY0RjRGO1xcbn1cXG4ud2V1aV9idG5fd2Fybjpub3QoLndldWlfYnRuX2Rpc2FibGVkKTp2aXNpdGVkIHtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG4ud2V1aV9idG5fd2Fybjpub3QoLndldWlfYnRuX2Rpc2FibGVkKTphY3RpdmUge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMTNFM0U7XFxufVxcbi53ZXVpX2J0bl9kaXNhYmxlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG4ud2V1aV9idG5fZGlzYWJsZWQud2V1aV9idG5fZGVmYXVsdCB7XFxuICBjb2xvcjogI0M5QzlDOTtcXG59XFxuLndldWlfYnRuX3BsYWluX3ByaW1hcnkge1xcbiAgY29sb3I6ICMwNEJFMDI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDRCRTAyO1xcbn1cXG5idXR0b24ud2V1aV9idG5fcGxhaW5fcHJpbWFyeSxcXG5pbnB1dC53ZXVpX2J0bl9wbGFpbl9wcmltYXJ5IHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi53ZXVpX2J0bl9wbGFpbl9wcmltYXJ5OmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6ICMwMzk3MDI7XFxufVxcbi53ZXVpX2J0bl9wbGFpbl9wcmltYXJ5OmFmdGVyIHtcXG4gIGJvcmRlci13aWR0aDogMDtcXG59XFxuLndldWlfYnRuX3BsYWluX2RlZmF1bHQge1xcbiAgY29sb3I6ICM1QTVBNUE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNUE1QTVBO1xcbn1cXG5idXR0b24ud2V1aV9idG5fcGxhaW5fZGVmYXVsdCxcXG5pbnB1dC53ZXVpX2J0bl9wbGFpbl9kZWZhdWx0IHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi53ZXVpX2J0bl9wbGFpbl9kZWZhdWx0OmFmdGVyIHtcXG4gIGJvcmRlci13aWR0aDogMDtcXG59XFxuLndldWlfY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi53ZXVpX2NlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgbGVmdDogMTVweDtcXG59XFxuLndldWlfY2VsbDpmaXJzdC1jaGlsZDpiZWZvcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLndldWlfY2VsbHMge1xcbiAgbWFyZ2luLXRvcDogMS4xNzY0NzA1OWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQxMTc2NDcxO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLndldWlfY2VsbHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbn1cXG4ud2V1aV9jZWxsczphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDlEOUQ5O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcXG59XFxuLndldWlfY2VsbHNfdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogLjc3ZW07XFxuICBtYXJnaW4tYm90dG9tOiAuM2VtO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIGNvbG9yOiAjODg4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ud2V1aV9jZWxsc190aXRsZSArIC53ZXVpX2NlbGxzIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi53ZXVpX2NlbGxzX3RpcHMge1xcbiAgbWFyZ2luLXRvcDogLjNlbTtcXG4gIGNvbG9yOiAjODg4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLndldWlfY2VsbCB7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLndldWlfY2VsbF9mdCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjODg4O1xcbn1cXG4ud2V1aV9jZWxsX3ByaW1hcnkge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG59XFxuLndldWlfY2VsbHNfYWNjZXNzIC53ZXVpX2NlbGw6bm90KC5ub19hY2Nlc3MpIHtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuLndldWlfY2VsbHNfYWNjZXNzIC53ZXVpX2NlbGw6bm90KC5ub19hY2Nlc3MpOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xcbn1cXG4ud2V1aV9jZWxsc19hY2Nlc3MgYS53ZXVpX2NlbGwge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi53ZXVpX2NlbGxzX2FjY2VzcyAud2V1aV9jZWxsX2Z0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBoZWlnaHQ6IDZweDtcXG4gIHdpZHRoOiA2cHg7XFxuICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xcbiAgYm9yZGVyLWNvbG9yOiAjQzhDOENEO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTJweDtcXG4gIHRvcDogLTFweDtcXG4gIG1hcmdpbi1sZWZ0OiAuM2VtO1xcbn1cXG4ud2V1aV9jaGVja19sYWJlbCB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi53ZXVpX2NoZWNrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC05OTk5ZW07XFxufVxcbi53ZXVpX2NlbGxzX3JhZGlvIC53ZXVpX2NlbGxfZnQge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjM1ZW07XFxufVxcbi53ZXVpX2NlbGxzX3JhZGlvIC53ZXVpX2NlbGw6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XFxufVxcbi53ZXVpX2NlbGxzX3JhZGlvIC53ZXVpX2NoZWNrOmNoZWNrZWQgKyAud2V1aV9pY29uX2NoZWNrZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcRUEwOCc7XFxuICBjb2xvcjogIzA5QkIwNztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLndldWlfY2VsbHNfY2hlY2tib3ggLndldWlfY2VsbF9oZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjM1ZW07XFxufVxcbi53ZXVpX2NlbGxzX2NoZWNrYm94IC53ZXVpX2NlbGw6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XFxufVxcbi53ZXVpX2NlbGxzX2NoZWNrYm94IC53ZXVpX2ljb25fY2hlY2tlZDpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFxFQTAxJztcXG4gIGNvbG9yOiAjQzlDOUM5O1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi53ZXVpX2NlbGxzX2NoZWNrYm94IC53ZXVpX2NoZWNrOmNoZWNrZWQgKyAud2V1aV9pY29uX2NoZWNrZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcRUEwNic7XFxuICBjb2xvcjogIzA5QkIwNztcXG59XFxuLndldWlfbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogM2VtO1xcbn1cXG4ud2V1aV9pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiAxLjQxMTc2NDcxZW07XFxuICBsaW5lLWhlaWdodDogMS40MTE3NjQ3MTtcXG59XFxuLndldWlfaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuLndldWlfaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ud2V1aV90ZXh0YXJlYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi53ZXVpX3RvcHRpcHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsaW5lLWhlaWdodDogMi4zO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNGRkY7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4ud2V1aV90b3B0aXBzLndldWlfd2FybiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTY0MzQwO1xcbn1cXG4ud2V1aV9jZWxsc19mb3JtIC53ZXVpX2NlbGxfd2FybiB7XFxuICBjb2xvcjogI0U2NDM0MDtcXG59XFxuLndldWlfY2VsbHNfZm9ybSAud2V1aV9jZWxsX3dhcm4gLndldWlfaWNvbl93YXJuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLndldWlfY2VsbHNfZm9ybSAud2V1aV9jZWxsX2hkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IC4zZW07XFxufVxcbi53ZXVpX2NlbGxzX2Zvcm0gLndldWlfY2VsbF9mdCB7XFxuICBmb250LXNpemU6IDA7XFxufVxcbi53ZXVpX2NlbGxzX2Zvcm0gLndldWlfaWNvbl93YXJuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi53ZXVpX2NlbGxfc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi53ZXVpX2NlbGxfc2VsZWN0IC53ZXVpX3NlbGVjdCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG4ud2V1aV9jZWxsX3NlbGVjdCAud2V1aV9jZWxsX2JkOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBoZWlnaHQ6IDZweDtcXG4gIHdpZHRoOiA2cHg7XFxuICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xcbiAgYm9yZGVyLWNvbG9yOiAjQzhDOENEO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAtM3B4O1xcbn1cXG4ud2V1aV9zZWxlY3Qge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG4ud2V1aV9zZWxlY3RfYmVmb3JlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcbi53ZXVpX3NlbGVjdF9iZWZvcmUgLndldWlfc2VsZWN0IHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4ud2V1aV9zZWxlY3RfYmVmb3JlIC53ZXVpX2NlbGxfaGQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ud2V1aV9zZWxlY3RfYmVmb3JlIC53ZXVpX2NlbGxfaGQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0Q5RDlEOTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDAuNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuNSk7XFxufVxcbi53ZXVpX3NlbGVjdF9iZWZvcmUgLndldWlfY2VsbF9oZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIGhlaWdodDogNnB4O1xcbiAgd2lkdGg6IDZweDtcXG4gIGJvcmRlci13aWR0aDogMnB4IDJweCAwIDA7XFxuICBib3JkZXItY29sb3I6ICNDOEM4Q0Q7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogMTVweDtcXG4gIG1hcmdpbi10b3A6IC0zcHg7XFxufVxcbi53ZXVpX3NlbGVjdF9iZWZvcmUgLndldWlfY2VsbF9iZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcbi53ZXVpX3NlbGVjdF9iZWZvcmUgLndldWlfY2VsbF9iZDphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ud2V1aV9zZWxlY3RfYWZ0ZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbn1cXG4ud2V1aV92Y29kZSB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLndldWlfdmNvZGUgLndldWlfY2VsbF9mdCBpbWcge1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIGhlaWdodDogNDRweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi53ZXVpX2NlbGxfc3dpdGNoIHtcXG4gIHBhZGRpbmctdG9wOiA2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xcbn1cXG4ud2V1aV9zd2l0Y2gge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDUycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjREZERkRGO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogI0RGREZERjtcXG59XFxuLndldWlfc3dpdGNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkRGRDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjNzO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xcbn1cXG4ud2V1aV9zd2l0Y2g6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuM3M7XFxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3M7XFxufVxcbi53ZXVpX3N3aXRjaDpjaGVja2VkIHtcXG4gIGJvcmRlci1jb2xvcjogIzA0QkUwMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNEJFMDI7XFxufVxcbi53ZXVpX3N3aXRjaDpjaGVja2VkOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcbi53ZXVpX3N3aXRjaDpjaGVja2VkOmFmdGVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxufVxcbi53ZXVpX21zZyB7XFxuICBwYWRkaW5nLXRvcDogMzZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLndldWlfbXNnIC53ZXVpX2ljb25fYXJlYSB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4ud2V1aV9tc2cgLndldWlfdGV4dF9hcmVhIHtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcbi53ZXVpX21zZyAud2V1aV9tc2dfdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLndldWlfbXNnIC53ZXVpX21zZ19kZXNjIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjODg4O1xcbn1cXG4ud2V1aV9tc2cgLndldWlfb3ByX2FyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG59XFxuLndldWlfbXNnIC53ZXVpX2V4dHJhX2FyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjODg4O1xcbn1cXG4ud2V1aV9tc2cgLndldWlfZXh0cmFfYXJlYSBhIHtcXG4gIGNvbG9yOiAjNjE3NDlCO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNDM4cHgpIHtcXG4gIC53ZXVpX2V4dHJhX2FyZWEge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuLndldWlfYXJ0aWNsZSB7XFxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbi53ZXVpX2FydGljbGUgc2VjdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG59XFxuLndldWlfYXJ0aWNsZSBoMSB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luLWJvdHRvbTogLjc1ZW07XFxufVxcbi53ZXVpX2FydGljbGUgaDIge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1hcmdpbi1ib3R0b206IC4zZW07XFxufVxcbi53ZXVpX2FydGljbGUgaDMge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLndldWlfcHJvZ3Jlc3Mge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi53ZXVpX3Byb2dyZXNzX2JhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbn1cXG4ud2V1aV9wcm9ncmVzc19pbm5lcl9iYXIge1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDlCQjA3O1xcbn1cXG4ud2V1aV9wcm9ncmVzc19vcHIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMDtcXG59XFxuLndldWlfZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEzO1xcbiAgd2lkdGg6IDg1JTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZDO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ud2V1aV9kaWFsb2dfY29uZmlybSAud2V1aV9kaWFsb2cgLndldWlfZGlhbG9nX2hkIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiAxLjJlbSAyMHB4IC41ZW07XFxufVxcbi53ZXVpX2RpYWxvZ19jb25maXJtIC53ZXVpX2RpYWxvZyAud2V1aV9kaWFsb2dfYmQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLndldWlfZGlhbG9nX2hkIHtcXG4gIHBhZGRpbmc6IDEuMmVtIDAgLjVlbTtcXG59XFxuLndldWlfZGlhbG9nX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcbi53ZXVpX2RpYWxvZ19iZCB7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuLndldWlfZGlhbG9nX2Z0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ud2V1aV9kaWFsb2dfZnQgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtd2Via2l0LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICBjb2xvcjogIzNDQzUxRjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuLndldWlfZGlhbG9nX2Z0IGE6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxufVxcbi53ZXVpX2RpYWxvZ19mdDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRDVENUQ2O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcXG59XFxuLndldWlfZGlhbG9nX2NvbmZpcm0gLndldWlfZGlhbG9nX2Z0IGEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ud2V1aV9kaWFsb2dfY29uZmlybSAud2V1aV9kaWFsb2dfZnQgYTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0Q1RDVENjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDAuNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuNSk7XFxufVxcbi53ZXVpX2RpYWxvZ19jb25maXJtIC53ZXVpX2RpYWxvZ19mdCBhOmZpcnN0LWNoaWxkOmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi53ZXVpX2J0bl9kaWFsb2cuZGVmYXVsdCB7XFxuICBjb2xvcjogIzM1MzUzNTtcXG59XFxuLndldWlfYnRuX2RpYWxvZy5wcmltYXJ5IHtcXG4gIGNvbG9yOiAjMEJCMjBDO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gIC53ZXVpX2RpYWxvZyB7XFxuICAgIHdpZHRoOiAzNSU7XFxuICB9XFxufVxcbi53ZXVpX3RvYXN0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDM7XFxuICB3aWR0aDogNy42ZW07XFxuICBtaW4taGVpZ2h0OiA3LjZlbTtcXG4gIHRvcDogMTgwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLTMuOGVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgNDAsIDQwLCAwLjc1KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG4ud2V1aV9pY29uX3RvYXN0IHtcXG4gIG1hcmdpbjogMjJweCAwIDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLndldWlfaWNvbl90b2FzdDpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFxFQTA4JztcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgZm9udC1zaXplOiA1NXB4O1xcbn1cXG4ud2V1aV90b2FzdF9jb250ZW50IHtcXG4gIG1hcmdpbjogMCAwIDE1cHg7XFxufVxcbi53ZXVpX2xvYWRpbmdfdG9hc3QgLndldWlfdG9hc3RfY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiA2NCU7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi53ZXVpX2xvYWRpbmcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDBweDtcXG4gIHotaW5kZXg6IDIwMDAwMDAwMDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDM4JTtcXG59XFxuLndldWlfbG9hZGluZ19sZWFmIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTFweDtcXG4gIG9wYWNpdHk6IDAuMjU7XFxufVxcbi53ZXVpX2xvYWRpbmdfbGVhZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDguMTRweDtcXG4gIGhlaWdodDogMy4wOHB4O1xcbiAgYmFja2dyb3VuZDogI2QxZDFkNTtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wOTgwMzkyKSAwcHggMHB4IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCA1MCUgMHB4O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IDUwJSAwcHg7XFxufVxcbi53ZXVpX2xvYWRpbmdfbGVhZl8wIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTAtMTIgMS4yNXMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb246IG9wYWNpdHktNjAtMjUtMC0xMiAxLjI1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi53ZXVpX2xvYWRpbmdfbGVhZl8wOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSg3LjkycHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSg3LjkycHgsIDBweCk7XFxufVxcbi53ZXVpX2xvYWRpbmdfbGVhZl8xIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTEtMTIgMS4yNXMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb246IG9wYWNpdHktNjAtMjUtMS0xMiAxLjI1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi53ZXVpX2xvYWRpbmdfbGVhZl8xOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKSB0cmFuc2xhdGUoNy45MnB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcXG59XFxuLndldWlfbG9hZGluZ19sZWFmXzIge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG9wYWNpdHktNjAtMjUtMi0xMiAxLjI1cyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogb3BhY2l0eS02MC0yNS0yLTEyIDEuMjVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLndldWlfbG9hZGluZ19sZWFmXzI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpIHRyYW5zbGF0ZSg3LjkycHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKSB0cmFuc2xhdGUoNy45MnB4LCAwcHgpO1xcbn1cXG4ud2V1aV9sb2FkaW5nX2xlYWZfMyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogb3BhY2l0eS02MC0yNS0zLTEyIDEuMjVzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTMtMTIgMS4yNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4ud2V1aV9sb2FkaW5nX2xlYWZfMzpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSg3LjkycHgsIDBweCk7XFxufVxcbi53ZXVpX2xvYWRpbmdfbGVhZl80IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTQtMTIgMS4yNXMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb246IG9wYWNpdHktNjAtMjUtNC0xMiAxLjI1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi53ZXVpX2xvYWRpbmdfbGVhZl80OmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKSB0cmFuc2xhdGUoNy45MnB4LCAwcHgpO1xcbn1cXG4ud2V1aV9sb2FkaW5nX2xlYWZfNSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogb3BhY2l0eS02MC0yNS01LTEyIDEuMjVzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTUtMTIgMS4yNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4ud2V1aV9sb2FkaW5nX2xlYWZfNTpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpIHRyYW5zbGF0ZSg3LjkycHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcXG59XFxuLndldWlfbG9hZGluZ19sZWFmXzYge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG9wYWNpdHktNjAtMjUtNi0xMiAxLjI1cyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogb3BhY2l0eS02MC0yNS02LTEyIDEuMjVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLndldWlfbG9hZGluZ19sZWFmXzY6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoNy45MnB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSg3LjkycHgsIDBweCk7XFxufVxcbi53ZXVpX2xvYWRpbmdfbGVhZl83IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTctMTIgMS4yNXMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb246IG9wYWNpdHktNjAtMjUtNy0xMiAxLjI1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi53ZXVpX2xvYWRpbmdfbGVhZl83OmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKSB0cmFuc2xhdGUoNy45MnB4LCAwcHgpO1xcbn1cXG4ud2V1aV9sb2FkaW5nX2xlYWZfOCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogb3BhY2l0eS02MC0yNS04LTEyIDEuMjVzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTgtMTIgMS4yNXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4ud2V1aV9sb2FkaW5nX2xlYWZfODpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpIHRyYW5zbGF0ZSg3LjkycHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcXG59XFxuLndldWlfbG9hZGluZ19sZWFmXzkge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG9wYWNpdHktNjAtMjUtOS0xMiAxLjI1cyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogb3BhY2l0eS02MC0yNS05LTEyIDEuMjVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLndldWlfbG9hZGluZ19sZWFmXzk6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGUoNy45MnB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpIHRyYW5zbGF0ZSg3LjkycHgsIDBweCk7XFxufVxcbi53ZXVpX2xvYWRpbmdfbGVhZl8xMCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogb3BhY2l0eS02MC0yNS0xMC0xMiAxLjI1cyBsaW5lYXIgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogb3BhY2l0eS02MC0yNS0xMC0xMiAxLjI1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi53ZXVpX2xvYWRpbmdfbGVhZl8xMDpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpIHRyYW5zbGF0ZSg3LjkycHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwMGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcXG59XFxuLndldWlfbG9hZGluZ19sZWFmXzExIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTExLTEyIDEuMjVzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBvcGFjaXR5LTYwLTI1LTExLTEyIDEuMjVzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLndldWlfbG9hZGluZ19sZWFmXzExOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZykgdHJhbnNsYXRlKDcuOTJweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKSB0cmFuc2xhdGUoNy45MnB4LCAwcHgpO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3BhY2l0eS02MC0yNS0wLTEyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gIH1cXG4gIDAuMDElIHtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gIH1cXG4gIDAuMDIlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDYwLjAxJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtMS0xMiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICA4LjM0MzMzJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICA4LjM1MzMzJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA2OC4zNDMzJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtMi0xMiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAxNi42NzY3JSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAxNi42ODY3JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA3Ni42NzY3JSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtMy0xMiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAyNS4wMSUge1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgfVxcbiAgMjUuMDIlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDg1LjAxJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtNC0xMiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAzMy4zNDMzJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAzMy4zNTMzJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA5My4zNDMzJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtNS0xMiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuMjcwOTU4MzMzMzMzMzMzO1xcbiAgfVxcbiAgNDEuNjc2NyUge1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgfVxcbiAgNDEuNjg2NyUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMS42NzY2NyUge1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAuMjcwOTU4MzMzMzMzMzMzO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3BhY2l0eS02MC0yNS02LTEyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC4zNzUxMjU7XFxuICB9XFxuICA1MC4wMSUge1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgfVxcbiAgNTAuMDIlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwLjAxJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC4zNzUxMjU7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5LTYwLTI1LTctMTIge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjQ3OTI5MTY2NjY2NjY2NztcXG4gIH1cXG4gIDU4LjM0MzMlIHtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gIH1cXG4gIDU4LjM1MzMlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDE4LjM0MzMlIHtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwLjQ3OTI5MTY2NjY2NjY2NztcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHktNjAtMjUtOC0xMiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTgzNDU4MzMzMzMzMzMzO1xcbiAgfVxcbiAgNjYuNjc2NyUge1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgfVxcbiAgNjYuNjg2NyUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMjYuNjc2NyUge1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTgzNDU4MzMzMzMzMzMzO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3BhY2l0eS02MC0yNS05LTEyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC42ODc2MjU7XFxuICB9XFxuICA3NS4wMSUge1xcbiAgICBvcGFjaXR5OiAwLjI1O1xcbiAgfVxcbiAgNzUuMDIlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDM1LjAxJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC42ODc2MjU7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5LTYwLTI1LTEwLTEyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC43OTE3OTE2NjY2NjY2Njc7XFxuICB9XFxuICA4My4zNDMzJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICA4My4zNTMzJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA0My4zNDMzJSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC43OTE3OTE2NjY2NjY2Njc7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5LTYwLTI1LTExLTEyIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC44OTU5NTgzMzMzMzMzMzM7XFxuICB9XFxuICA5MS42NzY3JSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICA5MS42ODY3JSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA1MS42NzY3JSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMC44OTU5NTgzMzMzMzMzMzM7XFxuICB9XFxufVxcbi53ZXVpX21hc2sge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuLndldWlfbWFza190cmFuc3BhcmVudCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4ud2V1aV9tYXNrX3RyYW5zaXRpb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcztcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XFxufVxcbi53ZXVpX2ZhZGVfdG9nZ2xlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuLndldWlfYWN0aW9uc2hlZXQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwMCUpO1xcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRjQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zcztcXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcXG59XFxuLndldWlfYWN0aW9uc2hlZXRfbWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbn1cXG4ud2V1aV9hY3Rpb25zaGVldF9hY3Rpb24ge1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuLndldWlfYWN0aW9uc2hlZXRfY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbi53ZXVpX2FjdGlvbnNoZWV0X2NlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEOUQ5RDk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbn1cXG4ud2V1aV9hY3Rpb25zaGVldF9jZWxsOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xcbn1cXG4ud2V1aV9hY3Rpb25zaGVldF9jZWxsOmZpcnN0LWNoaWxkOmJlZm9yZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ud2V1aV9hY3Rpb25zaGVldF90b2dnbGUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxufVxcblxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk4wZVd4bEwySmhjMlV2Y21WelpYUXViR1Z6Y3lJc0luTjBlV3hsTDJKaGMyVXZkbUZ5YVdGaWJHVXZaMnh2WW1Gc0xteGxjM01pTENKemRIbHNaUzlwWTI5dUwzZGxkV2xmWm05dWRDNXNaWE56SWl3aWMzUjViR1V2YVdOdmJpOTNaWFZwWDJsamIyNWZabTl1ZEM1c1pYTnpJaXdpYzNSNWJHVXZkMmxrWjJWMEwzZGxkV2xmWW5WMGRHOXVMM2RsZFdsZlluVjBkRzl1TG14bGMzTWlMQ0p6ZEhsc1pTOTNhV1JuWlhRdmQyVjFhVjlpZFhSMGIyNHZkMlYxYVY5aWRHNWZaMnh2WW1Gc0xteGxjM01pTENKemRIbHNaUzlpWVhObEwyMXBlR2x1TDIxdlltbHNaUzVzWlhOeklpd2ljM1I1YkdVdmQybGtaMlYwTDNkbGRXbGZZblYwZEc5dUwzZGxkV2xmWW5SdVgyUmxabUYxYkhRdWJHVnpjeUlzSW5OMGVXeGxMM2RwWkdkbGRDOTNaWFZwWDJKMWRIUnZiaTkzWlhWcFgySjBibDl3Y21sdFlYSjVMbXhsYzNNaUxDSnpkSGxzWlM5M2FXUm5aWFF2ZDJWMWFWOWlkWFIwYjI0dmQyVjFhVjlpZEc1ZmQyRnliaTVzWlhOeklpd2ljM1I1YkdVdmQybGtaMlYwTDNkbGRXbGZZblYwZEc5dUwzZGxkV2xmWW5SdVgyUnBjMkZpYkdWa0xteGxjM01pTENKemRIbHNaUzkzYVdSblpYUXZkMlYxYVY5aWRYUjBiMjR2ZDJWMWFWOWlkRzVmY0d4aGFXNHViR1Z6Y3lJc0luTjBlV3hsTDNkcFpHZGxkQzkzWlhWcFgyTmxiR3d2ZDJWMWFWOWpaV3hzWDJkc2IySmhiQzVzWlhOeklpd2ljM1I1YkdVdlltRnpaUzl0YVhocGJpOXpaWFJQYm1Wd2VDNXNaWE56SWl3aWMzUjViR1V2ZDJsa1oyVjBMM2RsZFdsZlkyVnNiQzkzWlhWcFgyRmpZMlZ6Y3k1c1pYTnpJaXdpYzNSNWJHVXZZbUZ6WlM5dGFYaHBiaTl6WlhSQmNuSnZkeTVzWlhOeklpd2ljM1I1YkdVdmQybGtaMlYwTDNkbGRXbGZZMlZzYkM5M1pYVnBYMk5vWldOckwzZGxkV2xmWTJobFkydGZZMjl0Ylc5dUxteGxjM01pTENKemRIbHNaUzkzYVdSblpYUXZkMlYxYVY5alpXeHNMM2RsZFdsZlkyaGxZMnN2ZDJWMWFWOXlZV1JwYnk1c1pYTnpJaXdpYzNSNWJHVXZkMmxrWjJWMEwzZGxkV2xmWTJWc2JDOTNaWFZwWDJOb1pXTnJMM2RsZFdsZlkyaGxZMnRpYjNndWJHVnpjeUlzSW5OMGVXeGxMM2RwWkdkbGRDOTNaWFZwWDJObGJHd3ZkMlYxYVY5bWIzSnRMM2RsZFdsZlptOXliVjlqYjIxdGIyNHViR1Z6Y3lJc0luTjBlV3hsTDNkcFpHZGxkQzkzWlhWcFgyTmxiR3d2ZDJWMWFWOW1iM0p0TDNkbGRXbGZjMlZzWldOMExteGxjM01pTENKemRIbHNaUzkzYVdSblpYUXZkMlYxYVY5alpXeHNMM2RsZFdsZlptOXliUzkzWlhWcFgzTmxiR1ZqZEY5aVpXWnZjbVV1YkdWemN5SXNJbk4wZVd4bEwzZHBaR2RsZEM5M1pYVnBYMk5sYkd3dmQyVjFhVjltYjNKdEwzZGxkV2xmYzJWc1pXTjBYMkZtZEdWeUxteGxjM01pTENKemRIbHNaUzkzYVdSblpYUXZkMlYxYVY5alpXeHNMM2RsZFdsZlptOXliUzkzWlhWcFgzWmpiMlJsTG14bGMzTWlMQ0p6ZEhsc1pTOTNhV1JuWlhRdmQyVjFhVjlqWld4c0wzZGxkV2xmYzNkcGRHTm9MbXhsYzNNaUxDSnpkSGxzWlM5M2FXUm5aWFF2ZDJWMWFWOXdZV2RsTDNkbGRXbGZiWE5uTG14bGMzTWlMQ0p6ZEhsc1pTOTNhV1JuWlhRdmQyVjFhVjl3WVdkbEwzZGxkV2xmWVhKMGFXTnNaUzVzWlhOeklpd2ljM1I1YkdVdmQybGtaMlYwTDNkbGRXbGZjSEp2WjNKbGMzTXZkMlYxYVY5d2NtOW5jbVZ6Y3k1c1pYTnpJaXdpYzNSNWJHVXZkMmxrWjJWMEwzZGxkV2xmZEdsd2N5OTNaWFZwWDJScFlXeHZaeTVzWlhOeklpd2ljM1I1YkdVdmQybGtaMlYwTDNkbGRXbGZkR2x3Y3k5M1pYVnBYM1J2WVhOMExteGxjM01pTENKemRIbHNaUzkzYVdSblpYUXZkMlYxYVY5MGFYQnpMM2RsZFdsZmJXRnpheTVzWlhOeklpd2ljM1I1YkdVdmQybGtaMlYwTDNkbGRXbGZkR2x3Y3k5M1pYVnBYMkZqZEdsdmJuTm9aV1YwTG14bGMzTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJSVUU3UlVGRFNTd3dRa0ZCUVR0RlFVTkJMRGhDUVVGQk96dEJRVWRLTzBWQlEwa3NaMEpCUVVFN1JVRkRRU3hoUTFKTkxEaERSRkZPT3p0QlFVZEtPMFZCUTBrc1UwRkJRVHRGUVVOQkxGVkJRVUU3TzBGQlIwb3NRMEZCUlR0RlFVTkZMRk5CUVVFN08wRkJSMG83UlVGRFNTeHhRa0ZCUVRzN1FVVjBRa283UlVGRFNTeHRRa0ZCUVR0RlFVTkJMR3RDUVVGQk8wVkJRMEVzWVVGQllTeE5RVUZpTzBWQlEwRXNVMEZCVXl4eGVVWkJRWEY1Uml4UFFVRlBMR2xDUVVOcWVrWXNjVFpKUVVGeE5ra3NUMEZCVHl4aFFVTTFOa2tzTm5Ka1FVRTJjbVFzVDBGQlR5eE5RVVo0YzJRN08wRkJTMG9zY1VKQlFYRkNPMEZCUVZNc2MwSkJRWE5DTzBWQlEyaEVMR0ZCUVdFc1RVRkJZanRGUVVOQkxHdENRVUZCTzBWQlEwRXNiVUpCUVVFN1JVRkRRU3hYUVVGQk8wVkJSVUVzY1VKQlFVRTdSVUZEUVN4elFrRkJRVHRGUVVOQkxIZENRVUZCTzBWQlEwRXNWVUZCUVR0RlFVTkJMR3RDUVVGQk8wVkJRMEVzYTBKQlFVRTdPenRGUVVsQkxHOUNRVUZCTzBWQlEwRXNiMEpCUVVFN08wVkJSMEVzWjBKQlFVRTdPenRGUVVsQkxHbENRVUZCT3pzN096czdRVUZUU2l4cFFrRkJhVUk3UlVGQlZTeFRRVUZUTEU5QlFWUTdPenRCUVVNelFpeHRRa0ZCYlVJN1JVRkJWU3hUUVVGVExFOUJRVlE3T3p0QlFVTTNRaXhsUVVGbE8wVkJRVlVzVTBGQlV5eFBRVUZVT3pzN1FVRkRla0lzZFVKQlFYVkNPMFZCUVZVc1UwRkJVeXhQUVVGVU96czdRVUZEYWtNc2IwSkJRVzlDTzBWQlFWVXNVMEZCVXl4UFFVRlVPenM3UVVGRE9VSXNhMEpCUVd0Q08wVkJRVlVzVTBGQlV5eFBRVUZVT3pzN1FVRkROVUlzZVVKQlFYbENPMFZCUVZVc1UwRkJVeXhQUVVGVU96czdRVUZEYmtNc05FSkJRVFJDTzBWQlFWVXNVMEZCVXl4UFFVRlVPenM3UVVGRGRFTXNhMEpCUVd0Q08wVkJRVlVzVTBGQlV5eFBRVUZVT3pzN1FVRkROVUlzZVVKQlFYbENPMFZCUVZVc1UwRkJVeXhQUVVGVU96czdRVUZEYmtNc1pVRkJaVHRGUVVGVkxGTkJRVk1zVDBGQlZEczdPMEZCUTNwQ0xITkNRVUZ6UWp0RlFVRlZMRk5CUVZNc1QwRkJWRHM3TzBGQlEyaERMR2xDUVVGcFFqdEZRVUZWTEZOQlFWTXNUMEZCVkRzN08wRkRia1F6UWl4eFFrRkJjVUk3UVVGQlV5eHpRa0ZCYzBJN1JVRkRhRVFzVTBGQlFUczdRVUZKUVN4clFrRkJhMEk3UlVGRFpDeGxRVUZCTzBWQlEwRXNZMEZCUVRzN1FVRkZTaXhyUWtGQmEwSTdSVUZEWkN4bFFVRkJPMFZCUTBFc1kwRkJRVHM3UVVGRlNpeGxRVUZsTzBWQlExZ3NaVUZCUVR0RlFVTkJMR05CUVVFN08wRkJSVW9zWlVGQlpUdEZRVU5ZTEdWQlFVRTdSVUZEUVN4alFVRkJPenRCUVVkS0xIbENRVUY1UWp0RlFVTnlRaXhsUVVGQk8wVkJRMEVzWTBGQlFUczdRVUZGU2l3MFFrRkJORUk3UlVGRGVFSXNaVUZCUVR0RlFVTkJMR05CUVVFN08wRkJSVW9zZVVKQlFYbENPMFZCUTNKQ0xHVkJRVUU3UlVGRFFTeGpRVUZCT3p0QlFVVktMR2xDUVVGcFFqdEZRVU5pTEdWQlFVRTdSVUZEUVN4alFVRkJPenRCUVVWS0xHMUNRVUZ0UWp0RlFVTm1MR1ZCUVVFN1JVRkRRU3hqUVVGQk96dEJRVWRLTEhOQ1FVRnpRanRGUVVOc1FpeGxRVUZCTzBWQlEwRXNZMEZCUVRzN1FVRkhTaXgxUWtGQmRVSTdSVUZEYmtJc1kwRkJRVHM3UVVGRlNpeHZRa0ZCYjBJN1JVRkRhRUlzWTBGQlFUczdRVUZIU2l4cFFrRkJhVUk3UlVGRFlpeGpRVUZCTzBWQlEwRXNaVUZCUVRzN1FVRkxTaXhqUVVGak8wVkJRMVlzWjBKQlFVRTdPMEZCUTBFc1pVRkJaU3hqUVVaTU8wVkJSMDRzWTBGQlFUczdRVUZOVWl4bFFVRmxPMFZCUTFnc1owSkJRVUU3TzBGRGNrVktMRk5CUVVNN1JVRkRSeXhuUWtGQlFUdEZRVU5CTEdWQlFVRTdSVUZEUVN4blFrRkJRVHRGUVVOQkxIRkNRVUZCT3p0QlFVdEtMRTFCUVVNN1FVRkJSQ3hMUVVGRE8wVkJRMGNzVjBGQlFUdEZRVU5CTEdWQlFVRTdSVUZEUVN4VlFVRkJPMFZCUTBFc2QwSkJRVUU3TzBGQlEwRXNUVUZNU0N4VFFVdEpPMEZCUVVRc1MwRk1TQ3hUUVV0Sk8wVkJRMGNzVlVGQlFUczdRVUZIVWl4TlFVRkRPMEZCUVVRc1MwRkJRenRCUVVGcFFpeE5RVUZETzBGQlFVUXNTMEZCUXp0RlFVTm1MRmRCUVVFN096dEJRVXRTTEZOQlFWVTdSVUZEVGl4blFrRkJRVHM3UVVGSFNpeFRRVUZUTEdkQ1FVRnBRaXhaUVVGWE8wVkJRMnBETEdkQ1FVRkJPMFZCUTBFc2FVSkJRVUU3TzBGQlIwbzdSVUZEU1N3clFrRkJRVHM3UVVGRFFTeGpRVUZETzBWQlEwY3NjVUpCUVVFN1JVRkRRU3hoUVVGQk96dEJRVVpLTEdOQlFVTXNjVUpCUjBjN1JVRkRTU3huUWtGQlFUdEZRVU5CTEd0Q1FVRkJPMFZCUTBFc1YwRkJRVHRGUVVOQkxHVkJRVUU3UlVGRFFTeFBRVUZCT3p0QlFVTkJMR05CVkZBc2NVSkJSMGNzVlVGTlN6dEZRVU5ITEdWQlFVRTdPMEZEYUVSb1FqdEZRVU5KTEd0Q1FVRkJPMFZCUTBFc1kwRkJRVHRGUVVOQkxHbENRVUZCTzBWQlEwRXNhMEpCUVVFN1JVRkRRU3hyUWtGQlFUdEZRVU5CTEcxQ1FVRkJPMFZCUTBFc2MwSkJRVUU3UlVGRFFTeGxRVUZCTzBWQlEwRXNhMEpCUVVFN1JVRkRRU3h4UWtGQlFUdEZRVU5CTEdOQlFVRTdSVUZEUVN4MVFrRkJRVHRGUVVOQkxHdENRVUZCTzBWRFlrRXNOa05CUVVFN1JVUmxRU3huUWtGQlFUczdRVUZEUVN4VFFVRkRPMFZCUTBjc1UwRkJVeXhIUVVGVU8wVkJRMEVzVjBGQlFUdEZRVU5CTEZsQlFVRTdSVUZEUVN4clFrRkJRVHRGUVVOQkxFMUJRVUU3UlVGRFFTeFBRVUZCTzBWQlEwRXNiME5CUVVFN1JVRkRRU3hYUVVGWExGVkJRVmc3UlVGRFFTeHhRa0ZCUVR0RlFVTkJMSE5DUVVGQk8wVkJRMEVzYlVKQlFVRTdPMEZCUjBvc1UwRkJRenRGUVVOSExIRkNRVUZCT3p0QlJTOUNVanRGUVVOSkxIbENRVUZCTzBWQlEwRXNZMEZCUVRzN1FVRkRRU3hwUWtGQlF5eEpRVUZKTEc5Q1FVRnZRanRGUVVOeVFpeGpRVUZCT3p0QlFVVktMR2xDUVVGRExFbEJRVWtzYjBKQlFXOUNPMFZCUTNKQ0xHTkJRVUU3UlVGRFFTeDVRa0ZCUVRzN1FVTlNVanRGUVVOSkxIbENRVUZCT3p0QlFVTkJMR2xDUVVGRExFbEJRVWtzYjBKQlFXOUNPMFZCUTNKQ0xHTkJRVUU3TzBGQlJVb3NhVUpCUVVNc1NVRkJTU3h2UWtGQmIwSTdSVUZEY2tJc0swSkJRVUU3UlVGRFFTeDVRa0ZCUVRzN1FVTlFVanRGUVVOSkxIbENRVUZCT3p0QlFVTkJMR05CUVVNc1NVRkJTU3h2UWtGQmIwSTdSVUZEY2tJc1kwRkJRVHM3UVVGRlNpeGpRVUZETEVsQlFVa3NiMEpCUVc5Q08wVkJRM0pDTEN0Q1FVRkJPMFZCUTBFc2VVSkJRVUU3TzBGRFVGSTdSVUZEU1N3clFrRkJRVHM3UVVGRFFTeHJRa0ZCUXp0RlFVTkhMR05CUVVFN08wRkRTRkk3UlVGRFNTeGpRVUZCTzBWQlEwRXNlVUpCUVVFN08wRkJRMEVzVFVGQlRUdEJRVUZITEV0QlFVczdSVUZEVml4cFFrRkJRVHRGUVVOQkxEWkNRVUZCT3p0QlFVVktMSFZDUVVGRE8wVkJRMGNzY1VKQlFVRTdPMEZCUlVvc2RVSkJRVU03UlVGRFJ5eGxRVUZCT3p0QlFVbFNPMFZCUTBrc1kwRkJRVHRGUVVOQkxIbENRVUZCT3p0QlFVTkJMRTFCUVUwN1FVRkJSeXhMUVVGTE8wVkJRMVlzYVVKQlFVRTdSVUZEUVN3MlFrRkJRVHM3UVVGRlNpeDFRa0ZCUXp0RlFVTkhMR1ZCUVVFN08wRkRka0pTTzBWQlJVa3NhMEpCUVVFN08wRkJRMEVzVlVGQlF6dEZRMGhFTEZOQlFWTXNSMEZCVkR0RlFVTkJMR3RDUVVGQk8wVkJRMEVzVDBGQlFUdEZRVU5CTEUxQlFVRTdSVUZEUVN4WFFVRkJPMFZCUTBFc1YwRkJRVHRGUVVOQkxEWkNRVUZCTzBWQlEwRXNjVUpCUVVFN1JVRkRRU3hYUVVGWExGZEJRVmc3UlVSSVNTeFZRVUZCT3p0QlFVZEJMRlZCUkVnc1dVRkRTVHRGUVVOSExHRkJRVUU3TzBGQlMxbzdSVUZEU1N4M1FrRkJRVHRGUVVOQkxIbENRVUZCTzBWQlEwRXNkVUpCUVVFN1JVRkRRU3hsUVVGQk8wVkJSVUVzWjBKQlFVRTdSVUZIUVN4clFrRkJRVHM3UVVGRFFTeFhRVUZETzBWRGVFSkVMRk5CUVZNc1IwRkJWRHRGUVVOQkxHdENRVUZCTzBWQlEwRXNUMEZCUVR0RlFVTkJMRTFCUVVFN1JVRkRRU3hYUVVGQk8wVkJRMEVzVjBGQlFUdEZRVU5CTERaQ1FVRkJPMFZCUTBFc2NVSkJRVUU3UlVGRFFTeFhRVUZYTEZkQlFWZzdPMEZFYlVKQkxGZEJRVU03UlVObVJDeFRRVUZUTEVkQlFWUTdSVUZEUVN4clFrRkJRVHRGUVVOQkxFOUJRVUU3UlVGRFFTeFRRVUZCTzBWQlEwRXNWMEZCUVR0RlFVTkJMRmRCUVVFN1JVRkRRU3huUTBGQlFUdEZRVU5CTEhkQ1FVRkJPMFZCUTBFc1YwRkJWeXhYUVVGWU96dEJSRmxLTzBWQlEwa3NhVUpCUVVFN1JVRkRRU3h0UWtGQlFUdEZRVU5CTEd0Q1FVRkJPMFZCUTBFc2JVSkJRVUU3UlVGRFFTeFhRVUZCTzBWQlEwRXNaVUZCUVRzN1FVRkZRU3hwUWtGQlJUdEZRVU5GTEdGQlFVRTdPMEZCU1ZJN1JVRkRTU3huUWtGQlFUdEZRVU5CTEZkQlFVRTdSVUZEUVN4clFrRkJRVHRGUVVOQkxHMUNRVUZCTzBWQlEwRXNaVUZCUVRzN1FVRkhTanRGUVVOSkxHdENRVUZCTzBWQlEwRXNhMEpCUVVFN1JVRkRRU3hoUVVGQk8wVkJRMEVzYlVKQlFVRTdPMEZCUjBvN1JVRkRTU3hwUWtGQlFUdEZRVU5CTEZkQlFVRTdPMEZCUjBvN1JVRkRTU3hQUVVGQk96dEJSV3hGU2l4clFrRkRTU3hYUVVGVkxFbEJRVWs3UlZKRVpDdzJRMEZCUVRzN1FWRkpTU3hyUWtGSVNpeFhRVUZWTEVsQlFVa3NXVUZIVkR0RlFVTkhMSGxDUVVGQk96dEJRVXhhTEd0Q1FWRkpMRVZCUVVNN1JVRkRSeXhqUVVGQk96dEJRVWRCTEd0Q1FVUktMR05CUTBzN1JVRkRSeXhUUVVGVExFZEJRVlE3UlVNclJsSXNjVUpCUVVFN1JVRkRRU3hYUVVGWExHRkJRVmc3UlVGbVFTeFhRVUZCTzBWQlEwRXNWVUZCUVR0RlFVeEJMSGxDUVVGQk8wVkJjMEpCTEhGQ1FVRkJPMFZCUTBFc2JVSkJRVUU3UlVGRFFTeHJRa0ZCUVR0RlFVTkJMRk5CUVVFN1JVUndSMUVzVTBGQlFUdEZRVU5CTEdsQ1FVRkJPenRCUldoQ1dqdEZWa0ZKTERaRFFVRkJPenRCVlVsS08wVkJRMGtzYTBKQlFVRTdSVUZEUVN4aFFVRkJPenRCUTB4S0xHbENRVU5KTzBWQlEwa3NiMEpCUVVFN08wRkJSMEVzYVVKQlJFb3NWMEZEU3p0RlFVTkhMSGxDUVVGQk96dEJRVk5KTEdsQ1FVaE5MRmxCUTJJc1VVRkRTeXh4UWtGRFJ6dEZRVU5ITEZOQlFWTXNUMEZCVkR0RlFVTkJMR05CUVVFN1JVRkRRU3hsUVVGQk96dEJRMjVDY0VJc2IwSkJRMGs3UlVGRFNTeHhRa0ZCUVRzN1FVRkhRU3h2UWtGRVNpeFhRVU5MTzBWQlEwY3NlVUpCUVVFN08wRkJTVW9zYjBKQlJFb3NiVUpCUTBzN1JVRkRSeXhUUVVGVExFOUJRVlE3UlVGRFFTeGpRVUZCTzBWQlEwRXNaVUZCUVR0RlFVTkJMR05CUVVFN08wRkJWMGtzYjBKQlNGTXNXVUZEYUVJc1VVRkRTeXh4UWtGRFJ6dEZRVU5ITEZOQlFWTXNUMEZCVkR0RlFVTkJMR05CUVVFN08wRkRNMEp3UWp0RlFVTkZMR05CUVVFN1JVRkRRU3hWUVVGQk96dEJRVVZHTzBWQlEwa3NWMEZCUVR0RlFVTkJMRk5CUVVFN1JVRkRRU3hWUVVGQk8wVkJRMEVzZDBKQlFVRTdSVUZEUVN3MlFrRkJRVHRGUVVOQkxHdENRVUZCTzBWQlEwRXNZMEZCUVR0RlFVTkJMRzlDUVVGQk8wVkJRMEVzZFVKQlFVRTdPMEZCUjBFc1YwRkJRenRCUVVFMlFpeFhRVUZETzBWQlF6TkNMSGRDUVVGQk8wVkJRMEVzVTBGQlFUczdRVUZIVWp0RlFVTkpMR05CUVVFN1JVRkRRU3hUUVVGQk8wVkJRMEVzV1VGQlFUdEZRVU5CTEZkQlFVRTdSVUZEUVN4alFVRkJPMFZCUTBFc2IwSkJRVUU3UlVGRFFTeFZRVUZCT3p0QlFVZEtPMFZCUTBrc1lVRkJRVHRGUVVOQkxHVkJRVUU3UlVGRFFTeHRRa0ZCYlVJc1lVRkJia0k3UlVGRFFTeFhRVUZCTzBWQlEwRXNUVUZCUVR0RlFVTkJMR2RDUVVGQk8wVkJRMEVzWlVGQlFUdEZRVU5CTEd0Q1FVRkJPMFZCUTBFc1YwRkJRVHRGUVVOQkxGVkJRVUU3TzBGQlEwRXNZVUZCUXp0RlFVTkhMSGxDUVVGQk96dEJRVWRTTEdkQ1FVTkpPMFZCUTBrc1kwRkJRVHM3UVVGR1VpeG5Ra0ZEU1N4blFrRkZTVHRGUVVGblFpeHhRa0ZCUVRzN1FVRkllRUlzWjBKQlMwazdSVUZEU1N4dFFrRkJRVHM3UVVGT1VpeG5Ra0ZSU1R0RlFVRmpMRmxCUVVFN08wRkJVbXhDTEdkQ1FWTkpPMFZCUTBrc1lVRkJRVHM3UVVONFJGSTdSVUZEU1N4VlFVRkJPenRCUVVSS0xHbENRVVZKTzBWQlEwa3NiVUpCUVVFN08wRkJUVUVzYVVKQlJFb3NZMEZEU3p0RlFVTkhMRk5CUVZNc1IwRkJWRHRGVEd0SFVpeHhRa0ZCUVR0RlFVTkJMRmRCUVZjc1lVRkJXRHRGUVdaQkxGZEJRVUU3UlVGRFFTeFZRVUZCTzBWQlRFRXNlVUpCUVVFN1JVRnpRa0VzY1VKQlFVRTdSVUZEUVN4dFFrRkJRVHRGUVVOQkxHdENRVUZCTzBWQlEwRXNVMEZCUVR0RlMzUkhVU3hyUWtGQlFUdEZRVU5CTEZGQlFVRTdSVUZEUVN4WFFVRkJPMFZCUTBFc1owSkJRVUU3TzBGQlMxbzdSVUZEU1N4M1FrRkJRVHRGUVVOQkxGTkJRVUU3UlVGRFFTeFZRVUZCTzBWQlEwRXNOa0pCUVVFN1JVRkRRU3hYUVVGQk8wVkJRMEVzYTBKQlFVRTdSVUZEUVN4WlFVRkJPMFZCUTBFc2EwSkJRVUU3UlVGRFFTeFZRVUZCTzBWQlEwRXNhMEpCUVVFN08wRkRPVUpLTzBWQlEwa3NiVUpCUVVFN08wRkJSRW9zYlVKQlJVazdSVUZCWVN4WFFVRkJPenRCUVVacVFpeHRRa0ZIU1R0RlFVTkpMR3RDUVVGQk96dEJRVU5CTEcxQ1FVWktMR05CUlVzN1JWSTRRa3dzVTBGQlV5eEhRVUZVTzBWQlEwRXNhMEpCUVVFN1JVRkRRU3hSUVVGQk8wVkJRMEVzVFVGQlFUdEZRVU5CTEZWQlFVRTdSVUZEUVN4WlFVRkJPMFZCUTBFc0swSkJRVUU3UlVGRFFTeDNRa0ZCUVR0RlFVTkJMRmRCUVZjc1YwRkJXRHM3UVZGdVEwa3NiVUpCVEVvc1kwRkxTenRGUVVOSExGTkJRVk1zUjBGQlZEdEZUbXRIVWl4eFFrRkJRVHRGUVVOQkxGZEJRVmNzWVVGQldEdEZRV1pCTEZkQlFVRTdSVUZEUVN4VlFVRkJPMFZCVEVFc2VVSkJRVUU3UlVGelFrRXNjVUpCUVVFN1JVRkRRU3h0UWtGQlFUdEZRVU5CTEd0Q1FVRkJPMFZCUTBFc1UwRkJRVHRGVFhSSFVTeHJRa0ZCUVR0RlFVTkJMRkZCUVVFN1JVRkRRU3hYUVVGQk8wVkJRMEVzWjBKQlFVRTdPMEZCWmxvc2JVSkJhMEpKTzBWQlEwa3NhMEpCUVVFN08wRkJRMEVzYlVKQlJrb3NZMEZGU3p0RlFVTkhMR0ZCUVVFN08wRkRja0phTzBWQlEwa3NhMEpCUVVFN08wRkRSa283UlVGRFNTeGpRVUZCTzBWQlEwRXNaMEpCUVVFN1JVRkRRU3hwUWtGQlFUczdRVUZJU2l4WFFVbEpMR05CUTBrN1JVRkRTU3huUWtGQlFUdEZRVU5CTEZsQlFVRTdSVUZEUVN4elFrRkJRVHM3UVVOU1dqdEZRVU5KTEdkQ1FVRkJPMFZCUTBFc2JVSkJRVUU3TzBGQlJVbzdSVUZEU1N4blFrRkJRVHRGUVVOQkxHdENRVUZCTzBWQlEwRXNWMEZCUVR0RlFVTkJMRmxCUVVFN1JVRkRRU3g1UWtGQlFUdEZRVU5CTEZWQlFVRTdSVUZEUVN4dFFrRkJRVHRGUVVOQkxITkNRVUZCTzBWQlEwRXNiVUpCUVVFN08wRkJRMEVzV1VGQlF6dEZRVU5ITEZOQlFWTXNSMEZCVkR0RlFVTkJMR3RDUVVGQk8wVkJRMEVzVFVGQlFUdEZRVU5CTEU5QlFVRTdSVUZEUVN4WFFVRkJPMFZCUTBFc1dVRkJRVHRGUVVOQkxHMUNRVUZCTzBWQlEwRXNlVUpCUVVFN1JVRkRRU3g1UWtGQlFUczdRVUZGU2l4WlFVRkRPMFZCUTBjc1UwRkJVeXhIUVVGVU8wVkJRMEVzYTBKQlFVRTdSVUZEUVN4TlFVRkJPMFZCUTBFc1QwRkJRVHRGUVVOQkxGZEJRVUU3UlVGRFFTeFpRVUZCTzBWQlEwRXNiVUpCUVVFN1JVRkRRU3g1UWtGQlFUdEZRVU5CTEhkRFFVRkJPMFZCUTBFc2VVSkJRVUU3TzBGQlIwb3NXVUZCUXp0RlFVTkhMSEZDUVVGQk8wVkJRMEVzZVVKQlFVRTdPMEZCUTBFc1dVRklTQ3hSUVVkSk8wVkJRMGNzVjBGQlZ5eFJRVUZZT3p0QlFVVktMRmxCVGtnc1VVRk5TVHRGUVVOSExGZEJRVmNzWjBKQlFWZzdPMEZETlVOYU8wVkJRMGtzYVVKQlFVRTdSVUZEUVN4clFrRkJRVHM3UVVGR1NpeFRRVWxKTzBWQlEwa3NiVUpCUVVFN08wRkJURklzVTBGUlNUdEZRVU5KTEcxQ1FVRkJPMFZCUTBFc1pVRkJRVHM3UVVGV1VpeFRRVmxKTzBWQlEwa3NhMEpCUVVFN1JVRkRRU3huUWtGQlFUdEZRVU5CTEdWQlFVRTdPMEZCWmxJc1UwRnBRa2s3UlVGRFNTeGxRVUZCTzBWQlEwRXNWMEZCUVRzN1FVRnVRbElzVTBGelFrazdSVUZEU1N4dFFrRkJRVHM3UVVGMlFsSXNVMEV3UWtrN1JVRkRTU3h0UWtGQlFUdEZRVU5CTEdWQlFVRTdSVUZEUVN4WFFVRkJPenRCUVRkQ1VpeFRRVEJDU1N4cFFrRkpTVHRGUVVGRkxHTkJRVUU3TzBGQldWUXNiVUpCVWpSRU8wVkJRM3BFTzBsQlEwa3NaVUZCUVR0SlFVTkJMRTlCUVVFN1NVRkRRU3hUUVVGQk8wbEJRMEVzVjBGQlFUdEpRVU5CTEd0Q1FVRkJPenM3UVVONlExSTdSVUZEU1N4clFrRkJRVHRGUVVOQkxHVkJRVUU3TzBGQlJrb3NZVUZIU1R0RlFVTkpMRzlDUVVGQk96dEJRVXBTTEdGQlRVazdSVUZEU1N4bFFVRkJPMFZCUTBFc1owSkJRVUU3UlVGRFFTeHZRa0ZCUVRzN1FVRlVVaXhoUVZkSk8wVkJRMGtzWlVGQlFUdEZRVU5CTEdkQ1FVRkJPMFZCUTBFc2JVSkJRVUU3TzBGQlpGSXNZVUZuUWtrN1JVRkRTU3huUWtGQlFUdEZRVU5CTEdWQlFVRTdPMEZEYkVKU08wVkJRMGtzWVVGQlFUdEZRVU5CTEcxQ1FVRkJPenRCUVVkS08wVkJRMGtzZVVKQlFVRTdSVUZEUVN4WFFVRkJPMFZCUTBFc1QwRkJRVHM3UVVGSFNqdEZRVU5KTEZGQlFVRTdSVUZEUVN4WlFVRkJPMFZCUTBFc2VVSkJRVUU3TzBGQlIwbzdSVUZEU1N4alFVRkJPMFZCUTBFc2FVSkJRVUU3UlVGRFFTeFpRVUZCT3p0QlEyWktPMFZCUTBrc1pVRkJRVHRGUVVOQkxGZEJRVUU3UlVGRFFTeFZRVUZCTzBWQlEwRXNVVUZCUVR0RlFVTkJMRk5CUVVFN1JVRkRRU3hYUVVGWExIRkNRVUZZTzBWQlJVRXNlVUpCUVVFN1JVRkRRU3hyUWtGQlFUdEZRVU5CTEd0Q1FVRkJPenRCUVVOQkxHOUNRVUZ4UWl4aFFVTnFRanRGUVVOSkxHZENRVUZCTzBWQlEwRXNkMEpCUVVFN08wRkJTRklzYjBKQlFYRkNMR0ZCUzJwQ08wVkJRMGtzWjBKQlFVRTdPMEZCUzFvN1JVRkRTU3h4UWtGQlFUczdRVUZIU2p0RlFVTkpMR2RDUVVGQk8wVkJRMEVzWlVGQlFUczdRVUZIU2p0RlFVTkpMR1ZCUVVFN1JVRkRRU3hsUVVGQk8wVkJRMEVzVjBGQlFUczdRVUZIU2p0RlFVTkpMR3RDUVVGQk8wVkJRMEVzYVVKQlFVRTdSVUZEUVN4blFrRkJRVHRGUVVOQkxHVkJRVUU3UlVGRFFTeGhRVUZCT3p0QlFVeEtMR1ZCVFVrN1JVRkRTU3hqUVVGQk8wVkJRMEVzVDBGQlFUdEZRVU5CTEdOQlFVRTdSVUZEUVN4eFFrRkJRVHRGZEVKd1JFb3NOa05CUVVFN08wRnpRbk5FU1N4bFFVNUtMRVZCVFVzN1JVRkRSeXg1UWtGQlFUczdRVUZIVWl4bFFVRkRPMFZtTVVSRUxGTkJRVk1zUjBGQlZEdEZRVU5CTEd0Q1FVRkJPMFZCUTBFc1QwRkJRVHRGUVVOQkxFMUJRVUU3UlVGRFFTeFhRVUZCTzBWQlEwRXNWMEZCUVR0RlFVTkJMRFpDUVVGQk8wVkJRMEVzY1VKQlFVRTdSVUZEUVN4WFFVRlhMRmRCUVZnN08wRmxjMFJCTEc5Q1FVRnhRaXhuUWtGRGFrSTdSVUZEU1N4clFrRkJRVHM3UVVGRFFTeHZRa0ZJWVN4blFrRkRha0lzUlVGRlN6dEZabnBEVkN4VFFVRlRMRWRCUVZRN1JVRkRRU3hyUWtGQlFUdEZRVU5CTEU5QlFVRTdSVUZEUVN4TlFVRkJPMFZCUTBFc1ZVRkJRVHRGUVVOQkxGbEJRVUU3UlVGRFFTdzRRa0ZCUVR0RlFVTkJMSEZDUVVGQk8wVkJRMEVzVjBGQlZ5eFhRVUZZT3p0QlpYTkRXU3h2UWtGU1V5eG5Ra0ZEYWtJc1JVRk5TeXhaUVVOSk8wVkJRMGNzWVVGQlFUczdRVUZSYUVJc1owSkJRVU03UlVGRFJ5eGpRVUZCT3p0QlFVVktMR2RDUVVGRE8wVkJRMGNzWTBGQlFUczdRVUZUVWl4dFFrRk1jME03UlVGRGJFTTdTVUZEU1N4VlFVRkJPenM3UVVONlJsSTdSVUZEU1N4bFFVRkJPMFZCUTBFc1ZVRkJRVHRGUVVOQkxGbEJRVUU3UlVGRFFTeHBRa0ZCUVR0RlFVTkJMRlZCUVVFN1JVRkRRU3hUUVVGQk8wVkJRMEVzYlVKQlFVRTdSVUZEUVN4clEwRkJRVHRGUVVOQkxHdENRVUZCTzBWQlEwRXNhMEpCUVVFN1JVRkRRU3hqUVVGQk96dEJRVVZLTzBWQlEwa3NaMEpCUVVFN1JVRkRRU3hqUVVGQk96dEJRVU5CTEdkQ1FVRkRPMFZCUTBjc1UwRkJVeXhQUVVGVU8wVkJRMEVzWTBGQlFUdEZRVU5CTEdWQlFVRTdPMEZCUjFJN1JVRkRTU3huUWtGQlFUczdRVUZKU2l4dFFrRkRTVHRGUVVORkxHVkJRVUU3UlVGRFFTeGxRVUZCT3p0QlFVZE9PMFZCUTBrc2EwSkJRVUU3UlVGRFFTeFZRVUZCTzBWQlEwRXNiVUpCUVVFN1JVRkRRU3hUUVVGQk8wVkJRMEVzVVVGQlFUczdRVUZGU2p0RlFVTkpMR3RDUVVGQk8wVkJRMEVzVTBGQlFUdEZRVU5CTEdGQlFVRTdPMEZCUTBFc2EwSkJRVU03UlVGRFJ5eFRRVUZSTEVkQlFWSTdSVUZEUVN4clFrRkJRVHRGUVVOQkxHRkJRVUU3UlVGRFFTeGpRVUZCTzBWQlEwRXNiVUpCUVVFN1JVRkRRU3huUkVGQlFUdEZRVU5CTEd0Q1FVRkJPMFZCUTBFc09FSkJRVUU3TzBGQlJVb3NhMEpCUVVNN1JVRkRSeXh0UkVGQlFUczdRVUZEUVN4clFrRkdTQ3hGUVVWSk8wVkJRMGNzVjBGQlZ5eGhRVUZoTEhOQ1FVRjRRanM3UVVGSFVpeHJRa0ZCUXp0RlFVTkhMRzFFUVVGQk96dEJRVU5CTEd0Q1FVWklMRVZCUlVrN1JVRkRSeXhYUVVGWExHTkJRV01zYzBKQlFYcENPenRCUVVkU0xHdENRVUZETzBWQlEwY3NiVVJCUVVFN08wRkJRMEVzYTBKQlJrZ3NSVUZGU1R0RlFVTkhMRmRCUVZjc1kwRkJZeXh6UWtGQmVrSTdPMEZCUjFJc2EwSkJRVU03UlVGRFJ5eHRSRUZCUVRzN1FVRkRRU3hyUWtGR1NDeEZRVVZKTzBWQlEwY3NWMEZCVnl4alFVRmpMSE5DUVVGNlFqczdRVUZIVWl4clFrRkJRenRGUVVOSExHMUVRVUZCT3p0QlFVTkJMR3RDUVVaSUxFVkJSVWs3UlVGRFJ5eFhRVUZYTEdWQlFXVXNjMEpCUVRGQ096dEJRVWRTTEd0Q1FVRkRPMFZCUTBjc2JVUkJRVUU3TzBGQlEwRXNhMEpCUmtnc1JVRkZTVHRGUVVOSExGZEJRVmNzWlVGQlpTeHpRa0ZCTVVJN08wRkJSMUlzYTBKQlFVTTdSVUZEUnl4dFJFRkJRVHM3UVVGRFFTeHJRa0ZHU0N4RlFVVkpPMFZCUTBjc1YwRkJWeXhsUVVGbExITkNRVUV4UWpzN1FVRkhVaXhyUWtGQlF6dEZRVU5ITEcxRVFVRkJPenRCUVVOQkxHdENRVVpJTEVWQlJVazdSVUZEUnl4WFFVRlhMR1ZCUVdVc2MwSkJRVEZDT3p0QlFVZFNMR3RDUVVGRE8wVkJRMGNzYlVSQlFVRTdPMEZCUTBFc2EwSkJSa2dzUlVGRlNUdEZRVU5ITEZkQlFWY3NaVUZCWlN4elFrRkJNVUk3TzBGQlIxSXNhMEpCUVVNN1JVRkRSeXh0UkVGQlFUczdRVUZEUVN4clFrRkdTQ3hGUVVWSk8wVkJRMGNzVjBGQlZ5eGxRVUZsTEhOQ1FVRXhRanM3UVVGSFVpeHJRa0ZCUXp0RlFVTkhMRzlFUVVGQk96dEJRVU5CTEd0Q1FVWklMRWRCUlVrN1JVRkRSeXhYUVVGWExHVkJRV1VzYzBKQlFURkNPenRCUVVkU0xHdENRVUZETzBWQlEwY3NiMFJCUVVFN08wRkJRMEVzYTBKQlJrZ3NSMEZGU1R0RlFVTkhMRmRCUVZjc1pVRkJaU3h6UWtGQk1VSTdPMEZCU1ZvN1JVRkRSVHRKUVVGTExHRkJRVUU3TzBWQlEwdzdTVUZCVVN4aFFVRkJPenRGUVVOU08wbEJRVkVzVlVGQlFUczdSVUZEVWp0SlFVRlRMR0ZCUVVFN08wVkJRMVE3U1VGQlR5eGhRVUZCT3pzN1FVRkRVanRGUVVORE8wbEJRVXNzWVVGQlFUczdSVUZEVER0SlFVRlhMR0ZCUVVFN08wVkJRMWc3U1VGQlZ5eFZRVUZCT3p0RlFVTllPMGxCUVZjc1lVRkJRVHM3UlVGRFdEdEpRVUZQTEdGQlFVRTdPenRCUVVOU08wVkJRME03U1VGQlN5eGhRVUZCT3p0RlFVTk1PMGxCUVZjc1lVRkJRVHM3UlVGRFdEdEpRVUZYTEZWQlFVRTdPMFZCUTFnN1NVRkJWeXhoUVVGQk96dEZRVU5ZTzBsQlFVOHNZVUZCUVRzN08wRkJRMUk3UlVGRFF6dEpRVUZMTEdGQlFVRTdPMFZCUTB3N1NVRkJVeXhoUVVGQk96dEZRVU5VTzBsQlFWTXNWVUZCUVRzN1JVRkRWRHRKUVVGVExHRkJRVUU3TzBWQlExUTdTVUZCVHl4aFFVRkJPenM3UVVGRFVqdEZRVU5ETzBsQlFVc3NZVUZCUVRzN1JVRkRURHRKUVVGWExHRkJRVUU3TzBWQlExZzdTVUZCVnl4VlFVRkJPenRGUVVOWU8wbEJRVmNzWVVGQlFUczdSVUZEV0R0SlFVRlBMR0ZCUVVFN096dEJRVU5TTzBWQlEwTTdTVUZCU3l3d1FrRkJRVHM3UlVGRFREdEpRVUZYTEdGQlFVRTdPMFZCUTFnN1NVRkJWeXhWUVVGQk96dEZRVU5ZTzBsQlFWY3NZVUZCUVRzN1JVRkRXRHRKUVVGUExEQkNRVUZCT3pzN1FVRkRVanRGUVVORE8wbEJRVXNzYVVKQlFVRTdPMFZCUTB3N1NVRkJVeXhoUVVGQk96dEZRVU5VTzBsQlFWTXNWVUZCUVRzN1JVRkRWRHRKUVVGVExHRkJRVUU3TzBWQlExUTdTVUZCVHl4cFFrRkJRVHM3TzBGQlExSTdSVUZEUXp0SlFVRkxMREJDUVVGQk96dEZRVU5NTzBsQlFWY3NZVUZCUVRzN1JVRkRXRHRKUVVGWExGVkJRVUU3TzBWQlExZzdTVUZCVnl4aFFVRkJPenRGUVVOWU8wbEJRVThzTUVKQlFVRTdPenRCUVVOU08wVkJRME03U1VGQlN5d3dRa0ZCUVRzN1JVRkRURHRKUVVGWExHRkJRVUU3TzBWQlExZzdTVUZCVnl4VlFVRkJPenRGUVVOWU8wbEJRVmNzWVVGQlFUczdSVUZEV0R0SlFVRlBMREJDUVVGQk96czdRVUZEVWp0RlFVTkRPMGxCUVVzc2FVSkJRVUU3TzBWQlEwdzdTVUZCVXl4aFFVRkJPenRGUVVOVU8wbEJRVk1zVlVGQlFUczdSVUZEVkR0SlFVRlRMR0ZCUVVFN08wVkJRMVE3U1VGQlR5eHBRa0ZCUVRzN08wRkJRMUk3UlVGRFF6dEpRVUZMTERCQ1FVRkJPenRGUVVOTU8wbEJRVmNzWVVGQlFUczdSVUZEV0R0SlFVRlhMRlZCUVVFN08wVkJRMWc3U1VGQlZ5eGhRVUZCT3p0RlFVTllPMGxCUVU4c01FSkJRVUU3T3p0QlFVTlNPMFZCUTBNN1NVRkJTeXd3UWtGQlFUczdSVUZEVER0SlFVRlhMR0ZCUVVFN08wVkJRMWc3U1VGQlZ5eFZRVUZCT3p0RlFVTllPMGxCUVZjc1lVRkJRVHM3UlVGRFdEdEpRVUZQTERCQ1FVRkJPenM3UVVOMFRWUTdSVUZEU1N4bFFVRkJPMFZCUTBFc1ZVRkJRVHRGUVVOQkxGZEJRVUU3UlVGRFFTeFpRVUZCTzBWQlEwRXNUVUZCUVR0RlFVTkJMRTlCUVVFN1JVRkRRU3c0UWtGQlFUczdRVUZIU2p0RlFVTkpMR1ZCUVVFN1JVRkRRU3hWUVVGQk8wVkJRMEVzVjBGQlFUdEZRVU5CTEZsQlFVRTdSVUZEUVN4TlFVRkJPMFZCUTBFc1QwRkJRVHM3UVVGSFNqdEZRVU5KTEdGQlFVRTdSVUZEUVN4bFFVRkJPMFZCUTBFc1ZVRkJRVHRGUVVOQkxGZEJRVUU3UlVGRFFTeFpRVUZCTzBWQlEwRXNUVUZCUVR0RlFVTkJMRTlCUVVFN1JVRkRRU3cwUWtGQlFUdEZRVU5CTERCQ1FVRkJPenRCUVVWS08wVkJRMGtzT0VKQlFVRTdPMEZETDBKS08wVkJRMGtzWlVGQlFUdEZRVU5CTEU5QlFVRTdSVUZEUVN4VFFVRkJPMFZCUTBFc1YwRkJWeXhyUWtGQldEdEZRVU5CTERKQ1FVRkJPMFZCUTBFc1ZVRkJRVHRGUVVOQkxGZEJRVUU3UlVGRFFTeDVRa0ZCUVR0RlFVVkJMSGxDUVVGQk96dEJRVVZLTzBWQlEwa3NlVUpCUVVFN08wRkJSVW83UlVGRFNTeGxRVUZCTzBWQlEwRXNlVUpCUVVFN08wRkJSVW83UlVGRFNTeHJRa0ZCUVR0RlFVTkJMR1ZCUVVFN1JVRkRRU3hyUWtGQlFUdEZRVU5CTEdWQlFVRTdPMEZCUTBFc2MwSkJRVU03Uld4Q2VFSkVMRk5CUVZNc1IwRkJWRHRGUVVOQkxHdENRVUZCTzBWQlEwRXNUMEZCUVR0RlFVTkJMRTFCUVVFN1JVRkRRU3hYUVVGQk8wVkJRMEVzVjBGQlFUdEZRVU5CTERaQ1FVRkJPMFZCUTBFc2NVSkJRVUU3UlVGRFFTeFhRVUZYTEZkQlFWZzdPMEZyUW0xQ1FTeHpRa0ZCUXp0RlFVTkhMSGxDUVVGQk96dEJRVWRCTEhOQ1FVUklMRmxCUTBrN1JVRkRSeXhoUVVGQk96dEJRVTFhTzBWQlEwa3NWMEZCVnl4bFFVRllJaXdpWm1sc1pTSTZJbk4wZVd4bEwzZGxkV2t1WTNOeklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lRR2x0Y0c5eWRDQmNJbVp1WENJN1hISmNibHh5WEc1b2RHMXNJSHRjY2x4dUlDQWdJQzF0Y3kxMFpYaDBMWE5wZW1VdFlXUnFkWE4wT2lBeE1EQWxPMXh5WEc0Z0lDQWdMWGRsWW10cGRDMTBaWGgwTFhOcGVtVXRZV1JxZFhOME9pQXhNREFsTzF4eVhHNTlYSEpjYmx4eVhHNWliMlI1SUh0Y2NseHVJQ0FnSUd4cGJtVXRhR1ZwWjJoME9pQXhMalk3WEhKY2JpQWdJQ0JtYjI1MExXWmhiV2xzZVRvZ1FITmhibk5HYjI1ME8xeHlYRzU5WEhKY2JseHlYRzRxSUh0Y2NseHVJQ0FnSUcxaGNtZHBiam9nTUR0Y2NseHVJQ0FnSUhCaFpHUnBibWM2SURBN1hISmNibjFjY2x4dVhISmNibUVnYVcxbklIdGNjbHh1SUNBZ0lHSnZjbVJsY2pvZ01EdGNjbHh1ZlZ4eVhHNWNjbHh1WVNCN1hISmNiaUFnSUNCMFpYaDBMV1JsWTI5eVlYUnBiMjQ2SUc1dmJtVTdYSEpjYm4waUxDSXZMeUJtYjI1MElHWmhiV2xzZVZ4eVhHNUFjMkZ1YzBadmJuUTZYQ0pJWld4MlpYUnBZMkVnVG1WMVpWd2lMRWhsYkhabGRHbGpZU3hCY21saGJDeHpZVzV6TFhObGNtbG1PMXh5WEc1QWMyVnlhV1pHYjI1ME9rZGxiM0puYVdFc0lGd2lWR2x0WlhNZ1RtVjNJRkp2YldGdVhDSXNWR2x0WlhNc2MyVnlhV1k3WEhKY2JrQjNjRVp2Ym5RNlhDSk5hV055YjNOdlpuUWdXV0ZJWldsY0lpeHpZVzV6TFhObGNtbG1PMXh5WEc1QVltbDZSbTl1ZERwY0lraGxiSFpsZEdsallTQk9aWFZsWENJc1NHVnNkbVYwYVdOaExGd2lTR2x5WVdkcGJtOGdVMkZ1Y3lCSFFsd2lMRndpVFdsamNtOXpiMlowSUZsaFNHVnBYQ0lzWENMbHZxN292YS9wbTRYcHU1RmNJaXhCY21saGJDeHpZVzV6TFhObGNtbG1PMXh5WEc1QVoyeHZZbUZzUm05dWREcEFjMkZ1YzBadmJuUTdYSEpjYmtCbmJHOWlZV3hHYjI1MFUybDZaVG94TkhCNE8xeHlYRzVjY2x4dUx5OGdabTl1ZENCamIyeHZjbHh5WEc1QVoyeHZZbUZzVEdsdWEwTnZiRzl5T2lBak5qRTNORGxDTzF4eVhHNUFaMnh2WW1Gc1JHVnpZME52Ykc5eU9pQWpRakpDTWtJeU8xeHlYRzVBWjJ4dlltRnNWMkZ5YmtOdmJHOXlPaUFqUlRZME16UXdPMXh5WEc1QVoyeHZZbUZzVG1samEwNWhiV1ZEYjJ4dmNqb2dJelUzTmtJNU5UdGNjbHh1UUdkc2IySmhiRlJsZUhSRGIyeHZjam9nSXpnNE9EdGNjbHh1UUdkc2IySmhiRlJwZEd4bFEyOXNiM0k2SUNNd01EQTdYSEpjYmx4eVhHNHZMMkp2Y21SbGNseHlYRzVBWjJ4dlltRnNRbTl5WkdWeVEyOXNiM0k2SUNOQ1EwSkJRalk3WEhKY2JseHlYRzR2TDJGeWNtOTNYSEpjYmtCbmJHOWlZV3hCY25KdmQwTnZiRzl5T2lBalF6ZEROME5ETzF4eVhHNWNjbHh1THk5amIyMXdiMjVsYm5SY2NseHVRR2wwWlcxQlkzUnBkbVZEYjJ4dmNqb2dJMFUwUlRSRk5EdGNjbHh1WEhKY2JpOHZjR0ZuWlZ4eVhHNUFjR0ZuWlVSbFptRjFiSFJDWVdOclozSnZkVzVrUTI5c2IzSTZJMFZHUlVaR05EdGNjbHh1WEhKY2JpOHZJR2RoY0Z4eVhHNUFaMkZ3TlRvMWNIZzdYSEpjYmtCbllYQXhNRG94TUhCNE8xeHlYRzVBWjJGd01UVTZNVFZ3ZUR0Y2NseHVJaXdpUUdadmJuUXRabUZqWlNCN1hISmNiaUFnSUNCbWIyNTBMWGRsYVdkb2REb2dibTl5YldGc08xeHlYRzRnSUNBZ1ptOXVkQzF6ZEhsc1pUb2dibTl5YldGc08xeHlYRzRnSUNBZ1ptOXVkQzFtWVcxcGJIazZJRndpZDJWMWFWd2lPMXh5WEc0Z0lDQWdjM0pqT2lCMWNtd29KMlJoZEdFNllYQndiR2xqWVhScGIyNHZiMk4wWlhRdGMzUnlaV0Z0TzJKaGMyVTJOQ3hrTURsSFVtZEJRa0ZCUVVGQlFXYzRRVUZ6UVVGQlFVRkVVbmRCUVZGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFraFZNVlpEUVVGQlFrTkJRVUZCUkUxQlFVRkNRM05RTm5vM1ZUbFVUSHBKUVVGQlJUaEJRVUZCVUhkQlFVRkdXa0ZMUlhod1dUSXhhR05CUVVGQldIZEJRVUZEUmtGQlFVTkhUM1IyY3lzeGJtSkliRzFCUVVGRFFrRkJRVUpCUlVGQlFWbHZSVTVNUlRneWFHeFpWMUZCUVVGWlNVRkJRVUZNWjBGQlFVUlpTSFk1UTJWaFIyaHNXVkZCUVVKcVowRkJRVUZqUVVGQlFVcEJaMGRCTDJSdllsaFNORUZCUVVkV1FVRkJRVUpCUVVGQlFUUk5jMmRCUVVkNGRsa3lSVUZCUVZwclFVRkJRVWhuUVVGQlFqUk1VbWR0WldKWFJqUmpRVUZCUW05UlFVRkJRV1pCUVVGQlNVRkZZMEZFTlhWWlZ6RnNRVUZCUjNCQlFVRkJValJCUVVGSWJUUXhkMlV5U0VKMll6TlJRVUZCWmtWQlFVRkJaSGRCUVVGTlZVeHdLMWhvWlVwNGFsbEhVbWRaVDBKcGEwZFFVVmxYUWpCalprMUtXV1ZDWjFsSFIwRkJTa0ZOV1RBMWJXVnBTbEZFVFc5RWVYSkhRV0ZSTkdkYWIwOUpRV2REUzBsM1RsQkJTR2xqV1RKQ2ExaHpaelJuV1VkV1oxbFBjR2x0YTFCQmQwNUVSRFJTYldaTlFtZDVUV3BGZDAxRVJYZE5jazFuUWxWRmNFeHRiVTFFYVRoWmJucEdlUzkzUTNsSk1FTnJNRU5PU1VGSlFUZENNRXhHVVVJMGJrOHlVakozTUVSSlVYZEZhRFJRYWxoMFFrcExhMmhDSzFWd2NIRlpkMjFNYkRReVdtTlVVMlZQV0VaSlIxRkVTelZEUkZJeFFXZDJWV3R2V0hWSGJUWlhaazgyVW1WbGN6Wm1TVWd2TWl0SmVXWnNjVTEyVFZNdlUxZGxURWQ1YzFoUVJYWlpkRWRxTmxCTFVEbHlUVzR4TDFaT1ZEQjZOVGRyV1hCT2JHOU1OazFaVkZocGMxSnFjMkl4VTBSa1JFNU1aRWxFTUUwd2RFNXZiQ3ROZVZOS2RsSTNNRmt6T1VNclowRnBTR1JCUVVGQlpVcDRNVlpHTVV4SVJtTlpVSFVyWTNJNWExb3pXRll5WkUxaFpISkNMemMwVlhsS2RYRnRkVEpWVmtaak1UQnZRVk5ITTFGMWJDOWhRelZUUTNZeU5FUk1VV3MzVlRJNU5uQXlhSEY2VW1sTFV6UmhZVGRVUW1sRloweFVVMFZ3U2tZMldVbE1NRkpMVm0xaVRtVTNXV1F6WW1ScVVXNXpZMGhuTkUwdlVFMWxaQzl1YldWalkyOW9RemcyUlRrd2JuVnFSVXBuVkVOSlRIWkNibTlTT0VKdFowZFFTbnBuWWxKcFozUkdURzEyVEhsNVNFOUVlVE5DTjI1bE0wOUdRVTlzT0RoUVUxbHpaVkJzYkdaTVNub3JlRFZ2WmtOalZscEhVVEowY1V4a1FraFlWSEo1ZW5Sb1ZFcFRLMFJ0ZUhORldWRlNhVEpQYjNwemMwRlZTSGhrWldOMmVUWjFLelY2TnpabGMxSk9NMGs1TTA1Sk5YSlZkRmd4WVZrM1Z5dG5hVGs1Wm5KcVJYQndTbWh4WkdsVWNHZHhOM0YxSzNZNE5GZExjR0ZpTlRSWGMwWTJUVXBPSzNBeVF6YzJTV1ZzWlU1dVREVnlSMVkzUjFKcVNrUldkblJCWnpaWWFtcG5MMWRzYnprMWRuZzBVbkJPZUhGWlJUWnZSVXRRUjFsMU5YTlNaM1E0VDFCV1QzRlFlV2xrVVRCRFdUUkxiMGsxUTNKREswZEplV2hhTUROdFluSndUbGN3YkU5eVlXeHFUWHB4V0hwU1oxcE5SVU5xTUVOMVVqWjNUWEl6UWxGbmRuWXphRFJNVVZRd01Xa3laMjlYYzFCaUwya3ZUWFp2WkZaVWIyOTJWVVZhWlVsNVlXeExOVE5VT0ZRNWFsVmxTRFptVkdoSk5XbEpWQzlvVUM5Uk1rWm1jemx2Yms1R2NGSlViV2t4UjFKdVpYSXJhMlEzUm5WUk5qbFNSVFI1Vmxwa1luRnJSVXR0TTBWemQxbHBZbVJOTnpKc1ZDczVVR2hqYnpOaU5WcEVWUzlrZGxvd1NXRnpRMUZFY2xSalkycGpZV3BWV0hFellUbDZlR1k1TDJWVU5sZ3lkREpJU1VkbU9GQXhUV05OWjBReFZ5OVJWVlJEV0VkNmIyWmpaWFpaWlVwVFYwaFdSRVo1UWxOVlFteDNlV2RSZG1KWVlVcFJhbGcyTTA5S1NqUnBNR2xLTUdvd1RYTldWRzV0WWk5R2FFZENXbXBUUlVsdlVTOW9LMmxVVTJoNE4yeGpNbFl3T0VvMU1FSlhUalJJUTNCcVFXdHJkM0l2YTFCRldFRndSRmxLZG5rdlkwUkxTRXd2YXpWTmJVWjJXbGhsVVVSRVdGQnlPRzVFWjB3NVFsSkZRbGt4VldGNFdWUmtjRmN3VGpJd01sUXpLekJtV1RWclkybG5iakpFSzBsNU0wTmxhbXB2UldaaFFWcHhTRmhyYXlzMVkwRXZORWx3Wnl0UVNHNW5hMDlEVWpOU01FMUhhVEZEYmxOYWFtZFZOM3BYZVRSc2MzUkVkemRYYTA0MlJVcDVaRlpaZVROYWNuSTJOVEIwV0ZSeWNscHdWMHRsY0hoSVVtSXhVa1pvZG14aFJuWlJOa1JDWVd0cVVsZDJWWFYyWWt0bllUSTRlWFZGVTFnd1FYTkVVM2RyYkRoQlJXbzJRa2w2V1ZkVFRreENlWE5XUkdsMmNrUjNRVTVQSzFWcVVHd3ZSRFZpY0VWek5HVk9TalZZYm5OR1ZtWXZaVGh5TlZKRmVVbFljVE5yVjI1aFFrNTJZV0Z2YW1WNmJXeDJRVVEwZERSdFZsUTVTMVpLT0hCWVFVUkVVVEZNWmtKVGRtOXplbmgwTUVGNlZtTkpUMnhCZUZac09GVkpXRVU0TmtWRVYzZG5Nbk5WWkVoamJUaFRabUpFYlc0eVFXVXlUbTlYVTAxNFNDdFdiRTh4WTB4Qk1sVllSMGxoZVd4VVRXUjRTRmxrZFRSS2RYUmpPSGc1VkdaWUwxcEZTWGRIUmtJeEwzb3pTR2s0VlRod05qVTVhbUUwVW14VlVrcE9OMjFKV0ZWNlEybEtjMVUzV21GT1VXOHljVmRDYnpCNFowbHlXRTlYZEZrdlNteGFlVXg0Wm1sSmVEbGpNMjgyVGxwWkx6UTNMMmxxUmxGa05IRnVZVkJzYlZsWkszaDJWVWxXYkZJcloyUTJaMWg0TVdsWUx6RnpPSEpwZDNjdk1WZE9WbVIzUWpsWFV6SjZhMDFyT1ZoT2RHeHpOVmRqZURkelQwOXNTbGM1Y0RWUEt5OXNiUzh3VmpWbGRWcHRXR2c1TDBaSmMyTldOSEV4ZGtSUFRHMVBOMlEyY1c4dlNHbFBRa3hGUjNCV1p6WXlZWGg2UlVGdU5VZzFOREpwU0RSQlFVRkNORzVIVG1kYVIwSm5RVWRNTWxSMVpERTRabmN5V0hodE5HMVdPRUZTVW1kMU5XSjJLMUp4WVZwRWVrMW1RbXhKWTBSRmQyZElaMEY1V1hkeGVFRkJRalJ1UjA1bldrZENaMlp6U0VGM1FrRkdTbWh0V1VSNlRYZE5jVUZEVUdkQ1RVSjNUVWhsU25ocVdVZENaMWxJTlVKUFoxbEJVWEZOVERoQlFVRkJRVUZCVEdkQ2JVRkxTVUV6WjBWaFFWWTBRblJuU0d0QloyOURVbWRMU1VGMFNVUkdRVUZCWlVwNGFsbEhVbWRaVDBKcVRVZEtaMWxSUVVKS2FVUnRRV3RKUjJoMk9XZFFaMDFCUkhkSlFsZDNRalJ1UmpKUmQxVTNRMUZDVWtaaU5rZG5VWEZKYlVwcE4wNTRTVlZpYTNoYVdUaG5SM2RqYzA5RGRHRldUVU0yVWpCdGRXdFZkM05oYkZnclNGTmlMMGRxV0VodGJsQnNhelJNTlRFek5YTjZkRk14YjBGMEwyaERRVXc0UTJoUE0zVldkMk5ZVUZBeGVXeDZVVlZFYkdzemQyb3pZVThyUlNzdldWQjNRVTA1TkVaUVlVcEdNRFJKZDJsMVlWTTNkMHRrTTBOT2FsaERXQzlwUVdOcmRDdEZaVGRxU0hVelEyWXZhMDQwWjBOVksyaFpaRFIzZG1SU1RqbDFSbnB3YzJselVqYzVjemxUTWpOd2NGTnFZVTlTVURnMU1YRlhNMms1Um5GMFZIRnZLelZDVUc1TmNGWmFjekZqZWxWNmNHUkdSVnBXTVhWNE1EWnhTMDVqT1ZVd2FtcFFlRlZYY2pKUFJVdHFkMUpaVERsd2VGVkpTVVU1TWpjcksxcE1aVzlUVVZsc1JrMWhTVTFFY21aNmRHNU1UbkJJUVhOaEsxcFhUMGhGZG1WaVdEVTFhbEZQYlZFNFdqaDNXVGRGYlhwa2NFcFFSbmw0UkZVM1ZqTlBOWEZWVUhWSkx6bEhPVlp0UTBwdFdtWXZlVVZXVDJNNVFVNVpVVVpFZGtGQlFqUnVSekpPTTFGeVEwMUNVMFJVTWxwME9USm1Sa3A0ZW14eVNrNURUMWxXVmpabGRrd3pVRWhQTTBsU09HdEpVVFpQYWxoVFpqTnNNSFZOUkdkRFozVklTR2RPUjFSS2FIaG5PR1ZrVEV0bFpHTXJlbGd3YVZOWWMwcHZhMWMxYkhJeVQwcFRNemg1ZURGMVJXSlhkR3BHUzJaSWNYazViRGt2UzBsVlNtRTJSamxGY25rNVQzRkxlbFJGZVVoUlkwdE1RV1pvYlVscksydHpiM2xXVVVFOUp5a2dabTl5YldGMEtDZDBjblZsZEhsd1pTY3BMRnh5WEc0Z0lDQWdkWEpzS0Nka1lYUmhPbUZ3Y0d4cFkyRjBhVzl1TDI5amRHVjBMWE4wY21WaGJUdGlZWE5sTmpRc1FVRkZRVUZCUVV4QlNVRkJRWGRCZDFJeFRsWlJja1FyY3lzd1FVRkJSVFJCUVVGQlVXczVWRXg2U2tGTFJYaHdRVUZCUW1aQlFVRkJSbHBxWWxkR2R6WXlLM28zVVVGQlFXZDNRVUZCU1ZsYU1uZzFXbWhFVTNoUVRVRkJRVkpGUVVGQlIwdEhhR3haVjFGSWRqbERaVUZCUVVFMFFVRkJRVVJhYjJGSFZtaERRVmxFT1hkQlFVRk1kMEZCUVVGcllVY3hNR1ZFVEVsQlFVRkJRVUZJVlVGQlFVRlBSM2gyV1RKRlRGSm5iV1ZCUVVGRlNrRkJRVUZDTlhSWldHaDNRVkozUVZCblFVRkJVbWRCUVVGQloySnRSblJhWlU1alNIUm5RVUZCY0hOQlFVRkNOVzVDZG1NelVVeHdLMWhvUVVGQlRWWkJRVUZCVFZWQlFWRkJRVUVyWjBGQlFVSmhRU3RuUVVGQlFVRkJPRTFCUVZGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFUUkJRVkZCUVVGQlJVRkJRV1ZLWVd4YVprUjZlakZCUVhORU5rRkJRVUZCUkZOaU1GZzNRVUZCUVVGT1NuWlNabk5CUVVGQlFVRTRUVVIzZDBGQlFVRm5RVUZuUVVGQlFVRkJRVUZCUWtGQlFVRkVaMEY1UVVGUlFVRkJRVUZCUVVsQlFVRkJTMEZCYjBGQlFVUXZRVUZCUVVGQlFVRkJRVVZCUVVGQlMwRkNORUZNUVVGQ1VrVmFUVlpCUVVsQlFWRkJRVUZCUVVGQlFVRkJVVUZCUVVGR2MyRlhaR2hCUVdkQlFVRkJRa0ZCUVVGQlVVRkZRVUZSUVVGQlFVSkJRV2RCUVZGQlIwRkJRVUZCVVVGQlFVRkJRVUZSVDJoQldrRkJRbEZCU1VGdWIwTjJRVUZCUVVsM1EyVm5TemhCUVVGQ05FRkJlRUZSU1VGQlFVbEJRbEZOUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGVlIxcEdXa0ZDUVRablNIRkVVVkJ2UVVGQlFWZG5VRzlCUVVGQlFVRkJRa0ZCUVVGQlFVRkJRVUZCUVVGQlVHOUJRVUZFTmtGQlFVRXJaMEZCUVZCdlFVRkJSRFpCUVVGQksyZEJRVUZRYjBGQlFVUTJRVUZCUVN0blFVRkJVRzlCUVVGRU5rRkJRVUVyWjBGQlFWQnZRVUZCUVVGQlFVWkJRVUZCUVhkQlFVRkRkMEZCUVVGRlFVRkJRbUpCUVVKQlFVRkJRVUZDYlVGQlRVRkJVVUZCUVVOM1FVRjNRVXRCUVVGQ1lrRkJSVUZFYjBGQlFVRkZRVUZSUVVGUlFVRTJaek12TDNkQlFUWm5TQzh2ZDBGQlFVRkZRVUpCUVVGQlFVVkJRV2RCUkVGQlVVRkNVVUZIUVVGalFVTkJRVXBCUVc5QlEzZEJUVUZCTUVGQlFVVkhRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVhkQlFVRkJRVUZMZDBGQlFVRkJRVUZCUVVSUlFVRTJaMFZCUVU5dlFrRkJRVUZCVVVGQk5tZEpRVUZQYjBOQlFVRkJRV2RCUVRablRVRkJUMjlFUVVGQlFVRjNRVUUyWjFGQlFVOXZSVUZCUVVGQ1FVRkJObWRWUVVGUGIwWkJRVUZCUWxGQlFUWm5XVUZCVDI5SFFVRkJRVUpuUVVFMloyTkJRVTl2U0VGQlFVRkNkMEZCTm1kblFVRlBiMGxCUVVGQlEwRkJRVFpuYTBGQlQyOUtRVUZCUVVOUlFVRTJaMjlCUVU5dlMwRkJRVUZEWjBGQk5tZHpRVUZQYjB4QlFVRkJRM2RCUVRabmQwRkJUMjlOUVVGQlFVUkJRVUUyWnpCQlFVOXZUa0ZCUVVGRVVVRkJRVUZCUVV4blFtMUJTMGxCTTJkRllVRldORUowWjBoclFXZHZRMUpuUzBsQmRFbEVSa0ZCUVVGQlNVRkJRVUZCUVRZNFJISlJRVXhCUW1OQlFVRkZUMEZSWTJWQlVtTXJRVlJqZFVGUlRYVkJVMk1yUVZSalpVRlNZMDlCVVVneGRsQnJSa0ptYlRoMUwydEdRbVp0TjNKUFRVWkNaVTl6Y1N0TlJrSmxUVVJ5VVZnMWRreDJOa0pCVkRaMU4zbzFMMHhSUlRWTGRYSTFRVkZGTlV0MWNqVkJRVUZCWjBGQlFVRkJSSE4zVDNwQlFYTkJTVkZCUVVGUk5FSkNlRFJDUm5vMFFrNTVORUpCZDJOSFNXazRRa3BxV1RkQlVrVXdUbXB6UWsxb1dWWkZWRTE1Um1kSWRYVm1jMFpDWm5VMWQzWTBSa0ptTkd0a1p6aHRSRE5aVDBSQ2FHUkRkMk50UTBGd1pFZEJkMFJ6ZDFncmQzSnVOMEpSV0RkMVkwd3JMMlpYWVVWb1MyRkZhRzlDUm5kblRFTjNhaXMyVW05QlFVRk5RVUZCUVVGQk5qQkVjWGRCVEVGQ2EwRkpaMEZCUVZFMFFrSjRORUpHZWpSQ1RuazBRa0Y0VVVkTGQwVnBTbXBWVWs1cVkzcEdhR051VEdkRk1FNXFTVmRHUVZsQ09FeHFNa0pSV0RKMVREYzJRbEZZTm0xbmIwaElRV05MUVZGbmMwTkJSV1pGZUd0YVNtaHJXa0UyYzBZcmNqWTBPV2RWUmpseWFTc3JkakV4UW5kdlMwSjNSV0ZEUVVWQ1EwUnJRa2RUVlZwSFUxVmFRVUZCUVVGQlNVRkJRVUZCUVRWSlJIZG5RVTVCUWpoQlFVRkZUMEZSWTFKR1oxRllUbWxSTTBWVE5FSkZkMFZIVEhkRmJWQjNSVEpJZDBWWFRubFZNa2gzUlZkQlpsTkNlVVpSU2tGUlQxSnJVVVZFUTFaVVNXVjJOaTlDUVU5VlFYZEpWa0YzVGpaQmQxRkNTbmRSUkVWM1RVUjNhRFE1U0ZBM1JERlFRV3RLVUVSVlFWUXdZMUJtTjJRdmMwMURRVFZyUlVGNGQwVkJNVEJEUVhaWlJFRjRUVVZCUVUxQlFVRkJRVUUwU1VSelFVRk9RVUpyUVVsblFVRkJVVFJDUW5oRlpVRlNZeXRCVkdOU1RHZEZTRTE0V1ZaQ2QxbElTWGxaZGtGVVVWUkphVmt3VG1wSlYwWkJXVUk1V0haQ1ZWRnVOV2swZGpWRFZraENhMmswU2tOblJVVkpaMUZDUTJsQlQwVm9TV05GYUVsRWMwSXdOMGQyTjFCNUsyTnFTU3RtVEVGVVJXRlBMMk5DUTA1blJVRlJSVVV5UVdvcmMxSk5ZMFZvU1dORmQwRkJRVUZKUVVGQlFVRkJOekJFZGxGQldFRkRUVUZCUVVWMVFWUTRRbEJuUldaQlVsbDVUbmxWTWtab1kyNUdhRkZJUVZGWmJVcDVWVzFCUTJOSFFVRmpWMEZDWXpKQlFVVm5RbEZKUmtGM1ZWRkNNa2xJUldkWlFrVjNZMUpDWjBsSFFuWTNVVUpvUVVkQmFIZEdMM1l6U0haMk9FRkNVVlZDUVV3M1NFRlJUVUo0ZDFsU1FuZFJTRUZuVmsxQ1FWaHNRbWRGUjBGbldWRkNkamRXUW1kRlIzSk5ZMEpCZDFWR0wzWXpTSFoyT0VGQ1VWVkNRVUZCUlVGQlFVRkJRVTkyUVRZd1FVTjNRVmhCUXpCQlRWRkJRVUZSTkVKQ2VEUkNSbm8wUWs1NU5FSkJlVFJDU25vMFFrNTRORUpHZHpSQ1JYZFZUMEZUT0VKS1oxbFFRVkZaVjBoM1JWZE5hbU5DVUdkRmJVbG9ZMWROVW1OQ09XSjZOVUpSV0RWMlRIWTFRbEZZTlhVMmVtcENVVmhxY2t0MmFrSlJXR3BMTHpjeVFuaEZSMWxCV1ZCQ1VVMUdRVkZhT1VKU1FVZEJVMVZHUVZGelVFWkJSVUpCTmpCR0sySjVOeXRuVVVVcmNuVTRLMlo1TUVKUFUzSnhLMUZGUWs5VGNuRXJVVU5KZERCR1FWRldTa0pSU1VkQ1FXTlNRbTlCUjBKUlJXaENVVGhNUWtGRlFrRkJRVUZCUVVWQlFVRkJRVUUzYzBSUFowRllRVUZCVkV4blJTOUJWRFJDU0hkRlYwNXFZMEpPYUZsWVNuaFpWVUozUlVkSmFXTTVRMmRaU0VKUloxcEVUWE5PU1VGelEwaFJkMlZEZHpCTFEzWXlOVU40ZDB4QllrMU1TVkUwVEVSUlkwcHJkMnRDUTJkSEswTlJTVXRFVVhOa1F5OHllRU4zYjBGQlFVRkJRV2RCUVVGQlFVUjFRVTgwUVVGelFVVlJRVUZCVVZsRFFuZzBRa1o2V1d0T2VWbEJSWGxGVWsxNFJYcEJaVFk0TDFGVlJpOWlla1pCVVVGR1FtWTRRVTkyTjJGTVptdEVkVUZZTDBGTlZ6Z3ZVVlZHTDJKNlJrRlJSRGt6WjBaUEwzUTRRVUZCVVVGQlFVRkJRVFk0UkhKUlFVUkJRVGhCUjNkQmFFRkJRVUpHYWtWWVFYYzBRa0o0TkVKR2VqUkNUbmswUWtGNU5FSktlalJDVG5nMFFrWjNORUpCZVUxV1RYcFZha0YxVlVKQlprczRLMUZWUml0aWVUY3JVVlZHSzJKMWN6UjNWVVkwTm5seU5IZFZSalE1YTJzdlpHdERaM2RGUWtGVGQwWXJZbmszSzJkUlJTdHlkVGdyWm5rd1FrOVRjbkVyVVVWQ1QxTnljU3RSUTB4bU1HdEJRVTFCUVVGQlFVRTRUVVIzZDBGTVFVSnpRVXBCUVVGQlVWbEJRbmhaUVVaNldVRk9lVmxCUW5wTmVVWm9WVVJFWjBWeVFWTkpiVXAzVFRCT2FFMXBTbXBSTWsxb1dWVkNaMGgxZDFBM09FSlJWVUpDVFVSS1FWRmpSa0ptTnpVemFsbEpRMmMwUWtKUlVYRkNRVlZDUkdkdmFrVjRiMkZLYUc5aFFUaE5SaTkyYmtwM1VEYzRRbEZWUWtKTlJFcEJVV1p1UTJkcUt6QjNVVWRDWjFGQ1RFRm5UQzlwWjJGS2VHdGFTbmh2UVVGQlVVRkJRVUZCUVRoQlJIZEJRVWxCUWtsQlNHZEJjVUZCUVVKUVowVXdTbWxKUjBaQ1dWaEplRlY2UlZOTlZrMTZWV3BCZDFsQlFuaFpSVVo2TkVKT2VWbERRWGswUWtwNk5FSk9lRFJDUm5jMFFrRm1VVmxKVTBWM1NWTkdVbXA2YXpWNVZHOXllbVkzTkVKQlVVSkRUVEkxTDNkVlJpODRaWEkwZDFGRk5EWjFjalIzVVVVMGQwdG5RVk5CZUVsRFFYaEpSRzlrTDNOUlkwaEJTM2hDVURjMGVtSnVMMEpSV0M5MVl6QkNRMUI1YmtKUFQzSnhLMDFGUWs5UGNuRXJUVUZCUVVGRVFVRkJRVUZCVDI1Qk5tTkJRM2RCV0VGRFRVRkJRVVZJU25kaldFSjRZek5HZW1OdVRuZE5UMEZSWTJWQlVtTXJRVlJqZFVGUlRYVkJVMk1yUVZSalpVRlNZMDlCVVV0UGJYQnZZMjF3YjJOdGNHOWpiWEJ4TW5WbVZVWkNabGMxZFdaVlJrSm1WelZ4VGpoRlFrNHJiM0ZPT0VWQ1RqaERjWEJ4WVVoS2NXRklTbkZoU0VweFlVRlNhMFk1WW0wMU9WRlZSamxpYlRVNVpucElRazRyYjNGT09FVkNUaXR2Y1U0NFFVRkJRVUZCUWtGQmVHZEJRa0ZCUVVGQlFVRkNRVUZSUVVGQlFVSkJRVUZCUVVGQlEwRkJZMEZDUVVGQ1FVRkJRVUZCUVVSQlFWRkJRM2RCUWtGQlFVRkJRVUZGUVVGUlFVUjNRVUpCUVVGQlFVRkJSa0ZCYzBGRmQwRkNRVUZCUVVGQlFVZEJRVkZCU0dkQlFrRkJRVUZCUVVGTFFVTnpRVWxuUVVKQlFVRkJRVUZCVEVGQ1RVRlVVVUZFUVVGRlJVTlJRVUpCUVdkQldVRkJSRUZCUlVWRFVVRkRRVUUwUVdGQlFVUkJRVVZGUTFGQlJFRkJaMEZrWjBGRVFVRkZSVU5SUVVWQlFXZEJabWRCUkVGQlJVVkRVVUZHUVVKWlFXaG5RVVJCUVVWRlExRkJSMEZCWjBGdVFVRkVRVUZGUlVOUlFVdEJSbGxCY0VGQlJFRkJSVVZEVVVGTVFVTlpRU3R1Wkd4a1YyeFRXbGRrTVdKSFJubGtNbFl4WVZoa2JHUlhiRmRhV0VwNllWYzVkVWxFUlhWTlNHUnNaRmRzU0ZwWE5XeGpiVVl3V2xkUloxbHVhMmRqTTFwdVRXNVNNRnBwUW0xamJUbDBTVVZhZG1KdVVteGlSM2gyU1VoQ2VXSXljR3haTTFGMVlVaFNNR05FYjNaTU1scDJZbTVTYkdKSGVIWk1iVTUyWWxGQ00wRkhWVUZrVVVKd1FVWkpRVnBSUW01QlNGVkJZa0ZDYUVGSVNVRmtkMEpzUVVoVlFXRlJRak5CUjFWQlpGRkNjRUZHV1VGYVVVSjVRVWhOUVdGUlFuWkJSelJCU1VGQmVFRkRORUZOUVVJelFVZFZRV1JSUW5CQlJXTkJXbEZDZFVGSFZVRmpaMEpvUVVoUlFWcFJRbXRCUTBGQldXZENOVUZEUVVGamQwSXlRVWRqUVUxblFqQkJTRkZCV21kQlowRkhXVUZqWjBKMlFVY3dRVWxCUWtkQlJ6aEJZbWRDTUVGSFZVRmlRVUp6UVVjNFFVbEJRbmRCU0VsQlluZENjVUZIVlVGWmQwSXdRVU0wUVdGQlFqQkJTRkZCWTBGQk5rRkRPRUZNZDBKdFFVYzRRV0puUWpCQlIxVkJZa0ZDYzBGSE9FRk1aMEpxUVVjNFFXSlJRVUZCUVVsQlFVRkJRVUZCUVVGRFowRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVVJuUlVOQlVVMUNRa0ZGUmtGUldVSkNkMFZKUVZGclFrTm5SVXhCVVhkQ1JGRkZUMEZST0VGQ2JVNXdZMjFPYzFwUmFHdGlNMlIxWWtjNWFGcEJVbkJpYlZwMlJFaE9hRnB0Vm1aak0xWnFXVEpXZW1OM2JIcFpWMXBzV0ROa2FHTnRORWhqTTFacVdUSldlbU4zTlhwa1YwNXFXbGhPZWxneVRuQmpiVTV6V2xKR2VtUlhUbXBhV0U1NldESTFkbGd5VG5CamJVNXpXbEZrTTFsWGJEQmhWelZ1Ukc1a2FHRllVbkJpYldSbVdUSnNlVmt5ZUd4Q1NHUm9ZMjAwVEdGWE5XMWlNVGxxWVZoS2FtSkhWVWRaTWtaMVdUSldjMEZCUVVGQlFVRTlKeWtnWm05eWJXRjBLQ2QzYjJabUp5a3NYSEpjYmlBZ0lDQjFjbXdvSjJSaGRHRTZZWEJ3YkdsallYUnBiMjR2YjJOMFpYUXRjM1J5WldGdE8ySmhjMlUyTkN4UVJEazBZbGQzWjJSdFZubGpNbXgyWW1vd2FVMVROSGRKYVVKNlpFZEdkVnBIUm5OaU1qVnNVRk5LZFdKNVNTOVFhVUZMVUVOR1JWUXdUbFZYVmtKR1NVaE9NbHA1UWxGV1ZVcE5VMVZOWjBscE1IWk1NV042VVhrNGRsSkdVa1ZKUms1WFVubEJlRXhxUlhaTU1GWlBTV2xCYVdGSVVqQmpSRzkyVEROa00yUjVOVE5OZVRWMlkyMWpkbEl6U21oalIyaHdXVE5OZGxVeFdraE1la1YxVFZNNVJWWkZVWFpqTTFwdVRWUkZkVnBJVW10SmFVRXJRMnA0ZW1SdFkyZGxSekZ6WW01Tk9VbHRhREJrU0VFMlRIazVNMlF6WTNWa2VrMTFZak5LYmt4NlNYZE5SRUYyWXpOYWJrbHFORXRRUjFKc1dtNU5LME5wUVdkUVIxcDJZbTVSWjJGWFVUbEpibVJzWkZkcmFVbEhhSFpqYld3MlRGZEdhMlJwTVRSUVUwbDRUVVJCZDBscU5FdEpRMEZuU1VSNGJXSXlOVEJNVjFwb1dUSlZaMXB0T1hWa1F6RnRXVmN4Y0dKSWF6bEpibVJzWkZkcmFVTnBRV2RKUTBGblNVaFdkV0ZZVW5wTVdFSnNZMmt4YkdKVU1HbE5WRUYzVFVOSloxbFlUbXBhVnpVd1VGTkplRTFFUVhkSloyOW5TVU5CWjBsRFFtdGFXRTVxV2xjMU1GQlRTWGRKYVVGMlVHZHZaMGxEUVdkUVJ6RndZek5PY0dKdFkzUmFNbmcxWTBkbloyRkhPWGxoV0c5MFdWZFNNa3hZWnpsSmFrRnBTVU00SzBOcFFXZEpRMEU0V2pKNE5XTkhaMmRhTW5nMVkwZG5kR0p0Um5SYVZEQnBXVEpzZVZreWVHeEpaMjluU1VOQlowbERRakZpYld4cVlqSlNiRkJUU1cxSk0yaEdVVlJCZUU5NVNVdEpRMEZuU1VOQloyRkhPWGxoV0c5MFdWZFNNa3hZWnpsSmFrVjNUVVJCYVVsSFVUbEphVUpPVGxSQmQweHFWVEZOZVVFMVRrUkJkVTlFVVRSUmVra3hUbWswTWs1NmEyZFBWRkYzVEdwbk1FOURRVEZQVXpSM1RVUkZaMDU2VVhwTWFrVXlUVVJCZDAxRVFYZE5SRUYzVFVSRlowNVVhM1ZOUkVGNFNVUlJOVTlUTkhsUFJGcEVUbFJyZFUxRVFYaEpSRWt4VGxNME1FNVVRWGROUkVGM1RVUkJkMDFFUVhoSlJFa3hUbWswTWs1NmEyZE9WR04xVG5wTmVrOVVhelZQVkdzMVQxUnJOVTlUUVRGTlJFRjFUbFJWZWtsRVZUTk1hbU42VFhwck5VOVVhelZQVkdzMVQxUnNWRTlVVVhsTWFrVjNUa05CZVU1VVZYVk9SRlZuVDFSUmVVeHFSWGRPUTBFd1QxUnJkVTFxWnpGUFZHczFUMVJyTlU5VWF6VlBWVTAxVGtSSmRVMVVRVEJKUkdNd1RYazBlRTVwUVROT1JGRjFUa1JKTTBsRWF6Qk5RelEwVGtSblowNVVRWGRNYWxVeFRYcEJkMDFFUVhkTlJFRjNUVVJGWjA5VVVYZE1hbWN3VDBod1RrNVVRWGRNYWxVeFRYbEJOVTFUTkROT1JFazFUMVJyTlU5VWF6VlBWR3MxVVhwSk0wNTVORFJPYWxWblQxUkZkVTU2VVhsUFZHczFUMVJyTlU5VWF6VlBVMEUxVG5rMGVrOVVZMmROYW1ONVRHcEpNazU1UVRWT2VUUjZUMVJqWjA1RWF6Qk1hbWMwVDFWTk5VNTVOSHBQVkdOblRucEZNMHhxVlRGUFUwRjVUbnBqZFU5RVdURkpSR2MxVDBNMGQwNVVWV2RPVkVGM1RHcFZNVTE1UVRSUFZHZDFUVVJWTVZGNlkzbE5lVFI1VFVSTlowOUVhelJNYWtFeFRsTkJOVTFFVFhWT2VrRTFTVVJqZUU1NU5ERk9WR3RuVDFSQmVreHFZM2RQVTBFd1QxUlJkVTlFWnpWUmVtdDNUWGswTTAxRWEyZE5hbU41VEdwSk1rNTZhelZQVkdzMVQxUnJOVTlVYTJkT2VrbDZUR3BKZDAxNlFYZE5SRUYzVFVSQmQwMUVSV2RQVkVWMVRucFJlVTlVYXpWUFZHczFUMVJyTlU5VFFURk5SRUYxVGxSVmVrMUVRWGROUkVGM1RVUkJkMDFUUVRWTlV6UXpUa1JKTlU5VWF6VlBWR3MxVDFSck5XVnBTV2RNZWpSTFNVTkJaMGxFZUc1aVNHeDNZVU5DYm1KSWJIZGhRekYxV1ZjeGJGQlRTbXRpTTJSMVlrYzVhRnBEU1V0SlEwRm5TVU5CWjJSWE5YQlpNamxyV2xRd2FVcHBUalJTVlVWM1RXcHphVU5wUVdkSlEwRm5TVWRvZG1OdGJEWk1WMFpyWkdreE5GQlRTWGhOUkVGM1NXbENhMUJUU1dkVVZGRTFUa00wTUU1NlZXZFBWRkV5VEdwWk5GRjZTVEZOZVRSNlRVUlZkMDFFUVhkTlJFRjNUVVJCZUVsRWF6Qk9hVFF5VDBOQk1VMTVOSHBOYWtWblRucFJNa3hxV1RWT2FVRXhUWGswZWsxcVJXZE9SR3N3VEdwUk5FNUZUVEZOZVRSNlRXcEZaMDFxVlhwTWFrMTNUbE5CZVU1VVRYVk5la0V4VFVSQmQwMUVRWGROUkVGM1RWTkJNVTE1TkhwTmFrRTFUMVJyTlU5VWF6VlBWR3MxU1VSUk5VNUROREJPZWxWblRsUk5kVTE2U1hkUFZHczFUMVJyTlU5VWF6VlBWVTB6VGtSWmRVNXFhekpKUkZWNlRHcE5lVTFFYXpWUFZHczFUMVJyTlU5VWEyZFBWRkV5VEdwWk5FbEVTVEZOZVRSNlRVUlZaMDlVVVRKTWFsazBTVVJSTlU1RE5EQlBSRTAxVDFSck5VOVVhelZQVkdzMVVYcHJNRTVwTkRKUFEwRXpUa1JaZFU1cWF6QlBWR3MxVDFSck5VOVVhelZQVTBFelRrUlpkVTVxYXpGSlJHc3dUbWswTWs5RFFUQlBWRkYxVGtSak1VMUVRWGROUkVGM1RVUkJkMDFUUVRWT1JGbDFUbXBvTmxSVVdURk5VelExVDBSTmQwMUVRWGROUkVGM1RVUkJlRWxFVVhoUFF6UXhUVVJOTlU5VWF6VlBWR3MxVDFSck5WUkVWWHBPUXpSNFRYcE5aMDFxV1RGTWFra3lUbFJyTlU5VWF6VlBWR3MxVDFSc1JFNVVSVEZNYWtrMFRrTkJlVTVFUVhWT2VsRXlUMVJyTlU5VWF6VlBWR3MxVDFOQk1FOUVVWFZPZWxrMFNVUkpNRTFETkRKT2FsRTFUMVJyTlU5VWF6VlBWR3MxU1VSUk1rNVRORFJPYWxWblRXcFpNVXhxU1hwUFJHczFUMVJyTlU5VWF6VlBWR2hOVFhwUk5FeHFRWGhPVTBFd1RWUm5kVTVVUlRSUFZHczFUMVJyTlU5VWF6VlBSVTE2VFdwcmRVMVVXVFZKUkZFd1RYazBkMDE2V1RWUFZHczFUMVJyTlU5VWF6UkpSRTE2VDBNME5FOVVUV2RPUkZsNVRHcHJOVTlVYXpWUFZHczFUMVJyTlU5VVoyZE5lbGsxVEdwWmQwOVRRVEJPYWtsMVQxUnJOVTlVYXpWUFZHczFUMVJyTlU5Rlp6Qk9hazVYVG5wUmVFeHFhekZOUkdzMVQxUnJOVTlVYXpWUFZHaEVUa1JaZWtsRVl6Rk5hVFI1VFdwbk5VOVVhelZQVkdzMVQxUnJORWxFVVROTlV6UjRUVlJyWjA1NldYZE1hbXMxVDFSck5VOVVhelZQVkdzMVQxUm5aMDVFWjNoTWFrMDBUMU5CTTA1cVFYVlBWR3MxVDFSck5VOVVhelZQVkdzMVQwVm5NVTFVWjNWT2FrVjVVWHBWZVU5RE5EUlBSRWxuVG5wWmQweHFhelZQVkdzMVQxUnJOVTlVYXpWUFZHZG5UbFJOTTB4cVFYZE5VMEV6VGxSSmRVMXFTVFJQVkdzMVQxUnJOVTlVYXpWUFEwRXhUWHBqZFUxRVFYaEpSR013VFZNME5VNVVRVFZQVkdzMVQxUnJOVTlVYXpSV2FsRXlUV2swTlU5VWF6VlBWR3MxVDFSck5VOVVhelJUUkZsNlRVTTBlazlVUlRWUFZHczFUMVJyTlU5VWF6VlJlbGt5VFZNMGVFOURRVEJPYWtsMVQxUnJOVTlVYXpWUFZHczFUMVJyTlU5RFFUSk9la0YxVDBSbk1rbEVVVEJOZVRSM1RucGpOVTlVYXpWUFZHczFUMVJyTkVsRVdURk5VelExVDBSTlowNUVSVFJNYWxWM1RYcHJOVTlVYXpWUFZHczFUMVJvTmtscFFYWlFaMjluU1VOQloxQkhaSE5sV0VKdlNVZGtjMlZZUW05TVZ6Vm9ZbGRWT1VsdGJIVmFiVGhwUTJsQlowbERRV2RKU0ZaMVlWZE9kbHBIVlRsSmFWbHFaVVZXUWsxRVRUZEpaMjluU1VOQlowbERRbTlpTTBwd1pXa3hhRnBJV1hSbFJEQnBUVlJCZDAxRFNXZGFSREJwU1VVd01FOVVWWFZPVkZrMFNVUnJlazlWVFhsT1ZHTjFUMVJyWjA5VVRUVkpSRmw0U1VSak1FMXBOSGROVTBFeVRWTkJNRTlVVFhWT1ZGazBVWHBaZUVsRVNURk9VelExVDFOQmVVNVVZM1ZQVkd0blRsUnJaMDVFYXpGTWFsVXlUME5CTVU5VlRUTk9SRkYxVFVSRlowNVVhMmRQVkZGNFNVUkpNVTVUTkRWUFUwRTFUa1JGWjA1RWEzcE1hbFV5VDBWTk5VNUVSV2RPZWxGNVRHcEJlRWxFWXpCT1F6UjNUVk5CTlUxNmEyZE9SR3N4VEdwVk1rOURRVFZOZW13MlZGUlZlazFwUVhsUFJFMTFUVVJKZUZGNlZYcE5hVUY1VG5wTmRVNVVRVE5QVkdzMVQxUnJOVTlVYXpWUFUwRXhUV3BSZFUxRVdYbEpSRWt5VG1sQk1VMVVVWFZPVkZsNFNVUkpNazVyWnpCUFJHTjFUa1JSZVZGNlVUTk9lVFExVFdsQmVVNXFXV2RPUkdOM1RHcEJkMDFUUVhsT2VrMTFUbFJaTkVsRVVUTk5RelIzVFVSRlowMXFaM3BNYWtGNVRWWlpNVTVxVVhWUFZHc3lVWHBSTTAxRE5IZE5SRVZuVGxSWk5VeHFaekZPZVVFd1RucFJkVTFVVVROSlJGVXpUa05CTUU1NmEzVk5SRWt5U1VSVk0wNUZaekZOYWtsMVQxUmpNVkY2VlhsT2VUUTBUa1JqWjA1VVl6QkpSRlY2VFdsQk1VNXFhM1ZQUkZFMFQxUnJOVTlVYXpWUFZHczFUMU5CTVUxNlNXZE9WRmt3VEdwck5VNXNXWGxQUkUxMVRVUkplR1ZyTURGTlJFVm5UbXBKZVV4cVJUVlBWR3MxVDFSck5VOVVhelZQVkd4RVRrUmpNa3hxV1RWUFUwRXlUV3BKZFUxVWF6VlBWR3MxVDFSck5VOVVhelZQVTBFd1RsUmpaMDVxVVhoTWFtYzFUMFJyTlU5VWF6VlBWR3MxVDFSclowNUVWVE5KUkZreVRtazBlRTlVYXpWUFZHczFUMVJyTlU5VWF6VlZlbEV6VG1rME1rOVVhMmRPZWtWM1RHcEZOVTlVYXpWUFZHczFUMVJyTlU5VWEyZE9WRUY0U1VSamVFMUROSGhQVkdzMVQxUnJOVTlVYXpWUFZHczFVWHBWZVU1VE5IcE5SRTFuVG5wRmQweHFSVFZQVkdzMVQxUnJOVTlVYXpWUFZHdG5UbFJSTVVsRVdUVk5RelF4VFVSRlowNVVVVEZKUkZreVRtazBlRTlVYXpWUFZHczFUMVJyTlU5VWF6VlZlbFY1VGxNMGVrMUVUV2RPYWtsNVRHcEZOVTlVYXpWUFZHczFUMVJyTlU5VWEyZE9WRUY0U1VSWmVVMXBOSGhQVkdzMVQxUnJOVTlVYXpWUFZHczFaV2xKWjB4Nk5FdEpRMEZuU1VSNGJtSkliSGRoUTBKdVlraHNkMkZETVhWWlZ6RnNVRk5LZWxsWFdteFlNMDR4V1RKT2JHTXpUV2xEYVVGblNVTkJaMGxJVm5WaFYwNTJXa2RWT1VscFdXcGxSVlpDVFVSUk4wbG5iMmRKUTBGblNVTkNiMkl6U25CbGFURm9Xa2haZEdWRU1HbE5WRUYzVFVOSloxcEVNR2xKUlRBeFRVUkJaMDlVV1hsUmVrMTVUbmswZUUxRVdXZFBWRWw1VEdwak1VMTVRWGxOUkVWMVRWUkJNVWxFWnpOUFV6UXdUbXBOTlU5VWF6VlBWR3MxVDFSck5VbEVaekpNYWxsNlRXbEJORTVFVFhWTlZHczFUVVJCZDAxRVFYZE5SRUYzVFZWTk5FNXBOREpOZWtsblRucEplVXhxV1hkUFEwRTBUbWswTTA5VVRXZE9ha2t6VEdwQk5VMTZRWGROUkVGM1RVUkJkMDFFUldkUFJGbDFUbnByZWtsRVZYbE9hVFF3VFVSQmQwMUVRWGROUkVGM1RVUkJlRkY2WnpKTWFtTTFUWGxCZVU1RVNYVk9la1Y2U1VSTmVFOUROSHBPYVVFMFRtazBNazVVUVhkTlJFRjNUVVJCZDAxRVFYaEpSRlYzVFVOQmVrOUZUVEpQUkVWMVRtcFJlVWxFWnpKTWFsa3hTVVJyZUUxNU5IbE5SR05uVFdwUmVVeHFZM2hOZVVFMVRWUk5kVTFxUVROSlJGVjVUbWswTUZGNmEzaE5lVFI1VFVSalowNXFTVE5NYWtFMVRXbEJOVTFVVFhWTmVsazBTVVJqZVUxcE5ESk5SR2RuVDFSRmVreHFUVEpQUTBFMFRrUk5kVTFVYXpWUmVtTTFUME0wTkU5VVZXZFBSR00xVEdwUk1rMTZhelZQVkdzMVQxUnJOVTlVYTJkT2FtTjVUR3BuTlU1RFFUVk5ha2wxVG5wVmVrbEVVVFZQVXpRMVQxUnJOVTlVYXpWUFZHczFUMVJyTlVsRWF6Sk5ibkJPVG5wVmVFeHFVVFZQUTBFeVRrUkJkVTlVVlRKVVJGRjVUMU0wTlUxcVJYZE5SRUYzVFVSQmQwMUVRWGhKUkUxNVRrTTBNRTlGVFRCTmFtZDFUVVJCTVUxRVFYZE5SRUYzVFVSQmQwMVRRWHBOYWtsMVRsUnJNRTFFUVhkTlJFRjNUVVJCZDAxVFFUQk5hbEYxVDFSSmQwMUVRWGROUkVGM1RVUkJkMDFUUVhwTmFrbDFUbXBWTWsxRVFYZE5SRUYzVFVSQmQwMVRRVEJOYWsxMVRVUmpkMDFFUVhkTlJFRjNUVVJCZDAxVFFYcE5hbEYxVGxSWk1VMUVRWGROUkVGM1RVUkJkMDFWZDNsT2VsRjFUMFJGZWsxRVFYZE5SRUYzVFVSQmQwMVRRVEJPZW1kMVRVUkJNMDFFUVhkTlJFRjNUVVJCZDAxVlRYbE9la2wxVDFSUk1rMUVRWGROUkVGM1RVUkJkMDFUUVRCT2VtdDFUMVJSZDAxRVFYZE5SRUYzVFVSQmQwMVRRWGxPZWtsMVRtcHJlVTFFUVhkTlJFRjNUVVJCZDAxVFFUQlBSRTExVFdwSmVFMUVRWGROUkVGM1RVUkJkMDFUUVhsT2VsRjFUWHBOZUVsRVVUUk9VelF3VGxSTmQwMUVRWGROUkVGM1RVUkJlRlJFU1RWT1F6UXlUMVJuZDAxRVFYZE5SRUYzVFVSQmVFbEVWWGhOZVRSNFRtcFZkMDFFUVhkTlJFRjNUVVJCZUZGNlNUVk9hVFI1VDFScmQwMUVRWGROUkVGM1RVUkJlRWxFVlhoT1V6UjZUa1JWWjAxcWF6Vk1hazE1VFdwQmQwMUVRWGROUkVGM1RVUkZaMDVVUlRGTWFtTTBUbXBCZDAxRVFYZE5SRUYzVFVSRlowMTZRWGhNYWxFeFRrUkJkMDFFUVhkTlJFRjNUVVJGWjA1VVJUQk1ha1V4VFd0M01FMXFTWFZPYWtFMFRVUkJkMDFFUVhkTlJFRjNUVk5CTUUxcVJYVk5hbXN6VFVSQmQwMUVRWGROUkVGM1RXdE5NRTFxVVhWT2VrMDBUVVJCZDAxRVFYZE5SRUYzVFZOQk1FMVVhM1ZPYWxsNlRVUkJkMDFFUVhkTlJFRjNUVk5CTUUxcVozVk5WRmt4VFVSQmQwMUVRWGROUkVGM1RWTkJNRTFVYTNWT2VsVTBUVVJCZDAxRVFYZE5SRUYzVFdsQk1FMTZRWFZOVkdNeVRVUkJkMDFFUVhkTlJFRjNUVk5CTUUxcVJYVk9SRTB4VFVSQmQwMUVRWGROUkVGM1RXdDNNMDFxVlhWTlJHZDZUVVJCZDAxRVFYZE5SRUYzVFZOQk1rNXFZM1ZOVkVsM1RVUkJkMDFFUVhkTlJFRjNUVlZOTTAxcVkzVk5WRTB5VFVSQmQwMUVRWGROUkVGM1RWTkJNazVxWjNWUFJFa3hUVVJCZDAxRVFYZE5SRUYzVFdsQk0wMTZRWFZOZWxVd1NVUlpNazlETkRKT2VrMTNUVVJCZDAxRVFYZE5SRUY1U1VSamVrMXBOSGxPZWsxM1RVUkJkMDFFUVhkTlJFRjRTVVJaTWs1cE5ETk9lbWQzVFVSQmQwMUVRWGROUkVGNVZFUmpNVTFUTkRCUFJHdDNUVVJCZDAxRVFYZE5SRUY0U1VSWk1FNTVORFJOUkVGM1RVUkJkMDFFUVhkTlJFRjVVWHBqTVUxNU5EQk5SRmwzVFVSQmQwMUVRWGROUkVGNVNVUlpNRTVUTkRWTlJGRjNUVVJCZDAxRVFYZE5SRUY1U1VSak1VMTVOREJOYWxsM1RVUkJkMDFFUVhkTlJFRjVTVVJaTUUxcE5EUk9WRlYzVFVSQmQwMUVRWGROUkVGNVNVUmpNVTFUTkRCUFZHZDNUVVJCZDAxRVFYZE5SRUY1U1VSWk1FMURORFZPVkZsM1RVUkJkMDFFUVhkTlJFRjRaV2xKWjB4Nk5FdEpRMEZuU1VSNGJtSkliSGRoUTBKdVlraHNkMkZETVhWWlZ6RnNVRk5LZWxsWFdteFlNMlJvWTIwMGFVTnBRV2RKUTBGblNVaFdkV0ZYVG5aYVIxVTVTV2xaYW1WRlZrSk5SRlUzU1dkdlowbERRV2RKUTBKdllqTktjR1ZwTVdoYVNGbDBaVVF3YVUxVVFYZE5RMGxuV2tRd2FVbEZNREZOUkVWblQxUlJla3hxWTNkT2EwMTZUWHBSZFU5VVZYbEpSR3QzVG1rMGQwMVVUV2ROYWtWNlRHcHJNRTFUUVRST2FsRjFUa1JOTkVsRVJYZE9RMEUwVFdwcmRVNXFRVFZSZWtWM1RrTkJNMDFVVFhWT2VtdDZTVVJGZDA1RE5IaE9WRlZuVG1wSmVVeHFRVEpKUkVWM1RrTTBlRTVVVldkT1ZFa3hUR3BOTVU1VlRYaE5SRkYxVFZSVk1VbEVTVEZOYVRRMVRVUkZkMDFFUVhkTlJFRjNUVVJCZUVsRVRYbE9hVFF4VGxSSlowMVVRWHBNYWtGNFQwTkJNVTFFUldkT1ZGbDFUV3ByZWxGNldUTk9VelF3VGtSUlowMVVRWHBNYWtGNFQwTkJORTlVWTNWUFJGRXhTVVJKTVUxcE5EVkpSR2MxVG5rME5FNUVWV2RPVkVreFRHcE5NVTVWVFRSUFZHTjFUMFJSTVVsRVdYbE5hVFIzVG1sQk5FOVVaMmRPZWtWNlRHcGpOVTE1UVRSUFZHZG5UMFJKTlV4cVdYZFBWVTB6VDBSbmRVMUVWVFZKUkdjeVRrTTBNRTE2WjNkTlJFRjNUVVJCZDAxRVFYaEpSRmt5VG5rMGQwNUVaMmRQVkVFeVRHcEJlRTE1UVRGTlJFVm5UMVJSZWt4cVkzZE9ibkJPVGtSak0weHFXVE5PUTBFeVRtcG9TVTVVU1RCTWFrMTVUbXROTVUxcWEzVk9WRUV6VFVSQmQwMUVRWGROUkVGM1RWTkJNazVxWjJkT1ZFMTZUR3BSTlU5RFFUSk9hazExVDFSRmVFMUVRWGROUkVGM1RVUkJkMDFUUVRGTmVrMTFUV3BWTWtsRVdURlBRelF6VDBSU1RVNVVTWHBNYWtGNVRWTkJNRTVFU1hWUFZVMHhUV3BKZFU5RWF6TlBWR3MxVDFSck5VOVVhelZQVTBFd1RrUkJkVTE2VFhsSlJGVjVUVU0wTTAxRVoyZE9SRTAwU1VSVmVFOUROSGhOZWtWblRrUk5ORk5FVVRSTmVUUTBUbXBrUkU1RVozaE1hazEzVG1sQk1FMTZaMmRPUkdNMVRHcEZkMDE1UVRCT1JFRjFUWHBSTVUxRVFYZE5SRUYzVFVSQmQwMVRRVEJPZW1kMVQxUm5aMDVFVVhsTWFtdDZUbXBCZDAxRVFYZE5SRUYzVFVSR1RVNUVXVFJNYW1Nd1RrUnJOVTlVYXpWUFZHczFUMVJyWjA1cVZUUk1hbGt5VGtWTk1FNXFaM1ZPVkVFd1NVUlpNazE1TkROT2FtTm5Ua1JqZVV4cVVUVlBWR3MxVDFSck5VOVVhelZQVkd0blRtcFpORWxFVVROT2VUUXlUbnBOTlU5VWF6VlBWR3MxVDFSck5VbEVXVEpQU0hCT1RsUkJlRWxFVFhwTlV6UTBUbFJuTlU5VWF6VlBWR3MxVDFSck5WRjZVVFJOYVRRMVRrUkpaMDE2VFhoTWFtY3hUMFJyTlU5VWF6VlBWR3MxVDFSclowNUVXVFJNYWsxM1RtbEJlazVFV1hWT1ZGRXlTVVJSTWs5RE5IcE5SRmxuVFhwWk1FeHFXVEpPYW1zMVQxUnJOVTlVYXpWUFZHeFVUa1JuZVV4cWF6Qk5lVUY2VDFSamRVNUVZekJQVkdzMVQxUnJOVTlVYXpWUFUwRXhUVVJGWjAxNmF6Tk1hbEV6VGtSck5VOVVhelZQVkdzMVQxUnNWRTVVVFhwTWFsazFUa05CZWs5RVNYVk9lbWN6VDFSck5VOVVhelZQVkdzMVQxTkJNVTE2VFhWT2Ftc3dTVVJOTWs1RE5ESk9hbGsxVDFSck5VOVVhelZQVkdzMVZYcFZlRTlUTkhkT1ZHZG5UWHBOZUV4cVp6RlBSR3MxVDFSck5VOVVhelZQVkd0blRsUkJkMHhxYXpWUFZHczFUMVJyTlU5VWF6VlBWR3RuVFhwTmVFeHFaekZQUkdzMVQxUnJOVTlVYXpWUFZHdzJTV2xCZGxCbmIyZEpRMEZuVUVka2MyVllRbTlKUjJSelpWaENiMHhYTldoaVYxVTVTVzVPTVZreVRteGpNMDFwUTJsQlowbERRV2RKU0ZaMVlWZE9kbHBIVlRsSmFWbHFaVVZXUWsxRVdUZEpaMjluU1VOQlowbERRbTlpTTBwd1pXa3hhRnBJV1hSbFJEQnBUVlJCZDAxRFNXZGFSREJwU1VVd2VVOUVaM1ZOZW1kNVNVUlJNVTVETkRSUFJHaEVUV3BuZDB4cVdUVk9lVUV3VG1wSmRVOUVTWGxKUkVrelQxTTBORTFxVldkT1JHTXlUR3BWTVU5VVFYZE5SRUYzVFVSQmQwMUVSV2ROYW1jeVRHcEZNVTFUUVRCUFJGVjFUVlJWTWsxRVFYZE5SRUYzVFVSQmQwMVZkM2xQUkd0MVRXcFZNVWxFVVRSUFV6UjZUbXBqZDAxRVFYZE5SRUYzVFVSQmVGRjZTVFZPVXpReVQxUmpaMDVFYXpSTWFrVjZUMFJCZDAxRVFYZE5SRUYzVFVSRlowMTZRVE5NYW10NVRXcEJkMDFFUVhkTlJFRjNUVVJGWjA1RWF6Vk1hbWMwVGtSQmQwMUVRWGROUkVGM1RVUkZaMDE2UlRKTWFsbDZUa05CTUU5VVRYVk5ha1YzVFVSQmQwMUVRWGROUkVGM1RWVjNNRTFVVlhWT1JFbG5Ua1JGTTB4cVVUVk9WRUYzVFVSQmQwMUVRWGROUkVaRVRrUkpNRXhxUVRWTmVVRXdUVlJCZFU5RVVYaE5SRUYzVFVSQmQwMUVRWGROVTBFd1RYcG5kVTFFWnpCSlJGRjRUVk0wZVU1RVkzZE5SRUYzVFVSQmQwMUVRWGhKUkZFd1RtazBlVTlVUldkT1JFVTBUR3BCTTA5RVFYZE5SRUYzVFVSQmQwMUVSazFPZWtsNFRHcFJNMDU1UVRKT1JHTjFUWHBOTUUxRVFYZE5SRUYzVFVSQmQwMVZUVE5OYW10MVQwUk5ORTlVYXpWUFZHczFUMVJyTlU5VFFUSk9WRkYxVFhwQmQwMUVRWGROUkVGM1RVUkJkMDFUUVROT1JFMTFUVVJOTUVsRVdURk5lVFF5VFdwSmQwMUVRWGROUkVGM1RVUkJlRWxFWXpGTlF6UXpUbnBWWjA1cVVURk1hbXN6VG1wQmQwMUVRWGROUkVGM1RVUkdUVTU2VVRSTWFtdDRUWGxCTWs1RVkzVlBSRXBFVG5wVk1reHFZM3BPUTBFeVRrUkJkVTFFYXpOSlJHTXhUbWswTTAxNlVXZE9ha2t6VEdwWmQwMVVRWGROUkVGM1RVUkJkMDFFUldkT2VsRTBUR3BqTlU5RFFUSk5WR3QxVDBSQmVGUkVVVEJPVXpSNlRucG5aMDE2U1hoTWFrVTFUV3ROTUUxNlkzVk9VMEY2VFZSTmRVNUVUWGhOUkVGM1RVUkJkMDFFUVhkTlUwRXdUV3BSZFU5VVp6RkpSRTE0VFhrME1VMUVaM2ROUkVGM1RVUkJkMDFFUVhoSlJGRjRUbmswZVUxcVRXZE5la2w0VEdwVk1FMXFRWGROUkVGM1RVUkJkMDFFUmsxTmFtYzBUR3BOTkUxcFFUQk9WRkYxVDBSbk5HVnJNRFZPVkdOblRrUnJNRXhxVFRGTmVrRjNUVVJCZDAxRVFYZE5SRVpFVDFSVk0wbEVZekZOYVRRd1RVUlZkMDFFUVhkTlJFRjNUVVJCZUVsRVl6Rk5hVFF3VFVSVlowOVVWVE5KUkZFMVRrTTBlazVVVFdkUFZGVXpVWHBKTUU1NU5ERlBWRlZuVDFSVk0wbEVVWHBKUkdNeFRXazBNRTFFVlhkTlJFRjNUVVJCZDAxRVFYaEpSRkY2U1VSUk5VNUROSHBPVkUxM1RVUkJkMDFFUVhkTlJFRjRVWHBSZWtsRVNUQk9lVFF4VDFSVmQwMUVRWGROUkVGM1RVUkJlRWxFU1RCT2VUUXhUMVJWWjA1RVRXZE9SR3N3VEdwTk1VMTVRVEJOTUUwelRsUkpkVTVFUVRGSlJGRjZTVVJyTVU1NVFYbE9SR04xVGxSck1VMUVRWGROUkVGM1RVUkJkMDFUUVRWT1ZHTm5Ua1JyTUV4cVRURk5NMjlwU1VNNEswTnBRV2RKUTBFNFdqSjROV05IWjJkYU1uZzFZMGRuZEdKdFJuUmFWREJwWXpOV2Fsa3lWbnBqTVRscVlWaEthbUpIVldsRGFVRm5TVU5CWjBsSVZuVmhWMDUyV2tkVk9VbHBXV3BsUlZaQ1RVUmpOMGxuYjJkSlEwRm5TVU5DYjJJelNuQmxhVEZvV2toWmRHVkVNR2xOVkVGM1RVTkpaMXBFTUdsSlJUQXhUVVJCZFU1VVZYcEpSR3N3VFVNME5FNUVhRVJOYWxVeVRHcFpNMDlUUVRWT1JFRjFUMFJSTkVsRVZUVk1ha0YzVFZOQk0wNUVUWFZOVkZsM1RVUkJkMDFFUVhkTlJFRjNUVk5CTVU5VE5IZE5SRVZuVGtSck5VeHFTVFJPYTAweFQxTTBkMDFFUldkTmFsVXhUR3BSTVUxRVFYZE5SRUYzVFVSQmQwMUVSV2ROYWxVeVRHcFpNMDlUUVRGT2VUUXpUWHBOTlU5VWF6VlBWR3MxVDFSck5VbEVWWGROUXpReFRsUk5aMDVVWTNWT2VrMTZUMVJyTlU5VWF6VlBWR3MxVDFaTk5VNUVTWFZOVkVFd1NVUkpNVTVUTkRCT1UwRTFUa1JKZFUxVVFUQkpSRkUxVDFNMGVVOUVWVFZQVkdzMVQxUnJOVTlVYXpWUmVtc3dUV2swZUUxRVVXZE9lbEY2VEdwRk1rbEVZekJPUXpRd1RXcGpaMDlVVVhkTWFtY3dUME5CTVUxRVFYVk9WRlY2VFVSQmQwMUVRWGROUkVGM1RWTkJOVTVFUVhWUFJGRTBaV3N3TVUxRVFYVk9WRlY2U1VScmVFeHFZekJOYW1zMVQxUnJOVTlVYXpWUFZHeEVUV3BqTTB4cVp6Sk9VMEUxVFZNME0wNUVTVFZQVkdzMVQxUnJOVTlVYXpWSlJHc3pUR3BOTlU1NVFYbE9la2wxVFdwWk0wbEVhek5NYWswMVRubEJNRTlVVVhWUFJHYzFVWHByTTB4cVRUVk9lVUV6VFZSamRVNVVWVFZKUkVrelRuazBORTVxVldkUFJHczBUR3BCTVU1VFFURk5SRUYxVGxSVmVrbEVaelZQUXpSM1RsUldSRTU2U1hwTWFrbDNUWGxCTkU5VVozVk5SRlV4U1VScmQwMTVORE5OUkd0blRucEZNMHhxVlRGUFUwRTFUVVJOZFU1NlFUVkpSRkUxVGtNME5FOUViRVJQVkVGNlRHcGpkMDlUUVhsT2VrbDFUV3BaTTA5VWF6VlBWR3MxVDFSck5VOVRRVE5OYWsxMVRXcEJlazFFUVhkTlJFRjNUVVJCZDAxVFFUVk5VelF6VGtSSk5VOVVhelZQVkdzMVQxUnJOVWxFVlhkTlF6UXhUbFJOZDAxRVFYZE5SRUYzVFVSQmVFbEVhM2hNYW1Nd1RXcHJOVTlVYXpWUFZHczFUMVJzTmxSVVkzaE9RelF4VGtOQk1rNUVTWFZOZW1jelQxUnJOVTlVYXpWUFZHczFUMVYzTUU1RVozVk9WR3Q2U1VSUmVVMURORFJOYW1SRVRrUlJkMHhxV1RKSlJGRjRUa00wZVUxcVdXZE9SRWt6VEdwRk1FbEVVWGhOZVRRMFRYcE5aMDVFUlRSTWFtTXhUME5CTUUxcVFYVk5hbGt3VkVSTmVVMTVOSGxQUkd0blRrUnJla3hxVVhwT2EwMTZUVlJSZFU5RVdUVkpSRkUxVDFNME5FOUVZM2ROUkVGM1RVUkJkMDFFUVhoSlJFMTNUWGswZDA1VVdXZE9SR3MwVEdwSlowMXFhekpNYW1kNVQxTkJNRTlFYTNWT2VrbDZWRVJKTlUxNU5EUk5hbXRuVGtSbk1VeHFXVEZPUlUxNVQwUmpkVTU2UlRKSlJGRXpUbmswZWs1RVkyZE5hbWMwVEdwVk1VOVVRWGROUkVGM1RVUkJkMDFFUldkT1JGa3dUR3BCTTAxRVFYZE5SRUYzVFVSQmQwMUVSV2ROYW1zeFRHcHJORTVUUVRCT1ZGbDFUa1YzTUUxcVFYVk9WRUY1U1VSTmVVNTVOREZOZWxKRVRrUkpORXhxUVhkTmVVRjZUVlJyZFU1NlkyZE9SRkYzVEdwQk5VOURRWHBOVkd0MVRtcHJNVWxFVVRCT2VUUXpUVlJGWjAxNlNUTk1ha1UxVG1wQmQwMUVRWGROUkVGM1RVUkdUVTU2VVhkTWFtc3dUWGxCTWsxVVZYVk9lbU16VVhwak1FOUROSGxQVkdOblRtcEpla3hxUVhkT2FrRjNUVVJCZDAxRVFYZE5SRVZuVG5wUk5FeHFWVE5QVkdzMVQxUnJOVTlVYXpWUFZHdG5UbXBOTUV4cVRUVk9RMEV6VGtSRmRVOVVUV2RPYWxGNFRHcHJkMDFFUVhkTlJFRjNUVVJCZDAxRVJrUk9lazB3VEdwTk1VOUVhelZQVkdzMVQxUnJOVTlVYTJkT2FsRTBUR3BSTkU1VFFUTk5ha2wxVFhwQmVrbEVXVEJQUXpRMFRsUk5kMDFFUVhkTlJFRjNUVVJCZUVsRVkzaE9RelF4VGtOQk1rNUVTWFZOZW1jMFpXc3dNMDVFUlhWTlJGVXlTVVJaTUUxcE5EUk9WRnBFVG5wUmVFeHFUVEpQUTBFeVRrUkpkVTVVVVRWSlJHTXdUVk0wTWs1RVdYZE5SRUYzVFVSQmQwMUVRWGhKUkZrd1RXazBlVTFxU1dkT2VsRjRUR3ByZWsxVFFUSk9SRVYxVDFWTk0wNUVTWFZOYWxGNlNVUlpNRTFUTkRKTmFtYzFUMVJyTlU5VWF6VlBWR3MxU1VSak1FMXBOREZPYWtGM1RVUkJkMDFFUVhkTlJFRjRTVVJaTUUxVE5IcE9hbGxuVG5wUmVVeHFaekZPYVVFeVRrUkZkVTFFWXpCVVJHTXdUVk0wZDA1VVdXZE9hbEY1VEdwbk1VNXViMmxKUXpnclEybEJaMGxEUVRoYU1uZzFZMGRuWjFveWVEVmpSMmQwWW0xR2RGcFVNR2xqTTFacVdUSldlbU14T1hWaU1UbHFZVmhLYW1KSFZXbERhVUZuU1VOQlowbElWblZoVjA1MldrZFZPVWxwV1dwbFJWWkNUVVJuTjBsbmIyZEpRMEZuU1VOQ2IySXpTbkJsYVRGb1draFpkR1ZFTUdsTlZFRjNUVU5KWjFwRU1HbEpSVEF5VFVNME5VNVVWV2RPUkUweFRHcEplRTFWVFRCT2VUUjVUVlJWWjA1RVVUVk1ha1V5U1VSUmVreHFTWGxQUTBFd1RucFZkVTFFVFhoTlJFRjNUVVJCZDAxRVFYZE5VMEV4VFZNME5FNXFWV2RPUkd0NVRHcFZlRTFyZHpGT2VUUXdUMVJSWjA1VVFYcE1hbXN6VDFWTk1rNXBOSGxOZWxGblRsUkplRXhxV1ROSlJHY3lUR3BKZWtsRVZYbE9hVFF5VG1wblowMVVRWGxNYWtVelRrTkJNVTFVVlhWTlJHczBWRVJOZDA1VE5IZE5WRmxuVFhwWk5FeHFRWGhPYTAxNlRXcEJkVTlVYXpGSlJFMHhUbWswTUU1NmEyZE5lbEV5VEdwTk0wNVRRWHBPVkdOMVRYcFZNRWxFVFRKTlV6UXdUa1JSWjAxNldUVk1hbU0xVDFWM05VMUVTWFZOUkdNelNVUm5lRTVUTkRKTlZHYzFUMVJyTlU5VWF6VlBWR3MxVVhwcmVFNTVOSGxQUkZsblQwUkpORXhxUlROTmFVRTFUa1JCZFU5VVp6VkpSR2Q1VG1rME5FMUVZMmRQVkZVd1RHcFpNVTlUUVRSTlZFbDFUMVJKTkZSRWF6Qk5VelEwVFdwclowOUVTVEZNYW1zeVQwUnJOVTlVYXpWUFZHczFUMVJzUkU5VVZURk1hbGw2VDBOQk5FMVVSWFZQVkZFMVNVUnJNVTVUTkRKTlJFbG5UbnBuTlV4cVJYaFBSR3MxVDFSck5VOVVhelZQVkd0blQxUlJlRXhxV1RGTmVVRXpUbnBSZFU5VVdYaFVSRTB4VDFNMGVFMTZVVFZQVkdzMVQxUnJOVTlVYXpWSlJFVTBUWGswTTAxNlozZE5SRUYzVFVSQmQwMUVRWGhSZWswd1RsTTBlRTlFVlRWUFZHczFUMVJyTlU5VWF6VkpSRVV5VDFNME1rMVVUWGROUkVGM1RVUkJkMDFFUVhoSlJFMTVUV2swTWsxRVJUVlBWR3MxVDFSck5VOVVhelZKUkVVeVQxTTBNazFVVFhkTlJFRjNUVVJCZDAxRVFYaEpSRTEzVDFNMGQwMTZXVFZQVkdzMVQxUnJOVTlVYXpWSlJFVTBUWGswZWs5RWFFMU9ha0YxVDFSVk1FOVVhelZQVkdzMVQxUnJOVTlUUVRCTmVsVjFUV3BGZUdWcFNXZE1lalJMU1VOQlowbEVlRzVpU0d4M1lVTkNibUpJYkhkaFF6RjFXVmN4YkZCVFNqTlpWMnd3WVZjMWJrbG5iMmRKUTBGblNVTkNNV0p0YkdwaU1sSnNVRk5KYlVremFFWlJWRUUxVDNsSlMwbERRV2RKUTBGbllVYzVlV0ZZYjNSWlYxSXlURmhuT1VscVJYZE5SRUZwU1VkUk9VbHBRazVPUkdzd1RHcFJlVTFUUVRWT1ZFcEVUV3BWZDB4cVRUSk5lVUUxVGxSSlowNUVaMmRPZWxFMVRHcFplazlUUVRCUFEwRXdUMVJSZFU1RVNYaFJlbEUwU1VSSk1VMUROSHBPYWtsblRXcFZkMHhxVFRKTmVVRXdUME5CTUU5VVVYVk9SRWw0U1VSUk5GRjZZekJQVXpReVRYcG5aMDVFWjJkUFZGVjVTVVJKTVUxRE5IcE9ha2xuVDFSVmVVbEVVVFZPUXpRd1RXcEdSRTlVVlhsSlJHTXdUMU0wTWsxNmEyZE9lbEUxVEdwWmVrOURRVFZPVkVsblRrUnJNRXhxVVhsTlUwRTFUbFJLTmxSVVl6QlBRelF5U1VSUmQwMUROREZPYWtWM1RVUkJkMDFFUVhkTlJFRjRVMFJSTVU1RE5EUldhbU42VGxNMGQwNUZaekZOUkVKWFRrUlJNVXhxWXpKVFJHTXdUME0wTWxacVVYZE5RelF4VG1wRmQwMUVRWGROUkVGM1RVUkJlR1ZwU1dkTWVqUkxTVU5CWjBsRWVHNWlTR3gzWVVOQ2JtSkliSGRoUXpGMVdWY3hiRkJUU2pOWlYyd3dZVmMxYmxneVRuQmpiVTV6V2xOSlMwbERRV2RKUTBGblpGYzFjRmt5T1d0YVZEQnBTbWxPTkZKVlJYZFJWSE5wUTJsQlowbERRV2RKUjJoMlkyMXNOa3hYUm10a2FURTBVRk5KZUUxRVFYZEphVUpyVUZOSloxUlVZekJOVXpSM1RsUlpaMDVxVVhsTWFtY3hUbXROTTA1RVJYVk5lbGswU1VSWk1FMXBOREZPUkd0blRucFJlRXhxV1RCT2FrRjNUVVJCZDAxRVFYZE5SRVZuVG1wUmVVeHFTWGxOYVVFelRrUkZkVTlVVFhoSlJGa3dUVk0wTlZGNll6Qk5hVFI1VGtSTlowNXFVWGhNYWxsNVQwUnJOVTlVYXpWUFZHczFUMVJyWjA1NlVYbE1hbFV5VFVSQmQwMUVRWGROUkVGM1RVUkZaMDVxVVhoTWFrMHlUbWxCTTA1RVNYVlBSRlV5U1VSWk1FMVROSGRPZWxKTlRucFJlRXhxUVRGT2FVRXlUa1JKZFU5RVZUSmxhVUpPVGxSQmQweHFWVEZOZVVFMVRrUkJkVTlFVVRSUmVra3hUbWswTWs1NmEyZFBWRkYzVEdwbk1FOURRVEZQVXpSM1RVUkZaMDU2VVhwTWFrVXlUVVJCZDAxRVFYZE5SRUYzVFVSRlowNVVhM1ZOUkVGNFNVUlJOVTlUTkhsUFJGcEVUbFJyZFUxRVFYaEpSRWt4VGxNME1FNVVRWGROUkVGM1RVUkJkMDFFUVhoSlJFa3hUbWswTWs1NmEyZE9WR04xVG5wTmVrOVVhelZQVkdzMVQxUnJOVTlUUVRGTlJFRjFUbFJWZWtsRVZUTk1hbU42VFhwck5VOVVhelZQVkdzMVQxUnNWRTlVVVhsTWFrVjNUa05CZVU1VVZYVk9SRlZuVDFSUmVVeHFSWGRPUTBFd1QxUnJkVTFxWnpGUFZHczFUMVJyTlU5VWF6VlBWVTAxVGtSSmRVMVVRVEJKUkdNd1RYazBlRTVwUVROT1JGRjFUa1JKTTBsRWF6Qk5RelEwVGtSblowNVVRWGRNYWxVeFRYcEJkMDFFUVhkTlJFRjNUVVJGWjA5VVVYZE1hbWN3VDBod1RrNVVRWGRNYWxVeFRYbEJOVTFUTkROT1JFazFUMVJyTlU5VWF6VlBWR3MxVVhwSk0wNTVORFJPYWxWblQxUkZkVTU2VVhsUFZHczFUMVJyTlU5VWF6VlBVMEUxVG5rMGVrOVVZMmROYW1ONVRHcEpNazU1UVRWT2VUUjZUMVJqWjA1RWF6Qk1hbWMwVDFWTk5VNTVOSHBQVkdOblRucEZNMHhxVlRGUFUwRjVUbnBqZFU5RVdURkpSR2MxVDBNMGQwNVVWV2RPVkVGM1RHcFZNVTE1UVRSUFZHZDFUVVJWTVZGNlkzbE5lVFI1VFVSTlowOUVhelJNYWtFeFRsTkJOVTFFVFhWT2VrRTFTVVJqZUU1NU5ERk9WR3RuVDFSQmVreHFZM2RQVTBFd1QxUlJkVTlFWnpWUmVtdDNUWGswTTAxRWEyZE5hbU41VEdwSk1rNTZhelZQVkdzMVQxUnJOVTlVYTJkT2VrbDZUR3BKZDAxNlFYZE5SRUYzVFVSQmQwMUVSV2RQVkVWMVRucFJlVTlVYXpWUFZHczFUMVJyTlU5VFFURk5SRUYxVGxSVmVrMUVRWGROUkVGM1RVUkJkMDFUUVRWTlV6UXpUa1JKTlU5VWF6VlBWR3MxVDFSck5XVnJNREJPVkZWblRtcFZlbE5FVVhoUFZsa3dUVVJDU1U1cVkzbFdhbEY2VG10bk1FNVVWalpKYVVGMlVHZHZaMGxEUVdkUVIyUnpaVmhDYjBsSFpITmxXRUp2VEZjMWFHSlhWVGxKYm1Sb1kyMDBhVU5wUVdkSlEwRm5TVWhXZFdGWFRuWmFSMVU1U1dsWmFtVkZWa0pOUlVrM1NXZHZaMGxEUVdkSlEwSnZZak5LY0dWcE1XaGFTRmwwWlVRd2FVMVVRWGROUTBsbldrUXdhVWxGTURCUFZGRjFUV3BuTVVsRWF6Sk5NRTE1VGtSUmRVMXFaelJKUkdzeVRYbEJlazU1UVROT1ZGVjFUbnBGZVVsRVRUTkpSRkUxVGtNMGVVOUVWa1JOZW1OblRXcFJNRXhxU1RST2VrRjNUVVJCZDAxRVFYZE5SRVZuVFdwUk1FeHFTVFJQUTBGNlRubEJNRTlVVVhWTmFtY3hTVVJOTTFGNll6Rk9VelF6VFZSTlowMTZZMmRQVkZsNlNVUkpNRTVETkhsUFJHTjNUVVJCZDAxRVFYZE5SRUY0U1VSck1rMTVRVEJQVkZGMVRXcG5NVkY2YXpKTmVVRXpUbFJWZFU1NlJYbEpSR014VGxNME0wMVVUV2RQVkZsNlNVUlJOVTVETkhsUFJGVm5UMVJaZW1Wck1EQk9la2wxVG5wWmVrbEVZM2xPTUdjeFRXcGpkVTFxVFRSUmVsVjZUbmswZVU1VVoyZE9la2t6U1VSVk1FNVROSGROVkZsM1RVUkJkMDFFUVhkTlJFRjRTVVJqZUU5RE5EUk9WRTEzVFVSQmQwMUVRWGROUkVGNFNVUlZNRTVETkRGT1ZFVm5UbnBCTkV4cVozbE9NSGN4VFhwQmRVNXFhM2xKUkZGM1QwTTBlazE2VlhkTlJFRjNUVVJCZDAxRVFYaFJlbFY2VFVNME1FNVVUV2RPUkVGNlRHcEplRTFwUVRGTmFsbDFUVlJGTTBsRVRUVlBRMEV4VFdwRmRVMUVRWHBKUkUwMVQwVm5NRTU2WjNWUFZHczFVWHBSTTAxNU5EUlBWR2RuVFhwck5FbEVVVEpQVXpReFRrUnJaMDVFUVhwTWFrbDRUVk5CTUU1cWEzVk5la0UxU1VSUmQwOUROSHBOYWxKTlRrUlZNVXhxVVRGSlJHTjNUME0wZVU5VVJUVlBWR3MxVDFSck5VOVVhelZSZWxFeFRrTTBOVTlFVVdkT2VrVTBUR3BOTWs1NmF6VlBWR3MxVDFSck5VOVVhMmRPUkZsNVRHcGplazVEUVROTmFtTm5Ua1JqZVV4cVl6Sk5lVUV6VFdwa05sUlVWWGROUXpSM1RVUkJkMDFFUVhkTlJFRjNUVVJCZUVsRVNURk9RelEwVDBSR1JFNUVZekJNYW10NVQxTkJlVTVVVVhWUFJHZDRTVVJSTVU1RE5ESk5SR3RuVFdwak1VeHFTWGRPVTBFd1RsUlJkVTVxUVRWSlJFMTNUVU0wZVU1NlRrUk9SRlV3VEdwWmQwOVRRWHBOYWxWMVRYcFJNRTFFUVhkTlJFRjNUVVJCZDAxVFFUQk9lbEYxVDFSSk5VbEVUVEJPVXpReVRtcHJaMDVVUVhkTWFrRjNUVVJCZDAxRVFYZE5SRUYzVFVSRlowMTZVVEZNYWxreVQxVk5NVTFxVlhWTlJHTjVTVVJOTUU1VE5ESk9hbXRuVGxSUk1VeHFUVFZOYVVGNlRXcFZkVTE2VVRGTlJFRjNUVVJCZDAxRVFYZE5VMEV4VGtSVmRVMTZhM2xKUkUxM1RVTTBlVTU2VGtST1ZGRXhUR3BOTlUxcFFYbE9lbFYxVFdwQk1VMUVRWGROUkVGM1RVUkJkMDFUUVRGTmFsVjFUVVJqZVVsRVNURk9RelEwVDBSRlowNVVRWGRNYWtGM1RVUkJkMDFFUVhkTlJFRjNUVVJGWjAxcVZUQk1hbWMwVFZodmFVbERPQ3REYVVGblNVTkJPRm95ZURWalIyZG5Xako0TldOSFozUmliVVowV2xRd2FXRlhOVzFpTVRscVlWaEthbUpIVldsRGFVRm5TVU5CWjBsSVZuVmhWMDUyV2tkVk9VbHBXV3BsUlZaQ1RVVk5OMGxuYjJkSlEwRm5TVU5DYjJJelNuQmxhVEZvV2toWmRHVkVNR2xOVkVGM1RVTkpaMXBFTUdsSlJUQXhUVVJCWjA1cVkzbE1ha2w1VFZWTk1VMTZSWFZPZWtFd1NVUlpNMDFwTkhsTmFrVm5UbFJWTTB4cVVYaEpSRmsxVG5rME5VMXFWVFZQVkdzMVQxUnJOVTlVYXpWSlJGVXhUbmswTUUxVFFUTk5hbXQxVG1wT1JFNVVWVE5NYWxGNFNVUmpNazFUTkhwTmVsbG5UbFJOZUV4cVkzZE9RMEV6VDBSamRVMUVUVFZKUkZWM1RVTkJNMDlFWTNWTlJFMDFVWHBSTWs5RE5IbFBWRkZuVG5wbk0weHFRWHBQVTBFd1RrUkpkVTVVYTNoSlJHTXlUVk0wZWsxNlZXZE9SRkY1VEdwVk5VMVRRVE5OYW10MVRtcE9SRTVFVVhsTWFsVTFUVk5CTWs5VVkzVlBWRWt4VDFSck5VOVVhelZQVkdzMVQxTkJNRTVxWjNWTmFtc3dTVVJaTTAxcE5IbE5ha1ZuVGxSQmQwbEVXVE5OYVRSNVRXcEdObFJVVlRGT2VUUXdUVk5CTWsxVVVYVlBSRVV4VTBSUmVFMTVORFJQUkd4WFRsUm5Na3hxUlhoTlZXY3dUbnBGZFUxcWF6Rldha2t6VFVNMGVrNXFaelZQVkdzMVQxUnJOVTlVYXpWVFJGRjRUWGswTkU5RWJGZE5hbEY0VEdwWk1rNTZhelZQVkdzMVQxUnJOVTlVYkVsT2FrVXdUR3BuZUU5V1dYbE9la0YxVFhwWk5FOVVhelZQVkdzMVQxUnJOVTlWWnpGT1ZHTjFUa1JHVjA1cVJUQk1hbWQ0VGtSck5VOVVhelZQVkdzMVQxUnNObFJVVlhoTmVUUTFTVVJyTVU5VE5IbE9ha1pFVFdwUk1reHFUVEZPYVVFMVRsUnJkVTFxV1hoSlJGRjNUR3BqZWs5VFFUTk9WRTExVG1wUk1FbEVVWGRNYW1ONlQxTkJNRTlFV1hWTlZVMHdUVU0wTTAxNmEyZE5hbEV5VEdwTk1FNUVRWGROUkVGM1RVUkJkMDFFUldkTmFsRXlUR3BOTVU1cFFUQk5RelF6VGtOQk1VMVVUWFZQVTBFd1RVTTBNMDVGVFROT1ZFMTFUbXBWTWtsRVVYZE1hbU13U1VSck1VOVROSGxPYVVGNVRrUlpkVTE2VVRCTlJFRjNUVVJCZDAxRVFYZE5VMEUxVGxScmRVMXFXV2RPUkdjeVRHcEdSRTlVVlRWTWFra3lUVk5CTTA1VVRYVk9hbEV3U1VSak1VMTVOREpPVkZsblQxUlZOVXhxU1RKTlUwRXhUVlJOZFU5VFFUVk9WR3QxVFdwWmVHVnJNREZOUkVGblQxUm5kVTFVVVRWTlJFRjNUVVJCZDAxRVFYZE5WVTE1VG5wbmRVMUVXWGxKUkdzMFRHcEZNRTlVUVhkTlJFRjNUVVJCZDAxRVJXZFBWR2QxVFZSUk5FbEVTVE5QUXpSM1RrUm5kMDFFUVhkTlJFRjNUVVJCZUVsRWF6Uk1ha1V3VDBOQk1VMUVRWFZOUkVGM1RVUkJkMDFFUVhkTlJFRjNUVlZOTlU5RE5IaE9SR2RuVG5wSmVFeHFhM3BQUkVGM1RVUkJkMDFFUVhkTlJFVm5UV3BqTkV4cVFUSk5hVUUxVFVSRmRVOUVWWGxKUkZWM1RVTkJOVTFFUlhWUFJGVjVVWHBqZVUxVE5EVk9WRWxuVDFSQmVFeHFaekZOYVVFMVRVUkZkVTlFVlhoSlJHTjVUVk0wTlUxNlozZE5SRUYzVFVSQmQwMUVRWGhKUkd0M1RWTTBORTVVUldkT1ZFRjNUR3BCZDAxRVFYZE5SRUYzVFVSQmQwMUVSa1JQVkVGNFRHcG5NVTFUUVhsT2VtZDFUVVJSTkUxRVFYZE5SRUYzVFVSQmQwMVRRVE5OYWtWMVQxUlZlVWxFYXpSTWFrVXdUMVJCZDAxRVFYZE5SRUYzVFVSRlowNVVRWGRKUkdzMFRHcEZNRTlVUVhkTlJFRjNUVVJCZDAxRVJqWkphVUYyVUdkdlowbERRV2RRUjJSelpWaENiMGxIWkhObFdFSnZURmMxYUdKWFZUbEpiVTVvWW0xT2JHSkRTVXRKUTBGblNVTkJaMlJYTlhCWk1qbHJXbFF3YVVwcFRqUlNWVVYzVWtSemFVTnBRV2RKUTBGblNVZG9kbU50YkRaTVYwWnJaR2t4TkZCVFNYaE5SRUYzU1dsQ2ExQlRTV2RVVkZreFRYazBNMDlVWjJkT2FtZDRUR3BqTVU5VmR6Rk5SRUZuVGxSSk0weHFhekpVUkUwd1RtazBlVTFFUldkT2FtZDRUR3BqTVU5VmQzcE5WR2QxVFdwUmVFMUVRWGROUkVGM1RVUkJkMDFUUVRKT1ZFMTFUbnByTlZSRVVUTk5hVFIzVGtSQmQwMUVRWGROUkVGM1RVUkJlRWxFVlhkTlJYZDZUVlJuZFUxcVVYaE5SRUYzVFVSQmQwMUVRWGROVTBGNlRrUlpkVTFxUVhsVVJFMHdUbWswZVUxRVJYZE5SRUYzVFVSQmQwMUVRWGhKUkUxNFQwTTBlVTVFU2sxT1ZFRjNUR3BCZDAxRVFYZE5SRUYzVFVSQmQwMUVSV2RPUkdONVRHcEJNRlJFV1RGTmVUUXpUMVJuZDAxRVFYZE5SRUYzVFVSQmVFbEVUWGhQUXpSNVRrUktUVTVxWjNoTWFtTXhUMFJCZDAxRVFYZE5SRUYzVFVSSlowMTZVVEpNYWtsM1RXdDNNVTFxWTNWUFZGbDNUVVJCZDAxRVFYZE5SRUYzVFdsQk1VMUVRazFPYW1kNFRHcGpNVTlFUVhkTlJFRjNUVVJCZDAxRVNXZE9hbFY2VEdwak5VOVljRTVPVkVGM1NVUnJlazVWVFhsT1ZHdDFUbnBWZWtsRWEzcE9VMEV5VGxOQk0wNUVRWFZOYWxFelRVUkJkMDFFUVhkTlJFRjNUVk5CTWs1VFFURk5SRUpFVG1wVlowMXFWVFZNYW1NeFRrTkJlVTVVYTNWT2VsVjZTVVJaTVVsRVZYZE5RMEV5VGxWTk0wNUVRWFZOYWxFeVNVUlpNVWxFYTNwT1UwRjVUbFJyZFU1NlZUQkpSR3Q2VGxOQk1VMUVRa1JQVkUweFNVUmpNRTFETkhsT1JHTjNUVVJCZDAxRVFYZE5SRUY0U1VSak1FMUROSGxPUkZsblQxUk5NVWxFVlhkTlEwRTFUWHBXTmxSVVZYZE5RMEY0VFVSUmRVNVVVVEpOUkVGM1RVUkJkMDFFUVhkTlZVMTVUMFJGZFU1VWEzbEpSRVYzVGtNME1VNUVXWGROUkVGM1RVUkJkMDFFUVhoSlJFVjNUa00wTVU1RVZXZE5hbWQ0VEdwVk5VMTZRWGROUkVGM1RVUkJkMDFFUldkTlZFRXdUR3BWTUU1VFFURk5SRUYxVFVSQmQwMUVRWGROUkVGM1RVUkJkMDFWVFhoTlJGRjFUbFJSTVVsRVkzaFBRelF3VFVSblowMXFaM2hNYWxVMVRXbEJORTlVVlhWT1JGVXhTVVJWZDAxRFFUUlBWRlYxVGtSVk1WRjZZM2hQUXpRd1RVUmpaMDlFYXpGTWFsRXhUbE5CTkU5VVZYVk9SRlV3U1VSamVFOUROREJOUkdkblQwUnJNVXhxVVRGT1EwRXhUVVJCZFUxRVFYZE5SRUYzVFVSQmQwMUVRWGROVlUwMFQxUlZkVTVFVlRCSlJFazBUVk0wTVU5VVRYZE5SRUYzVFVSQmQwMUVRWGhKUkdONFQwTTBNRTFFV1RWUFZHczFUMVJyTlU5VWF6VkpSRVYzVGtNME1VNUVXWGROUkVGM1RVUkJkMDFFUVhoSlJGRTFUMU0wTlU5VWF6VlBWR3MxVDFSck5VOVVhelZKUkVWM1RrTTBNVTVFV1hkTlJFRjNUVVJCZDAxRVFYaGxhVWxuVEhvMFMwbERRVGhNTWxwMlltNVJLME5xZDNaYVIxWnRZM28wUzFCRE9YcGtiV01yUTJjOVBTY3BJR1p2Y20xaGRDZ25jM1puSnlrN1hISmNibjFjY2x4dVhISmNibHRqYkdGemMxNDlYQ0ozWlhWcFgybGpiMjVmWENKZE9tSmxabTl5WlN3Z1cyTnNZWE56S2oxY0lpQjNaWFZwWDJsamIyNWZYQ0pkT21KbFptOXlaU0I3WEhKY2JpQWdJQ0JtYjI1MExXWmhiV2xzZVRvZ1hDSjNaWFZwWENJN1hISmNiaUFnSUNCbWIyNTBMWE4wZVd4bE9pQnViM0p0WVd3N1hISmNiaUFnSUNCbWIyNTBMWGRsYVdkb2REb2dibTl5YldGc08xeHlYRzRnSUNBZ2MzQmxZV3M2SUc1dmJtVTdYSEpjYmx4eVhHNGdJQ0FnWkdsemNHeGhlVG9nYVc1c2FXNWxMV0pzYjJOck8xeHlYRzRnSUNBZ2RtVnlkR2xqWVd3dFlXeHBaMjQ2Yldsa1pHeGxPMXh5WEc0Z0lDQWdkR1Y0ZEMxa1pXTnZjbUYwYVc5dU9pQnBibWhsY21sME8xeHlYRzRnSUNBZ2QybGtkR2c2SURGbGJUdGNjbHh1SUNBZ0lHMWhjbWRwYmkxeWFXZG9kRG9nTGpKbGJUdGNjbHh1SUNBZ0lIUmxlSFF0WVd4cFoyNDZJR05sYm5SbGNqdGNjbHh1SUNBZ0lDOHFJRzl3WVdOcGRIazZJQzQ0T3lBcUwxeHlYRzVjY2x4dUlDQWdJQzhxSUVadmNpQnpZV1psZEhrZ0xTQnlaWE5sZENCd1lYSmxiblFnYzNSNWJHVnpMQ0IwYUdGMElHTmhiaUJpY21WaGF5Qm5iSGx3YUNCamIyUmxjeW92WEhKY2JpQWdJQ0JtYjI1MExYWmhjbWxoYm5RNklHNXZjbTFoYkR0Y2NseHVJQ0FnSUhSbGVIUXRkSEpoYm5ObWIzSnRPaUJ1YjI1bE8xeHlYRzVjY2x4dUlDQWdJQzhxSUdacGVDQmlkWFIwYjI1eklHaGxhV2RvZEN3Z1ptOXlJSFIzYVhSMFpYSWdZbTl2ZEhOMGNtRndJQ292WEhKY2JpQWdJQ0JzYVc1bExXaGxhV2RvZERvZ01XVnRPMXh5WEc1Y2NseHVJQ0FnSUM4cUlFRnVhVzFoZEdsdmJpQmpaVzUwWlhJZ1kyOXRjR1Z1YzJGMGFXOXVJQzBnYldGeVoybHVjeUJ6YUc5MWJHUWdZbVVnYzNsdGJXVjBjbWxqSUNvdlhISmNiaUFnSUNBdktpQnlaVzF2ZG1VZ2FXWWdibTkwSUc1bFpXUmxaQ0FxTDF4eVhHNGdJQ0FnYldGeVoybHVMV3hsWm5RNklDNHlaVzA3WEhKY2JseHlYRzRnSUNBZ0x5b2dlVzkxSUdOaGJpQmlaU0J0YjNKbElHTnZiV1p2Y25SaFlteGxJSGRwZEdnZ2FXNWpjbVZoYzJWa0lHbGpiMjV6SUhOcGVtVWdLaTljY2x4dUlDQWdJQzhxSUdadmJuUXRjMmw2WlRvZ01USXdKVHNnS2k5Y2NseHVYSEpjYmlBZ0lDQXZLaUJWYm1OdmJXMWxiblFnWm05eUlETkVJR1ZtWm1WamRDQXFMMXh5WEc0Z0lDQWdMeW9nZEdWNGRDMXphR0ZrYjNjNklERndlQ0F4Y0hnZ01YQjRJSEpuWW1Fb01USTNMQ0F4TWpjc0lERXlOeXdnTUM0ektUc2dLaTljY2x4dWZWeHlYRzVjY2x4dUxuZGxkV2xmYVdOdmJsOWphWEpqYkdVNlltVm1iM0psSUhzZ1kyOXVkR1Z1ZERvZ1hDSmNYRVZCTURGY0lpQjlJQzhxSUNmdW9JQW5JQ292WEhKY2JpNTNaWFZwWDJsamIyNWZaRzkzYm14dllXUTZZbVZtYjNKbElIc2dZMjl1ZEdWdWREb2dYQ0pjWEVWQk1ESmNJaUI5SUM4cUlDZnVvSUFuSUNvdlhISmNiaTUzWlhWcFgybGpiMjVmYVc1bWJ6cGlaV1p2Y21VZ2V5QmpiMjUwWlc1ME9pQmNJbHhjUlVFd00xd2lJSDBnTHlvZ0orNmdnQ2NnS2k5Y2NseHVMbmRsZFdsZmFXTnZibDl6WVdabFgzTjFZMk5sYzNNNlltVm1iM0psSUhzZ1kyOXVkR1Z1ZERvZ1hDSmNYRVZCTURSY0lpQjlJQzhxSUNmdW9JQW5JQ292WEhKY2JpNTNaWFZwWDJsamIyNWZjMkZtWlY5M1lYSnVPbUpsWm05eVpTQjdJR052Ym5SbGJuUTZJRndpWEZ4RlFUQTFYQ0lnZlNBdktpQW43cUNBSnlBcUwxeHlYRzR1ZDJWMWFWOXBZMjl1WDNOMVkyTmxjM002WW1WbWIzSmxJSHNnWTI5dWRHVnVkRG9nWENKY1hFVkJNRFpjSWlCOUlDOHFJQ2Z1b0lBbklDb3ZYSEpjYmk1M1pYVnBYMmxqYjI1ZmMzVmpZMlZ6YzE5amFYSmpiR1U2WW1WbWIzSmxJSHNnWTI5dWRHVnVkRG9nWENKY1hFVkJNRGRjSWlCOUlDOHFJQ2Z1b0lBbklDb3ZYSEpjYmk1M1pYVnBYMmxqYjI1ZmMzVmpZMlZ6YzE5dWIxOWphWEpqYkdVNlltVm1iM0psSUhzZ1kyOXVkR1Z1ZERvZ1hDSmNYRVZCTURoY0lpQjlJQzhxSUNmdW9JQW5JQ292WEhKY2JpNTNaWFZwWDJsamIyNWZkMkZwZEdsdVp6cGlaV1p2Y21VZ2V5QmpiMjUwWlc1ME9pQmNJbHhjUlVFd09Wd2lJSDBnTHlvZ0orNmdnQ2NnS2k5Y2NseHVMbmRsZFdsZmFXTnZibDkzWVdsMGFXNW5YMk5wY21Oc1pUcGlaV1p2Y21VZ2V5QmpiMjUwWlc1ME9pQmNJbHhjUlVFd1FWd2lJSDBnTHlvZ0orNmdnQ2NnS2k5Y2NseHVMbmRsZFdsZmFXTnZibDkzWVhKdU9tSmxabTl5WlNCN0lHTnZiblJsYm5RNklGd2lYRnhGUVRCQ1hDSWdmU0F2S2lBbjdxQ0FKeUFxTDF4eVhHNHVkMlYxYVY5cFkyOXVYMmx1Wm05ZlkybHlZMnhsT21KbFptOXlaU0I3SUdOdmJuUmxiblE2SUZ3aVhGeEZRVEJEWENJZ2ZTQXZLaUFuN3FDQUp5QXFMMXh5WEc0dWQyVjFhVjlwWTI5dVgyTmhibU5sYkRwaVpXWnZjbVVnZXlCamIyNTBaVzUwT2lCY0lseGNSVUV3UkZ3aUlIMGdMeW9nSis2Z2dDY2dLaThpTENKQWFXMXdiM0owSUZ3aWQyVjFhVjltYjI1MFhDSTdYSEpjYmx4eVhHNWJZMnhoYzNOZVBWd2lkMlYxYVY5cFkyOXVYMXdpWFRwaVpXWnZjbVVzSUZ0amJHRnpjeW85WENJZ2QyVjFhVjlwWTI5dVgxd2lYVHBpWldadmNtVWdlMXh5WEc0Z0lDQWdiV0Z5WjJsdU9pQXdPMXh5WEc1OVhISmNibHh5WEc0NlltVm1iM0psSUh0Y2NseHVJQ0FnSUM1M1pYVnBYMmxqYjI1ZmMzVmpZMlZ6Y3lZZ2UxeHlYRzRnSUNBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTWpOd2VEdGNjbHh1SUNBZ0lDQWdJQ0JqYjJ4dmNqb2dJekE1UWtJd056dGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lDNTNaWFZwWDJsamIyNWZkMkZwZEdsdVp5WWdlMXh5WEc0Z0lDQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01qTndlRHRjY2x4dUlDQWdJQ0FnSUNCamIyeHZjam9nSXpFd1FVVkdSanRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJQzUzWlhWcFgybGpiMjVmZDJGeWJpWWdlMXh5WEc0Z0lDQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01qTndlRHRjY2x4dUlDQWdJQ0FnSUNCamIyeHZjam9nSTBZME16VXpNRHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJQzUzWlhWcFgybGpiMjVmYVc1bWJ5WWdlMXh5WEc0Z0lDQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01qTndlRHRjY2x4dUlDQWdJQ0FnSUNCamIyeHZjam9nSXpFd1FVVkdSanRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdWQyVjFhVjlwWTI5dVgzTjFZMk5sYzNOZlkybHlZMnhsSmlCN1hISmNiaUFnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF5TTNCNE8xeHlYRzRnSUNBZ0lDQWdJR052Ykc5eU9pQWpNRGxDUWpBM08xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ0xuZGxkV2xmYVdOdmJsOXpkV05qWlhOelgyNXZYMk5wY21Oc1pTWWdlMXh5WEc0Z0lDQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01qTndlRHRjY2x4dUlDQWdJQ0FnSUNCamIyeHZjam9nSXpBNVFrSXdOenRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJQzUzWlhWcFgybGpiMjVmZDJGcGRHbHVaMTlqYVhKamJHVW1JSHRjY2x4dUlDQWdJQ0FnSUNCbWIyNTBMWE5wZW1VNklESXpjSGc3WEhKY2JpQWdJQ0FnSUNBZ1kyOXNiM0k2SUNNeE1FRkZSa1k3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0F1ZDJWMWFWOXBZMjl1WDJOcGNtTnNaU1lnZTF4eVhHNGdJQ0FnSUNBZ0lHWnZiblF0YzJsNlpUb2dNak53ZUR0Y2NseHVJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ0kwTTVRemxET1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUM1M1pYVnBYMmxqYjI1ZlpHOTNibXh2WVdRbUlIdGNjbHh1SUNBZ0lDQWdJQ0JtYjI1MExYTnBlbVU2SURJemNIZzdYSEpjYmlBZ0lDQWdJQ0FnWTI5c2IzSTZJQ013T1VKQ01EYzdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTG5kbGRXbGZhV052Ymw5cGJtWnZYMk5wY21Oc1pTWWdlMXh5WEc0Z0lDQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ01qTndlRHRjY2x4dUlDQWdJQ0FnSUNCamIyeHZjam9nSXpBNVFrSXdOenRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdWQyVjFhVjlwWTI5dVgzTmhabVZmYzNWalkyVnpjeVlnZTF4eVhHNGdJQ0FnSUNBZ0lHTnZiRzl5T2lBak1EbENRakEzTzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnTG5kbGRXbGZhV052Ymw5ellXWmxYM2RoY200bUlIdGNjbHh1SUNBZ0lDQWdJQ0JqYjJ4dmNqb2dJMFpHUWtVd01EdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0F1ZDJWMWFWOXBZMjl1WDJOaGJtTmxiQ1lnZTF4eVhHNGdJQ0FnSUNBZ0lHTnZiRzl5T2lBalJqUXpOVE13TzF4eVhHNGdJQ0FnSUNBZ0lHWnZiblF0YzJsNlpUb2dNakp3ZUR0Y2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1Y2NseHVPbUpsWm05eVpTQjdYSEpjYmlBZ0lDQXVkMlYxYVY5cFkyOXVYMjF6WnlZZ2UxeHlYRzRnSUNBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVRBMGNIZzdYSEpjYmlBZ0lDQWdJQ0FnTG5kbGRXbGZhV052Ymw5M1lYSnVKaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eU9pQWpSamMyTWpZd08xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzVjY2x4dU9tSmxabTl5WlNCN1hISmNiaUFnSUNBdWQyVjFhVjlwWTI5dVgzTmhabVVtSUh0Y2NseHVJQ0FnSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREV3TkhCNE8xeHlYRzRnSUNBZ2ZWeHlYRzU5SWl3aVFHbHRjRzl5ZENCY0lpNHVMeTR1TDJKaGMyVXZabTVjSWp0Y2NseHVMeThnNWEyWTVaeW81cUMzNWJ5UDVMeVk1WVdJNTdxbjU1cUU2WmV1NmFLWTc3eU01cFdGNkwrWjZZZU01YSs1NVlXMjVMdVdkMlYxYVY5aWRHN25tb1RsdkpYbmxLam1sTDdsbktqbHVwWHBnNmhjY2x4dUx5OGc1TGk3NkthQjVwaXZZblYwZEc5dUxuZGxkV2xmWW5SdTVaeW9kMlYxYVY5aWRHNWZjR3hoYVc3a3VJdnBoNDNsaHBsaWIzSmtaWEl0ZDJsa2RHaGNjbHh1WEhKY2JpNTNaWFZwWDJKMGJpQjdYSEpjYmlBZ0lDQW1MbmRsZFdsZlluUnVYMjFwYm1rZ2UxeHlYRzRnSUNBZ0lDQWdJR3hwYm1VdGFHVnBaMmgwT2lCQWQyVjFhVUowYmsxcGJtbElaV2xuYUhRN1hISmNiaUFnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUJBZDJWMWFVSjBiazFwYm1sR2IyNTBVMmw2WlR0Y2NseHVJQ0FnSUNBZ0lDQndZV1JrYVc1bk9pQXdJQzQzTldWdE8xeHlYRzRnSUNBZ0lDQWdJR1JwYzNCc1lYazZJR2x1YkdsdVpTMWliRzlqYXp0Y2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1Y2NseHVZblYwZEc5dUxDQnBibkIxZENCN1hISmNiaUFnSUNBbUxuZGxkV2xmWW5SdUlIdGNjbHh1SUNBZ0lDQWdJQ0IzYVdSMGFEb2dNVEF3SlR0Y2NseHVJQ0FnSUNBZ0lDQmliM0prWlhJdGQybGtkR2c2SURBN1hISmNiaUFnSUNBZ0lDQWdiM1YwYkdsdVpUb2dNRHRjY2x4dUlDQWdJQ0FnSUNBdGQyVmlhMmwwTFdGd2NHVmhjbUZ1WTJVNklHNXZibVU3WEhKY2JpQWdJQ0FnSUNBZ0pqcG1iMk4xY3lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUc5MWRHeHBibVU2SURBN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdKaTUzWlhWcFgySjBibDlwYm14cGJtVXNKaTUzWlhWcFgySjBibDl0YVc1cElIdGNjbHh1SUNBZ0lDQWdJQ0IzYVdSMGFEb2dZWFYwYnp0Y2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1Y2NseHVMeXBuWVhBZ1ltVjBkMlZsYmlCaWRHNHFMMXh5WEc0dWQyVjFhVjlpZEc0Z0t5QXVkMlYxYVY5aWRHNGdlMXh5WEc0Z0lDQWdiV0Z5WjJsdUxYUnZjRG9nUUhkbGRXbENkRzVFWldaaGRXeDBSMkZ3TzF4eVhHNTlYSEpjYmx4eVhHNHVkMlYxYVY5aWRHNHVkMlYxYVY5aWRHNWZhVzVzYVc1bElDc2dMbmRsZFdsZlluUnVMbmRsZFdsZlluUnVYMmx1YkdsdVpTQjdYSEpjYmlBZ0lDQnRZWEpuYVc0dGRHOXdPaUJoZFhSdk8xeHlYRzRnSUNBZ2JXRnlaMmx1TFd4bFpuUTZJRUIzWlhWcFFuUnVSR1ZtWVhWc2RFZGhjRHRjY2x4dWZWeHlYRzVjY2x4dUxuZGxkV2xmWW5SdVgyRnlaV0VnZTF4eVhHNGdJQ0FnYldGeVoybHVPaUJBZDJWMWFVTmxiR3h6VFdGeVoybHVWRzl3SUVCM1pYVnBRblJ1UkdWbVlYVnNkRWRoY0NBdU0yVnRPMXh5WEc0Z0lDQWdKaTUzWlhWcFgySjBibDloY21WaFgybHViR2x1WlNCN1hISmNiaUFnSUNBZ0lDQWdMWGRsWW10cGRDMWthWE53YkdGNU9pQm1iR1Y0TzF4eVhHNGdJQ0FnSUNBZ0lHUnBjM0JzWVhrNklHWnNaWGc3WEhKY2JpQWdJQ0FnSUNBZ0xuZGxkV2xmWW5SdUlIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JXRnlaMmx1TFhSdmNEb2dZWFYwYnp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYldGeVoybHVMWEpwWjJoME9pQkFkMlYxYVVKMGJrUmxabUYxYkhSSFlYQTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIZHBaSFJvT2lBeE1EQWxPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXRkMlZpYTJsMExXWnNaWGc2SURFN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdac1pYZzZJREU3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ1k2YkdGemRDMWphR2xzWkNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnRZWEpuYVc0dGNtbG5hSFE2SURBN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYmtCcGJYQnZjblFnWENKM1pYVnBYMkowYmw5bmJHOWlZV3hjSWp0Y2NseHVRR2x0Y0c5eWRDQmNJbmRsZFdsZlluUnVYMlJsWm1GMWJIUmNJanRjY2x4dVFHbHRjRzl5ZENCY0luZGxkV2xmWW5SdVgzQnlhVzFoY25sY0lqdGNjbHh1UUdsdGNHOXlkQ0JjSW5kbGRXbGZZblJ1WDNkaGNtNWNJanRjY2x4dVFHbHRjRzl5ZENCY0luZGxkV2xmWW5SdVgyUnBjMkZpYkdWa1hDSTdYSEpjYmtCcGJYQnZjblFnWENKM1pYVnBYMkowYmw5d2JHRnBibHdpT3lJc0lrQnBiWEJ2Y25RZ1hDSXVMaTh1TGk5aVlYTmxMMlp1WENJN1hISmNibHh5WEc0dWQyVjFhVjlpZEc0Z2UxeHlYRzRnSUNBZ2NHOXphWFJwYjI0NklISmxiR0YwYVhabE8xeHlYRzRnSUNBZ1pHbHpjR3hoZVRvZ1lteHZZMnM3WEhKY2JpQWdJQ0J0WVhKbmFXNHRiR1ZtZERvZ1lYVjBienRjY2x4dUlDQWdJRzFoY21kcGJpMXlhV2RvZERvZ1lYVjBienRjY2x4dUlDQWdJSEJoWkdScGJtY3RiR1ZtZERvZ01UUndlRHRjY2x4dUlDQWdJSEJoWkdScGJtY3RjbWxuYUhRNklERTBjSGc3WEhKY2JpQWdJQ0JpYjNndGMybDZhVzVuT2lCaWIzSmtaWEl0WW05NE8xeHlYRzRnSUNBZ1ptOXVkQzF6YVhwbE9pQkFkMlYxYVVKMGJrWnZiblJUYVhwbE8xeHlYRzRnSUNBZ2RHVjRkQzFoYkdsbmJqb2dZMlZ1ZEdWeU8xeHlYRzRnSUNBZ2RHVjRkQzFrWldOdmNtRjBhVzl1T2lCdWIyNWxPMXh5WEc0Z0lDQWdZMjlzYjNJNklFQjNaWFZwUW5SdVJtOXVkRU52Ykc5eU8xeHlYRzRnSUNBZ2JHbHVaUzFvWldsbmFIUTZJSFZ1YVhRb1FIZGxkV2xDZEc1SVpXbG5hSFF2UUhkbGRXbENkRzVHYjI1MFUybDZaU2s3WEhKY2JpQWdJQ0JpYjNKa1pYSXRjbUZrYVhWek9pQkFkMlYxYVVKMGJrSnZjbVJsY2xKaFpHbDFjenRjY2x4dUlDQWdJQzV6WlhSVVlYQkRiMnh2Y2lncE8xeHlYRzRnSUNBZ2IzWmxjbVpzYjNjNklHaHBaR1JsYmp0Y2NseHVJQ0FnSUNZNllXWjBaWElnZTF4eVhHNGdJQ0FnSUNBZ0lHTnZiblJsYm5RNklGd2lJRndpTzF4eVhHNGdJQ0FnSUNBZ0lIZHBaSFJvT2lBeU1EQWxPMXh5WEc0Z0lDQWdJQ0FnSUdobGFXZG9kRG9nTWpBd0pUdGNjbHh1SUNBZ0lDQWdJQ0J3YjNOcGRHbHZiam9nWVdKemIyeDFkR1U3WEhKY2JpQWdJQ0FnSUNBZ2RHOXdPaUF3TzF4eVhHNGdJQ0FnSUNBZ0lHeGxablE2SURBN1hISmNiaUFnSUNBZ0lDQWdZbTl5WkdWeU9pQXhjSGdnYzI5c2FXUWdjbWRpWVNnd0xDQXdMQ0F3TENBdU1pazdYSEpjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0T2lCelkyRnNaU2d1TlNrN1hISmNiaUFnSUNBZ0lDQWdkSEpoYm5ObWIzSnRMVzl5YVdkcGJqb2dNQ0F3TzF4eVhHNGdJQ0FnSUNBZ0lHSnZlQzF6YVhwcGJtYzZJR0p2Y21SbGNpMWliM2c3WEhKY2JpQWdJQ0FnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nUUhkbGRXbENkRzVDYjNKa1pYSlNZV1JwZFhNcU1qdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FtTG5kbGRXbGZZblJ1WDJsdWJHbHVaU0I3WEhKY2JpQWdJQ0FnSUNBZ1pHbHpjR3hoZVRvZ2FXNXNhVzVsTFdKc2IyTnJPMXh5WEc0Z0lDQWdmVnh5WEc1OUlpd2lMeThnZEdGd1kyOXNiM0pjY2x4dUxuTmxkRlJoY0VOdmJHOXlLRUJqT25KblltRW9NQ3d3TERBc01Da3BJSHRjY2x4dUlDQWdJQzEzWldKcmFYUXRkR0Z3TFdocFoyaHNhV2RvZEMxamIyeHZjam9nUUdNN1hISmNibjFjY2x4dVhISmNiaTh2ZFhObGNpQmhZM1JwYjI1Y2NseHVMbTV2WDNObGJHVmpkQ2dwSUh0Y2NseHVJQ0FnSUMxM1pXSnJhWFF0ZEc5MVkyZ3RZMkZzYkc5MWREb2dibTl1WlR0Y2NseHVJQ0FnSUMxM1pXSnJhWFF0ZFhObGNpMXpaV3hsWTNRNklHNXZibVU3WEhKY2JpQWdJQ0F0YTJoMGJXd3RkWE5sY2kxelpXeGxZM1E2SUc1dmJtVTdYSEpjYmlBZ0lDQXRiVzk2TFhWelpYSXRjMlZzWldOME9pQnViMjVsTzF4eVhHNGdJQ0FnTFcxekxYVnpaWEl0YzJWc1pXTjBPaUJ1YjI1bE8xeHlYRzRnSUNBZ2RYTmxjaTF6Wld4bFkzUTZJRzV2Ym1VN1hISmNibjFjY2x4dVhISmNibHh5WEc1Y2NseHVYSEpjYmx4eVhHNWNjbHh1WEhKY2JpSXNJa0JwYlhCdmNuUWdYQ0l1TGk4dUxpOWlZWE5sTDJadVhDSTdYSEpjYmx4eVhHNHVkMlYxYVY5aWRHNWZaR1ZtWVhWc2RDQjdYSEpjYmlBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQkFkMlYxYVVKMGJrUmxabUYxYkhSQ1p6dGNjbHh1SUNBZ0lHTnZiRzl5T2lCQWQyVjFhVUowYmtSbFptRjFiSFJHYjI1MFEyOXNiM0k3WEhKY2JpQWdJQ0FtT201dmRDZ3VkMlYxYVY5aWRHNWZaR2x6WVdKc1pXUXBPblpwYzJsMFpXUWdlMXh5WEc0Z0lDQWdJQ0FnSUdOdmJHOXlPaUJBZDJWMWFVSjBia1JsWm1GMWJIUkdiMjUwUTI5c2IzSTdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQW1PbTV2ZENndWQyVjFhVjlpZEc1ZlpHbHpZV0pzWldRcE9tRmpkR2wyWlNCN1hISmNiaUFnSUNBZ0lDQWdZMjlzYjNJNklFQjNaWFZwUW5SdVJHVm1ZWFZzZEVGamRHbDJaVVp2Ym5SRGIyeHZjanRjY2x4dUlDQWdJQ0FnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lCQWQyVjFhVUowYmtSbFptRjFiSFJCWTNScGRtVkNaenRjY2x4dUlDQWdJSDFjY2x4dWZTSXNJa0JwYlhCdmNuUWdYQ0l1TGk4dUxpOWlZWE5sTDJadVhDSTdYSEpjYmx4eVhHNHVkMlYxYVY5aWRHNWZjSEpwYldGeWVTQjdYSEpjYmlBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQkFkMlYxYVVKMGJsQnlhVzFoY25sQ1p6dGNjbHh1SUNBZ0lDWTZibTkwS0M1M1pYVnBYMkowYmw5a2FYTmhZbXhsWkNrNmRtbHphWFJsWkNCN1hISmNiaUFnSUNBZ0lDQWdZMjlzYjNJNklFQjNaWFZwUW5SdVJtOXVkRU52Ykc5eU8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ0pqcHViM1FvTG5kbGRXbGZZblJ1WDJScGMyRmliR1ZrS1RwaFkzUnBkbVVnZTF4eVhHNGdJQ0FnSUNBZ0lHTnZiRzl5T2lCQWQyVjFhVUowYmtGamRHbDJaVVp2Ym5SRGIyeHZjanRjY2x4dUlDQWdJQ0FnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lCQWQyVjFhVUowYmxCeWFXMWhjbmxCWTNScGRtVkNaenRjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzRpTENKQWFXMXdiM0owSUZ3aUxpNHZMaTR2WW1GelpTOW1ibHdpTzF4eVhHNWNjbHh1TG5kbGRXbGZZblJ1WDNkaGNtNGdlMXh5WEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dRSGRsZFdsQ2RHNVhZWEp1UW1jN1hISmNiaUFnSUNBbU9tNXZkQ2d1ZDJWMWFWOWlkRzVmWkdsellXSnNaV1FwT25acGMybDBaV1FnZTF4eVhHNGdJQ0FnSUNBZ0lHTnZiRzl5T2lCQWQyVjFhVUowYmtadmJuUkRiMnh2Y2p0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUNZNmJtOTBLQzUzWlhWcFgySjBibDlrYVhOaFlteGxaQ2s2WVdOMGFYWmxJSHRjY2x4dUlDQWdJQ0FnSUNCamIyeHZjam9nUUhkbGRXbENkRzVCWTNScGRtVkdiMjUwUTI5c2IzSTdYSEpjYmlBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nUUhkbGRXbENkRzVYWVhKdVFXTjBhWFpsUW1jN1hISmNiaUFnSUNCOVhISmNibjFjY2x4dUlpd2lRR2x0Y0c5eWRDQmNJaTR1THk0dUwySmhjMlV2Wm01Y0lqdGNjbHh1WEhKY2JpNTNaWFZwWDJKMGJsOWthWE5oWW14bFpDQjdYSEpjYmlBZ0lDQmpiMnh2Y2pvZ1FIZGxkV2xDZEc1RWFYTmhZbXhsWkVadmJuUkRiMnh2Y2p0Y2NseHVJQ0FnSUNZdWQyVjFhVjlpZEc1ZlpHVm1ZWFZzZENCN1hISmNiaUFnSUNBZ0lDQWdZMjlzYjNJNklFQjNaWFZwUW5SdVJHVm1ZWFZzZEVScGMyRmliR1ZrUm05dWRFTnZiRzl5TzF4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmlJc0lrQnBiWEJ2Y25RZ1hDSXVMaTh1TGk5aVlYTmxMMlp1WENJN1hISmNibHh5WEc0dWQyVjFhVjlpZEc1ZmNHeGhhVzVmY0hKcGJXRnllU0I3WEhKY2JpQWdJQ0JqYjJ4dmNqb2dRSGRsZFdsQ2RHNVFjbWx0WVhKNVFtYzdYSEpjYmlBZ0lDQmliM0prWlhJNklERndlQ0J6YjJ4cFpDQkFkMlYxYVVKMGJsQnlhVzFoY25sQ1p6dGNjbHh1SUNBZ0lHSjFkSFJ2YmlZc0lHbHVjSFYwSmlCN1hISmNiaUFnSUNBZ0lDQWdZbTl5WkdWeUxYZHBaSFJvT2lBeGNIZzdYSEpjYmlBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nZEhKaGJuTndZWEpsYm5RN1hISmNiaUFnSUNCOVhISmNiaUFnSUNBbU9tRmpkR2wyWlNCN1hISmNiaUFnSUNBZ0lDQWdZbTl5WkdWeUxXTnZiRzl5T2lCQWQyVjFhVUowYmxCeWFXMWhjbmxCWTNScGRtVkNaenRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJQ1k2WVdaMFpYSWdlMXh5WEc0Z0lDQWdJQ0FnSUdKdmNtUmxjaTEzYVdSMGFEb2dNRHRjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzVjY2x4dUxuZGxkV2xmWW5SdVgzQnNZV2x1WDJSbFptRjFiSFFnZTF4eVhHNGdJQ0FnWTI5c2IzSTZJQ00xUVRWQk5VRTdYSEpjYmlBZ0lDQmliM0prWlhJNklERndlQ0J6YjJ4cFpDQWpOVUUxUVRWQk8xeHlYRzRnSUNBZ1luVjBkRzl1Sml3Z2FXNXdkWFFtSUh0Y2NseHVJQ0FnSUNBZ0lDQmliM0prWlhJdGQybGtkR2c2SURGd2VEdGNjbHh1SUNBZ0lDQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUIwY21GdWMzQmhjbVZ1ZER0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUNZNllXWjBaWElnZTF4eVhHNGdJQ0FnSUNBZ0lHSnZjbVJsY2kxM2FXUjBhRG9nTUR0Y2NseHVJQ0FnSUgxY2NseHVmU0lzSWtCcGJYQnZjblFnWENJdUxpOHVMaTlpWVhObEwyWnVYQ0k3WEhKY2JseHlYRzR1ZDJWMWFWOWpaV3hzSUh0Y2NseHVJQ0FnSUM4dklHOXVaWEI0WEhKY2JpQWdJQ0J3YjNOcGRHbHZiam9nY21Wc1lYUnBkbVU3WEhKY2JpQWdJQ0FtT21KbFptOXlaU0I3WEhKY2JpQWdJQ0FnSUNBZ0xuTmxkRlJ2Y0V4cGJtVW9RSGRsZFdsRFpXeHNRbTl5WkdWeVEyOXNiM0lwTzF4eVhHNGdJQ0FnSUNBZ0lHeGxablE2SUVCM1pYVnBRMlZzYkVkaGNFZzdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQW1PbVpwY25OMExXTm9hV3hrSUh0Y2NseHVJQ0FnSUNBZ0lDQW1PbUpsWm05eVpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnBjM0JzWVhrNklHNXZibVU3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzU5WEhKY2JseHlYRzR1ZDJWMWFWOWpaV3hzY3lCN1hISmNiaUFnSUNCdFlYSm5hVzR0ZEc5d09pQkFkMlYxYVVObGJHeHpUV0Z5WjJsdVZHOXdPMXh5WEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dRSGRsZFdsRFpXeHNRbWM3WEhKY2JpQWdJQ0JzYVc1bExXaGxhV2RvZERvZ1FIZGxkV2xEWld4c1RHbHVaVWhsYVdkb2REdGNjbHh1SUNBZ0lHWnZiblF0YzJsNlpUb2dRSGRsZFdsRFpXeHNSbTl1ZEZOcGVtVTdJQzh2WTJWc2JPUzRyZW1YdE9hY2llYVZpT21ybU9XNnBqSXpjSGp2dkl6b3Q1L2xycUxtaUxmbnE2L3B1NWpvcnFUbG03N21vSWZsc0xybHI3amt1SURvaDdSY2NseHVYSEpjYmlBZ0lDQnZkbVZ5Wm14dmR6b2dhR2xrWkdWdU95QXZMK1dib09TNHV1YXZqK1M0cW1ObGJHem5tb1JpYjNKa1pYTGt2Yi9ubEtoaVpXWnZjbVhsaFlQbnRLQnNaV1owNXBDZTU1cUU3N3lNYVdYa3VJdmt2S3JsaFlQbnRLRG5tb1JqYjI1MFlXbHVhVzVuSUdKc2IyTnI1THl3Nks2aDZMZWY1cUNINVllRzVMaU41WkNNNzd5TTVaeW9ZMlZzYk9TNGl1ZVVxRzlvNUxpTjU1U2Y1cFdJWEhKY2JseHlYRzRnSUNBZ0x5OGdiMjVsY0hoY2NseHVJQ0FnSUhCdmMybDBhVzl1T2lCeVpXeGhkR2wyWlR0Y2NseHVJQ0FnSUNZNlltVm1iM0psSUh0Y2NseHVJQ0FnSUNBZ0lDQXVjMlYwVkc5d1RHbHVaU2hBZDJWMWFVTmxiR3hDYjNKa1pYSkRiMnh2Y2lrN1hISmNiaUFnSUNCOVhISmNiaUFnSUNBbU9tRm1kR1Z5SUh0Y2NseHVJQ0FnSUNBZ0lDQXVjMlYwUW05MGRHOXRUR2x1WlNoQWQyVjFhVU5sYkd4Q2IzSmtaWEpEYjJ4dmNpazdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYmk1M1pYVnBYMk5sYkd4elgzUnBkR3hsSUh0Y2NseHVJQ0FnSUcxaGNtZHBiaTEwYjNBNklDNDNOMlZ0T3lBdkx5QXhOWEI0SUMwZzZLR002YXVZWEhKY2JpQWdJQ0J0WVhKbmFXNHRZbTkwZEc5dE9pQXVNMlZ0T3lBdkx5QTRjSGdnTFNEb29ZenBxNWhjY2x4dUlDQWdJSEJoWkdScGJtY3RiR1ZtZERvZ1FIZGxkV2xEWld4c1IyRndTRHRjY2x4dUlDQWdJSEJoWkdScGJtY3RjbWxuYUhRNklFQjNaWFZwUTJWc2JFZGhjRWc3WEhKY2JpQWdJQ0JqYjJ4dmNqb2dRR2RzYjJKaGJGUmxlSFJEYjJ4dmNqdGNjbHh1SUNBZ0lHWnZiblF0YzJsNlpUb2dRSGRsZFdsRFpXeHNWR2x3YzBadmJuUlRhWHBsTzF4eVhHNWNjbHh1SUNBZ0lDWWdLeUF1ZDJWMWFWOWpaV3hzY3lCN1hISmNiaUFnSUNBZ0lDQWdiV0Z5WjJsdUxYUnZjRG9nTUR0Y2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1Y2NseHVMbmRsZFdsZlkyVnNiSE5mZEdsd2N5QjdYSEpjYmlBZ0lDQnRZWEpuYVc0dGRHOXdPaUF1TTJWdE95QXZMeUE0Y0hnZ0xTRG9vWXpwcTVoY2NseHVJQ0FnSUdOdmJHOXlPaUJBWjJ4dlltRnNWR1Y0ZEVOdmJHOXlPMXh5WEc0Z0lDQWdjR0ZrWkdsdVp5MXNaV1owT2lCQWQyVjFhVU5sYkd4SFlYQklPMXh5WEc0Z0lDQWdjR0ZrWkdsdVp5MXlhV2RvZERvZ1FIZGxkV2xEWld4c1IyRndTRHRjY2x4dUlDQWdJR1p2Ym5RdGMybDZaVG9nUUhkbGRXbERaV3hzVkdsd2MwWnZiblJUYVhwbE8xeHlYRzU5WEhKY2JseHlYRzR1ZDJWMWFWOWpaV3hzSUh0Y2NseHVJQ0FnSUhCaFpHUnBibWM2SUVCM1pYVnBRMlZzYkVkaGNGWWdRSGRsZFdsRFpXeHNSMkZ3U0R0Y2NseHVJQ0FnSUhCdmMybDBhVzl1T2lCeVpXeGhkR2wyWlRzZ0x5L292NW5rdUtybW1LL2t1THJrdW9ibGhiemxycmxqWld4c2MrV3V1ZVdacUc5dVpYQjQ1cGE1NXFHSTZLS3JZbVZtYjNKbDVveWg1TDJQNklDTTVZR2E1NXFFWEhKY2JpQWdJQ0JrYVhOd2JHRjVPaUJtYkdWNE8xeHlYRzRnSUNBZ1lXeHBaMjR0YVhSbGJYTTZJR05sYm5SbGNqdGNjbHh1ZlZ4eVhHNWNjbHh1TG5kbGRXbGZZMlZzYkY5bWRDQjdYSEpjYmlBZ0lDQjBaWGgwTFdGc2FXZHVPaUJ5YVdkb2REdGNjbHh1SUNBZ0lHTnZiRzl5T2lCQVoyeHZZbUZzVkdWNGRFTnZiRzl5TzF4eVhHNTlYSEpjYmx4eVhHNHVkMlYxYVY5alpXeHNYM0J5YVcxaGNua2dlMXh5WEc0Z0lDQWdabXhsZURvZ01UdGNjbHh1ZlNJc0lseHlYRzR1YzJWMFZHOXdUR2x1WlNoQVl6b2dJME0zUXpkRE55a2dlMXh5WEc0Z0lDQWdZMjl1ZEdWdWREb2dYQ0lnWENJN1hISmNiaUFnSUNCd2IzTnBkR2x2YmpvZ1lXSnpiMngxZEdVN1hISmNiaUFnSUNCc1pXWjBPaUF3TzF4eVhHNGdJQ0FnZEc5d09pQXdPMXh5WEc0Z0lDQWdkMmxrZEdnNklERXdNQ1U3WEhKY2JpQWdJQ0JvWldsbmFIUTZJREZ3ZUR0Y2NseHVJQ0FnSUdKdmNtUmxjaTEwYjNBNklERndlQ0J6YjJ4cFpDQkFZenRjY2x4dUlDQWdJSFJ5WVc1elptOXliUzF2Y21sbmFXNDZJREFnTUR0Y2NseHVJQ0FnSUhSeVlXNXpabTl5YlRvZ2MyTmhiR1ZaS0RBdU5TazdYSEpjYm4xY2NseHVYSEpjYmk1elpYUkNiM1IwYjIxTWFXNWxLRUJqT2lBalF6ZEROME0zS1NCN1hISmNiaUFnSUNCamIyNTBaVzUwT2lCY0lpQmNJanRjY2x4dUlDQWdJSEJ2YzJsMGFXOXVPaUJoWW5OdmJIVjBaVHRjY2x4dUlDQWdJR3hsWm5RNklEQTdYSEpjYmlBZ0lDQmliM1IwYjIwNklEQTdYSEpjYmlBZ0lDQjNhV1IwYURvZ01UQXdKVHRjY2x4dUlDQWdJR2hsYVdkb2REb2dNWEI0TzF4eVhHNGdJQ0FnWW05eVpHVnlMV0p2ZEhSdmJUb2dNWEI0SUhOdmJHbGtJRUJqTzF4eVhHNGdJQ0FnZEhKaGJuTm1iM0p0TFc5eWFXZHBiam9nTUNBeE1EQWxPMXh5WEc0Z0lDQWdkSEpoYm5ObWIzSnRPaUJ6WTJGc1pWa29NQzQxS1R0Y2NseHVmVnh5WEc1Y2NseHVMbk5sZEV4bFpuUk1hVzVsS0VCak9pQWpRemRETjBNM0tTQjdYSEpjYmlBZ0lDQmpiMjUwWlc1ME9pQmNJaUJjSWp0Y2NseHVJQ0FnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlR0Y2NseHVJQ0FnSUd4bFpuUTZJREE3WEhKY2JpQWdJQ0IwYjNBNklEQTdYSEpjYmlBZ0lDQjNhV1IwYURvZ01YQjRPMXh5WEc0Z0lDQWdhR1ZwWjJoME9pQXhNREFsTzF4eVhHNGdJQ0FnWW05eVpHVnlMV3hsWm5RNklERndlQ0J6YjJ4cFpDQkFZenRjY2x4dUlDQWdJSFJ5WVc1elptOXliUzF2Y21sbmFXNDZJREFnTUR0Y2NseHVJQ0FnSUhSeVlXNXpabTl5YlRvZ2MyTmhiR1ZZS0RBdU5TazdYSEpjYm4xY2NseHVYSEpjYmk1elpYUlNhV2RvZEV4cGJtVW9RR002SUNORE4wTTNRemNwSUh0Y2NseHVJQ0FnSUdOdmJuUmxiblE2SUZ3aUlGd2lPMXh5WEc0Z0lDQWdjRzl6YVhScGIyNDZJR0ZpYzI5c2RYUmxPMXh5WEc0Z0lDQWdjbWxuYUhRNklEQTdYSEpjYmlBZ0lDQjBiM0E2SURBN1hISmNiaUFnSUNCM2FXUjBhRG9nTVhCNE8xeHlYRzRnSUNBZ2FHVnBaMmgwT2lBeE1EQWxPMXh5WEc0Z0lDQWdZbTl5WkdWeUxYSnBaMmgwT2lBeGNIZ2djMjlzYVdRZ1FHTTdYSEpjYmlBZ0lDQjBjbUZ1YzJadmNtMHRiM0pwWjJsdU9pQXdJREV3TUNVN1hISmNiaUFnSUNCMGNtRnVjMlp2Y20wNklITmpZV3hsV0Nnd0xqVXBPMXh5WEc1OUlpd2lRR2x0Y0c5eWRDQmNJaTR1THk0dUwySmhjMlV2Wm01Y0lqdGNjbHh1WEhKY2JpNTNaWFZwWDJObGJHeHpYMkZqWTJWemN5QjdYSEpjYmlBZ0lDQXVkMlYxYVY5alpXeHNPbTV2ZENndWJtOWZZV05qWlhOektTQjdYSEpjYmlBZ0lDQWdJQ0FnTHk4ZzVaeW9ZMlZzYkY5aFkyTmxjM1Bsa296bGhiYmxyb1Buc2J2bG5vdm5tb1JqWld4czVyZTM1NTJBNTVTbzU1cUU1Wnk2NXBtdjVMaUw3N3lNNVlXMjVhNkRZMlZzYk9pbWdlV0tvRzV2WDJGalkyVnpjKys4ak9tQnYrV0ZqZWFjaWVlQ3VlV0h1K2FBZ1Z4eVhHNGdJQ0FnSUNBZ0lDNXpaWFJVWVhCRGIyeHZjanRjY2x4dUlDQWdJQ0FnSUNBbU9tRmpkR2wyWlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNORlEwVkRSVU03WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ1lTNTNaWFZwWDJObGJHd2dlMXh5WEc0Z0lDQWdJQ0FnSUdOdmJHOXlPaUJwYm1obGNtbDBPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdMbmRsZFdsZlkyVnNiRjltZENCN1hISmNiaUFnSUNBZ0lDQWdKanBoWm5SbGNpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJsYm5RNklGd2lJRndpTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1YzJWMFFYSnliM2RmVjJGd0tISnBaMmgwTENBMmNIZ3NJQ05ET0VNNFEwUXNJREp3ZUNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSdmNEb2dMVEZ3ZUR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYldGeVoybHVMV3hsWm5RNkxqTmxiVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjFjY2x4dUlpd2lMeThnWTNOek1pQmhjbkp2ZDF4eVhHNHVZWEp5YjNjb1FHSnZjbVJsY2xkcFpIUm9MQ0JBWW05eVpHVnlRMjlzYjNJcElIdGNjbHh1SUNBZ0lDNXpaWFJCY25KdmQxZHBaSFJvS0VCaWIzSmtaWEpYYVdSMGFDazdYSEpjYmlBZ0lDQXVjMlYwUVhKeWIzZERiMnh2Y2loQVltOXlaR1Z5UTI5c2IzSXBPMXh5WEc1OVhISmNibHh5WEc0dWMyVjBRWEp5YjNkRGIyeHZjaWhBWW05eVpHVnlRMjlzYjNJcElIdGNjbHh1SUNBZ0lDWXVZWEp5YjNkZmRDQjdYSEpjYmlBZ0lDQWdJQ0FnWW05eVpHVnlMV0p2ZEhSdmJTMWpiMnh2Y2pvZ1FHSnZjbVJsY2tOdmJHOXlPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdKaTVoY25KdmQxOXlJSHRjY2x4dUlDQWdJQ0FnSUNCaWIzSmtaWEl0YkdWbWRDMWpiMnh2Y2pvZ1FHSnZjbVJsY2tOdmJHOXlPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdKaTVoY25KdmQxOWlJSHRjY2x4dUlDQWdJQ0FnSUNCaWIzSmtaWEl0ZEc5d0xXTnZiRzl5T2lCQVltOXlaR1Z5UTI5c2IzSTdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQW1MbUZ5Y205M1gyd2dlMXh5WEc0Z0lDQWdJQ0FnSUdKdmNtUmxjaTF5YVdkb2RDMWpiMnh2Y2pvZ1FHSnZjbVJsY2tOdmJHOXlPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc0dWMyVjBRWEp5YjNkWGFXUjBhQ2hBWW05eVpHVnlWMmxrZEdncElIdGNjbHh1SUNBZ0lHSnZjbVJsY2kxM2FXUjBhRG9nUUdKdmNtUmxjbGRwWkhSb08xeHlYRzU5WEhKY2JseHlYRzR1YzJWMFFYSnliM2NvUUdScGNtVmpkR2x2Yml3Z1FHSnZjbVJsY2xkcFpIUm9MQ0JBWW05eVpHVnlRMjlzYjNJcElIZG9aVzRnS0VCa2FYSmxZM1JwYjI0Z1BTQjBiM0FwSUh0Y2NseHVJQ0FnSUdScGMzQnNZWGs2SUdsdWJHbHVaUzFpYkc5amF6dGNjbHh1SUNBZ0lIZHBaSFJvT2lBd08xeHlYRzRnSUNBZ2FHVnBaMmgwT2lBd08xeHlYRzRnSUNBZ1ltOXlaR1Z5TFhkcFpIUm9PaUJBWW05eVpHVnlWMmxrZEdnN1hISmNiaUFnSUNCaWIzSmtaWEl0YzNSNWJHVTZJR1JoYzJobFpEdGNjbHh1SUNBZ0lHSnZjbVJsY2kxamIyeHZjam9nZEhKaGJuTndZWEpsYm5RN1hISmNibHh5WEc0Z0lDQWdMbUZ5Y205M1gzUW9RR0p2Y21SbGNrTnZiRzl5S1R0Y2NseHVmVnh5WEc1Y2NseHVMbk5sZEVGeWNtOTNLRUJrYVhKbFkzUnBiMjRzSUVCaWIzSmtaWEpYYVdSMGFDd2dRR0p2Y21SbGNrTnZiRzl5S1NCM2FHVnVJQ2hBWkdseVpXTjBhVzl1SUQwZ2NtbG5hSFFwSUh0Y2NseHVJQ0FnSUdScGMzQnNZWGs2SUdsdWJHbHVaUzFpYkc5amF6dGNjbHh1SUNBZ0lIZHBaSFJvT2lBd08xeHlYRzRnSUNBZ2FHVnBaMmgwT2lBd08xeHlYRzRnSUNBZ1ltOXlaR1Z5TFhkcFpIUm9PaUJBWW05eVpHVnlWMmxrZEdnN1hISmNiaUFnSUNCaWIzSmtaWEl0YzNSNWJHVTZJR1JoYzJobFpEdGNjbHh1SUNBZ0lHSnZjbVJsY2kxamIyeHZjam9nZEhKaGJuTndZWEpsYm5RN1hISmNiaUFnSUNBdVlYSnliM2RmY2loQVltOXlaR1Z5UTI5c2IzSXBPMXh5WEc1OVhISmNibHh5WEc0dWMyVjBRWEp5YjNjb1FHUnBjbVZqZEdsdmJpd2dRR0p2Y21SbGNsZHBaSFJvTENCQVltOXlaR1Z5UTI5c2IzSXBJSGRvWlc0Z0tFQmthWEpsWTNScGIyNGdQU0JpYjNSMGIyMHBJSHRjY2x4dUlDQWdJR1JwYzNCc1lYazZJR2x1YkdsdVpTMWliRzlqYXp0Y2NseHVJQ0FnSUhkcFpIUm9PaUF3TzF4eVhHNGdJQ0FnYUdWcFoyaDBPaUF3TzF4eVhHNGdJQ0FnWW05eVpHVnlMWGRwWkhSb09pQkFZbTl5WkdWeVYybGtkR2c3WEhKY2JpQWdJQ0JpYjNKa1pYSXRjM1I1YkdVNklHUmhjMmhsWkR0Y2NseHVJQ0FnSUdKdmNtUmxjaTFqYjJ4dmNqb2dkSEpoYm5Od1lYSmxiblE3WEhKY2JpQWdJQ0F1WVhKeWIzZGZZaWhBWW05eVpHVnlRMjlzYjNJcE8xeHlYRzU5WEhKY2JseHlYRzR1YzJWMFFYSnliM2NvUUdScGNtVmpkR2x2Yml3Z1FHSnZjbVJsY2xkcFpIUm9MQ0JBWW05eVpHVnlRMjlzYjNJcElIZG9aVzRnS0VCa2FYSmxZM1JwYjI0Z1BTQnNaV1owS1NCN1hISmNiaUFnSUNCa2FYTndiR0Y1T2lCcGJteHBibVV0WW14dlkyczdYSEpjYmlBZ0lDQjNhV1IwYURvZ01EdGNjbHh1SUNBZ0lHaGxhV2RvZERvZ01EdGNjbHh1SUNBZ0lHSnZjbVJsY2kxM2FXUjBhRG9nUUdKdmNtUmxjbGRwWkhSb08xeHlYRzRnSUNBZ1ltOXlaR1Z5TFhOMGVXeGxPaUJrWVhOb1pXUTdYSEpjYmlBZ0lDQmliM0prWlhJdFkyOXNiM0k2SUhSeVlXNXpjR0Z5Wlc1ME8xeHlYRzRnSUNBZ0xtRnljbTkzWDJ3b1FHSnZjbVJsY2tOdmJHOXlLVHRjY2x4dWZWeHlYRzVjY2x4dUxtRnljbTkzWDNRb1FHTXBJSHRjY2x4dUlDQWdJR0p2Y21SbGNpMTBiM0F0ZDJsa2RHZzZJREE3WEhKY2JpQWdJQ0JpYjNKa1pYSXRZbTkwZEc5dExXTnZiRzl5T2lCQVl6dGNjbHh1SUNBZ0lHSnZjbVJsY2kxaWIzUjBiMjB0YzNSNWJHVTZJSE52Ykdsa08xeHlYRzU5WEhKY2JseHlYRzR1WVhKeWIzZGZjaWhBWXlrZ2UxeHlYRzRnSUNBZ1ltOXlaR1Z5TFhKcFoyaDBMWGRwWkhSb09pQXdPMXh5WEc0Z0lDQWdZbTl5WkdWeUxXeGxablF0WTI5c2IzSTZJRUJqTzF4eVhHNGdJQ0FnWW05eVpHVnlMV3hsWm5RdGMzUjViR1U2SUhOdmJHbGtPMXh5WEc1OVhISmNibHh5WEc0dVlYSnliM2RmWWloQVl5a2dlMXh5WEc0Z0lDQWdZbTl5WkdWeUxXSnZkSFJ2YlMxM2FXUjBhRG9nTUR0Y2NseHVJQ0FnSUdKdmNtUmxjaTEwYjNBdFkyOXNiM0k2SUVCak8xeHlYRzRnSUNBZ1ltOXlaR1Z5TFhSdmNDMXpkSGxzWlRvZ2MyOXNhV1E3WEhKY2JuMWNjbHh1WEhKY2JpNWhjbkp2ZDE5c0tFQmpLU0I3WEhKY2JpQWdJQ0JpYjNKa1pYSXRiR1ZtZEMxM2FXUjBhRG9nTUR0Y2NseHVJQ0FnSUdKdmNtUmxjaTF5YVdkb2RDMWpiMnh2Y2pvZ1FHTTdYSEpjYmlBZ0lDQmliM0prWlhJdGNtbG5hSFF0YzNSNWJHVTZJSE52Ykdsa08xeHlYRzU5WEhKY2JseHlYRzR2THlCamMzTXpJR0Z5Y205M1hISmNiaTV6WlhSQmNuSnZkMWRwWkhSb1gxZGhjQ2hBWW05eVpHVnlWMmxrZEdncElIdGNjbHh1SUNBZ0lHSnZjbVJsY2kxM2FXUjBhRG9nUUdKdmNtUmxjbGRwWkhSb0lFQmliM0prWlhKWGFXUjBhQ0F3SURBN1hISmNibjFjY2x4dVhISmNiaTV6WlhSQmNuSnZkMU5wZW1WZlYyRndLRUJoY25KdmQzTnBlbVVwSUh0Y2NseHVJQ0FnSUdobGFXZG9kRG9nUUdGeWNtOTNjMmw2WlR0Y2NseHVJQ0FnSUhkcFpIUm9PaUJBWVhKeWIzZHphWHBsTzF4eVhHNTlYSEpjYmx4eVhHNHVjMlYwUVhKeWIzZGZWMkZ3S0VCa2FYSmxZM1JwYjI0c0lFQmhjbkp2ZDNOcGVtVXNJRUJpYjNKa1pYSkRiMnh2Y2l4QVltOXlaR1Z5VjJsa2RHZ3BJSGRvWlc0Z0tFQmthWEpsWTNScGIyNGdQU0IwYjNBcElIdGNjbHh1SUNBZ0lHUnBjM0JzWVhrNklHbHViR2x1WlMxaWJHOWphenRjY2x4dUlDQWdJQzUwY21GdWMyWnZjbTBvZEhKaGJuTnNZWFJsS0RBc0lEQXBJSEp2ZEdGMFpTZ3RORFZrWldjcEtUdGNjbHh1SUNBZ0lDNXpaWFJCY25KdmQxTnBlbVZmVjJGd0tFQmhjbkp2ZDNOcGVtVXBPMXh5WEc0Z0lDQWdMbk5sZEVGeWNtOTNWMmxrZEdoZlYyRndLRUJpYjNKa1pYSlhhV1IwYUNrN1hISmNiaUFnSUNCaWIzSmtaWEl0WTI5c2IzSTZJRUJpYjNKa1pYSkRiMnh2Y2p0Y2NseHVJQ0FnSUdKdmNtUmxjaTF6ZEhsc1pUb2djMjlzYVdRN1hISmNibjFjY2x4dVhISmNiaTV6WlhSQmNuSnZkMTlYWVhBb1FHUnBjbVZqZEdsdmJpd2dRR0Z5Y205M2MybDZaU3dnUUdKdmNtUmxja052Ykc5eUxFQmliM0prWlhKWGFXUjBhQ2tnZDJobGJpQW9RR1JwY21WamRHbHZiaUE5SUhKcFoyaDBLU0I3WEhKY2JpQWdJQ0JrYVhOd2JHRjVPaUJwYm14cGJtVXRZbXh2WTJzN1hISmNiaUFnSUNCMGNtRnVjMlp2Y20wNklISnZkR0YwWlNnME5XUmxaeWs3WEhKY2JpQWdJQ0F1YzJWMFFYSnliM2RUYVhwbFgxZGhjQ2hBWVhKeWIzZHphWHBsS1R0Y2NseHVJQ0FnSUM1elpYUkJjbkp2ZDFkcFpIUm9YMWRoY0NoQVltOXlaR1Z5VjJsa2RHZ3BPMXh5WEc0Z0lDQWdZbTl5WkdWeUxXTnZiRzl5T2lCQVltOXlaR1Z5UTI5c2IzSTdYSEpjYmlBZ0lDQmliM0prWlhJdGMzUjViR1U2SUhOdmJHbGtPMXh5WEc0Z0lDQWdjRzl6YVhScGIyNDZJSEpsYkdGMGFYWmxPMXh5WEc0Z0lDQWdkRzl3T2lBdE1uQjRPMXh5WEc1OVhISmNibHh5WEc0dWMyVjBRWEp5YjNkZlYyRndLRUJrYVhKbFkzUnBiMjRzSUVCaGNuSnZkM05wZW1Vc0lFQmliM0prWlhKRGIyeHZjaXhBWW05eVpHVnlWMmxrZEdncElIZG9aVzRnS0VCa2FYSmxZM1JwYjI0Z1BTQmtiM2R1S1NCN1hISmNiaUFnSUNCa2FYTndiR0Y1T2lCcGJteHBibVV0WW14dlkyczdYSEpjYmlBZ0lDQjBjbUZ1YzJadmNtMDZJSEp2ZEdGMFpTZ3hNelZrWldjcE8xeHlYRzRnSUNBZ0xuTmxkRUZ5Y205M1UybDZaVjlYWVhBb1FHRnljbTkzYzJsNlpTazdYSEpjYmlBZ0lDQXVjMlYwUVhKeWIzZFhhV1IwYUY5WFlYQW9RR0p2Y21SbGNsZHBaSFJvS1R0Y2NseHVJQ0FnSUdKdmNtUmxjaTFqYjJ4dmNqb2dRR0p2Y21SbGNrTnZiRzl5TzF4eVhHNGdJQ0FnWW05eVpHVnlMWE4wZVd4bE9pQnpiMnhwWkR0Y2NseHVYSEpjYmlBZ0lDQndiM05wZEdsdmJqb2djbVZzWVhScGRtVTdYSEpjYmlBZ0lDQjBiM0E2SUMwemNIZzdYSEpjYm4xY2NseHVYSEpjYmk1elpYUkJjbkp2ZDE5WFlYQW9RR1JwY21WamRHbHZiaXdnUUdGeWNtOTNjMmw2WlN3Z1FHSnZjbVJsY2tOdmJHOXlMRUJpYjNKa1pYSlhhV1IwYUNrZ2QyaGxiaUFvUUdScGNtVmpkR2x2YmlBOUlHeGxablFwSUh0Y2NseHVJQ0FnSUdScGMzQnNZWGs2SUdsdWJHbHVaUzFpYkc5amF6dGNjbHh1SUNBZ0lIUnlZVzV6Wm05eWJUb2djbTkwWVhSbEtDMHhNelZrWldjcE8xeHlYRzRnSUNBZ0xuTmxkRUZ5Y205M1UybDZaVjlYWVhBb1FHRnljbTkzYzJsNlpTazdYSEpjYmlBZ0lDQXVjMlYwUVhKeWIzZFhhV1IwYUY5WFlYQW9RR0p2Y21SbGNsZHBaSFJvS1R0Y2NseHVJQ0FnSUdKdmNtUmxjaTFqYjJ4dmNqb2dRR0p2Y21SbGNrTnZiRzl5TzF4eVhHNGdJQ0FnWW05eVpHVnlMWE4wZVd4bE9pQnpiMnhwWkR0Y2NseHVYSEpjYmlBZ0lDQndiM05wZEdsdmJqb2djbVZzWVhScGRtVTdYSEpjYmlBZ0lDQjBiM0E2SUMweWNIZzdYSEpjYm4waUxDSkFhVzF3YjNKMElGd2lMaTR2TGk0dkxpNHZZbUZ6WlM5bWJsd2lPMXh5WEc1Y2NseHVMbmRsZFdsZlkyaGxZMnRmYkdGaVpXd2dlMXh5WEc0Z0lDQWdMbk5sZEZSaGNFTnZiRzl5S0NrN1hISmNibjFjY2x4dVhISmNiaTUzWlhWcFgyTm9aV05yZTF4eVhHNGdJQ0FnY0c5emFYUnBiMjQ2SUdGaWMyOXNkWFJsTzF4eVhHNGdJQ0FnYkdWbWREb2dMVGs1T1RsbGJUdGNjbHh1ZlZ4eVhHNGlMQ0pBYVcxd2IzSjBJRndpTGk0dkxpNHZMaTR2WW1GelpTOW1ibHdpTzF4eVhHNWNjbHh1THk4Z2JXVjBhRzlrTWlCaFkyTmxjM05pYVd4cGRIbGNjbHh1TG5kbGRXbGZZMlZzYkhOZmNtRmthVzk3WEhKY2JpQWdJQ0F1ZDJWMWFWOWpaV3hzWDJaMElIdGNjbHh1SUNBZ0lDQWdJQ0J3WVdSa2FXNW5MV3hsWm5RNklFQjNaWFZwUTJWc2JFbHVibVZ5UjJGd1NEdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lDNTNaWFZwWDJObGJHd2dlMXh5WEc0Z0lDQWdJQ0FnSUNZNllXTjBhWFpsSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTBWRFJVTkZRenRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjFjY2x4dUxuZGxkV2xmWTJobFkyc2dlMXh5WEc0Z0lDQWdMeThnY21Ga2FXOWNjbHh1SUNBZ0lDNTNaWFZwWDJObGJHeHpYM0poWkdsdklDWWdlMXh5WEc0Z0lDQWdJQ0FnSUNZNlkyaGxZMnRsWkNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNZZ0t5QXVkMlYxYVY5cFkyOXVYMk5vWldOclpXUWdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSmpwaVpXWnZjbVVnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5SbGJuUTZJQ2RjWEVWQk1EZ25PMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiRzl5T2lBak1EbENRakEzTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVRad2VEdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmU0lzSWtCcGJYQnZjblFnWENJdUxpOHVMaTh1TGk5aVlYTmxMMlp1WENJN1hISmNibHh5WEc0dWQyVjFhVjlqWld4c2MxOWphR1ZqYTJKdmVDQjdYSEpjYmlBZ0lDQXVkMlYxYVY5alpXeHNYMmhrSUh0Y2NseHVJQ0FnSUNBZ0lDQndZV1JrYVc1bkxYSnBaMmgwT2lCQWQyVjFhVU5sYkd4SmJtNWxja2RoY0VnN1hISmNiaUFnSUNCOVhISmNiaUFnSUNBdWQyVjFhVjlqWld4c0lIdGNjbHh1SUNBZ0lDQWdJQ0FtT21GamRHbDJaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05GUTBWRFJVTTdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnTG5kbGRXbGZhV052Ymw5amFHVmphMlZrSUh0Y2NseHVJQ0FnSUNBZ0lDQW1PbUpsWm05eVpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJsYm5RNklDZGNYRVZCTURFbk8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyeHZjam9nSTBNNVF6bERPVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF5TTNCNE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCa2FYTndiR0Y1T2lCaWJHOWphenRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjFjY2x4dVhISmNiaTh2SUcxbGRHaHZaRElnWVdOalpYTnpZbWxzYVhSNVhISmNiaTUzWlhWcFgyTm9aV05ySUh0Y2NseHVJQ0FnSUM4dklHTm9aV05yWW05NFhISmNiaUFnSUNBdWQyVjFhVjlqWld4c2MxOWphR1ZqYTJKdmVDQW1JSHRjY2x4dUlDQWdJQ0FnSUNBbU9tTm9aV05yWldRZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBbUlDc2dMbmRsZFdsZmFXTnZibDlqYUdWamEyVmtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNZNlltVm1iM0psSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFpXNTBPaUFuWEZ4RlFUQTJKenRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ0l6QTVRa0l3Tnp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dWZTSXNJa0JwYlhCdmNuUWdYQ0l1TGk4dUxpOHVMaTlpWVhObEwyWnVYQ0k3WEhKY2JseHlYRzR1ZDJWMWFWOXNZV0psYkh0Y2NseHVJQ0JrYVhOd2JHRjVPbUpzYjJOck8xeHlYRzRnSUhkcFpIUm9Pak5sYlR0Y2NseHVmVnh5WEc0dWQyVjFhVjlwYm5CMWRDQjdYSEpjYmlBZ0lDQjNhV1IwYURvZ01UQXdKVHRjY2x4dUlDQWdJR0p2Y21SbGNqb2dNRHRjY2x4dUlDQWdJRzkxZEd4cGJtVTZJREE3WEhKY2JpQWdJQ0F0ZDJWaWEybDBMV0Z3Y0dWaGNtRnVZMlU2SUc1dmJtVTdYSEpjYmlBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQjBjbUZ1YzNCaGNtVnVkRHRjY2x4dUlDQWdJR1p2Ym5RdGMybDZaVG9nYVc1b1pYSnBkRHRjY2x4dUlDQWdJR052Ykc5eU9pQnBibWhsY21sME8xeHlYRzRnSUNBZ2FHVnBaMmgwT2lCMWJtbDBLRUIzWlhWcFEyVnNiRXhwYm1WSVpXbG5hSFFzSUdWdEtUdGNjbHh1SUNBZ0lHeHBibVV0YUdWcFoyaDBPaUJBZDJWMWFVTmxiR3hNYVc1bFNHVnBaMmgwTzF4eVhHNWNjbHh1SUNBZ0lDOHZJR2hwWkdWeklIUm9aU0J6Y0dsdUxXSjFkSFJ2Ymx4eVhHNGdJQ0FnSmpvNkxYZGxZbXRwZEMxdmRYUmxjaTF6Y0dsdUxXSjFkSFJ2Yml3Z0pqbzZMWGRsWW10cGRDMXBibTVsY2kxemNHbHVMV0oxZEhSdmJudGNjbHh1SUNBZ0lDQWdJQ0F0ZDJWaWEybDBMV0Z3Y0dWaGNtRnVZMlU2SUc1dmJtVTdYSEpjYmlBZ0lDQWdJQ0FnYldGeVoybHVPaUF3TzF4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmk1M1pYVnBYM1JsZUhSaGNtVmhJSHRjY2x4dUlDQWdJR1JwYzNCc1lYazZJR0pzYjJOck8xeHlYRzRnSUNBZ1ltOXlaR1Z5T2lBd08xeHlYRzRnSUNBZ2NtVnphWHBsT2lCdWIyNWxPMXh5WEc0Z0lDQWdkMmxrZEdnNklERXdNQ1U3WEhKY2JpQWdJQ0JtYjI1MExYTnBlbVU2SURGbGJUdGNjbHh1SUNBZ0lHeHBibVV0YUdWcFoyaDBPaUJwYm1obGNtbDBPMXh5WEc0Z0lDQWdiM1YwYkdsdVpUb2dNRHRjY2x4dWZWeHlYRzVjY2x4dUxuZGxkV2xmZEc5d2RHbHdjeUI3WEhKY2JpQWdJQ0JrYVhOd2JHRjVPbTV2Ym1VN1hISmNiaUFnSUNCd2IzTnBkR2x2YmpvZ1ptbDRaV1E3WEhKY2JpQWdJQ0F0ZDJWaWEybDBMWFJ5WVc1elptOXliVG9nZEhKaGJuTnNZWFJsV2lnd0tUdGNjbHh1SUNBZ0lIZHBaSFJvT2lBeE1EQWxPMXh5WEc0Z0lDQWdkRzl3T2lBd08xeHlYRzRnSUNBZ2JHbHVaUzFvWldsbmFIUTZJREl1TXp0Y2NseHVJQ0FnSUdadmJuUXRjMmw2WlRveE5IQjRPMXh5WEc0Z0lDQWdkR1Y0ZEMxaGJHbG5iam9nWTJWdWRHVnlPMXh5WEc0Z0lDQWdZMjlzYjNJNklDTkdSa1k3WEhKY2JpQWdJQ0I2TFdsdVpHVjRPaUF5TzF4eVhHNGdJQ0FnSmk1M1pYVnBYM2RoY200Z2UxeHlYRzRnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJRUJuYkc5aVlXeFhZWEp1UTI5c2IzSTdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVMbmRsZFdsZlkyVnNiSE5mWm05eWJTQjdYSEpjYmlBZ0lDQXVkMlYxYVY5alpXeHNYM2RoY201N1hISmNiaUFnSUNBZ0lDQWdZMjlzYjNJNlFHZHNiMkpoYkZkaGNtNURiMnh2Y2p0Y2NseHVJQ0FnSUNBZ0lDQXVkMlYxYVY5cFkyOXVYM2RoY201N1pHbHpjR3hoZVRwcGJteHBibVV0WW14dlkyczdmVnh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdMbmRsZFdsZlkyVnNiRjlvWkNCN1hISmNiaUFnSUNBZ0lDQWdjR0ZrWkdsdVp5MXlhV2RvZERvZ0xqTmxiVHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJQzUzWlhWcFgyTmxiR3hmWm5SN1ptOXVkQzF6YVhwbE9qQTdmVnh5WEc0Z0lDQWdMbmRsZFdsZmFXTnZibDkzWVhKdWUxeHlYRzRnSUNBZ0lDQWdJR1JwYzNCc1lYazZibTl1WlR0Y2NseHVJQ0FnSUgxY2NseHVmVnh5WEc0aUxDSkFhVzF3YjNKMElGd2lMaTR2TGk0dkxpNHZZbUZ6WlM5bWJsd2lPMXh5WEc1Y2NseHVMbmRsZFdsZlkyVnNiRjl6Wld4bFkzUWdlMXh5WEc0Z0lDQWdjR0ZrWkdsdVp6b2dNRHRjY2x4dUlDQWdJQzUzWlhWcFgzTmxiR1ZqZENCN1hISmNiaUFnSUNBZ0lDQWdjR0ZrWkdsdVp5MXlhV2RvZERvZ016QndlRHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJQzUzWlhWcFgyRmpZMlZ6YzE5cFkyOXVJSHRjY2x4dVhISmNiaUFnSUNCOVhISmNiaUFnSUNBdWQyVjFhVjlqWld4c1gySmtlMXh5WEc0Z0lDQWdJQ0FnSUNZNllXWjBaWEo3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5SbGJuUTZJRndpSUZ3aU8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBdWMyVjBRWEp5YjNkZlYyRndLSEpwWjJoMExDQTJjSGdzSUNORE9FTTRRMFFzSURKd2VDazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J3YjNOcGRHbHZiam9nWVdKemIyeDFkR1U3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2Y0RvZ05UQWxPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlhV2RvZERvZ1FIZGxkV2xEWld4c1IyRndTRHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdiV0Z5WjJsdUxYUnZjRG9nTFROd2VEdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JpNTNaWFZwWDNObGJHVmpkQ0I3WEhKY2JpQWdJQ0F0ZDJWaWEybDBMV0Z3Y0dWaGNtRnVZMlU2SUc1dmJtVTdYSEpjYmlBZ0lDQmliM0prWlhJNklEQTdYSEpjYmlBZ0lDQnZkWFJzYVc1bE9pQXdPMXh5WEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dkSEpoYm5Od1lYSmxiblE3WEhKY2JpQWdJQ0IzYVdSMGFEb2dNVEF3SlR0Y2NseHVJQ0FnSUdadmJuUXRjMmw2WlRvZ2FXNW9aWEpwZER0Y2NseHVJQ0FnSUdobGFXZG9kRG9nUUhkbGRXbERaV3hzU0dWcFoyaDBPMXh5WEc0Z0lDQWdjRzl6YVhScGIyNDZJSEpsYkdGMGFYWmxPMXh5WEc0Z0lDQWdlaTFwYm1SbGVEb2dNVHRjY2x4dUlDQWdJSEJoWkdScGJtY3RiR1ZtZERvZ1FIZGxkV2xEWld4c1IyRndTRHRjY2x4dWZWeHlYRzRpTENKQWFXMXdiM0owSUZ3aUxpNHZMaTR2TGk0dlltRnpaUzltYmx3aU8xeHlYRzVBYVcxd2IzSjBJRndpTGk5M1pYVnBYM05sYkdWamRGd2lPMXh5WEc1Y2NseHVMbmRsZFdsZmMyVnNaV04wWDJKbFptOXlaU0I3WEhKY2JpQWdJQ0J3WVdSa2FXNW5MWEpwWjJoME9rQjNaWFZwUTJWc2JFZGhjRWc3WEhKY2JpQWdJQ0F1ZDJWMWFWOXpaV3hsWTNSN2QybGtkR2c2WVhWMGJ6dDlYSEpjYmlBZ0lDQXVkMlYxYVY5alpXeHNYMmhrSUh0Y2NseHVJQ0FnSUNBZ0lDQndiM05wZEdsdmJqcHlaV3hoZEdsMlpUdGNjbHh1SUNBZ0lDQWdJQ0FtT21GbWRHVnlJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbk5sZEZKcFoyaDBUR2x1WlNoQWQyVjFhVU5sYkd4Q2IzSmtaWEpEYjJ4dmNpazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDWTZZbVZtYjNKbGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNTBaVzUwT2lCY0lpQmNJanRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbk5sZEVGeWNtOTNYMWRoY0NoeWFXZG9kQ3dnTm5CNExDQWpRemhET0VORUxDQXljSGdwTzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NHOXphWFJwYjI0NklHRmljMjlzZFhSbE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGIzQTZJRFV3SlR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21sbmFIUTZJRUIzWlhWcFEyVnNiRWRoY0VnN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUcxaGNtZHBiaTEwYjNBNklDMHpjSGc3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ0xuZGxkV2xmWTJWc2JGOWlaQ0I3WEhKY2JpQWdJQ0FnSUNBZ2NHRmtaR2x1Wnkxc1pXWjBPa0IzWlhWcFEyVnNiRWRoY0VnN1hISmNiaUFnSUNBZ0lDQWdKanBoWm5SbGNudGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1pHbHpjR3hoZVRwdWIyNWxPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmU0lzSWtCcGJYQnZjblFnWENJdUxpOHVMaTh1TGk5aVlYTmxMMlp1WENJN1hISmNia0JwYlhCdmNuUWdYQ0l1TDNkbGRXbGZjMlZzWldOMFhDSTdYSEpjYmx4eVhHNHVkMlYxYVY5elpXeGxZM1JmWVdaMFpYSWdlMXh5WEc0Z0lDQWdjR0ZrWkdsdVp5MXNaV1owT2tCM1pYVnBRMlZzYkVkaGNFZzdYSEpjYm4waUxDSkFhVzF3YjNKMElGd2lMaTR2TGk0dkxpNHZZbUZ6WlM5bWJsd2lPMXh5WEc1Y2NseHVMbmRsZFdsZmRtTnZaR1VnZTF4eVhHNGdJQ0FnY0dGa1pHbHVaeTEwYjNBNklEQTdYSEpjYmlBZ0lDQndZV1JrYVc1bkxYSnBaMmgwT2lBd08xeHlYRzRnSUNBZ2NHRmtaR2x1WnkxaWIzUjBiMjA2SURBN1hISmNiaUFnSUNBdWQyVjFhVjlqWld4c1gyWjBJSHRjY2x4dUlDQWdJQ0FnSUNCcGJXY2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRZWEpuYVc0dGJHVm1kRG9nTlhCNE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCb1pXbG5hSFE2SUVCM1pYVnBRMlZzYkVobGFXZG9kRHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkbVZ5ZEdsallXd3RZV3hwWjI0NklHMXBaR1JzWlR0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4waUxDSkFhVzF3YjNKMElGd2lMaTR2TGk0dlltRnpaUzltYmx3aU8xeHlYRzVBZDJWMWFWTjNhWFJqYUVobGFXZG9kRG9nTXpKd2VEdGNjbHh1TG5kbGRXbGZZMlZzYkY5emQybDBZMmg3WEhKY2JpQWdJQ0J3WVdSa2FXNW5MWFJ2Y0RvZ0tFQjNaWFZwUTJWc2JFaGxhV2RvZENBdElFQjNaWFZwVTNkcGRHTm9TR1ZwWjJoMEtTQXZJREk3WEhKY2JpQWdJQ0J3WVdSa2FXNW5MV0p2ZEhSdmJUb2dLRUIzWlhWcFEyVnNiRWhsYVdkb2RDQXRJRUIzWlhWcFUzZHBkR05vU0dWcFoyaDBLU0F2SURJN1hISmNibjFjY2x4dUxuZGxkV2xmYzNkcGRHTm9lMXh5WEc0Z0lDQWdZWEJ3WldGeVlXNWpaVG9nYm05dVpUdGNjbHh1SUNBZ0lIQnZjMmwwYVc5dU9pQnlaV3hoZEdsMlpUdGNjbHh1SUNBZ0lIZHBaSFJvT2lBMU1uQjRPMXh5WEc0Z0lDQWdhR1ZwWjJoME9pQkFkMlYxYVZOM2FYUmphRWhsYVdkb2REdGNjbHh1SUNBZ0lHSnZjbVJsY2pvZ01YQjRJSE52Ykdsa0lDTkVSa1JHUkVZN1hISmNiaUFnSUNCdmRYUnNhVzVsT2lBd08xeHlYRzRnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTVRad2VEdGNjbHh1SUNBZ0lHSnZlQzF6YVhwcGJtYzZJR0p2Y21SbGNpMWliM2c3WEhKY2JpQWdJQ0JpWVdOclozSnZkVzVrT2lBalJFWkVSa1JHTzF4eVhHNGdJQ0FnSmpwaVpXWnZjbVY3WEhKY2JpQWdJQ0FnSUNBZ1kyOXVkR1Z1ZERvZ1hDSWdYQ0k3WEhKY2JpQWdJQ0FnSUNBZ2NHOXphWFJwYjI0NklHRmljMjlzZFhSbE8xeHlYRzRnSUNBZ0lDQWdJSFJ2Y0RvZ01EdGNjbHh1SUNBZ0lDQWdJQ0JzWldaME9pQXdPMXh5WEc0Z0lDQWdJQ0FnSUhkcFpIUm9PaUExTUhCNE8xeHlYRzRnSUNBZ0lDQWdJR2hsYVdkb2REb2dRSGRsZFdsVGQybDBZMmhJWldsbmFIUWdMU0F5TzF4eVhHNGdJQ0FnSUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURFMWNIZzdYSEpjYmlBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTBaRVJrUkdSRHRjY2x4dUlDQWdJQ0FnSUNCMGNtRnVjMmwwYVc5dU9uUnlZVzV6Wm05eWJTQXVNM003WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0FtT21GbWRHVnllMXh5WEc0Z0lDQWdJQ0FnSUdOdmJuUmxiblE2SUZ3aUlGd2lPMXh5WEc0Z0lDQWdJQ0FnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlR0Y2NseHVJQ0FnSUNBZ0lDQjBiM0E2SURBN1hISmNiaUFnSUNBZ0lDQWdiR1ZtZERvZ01EdGNjbHh1SUNBZ0lDQWdJQ0IzYVdSMGFEb2dRSGRsZFdsVGQybDBZMmhJWldsbmFIUWdMU0F5TzF4eVhHNGdJQ0FnSUNBZ0lHaGxhV2RvZERvZ1FIZGxkV2xUZDJsMFkyaElaV2xuYUhRZ0xTQXlPMXh5WEc0Z0lDQWdJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJREUxY0hnN1hISmNiaUFnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dJMFpHUmtaR1JqdGNjbHh1SUNBZ0lDQWdJQ0JpYjNndGMyaGhaRzkzT2lBd0lERndlQ0F6Y0hnZ2NtZGlZU2d3TENBd0xDQXdMQ0F3TGpRcE8xeHlYRzRnSUNBZ0lDQWdJSFJ5WVc1emFYUnBiMjQ2ZEhKaGJuTm1iM0p0SUM0emN6dGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0FtT21Ob1pXTnJaV1I3WEhKY2JpQWdJQ0FnSUNBZ1ltOXlaR1Z5TFdOdmJHOXlPaUFqTURSQ1JUQXlPMXh5WEc0Z0lDQWdJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUNNd05FSkZNREk3WEhKY2JpQWdJQ0FnSUNBZ0pqcGlaV1p2Y21WN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlRvZ2MyTmhiR1VvTUNrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUNZNllXWjBaWEo3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJ5WVc1elptOXliVG9nZEhKaGJuTnNZWFJsV0NneU1IQjRLVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjBpTENKQWFXMXdiM0owSUZ3aUxpNHZMaTR2WW1GelpTOW1ibHdpTzF4eVhHNUFhVzF3YjNKMElGd2lMaTR2ZDJWMWFWOWlkWFIwYjI0dmQyVjFhVjlpZFhSMGIyNWNJanRjY2x4dVhISmNiaTUzWlhWcFgyMXpaeUI3WEhKY2JpQWdJQ0J3WVdSa2FXNW5MWFJ2Y0RvZ1FIZGxkV2xOYzJkUVlXUmthVzVuVkc5d08xeHlYRzRnSUNBZ2RHVjRkQzFoYkdsbmJqb2dZMlZ1ZEdWeU8xeHlYRzVjY2x4dUlDQWdJQzUzWlhWcFgybGpiMjVmWVhKbFlTQjdYSEpjYmlBZ0lDQWdJQ0FnYldGeVoybHVMV0p2ZEhSdmJUb2dRSGRsZFdsTmMyZEpZMjl1UjJGd08xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzUzWlhWcFgzUmxlSFJmWVhKbFlTQjdYSEpjYmlBZ0lDQWdJQ0FnYldGeVoybHVMV0p2ZEhSdmJUb2dRSGRsZFdsTmMyZFVaWGgwUjJGd08xeHlYRzRnSUNBZ0lDQWdJSEJoWkdScGJtYzZNQ0F5TUhCNE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ0xuZGxkV2xmYlhOblgzUnBkR3hsSUh0Y2NseHVJQ0FnSUNBZ0lDQnRZWEpuYVc0dFltOTBkRzl0T2lCQWQyVjFhVTF6WjFScGRHeGxSMkZ3TzF4eVhHNGdJQ0FnSUNBZ0lHWnZiblF0ZDJWcFoyaDBPaUEwTURBN1hISmNiaUFnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF5TUhCNE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ0xuZGxkV2xmYlhOblgyUmxjMk1nZTF4eVhHNGdJQ0FnSUNBZ0lHWnZiblF0YzJsNlpUb2dNVFJ3ZUR0Y2NseHVJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ1FHZHNiMkpoYkZSbGVIUkRiMnh2Y2p0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQXVkMlYxYVY5dmNISmZZWEpsWVNCN1hISmNiaUFnSUNBZ0lDQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ1FIZGxkV2xOYzJkUGNISkhZWEE3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0xuZGxkV2xmWlhoMGNtRmZZWEpsWVNCN1hISmNiaUFnSUNBZ0lDQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ1FIZGxkV2xOYzJkRmVIUnlZVUZ5WldGSFlYQTdYSEpjYmlBZ0lDQWdJQ0FnWm05dWRDMXphWHBsT2lBeE5IQjRPMXh5WEc0Z0lDQWdJQ0FnSUdOdmJHOXlPaUJBWjJ4dlltRnNWR1Y0ZEVOdmJHOXlPMXh5WEc0Z0lDQWdJQ0FnSUdGN1kyOXNiM0k2SUVCbmJHOWlZV3hNYVc1clEyOXNiM0k3ZlZ4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNUFiV1ZrYVdFZ2MyTnlaV1Z1SUdGdVpDQW9iV2x1TFdobGFXZG9kRG9nUUhkbGRXbE5jMmRGZUhSeVlVRnlaV0ZQWmsxcGJraGxhV2RvZENrZ2UxeHlYRzRnSUNBZ0xuZGxkV2xmWlhoMGNtRmZZWEpsWVNCN1hISmNiaUFnSUNBZ0lDQWdjRzl6YVhScGIyNDZJR1pwZUdWa08xeHlYRzRnSUNBZ0lDQWdJR3hsWm5RNklEQTdYSEpjYmlBZ0lDQWdJQ0FnWW05MGRHOXRPaUF3TzF4eVhHNGdJQ0FnSUNBZ0lIZHBaSFJvT2lBeE1EQWxPMXh5WEc0Z0lDQWdJQ0FnSUhSbGVIUXRZV3hwWjI0NklHTmxiblJsY2p0Y2NseHVJQ0FnSUgxY2NseHVmU0lzSWtCcGJYQnZjblFnWENJdUxpOHVMaTlpWVhObEwyWnVYQ0k3WEhKY2JseHlYRzR1ZDJWMWFWOWhjblJwWTJ4bElIdGNjbHh1SUNBZ0lIQmhaR1JwYm1jNklESXdjSGdnTVRWd2VEdGNjbHh1SUNBZ0lHWnZiblF0YzJsNlpUb2dNVFZ3ZUR0Y2NseHVJQ0FnSUhObFkzUnBiMjRnZTF4eVhHNGdJQ0FnSUNBZ0lHMWhjbWRwYmkxaWIzUjBiMjA2SURFdU5XVnRPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdhREVnZTF4eVhHNGdJQ0FnSUNBZ0lHWnZiblF0YzJsNlpUb2dNVGR3ZUR0Y2NseHVJQ0FnSUNBZ0lDQm1iMjUwTFhkbGFXZG9kRG8wTURBN1hISmNiaUFnSUNBZ0lDQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ0xqYzFaVzA3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0JvTWlCN1hISmNiaUFnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF4Tm5CNE8xeHlYRzRnSUNBZ0lDQWdJR1p2Ym5RdGQyVnBaMmgwT2pRd01EdGNjbHh1SUNBZ0lDQWdJQ0J0WVhKbmFXNHRZbTkwZEc5dE9pQXVNMlZ0TzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnYURNZ2UxeHlYRzRnSUNBZ0lDQWdJR1p2Ym5RdGQyVnBaMmgwT2pRd01EdGNjbHh1SUNBZ0lDQWdJQ0JtYjI1MExYTnBlbVU2SURFMWNIZzdYSEpjYmlBZ0lDQjlYSEpjYm4waUxDSkFhVzF3YjNKMElGd2lMaTR2TGk0dlltRnpaUzltYmx3aU8xeHlYRzVjY2x4dUxuZGxkV2xmY0hKdlozSmxjM01nZTF4eVhHNGdJQ0FnWkdsemNHeGhlVG9nWm14bGVEdGNjbHh1SUNBZ0lHRnNhV2R1TFdsMFpXMXpPaUJqWlc1MFpYSTdYSEpjYm4xY2NseHVYSEpjYmk1M1pYVnBYM0J5YjJkeVpYTnpYMkpoY2lCN1hISmNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lCQWQyVjFhVkJ5YjJkeVpYTnpRbWM3WEhKY2JpQWdJQ0JvWldsbmFIUTZJRUIzWlhWcFVISnZaM0psYzNOSVpXbG5hSFE3WEhKY2JpQWdJQ0JtYkdWNE9pQXhPMXh5WEc1OVhISmNibHh5WEc0dWQyVjFhVjl3Y205bmNtVnpjMTlwYm01bGNsOWlZWElnZTF4eVhHNGdJQ0FnZDJsa2RHZzZJREE3WEhKY2JpQWdJQ0JvWldsbmFIUTZJREV3TUNVN1hISmNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lCQWQyVjFhVkJ5YjJkeVpYTnpRMjlzYjNJN1hISmNibjFjY2x4dVhISmNiaTUzWlhWcFgzQnliMmR5WlhOelgyOXdjaUI3WEhKY2JpQWdJQ0JrYVhOd2JHRjVPaUJpYkc5amF6dGNjbHh1SUNBZ0lHMWhjbWRwYmkxc1pXWjBPaUF4TlhCNE8xeHlYRzRnSUNBZ1ptOXVkQzF6YVhwbE9pQXdPMXh5WEc1OUlpd2lRR2x0Y0c5eWRDQmNJaTR1THk0dUwySmhjMlV2Wm01Y0lqdGNjbHh1WEhKY2JrQjNaWFZwUkdsaGJHOW5RbUZqYTJkeWIzVnVaRU52Ykc5eU9pQWpSa0ZHUVVaRE8xeHlYRzVBZDJWMWFVUnBZV3h2WjB4cGJtVkRiMnh2Y2pvZ0kwUTFSRFZFTmp0Y2NseHVRSGRsZFdsRWFXRnNiMmRNYVc1clEyOXNiM0k2SUNNelEwTTFNVVk3WEhKY2JrQjNaWFZwUkdsaGJHOW5UR2x1YTBGamRHbDJaVUpqT2lBalJVVkZSVVZGTzF4eVhHNWNjbHh1TG5kbGRXbGZaR2xoYkc5bklIdGNjbHh1SUNBZ0lIQnZjMmwwYVc5dU9pQm1hWGhsWkR0Y2NseHVJQ0FnSUhvdGFXNWtaWGc2SURFek8xeHlYRzRnSUNBZ2QybGtkR2c2SURnMUpUdGNjbHh1SUNBZ0lIUnZjRG9nTlRBbE8xeHlYRzRnSUNBZ2JHVm1kRG9nTlRBbE8xeHlYRzRnSUNBZ2RISmhibk5tYjNKdE9pQjBjbUZ1YzJ4aGRHVW9MVFV3SlN3Z0xUVXdKU2s3WEhKY2JseHlYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ1FIZGxkV2xFYVdGc2IyZENZV05yWjNKdmRXNWtRMjlzYjNJN1hISmNiaUFnSUNCMFpYaDBMV0ZzYVdkdU9pQmpaVzUwWlhJN1hISmNiaUFnSUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUF6Y0hnN1hISmNiaUFnSUNBdWQyVjFhVjlrYVdGc2IyZGZZMjl1Wm1seWJTQW1JSHRjY2x4dUlDQWdJQ0FnSUNBdWQyVjFhVjlrYVdGc2IyZGZhR1FnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwWlhoMExXRnNhV2R1T2lCc1pXWjBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQndZV1JrYVc1bk9pQXhMakpsYlNBeU1IQjRJQzQxWlcwN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUM1M1pYVnBYMlJwWVd4dloxOWlaQ0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJsZUhRdFlXeHBaMjQ2SUd4bFpuUTdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNHVkMlYxYVY5a2FXRnNiMmRmYUdRZ2UxeHlYRzRnSUNBZ2NHRmtaR2x1WnpvZ01TNHlaVzBnTUNBdU5XVnRPMXh5WEc1OVhISmNibHh5WEc0dWQyVjFhVjlrYVdGc2IyZGZkR2wwYkdVZ2UxeHlYRzRnSUNBZ1ptOXVkQzEzWldsbmFIUTZJRFF3TUR0Y2NseHVJQ0FnSUdadmJuUXRjMmw2WlRvZ01UZHdlRHRjY2x4dWZWeHlYRzVjY2x4dUxuZGxkV2xmWkdsaGJHOW5YMkprSUh0Y2NseHVJQ0FnSUhCaFpHUnBibWM2SURBZ01qQndlRHRjY2x4dUlDQWdJR1p2Ym5RdGMybDZaVG9nTVRWd2VEdGNjbHh1SUNBZ0lHTnZiRzl5T2lCQVoyeHZZbUZzVkdWNGRFTnZiRzl5TzF4eVhHNTlYSEpjYmx4eVhHNHVkMlYxYVY5a2FXRnNiMmRmWm5RZ2UxeHlYRzRnSUNBZ2NHOXphWFJwYjI0NklISmxiR0YwYVhabE8xeHlYRzRnSUNBZ2JHbHVaUzFvWldsbmFIUTZJRFF5Y0hnN1hISmNiaUFnSUNCdFlYSm5hVzR0ZEc5d09pQXlNSEI0TzF4eVhHNGdJQ0FnWm05dWRDMXphWHBsT2lBeE4zQjRPMXh5WEc0Z0lDQWdaR2x6Y0d4aGVUb2dabXhsZUR0Y2NseHVJQ0FnSUdFZ2UxeHlYRzRnSUNBZ0lDQWdJR1JwYzNCc1lYazZJR0pzYjJOck8xeHlYRzRnSUNBZ0lDQWdJR1pzWlhnNklERTdYSEpjYmlBZ0lDQWdJQ0FnWTI5c2IzSTZJRUIzWlhWcFJHbGhiRzluVEdsdWEwTnZiRzl5TzF4eVhHNGdJQ0FnSUNBZ0lIUmxlSFF0WkdWamIzSmhkR2x2YmpvZ2JtOXVaVHRjY2x4dUlDQWdJQ0FnSUNBdWMyVjBWR0Z3UTI5c2IzSTdYSEpjYmlBZ0lDQWdJQ0FnSmpwaFkzUnBkbVVnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUJBZDJWMWFVUnBZV3h2WjB4cGJtdEJZM1JwZG1WQ1l6dGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0FtT21GbWRHVnlJSHRjY2x4dUlDQWdJQ0FnSUNCamIyNTBaVzUwT2lCY0lpQmNJanRjY2x4dUlDQWdJQ0FnSUNBdWMyVjBWRzl3VEdsdVpTaEFkMlYxYVVScFlXeHZaMHhwYm1WRGIyeHZjaWs3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0F1ZDJWMWFWOWthV0ZzYjJkZlkyOXVabWx5YlNBbUlIdGNjbHh1SUNBZ0lDQWdJQ0JoSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY0c5emFYUnBiMjQ2SUhKbGJHRjBhWFpsTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FtT21GbWRHVnlJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUmxiblE2SUZ3aUlGd2lPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTG5ObGRFeGxablJNYVc1bEtFQjNaWFZwUkdsaGJHOW5UR2x1WlVOdmJHOXlLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQW1PbVpwY25OMExXTm9hV3hrSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDWTZZV1owWlhJZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdScGMzQnNZWGs2SUc1dmJtVTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibjFjY2x4dVhISmNiaTUzWlhWcFgySjBibDlrYVdGc2IyY2dlMXh5WEc0Z0lDQWdKaTVrWldaaGRXeDBJSHRjY2x4dUlDQWdJQ0FnSUNCamIyeHZjam9nSXpNMU16VXpOVHRjY2x4dUlDQWdJSDFjY2x4dUlDQWdJQ1l1Y0hKcGJXRnllU0I3WEhKY2JpQWdJQ0FnSUNBZ1kyOXNiM0k2SUNNd1FrSXlNRU03WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JrQnRaV1JwWVNCelkzSmxaVzRnWVc1a0lDaHRhVzR0ZDJsa2RHZzZJREV3TWpSd2VDa2dlMXh5WEc0Z0lDQWdMbmRsZFdsZlpHbGhiRzluSUh0Y2NseHVJQ0FnSUNBZ0lDQjNhV1IwYURvZ016VWxPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNiaUlzSWtCcGJYQnZjblFnWENJdUxpOHVMaTlpWVhObEwyWnVYQ0k3WEhKY2JseHlYRzR1ZDJWMWFWOTBiMkZ6ZENCN1hISmNiaUFnSUNCd2IzTnBkR2x2YmpvZ1ptbDRaV1E3WEhKY2JpQWdJQ0I2TFdsdVpHVjRPaUF6TzF4eVhHNGdJQ0FnZDJsa2RHZzZJRGN1Tm1WdE8xeHlYRzRnSUNBZ2JXbHVMV2hsYVdkb2REb2dOeTQyWlcwN1hISmNiaUFnSUNCMGIzQTZJREU0TUhCNE8xeHlYRzRnSUNBZ2JHVm1kRG9nTlRBbE8xeHlYRzRnSUNBZ2JXRnlaMmx1TFd4bFpuUTZJQzB6TGpobGJUdGNjbHh1SUNBZ0lHSmhZMnRuY205MWJtUTZJSEpuWW1Fb05EQXNJRFF3TENBME1Dd2dNQzQzTlNrN1hISmNiaUFnSUNCMFpYaDBMV0ZzYVdkdU9pQmpaVzUwWlhJN1hISmNiaUFnSUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUExY0hnN1hISmNiaUFnSUNCamIyeHZjam9nSTBaR1JrWkdSanRjY2x4dWZWeHlYRzR1ZDJWMWFWOXBZMjl1WDNSdllYTjBJSHRjY2x4dUlDQWdJRzFoY21kcGJqb2dNakp3ZUNBd0lEQTdYSEpjYmlBZ0lDQmthWE53YkdGNU9pQmliRzlqYXp0Y2NseHVJQ0FnSUNZNlltVm1iM0psSUh0Y2NseHVJQ0FnSUNBZ0lDQmpiMjUwWlc1ME9pQW5YRnhGUVRBNEp6dGNjbHh1SUNBZ0lDQWdJQ0JqYjJ4dmNqb2dJMFpHUmtaR1JqdGNjbHh1SUNBZ0lDQWdJQ0JtYjI1MExYTnBlbVU2SURVMWNIZzdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVMbmRsZFdsZmRHOWhjM1JmWTI5dWRHVnVkQ0I3WEhKY2JpQWdJQ0J0WVhKbmFXNDZJREFnTUNBeE5YQjRPMXh5WEc1OVhISmNibHh5WEc0dkx5QnNiMkZrYVc1bklIUnZZWE4wWEhKY2JpNTNaWFZwWDJ4dllXUnBibWRmZEc5aGMzUjdYSEpjYmlBZ0lDQXVkMlYxYVY5MGIyRnpkRjlqYjI1MFpXNTBlMXh5WEc0Z0lDQWdJQ0J0WVhKbmFXNHRkRzl3T2pZMEpUdGNjbHh1SUNBZ0lDQWdabTl1ZEMxemFYcGxPakUwY0hnN1hISmNiaUFnSUNCOVhISmNibjFjY2x4dUxuZGxkV2xmYkc5aFpHbHVaM3RjY2x4dUlDQWdJSEJ2YzJsMGFXOXVPaUJoWW5OdmJIVjBaVHRjY2x4dUlDQWdJSGRwWkhSb09pQXdjSGc3WEhKY2JpQWdJQ0I2TFdsdVpHVjRPaUF5TURBd01EQXdNREF3TzF4eVhHNGdJQ0FnYkdWbWREb2dOVEFsTzF4eVhHNGdJQ0FnZEc5d09pQXpPQ1U3WEhKY2JuMWNjbHh1TG5kbGRXbGZiRzloWkdsdVoxOXNaV0ZtZTF4eVhHNGdJQ0FnY0c5emFYUnBiMjQ2SUdGaWMyOXNkWFJsTzF4eVhHNGdJQ0FnZEc5d09pQXRNWEI0TzF4eVhHNGdJQ0FnYjNCaFkybDBlVG9nTUM0eU5UdGNjbHh1SUNBZ0lDWTZZbVZtYjNKbGUxeHlYRzRnSUNBZ0lDQWdJR052Ym5SbGJuUTZYQ0lnWENJN1hISmNiaUFnSUNBZ0lDQWdjRzl6YVhScGIyNDZJR0ZpYzI5c2RYUmxPMXh5WEc0Z0lDQWdJQ0FnSUhkcFpIUm9PaUE0TGpFMGNIZzdYSEpjYmlBZ0lDQWdJQ0FnYUdWcFoyaDBPaUF6TGpBNGNIZzdYSEpjYmlBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkRvZ2NtZGlLREl3T1N3Z01qQTVMQ0F5TVRNcE8xeHlYRzRnSUNBZ0lDQWdJR0p2ZUMxemFHRmtiM2M2SUhKblltRW9NQ3dnTUN3Z01Dd2dNQzR3T1Rnd016a3lLU0F3Y0hnZ01IQjRJREZ3ZUR0Y2NseHVJQ0FnSUNBZ0lDQmliM0prWlhJdGNtRmthWFZ6T2lBeGNIZzdYSEpjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0TFc5eWFXZHBiam9nYkdWbWRDQTFNQ1VnTUhCNE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ0psOHdlMXh5WEc0Z0lDQWdJQ0FnSUdGdWFXMWhkR2x2YmpvZ2IzQmhZMmwwZVMwMk1DMHlOUzB3TFRFeUlERXVNalZ6SUd4cGJtVmhjaUJwYm1acGJtbDBaVHRjY2x4dUlDQWdJQ0FnSUNBbU9tSmxabTl5Wlh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0T2lCeWIzUmhkR1VvTUdSbFp5a2dkSEpoYm5Oc1lYUmxLRGN1T1RKd2VDd2dNSEI0S1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQW1YekY3WEhKY2JpQWdJQ0FnSUNBZ1lXNXBiV0YwYVc5dU9pQnZjR0ZqYVhSNUxUWXdMVEkxTFRFdE1USWdNUzR5TlhNZ2JHbHVaV0Z5SUdsdVptbHVhWFJsTzF4eVhHNGdJQ0FnSUNBZ0lDWTZZbVZtYjNKbGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGNtRnVjMlp2Y20wNklISnZkR0YwWlNnek1HUmxaeWtnZEhKaGJuTnNZWFJsS0RjdU9USndlQ3dnTUhCNEtUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0FtWHpKN1hISmNiaUFnSUNBZ0lDQWdZVzVwYldGMGFXOXVPaUJ2Y0dGamFYUjVMVFl3TFRJMUxUSXRNVElnTVM0eU5YTWdiR2x1WldGeUlHbHVabWx1YVhSbE8xeHlYRzRnSUNBZ0lDQWdJQ1k2WW1WbWIzSmxlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMDZJSEp2ZEdGMFpTZzJNR1JsWnlrZ2RISmhibk5zWVhSbEtEY3VPVEp3ZUN3Z01IQjRLVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNiaUFnSUNBbVh6TjdYSEpjYmlBZ0lDQWdJQ0FnWVc1cGJXRjBhVzl1T2lCdmNHRmphWFI1TFRZd0xUSTFMVE10TVRJZ01TNHlOWE1nYkdsdVpXRnlJR2x1Wm1sdWFYUmxPMXh5WEc0Z0lDQWdJQ0FnSUNZNlltVm1iM0psZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTA2SUhKdmRHRjBaU2c1TUdSbFp5a2dkSEpoYm5Oc1lYUmxLRGN1T1RKd2VDd2dNSEI0S1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQW1YelI3WEhKY2JpQWdJQ0FnSUNBZ1lXNXBiV0YwYVc5dU9pQnZjR0ZqYVhSNUxUWXdMVEkxTFRRdE1USWdNUzR5TlhNZ2JHbHVaV0Z5SUdsdVptbHVhWFJsTzF4eVhHNGdJQ0FnSUNBZ0lDWTZZbVZtYjNKbGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGNtRnVjMlp2Y20wNklISnZkR0YwWlNneE1qQmtaV2NwSUhSeVlXNXpiR0YwWlNnM0xqa3ljSGdzSURCd2VDazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnSmw4MWUxeHlYRzRnSUNBZ0lDQWdJR0Z1YVcxaGRHbHZiam9nYjNCaFkybDBlUzAyTUMweU5TMDFMVEV5SURFdU1qVnpJR3hwYm1WaGNpQnBibVpwYm1sMFpUdGNjbHh1SUNBZ0lDQWdJQ0FtT21KbFptOXlaWHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkSEpoYm5ObWIzSnRPaUJ5YjNSaGRHVW9NVFV3WkdWbktTQjBjbUZ1YzJ4aGRHVW9OeTQ1TW5CNExDQXdjSGdwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lDWmZObnRjY2x4dUlDQWdJQ0FnSUNCaGJtbHRZWFJwYjI0NklHOXdZV05wZEhrdE5qQXRNalV0TmkweE1pQXhMakkxY3lCc2FXNWxZWElnYVc1bWFXNXBkR1U3WEhKY2JpQWdJQ0FnSUNBZ0pqcGlaV1p2Y21WN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlRvZ2NtOTBZWFJsS0RFNE1HUmxaeWtnZEhKaGJuTnNZWFJsS0RjdU9USndlQ3dnTUhCNEtUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0FtWHpkN1hISmNiaUFnSUNBZ0lDQWdZVzVwYldGMGFXOXVPaUJ2Y0dGamFYUjVMVFl3TFRJMUxUY3RNVElnTVM0eU5YTWdiR2x1WldGeUlHbHVabWx1YVhSbE8xeHlYRzRnSUNBZ0lDQWdJQ1k2WW1WbWIzSmxlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMDZJSEp2ZEdGMFpTZ3lNVEJrWldjcElIUnlZVzV6YkdGMFpTZzNMamt5Y0hnc0lEQndlQ2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ0psODRlMXh5WEc0Z0lDQWdJQ0FnSUdGdWFXMWhkR2x2YmpvZ2IzQmhZMmwwZVMwMk1DMHlOUzA0TFRFeUlERXVNalZ6SUd4cGJtVmhjaUJwYm1acGJtbDBaVHRjY2x4dUlDQWdJQ0FnSUNBbU9tSmxabTl5Wlh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0T2lCeWIzUmhkR1VvTWpRd1pHVm5LU0IwY21GdWMyeGhkR1VvTnk0NU1uQjRMQ0F3Y0hncE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJSDFjY2x4dUlDQWdJQ1pmT1h0Y2NseHVJQ0FnSUNBZ0lDQmhibWx0WVhScGIyNDZJRzl3WVdOcGRIa3ROakF0TWpVdE9TMHhNaUF4TGpJMWN5QnNhVzVsWVhJZ2FXNW1hVzVwZEdVN1hISmNiaUFnSUNBZ0lDQWdKanBpWldadmNtVjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJUb2djbTkwWVhSbEtESTNNR1JsWnlrZ2RISmhibk5zWVhSbEtEY3VPVEp3ZUN3Z01IQjRLVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNiaUFnSUNBbVh6RXdlMXh5WEc0Z0lDQWdJQ0FnSUdGdWFXMWhkR2x2YmpvZ2IzQmhZMmwwZVMwMk1DMHlOUzB4TUMweE1pQXhMakkxY3lCc2FXNWxZWElnYVc1bWFXNXBkR1U3WEhKY2JpQWdJQ0FnSUNBZ0pqcGlaV1p2Y21WN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlRvZ2NtOTBZWFJsS0RNd01HUmxaeWtnZEhKaGJuTnNZWFJsS0RjdU9USndlQ3dnTUhCNEtUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0FtWHpFeGUxeHlYRzRnSUNBZ0lDQWdJR0Z1YVcxaGRHbHZiam9nYjNCaFkybDBlUzAyTUMweU5TMHhNUzB4TWlBeExqSTFjeUJzYVc1bFlYSWdhVzVtYVc1cGRHVTdYSEpjYmlBZ0lDQWdJQ0FnSmpwaVpXWnZjbVY3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFJ5WVc1elptOXliVG9nY205MFlYUmxLRE16TUdSbFp5a2dkSEpoYm5Oc1lYUmxLRGN1T1RKd2VDd2dNSEI0S1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVRQzEzWldKcmFYUXRhMlY1Wm5KaGJXVnpJRzl3WVdOcGRIa3ROakF0TWpVdE1DMHhNaUI3WEhKY2JpQWdNQ1VnZXlCdmNHRmphWFI1T2lBd0xqSTFPeUI5WEhKY2JpQWdNQzR3TVNVZ2V5QnZjR0ZqYVhSNU9pQXdMakkxT3lCOVhISmNiaUFnTUM0d01pVWdleUJ2Y0dGamFYUjVPaUF4T3lCOVhISmNiaUFnTmpBdU1ERWxJSHNnYjNCaFkybDBlVG9nTUM0eU5Uc2dmVnh5WEc0Z0lERXdNQ1VnZXlCdmNHRmphWFI1T2lBd0xqSTFPeUI5WEhKY2JuMUFMWGRsWW10cGRDMXJaWGxtY21GdFpYTWdiM0JoWTJsMGVTMDJNQzB5TlMweExURXlJSHRjY2x4dUlDQXdKU0I3SUc5d1lXTnBkSGs2SURBdU1qVTdJSDFjY2x4dUlDQTRMak0wTXpNekpTQjdJRzl3WVdOcGRIazZJREF1TWpVN0lIMWNjbHh1SUNBNExqTTFNek16SlNCN0lHOXdZV05wZEhrNklERTdJSDFjY2x4dUlDQTJPQzR6TkRNekpTQjdJRzl3WVdOcGRIazZJREF1TWpVN0lIMWNjbHh1SUNBeE1EQWxJSHNnYjNCaFkybDBlVG9nTUM0eU5Uc2dmVnh5WEc1OVFDMTNaV0pyYVhRdGEyVjVabkpoYldWeklHOXdZV05wZEhrdE5qQXRNalV0TWkweE1pQjdYSEpjYmlBZ01DVWdleUJ2Y0dGamFYUjVPaUF3TGpJMU95QjlYSEpjYmlBZ01UWXVOamMyTnlVZ2V5QnZjR0ZqYVhSNU9pQXdMakkxT3lCOVhISmNiaUFnTVRZdU5qZzJOeVVnZXlCdmNHRmphWFI1T2lBeE95QjlYSEpjYmlBZ056WXVOamMyTnlVZ2V5QnZjR0ZqYVhSNU9pQXdMakkxT3lCOVhISmNiaUFnTVRBd0pTQjdJRzl3WVdOcGRIazZJREF1TWpVN0lIMWNjbHh1ZlVBdGQyVmlhMmwwTFd0bGVXWnlZVzFsY3lCdmNHRmphWFI1TFRZd0xUSTFMVE10TVRJZ2UxeHlYRzRnSURBbElIc2diM0JoWTJsMGVUb2dNQzR5TlRzZ2ZWeHlYRzRnSURJMUxqQXhKU0I3SUc5d1lXTnBkSGs2SURBdU1qVTdJSDFjY2x4dUlDQXlOUzR3TWlVZ2V5QnZjR0ZqYVhSNU9pQXhPeUI5WEhKY2JpQWdPRFV1TURFbElIc2diM0JoWTJsMGVUb2dNQzR5TlRzZ2ZWeHlYRzRnSURFd01DVWdleUJ2Y0dGamFYUjVPaUF3TGpJMU95QjlYSEpjYm4xQUxYZGxZbXRwZEMxclpYbG1jbUZ0WlhNZ2IzQmhZMmwwZVMwMk1DMHlOUzAwTFRFeUlIdGNjbHh1SUNBd0pTQjdJRzl3WVdOcGRIazZJREF1TWpVN0lIMWNjbHh1SUNBek15NHpORE16SlNCN0lHOXdZV05wZEhrNklEQXVNalU3SUgxY2NseHVJQ0F6TXk0ek5UTXpKU0I3SUc5d1lXTnBkSGs2SURFN0lIMWNjbHh1SUNBNU15NHpORE16SlNCN0lHOXdZV05wZEhrNklEQXVNalU3SUgxY2NseHVJQ0F4TURBbElIc2diM0JoWTJsMGVUb2dNQzR5TlRzZ2ZWeHlYRzU5UUMxM1pXSnJhWFF0YTJWNVpuSmhiV1Z6SUc5d1lXTnBkSGt0TmpBdE1qVXROUzB4TWlCN1hISmNiaUFnTUNVZ2V5QnZjR0ZqYVhSNU9pQXdMakkzTURrMU9ETXpNek16TXpNek16c2dmVnh5WEc0Z0lEUXhMalkzTmpjbElIc2diM0JoWTJsMGVUb2dNQzR5TlRzZ2ZWeHlYRzRnSURReExqWTROamNsSUhzZ2IzQmhZMmwwZVRvZ01Uc2dmVnh5WEc0Z0lERXVOamMyTmpjbElIc2diM0JoWTJsMGVUb2dNQzR5TlRzZ2ZWeHlYRzRnSURFd01DVWdleUJ2Y0dGamFYUjVPaUF3TGpJM01EazFPRE16TXpNek16TXpNenNnZlZ4eVhHNTlRQzEzWldKcmFYUXRhMlY1Wm5KaGJXVnpJRzl3WVdOcGRIa3ROakF0TWpVdE5pMHhNaUI3WEhKY2JpQWdNQ1VnZXlCdmNHRmphWFI1T2lBd0xqTTNOVEV5TlRzZ2ZWeHlYRzRnSURVd0xqQXhKU0I3SUc5d1lXTnBkSGs2SURBdU1qVTdJSDFjY2x4dUlDQTFNQzR3TWlVZ2V5QnZjR0ZqYVhSNU9pQXhPeUI5WEhKY2JpQWdNVEF1TURFbElIc2diM0JoWTJsMGVUb2dNQzR5TlRzZ2ZWeHlYRzRnSURFd01DVWdleUJ2Y0dGamFYUjVPaUF3TGpNM05URXlOVHNnZlZ4eVhHNTlRQzEzWldKcmFYUXRhMlY1Wm5KaGJXVnpJRzl3WVdOcGRIa3ROakF0TWpVdE55MHhNaUI3WEhKY2JpQWdNQ1VnZXlCdmNHRmphWFI1T2lBd0xqUTNPVEk1TVRZMk5qWTJOalkyTnpzZ2ZWeHlYRzRnSURVNExqTTBNek1sSUhzZ2IzQmhZMmwwZVRvZ01DNHlOVHNnZlZ4eVhHNGdJRFU0TGpNMU16TWxJSHNnYjNCaFkybDBlVG9nTVRzZ2ZWeHlYRzRnSURFNExqTTBNek1sSUhzZ2IzQmhZMmwwZVRvZ01DNHlOVHNnZlZ4eVhHNGdJREV3TUNVZ2V5QnZjR0ZqYVhSNU9pQXdMalEzT1RJNU1UWTJOalkyTmpZMk56c2dmVnh5WEc1OVFDMTNaV0pyYVhRdGEyVjVabkpoYldWeklHOXdZV05wZEhrdE5qQXRNalV0T0MweE1pQjdYSEpjYmlBZ01DVWdleUJ2Y0dGamFYUjVPaUF3TGpVNE16UTFPRE16TXpNek16TXpNenNnZlZ4eVhHNGdJRFkyTGpZM05qY2xJSHNnYjNCaFkybDBlVG9nTUM0eU5Uc2dmVnh5WEc0Z0lEWTJMalk0TmpjbElIc2diM0JoWTJsMGVUb2dNVHNnZlZ4eVhHNGdJREkyTGpZM05qY2xJSHNnYjNCaFkybDBlVG9nTUM0eU5Uc2dmVnh5WEc0Z0lERXdNQ1VnZXlCdmNHRmphWFI1T2lBd0xqVTRNelExT0RNek16TXpNek16TXpzZ2ZWeHlYRzU5UUMxM1pXSnJhWFF0YTJWNVpuSmhiV1Z6SUc5d1lXTnBkSGt0TmpBdE1qVXRPUzB4TWlCN1hISmNiaUFnTUNVZ2V5QnZjR0ZqYVhSNU9pQXdMalk0TnpZeU5Uc2dmVnh5WEc0Z0lEYzFMakF4SlNCN0lHOXdZV05wZEhrNklEQXVNalU3SUgxY2NseHVJQ0EzTlM0d01pVWdleUJ2Y0dGamFYUjVPaUF4T3lCOVhISmNiaUFnTXpVdU1ERWxJSHNnYjNCaFkybDBlVG9nTUM0eU5Uc2dmVnh5WEc0Z0lERXdNQ1VnZXlCdmNHRmphWFI1T2lBd0xqWTROell5TlRzZ2ZWeHlYRzU5UUMxM1pXSnJhWFF0YTJWNVpuSmhiV1Z6SUc5d1lXTnBkSGt0TmpBdE1qVXRNVEF0TVRJZ2UxeHlYRzRnSURBbElIc2diM0JoWTJsMGVUb2dNQzQzT1RFM09URTJOalkyTmpZMk5qYzdJSDFjY2x4dUlDQTRNeTR6TkRNekpTQjdJRzl3WVdOcGRIazZJREF1TWpVN0lIMWNjbHh1SUNBNE15NHpOVE16SlNCN0lHOXdZV05wZEhrNklERTdJSDFjY2x4dUlDQTBNeTR6TkRNekpTQjdJRzl3WVdOcGRIazZJREF1TWpVN0lIMWNjbHh1SUNBeE1EQWxJSHNnYjNCaFkybDBlVG9nTUM0M09URTNPVEUyTmpZMk5qWTJOamM3SUgxY2NseHVmVUF0ZDJWaWEybDBMV3RsZVdaeVlXMWxjeUJ2Y0dGamFYUjVMVFl3TFRJMUxURXhMVEV5SUh0Y2NseHVJQ0F3SlNCN0lHOXdZV05wZEhrNklEQXVPRGsxT1RVNE16TXpNek16TXpNek95QjlYSEpjYmlBZ09URXVOamMyTnlVZ2V5QnZjR0ZqYVhSNU9pQXdMakkxT3lCOVhISmNiaUFnT1RFdU5qZzJOeVVnZXlCdmNHRmphWFI1T2lBeE95QjlYSEpjYmlBZ05URXVOamMyTnlVZ2V5QnZjR0ZqYVhSNU9pQXdMakkxT3lCOVhISmNiaUFnTVRBd0pTQjdJRzl3WVdOcGRIazZJREF1T0RrMU9UVTRNek16TXpNek16TXpPeUI5WEhKY2JuMWNjbHh1SWl3aVFHbHRjRzl5ZENCY0lpNHVMeTR1TDJKaGMyVXZabTVjSWp0Y2NseHVYSEpjYmk1M1pYVnBYMjFoYzJzZ2UxeHlYRzRnSUNBZ2NHOXphWFJwYjI0NklHWnBlR1ZrTzF4eVhHNGdJQ0FnZWkxcGJtUmxlRG9nTVR0Y2NseHVJQ0FnSUhkcFpIUm9PaUF4TURBbE8xeHlYRzRnSUNBZ2FHVnBaMmgwT2lBeE1EQWxPMXh5WEc0Z0lDQWdkRzl3T2lBd08xeHlYRzRnSUNBZ2JHVm1kRG9nTUR0Y2NseHVJQ0FnSUdKaFkydG5jbTkxYm1RNklISm5ZbUVvTUN3Z01Dd2dNQ3dnTGpZcE8xeHlYRzU5WEhKY2JseHlYRzR1ZDJWMWFWOXRZWE5yWDNSeVlXNXpjR0Z5Wlc1MElIdGNjbHh1SUNBZ0lIQnZjMmwwYVc5dU9pQm1hWGhsWkR0Y2NseHVJQ0FnSUhvdGFXNWtaWGc2SURFN1hISmNiaUFnSUNCM2FXUjBhRG9nTVRBd0pUdGNjbHh1SUNBZ0lHaGxhV2RvZERvZ01UQXdKVHRjY2x4dUlDQWdJSFJ2Y0RvZ01EdGNjbHh1SUNBZ0lHeGxablE2SURBN1hISmNibjFjY2x4dVhISmNiaTUzWlhWcFgyMWhjMnRmZEhKaGJuTnBkR2x2Ym50Y2NseHVJQ0FnSUdScGMzQnNZWGs2SUc1dmJtVTdYSEpjYmlBZ0lDQndiM05wZEdsdmJqb2dabWw0WldRN1hISmNiaUFnSUNCNkxXbHVaR1Y0T2lBeE8xeHlYRzRnSUNBZ2QybGtkR2c2SURFd01DVTdYSEpjYmlBZ0lDQm9aV2xuYUhRNklERXdNQ1U3WEhKY2JpQWdJQ0IwYjNBNklEQTdYSEpjYmlBZ0lDQnNaV1owT2lBd08xeHlYRzRnSUNBZ1ltRmphMmR5YjNWdVpEb2djbWRpWVNnd0xEQXNNQ3d3S1R0Y2NseHVJQ0FnSUhSeVlXNXphWFJwYjI0NlltRmphMmR5YjNWdVpDQXVNM003WEhKY2JuMWNjbHh1TG5kbGRXbGZabUZrWlY5MGIyZG5iR1Y3WEhKY2JpQWdJQ0JpWVdOclozSnZkVzVrT2lCeVoySmhLREFzTUN3d0xDNDJLVHRjY2x4dWZTSXNJa0JwYlhCdmNuUWdYQ0l1TGk4dUxpOWlZWE5sTDJadVhDSTdYSEpjYmtCaVowTnZiRzl5T2lORlEwVkRSVU03WEhKY2JpNTNaWFZwWDJGamRHbHZibk5vWldWMElIdGNjbHh1SUNBZ0lIQnZjMmwwYVc5dU9pQm1hWGhsWkR0Y2NseHVJQ0FnSUd4bFpuUTZJREE3WEhKY2JpQWdJQ0JpYjNSMGIyMDZJREE3WEhKY2JpQWdJQ0IwY21GdWMyWnZjbTA2SUhSeVlXNXpiR0YwWlNnd0xDQXhNREFsS1R0Y2NseHVJQ0FnSUdKaFkydG1ZV05sTFhacGMybGlhV3hwZEhrNklHaHBaR1JsYmp0Y2NseHVJQ0FnSUhvdGFXNWtaWGc2SURJN1hISmNiaUFnSUNCM2FXUjBhRG9nTVRBd0pUdGNjbHh1SUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklFQndZV2RsUkdWbVlYVnNkRUpoWTJ0bmNtOTFibVJEYjJ4dmNqdGNjbHh1SUNBZ0lDOHZjMnhwWkdVZ2RYQWdZVzVwYldGMGFXOXVYSEpjYmlBZ0lDQjBjbUZ1YzJsMGFXOXVPaUIwY21GdWMyWnZjbTBnTGpOek8xeHlYRzU5WEhKY2JpNTNaWFZwWDJGamRHbHZibk5vWldWMFgyMWxiblY3WEhKY2JpQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUFqUmtaR1JrWkdPMXh5WEc1OVhISmNiaTUzWlhWcFgyRmpkR2x2Ym5Ob1pXVjBYMkZqZEdsdmJpQjdYSEpjYmlBZ0lDQnRZWEpuYVc0dGRHOXdPaUEyY0hnN1hISmNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lBalJrWkdSa1pHTzF4eVhHNTlYSEpjYmk1M1pYVnBYMkZqZEdsdmJuTm9aV1YwWDJObGJHd2dlMXh5WEc0Z0lDQWdjRzl6YVhScGIyNDZJSEpsYkdGMGFYWmxPMXh5WEc0Z0lDQWdjR0ZrWkdsdVp6b2dNVEJ3ZUNBd08xeHlYRzRnSUNBZ2RHVjRkQzFoYkdsbmJqb2dZMlZ1ZEdWeU8xeHlYRzRnSUNBZ1ptOXVkQzF6YVhwbE9pQXhPSEI0TzF4eVhHNGdJQ0FnSmpwaVpXWnZjbVVnZTF4eVhHNGdJQ0FnSUNBZ0lDNXpaWFJVYjNCTWFXNWxLRUIzWlhWcFEyVnNiRUp2Y21SbGNrTnZiRzl5S1R0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSUNZNllXTjBhWFpsZTF4eVhHNGdJQ0FnSUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklFQmlaME52Ykc5eU8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ0pqcG1hWEp6ZEMxamFHbHNaSHRjY2x4dUlDQWdJQ0FnSUNBbU9tSmxabTl5Wlh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWkdsemNHeGhlVG9nYm05dVpUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JpOHZZV04wYVc5dVUyaGxaWFFnWVc1cFlXMTBhVzl1WEhKY2JpNTNaWFZwWDJGamRHbHZibk5vWldWMFgzUnZaMmRzWlh0Y2NseHVJQ0FnSUhSeVlXNXpabTl5YlRvZ2RISmhibk5zWVhSbEtEQXNJREFwTzF4eVhHNTlJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSXZjMjkxY21ObEx5SjkgKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi93ZXVpL2Rpc3Qvc3R5bGUvd2V1aS5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogUmlvdCB2Mi4zLjEyLCBAbGljZW5zZSBNSVQsIChjKSAyMDE1IE11dXQgSW5jLiArIGNvbnRyaWJ1dG9ycyAqL1xuXG47KGZ1bmN0aW9uKHdpbmRvdywgdW5kZWZpbmVkKSB7XG4gICd1c2Ugc3RyaWN0JztcbnZhciByaW90ID0geyB2ZXJzaW9uOiAndjIuMy4xMicsIHNldHRpbmdzOiB7fSB9LFxuICAvLyBiZSBhd2FyZSwgaW50ZXJuYWwgdXNhZ2VcbiAgLy8gQVRURU5USU9OOiBwcmVmaXggdGhlIGdsb2JhbCBkeW5hbWljIHZhcmlhYmxlcyB3aXRoIGBfX2BcblxuICAvLyBjb3VudGVyIHRvIGdpdmUgYSB1bmlxdWUgaWQgdG8gYWxsIHRoZSBUYWcgaW5zdGFuY2VzXG4gIF9fdWlkID0gMCxcbiAgLy8gdGFncyBpbnN0YW5jZXMgY2FjaGVcbiAgX192aXJ0dWFsRG9tID0gW10sXG4gIC8vIHRhZ3MgaW1wbGVtZW50YXRpb24gY2FjaGVcbiAgX190YWdJbXBsID0ge30sXG5cbiAgLyoqXG4gICAqIENvbnN0XG4gICAqL1xuICAvLyByaW90IHNwZWNpZmljIHByZWZpeGVzXG4gIFJJT1RfUFJFRklYID0gJ3Jpb3QtJyxcbiAgUklPVF9UQUcgPSBSSU9UX1BSRUZJWCArICd0YWcnLFxuXG4gIC8vIGZvciB0eXBlb2YgPT0gJycgY29tcGFyaXNvbnNcbiAgVF9TVFJJTkcgPSAnc3RyaW5nJyxcbiAgVF9PQkpFQ1QgPSAnb2JqZWN0JyxcbiAgVF9VTkRFRiAgPSAndW5kZWZpbmVkJyxcbiAgVF9GVU5DVElPTiA9ICdmdW5jdGlvbicsXG4gIC8vIHNwZWNpYWwgbmF0aXZlIHRhZ3MgdGhhdCBjYW5ub3QgYmUgdHJlYXRlZCBsaWtlIHRoZSBvdGhlcnNcbiAgU1BFQ0lBTF9UQUdTX1JFR0VYID0gL14oPzpvcHQoaW9ufGdyb3VwKXx0Ym9keXxjb2x8dFtyaGRdKSQvLFxuICBSRVNFUlZFRF9XT1JEU19CTEFDS0xJU1QgPSBbJ19pdGVtJywgJ19pZCcsICdfcGFyZW50JywgJ3VwZGF0ZScsICdyb290JywgJ21vdW50JywgJ3VubW91bnQnLCAnbWl4aW4nLCAnaXNNb3VudGVkJywgJ2lzTG9vcCcsICd0YWdzJywgJ3BhcmVudCcsICdvcHRzJywgJ3RyaWdnZXInLCAnb24nLCAnb2ZmJywgJ29uZSddLFxuXG4gIC8vIHZlcnNpb24jIGZvciBJRSA4LTExLCAwIGZvciBvdGhlcnNcbiAgSUVfVkVSU0lPTiA9ICh3aW5kb3cgJiYgd2luZG93LmRvY3VtZW50IHx8IHt9KS5kb2N1bWVudE1vZGUgfCAwXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xucmlvdC5vYnNlcnZhYmxlID0gZnVuY3Rpb24oZWwpIHtcblxuICAvKipcbiAgICogRXh0ZW5kIHRoZSBvcmlnaW5hbCBvYmplY3Qgb3IgY3JlYXRlIGEgbmV3IGVtcHR5IG9uZVxuICAgKiBAdHlwZSB7IE9iamVjdCB9XG4gICAqL1xuXG4gIGVsID0gZWwgfHwge31cblxuICAvKipcbiAgICogUHJpdmF0ZSB2YXJpYWJsZXMgYW5kIG1ldGhvZHNcbiAgICovXG5cbiAgdmFyIGNhbGxiYWNrcyA9IHt9LFxuICAgIG9uRWFjaEV2ZW50ID0gZnVuY3Rpb24oZSwgZm4pIHsgZS5yZXBsYWNlKC9cXFMrL2csIGZuKSB9LFxuICAgIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbCwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgLyoqXG4gICAqIExpc3RlbiB0byB0aGUgZ2l2ZW4gc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgYGV2ZW50c2AgYW5kIGV4ZWN1dGUgdGhlIGBjYWxsYmFja2AgZWFjaCB0aW1lIGFuIGV2ZW50IGlzIHRyaWdnZXJlZC5cbiAgICogQHBhcmFtICB7IFN0cmluZyB9IGV2ZW50cyAtIGV2ZW50cyBpZHNcbiAgICogQHBhcmFtICB7IEZ1bmN0aW9uIH0gZm4gLSBjYWxsYmFjayBmdW5jdGlvblxuICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGVsXG4gICAqL1xuXG4gIGRlZmluZVByb3BlcnR5KCdvbicsIGZ1bmN0aW9uKGV2ZW50cywgZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9ICdmdW5jdGlvbicpICByZXR1cm4gZWxcblxuICAgIG9uRWFjaEV2ZW50KGV2ZW50cywgZnVuY3Rpb24obmFtZSwgcG9zKSB7XG4gICAgICAoY2FsbGJhY2tzW25hbWVdID0gY2FsbGJhY2tzW25hbWVdIHx8IFtdKS5wdXNoKGZuKVxuICAgICAgZm4udHlwZWQgPSBwb3MgPiAwXG4gICAgfSlcblxuICAgIHJldHVybiBlbFxuICB9KVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBnaXZlbiBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBgZXZlbnRzYCBsaXN0ZW5lcnNcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBldmVudHMgLSBldmVudHMgaWRzXG4gICAqIEBwYXJhbSAgIHsgRnVuY3Rpb24gfSBmbiAtIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gZWxcbiAgICovXG5cbiAgZGVmaW5lUHJvcGVydHkoJ29mZicsIGZ1bmN0aW9uKGV2ZW50cywgZm4pIHtcbiAgICBpZiAoZXZlbnRzID09ICcqJykgY2FsbGJhY2tzID0ge31cbiAgICBlbHNlIHtcbiAgICAgIG9uRWFjaEV2ZW50KGV2ZW50cywgZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICB2YXIgYXJyID0gY2FsbGJhY2tzW25hbWVdXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGNiOyBjYiA9IGFyciAmJiBhcnJbaV07ICsraSkge1xuICAgICAgICAgICAgaWYgKGNiID09IGZuKSBhcnIuc3BsaWNlKGktLSwgMSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBkZWxldGUgY2FsbGJhY2tzW25hbWVdXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gZWxcbiAgfSlcblxuICAvKipcbiAgICogTGlzdGVuIHRvIHRoZSBnaXZlbiBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBgZXZlbnRzYCBhbmQgZXhlY3V0ZSB0aGUgYGNhbGxiYWNrYCBhdCBtb3N0IG9uY2VcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBldmVudHMgLSBldmVudHMgaWRzXG4gICAqIEBwYXJhbSAgIHsgRnVuY3Rpb24gfSBmbiAtIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gZWxcbiAgICovXG5cbiAgZGVmaW5lUHJvcGVydHkoJ29uZScsIGZ1bmN0aW9uKGV2ZW50cywgZm4pIHtcbiAgICBmdW5jdGlvbiBvbigpIHtcbiAgICAgIGVsLm9mZihldmVudHMsIG9uKVxuICAgICAgZm4uYXBwbHkoZWwsIGFyZ3VtZW50cylcbiAgICB9XG4gICAgcmV0dXJuIGVsLm9uKGV2ZW50cywgb24pXG4gIH0pXG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgYWxsIGNhbGxiYWNrIGZ1bmN0aW9ucyB0aGF0IGxpc3RlbiB0byB0aGUgZ2l2ZW4gc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgYGV2ZW50c2BcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBldmVudHMgLSBldmVudHMgaWRzXG4gICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gZWxcbiAgICovXG5cbiAgZGVmaW5lUHJvcGVydHkoJ3RyaWdnZXInLCBmdW5jdGlvbihldmVudHMpIHtcblxuICAgIC8vIGdldHRpbmcgdGhlIGFyZ3VtZW50c1xuICAgIC8vIHNraXBwaW5nIHRoZSBmaXJzdCBvbmVcbiAgICB2YXIgYXJnbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDEsXG4gICAgICBhcmdzID0gbmV3IEFycmF5KGFyZ2xlbilcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ2xlbjsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXVxuICAgIH1cblxuICAgIG9uRWFjaEV2ZW50KGV2ZW50cywgZnVuY3Rpb24obmFtZSkge1xuXG4gICAgICB2YXIgZm5zID0gKGNhbGxiYWNrc1tuYW1lXSB8fCBbXSkuc2xpY2UoMClcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGZuOyBmbiA9IGZuc1tpXTsgKytpKSB7XG4gICAgICAgIGlmIChmbi5idXN5KSByZXR1cm5cbiAgICAgICAgZm4uYnVzeSA9IDFcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGZuLmFwcGx5KGVsLCBmbi50eXBlZCA/IFtuYW1lXS5jb25jYXQoYXJncykgOiBhcmdzKVxuICAgICAgICB9IGNhdGNoIChlKSB7IGVsLnRyaWdnZXIoJ2Vycm9yJywgZSkgfVxuICAgICAgICBpZiAoZm5zW2ldICE9PSBmbikgeyBpLS0gfVxuICAgICAgICBmbi5idXN5ID0gMFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2tzLmFsbCAmJiBuYW1lICE9ICdhbGwnKVxuICAgICAgICBlbC50cmlnZ2VyLmFwcGx5KGVsLCBbJ2FsbCcsIG5hbWVdLmNvbmNhdChhcmdzKSlcblxuICAgIH0pXG5cbiAgICByZXR1cm4gZWxcbiAgfSlcblxuICByZXR1cm4gZWxcblxufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbjsoZnVuY3Rpb24ocmlvdCkgeyBpZiAoIXdpbmRvdykgcmV0dXJuO1xuXG4vKipcbiAqIFNpbXBsZSBjbGllbnQtc2lkZSByb3V0ZXJcbiAqIEBtb2R1bGUgcmlvdC1yb3V0ZVxuICovXG5cblxudmFyIFJFX09SSUdJTiA9IC9eLis/XFwvK1teXFwvXSsvLFxuICBFVkVOVF9MSVNURU5FUiA9ICdFdmVudExpc3RlbmVyJyxcbiAgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSID0gJ3JlbW92ZScgKyBFVkVOVF9MSVNURU5FUixcbiAgQUREX0VWRU5UX0xJU1RFTkVSID0gJ2FkZCcgKyBFVkVOVF9MSVNURU5FUixcbiAgSEFTX0FUVFJJQlVURSA9ICdoYXNBdHRyaWJ1dGUnLFxuICBSRVBMQUNFID0gJ3JlcGxhY2UnLFxuICBQT1BTVEFURSA9ICdwb3BzdGF0ZScsXG4gIEhBU0hDSEFOR0UgPSAnaGFzaGNoYW5nZScsXG4gIFRSSUdHRVIgPSAndHJpZ2dlcicsXG4gIE1BWF9FTUlUX1NUQUNLX0xFVkVMID0gMyxcbiAgd2luID0gd2luZG93LFxuICBkb2MgPSBkb2N1bWVudCxcbiAgbG9jID0gd2luLmhpc3RvcnkubG9jYXRpb24gfHwgd2luLmxvY2F0aW9uLCAvLyBzZWUgaHRtbDUtaGlzdG9yeS1hcGlcbiAgcHJvdCA9IFJvdXRlci5wcm90b3R5cGUsIC8vIHRvIG1pbmlmeSBtb3JlXG4gIGNsaWNrRXZlbnQgPSBkb2MgJiYgZG9jLm9udG91Y2hzdGFydCA/ICd0b3VjaHN0YXJ0JyA6ICdjbGljaycsXG4gIHN0YXJ0ZWQgPSBmYWxzZSxcbiAgY2VudHJhbCA9IHJpb3Qub2JzZXJ2YWJsZSgpLFxuICByb3V0ZUZvdW5kID0gZmFsc2UsXG4gIGRlYm91bmNlZEVtaXQsXG4gIGJhc2UsIGN1cnJlbnQsIHBhcnNlciwgc2Vjb25kUGFyc2VyLCBlbWl0U3RhY2sgPSBbXSwgZW1pdFN0YWNrTGV2ZWwgPSAwXG5cbi8qKlxuICogRGVmYXVsdCBwYXJzZXIuIFlvdSBjYW4gcmVwbGFjZSBpdCB2aWEgcm91dGVyLnBhcnNlciBtZXRob2QuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIGN1cnJlbnQgcGF0aCAobm9ybWFsaXplZClcbiAqIEByZXR1cm5zIHthcnJheX0gYXJyYXlcbiAqL1xuZnVuY3Rpb24gREVGQVVMVF9QQVJTRVIocGF0aCkge1xuICByZXR1cm4gcGF0aC5zcGxpdCgvWy8/I10vKVxufVxuXG4vKipcbiAqIERlZmF1bHQgcGFyc2VyIChzZWNvbmQpLiBZb3UgY2FuIHJlcGxhY2UgaXQgdmlhIHJvdXRlci5wYXJzZXIgbWV0aG9kLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBjdXJyZW50IHBhdGggKG5vcm1hbGl6ZWQpXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsdGVyIC0gZmlsdGVyIHN0cmluZyAobm9ybWFsaXplZClcbiAqIEByZXR1cm5zIHthcnJheX0gYXJyYXlcbiAqL1xuZnVuY3Rpb24gREVGQVVMVF9TRUNPTkRfUEFSU0VSKHBhdGgsIGZpbHRlcikge1xuICB2YXIgcmUgPSBuZXcgUmVnRXhwKCdeJyArIGZpbHRlcltSRVBMQUNFXSgvXFwqL2csICcoW14vPyNdKz8pJylbUkVQTEFDRV0oL1xcLlxcLi8sICcuKicpICsgJyQnKSxcbiAgICBhcmdzID0gcGF0aC5tYXRjaChyZSlcblxuICBpZiAoYXJncykgcmV0dXJuIGFyZ3Muc2xpY2UoMSlcbn1cblxuLyoqXG4gKiBTaW1wbGUvY2hlYXAgZGVib3VuY2UgaW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSAgIHtmdW5jdGlvbn0gZm4gLSBjYWxsYmFja1xuICogQHBhcmFtICAge251bWJlcn0gZGVsYXkgLSBkZWxheSBpbiBzZWNvbmRzXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IGRlYm91bmNlZCBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgZGVsYXkpIHtcbiAgdmFyIHRcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQodClcbiAgICB0ID0gc2V0VGltZW91dChmbiwgZGVsYXkpXG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgdGhlIHdpbmRvdyBsaXN0ZW5lcnMgdG8gdHJpZ2dlciB0aGUgcm91dGVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9FeGVjIC0gc2VlIHJvdXRlLnN0YXJ0XG4gKi9cbmZ1bmN0aW9uIHN0YXJ0KGF1dG9FeGVjKSB7XG4gIGRlYm91bmNlZEVtaXQgPSBkZWJvdW5jZShlbWl0LCAxKVxuICB3aW5bQUREX0VWRU5UX0xJU1RFTkVSXShQT1BTVEFURSwgZGVib3VuY2VkRW1pdClcbiAgd2luW0FERF9FVkVOVF9MSVNURU5FUl0oSEFTSENIQU5HRSwgZGVib3VuY2VkRW1pdClcbiAgZG9jW0FERF9FVkVOVF9MSVNURU5FUl0oY2xpY2tFdmVudCwgY2xpY2spXG4gIGlmIChhdXRvRXhlYykgZW1pdCh0cnVlKVxufVxuXG4vKipcbiAqIFJvdXRlciBjbGFzc1xuICovXG5mdW5jdGlvbiBSb3V0ZXIoKSB7XG4gIHRoaXMuJCA9IFtdXG4gIHJpb3Qub2JzZXJ2YWJsZSh0aGlzKSAvLyBtYWtlIGl0IG9ic2VydmFibGVcbiAgY2VudHJhbC5vbignc3RvcCcsIHRoaXMucy5iaW5kKHRoaXMpKVxuICBjZW50cmFsLm9uKCdlbWl0JywgdGhpcy5lLmJpbmQodGhpcykpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShwYXRoKSB7XG4gIHJldHVybiBwYXRoW1JFUExBQ0VdKC9eXFwvfFxcLyQvLCAnJylcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09ICdzdHJpbmcnXG59XG5cbi8qKlxuICogR2V0IHRoZSBwYXJ0IGFmdGVyIGRvbWFpbiBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gaHJlZiAtIGZ1bGxwYXRoXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBwYXRoIGZyb20gcm9vdFxuICovXG5mdW5jdGlvbiBnZXRQYXRoRnJvbVJvb3QoaHJlZikge1xuICByZXR1cm4gKGhyZWYgfHwgbG9jLmhyZWYpW1JFUExBQ0VdKFJFX09SSUdJTiwgJycpXG59XG5cbi8qKlxuICogR2V0IHRoZSBwYXJ0IGFmdGVyIGJhc2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBocmVmIC0gZnVsbHBhdGhcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHBhdGggZnJvbSBiYXNlXG4gKi9cbmZ1bmN0aW9uIGdldFBhdGhGcm9tQmFzZShocmVmKSB7XG4gIHJldHVybiBiYXNlWzBdID09ICcjJ1xuICAgID8gKGhyZWYgfHwgbG9jLmhyZWYpLnNwbGl0KGJhc2UpWzFdIHx8ICcnXG4gICAgOiBnZXRQYXRoRnJvbVJvb3QoaHJlZilbUkVQTEFDRV0oYmFzZSwgJycpXG59XG5cbmZ1bmN0aW9uIGVtaXQoZm9yY2UpIHtcbiAgLy8gdGhlIHN0YWNrIGlzIG5lZWRlZCBmb3IgcmVkaXJlY3Rpb25zXG4gIHZhciBpc1Jvb3QgPSBlbWl0U3RhY2tMZXZlbCA9PSAwXG4gIGlmIChNQVhfRU1JVF9TVEFDS19MRVZFTCA8PSBlbWl0U3RhY2tMZXZlbCkgcmV0dXJuXG5cbiAgZW1pdFN0YWNrTGV2ZWwrK1xuICBlbWl0U3RhY2sucHVzaChmdW5jdGlvbigpIHtcbiAgICB2YXIgcGF0aCA9IGdldFBhdGhGcm9tQmFzZSgpXG4gICAgaWYgKGZvcmNlIHx8IHBhdGggIT0gY3VycmVudCkge1xuICAgICAgY2VudHJhbFtUUklHR0VSXSgnZW1pdCcsIHBhdGgpXG4gICAgICBjdXJyZW50ID0gcGF0aFxuICAgIH1cbiAgfSlcbiAgaWYgKGlzUm9vdCkge1xuICAgIHdoaWxlIChlbWl0U3RhY2subGVuZ3RoKSB7XG4gICAgICBlbWl0U3RhY2tbMF0oKVxuICAgICAgZW1pdFN0YWNrLnNoaWZ0KClcbiAgICB9XG4gICAgZW1pdFN0YWNrTGV2ZWwgPSAwXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xpY2soZSkge1xuICBpZiAoXG4gICAgZS53aGljaCAhPSAxIC8vIG5vdCBsZWZ0IGNsaWNrXG4gICAgfHwgZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5IC8vIG9yIG1ldGEga2V5c1xuICAgIHx8IGUuZGVmYXVsdFByZXZlbnRlZCAvLyBvciBkZWZhdWx0IHByZXZlbnRlZFxuICApIHJldHVyblxuXG4gIHZhciBlbCA9IGUudGFyZ2V0XG4gIHdoaWxlIChlbCAmJiBlbC5ub2RlTmFtZSAhPSAnQScpIGVsID0gZWwucGFyZW50Tm9kZVxuICBpZiAoXG4gICAgIWVsIHx8IGVsLm5vZGVOYW1lICE9ICdBJyAvLyBub3QgQSB0YWdcbiAgICB8fCBlbFtIQVNfQVRUUklCVVRFXSgnZG93bmxvYWQnKSAvLyBoYXMgZG93bmxvYWQgYXR0clxuICAgIHx8ICFlbFtIQVNfQVRUUklCVVRFXSgnaHJlZicpIC8vIGhhcyBubyBocmVmIGF0dHJcbiAgICB8fCBlbC50YXJnZXQgJiYgZWwudGFyZ2V0ICE9ICdfc2VsZicgLy8gYW5vdGhlciB3aW5kb3cgb3IgZnJhbWVcbiAgICB8fCBlbC5ocmVmLmluZGV4T2YobG9jLmhyZWYubWF0Y2goUkVfT1JJR0lOKVswXSkgPT0gLTEgLy8gY3Jvc3Mgb3JpZ2luXG4gICkgcmV0dXJuXG5cbiAgaWYgKGVsLmhyZWYgIT0gbG9jLmhyZWYpIHtcbiAgICBpZiAoXG4gICAgICBlbC5ocmVmLnNwbGl0KCcjJylbMF0gPT0gbG9jLmhyZWYuc3BsaXQoJyMnKVswXSAvLyBpbnRlcm5hbCBqdW1wXG4gICAgICB8fCBiYXNlICE9ICcjJyAmJiBnZXRQYXRoRnJvbVJvb3QoZWwuaHJlZikuaW5kZXhPZihiYXNlKSAhPT0gMCAvLyBvdXRzaWRlIG9mIGJhc2VcbiAgICAgIHx8ICFnbyhnZXRQYXRoRnJvbUJhc2UoZWwuaHJlZiksIGVsLnRpdGxlIHx8IGRvYy50aXRsZSkgLy8gcm91dGUgbm90IGZvdW5kXG4gICAgKSByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxufVxuXG4vKipcbiAqIEdvIHRvIHRoZSBwYXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIGRlc3RpbmF0aW9uIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIHBhZ2UgdGl0bGVcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIHJvdXRlIG5vdCBmb3VuZCBmbGFnXG4gKi9cbmZ1bmN0aW9uIGdvKHBhdGgsIHRpdGxlKSB7XG4gIHRpdGxlID0gdGl0bGUgfHwgZG9jLnRpdGxlXG4gIC8vIGJyb3dzZXJzIGlnbm9yZXMgdGhlIHNlY29uZCBwYXJhbWV0ZXIgYHRpdGxlYFxuICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCB0aXRsZSwgYmFzZSArIG5vcm1hbGl6ZShwYXRoKSlcbiAgLy8gc28gd2UgbmVlZCB0byBzZXQgaXQgbWFudWFsbHlcbiAgZG9jLnRpdGxlID0gdGl0bGVcbiAgcm91dGVGb3VuZCA9IGZhbHNlXG4gIGVtaXQoKVxuICByZXR1cm4gcm91dGVGb3VuZFxufVxuXG4vKipcbiAqIEdvIHRvIHBhdGggb3Igc2V0IGFjdGlvblxuICogYSBzaW5nbGUgc3RyaW5nOiAgICAgICAgICAgICAgICBnbyB0aGVyZVxuICogdHdvIHN0cmluZ3M6ICAgICAgICAgICAgICAgICAgICBnbyB0aGVyZSB3aXRoIHNldHRpbmcgYSB0aXRsZVxuICogYSBzaW5nbGUgZnVuY3Rpb246ICAgICAgICAgICAgICBzZXQgYW4gYWN0aW9uIG9uIHRoZSBkZWZhdWx0IHJvdXRlXG4gKiBhIHN0cmluZy9SZWdFeHAgYW5kIGEgZnVuY3Rpb246IHNldCBhbiBhY3Rpb24gb24gdGhlIHJvdXRlXG4gKiBAcGFyYW0geyhzdHJpbmd8ZnVuY3Rpb24pfSBmaXJzdCAtIHBhdGggLyBhY3Rpb24gLyBmaWx0ZXJcbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHB8ZnVuY3Rpb24pfSBzZWNvbmQgLSB0aXRsZSAvIGFjdGlvblxuICovXG5wcm90Lm0gPSBmdW5jdGlvbihmaXJzdCwgc2Vjb25kKSB7XG4gIGlmIChpc1N0cmluZyhmaXJzdCkgJiYgKCFzZWNvbmQgfHwgaXNTdHJpbmcoc2Vjb25kKSkpIGdvKGZpcnN0LCBzZWNvbmQpXG4gIGVsc2UgaWYgKHNlY29uZCkgdGhpcy5yKGZpcnN0LCBzZWNvbmQpXG4gIGVsc2UgdGhpcy5yKCdAJywgZmlyc3QpXG59XG5cbi8qKlxuICogU3RvcCByb3V0aW5nXG4gKi9cbnByb3QucyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9mZignKicpXG4gIHRoaXMuJCA9IFtdXG59XG5cbi8qKlxuICogRW1pdFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBwYXRoXG4gKi9cbnByb3QuZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdGhpcy4kLmNvbmNhdCgnQCcpLnNvbWUoZnVuY3Rpb24oZmlsdGVyKSB7XG4gICAgdmFyIGFyZ3MgPSAoZmlsdGVyID09ICdAJyA/IHBhcnNlciA6IHNlY29uZFBhcnNlcikobm9ybWFsaXplKHBhdGgpLCBub3JtYWxpemUoZmlsdGVyKSlcbiAgICBpZiAodHlwZW9mIGFyZ3MgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXNbVFJJR0dFUl0uYXBwbHkobnVsbCwgW2ZpbHRlcl0uY29uY2F0KGFyZ3MpKVxuICAgICAgcmV0dXJuIHJvdXRlRm91bmQgPSB0cnVlIC8vIGV4aXQgZnJvbSBsb29wXG4gICAgfVxuICB9LCB0aGlzKVxufVxuXG4vKipcbiAqIFJlZ2lzdGVyIHJvdXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsdGVyIC0gZmlsdGVyIGZvciBtYXRjaGluZyB0byB1cmxcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGFjdGlvbiAtIGFjdGlvbiB0byByZWdpc3RlclxuICovXG5wcm90LnIgPSBmdW5jdGlvbihmaWx0ZXIsIGFjdGlvbikge1xuICBpZiAoZmlsdGVyICE9ICdAJykge1xuICAgIGZpbHRlciA9ICcvJyArIG5vcm1hbGl6ZShmaWx0ZXIpXG4gICAgdGhpcy4kLnB1c2goZmlsdGVyKVxuICB9XG4gIHRoaXMub24oZmlsdGVyLCBhY3Rpb24pXG59XG5cbnZhciBtYWluUm91dGVyID0gbmV3IFJvdXRlcigpXG52YXIgcm91dGUgPSBtYWluUm91dGVyLm0uYmluZChtYWluUm91dGVyKVxuXG4vKipcbiAqIENyZWF0ZSBhIHN1YiByb3V0ZXJcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gdGhlIG1ldGhvZCBvZiBhIG5ldyBSb3V0ZXIgb2JqZWN0XG4gKi9cbnJvdXRlLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmV3U3ViUm91dGVyID0gbmV3IFJvdXRlcigpXG4gIC8vIHN0b3Agb25seSB0aGlzIHN1Yi1yb3V0ZXJcbiAgbmV3U3ViUm91dGVyLm0uc3RvcCA9IG5ld1N1YlJvdXRlci5zLmJpbmQobmV3U3ViUm91dGVyKVxuICAvLyByZXR1cm4gc3ViLXJvdXRlcidzIG1haW4gbWV0aG9kXG4gIHJldHVybiBuZXdTdWJSb3V0ZXIubS5iaW5kKG5ld1N1YlJvdXRlcilcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGJhc2Ugb2YgdXJsXG4gKiBAcGFyYW0geyhzdHJ8UmVnRXhwKX0gYXJnIC0gYSBuZXcgYmFzZSBvciAnIycgb3IgJyMhJ1xuICovXG5yb3V0ZS5iYXNlID0gZnVuY3Rpb24oYXJnKSB7XG4gIGJhc2UgPSBhcmcgfHwgJyMnXG4gIGN1cnJlbnQgPSBnZXRQYXRoRnJvbUJhc2UoKSAvLyByZWNhbGN1bGF0ZSBjdXJyZW50IHBhdGhcbn1cblxuLyoqIEV4ZWMgcm91dGluZyByaWdodCBub3cgKiovXG5yb3V0ZS5leGVjID0gZnVuY3Rpb24oKSB7XG4gIGVtaXQodHJ1ZSlcbn1cblxuLyoqXG4gKiBSZXBsYWNlIHRoZSBkZWZhdWx0IHJvdXRlciB0byB5b3Vyc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSB5b3VyIHBhcnNlciBmdW5jdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4yIC0geW91ciBzZWNvbmRQYXJzZXIgZnVuY3Rpb25cbiAqL1xucm91dGUucGFyc2VyID0gZnVuY3Rpb24oZm4sIGZuMikge1xuICBpZiAoIWZuICYmICFmbjIpIHtcbiAgICAvLyByZXNldCBwYXJzZXIgZm9yIHRlc3RpbmcuLi5cbiAgICBwYXJzZXIgPSBERUZBVUxUX1BBUlNFUlxuICAgIHNlY29uZFBhcnNlciA9IERFRkFVTFRfU0VDT05EX1BBUlNFUlxuICB9XG4gIGlmIChmbikgcGFyc2VyID0gZm5cbiAgaWYgKGZuMikgc2Vjb25kUGFyc2VyID0gZm4yXG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB1cmwgcXVlcnkgYXMgYW4gb2JqZWN0XG4gKiBAcmV0dXJucyB7b2JqZWN0fSBwYXJzZWQgcXVlcnlcbiAqL1xucm91dGUucXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHEgPSB7fVxuICBsb2MuaHJlZltSRVBMQUNFXSgvWz8mXSguKz8pPShbXiZdKikvZywgZnVuY3Rpb24oXywgaywgdikgeyBxW2tdID0gdiB9KVxuICByZXR1cm4gcVxufVxuXG4vKiogU3RvcCByb3V0aW5nICoqL1xucm91dGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHN0YXJ0ZWQpIHtcbiAgICB3aW5bUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXShQT1BTVEFURSwgZGVib3VuY2VkRW1pdClcbiAgICB3aW5bUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXShIQVNIQ0hBTkdFLCBkZWJvdW5jZWRFbWl0KVxuICAgIGRvY1tSRU1PVkVfRVZFTlRfTElTVEVORVJdKGNsaWNrRXZlbnQsIGNsaWNrKVxuICAgIGNlbnRyYWxbVFJJR0dFUl0oJ3N0b3AnKVxuICAgIHN0YXJ0ZWQgPSBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogU3RhcnQgcm91dGluZ1xuICogQHBhcmFtIHtib29sZWFufSBhdXRvRXhlYyAtIGF1dG9tYXRpY2FsbHkgZXhlYyBhZnRlciBzdGFydGluZyBpZiB0cnVlXG4gKi9cbnJvdXRlLnN0YXJ0ID0gZnVuY3Rpb24gKGF1dG9FeGVjKSB7XG4gIGlmICghc3RhcnRlZCkge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09ICdjb21wbGV0ZScpIHN0YXJ0KGF1dG9FeGVjKVxuICAgIC8vIHRoZSB0aW1lb3V0IGlzIG5lZWRlZCB0byBzb2x2ZVxuICAgIC8vIGEgd2VpcmQgc2FmYXJpIGJ1ZyBodHRwczovL2dpdGh1Yi5jb20vcmlvdC9yb3V0ZS9pc3N1ZXMvMzNcbiAgICBlbHNlIHdpbltBRERfRVZFTlRfTElTVEVORVJdKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBzdGFydChhdXRvRXhlYykgfSwgMSlcbiAgICB9KVxuICAgIHN0YXJ0ZWQgPSB0cnVlXG4gIH1cbn1cblxuLyoqIFByZXBhcmUgdGhlIHJvdXRlciAqKi9cbnJvdXRlLmJhc2UoKVxucm91dGUucGFyc2VyKClcblxucmlvdC5yb3V0ZSA9IHJvdXRlXG59KShyaW90KVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuLyoqXG4gKiBUaGUgcmlvdCB0ZW1wbGF0ZSBlbmdpbmVcbiAqIEB2ZXJzaW9uIHYyLjMuMTlcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgYnJhY2tldHNcbiAqXG4gKiBgYnJhY2tldHMgICAgICAgICBgIFJldHVybnMgYSBzdHJpbmcgb3IgcmVnZXggYmFzZWQgb24gaXRzIHBhcmFtZXRlclxuICogYGJyYWNrZXRzLnNldHRpbmdzYCBNaXJyb3JzIHRoZSBgcmlvdC5zZXR0aW5nc2Agb2JqZWN0ICh1c2UgYnJhY2tldHMuc2V0IGluIG5ldyBjb2RlKVxuICogYGJyYWNrZXRzLnNldCAgICAgYCBDaGFuZ2UgdGhlIGN1cnJlbnQgcmlvdCBicmFja2V0c1xuICovXG5cbnZhciBicmFja2V0cyA9IChmdW5jdGlvbiAoVU5ERUYpIHtcblxuICB2YXJcbiAgICBSRUdMT0IgID0gJ2cnLFxuXG4gICAgTUxDT01NUyA9IC9cXC9cXCpbXipdKlxcKisoPzpbXipcXC9dW14qXSpcXCorKSpcXC8vZyxcbiAgICBTVFJJTkdTID0gL1wiW15cIlxcXFxdKig/OlxcXFxbXFxTXFxzXVteXCJcXFxcXSopKlwifCdbXidcXFxcXSooPzpcXFxcW1xcU1xcc11bXidcXFxcXSopKicvZyxcblxuICAgIFNfUUJTUkMgPSBTVFJJTkdTLnNvdXJjZSArICd8JyArXG4gICAgICAvKD86XFxicmV0dXJuXFxzK3woPzpbJFxcd1xcKVxcXV18XFwrXFwrfC0tKVxccyooXFwvKSg/IVsqXFwvXSkpLy5zb3VyY2UgKyAnfCcgK1xuICAgICAgL1xcLyg/PVteKlxcL10pW15bXFwvXFxcXF0qKD86KD86XFxbKD86XFxcXC58W15cXF1cXFxcXSopKlxcXXxcXFxcLilbXltcXC9cXFxcXSopKj8oXFwvKVtnaW1dKi8uc291cmNlLFxuXG4gICAgREVGQVVMVCA9ICd7IH0nLFxuXG4gICAgRklOREJSQUNFUyA9IHtcbiAgICAgICcoJzogUmVnRXhwKCcoWygpXSl8JyAgICsgU19RQlNSQywgUkVHTE9CKSxcbiAgICAgICdbJzogUmVnRXhwKCcoW1tcXFxcXV0pfCcgKyBTX1FCU1JDLCBSRUdMT0IpLFxuICAgICAgJ3snOiBSZWdFeHAoJyhbe31dKXwnICAgKyBTX1FCU1JDLCBSRUdMT0IpXG4gICAgfVxuXG4gIHZhclxuICAgIGNhY2hlZEJyYWNrZXRzID0gVU5ERUYsXG4gICAgX3JlZ2V4LFxuICAgIF9wYWlycyA9IFtdXG5cbiAgZnVuY3Rpb24gX2xvb3BiYWNrKHJlKSB7IHJldHVybiByZSB9XG5cbiAgZnVuY3Rpb24gX3Jld3JpdGUocmUsIGJwKSB7XG4gICAgaWYgKCFicCkgYnAgPSBfcGFpcnNcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgIHJlLnNvdXJjZS5yZXBsYWNlKC97L2csIGJwWzJdKS5yZXBsYWNlKC99L2csIGJwWzNdKSwgcmUuZ2xvYmFsID8gUkVHTE9CIDogJydcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlKHBhaXIpIHtcbiAgICB2YXJcbiAgICAgIGN2dCxcbiAgICAgIGFyciA9IHBhaXIuc3BsaXQoJyAnKVxuXG4gICAgaWYgKHBhaXIgPT09IERFRkFVTFQpIHtcbiAgICAgIGFyclsyXSA9IGFyclswXVxuICAgICAgYXJyWzNdID0gYXJyWzFdXG4gICAgICBjdnQgPSBfbG9vcGJhY2tcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCAhPT0gMiB8fCAvW1xceDAwLVxceDFGPD5hLXpBLVowLTknXCIsO1xcXFxdLy50ZXN0KHBhaXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgYnJhY2tldHMgXCInICsgcGFpciArICdcIicpXG4gICAgICB9XG4gICAgICBhcnIgPSBhcnIuY29uY2F0KHBhaXIucmVwbGFjZSgvKD89W1tcXF0oKSorPy5eJHxdKS9nLCAnXFxcXCcpLnNwbGl0KCcgJykpXG4gICAgICBjdnQgPSBfcmV3cml0ZVxuICAgIH1cbiAgICBhcnJbNF0gPSBjdnQoYXJyWzFdLmxlbmd0aCA+IDEgPyAve1tcXFNcXHNdKj99LyA6IC97W159XSp9LywgYXJyKVxuICAgIGFycls1XSA9IGN2dCgvXFxcXCh7fH0pL2csIGFycilcbiAgICBhcnJbNl0gPSBjdnQoLyhcXFxcPykoeykvZywgYXJyKVxuICAgIGFycls3XSA9IFJlZ0V4cCgnKFxcXFxcXFxcPykoPzooW1soe10pfCgnICsgYXJyWzNdICsgJykpfCcgKyBTX1FCU1JDLCBSRUdMT0IpXG4gICAgYXJyWzhdID0gcGFpclxuICAgIHJldHVybiBhcnJcbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZXNldChwYWlyKSB7XG4gICAgaWYgKCFwYWlyKSBwYWlyID0gREVGQVVMVFxuXG4gICAgaWYgKHBhaXIgIT09IF9wYWlyc1s4XSkge1xuICAgICAgX3BhaXJzID0gX2NyZWF0ZShwYWlyKVxuICAgICAgX3JlZ2V4ID0gcGFpciA9PT0gREVGQVVMVCA/IF9sb29wYmFjayA6IF9yZXdyaXRlXG4gICAgICBfcGFpcnNbOV0gPSBfcmVnZXgoL15cXHMqe1xcXj9cXHMqKFskXFx3XSspKD86XFxzKixcXHMqKFxcUyspKT9cXHMraW5cXHMrKFxcUy4qKVxccyp9LylcbiAgICAgIF9wYWlyc1sxMF0gPSBfcmVnZXgoLyhefFteXFxcXF0pez1bXFxTXFxzXSo/fS8pXG4gICAgICBfYnJhY2tldHMuX3Jhd09mZnNldCA9IF9wYWlyc1swXS5sZW5ndGhcbiAgICB9XG4gICAgY2FjaGVkQnJhY2tldHMgPSBwYWlyXG4gIH1cblxuICBmdW5jdGlvbiBfYnJhY2tldHMocmVPcklkeCkge1xuICAgIHJldHVybiByZU9ySWR4IGluc3RhbmNlb2YgUmVnRXhwID8gX3JlZ2V4KHJlT3JJZHgpIDogX3BhaXJzW3JlT3JJZHhdXG4gIH1cblxuICBfYnJhY2tldHMuc3BsaXQgPSBmdW5jdGlvbiBzcGxpdChzdHIsIHRtcGwsIF9icCkge1xuICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBfYnAgaXMgZm9yIHRoZSBjb21waWxlclxuICAgIGlmICghX2JwKSBfYnAgPSBfcGFpcnNcblxuICAgIHZhclxuICAgICAgcGFydHMgPSBbXSxcbiAgICAgIG1hdGNoLFxuICAgICAgaXNleHByLFxuICAgICAgc3RhcnQsXG4gICAgICBwb3MsXG4gICAgICByZSA9IF9icFs2XVxuXG4gICAgaXNleHByID0gc3RhcnQgPSByZS5sYXN0SW5kZXggPSAwXG5cbiAgICB3aGlsZSAobWF0Y2ggPSByZS5leGVjKHN0cikpIHtcblxuICAgICAgcG9zID0gbWF0Y2guaW5kZXhcblxuICAgICAgaWYgKGlzZXhwcikge1xuXG4gICAgICAgIGlmIChtYXRjaFsyXSkge1xuICAgICAgICAgIHJlLmxhc3RJbmRleCA9IHNraXBCcmFjZXMobWF0Y2hbMl0sIHJlLmxhc3RJbmRleClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtYXRjaFszXSlcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoIW1hdGNoWzFdKSB7XG4gICAgICAgIHVuZXNjYXBlU3RyKHN0ci5zbGljZShzdGFydCwgcG9zKSlcbiAgICAgICAgc3RhcnQgPSByZS5sYXN0SW5kZXhcbiAgICAgICAgcmUgPSBfYnBbNiArIChpc2V4cHIgXj0gMSldXG4gICAgICAgIHJlLmxhc3RJbmRleCA9IHN0YXJ0XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0ciAmJiBzdGFydCA8IHN0ci5sZW5ndGgpIHtcbiAgICAgIHVuZXNjYXBlU3RyKHN0ci5zbGljZShzdGFydCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnRzXG5cbiAgICBmdW5jdGlvbiB1bmVzY2FwZVN0cihzdHIpIHtcbiAgICAgIGlmICh0bXBsIHx8IGlzZXhwcilcbiAgICAgICAgcGFydHMucHVzaChzdHIgJiYgc3RyLnJlcGxhY2UoX2JwWzVdLCAnJDEnKSlcbiAgICAgIGVsc2VcbiAgICAgICAgcGFydHMucHVzaChzdHIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2tpcEJyYWNlcyhjaCwgcG9zKSB7XG4gICAgICB2YXJcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIHJlY2NoID0gRklOREJSQUNFU1tjaF0sXG4gICAgICAgIGxldmVsID0gMVxuICAgICAgcmVjY2gubGFzdEluZGV4ID0gcG9zXG5cbiAgICAgIHdoaWxlIChtYXRjaCA9IHJlY2NoLmV4ZWMoc3RyKSkge1xuICAgICAgICBpZiAobWF0Y2hbMV0gJiZcbiAgICAgICAgICAhKG1hdGNoWzFdID09PSBjaCA/ICsrbGV2ZWwgOiAtLWxldmVsKSkgYnJlYWtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaCA/IHJlY2NoLmxhc3RJbmRleCA6IHN0ci5sZW5ndGhcbiAgICB9XG4gIH1cblxuICBfYnJhY2tldHMuaGFzRXhwciA9IGZ1bmN0aW9uIGhhc0V4cHIoc3RyKSB7XG4gICAgcmV0dXJuIF9icmFja2V0cyg0KS50ZXN0KHN0cilcbiAgfVxuXG4gIF9icmFja2V0cy5sb29wS2V5cyA9IGZ1bmN0aW9uIGxvb3BLZXlzKGV4cHIpIHtcbiAgICB2YXIgbSA9IGV4cHIubWF0Y2goX2JyYWNrZXRzKDkpKVxuICAgIHJldHVybiBtID9cbiAgICAgIHsga2V5OiBtWzFdLCBwb3M6IG1bMl0sIHZhbDogX3BhaXJzWzBdICsgbVszXS50cmltKCkgKyBfcGFpcnNbMV0gfSA6IHsgdmFsOiBleHByLnRyaW0oKSB9XG4gIH1cblxuICBfYnJhY2tldHMuYXJyYXkgPSBmdW5jdGlvbiBhcnJheShwYWlyKSB7XG4gICAgcmV0dXJuIF9jcmVhdGUocGFpciB8fCBjYWNoZWRCcmFja2V0cylcbiAgfVxuXG4gIHZhciBfc2V0dGluZ3NcbiAgZnVuY3Rpb24gX3NldFNldHRpbmdzKG8pIHtcbiAgICB2YXIgYlxuICAgIG8gPSBvIHx8IHt9XG4gICAgYiA9IG8uYnJhY2tldHNcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgJ2JyYWNrZXRzJywge1xuICAgICAgc2V0OiBfcmVzZXQsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhY2hlZEJyYWNrZXRzIH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgICBfc2V0dGluZ3MgPSBvXG4gICAgX3Jlc2V0KGIpXG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9icmFja2V0cywgJ3NldHRpbmdzJywge1xuICAgIHNldDogX3NldFNldHRpbmdzLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3NldHRpbmdzIH1cbiAgfSlcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogaW4gdGhlIG5vZGUgdmVyc2lvbiByaW90IGlzIG5vdCBpbiB0aGUgc2NvcGUgKi9cbiAgX2JyYWNrZXRzLnNldHRpbmdzID0gdHlwZW9mIHJpb3QgIT09ICd1bmRlZmluZWQnICYmIHJpb3Quc2V0dGluZ3MgfHwge31cbiAgX2JyYWNrZXRzLnNldCA9IF9yZXNldFxuXG4gIF9icmFja2V0cy5SX1NUUklOR1MgPSBTVFJJTkdTXG4gIF9icmFja2V0cy5SX01MQ09NTVMgPSBNTENPTU1TXG4gIF9icmFja2V0cy5TX1FCTE9DS1MgPSBTX1FCU1JDXG5cbiAgcmV0dXJuIF9icmFja2V0c1xuXG59KSgpXG5cbi8qKlxuICogQG1vZHVsZSB0bXBsXG4gKlxuICogdG1wbCAgICAgICAgICAtIFJvb3QgZnVuY3Rpb24sIHJldHVybnMgdGhlIHRlbXBsYXRlIHZhbHVlLCByZW5kZXIgd2l0aCBkYXRhXG4gKiB0bXBsLmhhc0V4cHIgIC0gVGVzdCB0aGUgZXhpc3RlbmNlIG9mIGEgZXhwcmVzc2lvbiBpbnNpZGUgYSBzdHJpbmdcbiAqIHRtcGwubG9vcEtleXMgLSBHZXQgdGhlIGtleXMgZm9yIGFuICdlYWNoJyBsb29wICh1c2VkIGJ5IGBfZWFjaGApXG4gKi9cblxudmFyIHRtcGwgPSAoZnVuY3Rpb24gKCkge1xuXG4gIHZhciBfY2FjaGUgPSB7fVxuXG4gIGZ1bmN0aW9uIF90bXBsKHN0ciwgZGF0YSkge1xuICAgIGlmICghc3RyKSByZXR1cm4gc3RyXG5cbiAgICByZXR1cm4gKF9jYWNoZVtzdHJdIHx8IChfY2FjaGVbc3RyXSA9IF9jcmVhdGUoc3RyKSkpLmNhbGwoZGF0YSwgX2xvZ0VycilcbiAgfVxuXG4gIF90bXBsLmlzUmF3ID0gZnVuY3Rpb24gKGV4cHIpIHtcbiAgICByZXR1cm4gZXhwclticmFja2V0cy5fcmF3T2Zmc2V0XSA9PT0gXCI9XCJcbiAgfVxuXG4gIF90bXBsLmhhdmVSYXcgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgcmV0dXJuIGJyYWNrZXRzKDEwKS50ZXN0KHNyYylcbiAgfVxuXG4gIF90bXBsLmhhc0V4cHIgPSBicmFja2V0cy5oYXNFeHByXG5cbiAgX3RtcGwubG9vcEtleXMgPSBicmFja2V0cy5sb29wS2V5c1xuXG4gIF90bXBsLmVycm9ySGFuZGxlciA9IG51bGxcblxuICBmdW5jdGlvbiBfbG9nRXJyKGVyciwgY3R4KSB7XG5cbiAgICBpZiAoX3RtcGwuZXJyb3JIYW5kbGVyKSB7XG5cbiAgICAgIGVyci5yaW90RGF0YSA9IHtcbiAgICAgICAgdGFnTmFtZTogY3R4ICYmIGN0eC5yb290ICYmIGN0eC5yb290LnRhZ05hbWUsXG4gICAgICAgIF9yaW90X2lkOiBjdHggJiYgY3R4Ll9yaW90X2lkICAvL2VzbGludC1kaXNhYmxlLWxpbmUgY2FtZWxjYXNlXG4gICAgICB9XG4gICAgICBfdG1wbC5lcnJvckhhbmRsZXIoZXJyKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGUoc3RyKSB7XG5cbiAgICB2YXIgZXhwciA9IF9nZXRUbXBsKHN0cilcbiAgICBpZiAoZXhwci5zbGljZSgwLCAxMSkgIT09ICd0cnl7cmV0dXJuICcpIGV4cHIgPSAncmV0dXJuICcgKyBleHByXG5cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKCdFJywgZXhwciArICc7JylcbiAgfVxuXG4gIHZhclxuICAgIFJFX1FCTE9DSyA9IFJlZ0V4cChicmFja2V0cy5TX1FCTE9DS1MsICdnJyksXG4gICAgUkVfUUJNQVJLID0gL1xceDAxKFxcZCspfi9nXG5cbiAgZnVuY3Rpb24gX2dldFRtcGwoc3RyKSB7XG4gICAgdmFyXG4gICAgICBxc3RyID0gW10sXG4gICAgICBleHByLFxuICAgICAgcGFydHMgPSBicmFja2V0cy5zcGxpdChzdHIucmVwbGFjZSgvXFx1MjA1Ny9nLCAnXCInKSwgMSlcblxuICAgIGlmIChwYXJ0cy5sZW5ndGggPiAyIHx8IHBhcnRzWzBdKSB7XG4gICAgICB2YXIgaSwgaiwgbGlzdCA9IFtdXG5cbiAgICAgIGZvciAoaSA9IGogPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcblxuICAgICAgICBleHByID0gcGFydHNbaV1cblxuICAgICAgICBpZiAoZXhwciAmJiAoZXhwciA9IGkgJiAxID9cblxuICAgICAgICAgICAgICBfcGFyc2VFeHByKGV4cHIsIDEsIHFzdHIpIDpcblxuICAgICAgICAgICAgICAnXCInICsgZXhwclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcclxcbj98XFxuL2csICdcXFxcbicpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKSArXG4gICAgICAgICAgICAgICdcIidcblxuICAgICAgICAgICkpIGxpc3RbaisrXSA9IGV4cHJcblxuICAgICAgfVxuXG4gICAgICBleHByID0gaiA8IDIgPyBsaXN0WzBdIDpcbiAgICAgICAgICAgICAnWycgKyBsaXN0LmpvaW4oJywnKSArICddLmpvaW4oXCJcIiknXG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgICBleHByID0gX3BhcnNlRXhwcihwYXJ0c1sxXSwgMCwgcXN0cilcbiAgICB9XG5cbiAgICBpZiAocXN0clswXSlcbiAgICAgIGV4cHIgPSBleHByLnJlcGxhY2UoUkVfUUJNQVJLLCBmdW5jdGlvbiAoXywgcG9zKSB7XG4gICAgICAgIHJldHVybiBxc3RyW3Bvc11cbiAgICAgICAgICAucmVwbGFjZSgvXFxyL2csICdcXFxccicpXG4gICAgICAgICAgLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKVxuICAgICAgfSlcblxuICAgIHJldHVybiBleHByXG4gIH1cblxuICB2YXJcbiAgICBDU19JREVOVCA9IC9eKD86KC0/W19BLVphLXpcXHhBMC1cXHhGRl1bLVxcd1xceEEwLVxceEZGXSopfFxceDAxKFxcZCspfik6LyxcbiAgICBSRV9CUkFDRSA9IC8sfChbW3soXSl8JC9nXG5cbiAgZnVuY3Rpb24gX3BhcnNlRXhwcihleHByLCBhc1RleHQsIHFzdHIpIHtcblxuICAgIGlmIChleHByWzBdID09PSBcIj1cIikgZXhwciA9IGV4cHIuc2xpY2UoMSlcblxuICAgIGV4cHIgPSBleHByXG4gICAgICAgICAgLnJlcGxhY2UoUkVfUUJMT0NLLCBmdW5jdGlvbiAocywgZGl2KSB7XG4gICAgICAgICAgICByZXR1cm4gcy5sZW5ndGggPiAyICYmICFkaXYgPyAnXFx4MDEnICsgKHFzdHIucHVzaChzKSAtIDEpICsgJ34nIDogc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKClcbiAgICAgICAgICAucmVwbGFjZSgvXFwgPyhbW1xcKHt9LD9cXC46XSlcXCA/L2csICckMScpXG5cbiAgICBpZiAoZXhwcikge1xuICAgICAgdmFyXG4gICAgICAgIGxpc3QgPSBbXSxcbiAgICAgICAgY250ID0gMCxcbiAgICAgICAgbWF0Y2hcblxuICAgICAgd2hpbGUgKGV4cHIgJiZcbiAgICAgICAgICAgIChtYXRjaCA9IGV4cHIubWF0Y2goQ1NfSURFTlQpKSAmJlxuICAgICAgICAgICAgIW1hdGNoLmluZGV4XG4gICAgICAgICkge1xuICAgICAgICB2YXJcbiAgICAgICAgICBrZXksXG4gICAgICAgICAganNiLFxuICAgICAgICAgIHJlID0gLyx8KFtbeyhdKXwkL2dcblxuICAgICAgICBleHByID0gUmVnRXhwLnJpZ2h0Q29udGV4dFxuICAgICAgICBrZXkgID0gbWF0Y2hbMl0gPyBxc3RyW21hdGNoWzJdXS5zbGljZSgxLCAtMSkudHJpbSgpLnJlcGxhY2UoL1xccysvZywgJyAnKSA6IG1hdGNoWzFdXG5cbiAgICAgICAgd2hpbGUgKGpzYiA9IChtYXRjaCA9IHJlLmV4ZWMoZXhwcikpWzFdKSBza2lwQnJhY2VzKGpzYiwgcmUpXG5cbiAgICAgICAganNiICA9IGV4cHIuc2xpY2UoMCwgbWF0Y2guaW5kZXgpXG4gICAgICAgIGV4cHIgPSBSZWdFeHAucmlnaHRDb250ZXh0XG5cbiAgICAgICAgbGlzdFtjbnQrK10gPSBfd3JhcEV4cHIoanNiLCAxLCBrZXkpXG4gICAgICB9XG5cbiAgICAgIGV4cHIgPSAhY250ID8gX3dyYXBFeHByKGV4cHIsIGFzVGV4dCkgOlxuICAgICAgICAgIGNudCA+IDEgPyAnWycgKyBsaXN0LmpvaW4oJywnKSArICddLmpvaW4oXCIgXCIpLnRyaW0oKScgOiBsaXN0WzBdXG4gICAgfVxuICAgIHJldHVybiBleHByXG5cbiAgICBmdW5jdGlvbiBza2lwQnJhY2VzKGpzYiwgcmUpIHtcbiAgICAgIHZhclxuICAgICAgICBtYXRjaCxcbiAgICAgICAgbHYgPSAxLFxuICAgICAgICBpciA9IGpzYiA9PT0gJygnID8gL1soKV0vZyA6IGpzYiA9PT0gJ1snID8gL1tbXFxdXS9nIDogL1t7fV0vZ1xuXG4gICAgICBpci5sYXN0SW5kZXggPSByZS5sYXN0SW5kZXhcbiAgICAgIHdoaWxlIChtYXRjaCA9IGlyLmV4ZWMoZXhwcikpIHtcbiAgICAgICAgaWYgKG1hdGNoWzBdID09PSBqc2IpICsrbHZcbiAgICAgICAgZWxzZSBpZiAoIS0tbHYpIGJyZWFrXG4gICAgICB9XG4gICAgICByZS5sYXN0SW5kZXggPSBsdiA/IGV4cHIubGVuZ3RoIDogaXIubGFzdEluZGV4XG4gICAgfVxuICB9XG5cbiAgLy8gaXN0YW5idWwgaWdub3JlIG5leHQ6IG5vdCBib3RoXG4gIHZhciBKU19DT05URVhUID0gJ1wiaW4gdGhpcz90aGlzOicgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgPyAnZ2xvYmFsJyA6ICd3aW5kb3cnKSArICcpLidcbiAgdmFyIEpTX1ZBUk5BTUUgPSAvWyx7XVskXFx3XSs6fCheICp8W14kXFx3XFwuXSkoPyEoPzp0eXBlb2Z8dHJ1ZXxmYWxzZXxudWxsfHVuZGVmaW5lZHxpbnxpbnN0YW5jZW9mfGlzKD86RmluaXRlfE5hTil8dm9pZHxOYU58bmV3fERhdGV8UmVnRXhwfE1hdGgpKD8hWyRcXHddKSkoWyRfQS1aYS16XVskXFx3XSopL2dcblxuICBmdW5jdGlvbiBfd3JhcEV4cHIoZXhwciwgYXNUZXh0LCBrZXkpIHtcbiAgICB2YXIgdGJcblxuICAgIGV4cHIgPSBleHByLnJlcGxhY2UoSlNfVkFSTkFNRSwgZnVuY3Rpb24gKG1hdGNoLCBwLCBtdmFyLCBwb3MsIHMpIHtcbiAgICAgIGlmIChtdmFyKSB7XG4gICAgICAgIHBvcyA9IHRiID8gMCA6IHBvcyArIG1hdGNoLmxlbmd0aFxuXG4gICAgICAgIGlmIChtdmFyICE9PSAndGhpcycgJiYgbXZhciAhPT0gJ2dsb2JhbCcgJiYgbXZhciAhPT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICBtYXRjaCA9IHAgKyAnKFwiJyArIG12YXIgKyBKU19DT05URVhUICsgbXZhclxuICAgICAgICAgIGlmIChwb3MpIHRiID0gKHMgPSBzW3Bvc10pID09PSAnLicgfHwgcyA9PT0gJygnIHx8IHMgPT09ICdbJ1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBvcylcbiAgICAgICAgICB0YiA9ICEvXig/PShcXC5bJFxcd10rKSlcXDEoPzpbXi5bKF18JCkvLnRlc3Qocy5zbGljZShwb3MpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoXG4gICAgfSlcblxuICAgIGlmICh0Yikge1xuICAgICAgZXhwciA9ICd0cnl7cmV0dXJuICcgKyBleHByICsgJ31jYXRjaChlKXtFKGUsdGhpcyl9J1xuICAgIH1cblxuICAgIGlmIChrZXkpIHtcblxuICAgICAgZXhwciA9ICh0YiA/XG4gICAgICAgICAgJ2Z1bmN0aW9uKCl7JyArIGV4cHIgKyAnfS5jYWxsKHRoaXMpJyA6ICcoJyArIGV4cHIgKyAnKSdcbiAgICAgICAgKSArICc/XCInICsga2V5ICsgJ1wiOlwiXCInXG4gICAgfVxuICAgIGVsc2UgaWYgKGFzVGV4dCkge1xuXG4gICAgICBleHByID0gJ2Z1bmN0aW9uKHYpeycgKyAodGIgP1xuICAgICAgICAgIGV4cHIucmVwbGFjZSgncmV0dXJuICcsICd2PScpIDogJ3Y9KCcgKyBleHByICsgJyknXG4gICAgICAgICkgKyAnO3JldHVybiB2fHx2PT09MD92OlwiXCJ9LmNhbGwodGhpcyknXG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cHJcbiAgfVxuXG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBjb21wYXRpYmlsaXR5IGZpeCBmb3IgYmV0YSB2ZXJzaW9uc1xuICBfdG1wbC5wYXJzZSA9IGZ1bmN0aW9uIChzKSB7IHJldHVybiBzIH1cblxuICByZXR1cm4gX3RtcGxcblxufSkoKVxuXG4gIHRtcGwudmVyc2lvbiA9IGJyYWNrZXRzLnZlcnNpb24gPSAndjIuMy4xOSdcblxuXG4vKlxuICBsaWIvYnJvd3Nlci90YWcvbWtkb20uanNcblxuICBJbmNsdWRlcyBoYWNrcyBuZWVkZWQgZm9yIHRoZSBJbnRlcm5ldCBFeHBsb3JlciB2ZXJzaW9uIDkgYW5kIGJlbGxvd1xuXG4qL1xuLy8gaHR0cDovL2thbmdheC5naXRodWIuaW8vY29tcGF0LXRhYmxlL2VzNS8jaWU4XG4vLyBodHRwOi8vY29kZXBsYW5ldC5pby9kcm9wcGluZy1pZTgvXG5cbnZhciBta2RvbSA9IChmdW5jdGlvbiAoY2hlY2tJRSkge1xuXG4gIHZhciByb290RWxzID0ge1xuICAgICAgJ3RyJzogJ3Rib2R5JyxcbiAgICAgICd0aCc6ICd0cicsXG4gICAgICAndGQnOiAndHInLFxuICAgICAgJ3Rib2R5JzogJ3RhYmxlJyxcbiAgICAgICdjb2wnOiAnY29sZ3JvdXAnXG4gICAgfSxcbiAgICBHRU5FUklDID0gJ2RpdidcblxuICBjaGVja0lFID0gY2hlY2tJRSAmJiBjaGVja0lFIDwgMTBcblxuICAvLyBjcmVhdGVzIGFueSBkb20gZWxlbWVudCBpbiBhIGRpdiwgdGFibGUsIG9yIGNvbGdyb3VwIGNvbnRhaW5lclxuICBmdW5jdGlvbiBfbWtkb20oaHRtbCkge1xuXG4gICAgdmFyIG1hdGNoID0gaHRtbCAmJiBodG1sLm1hdGNoKC9eXFxzKjwoWy1cXHddKykvKSxcbiAgICAgIHRhZ05hbWUgPSBtYXRjaCAmJiBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpLFxuICAgICAgcm9vdFRhZyA9IHJvb3RFbHNbdGFnTmFtZV0gfHwgR0VORVJJQyxcbiAgICAgIGVsID0gbWtFbChyb290VGFnKVxuXG4gICAgZWwuc3R1YiA9IHRydWVcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKGNoZWNrSUUgJiYgdGFnTmFtZSAmJiAobWF0Y2ggPSB0YWdOYW1lLm1hdGNoKFNQRUNJQUxfVEFHU19SRUdFWCkpKVxuICAgICAgaWU5ZWxlbShlbCwgaHRtbCwgdGFnTmFtZSwgISFtYXRjaFsxXSlcbiAgICBlbHNlXG4gICAgICBlbC5pbm5lckhUTUwgPSBodG1sXG5cbiAgICByZXR1cm4gZWxcbiAgfVxuXG4gIC8vIGNyZWF0ZXMgdHIsIHRoLCB0ZCwgb3B0aW9uLCBvcHRncm91cCBlbGVtZW50IGZvciBJRTgtOVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBmdW5jdGlvbiBpZTllbGVtKGVsLCBodG1sLCB0YWdOYW1lLCBzZWxlY3QpIHtcblxuICAgIHZhciBkaXYgPSBta0VsKEdFTkVSSUMpLFxuICAgICAgdGFnID0gc2VsZWN0ID8gJ3NlbGVjdD4nIDogJ3RhYmxlPicsXG4gICAgICBjaGlsZFxuXG4gICAgZGl2LmlubmVySFRNTCA9ICc8JyArIHRhZyArIGh0bWwgKyAnPC8nICsgdGFnXG5cbiAgICBjaGlsZCA9ICQodGFnTmFtZSwgZGl2KVxuICAgIGlmIChjaGlsZClcbiAgICAgIGVsLmFwcGVuZENoaWxkKGNoaWxkKVxuXG4gIH1cbiAgLy8gZW5kIGllOWVsZW0oKVxuXG4gIHJldHVybiBfbWtkb21cblxufSkoSUVfVkVSU0lPTilcblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBpdGVtIGxvb3BlZCBpbnRvIGFuIG9iamVjdCB1c2VkIHRvIGV4dGVuZCB0aGUgY2hpbGQgdGFnIHByb3BlcnRpZXNcbiAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gZXhwciAtIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXlzIHVzZWQgdG8gZXh0ZW5kIHRoZSBjaGlsZHJlbiB0YWdzXG4gKiBAcGFyYW0gICB7ICogfSBrZXkgLSB2YWx1ZSB0byBhc3NpZ24gdG8gdGhlIG5ldyBvYmplY3QgcmV0dXJuZWRcbiAqIEBwYXJhbSAgIHsgKiB9IHZhbCAtIHZhbHVlIGNvbnRhaW5pbmcgdGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIGluIHRoZSBhcnJheVxuICogQHJldHVybnMgeyBPYmplY3QgfSAtIG5ldyBvYmplY3QgY29udGFpbmluZyB0aGUgdmFsdWVzIG9mIHRoZSBvcmlnaW5hbCBpdGVtXG4gKlxuICogVGhlIHZhcmlhYmxlcyAna2V5JyBhbmQgJ3ZhbCcgYXJlIGFyYml0cmFyeS5cbiAqIFRoZXkgZGVwZW5kIG9uIHRoZSBjb2xsZWN0aW9uIHR5cGUgbG9vcGVkIChBcnJheSwgT2JqZWN0KVxuICogYW5kIG9uIHRoZSBleHByZXNzaW9uIHVzZWQgb24gdGhlIGVhY2ggdGFnXG4gKlxuICovXG5mdW5jdGlvbiBta2l0ZW0oZXhwciwga2V5LCB2YWwpIHtcbiAgdmFyIGl0ZW0gPSB7fVxuICBpdGVtW2V4cHIua2V5XSA9IGtleVxuICBpZiAoZXhwci5wb3MpIGl0ZW1bZXhwci5wb3NdID0gdmFsXG4gIHJldHVybiBpdGVtXG59XG5cbi8qKlxuICogVW5tb3VudCB0aGUgcmVkdW5kYW50IHRhZ3NcbiAqIEBwYXJhbSAgIHsgQXJyYXkgfSBpdGVtcyAtIGFycmF5IGNvbnRhaW5pbmcgdGhlIGN1cnJlbnQgaXRlbXMgdG8gbG9vcFxuICogQHBhcmFtICAgeyBBcnJheSB9IHRhZ3MgLSBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgY2hpbGRyZW4gdGFnc1xuICovXG5mdW5jdGlvbiB1bm1vdW50UmVkdW5kYW50KGl0ZW1zLCB0YWdzKSB7XG5cbiAgdmFyIGkgPSB0YWdzLmxlbmd0aCxcbiAgICBqID0gaXRlbXMubGVuZ3RoXG5cbiAgd2hpbGUgKGkgPiBqKSB7XG4gICAgdmFyIHQgPSB0YWdzWy0taV1cbiAgICB0YWdzLnNwbGljZShpLCAxKVxuICAgIHQudW5tb3VudCgpXG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIHRoZSBuZXN0ZWQgY3VzdG9tIHRhZ3MgaW4gbm9uIGN1c3RvbSBsb29wIHRhZ3NcbiAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gY2hpbGQgLSBub24gY3VzdG9tIGxvb3AgdGFnXG4gKiBAcGFyYW0gICB7IE51bWJlciB9IGkgLSBjdXJyZW50IHBvc2l0aW9uIG9mIHRoZSBsb29wIHRhZ1xuICovXG5mdW5jdGlvbiBtb3ZlTmVzdGVkVGFncyhjaGlsZCwgaSkge1xuICBPYmplY3Qua2V5cyhjaGlsZC50YWdzKS5mb3JFYWNoKGZ1bmN0aW9uKHRhZ05hbWUpIHtcbiAgICB2YXIgdGFnID0gY2hpbGQudGFnc1t0YWdOYW1lXVxuICAgIGlmIChpc0FycmF5KHRhZykpXG4gICAgICBlYWNoKHRhZywgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgbW92ZUNoaWxkVGFnKHQsIHRhZ05hbWUsIGkpXG4gICAgICB9KVxuICAgIGVsc2VcbiAgICAgIG1vdmVDaGlsZFRhZyh0YWcsIHRhZ05hbWUsIGkpXG4gIH0pXG59XG5cbi8qKlxuICogQWRkcyB0aGUgZWxlbWVudHMgZm9yIGEgdmlydHVhbCB0YWdcbiAqIEBwYXJhbSB7IFRhZyB9IHRhZyAtIHRoZSB0YWcgd2hvc2Ugcm9vdCdzIGNoaWxkcmVuIHdpbGwgYmUgaW5zZXJ0ZWQgb3IgYXBwZW5kZWRcbiAqIEBwYXJhbSB7IE5vZGUgfSBzcmMgLSB0aGUgbm9kZSB0aGF0IHdpbGwgZG8gdGhlIGluc2VydGluZyBvciBhcHBlbmRpbmdcbiAqIEBwYXJhbSB7IFRhZyB9IHRhcmdldCAtIG9ubHkgaWYgaW5zZXJ0aW5nLCBpbnNlcnQgYmVmb3JlIHRoaXMgdGFnJ3MgZmlyc3QgY2hpbGRcbiAqL1xuZnVuY3Rpb24gYWRkVmlydHVhbCh0YWcsIHNyYywgdGFyZ2V0KSB7XG4gIHZhciBlbCA9IHRhZy5fcm9vdFxuICB0YWcuX3ZpcnRzID0gW11cbiAgd2hpbGUgKGVsKSB7XG4gICAgdmFyIHNpYiA9IGVsLm5leHRTaWJsaW5nXG4gICAgaWYgKHRhcmdldClcbiAgICAgIHNyYy5pbnNlcnRCZWZvcmUoZWwsIHRhcmdldC5fcm9vdClcbiAgICBlbHNlXG4gICAgICBzcmMuYXBwZW5kQ2hpbGQoZWwpXG5cbiAgICB0YWcuX3ZpcnRzLnB1c2goZWwpIC8vIGhvbGQgZm9yIHVubW91bnRpbmdcbiAgICBlbCA9IHNpYlxuICB9XG59XG5cbi8qKlxuICogTW92ZSB2aXJ0dWFsIHRhZyBhbmQgYWxsIGNoaWxkIG5vZGVzXG4gKiBAcGFyYW0geyBUYWcgfSB0YWcgLSBmaXJzdCBjaGlsZCByZWZlcmVuY2UgdXNlZCB0byBzdGFydCBtb3ZlXG4gKiBAcGFyYW0geyBOb2RlIH0gc3JjICAtIHRoZSBub2RlIHRoYXQgd2lsbCBkbyB0aGUgaW5zZXJ0aW5nXG4gKiBAcGFyYW0geyBUYWcgfSB0YXJnZXQgLSBpbnNlcnQgYmVmb3JlIHRoaXMgdGFnJ3MgZmlyc3QgY2hpbGRcbiAqIEBwYXJhbSB7IE51bWJlciB9IGxlbiAtIGhvdyBtYW55IGNoaWxkIG5vZGVzIHRvIG1vdmVcbiAqL1xuZnVuY3Rpb24gbW92ZVZpcnR1YWwodGFnLCBzcmMsIHRhcmdldCwgbGVuKSB7XG4gIHZhciBlbCA9IHRhZy5fcm9vdFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIHNpYiA9IGVsLm5leHRTaWJsaW5nXG4gICAgc3JjLmluc2VydEJlZm9yZShlbCwgdGFyZ2V0Ll9yb290KVxuICAgIGVsID0gc2liXG4gIH1cbn1cblxuXG4vKipcbiAqIE1hbmFnZSB0YWdzIGhhdmluZyB0aGUgJ2VhY2gnXG4gKiBAcGFyYW0gICB7IE9iamVjdCB9IGRvbSAtIERPTSBub2RlIHdlIG5lZWQgdG8gbG9vcFxuICogQHBhcmFtICAgeyBUYWcgfSBwYXJlbnQgLSBwYXJlbnQgdGFnIGluc3RhbmNlIHdoZXJlIHRoZSBkb20gbm9kZSBpcyBjb250YWluZWRcbiAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gZXhwciAtIHN0cmluZyBjb250YWluZWQgaW4gdGhlICdlYWNoJyBhdHRyaWJ1dGVcbiAqL1xuZnVuY3Rpb24gX2VhY2goZG9tLCBwYXJlbnQsIGV4cHIpIHtcblxuICAvLyByZW1vdmUgdGhlIGVhY2ggcHJvcGVydHkgZnJvbSB0aGUgb3JpZ2luYWwgdGFnXG4gIHJlbUF0dHIoZG9tLCAnZWFjaCcpXG5cbiAgdmFyIG11c3RSZW9yZGVyID0gdHlwZW9mIGdldEF0dHIoZG9tLCAnbm8tcmVvcmRlcicpICE9PSBUX1NUUklORyB8fCByZW1BdHRyKGRvbSwgJ25vLXJlb3JkZXInKSxcbiAgICB0YWdOYW1lID0gZ2V0VGFnTmFtZShkb20pLFxuICAgIGltcGwgPSBfX3RhZ0ltcGxbdGFnTmFtZV0gfHwgeyB0bXBsOiBkb20ub3V0ZXJIVE1MIH0sXG4gICAgdXNlUm9vdCA9IFNQRUNJQUxfVEFHU19SRUdFWC50ZXN0KHRhZ05hbWUpLFxuICAgIHJvb3QgPSBkb20ucGFyZW50Tm9kZSxcbiAgICByZWYgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyksXG4gICAgY2hpbGQgPSBnZXRUYWcoZG9tKSxcbiAgICBpc09wdGlvbiA9IC9vcHRpb24vZ2kudGVzdCh0YWdOYW1lKSwgLy8gdGhlIG9wdGlvbiB0YWdzIG11c3QgYmUgdHJlYXRlZCBkaWZmZXJlbnRseVxuICAgIHRhZ3MgPSBbXSxcbiAgICBvbGRJdGVtcyA9IFtdLFxuICAgIGhhc0tleXMsXG4gICAgaXNWaXJ0dWFsID0gZG9tLnRhZ05hbWUgPT0gJ1ZJUlRVQUwnXG5cbiAgLy8gcGFyc2UgdGhlIGVhY2ggZXhwcmVzc2lvblxuICBleHByID0gdG1wbC5sb29wS2V5cyhleHByKVxuXG4gIC8vIGluc2VydCBhIG1hcmtlZCB3aGVyZSB0aGUgbG9vcCB0YWdzIHdpbGwgYmUgaW5qZWN0ZWRcbiAgcm9vdC5pbnNlcnRCZWZvcmUocmVmLCBkb20pXG5cbiAgLy8gY2xlYW4gdGVtcGxhdGUgY29kZVxuICBwYXJlbnQub25lKCdiZWZvcmUtbW91bnQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyByZW1vdmUgdGhlIG9yaWdpbmFsIERPTSBub2RlXG4gICAgZG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tKVxuICAgIGlmIChyb290LnN0dWIpIHJvb3QgPSBwYXJlbnQucm9vdFxuXG4gIH0pLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gZ2V0IHRoZSBuZXcgaXRlbXMgY29sbGVjdGlvblxuICAgIHZhciBpdGVtcyA9IHRtcGwoZXhwci52YWwsIHBhcmVudCksXG4gICAgICAvLyBjcmVhdGUgYSBmcmFnbWVudCB0byBob2xkIHRoZSBuZXcgRE9NIG5vZGVzIHRvIGluamVjdCBpbiB0aGUgcGFyZW50IHRhZ1xuICAgICAgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuXG5cblxuICAgIC8vIG9iamVjdCBsb29wLiBhbnkgY2hhbmdlcyBjYXVzZSBmdWxsIHJlZHJhd1xuICAgIGlmICghaXNBcnJheShpdGVtcykpIHtcbiAgICAgIGhhc0tleXMgPSBpdGVtcyB8fCBmYWxzZVxuICAgICAgaXRlbXMgPSBoYXNLZXlzID9cbiAgICAgICAgT2JqZWN0LmtleXMoaXRlbXMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIG1raXRlbShleHByLCBrZXksIGl0ZW1zW2tleV0pXG4gICAgICAgIH0pIDogW11cbiAgICB9XG5cbiAgICAvLyBsb29wIGFsbCB0aGUgbmV3IGl0ZW1zXG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICAvLyByZW9yZGVyIG9ubHkgaWYgdGhlIGl0ZW1zIGFyZSBvYmplY3RzXG4gICAgICB2YXIgX211c3RSZW9yZGVyID0gbXVzdFJlb3JkZXIgJiYgaXRlbSBpbnN0YW5jZW9mIE9iamVjdCxcbiAgICAgICAgb2xkUG9zID0gb2xkSXRlbXMuaW5kZXhPZihpdGVtKSxcbiAgICAgICAgcG9zID0gfm9sZFBvcyAmJiBfbXVzdFJlb3JkZXIgPyBvbGRQb3MgOiBpLFxuICAgICAgICAvLyBkb2VzIGEgdGFnIGV4aXN0IGluIHRoaXMgcG9zaXRpb24/XG4gICAgICAgIHRhZyA9IHRhZ3NbcG9zXVxuXG4gICAgICBpdGVtID0gIWhhc0tleXMgJiYgZXhwci5rZXkgPyBta2l0ZW0oZXhwciwgaXRlbSwgaSkgOiBpdGVtXG5cbiAgICAgIC8vIG5ldyB0YWdcbiAgICAgIGlmIChcbiAgICAgICAgIV9tdXN0UmVvcmRlciAmJiAhdGFnIC8vIHdpdGggbm8tcmVvcmRlciB3ZSBqdXN0IHVwZGF0ZSB0aGUgb2xkIHRhZ3NcbiAgICAgICAgfHxcbiAgICAgICAgX211c3RSZW9yZGVyICYmICF+b2xkUG9zIHx8ICF0YWcgLy8gYnkgZGVmYXVsdCB3ZSBhbHdheXMgdHJ5IHRvIHJlb3JkZXIgdGhlIERPTSBlbGVtZW50c1xuICAgICAgKSB7XG5cbiAgICAgICAgdGFnID0gbmV3IFRhZyhpbXBsLCB7XG4gICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgaXNMb29wOiB0cnVlLFxuICAgICAgICAgIGhhc0ltcGw6ICEhX190YWdJbXBsW3RhZ05hbWVdLFxuICAgICAgICAgIHJvb3Q6IHVzZVJvb3QgPyByb290IDogZG9tLmNsb25lTm9kZSgpLFxuICAgICAgICAgIGl0ZW06IGl0ZW1cbiAgICAgICAgfSwgZG9tLmlubmVySFRNTClcblxuICAgICAgICB0YWcubW91bnQoKVxuICAgICAgICBpZiAoaXNWaXJ0dWFsKSB0YWcuX3Jvb3QgPSB0YWcucm9vdC5maXJzdENoaWxkIC8vIHNhdmUgcmVmZXJlbmNlIGZvciBmdXJ0aGVyIG1vdmVzIG9yIGluc2VydHNcbiAgICAgICAgLy8gdGhpcyB0YWcgbXVzdCBiZSBhcHBlbmRlZFxuICAgICAgICBpZiAoaSA9PSB0YWdzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChpc1ZpcnR1YWwpXG4gICAgICAgICAgICBhZGRWaXJ0dWFsKHRhZywgZnJhZylcbiAgICAgICAgICBlbHNlIGZyYWcuYXBwZW5kQ2hpbGQodGFnLnJvb3QpXG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcyB0YWcgbXVzdCBiZSBpbnNlcnRcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKGlzVmlydHVhbClcbiAgICAgICAgICAgIGFkZFZpcnR1YWwodGFnLCByb290LCB0YWdzW2ldKVxuICAgICAgICAgIGVsc2Ugcm9vdC5pbnNlcnRCZWZvcmUodGFnLnJvb3QsIHRhZ3NbaV0ucm9vdClcbiAgICAgICAgICBvbGRJdGVtcy5zcGxpY2UoaSwgMCwgaXRlbSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRhZ3Muc3BsaWNlKGksIDAsIHRhZylcbiAgICAgICAgcG9zID0gaSAvLyBoYW5kbGVkIGhlcmUgc28gbm8gbW92ZVxuICAgICAgfSBlbHNlIHRhZy51cGRhdGUoaXRlbSlcblxuICAgICAgLy8gcmVvcmRlciB0aGUgdGFnIGlmIGl0J3Mgbm90IGxvY2F0ZWQgaW4gaXRzIHByZXZpb3VzIHBvc2l0aW9uXG4gICAgICBpZiAocG9zICE9PSBpICYmIF9tdXN0UmVvcmRlcikge1xuICAgICAgICAvLyB1cGRhdGUgdGhlIERPTVxuICAgICAgICBpZiAoaXNWaXJ0dWFsKVxuICAgICAgICAgIG1vdmVWaXJ0dWFsKHRhZywgcm9vdCwgdGFnc1tpXSwgZG9tLmNoaWxkTm9kZXMubGVuZ3RoKVxuICAgICAgICBlbHNlIHJvb3QuaW5zZXJ0QmVmb3JlKHRhZy5yb290LCB0YWdzW2ldLnJvb3QpXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcG9zaXRpb24gYXR0cmlidXRlIGlmIGl0IGV4aXN0c1xuICAgICAgICBpZiAoZXhwci5wb3MpXG4gICAgICAgICAgdGFnW2V4cHIucG9zXSA9IGlcbiAgICAgICAgLy8gbW92ZSB0aGUgb2xkIHRhZyBpbnN0YW5jZVxuICAgICAgICB0YWdzLnNwbGljZShpLCAwLCB0YWdzLnNwbGljZShwb3MsIDEpWzBdKVxuICAgICAgICAvLyBtb3ZlIHRoZSBvbGQgaXRlbVxuICAgICAgICBvbGRJdGVtcy5zcGxpY2UoaSwgMCwgb2xkSXRlbXMuc3BsaWNlKHBvcywgMSlbMF0pXG4gICAgICAgIC8vIGlmIHRoZSBsb29wIHRhZ3MgYXJlIG5vdCBjdXN0b21cbiAgICAgICAgLy8gd2UgbmVlZCB0byBtb3ZlIGFsbCB0aGVpciBjdXN0b20gdGFncyBpbnRvIHRoZSByaWdodCBwb3NpdGlvblxuICAgICAgICBpZiAoIWNoaWxkKSBtb3ZlTmVzdGVkVGFncyh0YWcsIGkpXG4gICAgICB9XG5cbiAgICAgIC8vIGNhY2hlIHRoZSBvcmlnaW5hbCBpdGVtIHRvIHVzZSBpdCBpbiB0aGUgZXZlbnRzIGJvdW5kIHRvIHRoaXMgbm9kZVxuICAgICAgLy8gYW5kIGl0cyBjaGlsZHJlblxuICAgICAgdGFnLl9pdGVtID0gaXRlbVxuICAgICAgLy8gY2FjaGUgdGhlIHJlYWwgcGFyZW50IHRhZyBpbnRlcm5hbGx5XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YWcsICdfcGFyZW50JywgcGFyZW50KVxuXG4gICAgfSwgdHJ1ZSkgLy8gYWxsb3cgbnVsbCB2YWx1ZXNcblxuICAgIC8vIHJlbW92ZSB0aGUgcmVkdW5kYW50IHRhZ3NcbiAgICB1bm1vdW50UmVkdW5kYW50KGl0ZW1zLCB0YWdzKVxuXG4gICAgLy8gaW5zZXJ0IHRoZSBuZXcgbm9kZXNcbiAgICBpZiAoaXNPcHRpb24pIHJvb3QuYXBwZW5kQ2hpbGQoZnJhZylcbiAgICBlbHNlIHJvb3QuaW5zZXJ0QmVmb3JlKGZyYWcsIHJlZilcblxuICAgIC8vIHNldCB0aGUgJ3RhZ3MnIHByb3BlcnR5IG9mIHRoZSBwYXJlbnQgdGFnXG4gICAgLy8gaWYgY2hpbGQgaXMgJ3VuZGVmaW5lZCcgaXQgbWVhbnMgdGhhdCB3ZSBkb24ndCBuZWVkIHRvIHNldCB0aGlzIHByb3BlcnR5XG4gICAgLy8gZm9yIGV4YW1wbGU6XG4gICAgLy8gd2UgZG9uJ3QgbmVlZCBzdG9yZSB0aGUgYG15VGFnLnRhZ3NbJ2RpdiddYCBwcm9wZXJ0eSBpZiB3ZSBhcmUgbG9vcGluZyBhIGRpdiB0YWdcbiAgICAvLyBidXQgd2UgbmVlZCB0byB0cmFjayB0aGUgYG15VGFnLnRhZ3NbJ2NoaWxkJ11gIHByb3BlcnR5IGxvb3BpbmcgYSBjdXN0b20gY2hpbGQgbm9kZSBuYW1lZCBgY2hpbGRgXG4gICAgaWYgKGNoaWxkKSBwYXJlbnQudGFnc1t0YWdOYW1lXSA9IHRhZ3NcblxuICAgIC8vIGNsb25lIHRoZSBpdGVtcyBhcnJheVxuICAgIG9sZEl0ZW1zID0gaXRlbXMuc2xpY2UoKVxuXG4gIH0pXG5cbn1cblxuXG5mdW5jdGlvbiBwYXJzZU5hbWVkRWxlbWVudHMocm9vdCwgdGFnLCBjaGlsZFRhZ3MsIGZvcmNlUGFyc2luZ05hbWVkKSB7XG5cbiAgd2Fsayhyb290LCBmdW5jdGlvbihkb20pIHtcbiAgICBpZiAoZG9tLm5vZGVUeXBlID09IDEpIHtcbiAgICAgIGRvbS5pc0xvb3AgPSBkb20uaXNMb29wIHx8IChkb20ucGFyZW50Tm9kZSAmJiBkb20ucGFyZW50Tm9kZS5pc0xvb3AgfHwgZ2V0QXR0cihkb20sICdlYWNoJykpID8gMSA6IDBcblxuICAgICAgLy8gY3VzdG9tIGNoaWxkIHRhZ1xuICAgICAgaWYgKGNoaWxkVGFncykge1xuICAgICAgICB2YXIgY2hpbGQgPSBnZXRUYWcoZG9tKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiAhZG9tLmlzTG9vcClcbiAgICAgICAgICBjaGlsZFRhZ3MucHVzaChpbml0Q2hpbGRUYWcoY2hpbGQsIHtyb290OiBkb20sIHBhcmVudDogdGFnfSwgZG9tLmlubmVySFRNTCwgdGFnKSlcbiAgICAgIH1cblxuICAgICAgaWYgKCFkb20uaXNMb29wIHx8IGZvcmNlUGFyc2luZ05hbWVkKVxuICAgICAgICBzZXROYW1lZChkb20sIHRhZywgW10pXG4gICAgfVxuXG4gIH0pXG5cbn1cblxuZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9ucyhyb290LCB0YWcsIGV4cHJlc3Npb25zKSB7XG5cbiAgZnVuY3Rpb24gYWRkRXhwcihkb20sIHZhbCwgZXh0cmEpIHtcbiAgICBpZiAodG1wbC5oYXNFeHByKHZhbCkpIHtcbiAgICAgIHZhciBleHByID0geyBkb206IGRvbSwgZXhwcjogdmFsIH1cbiAgICAgIGV4cHJlc3Npb25zLnB1c2goZXh0ZW5kKGV4cHIsIGV4dHJhKSlcbiAgICB9XG4gIH1cblxuICB3YWxrKHJvb3QsIGZ1bmN0aW9uKGRvbSkge1xuICAgIHZhciB0eXBlID0gZG9tLm5vZGVUeXBlXG5cbiAgICAvLyB0ZXh0IG5vZGVcbiAgICBpZiAodHlwZSA9PSAzICYmIGRvbS5wYXJlbnROb2RlLnRhZ05hbWUgIT0gJ1NUWUxFJykgYWRkRXhwcihkb20sIGRvbS5ub2RlVmFsdWUpXG4gICAgaWYgKHR5cGUgIT0gMSkgcmV0dXJuXG5cbiAgICAvKiBlbGVtZW50ICovXG5cbiAgICAvLyBsb29wXG4gICAgdmFyIGF0dHIgPSBnZXRBdHRyKGRvbSwgJ2VhY2gnKVxuXG4gICAgaWYgKGF0dHIpIHsgX2VhY2goZG9tLCB0YWcsIGF0dHIpOyByZXR1cm4gZmFsc2UgfVxuXG4gICAgLy8gYXR0cmlidXRlIGV4cHJlc3Npb25zXG4gICAgZWFjaChkb20uYXR0cmlidXRlcywgZnVuY3Rpb24oYXR0cikge1xuICAgICAgdmFyIG5hbWUgPSBhdHRyLm5hbWUsXG4gICAgICAgIGJvb2wgPSBuYW1lLnNwbGl0KCdfXycpWzFdXG5cbiAgICAgIGFkZEV4cHIoZG9tLCBhdHRyLnZhbHVlLCB7IGF0dHI6IGJvb2wgfHwgbmFtZSwgYm9vbDogYm9vbCB9KVxuICAgICAgaWYgKGJvb2wpIHsgcmVtQXR0cihkb20sIG5hbWUpOyByZXR1cm4gZmFsc2UgfVxuXG4gICAgfSlcblxuICAgIC8vIHNraXAgY3VzdG9tIHRhZ3NcbiAgICBpZiAoZ2V0VGFnKGRvbSkpIHJldHVybiBmYWxzZVxuXG4gIH0pXG5cbn1cbmZ1bmN0aW9uIFRhZyhpbXBsLCBjb25mLCBpbm5lckhUTUwpIHtcblxuICB2YXIgc2VsZiA9IHJpb3Qub2JzZXJ2YWJsZSh0aGlzKSxcbiAgICBvcHRzID0gaW5oZXJpdChjb25mLm9wdHMpIHx8IHt9LFxuICAgIGRvbSA9IG1rZG9tKGltcGwudG1wbCksXG4gICAgcGFyZW50ID0gY29uZi5wYXJlbnQsXG4gICAgaXNMb29wID0gY29uZi5pc0xvb3AsXG4gICAgaGFzSW1wbCA9IGNvbmYuaGFzSW1wbCxcbiAgICBpdGVtID0gY2xlYW5VcERhdGEoY29uZi5pdGVtKSxcbiAgICBleHByZXNzaW9ucyA9IFtdLFxuICAgIGNoaWxkVGFncyA9IFtdLFxuICAgIHJvb3QgPSBjb25mLnJvb3QsXG4gICAgZm4gPSBpbXBsLmZuLFxuICAgIHRhZ05hbWUgPSByb290LnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcbiAgICBhdHRyID0ge30sXG4gICAgcHJvcHNJblN5bmNXaXRoUGFyZW50ID0gW11cblxuICBpZiAoZm4gJiYgcm9vdC5fdGFnKSByb290Ll90YWcudW5tb3VudCh0cnVlKVxuXG4gIC8vIG5vdCB5ZXQgbW91bnRlZFxuICB0aGlzLmlzTW91bnRlZCA9IGZhbHNlXG4gIHJvb3QuaXNMb29wID0gaXNMb29wXG5cbiAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgdGFnIGp1c3QgY3JlYXRlZFxuICAvLyBzbyB3ZSB3aWxsIGJlIGFibGUgdG8gbW91bnQgdGhpcyB0YWcgbXVsdGlwbGUgdGltZXNcbiAgcm9vdC5fdGFnID0gdGhpc1xuXG4gIC8vIGNyZWF0ZSBhIHVuaXF1ZSBpZCB0byB0aGlzIHRhZ1xuICAvLyBpdCBjb3VsZCBiZSBoYW5keSB0byB1c2UgaXQgYWxzbyB0byBpbXByb3ZlIHRoZSB2aXJ0dWFsIGRvbSByZW5kZXJpbmcgc3BlZWRcbiAgZGVmaW5lUHJvcGVydHkodGhpcywgJ19yaW90X2lkJywgKytfX3VpZCkgLy8gYmFzZSAxIGFsbG93cyB0ZXN0ICF0Ll9yaW90X2lkXG5cbiAgZXh0ZW5kKHRoaXMsIHsgcGFyZW50OiBwYXJlbnQsIHJvb3Q6IHJvb3QsIG9wdHM6IG9wdHMsIHRhZ3M6IHt9IH0sIGl0ZW0pXG5cbiAgLy8gZ3JhYiBhdHRyaWJ1dGVzXG4gIGVhY2gocm9vdC5hdHRyaWJ1dGVzLCBmdW5jdGlvbihlbCkge1xuICAgIHZhciB2YWwgPSBlbC52YWx1ZVxuICAgIC8vIHJlbWVtYmVyIGF0dHJpYnV0ZXMgd2l0aCBleHByZXNzaW9ucyBvbmx5XG4gICAgaWYgKHRtcGwuaGFzRXhwcih2YWwpKSBhdHRyW2VsLm5hbWVdID0gdmFsXG4gIH0pXG5cbiAgaWYgKGRvbS5pbm5lckhUTUwgJiYgIS9eKHNlbGVjdHxvcHRncm91cHx0YWJsZXx0Ym9keXx0cnxjb2woPzpncm91cCk/KSQvLnRlc3QodGFnTmFtZSkpXG4gICAgLy8gcmVwbGFjZSBhbGwgdGhlIHlpZWxkIHRhZ3Mgd2l0aCB0aGUgdGFnIGlubmVyIGh0bWxcbiAgICBkb20uaW5uZXJIVE1MID0gcmVwbGFjZVlpZWxkKGRvbS5pbm5lckhUTUwsIGlubmVySFRNTClcblxuICAvLyBvcHRpb25zXG4gIGZ1bmN0aW9uIHVwZGF0ZU9wdHMoKSB7XG4gICAgdmFyIGN0eCA9IGhhc0ltcGwgJiYgaXNMb29wID8gc2VsZiA6IHBhcmVudCB8fCBzZWxmXG5cbiAgICAvLyB1cGRhdGUgb3B0cyBmcm9tIGN1cnJlbnQgRE9NIGF0dHJpYnV0ZXNcbiAgICBlYWNoKHJvb3QuYXR0cmlidXRlcywgZnVuY3Rpb24oZWwpIHtcbiAgICAgIG9wdHNbdG9DYW1lbChlbC5uYW1lKV0gPSB0bXBsKGVsLnZhbHVlLCBjdHgpXG4gICAgfSlcbiAgICAvLyByZWNvdmVyIHRob3NlIHdpdGggZXhwcmVzc2lvbnNcbiAgICBlYWNoKE9iamVjdC5rZXlzKGF0dHIpLCBmdW5jdGlvbihuYW1lKSB7XG4gICAgICBvcHRzW3RvQ2FtZWwobmFtZSldID0gdG1wbChhdHRyW25hbWVdLCBjdHgpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEoZGF0YSkge1xuICAgIGZvciAodmFyIGtleSBpbiBpdGVtKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGZba2V5XSAhPT0gVF9VTkRFRiAmJiBpc1dyaXRhYmxlKHNlbGYsIGtleSkpXG4gICAgICAgIHNlbGZba2V5XSA9IGRhdGFba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaGVyaXRGcm9tUGFyZW50ICgpIHtcbiAgICBpZiAoIXNlbGYucGFyZW50IHx8ICFpc0xvb3ApIHJldHVyblxuICAgIGVhY2goT2JqZWN0LmtleXMoc2VsZi5wYXJlbnQpLCBmdW5jdGlvbihrKSB7XG4gICAgICAvLyBzb21lIHByb3BlcnRpZXMgbXVzdCBiZSBhbHdheXMgaW4gc3luYyB3aXRoIHRoZSBwYXJlbnQgdGFnXG4gICAgICB2YXIgbXVzdFN5bmMgPSAhY29udGFpbnMoUkVTRVJWRURfV09SRFNfQkxBQ0tMSVNULCBrKSAmJiBjb250YWlucyhwcm9wc0luU3luY1dpdGhQYXJlbnQsIGspXG4gICAgICBpZiAodHlwZW9mIHNlbGZba10gPT09IFRfVU5ERUYgfHwgbXVzdFN5bmMpIHtcbiAgICAgICAgLy8gdHJhY2sgdGhlIHByb3BlcnR5IHRvIGtlZXAgaW4gc3luY1xuICAgICAgICAvLyBzbyB3ZSBjYW4ga2VlcCBpdCB1cGRhdGVkXG4gICAgICAgIGlmICghbXVzdFN5bmMpIHByb3BzSW5TeW5jV2l0aFBhcmVudC5wdXNoKGspXG4gICAgICAgIHNlbGZba10gPSBzZWxmLnBhcmVudFtrXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAndXBkYXRlJywgZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgLy8gbWFrZSBzdXJlIHRoZSBkYXRhIHBhc3NlZCB3aWxsIG5vdCBvdmVycmlkZVxuICAgIC8vIHRoZSBjb21wb25lbnQgY29yZSBtZXRob2RzXG4gICAgZGF0YSA9IGNsZWFuVXBEYXRhKGRhdGEpXG4gICAgLy8gaW5oZXJpdCBwcm9wZXJ0aWVzIGZyb20gdGhlIHBhcmVudFxuICAgIGluaGVyaXRGcm9tUGFyZW50KClcbiAgICAvLyBub3JtYWxpemUgdGhlIHRhZyBwcm9wZXJ0aWVzIGluIGNhc2UgYW4gaXRlbSBvYmplY3Qgd2FzIGluaXRpYWxseSBwYXNzZWRcbiAgICBpZiAoZGF0YSAmJiB0eXBlb2YgaXRlbSA9PT0gVF9PQkpFQ1QpIHtcbiAgICAgIG5vcm1hbGl6ZURhdGEoZGF0YSlcbiAgICAgIGl0ZW0gPSBkYXRhXG4gICAgfVxuICAgIGV4dGVuZChzZWxmLCBkYXRhKVxuICAgIHVwZGF0ZU9wdHMoKVxuICAgIHNlbGYudHJpZ2dlcigndXBkYXRlJywgZGF0YSlcbiAgICB1cGRhdGUoZXhwcmVzc2lvbnMsIHNlbGYpXG4gICAgLy8gdGhlIHVwZGF0ZWQgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWRcbiAgICAvLyBvbmNlIHRoZSBET00gd2lsbCBiZSByZWFkeSBhbmQgYWxsIHRoZSByZWZsb3cgYXJlIGNvbXBsZXRlZFxuICAgIC8vIHRoaXMgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHRvIGdldCB0aGUgXCJyZWFsXCIgcm9vdCBwcm9wZXJ0aWVzXG4gICAgLy8gNCBleDogcm9vdC5vZmZzZXRXaWR0aCAuLi5cbiAgICByQUYoZnVuY3Rpb24oKSB7IHNlbGYudHJpZ2dlcigndXBkYXRlZCcpIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfSlcblxuICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWl4aW4nLCBmdW5jdGlvbigpIHtcbiAgICBlYWNoKGFyZ3VtZW50cywgZnVuY3Rpb24obWl4KSB7XG4gICAgICB2YXIgaW5zdGFuY2VcblxuICAgICAgbWl4ID0gdHlwZW9mIG1peCA9PT0gVF9TVFJJTkcgPyByaW90Lm1peGluKG1peCkgOiBtaXhcblxuICAgICAgLy8gY2hlY2sgaWYgdGhlIG1peGluIGlzIGEgZnVuY3Rpb25cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG1peCkpIHtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBuZXcgbWl4aW4gaW5zdGFuY2VcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgbWl4KClcbiAgICAgICAgLy8gc2F2ZSB0aGUgcHJvdG90eXBlIHRvIGxvb3AgaXQgYWZ0ZXJ3YXJkc1xuICAgICAgICBtaXggPSBtaXgucHJvdG90eXBlXG4gICAgICB9IGVsc2UgaW5zdGFuY2UgPSBtaXhcblxuICAgICAgLy8gbG9vcCB0aGUga2V5cyBpbiB0aGUgZnVuY3Rpb24gcHJvdG90eXBlIG9yIHRoZSBhbGwgb2JqZWN0IGtleXNcbiAgICAgIGVhY2goT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobWl4KSwgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIC8vIGJpbmQgbWV0aG9kcyB0byBzZWxmXG4gICAgICAgIGlmIChrZXkgIT0gJ2luaXQnKVxuICAgICAgICAgIHNlbGZba2V5XSA9IGlzRnVuY3Rpb24oaW5zdGFuY2Vba2V5XSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2Vba2V5XS5iaW5kKHNlbGYpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW2tleV1cbiAgICAgIH0pXG5cbiAgICAgIC8vIGluaXQgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGF1dG9tYXRpY2FsbHlcbiAgICAgIGlmIChpbnN0YW5jZS5pbml0KSBpbnN0YW5jZS5pbml0LmJpbmQoc2VsZikoKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfSlcblxuICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbW91bnQnLCBmdW5jdGlvbigpIHtcblxuICAgIHVwZGF0ZU9wdHMoKVxuXG4gICAgLy8gaW5pdGlhbGlhdGlvblxuICAgIGlmIChmbikgZm4uY2FsbChzZWxmLCBvcHRzKVxuXG4gICAgLy8gcGFyc2UgbGF5b3V0IGFmdGVyIGluaXQuIGZuIG1heSBjYWxjdWxhdGUgYXJncyBmb3IgbmVzdGVkIGN1c3RvbSB0YWdzXG4gICAgcGFyc2VFeHByZXNzaW9ucyhkb20sIHNlbGYsIGV4cHJlc3Npb25zKVxuXG4gICAgLy8gbW91bnQgdGhlIGNoaWxkIHRhZ3NcbiAgICB0b2dnbGUodHJ1ZSlcblxuICAgIC8vIHVwZGF0ZSB0aGUgcm9vdCBhZGRpbmcgY3VzdG9tIGF0dHJpYnV0ZXMgY29taW5nIGZyb20gdGhlIGNvbXBpbGVyXG4gICAgLy8gaXQgZml4ZXMgYWxzbyAjMTA4N1xuICAgIGlmIChpbXBsLmF0dHJzIHx8IGhhc0ltcGwpIHtcbiAgICAgIHdhbGtBdHRyaWJ1dGVzKGltcGwuYXR0cnMsIGZ1bmN0aW9uIChrLCB2KSB7IHNldEF0dHIocm9vdCwgaywgdikgfSlcbiAgICAgIHBhcnNlRXhwcmVzc2lvbnMoc2VsZi5yb290LCBzZWxmLCBleHByZXNzaW9ucylcbiAgICB9XG5cbiAgICBpZiAoIXNlbGYucGFyZW50IHx8IGlzTG9vcCkgc2VsZi51cGRhdGUoaXRlbSlcblxuICAgIC8vIGludGVybmFsIHVzZSBvbmx5LCBmaXhlcyAjNDAzXG4gICAgc2VsZi50cmlnZ2VyKCdiZWZvcmUtbW91bnQnKVxuXG4gICAgaWYgKGlzTG9vcCAmJiAhaGFzSW1wbCkge1xuICAgICAgLy8gdXBkYXRlIHRoZSByb290IGF0dHJpYnV0ZSBmb3IgdGhlIGxvb3BlZCBlbGVtZW50c1xuICAgICAgc2VsZi5yb290ID0gcm9vdCA9IGRvbS5maXJzdENoaWxkXG5cbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKGRvbS5maXJzdENoaWxkKSByb290LmFwcGVuZENoaWxkKGRvbS5maXJzdENoaWxkKVxuICAgICAgaWYgKHJvb3Quc3R1Yikgc2VsZi5yb290ID0gcm9vdCA9IHBhcmVudC5yb290XG4gICAgfVxuXG4gICAgLy8gcGFyc2UgdGhlIG5hbWVkIGRvbSBub2RlcyBpbiB0aGUgbG9vcGVkIGNoaWxkXG4gICAgLy8gYWRkaW5nIHRoZW0gdG8gdGhlIHBhcmVudCBhcyB3ZWxsXG4gICAgaWYgKGlzTG9vcClcbiAgICAgIHBhcnNlTmFtZWRFbGVtZW50cyhzZWxmLnJvb3QsIHNlbGYucGFyZW50LCBudWxsLCB0cnVlKVxuXG4gICAgLy8gaWYgaXQncyBub3QgYSBjaGlsZCB0YWcgd2UgY2FuIHRyaWdnZXIgaXRzIG1vdW50IGV2ZW50XG4gICAgaWYgKCFzZWxmLnBhcmVudCB8fCBzZWxmLnBhcmVudC5pc01vdW50ZWQpIHtcbiAgICAgIHNlbGYuaXNNb3VudGVkID0gdHJ1ZVxuICAgICAgc2VsZi50cmlnZ2VyKCdtb3VudCcpXG4gICAgfVxuICAgIC8vIG90aGVyd2lzZSB3ZSBuZWVkIHRvIHdhaXQgdGhhdCB0aGUgcGFyZW50IGV2ZW50IGdldHMgdHJpZ2dlcmVkXG4gICAgZWxzZSBzZWxmLnBhcmVudC5vbmUoJ21vdW50JywgZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCB0byB0cmlnZ2VyIHRoZSBgbW91bnRgIGV2ZW50IGZvciB0aGUgdGFnc1xuICAgICAgLy8gbm90IHZpc2libGUgaW5jbHVkZWQgaW4gYW4gaWYgc3RhdGVtZW50XG4gICAgICBpZiAoIWlzSW5TdHViKHNlbGYucm9vdCkpIHtcbiAgICAgICAgc2VsZi5wYXJlbnQuaXNNb3VudGVkID0gc2VsZi5pc01vdW50ZWQgPSB0cnVlXG4gICAgICAgIHNlbGYudHJpZ2dlcignbW91bnQnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cblxuICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAndW5tb3VudCcsIGZ1bmN0aW9uKGtlZXBSb290VGFnKSB7XG4gICAgdmFyIGVsID0gcm9vdCxcbiAgICAgIHAgPSBlbC5wYXJlbnROb2RlLFxuICAgICAgcHRhZ1xuXG4gICAgc2VsZi50cmlnZ2VyKCdiZWZvcmUtdW5tb3VudCcpXG5cbiAgICAvLyByZW1vdmUgdGhpcyB0YWcgaW5zdGFuY2UgZnJvbSB0aGUgZ2xvYmFsIHZpcnR1YWxEb20gdmFyaWFibGVcbiAgICBfX3ZpcnR1YWxEb20uc3BsaWNlKF9fdmlydHVhbERvbS5pbmRleE9mKHNlbGYpLCAxKVxuXG4gICAgaWYgKHRoaXMuX3ZpcnRzKSB7XG4gICAgICBlYWNoKHRoaXMuX3ZpcnRzLCBmdW5jdGlvbih2KSB7XG4gICAgICAgIHYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocCkge1xuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHB0YWcgPSBnZXRJbW1lZGlhdGVDdXN0b21QYXJlbnRUYWcocGFyZW50KVxuICAgICAgICAvLyByZW1vdmUgdGhpcyB0YWcgZnJvbSB0aGUgcGFyZW50IHRhZ3Mgb2JqZWN0XG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBuZXN0ZWQgdGFncyB3aXRoIHNhbWUgbmFtZS4uXG4gICAgICAgIC8vIHJlbW92ZSB0aGlzIGVsZW1lbnQgZm9ybSB0aGUgYXJyYXlcbiAgICAgICAgaWYgKGlzQXJyYXkocHRhZy50YWdzW3RhZ05hbWVdKSlcbiAgICAgICAgICBlYWNoKHB0YWcudGFnc1t0YWdOYW1lXSwgZnVuY3Rpb24odGFnLCBpKSB7XG4gICAgICAgICAgICBpZiAodGFnLl9yaW90X2lkID09IHNlbGYuX3Jpb3RfaWQpXG4gICAgICAgICAgICAgIHB0YWcudGFnc1t0YWdOYW1lXS5zcGxpY2UoaSwgMSlcbiAgICAgICAgICB9KVxuICAgICAgICBlbHNlXG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIGp1c3QgZGVsZXRlIHRoZSB0YWcgaW5zdGFuY2VcbiAgICAgICAgICBwdGFnLnRhZ3NbdGFnTmFtZV0gPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgZWxzZVxuICAgICAgICB3aGlsZSAoZWwuZmlyc3RDaGlsZCkgZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZClcblxuICAgICAgaWYgKCFrZWVwUm9vdFRhZylcbiAgICAgICAgcC5yZW1vdmVDaGlsZChlbClcbiAgICAgIGVsc2VcbiAgICAgICAgLy8gdGhlIHJpb3QtdGFnIGF0dHJpYnV0ZSBpc24ndCBuZWVkZWQgYW55bW9yZSwgcmVtb3ZlIGl0XG4gICAgICAgIHJlbUF0dHIocCwgJ3Jpb3QtdGFnJylcbiAgICB9XG5cblxuICAgIHNlbGYudHJpZ2dlcigndW5tb3VudCcpXG4gICAgdG9nZ2xlKClcbiAgICBzZWxmLm9mZignKicpXG4gICAgc2VsZi5pc01vdW50ZWQgPSBmYWxzZVxuICAgIC8vIHNvbWVob3cgaWU4IGRvZXMgbm90IGxpa2UgYGRlbGV0ZSByb290Ll90YWdgXG4gICAgcm9vdC5fdGFnID0gbnVsbFxuXG4gIH0pXG5cbiAgZnVuY3Rpb24gdG9nZ2xlKGlzTW91bnQpIHtcblxuICAgIC8vIG1vdW50L3VubW91bnQgY2hpbGRyZW5cbiAgICBlYWNoKGNoaWxkVGFncywgZnVuY3Rpb24oY2hpbGQpIHsgY2hpbGRbaXNNb3VudCA/ICdtb3VudCcgOiAndW5tb3VudCddKCkgfSlcblxuICAgIC8vIGxpc3Rlbi91bmxpc3RlbiBwYXJlbnQgKGV2ZW50cyBmbG93IG9uZSB3YXkgZnJvbSBwYXJlbnQgdG8gY2hpbGRyZW4pXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgdmFyIGV2dCA9IGlzTW91bnQgPyAnb24nIDogJ29mZidcblxuICAgICAgLy8gdGhlIGxvb3AgdGFncyB3aWxsIGJlIGFsd2F5cyBpbiBzeW5jIHdpdGggdGhlIHBhcmVudCBhdXRvbWF0aWNhbGx5XG4gICAgICBpZiAoaXNMb29wKVxuICAgICAgICBwYXJlbnRbZXZ0XSgndW5tb3VudCcsIHNlbGYudW5tb3VudClcbiAgICAgIGVsc2VcbiAgICAgICAgcGFyZW50W2V2dF0oJ3VwZGF0ZScsIHNlbGYudXBkYXRlKVtldnRdKCd1bm1vdW50Jywgc2VsZi51bm1vdW50KVxuICAgIH1cbiAgfVxuXG4gIC8vIG5hbWVkIGVsZW1lbnRzIGF2YWlsYWJsZSBmb3IgZm5cbiAgcGFyc2VOYW1lZEVsZW1lbnRzKGRvbSwgdGhpcywgY2hpbGRUYWdzKVxuXG59XG4vKipcbiAqIEF0dGFjaCBhbiBldmVudCB0byBhIERPTSBub2RlXG4gKiBAcGFyYW0geyBTdHJpbmcgfSBuYW1lIC0gZXZlbnQgbmFtZVxuICogQHBhcmFtIHsgRnVuY3Rpb24gfSBoYW5kbGVyIC0gZXZlbnQgY2FsbGJhY2tcbiAqIEBwYXJhbSB7IE9iamVjdCB9IGRvbSAtIGRvbSBub2RlXG4gKiBAcGFyYW0geyBUYWcgfSB0YWcgLSB0YWcgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gc2V0RXZlbnRIYW5kbGVyKG5hbWUsIGhhbmRsZXIsIGRvbSwgdGFnKSB7XG5cbiAgZG9tW25hbWVdID0gZnVuY3Rpb24oZSkge1xuXG4gICAgdmFyIHB0YWcgPSB0YWcuX3BhcmVudCxcbiAgICAgIGl0ZW0gPSB0YWcuX2l0ZW0sXG4gICAgICBlbFxuXG4gICAgaWYgKCFpdGVtKVxuICAgICAgd2hpbGUgKHB0YWcgJiYgIWl0ZW0pIHtcbiAgICAgICAgaXRlbSA9IHB0YWcuX2l0ZW1cbiAgICAgICAgcHRhZyA9IHB0YWcuX3BhcmVudFxuICAgICAgfVxuXG4gICAgLy8gY3Jvc3MgYnJvd3NlciBldmVudCBmaXhcbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnRcblxuICAgIC8vIG92ZXJyaWRlIHRoZSBldmVudCBwcm9wZXJ0aWVzXG4gICAgaWYgKGlzV3JpdGFibGUoZSwgJ2N1cnJlbnRUYXJnZXQnKSkgZS5jdXJyZW50VGFyZ2V0ID0gZG9tXG4gICAgaWYgKGlzV3JpdGFibGUoZSwgJ3RhcmdldCcpKSBlLnRhcmdldCA9IGUuc3JjRWxlbWVudFxuICAgIGlmIChpc1dyaXRhYmxlKGUsICd3aGljaCcpKSBlLndoaWNoID0gZS5jaGFyQ29kZSB8fCBlLmtleUNvZGVcblxuICAgIGUuaXRlbSA9IGl0ZW1cblxuICAgIC8vIHByZXZlbnQgZGVmYXVsdCBiZWhhdmlvdXIgKGJ5IGRlZmF1bHQpXG4gICAgaWYgKGhhbmRsZXIuY2FsbCh0YWcsIGUpICE9PSB0cnVlICYmICEvcmFkaW98Y2hlY2svLnRlc3QoZG9tLnR5cGUpKSB7XG4gICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBlLnJldHVyblZhbHVlID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIWUucHJldmVudFVwZGF0ZSkge1xuICAgICAgZWwgPSBpdGVtID8gZ2V0SW1tZWRpYXRlQ3VzdG9tUGFyZW50VGFnKHB0YWcpIDogdGFnXG4gICAgICBlbC51cGRhdGUoKVxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vKipcbiAqIEluc2VydCBhIERPTSBub2RlIHJlcGxhY2luZyBhbm90aGVyIG9uZSAodXNlZCBieSBpZi0gYXR0cmlidXRlKVxuICogQHBhcmFtICAgeyBPYmplY3QgfSByb290IC0gcGFyZW50IG5vZGVcbiAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gbm9kZSAtIG5vZGUgcmVwbGFjZWRcbiAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gYmVmb3JlIC0gbm9kZSBhZGRlZFxuICovXG5mdW5jdGlvbiBpbnNlcnRUbyhyb290LCBub2RlLCBiZWZvcmUpIHtcbiAgaWYgKHJvb3QpIHtcbiAgICByb290Lmluc2VydEJlZm9yZShiZWZvcmUsIG5vZGUpXG4gICAgcm9vdC5yZW1vdmVDaGlsZChub2RlKVxuICB9XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBleHByZXNzaW9ucyBpbiBhIFRhZyBpbnN0YW5jZVxuICogQHBhcmFtICAgeyBBcnJheSB9IGV4cHJlc3Npb25zIC0gZXhwcmVzc2lvbiB0aGF0IG11c3QgYmUgcmUgZXZhbHVhdGVkXG4gKiBAcGFyYW0gICB7IFRhZyB9IHRhZyAtIHRhZyBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiB1cGRhdGUoZXhwcmVzc2lvbnMsIHRhZykge1xuXG4gIGVhY2goZXhwcmVzc2lvbnMsIGZ1bmN0aW9uKGV4cHIsIGkpIHtcblxuICAgIHZhciBkb20gPSBleHByLmRvbSxcbiAgICAgIGF0dHJOYW1lID0gZXhwci5hdHRyLFxuICAgICAgdmFsdWUgPSB0bXBsKGV4cHIuZXhwciwgdGFnKSxcbiAgICAgIHBhcmVudCA9IGV4cHIuZG9tLnBhcmVudE5vZGVcblxuICAgIGlmIChleHByLmJvb2wpXG4gICAgICB2YWx1ZSA9IHZhbHVlID8gYXR0ck5hbWUgOiBmYWxzZVxuICAgIGVsc2UgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICB2YWx1ZSA9ICcnXG5cbiAgICAvLyBsZWF2ZSBvdXQgcmlvdC0gcHJlZml4ZXMgZnJvbSBzdHJpbmdzIGluc2lkZSB0ZXh0YXJlYVxuICAgIC8vIGZpeCAjODE1OiBhbnkgdmFsdWUgLT4gc3RyaW5nXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQudGFnTmFtZSA9PSAnVEVYVEFSRUEnKSB7XG4gICAgICB2YWx1ZSA9ICgnJyArIHZhbHVlKS5yZXBsYWNlKC9yaW90LS9nLCAnJylcbiAgICAgIC8vIGNoYW5nZSB0ZXh0YXJlYSdzIHZhbHVlXG4gICAgICBwYXJlbnQudmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIC8vIG5vIGNoYW5nZVxuICAgIGlmIChleHByLnZhbHVlID09PSB2YWx1ZSkgcmV0dXJuXG4gICAgZXhwci52YWx1ZSA9IHZhbHVlXG5cbiAgICAvLyB0ZXh0IG5vZGVcbiAgICBpZiAoIWF0dHJOYW1lKSB7XG4gICAgICBkb20ubm9kZVZhbHVlID0gJycgKyB2YWx1ZSAgICAvLyAjODE1IHJlbGF0ZWRcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHJlbW92ZSBvcmlnaW5hbCBhdHRyaWJ1dGVcbiAgICByZW1BdHRyKGRvbSwgYXR0ck5hbWUpXG4gICAgLy8gZXZlbnQgaGFuZGxlclxuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgc2V0RXZlbnRIYW5kbGVyKGF0dHJOYW1lLCB2YWx1ZSwgZG9tLCB0YWcpXG5cbiAgICAvLyBpZi0gY29uZGl0aW9uYWxcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09ICdpZicpIHtcbiAgICAgIHZhciBzdHViID0gZXhwci5zdHViLFxuICAgICAgICBhZGQgPSBmdW5jdGlvbigpIHsgaW5zZXJ0VG8oc3R1Yi5wYXJlbnROb2RlLCBzdHViLCBkb20pIH0sXG4gICAgICAgIHJlbW92ZSA9IGZ1bmN0aW9uKCkgeyBpbnNlcnRUbyhkb20ucGFyZW50Tm9kZSwgZG9tLCBzdHViKSB9XG5cbiAgICAgIC8vIGFkZCB0byBET01cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBpZiAoc3R1Yikge1xuICAgICAgICAgIGFkZCgpXG4gICAgICAgICAgZG9tLmluU3R1YiA9IGZhbHNlXG4gICAgICAgICAgLy8gYXZvaWQgdG8gdHJpZ2dlciB0aGUgbW91bnQgZXZlbnQgaWYgdGhlIHRhZ3MgaXMgbm90IHZpc2libGUgeWV0XG4gICAgICAgICAgLy8gbWF5YmUgd2UgY2FuIG9wdGltaXplIHRoaXMgYXZvaWRpbmcgdG8gbW91bnQgdGhlIHRhZyBhdCBhbGxcbiAgICAgICAgICBpZiAoIWlzSW5TdHViKGRvbSkpIHtcbiAgICAgICAgICAgIHdhbGsoZG9tLCBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICBpZiAoZWwuX3RhZyAmJiAhZWwuX3RhZy5pc01vdW50ZWQpIGVsLl90YWcuaXNNb3VudGVkID0gISFlbC5fdGFnLnRyaWdnZXIoJ21vdW50JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAvLyByZW1vdmUgZnJvbSBET01cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0dWIgPSBleHByLnN0dWIgPSBzdHViIHx8IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKVxuICAgICAgICAvLyBpZiB0aGUgcGFyZW50Tm9kZSBpcyBkZWZpbmVkIHdlIGNhbiBlYXNpbHkgcmVwbGFjZSB0aGUgdGFnXG4gICAgICAgIGlmIChkb20ucGFyZW50Tm9kZSlcbiAgICAgICAgICByZW1vdmUoKVxuICAgICAgICAvLyBvdGhlcndpc2Ugd2UgbmVlZCB0byB3YWl0IHRoZSB1cGRhdGVkIGV2ZW50XG4gICAgICAgIGVsc2UgKHRhZy5wYXJlbnQgfHwgdGFnKS5vbmUoJ3VwZGF0ZWQnLCByZW1vdmUpXG5cbiAgICAgICAgZG9tLmluU3R1YiA9IHRydWVcbiAgICAgIH1cbiAgICAvLyBzaG93IC8gaGlkZVxuICAgIH0gZWxzZSBpZiAoL14oc2hvd3xoaWRlKSQvLnRlc3QoYXR0ck5hbWUpKSB7XG4gICAgICBpZiAoYXR0ck5hbWUgPT0gJ2hpZGUnKSB2YWx1ZSA9ICF2YWx1ZVxuICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/ICcnIDogJ25vbmUnXG5cbiAgICAvLyBmaWVsZCB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT0gJ3ZhbHVlJykge1xuICAgICAgZG9tLnZhbHVlID0gdmFsdWVcblxuICAgIC8vIDxpbWcgc3JjPVwieyBleHByIH1cIj5cbiAgICB9IGVsc2UgaWYgKHN0YXJ0c1dpdGgoYXR0ck5hbWUsIFJJT1RfUFJFRklYKSAmJiBhdHRyTmFtZSAhPSBSSU9UX1RBRykge1xuICAgICAgaWYgKHZhbHVlKVxuICAgICAgICBzZXRBdHRyKGRvbSwgYXR0ck5hbWUuc2xpY2UoUklPVF9QUkVGSVgubGVuZ3RoKSwgdmFsdWUpXG5cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV4cHIuYm9vbCkge1xuICAgICAgICBkb21bYXR0ck5hbWVdID0gdmFsdWVcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPSAwICYmIHR5cGVvZiB2YWx1ZSAhPT0gVF9PQkpFQ1QpXG4gICAgICAgIHNldEF0dHIoZG9tLCBhdHRyTmFtZSwgdmFsdWUpXG5cbiAgICB9XG5cbiAgfSlcblxufVxuLyoqXG4gKiBMb29wcyBhbiBhcnJheVxuICogQHBhcmFtICAgeyBBcnJheSB9IGVscyAtIGNvbGxlY3Rpb24gb2YgaXRlbXNcbiAqIEBwYXJhbSAgIHtGdW5jdGlvbn0gZm4gLSBjYWxsYmFjayBmdW5jdGlvblxuICogQHJldHVybnMgeyBBcnJheSB9IHRoZSBhcnJheSBsb29wZWRcbiAqL1xuZnVuY3Rpb24gZWFjaChlbHMsIGZuKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSAoZWxzIHx8IFtdKS5sZW5ndGgsIGVsOyBpIDwgbGVuOyBpKyspIHtcbiAgICBlbCA9IGVsc1tpXVxuICAgIC8vIHJldHVybiBmYWxzZSAtPiByZW1vdmUgY3VycmVudCBpdGVtIGR1cmluZyBsb29wXG4gICAgaWYgKGVsICE9IG51bGwgJiYgZm4oZWwsIGkpID09PSBmYWxzZSkgaS0tXG4gIH1cbiAgcmV0dXJuIGVsc1xufVxuXG4vKipcbiAqIERldGVjdCBpZiB0aGUgYXJndW1lbnQgcGFzc2VkIGlzIGEgZnVuY3Rpb25cbiAqIEBwYXJhbSAgIHsgKiB9IHYgLSB3aGF0ZXZlciB5b3Ugd2FudCB0byBwYXNzIHRvIHRoaXMgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHsgQm9vbGVhbiB9IC1cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2KSB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gVF9GVU5DVElPTiB8fCBmYWxzZSAgIC8vIGF2b2lkIElFIHByb2JsZW1zXG59XG5cbi8qKlxuICogUmVtb3ZlIGFueSBET00gYXR0cmlidXRlIGZyb20gYSBub2RlXG4gKiBAcGFyYW0gICB7IE9iamVjdCB9IGRvbSAtIERPTSBub2RlIHdlIHdhbnQgdG8gdXBkYXRlXG4gKiBAcGFyYW0gICB7IFN0cmluZyB9IG5hbWUgLSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB3ZSB3YW50IHRvIHJlbW92ZVxuICovXG5mdW5jdGlvbiByZW1BdHRyKGRvbSwgbmFtZSkge1xuICBkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG59XG5cbi8qKlxuICogQ29udmVydCBhIHN0cmluZyBjb250YWluaW5nIGRhc2hlcyB0byBjYW1lbCBjYXNlXG4gKiBAcGFyYW0gICB7IFN0cmluZyB9IHN0cmluZyAtIGlucHV0IHN0cmluZ1xuICogQHJldHVybnMgeyBTdHJpbmcgfSBteS1zdHJpbmcgLT4gbXlTdHJpbmdcbiAqL1xuZnVuY3Rpb24gdG9DYW1lbChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8tKFxcdykvZywgZnVuY3Rpb24oXywgYykge1xuICAgIHJldHVybiBjLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIG9mIGFueSBET00gYXR0cmlidXRlIG9uIGEgbm9kZVxuICogQHBhcmFtICAgeyBPYmplY3QgfSBkb20gLSBET00gbm9kZSB3ZSB3YW50IHRvIHBhcnNlXG4gKiBAcGFyYW0gICB7IFN0cmluZyB9IG5hbWUgLSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2Ugd2FudCB0byBnZXRcbiAqIEByZXR1cm5zIHsgU3RyaW5nIHwgdW5kZWZpbmVkIH0gbmFtZSBvZiB0aGUgbm9kZSBhdHRyaWJ1dGUgd2hldGhlciBpdCBleGlzdHNcbiAqL1xuZnVuY3Rpb24gZ2V0QXR0cihkb20sIG5hbWUpIHtcbiAgcmV0dXJuIGRvbS5nZXRBdHRyaWJ1dGUobmFtZSlcbn1cblxuLyoqXG4gKiBTZXQgYW55IERPTSBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7IE9iamVjdCB9IGRvbSAtIERPTSBub2RlIHdlIHdhbnQgdG8gdXBkYXRlXG4gKiBAcGFyYW0geyBTdHJpbmcgfSBuYW1lIC0gbmFtZSBvZiB0aGUgcHJvcGVydHkgd2Ugd2FudCB0byBzZXRcbiAqIEBwYXJhbSB7IFN0cmluZyB9IHZhbCAtIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eSB3ZSB3YW50IHRvIHNldFxuICovXG5mdW5jdGlvbiBzZXRBdHRyKGRvbSwgbmFtZSwgdmFsKSB7XG4gIGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsKVxufVxuXG4vKipcbiAqIERldGVjdCB0aGUgdGFnIGltcGxlbWVudGF0aW9uIGJ5IGEgRE9NIG5vZGVcbiAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gZG9tIC0gRE9NIG5vZGUgd2UgbmVlZCB0byBwYXJzZSB0byBnZXQgaXRzIHRhZyBpbXBsZW1lbnRhdGlvblxuICogQHJldHVybnMgeyBPYmplY3QgfSBpdCByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiBhIGN1c3RvbSB0YWcgKHRlbXBsYXRlIGFuZCBib290IGZ1bmN0aW9uKVxuICovXG5mdW5jdGlvbiBnZXRUYWcoZG9tKSB7XG4gIHJldHVybiBkb20udGFnTmFtZSAmJiBfX3RhZ0ltcGxbZ2V0QXR0cihkb20sIFJJT1RfVEFHKSB8fCBkb20udGFnTmFtZS50b0xvd2VyQ2FzZSgpXVxufVxuLyoqXG4gKiBBZGQgYSBjaGlsZCB0YWcgdG8gaXRzIHBhcmVudCBpbnRvIHRoZSBgdGFnc2Agb2JqZWN0XG4gKiBAcGFyYW0gICB7IE9iamVjdCB9IHRhZyAtIGNoaWxkIHRhZyBpbnN0YW5jZVxuICogQHBhcmFtICAgeyBTdHJpbmcgfSB0YWdOYW1lIC0ga2V5IHdoZXJlIHRoZSBuZXcgdGFnIHdpbGwgYmUgc3RvcmVkXG4gKiBAcGFyYW0gICB7IE9iamVjdCB9IHBhcmVudCAtIHRhZyBpbnN0YW5jZSB3aGVyZSB0aGUgbmV3IGNoaWxkIHRhZyB3aWxsIGJlIGluY2x1ZGVkXG4gKi9cbmZ1bmN0aW9uIGFkZENoaWxkVGFnKHRhZywgdGFnTmFtZSwgcGFyZW50KSB7XG4gIHZhciBjYWNoZWRUYWcgPSBwYXJlbnQudGFnc1t0YWdOYW1lXVxuXG4gIC8vIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBjaGlsZHJlbiB0YWdzIGhhdmluZyB0aGUgc2FtZSBuYW1lXG4gIGlmIChjYWNoZWRUYWcpIHtcbiAgICAvLyBpZiB0aGUgcGFyZW50IHRhZ3MgcHJvcGVydHkgaXMgbm90IHlldCBhbiBhcnJheVxuICAgIC8vIGNyZWF0ZSBpdCBhZGRpbmcgdGhlIGZpcnN0IGNhY2hlZCB0YWdcbiAgICBpZiAoIWlzQXJyYXkoY2FjaGVkVGFnKSlcbiAgICAgIC8vIGRvbid0IGFkZCB0aGUgc2FtZSB0YWcgdHdpY2VcbiAgICAgIGlmIChjYWNoZWRUYWcgIT09IHRhZylcbiAgICAgICAgcGFyZW50LnRhZ3NbdGFnTmFtZV0gPSBbY2FjaGVkVGFnXVxuICAgIC8vIGFkZCB0aGUgbmV3IG5lc3RlZCB0YWcgdG8gdGhlIGFycmF5XG4gICAgaWYgKCFjb250YWlucyhwYXJlbnQudGFnc1t0YWdOYW1lXSwgdGFnKSlcbiAgICAgIHBhcmVudC50YWdzW3RhZ05hbWVdLnB1c2godGFnKVxuICB9IGVsc2Uge1xuICAgIHBhcmVudC50YWdzW3RhZ05hbWVdID0gdGFnXG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIHRoZSBwb3NpdGlvbiBvZiBhIGN1c3RvbSB0YWcgaW4gaXRzIHBhcmVudCB0YWdcbiAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gdGFnIC0gY2hpbGQgdGFnIGluc3RhbmNlXG4gKiBAcGFyYW0gICB7IFN0cmluZyB9IHRhZ05hbWUgLSBrZXkgd2hlcmUgdGhlIHRhZyB3YXMgc3RvcmVkXG4gKiBAcGFyYW0gICB7IE51bWJlciB9IG5ld1BvcyAtIGluZGV4IHdoZXJlIHRoZSBuZXcgdGFnIHdpbGwgYmUgc3RvcmVkXG4gKi9cbmZ1bmN0aW9uIG1vdmVDaGlsZFRhZyh0YWcsIHRhZ05hbWUsIG5ld1Bvcykge1xuICB2YXIgcGFyZW50ID0gdGFnLnBhcmVudCxcbiAgICB0YWdzXG4gIC8vIG5vIHBhcmVudCBubyBtb3ZlXG4gIGlmICghcGFyZW50KSByZXR1cm5cblxuICB0YWdzID0gcGFyZW50LnRhZ3NbdGFnTmFtZV1cblxuICBpZiAoaXNBcnJheSh0YWdzKSlcbiAgICB0YWdzLnNwbGljZShuZXdQb3MsIDAsIHRhZ3Muc3BsaWNlKHRhZ3MuaW5kZXhPZih0YWcpLCAxKVswXSlcbiAgZWxzZSBhZGRDaGlsZFRhZyh0YWcsIHRhZ05hbWUsIHBhcmVudClcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgY2hpbGQgdGFnIGluY2x1ZGluZyBpdCBjb3JyZWN0bHkgaW50byBpdHMgcGFyZW50XG4gKiBAcGFyYW0gICB7IE9iamVjdCB9IGNoaWxkIC0gY2hpbGQgdGFnIGltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0gICB7IE9iamVjdCB9IG9wdHMgLSB0YWcgb3B0aW9ucyBjb250YWluaW5nIHRoZSBET00gbm9kZSB3aGVyZSB0aGUgdGFnIHdpbGwgYmUgbW91bnRlZFxuICogQHBhcmFtICAgeyBTdHJpbmcgfSBpbm5lckhUTUwgLSBpbm5lciBodG1sIG9mIHRoZSBjaGlsZCBub2RlXG4gKiBAcGFyYW0gICB7IE9iamVjdCB9IHBhcmVudCAtIGluc3RhbmNlIG9mIHRoZSBwYXJlbnQgdGFnIGluY2x1ZGluZyB0aGUgY2hpbGQgY3VzdG9tIHRhZ1xuICogQHJldHVybnMgeyBPYmplY3QgfSBpbnN0YW5jZSBvZiB0aGUgbmV3IGNoaWxkIHRhZyBqdXN0IGNyZWF0ZWRcbiAqL1xuZnVuY3Rpb24gaW5pdENoaWxkVGFnKGNoaWxkLCBvcHRzLCBpbm5lckhUTUwsIHBhcmVudCkge1xuICB2YXIgdGFnID0gbmV3IFRhZyhjaGlsZCwgb3B0cywgaW5uZXJIVE1MKSxcbiAgICB0YWdOYW1lID0gZ2V0VGFnTmFtZShvcHRzLnJvb3QpLFxuICAgIHB0YWcgPSBnZXRJbW1lZGlhdGVDdXN0b21QYXJlbnRUYWcocGFyZW50KVxuICAvLyBmaXggZm9yIHRoZSBwYXJlbnQgYXR0cmlidXRlIGluIHRoZSBsb29wZWQgZWxlbWVudHNcbiAgdGFnLnBhcmVudCA9IHB0YWdcbiAgLy8gc3RvcmUgdGhlIHJlYWwgcGFyZW50IHRhZ1xuICAvLyBpbiBzb21lIGNhc2VzIHRoaXMgY291bGQgYmUgZGlmZmVyZW50IGZyb20gdGhlIGN1c3RvbSBwYXJlbnQgdGFnXG4gIC8vIGZvciBleGFtcGxlIGluIG5lc3RlZCBsb29wc1xuICB0YWcuX3BhcmVudCA9IHBhcmVudFxuXG4gIC8vIGFkZCB0aGlzIHRhZyB0byB0aGUgY3VzdG9tIHBhcmVudCB0YWdcbiAgYWRkQ2hpbGRUYWcodGFnLCB0YWdOYW1lLCBwdGFnKVxuICAvLyBhbmQgYWxzbyB0byB0aGUgcmVhbCBwYXJlbnQgdGFnXG4gIGlmIChwdGFnICE9PSBwYXJlbnQpXG4gICAgYWRkQ2hpbGRUYWcodGFnLCB0YWdOYW1lLCBwYXJlbnQpXG4gIC8vIGVtcHR5IHRoZSBjaGlsZCBub2RlIG9uY2Ugd2UgZ290IGl0cyB0ZW1wbGF0ZVxuICAvLyB0byBhdm9pZCB0aGF0IGl0cyBjaGlsZHJlbiBnZXQgY29tcGlsZWQgbXVsdGlwbGUgdGltZXNcbiAgb3B0cy5yb290LmlubmVySFRNTCA9ICcnXG5cbiAgcmV0dXJuIHRhZ1xufVxuXG4vKipcbiAqIExvb3AgYmFja3dhcmQgYWxsIHRoZSBwYXJlbnRzIHRyZWUgdG8gZGV0ZWN0IHRoZSBmaXJzdCBjdXN0b20gcGFyZW50IHRhZ1xuICogQHBhcmFtICAgeyBPYmplY3QgfSB0YWcgLSBhIFRhZyBpbnN0YW5jZVxuICogQHJldHVybnMgeyBPYmplY3QgfSB0aGUgaW5zdGFuY2Ugb2YgdGhlIGZpcnN0IGN1c3RvbSBwYXJlbnQgdGFnIGZvdW5kXG4gKi9cbmZ1bmN0aW9uIGdldEltbWVkaWF0ZUN1c3RvbVBhcmVudFRhZyh0YWcpIHtcbiAgdmFyIHB0YWcgPSB0YWdcbiAgd2hpbGUgKCFnZXRUYWcocHRhZy5yb290KSkge1xuICAgIGlmICghcHRhZy5wYXJlbnQpIGJyZWFrXG4gICAgcHRhZyA9IHB0YWcucGFyZW50XG4gIH1cbiAgcmV0dXJuIHB0YWdcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gc2V0IGFuIGltbXV0YWJsZSBwcm9wZXJ0eVxuICogQHBhcmFtICAgeyBPYmplY3QgfSBlbCAtIG9iamVjdCB3aGVyZSB0aGUgbmV3IHByb3BlcnR5IHdpbGwgYmUgc2V0XG4gKiBAcGFyYW0gICB7IFN0cmluZyB9IGtleSAtIG9iamVjdCBrZXkgd2hlcmUgdGhlIG5ldyBwcm9wZXJ0eSB3aWxsIGJlIHN0b3JlZFxuICogQHBhcmFtICAgeyAqIH0gdmFsdWUgLSB2YWx1ZSBvZiB0aGUgbmV3IHByb3BlcnR5XG4qIEBwYXJhbSAgIHsgT2JqZWN0IH0gb3B0aW9ucyAtIHNldCB0aGUgcHJvcGVyeSBvdmVycmlkaW5nIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAqIEByZXR1cm5zIHsgT2JqZWN0IH0gLSB0aGUgaW5pdGlhbCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoZWwsIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsLCBrZXksIGV4dGVuZCh7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gIH0sIG9wdGlvbnMpKVxuICByZXR1cm4gZWxcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHRhZyBuYW1lIG9mIGFueSBET00gbm9kZVxuICogQHBhcmFtICAgeyBPYmplY3QgfSBkb20gLSBET00gbm9kZSB3ZSB3YW50IHRvIHBhcnNlXG4gKiBAcmV0dXJucyB7IFN0cmluZyB9IG5hbWUgdG8gaWRlbnRpZnkgdGhpcyBkb20gbm9kZSBpbiByaW90XG4gKi9cbmZ1bmN0aW9uIGdldFRhZ05hbWUoZG9tKSB7XG4gIHZhciBjaGlsZCA9IGdldFRhZyhkb20pLFxuICAgIG5hbWVkVGFnID0gZ2V0QXR0cihkb20sICduYW1lJyksXG4gICAgdGFnTmFtZSA9IG5hbWVkVGFnICYmICF0bXBsLmhhc0V4cHIobmFtZWRUYWcpID9cbiAgICAgICAgICAgICAgICBuYW1lZFRhZyA6XG4gICAgICAgICAgICAgIGNoaWxkID8gY2hpbGQubmFtZSA6IGRvbS50YWdOYW1lLnRvTG93ZXJDYXNlKClcblxuICByZXR1cm4gdGFnTmFtZVxufVxuXG4vKipcbiAqIEV4dGVuZCBhbnkgb2JqZWN0IHdpdGggb3RoZXIgcHJvcGVydGllc1xuICogQHBhcmFtICAgeyBPYmplY3QgfSBzcmMgLSBzb3VyY2Ugb2JqZWN0XG4gKiBAcmV0dXJucyB7IE9iamVjdCB9IHRoZSByZXN1bHRpbmcgZXh0ZW5kZWQgb2JqZWN0XG4gKlxuICogdmFyIG9iaiA9IHsgZm9vOiAnYmF6JyB9XG4gKiBleHRlbmQob2JqLCB7YmFyOiAnYmFyJywgZm9vOiAnYmFyJ30pXG4gKiBjb25zb2xlLmxvZyhvYmopID0+IHtiYXI6ICdiYXInLCBmb286ICdiYXInfVxuICpcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKHNyYykge1xuICB2YXIgb2JqLCBhcmdzID0gYXJndW1lbnRzXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7ICsraSkge1xuICAgIGlmIChvYmogPSBhcmdzW2ldKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgcHJvcGVydHkgb2YgdGhlIHNvdXJjZSBvYmplY3QgY291bGQgYmUgb3ZlcnJpZGRlblxuICAgICAgICBpZiAoaXNXcml0YWJsZShzcmMsIGtleSkpXG4gICAgICAgICAgc3JjW2tleV0gPSBvYmpba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3JjXG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBhcnJheSBjb250YWlucyBhbiBpdGVtXG4gKiBAcGFyYW0gICB7IEFycmF5IH0gYXJyIC0gdGFyZ2V0IGFycmF5XG4gKiBAcGFyYW0gICB7ICogfSBpdGVtIC0gaXRlbSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7IEJvb2xlYW4gfSBEb2VzICdhcnInIGNvbnRhaW4gJ2l0ZW0nP1xuICovXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIGl0ZW0pIHtcbiAgcmV0dXJuIH5hcnIuaW5kZXhPZihpdGVtKVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGEga2luZCBvZiBhcnJheVxuICogQHBhcmFtICAgeyAqIH0gYSAtIGFueXRoaW5nXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gaXMgJ2EnIGFuIGFycmF5P1xuICovXG5mdW5jdGlvbiBpc0FycmF5KGEpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSkgfHwgYSBpbnN0YW5jZW9mIEFycmF5IH1cblxuLyoqXG4gKiBEZXRlY3Qgd2hldGhlciBhIHByb3BlcnR5IG9mIGFuIG9iamVjdCBjb3VsZCBiZSBvdmVycmlkZGVuXG4gKiBAcGFyYW0gICB7IE9iamVjdCB9ICBvYmogLSBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0gICB7IFN0cmluZyB9ICBrZXkgLSBvYmplY3QgcHJvcGVydHlcbiAqIEByZXR1cm5zIHsgQm9vbGVhbiB9IGlzIHRoaXMgcHJvcGVydHkgd3JpdGFibGU/XG4gKi9cbmZ1bmN0aW9uIGlzV3JpdGFibGUob2JqLCBrZXkpIHtcbiAgdmFyIHByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSlcbiAgcmV0dXJuIHR5cGVvZiBvYmpba2V5XSA9PT0gVF9VTkRFRiB8fCBwcm9wcyAmJiBwcm9wcy53cml0YWJsZVxufVxuXG5cbi8qKlxuICogV2l0aCB0aGlzIGZ1bmN0aW9uIHdlIGF2b2lkIHRoYXQgdGhlIGludGVybmFsIFRhZyBtZXRob2RzIGdldCBvdmVycmlkZGVuXG4gKiBAcGFyYW0gICB7IE9iamVjdCB9IGRhdGEgLSBvcHRpb25zIHdlIHdhbnQgdG8gdXNlIHRvIGV4dGVuZCB0aGUgdGFnIGluc3RhbmNlXG4gKiBAcmV0dXJucyB7IE9iamVjdCB9IGNsZWFuIG9iamVjdCB3aXRob3V0IGNvbnRhaW5pbmcgdGhlIHJpb3QgaW50ZXJuYWwgcmVzZXJ2ZWQgd29yZHNcbiAqL1xuZnVuY3Rpb24gY2xlYW5VcERhdGEoZGF0YSkge1xuICBpZiAoIShkYXRhIGluc3RhbmNlb2YgVGFnKSAmJiAhKGRhdGEgJiYgdHlwZW9mIGRhdGEudHJpZ2dlciA9PSBUX0ZVTkNUSU9OKSkgcmV0dXJuIGRhdGFcblxuICB2YXIgbyA9IHt9XG4gIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgaWYgKCFjb250YWlucyhSRVNFUlZFRF9XT1JEU19CTEFDS0xJU1QsIGtleSkpXG4gICAgICBvW2tleV0gPSBkYXRhW2tleV1cbiAgfVxuICByZXR1cm4gb1xufVxuXG4vKipcbiAqIFdhbGsgZG93biByZWN1cnNpdmVseSBhbGwgdGhlIGNoaWxkcmVuIHRhZ3Mgc3RhcnRpbmcgZG9tIG5vZGVcbiAqIEBwYXJhbSAgIHsgT2JqZWN0IH0gICBkb20gLSBzdGFydGluZyBub2RlIHdoZXJlIHdlIHdpbGwgc3RhcnQgdGhlIHJlY3Vyc2lvblxuICogQHBhcmFtICAgeyBGdW5jdGlvbiB9IGZuIC0gY2FsbGJhY2sgdG8gdHJhbnNmb3JtIHRoZSBjaGlsZCBub2RlIGp1c3QgZm91bmRcbiAqL1xuZnVuY3Rpb24gd2Fsayhkb20sIGZuKSB7XG4gIGlmIChkb20pIHtcbiAgICAvLyBzdG9wIHRoZSByZWN1cnNpb25cbiAgICBpZiAoZm4oZG9tKSA9PT0gZmFsc2UpIHJldHVyblxuICAgIGVsc2Uge1xuICAgICAgZG9tID0gZG9tLmZpcnN0Q2hpbGRcblxuICAgICAgd2hpbGUgKGRvbSkge1xuICAgICAgICB3YWxrKGRvbSwgZm4pXG4gICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZ1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1pbmltaXplIHJpc2s6IG9ubHkgemVybyBvciBvbmUgX3NwYWNlXyBiZXR3ZWVuIGF0dHIgJiB2YWx1ZVxuICogQHBhcmFtICAgeyBTdHJpbmcgfSAgIGh0bWwgLSBodG1sIHN0cmluZyB3ZSB3YW50IHRvIHBhcnNlXG4gKiBAcGFyYW0gICB7IEZ1bmN0aW9uIH0gZm4gLSBjYWxsYmFjayBmdW5jdGlvbiB0byBhcHBseSBvbiBhbnkgYXR0cmlidXRlIGZvdW5kXG4gKi9cbmZ1bmN0aW9uIHdhbGtBdHRyaWJ1dGVzKGh0bWwsIGZuKSB7XG4gIHZhciBtLFxuICAgIHJlID0gLyhbLVxcd10rKSA/PSA/KD86XCIoW15cIl0qKXwnKFteJ10qKXwoe1tefV0qfSkpL2dcblxuICB3aGlsZSAobSA9IHJlLmV4ZWMoaHRtbCkpIHtcbiAgICBmbihtWzFdLnRvTG93ZXJDYXNlKCksIG1bMl0gfHwgbVszXSB8fCBtWzRdKVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhIERPTSBub2RlIGlzIGluIHN0dWIgbW9kZSwgdXNlZnVsIGZvciB0aGUgcmlvdCAnaWYnIGRpcmVjdGl2ZVxuICogQHBhcmFtICAgeyBPYmplY3QgfSAgZG9tIC0gRE9NIG5vZGUgd2Ugd2FudCB0byBwYXJzZVxuICogQHJldHVybnMgeyBCb29sZWFuIH0gLVxuICovXG5mdW5jdGlvbiBpc0luU3R1Yihkb20pIHtcbiAgd2hpbGUgKGRvbSkge1xuICAgIGlmIChkb20uaW5TdHViKSByZXR1cm4gdHJ1ZVxuICAgIGRvbSA9IGRvbS5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZ2VuZXJpYyBET00gbm9kZVxuICogQHBhcmFtICAgeyBTdHJpbmcgfSBuYW1lIC0gbmFtZSBvZiB0aGUgRE9NIG5vZGUgd2Ugd2FudCB0byBjcmVhdGVcbiAqIEByZXR1cm5zIHsgT2JqZWN0IH0gRE9NIG5vZGUganVzdCBjcmVhdGVkXG4gKi9cbmZ1bmN0aW9uIG1rRWwobmFtZSkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGdlbmVyaWMgRE9NIG5vZGUsIGFuZCBmaWxsIGl0IHdpdGggaW5uZXJIVE1MXG4gKiBAcGFyYW0gICB7IFN0cmluZyB9IG5hbWUgLSBuYW1lIG9mIHRoZSBET00gbm9kZSB3ZSB3YW50IHRvIGNyZWF0ZVxuICogQHBhcmFtICAgeyBTdHJpbmcgfSBpbm5lckhUTUwgLSBpbm5lckhUTUwgb2YgdGhlIG5ldyBET01cbiAqIEByZXR1cm5zIHsgT2JqZWN0IH0gRE9NIG5vZGUganVzdCBjcmVhdGVkXG4gKi9cbmZ1bmN0aW9uIG1rRWxXaXRoSW5uZXJIVE1MKG5hbWUsIGlubmVySFRNTCkge1xuICB2YXIgZWwgPSBta0VsKG5hbWUpXG4gIGVsLmlubmVySFRNTCA9IGlubmVySFRNTCB8fCAnJ1xuICByZXR1cm4gZWxcbn1cblxuLyoqXG4gKiBSZXBsYWNlIHRoZSB5aWVsZCB0YWcgZnJvbSBhbnkgdGFnIHRlbXBsYXRlIHdpdGggdGhlIGlubmVySFRNTCBvZiB0aGVcbiAqIG9yaWdpbmFsIHRhZyBpbiB0aGUgcGFnZVxuICogQHBhcmFtICAgeyBTdHJpbmcgfSB0bXBsIC0gdGFnIGltcGxlbWVudGF0aW9uIHRlbXBsYXRlXG4gKiBAcGFyYW0gICB7IFN0cmluZyB9IGlubmVySFRNTCAtIG9yaWdpbmFsIGNvbnRlbnQgb2YgdGhlIHRhZyBpbiB0aGUgRE9NXG4gKiBAcmV0dXJucyB7IFN0cmluZyB9IHRhZyB0ZW1wbGF0ZSB1cGRhdGVkIHdpdGhvdXQgdGhlIHlpZWxkIHRhZ1xuICovXG5mdW5jdGlvbiByZXBsYWNlWWllbGQodG1wbCwgaW5uZXJIVE1MKSB7XG4gIHZhciB0bXBsRWxlbWVudCA9IG1rRWxXaXRoSW5uZXJIVE1MKCdkaXYnLCB0bXBsKVxuICAvLyBpZiAoJCgneWllbGRbZnJvbV0nLnRtcGxFbGVtZW50KSkgeyAvLyB0aGlzIGlzc3VlcyB0ZXN0IGVycm9yc1xuICBpZiAodG1wbEVsZW1lbnQucXVlcnlTZWxlY3RvciAmJiB0bXBsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCd5aWVsZFtmcm9tXScpKSB7IC8vIGNvZGUgY292ZXJhZ2UgcGF0aCBub3QgdGFrZW4gKD8pXG4gICAgLy8geWllbGQgdG8ocykgbXVzdCBiZSBkaXJlY3QgY2hpbGRyZW4gZnJvbSBpbm5lckhUTUwocm9vdCksIGFsbCBvdGhlciB0YWdzIGFyZSBpZ25vcmVkXG4gICAgZWFjaChta0VsV2l0aElubmVySFRNTCgnZGl2JywgaW5uZXJIVE1MKS5jaGlsZE5vZGVzLCBmdW5jdGlvbih0b1lpZWxkKSB7XG4gICAgICBpZiAodG9ZaWVsZC5ub2RlVHlwZSA9PSAxICYmIHRvWWllbGQudGFnTmFtZSA9PSAnWUlFTEQnICYmIHRvWWllbGQuZ2V0QXR0cmlidXRlKCd0bycpKSB7XG4gICAgICAgIC8vIHJlcGxhY2UgYWxsIHlpZWxkW2Zyb21dXG4gICAgICAgIGVhY2goJCQoJ3lpZWxkW2Zyb209XCInK3RvWWllbGQuZ2V0QXR0cmlidXRlKCd0bycpKydcIl0nLCB0bXBsRWxlbWVudCksIGZ1bmN0aW9uKGZyb21ZaWVsZCkge1xuICAgICAgICAgIGZyb21ZaWVsZC5vdXRlckhUTUwgPSB0b1lpZWxkLmlubmVySFRNTFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRtcGxFbGVtZW50LmlubmVySFRNTFxuICB9IGVsc2VcbiAgICAvLyBqdXN0IHJlcGxhY2UgeWllbGQgaW4gdG1wbCB3aXRoIHRoZSBpbm5lckhUTUxcbiAgICByZXR1cm4gdG1wbC5yZXBsYWNlKC88eWllbGRcXHMqKD86XFwvPnw+XFxzKjxcXC95aWVsZFxccyo+KS9naSwgaW5uZXJIVE1MIHx8ICcnKVxufVxuXG4vKipcbiAqIFNob3J0ZXIgYW5kIGZhc3Qgd2F5IHRvIHNlbGVjdCBtdWx0aXBsZSBub2RlcyBpbiB0aGUgRE9NXG4gKiBAcGFyYW0gICB7IFN0cmluZyB9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gKiBAcGFyYW0gICB7IE9iamVjdCB9IGN0eCAtIERPTSBub2RlIHdoZXJlIHRoZSB0YXJnZXRzIG9mIG91ciBzZWFyY2ggd2lsbCBpcyBsb2NhdGVkXG4gKiBAcmV0dXJucyB7IE9iamVjdCB9IGRvbSBub2RlcyBmb3VuZFxuICovXG5mdW5jdGlvbiAkJChzZWxlY3RvciwgY3R4KSB7XG4gIHJldHVybiAoY3R4IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxufVxuXG4vKipcbiAqIFNob3J0ZXIgYW5kIGZhc3Qgd2F5IHRvIHNlbGVjdCBhIHNpbmdsZSBub2RlIGluIHRoZSBET01cbiAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gc2VsZWN0b3IgLSB1bmlxdWUgZG9tIHNlbGVjdG9yXG4gKiBAcGFyYW0gICB7IE9iamVjdCB9IGN0eCAtIERPTSBub2RlIHdoZXJlIHRoZSB0YXJnZXQgb2Ygb3VyIHNlYXJjaCB3aWxsIGlzIGxvY2F0ZWRcbiAqIEByZXR1cm5zIHsgT2JqZWN0IH0gZG9tIG5vZGUgZm91bmRcbiAqL1xuZnVuY3Rpb24gJChzZWxlY3RvciwgY3R4KSB7XG4gIHJldHVybiAoY3R4IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxufVxuXG4vKipcbiAqIFNpbXBsZSBvYmplY3QgcHJvdG90eXBhbCBpbmhlcml0YW5jZVxuICogQHBhcmFtICAgeyBPYmplY3QgfSBwYXJlbnQgLSBwYXJlbnQgb2JqZWN0XG4gKiBAcmV0dXJucyB7IE9iamVjdCB9IGNoaWxkIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGluaGVyaXQocGFyZW50KSB7XG4gIGZ1bmN0aW9uIENoaWxkKCkge31cbiAgQ2hpbGQucHJvdG90eXBlID0gcGFyZW50XG4gIHJldHVybiBuZXcgQ2hpbGQoKVxufVxuXG4vKipcbiAqIEdldCB0aGUgbmFtZSBwcm9wZXJ0eSBuZWVkZWQgdG8gaWRlbnRpZnkgYSBET00gbm9kZSBpbiByaW90XG4gKiBAcGFyYW0gICB7IE9iamVjdCB9IGRvbSAtIERPTSBub2RlIHdlIG5lZWQgdG8gcGFyc2VcbiAqIEByZXR1cm5zIHsgU3RyaW5nIHwgdW5kZWZpbmVkIH0gZ2l2ZSB1cyBiYWNrIGEgc3RyaW5nIHRvIGlkZW50aWZ5IHRoaXMgZG9tIG5vZGVcbiAqL1xuZnVuY3Rpb24gZ2V0TmFtZWRLZXkoZG9tKSB7XG4gIHJldHVybiBnZXRBdHRyKGRvbSwgJ2lkJykgfHwgZ2V0QXR0cihkb20sICduYW1lJylcbn1cblxuLyoqXG4gKiBTZXQgdGhlIG5hbWVkIHByb3BlcnRpZXMgb2YgYSB0YWcgZWxlbWVudFxuICogQHBhcmFtIHsgT2JqZWN0IH0gZG9tIC0gRE9NIG5vZGUgd2UgbmVlZCB0byBwYXJzZVxuICogQHBhcmFtIHsgT2JqZWN0IH0gcGFyZW50IC0gdGFnIGluc3RhbmNlIHdoZXJlIHRoZSBuYW1lZCBkb20gZWxlbWVudCB3aWxsIGJlIGV2ZW50dWFsbHkgYWRkZWRcbiAqIEBwYXJhbSB7IEFycmF5IH0ga2V5cyAtIGxpc3Qgb2YgYWxsIHRoZSB0YWcgaW5zdGFuY2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBzZXROYW1lZChkb20sIHBhcmVudCwga2V5cykge1xuICAvLyBnZXQgdGhlIGtleSB2YWx1ZSB3ZSB3YW50IHRvIGFkZCB0byB0aGUgdGFnIGluc3RhbmNlXG4gIHZhciBrZXkgPSBnZXROYW1lZEtleShkb20pLFxuICAgIC8vIGFkZCB0aGUgbm9kZSBkZXRlY3RlZCB0byBhIHRhZyBpbnN0YW5jZSB1c2luZyB0aGUgbmFtZWQgcHJvcGVydHlcbiAgICBhZGQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgLy8gYXZvaWQgdG8gb3ZlcnJpZGUgdGhlIHRhZyBwcm9wZXJ0aWVzIGFscmVhZHkgc2V0XG4gICAgICBpZiAoY29udGFpbnMoa2V5cywga2V5KSkgcmV0dXJuXG4gICAgICAvLyBjaGVjayB3aGV0aGVyIHRoaXMgdmFsdWUgaXMgYW4gYXJyYXlcbiAgICAgIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpXG4gICAgICAvLyBpZiB0aGUga2V5IHdhcyBuZXZlciBzZXRcbiAgICAgIGlmICghdmFsdWUpXG4gICAgICAgIC8vIHNldCBpdCBvbmNlIG9uIHRoZSB0YWcgaW5zdGFuY2VcbiAgICAgICAgcGFyZW50W2tleV0gPSBkb21cbiAgICAgIC8vIGlmIGl0IHdhcyBhbiBhcnJheSBhbmQgbm90IHlldCBzZXRcbiAgICAgIGVsc2UgaWYgKCFpc0FyciB8fCBpc0FyciAmJiAhY29udGFpbnModmFsdWUsIGRvbSkpIHtcbiAgICAgICAgLy8gYWRkIHRoZSBkb20gbm9kZSBpbnRvIHRoZSBhcnJheVxuICAgICAgICBpZiAoaXNBcnIpXG4gICAgICAgICAgdmFsdWUucHVzaChkb20pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBwYXJlbnRba2V5XSA9IFt2YWx1ZSwgZG9tXVxuICAgICAgfVxuICAgIH1cblxuICAvLyBza2lwIHRoZSBlbGVtZW50cyB3aXRoIG5vIG5hbWVkIHByb3BlcnRpZXNcbiAgaWYgKCFrZXkpIHJldHVyblxuXG4gIC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBrZXkgaGFzIGJlZW4gYWxyZWFkeSBldmFsdWF0ZWRcbiAgaWYgKHRtcGwuaGFzRXhwcihrZXkpKVxuICAgIC8vIHdhaXQgdGhlIGZpcnN0IHVwZGF0ZWQgZXZlbnQgb25seSBvbmNlXG4gICAgcGFyZW50Lm9uZSgndXBkYXRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAga2V5ID0gZ2V0TmFtZWRLZXkoZG9tKVxuICAgICAgYWRkKHBhcmVudFtrZXldKVxuICAgIH0pXG4gIGVsc2VcbiAgICBhZGQocGFyZW50W2tleV0pXG5cbn1cblxuLyoqXG4gKiBGYXN0ZXIgU3RyaW5nIHN0YXJ0c1dpdGggYWx0ZXJuYXRpdmVcbiAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gc3JjIC0gc291cmNlIHN0cmluZ1xuICogQHBhcmFtICAgeyBTdHJpbmcgfSBzdHIgLSB0ZXN0IHN0cmluZ1xuICogQHJldHVybnMgeyBCb29sZWFuIH0gLVxuICovXG5mdW5jdGlvbiBzdGFydHNXaXRoKHNyYywgc3RyKSB7XG4gIHJldHVybiBzcmMuc2xpY2UoMCwgc3RyLmxlbmd0aCkgPT09IHN0clxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIG5lZWRlZCB0byBpbmplY3QgaW4gcnVudGltZSB0aGUgY3VzdG9tIHRhZ3MgY3NzXG4gKi9cbnZhciBpbmplY3RTdHlsZSA9IChmdW5jdGlvbigpIHtcblxuICBpZiAoIXdpbmRvdykgcmV0dXJuIC8vIHNraXAgaW5qZWN0aW9uIG9uIHRoZSBzZXJ2ZXJcblxuICAvLyBjcmVhdGUgdGhlIHN0eWxlIG5vZGVcbiAgdmFyIHN0eWxlTm9kZSA9IG1rRWwoJ3N0eWxlJyksXG4gICAgcGxhY2Vob2xkZXIgPSAkKCdzdHlsZVt0eXBlPXJpb3RdJylcblxuICBzZXRBdHRyKHN0eWxlTm9kZSwgJ3R5cGUnLCAndGV4dC9jc3MnKVxuXG4gIC8vIGluamVjdCB0aGUgbmV3IG5vZGUgaW50byB0aGUgRE9NIC0tIGluIGhlYWRcbiAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgcGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoc3R5bGVOb2RlLCBwbGFjZWhvbGRlcilcbiAgICBwbGFjZWhvbGRlciA9IG51bGxcbiAgfVxuICBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGVOb2RlKVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBmdW5jdGlvbiBleHBvcnRlZCB0aGF0IHdpbGwgYmUgdXNlZCB0byB1cGRhdGUgdGhlIHN0eWxlIHRhZyBqdXN0IGNyZWF0ZWRcbiAgICogaW5uZXJIVE1MIHNlZW1zIHNsb3c6IGh0dHA6Ly9qc3BlcmYuY29tL3Jpb3QtaW5zZXJ0LXN0eWxlXG4gICAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gY3NzIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHJldHVybiBzdHlsZU5vZGUuc3R5bGVTaGVldCA/XG4gICAgZnVuY3Rpb24gKGNzcykgeyBzdHlsZU5vZGUuc3R5bGVTaGVldC5jc3NUZXh0ICs9IGNzcyB9IDpcbiAgICBmdW5jdGlvbiAoY3NzKSB7IHN0eWxlTm9kZS5pbm5lckhUTUwgKz0gY3NzIH1cblxufSkoKVxuXG4vKipcbiAqIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICovXG52YXIgckFGID0gKGZ1bmN0aW9uKHcpIHtcbiAgcmV0dXJuICB3LnJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgICB8fFxuICAgICAgICAgIHcud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICAgICAgICBmdW5jdGlvbihjYikgeyBzZXRUaW1lb3V0KGNiLCAxMDAwIC8gNjApIH1cbn0pKHdpbmRvdyB8fCB7fSlcblxuLyoqXG4gKiBNb3VudCBhIHRhZyBjcmVhdGluZyBuZXcgVGFnIGluc3RhbmNlXG4gKiBAcGFyYW0gICB7IE9iamVjdCB9IHJvb3QgLSBkb20gbm9kZSB3aGVyZSB0aGUgdGFnIHdpbGwgYmUgbW91bnRlZFxuICogQHBhcmFtICAgeyBTdHJpbmcgfSB0YWdOYW1lIC0gbmFtZSBvZiB0aGUgcmlvdCB0YWcgd2Ugd2FudCB0byBtb3VudFxuICogQHBhcmFtICAgeyBPYmplY3QgfSBvcHRzIC0gb3B0aW9ucyB0byBwYXNzIHRvIHRoZSBUYWcgaW5zdGFuY2VcbiAqIEByZXR1cm5zIHsgVGFnIH0gYSBuZXcgVGFnIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIG1vdW50VG8ocm9vdCwgdGFnTmFtZSwgb3B0cykge1xuICB2YXIgdGFnID0gX190YWdJbXBsW3RhZ05hbWVdLFxuICAgIC8vIGNhY2hlIHRoZSBpbm5lciBIVE1MIHRvIGZpeCAjODU1XG4gICAgaW5uZXJIVE1MID0gcm9vdC5faW5uZXJIVE1MID0gcm9vdC5faW5uZXJIVE1MIHx8IHJvb3QuaW5uZXJIVE1MXG5cbiAgLy8gY2xlYXIgdGhlIGlubmVyIGh0bWxcbiAgcm9vdC5pbm5lckhUTUwgPSAnJ1xuXG4gIGlmICh0YWcgJiYgcm9vdCkgdGFnID0gbmV3IFRhZyh0YWcsIHsgcm9vdDogcm9vdCwgb3B0czogb3B0cyB9LCBpbm5lckhUTUwpXG5cbiAgaWYgKHRhZyAmJiB0YWcubW91bnQpIHtcbiAgICB0YWcubW91bnQoKVxuICAgIC8vIGFkZCB0aGlzIHRhZyB0byB0aGUgdmlydHVhbERvbSB2YXJpYWJsZVxuICAgIGlmICghY29udGFpbnMoX192aXJ0dWFsRG9tLCB0YWcpKSBfX3ZpcnR1YWxEb20ucHVzaCh0YWcpXG4gIH1cblxuICByZXR1cm4gdGFnXG59XG4vKipcbiAqIFJpb3QgcHVibGljIGFwaVxuICovXG5cbi8vIHNoYXJlIG1ldGhvZHMgZm9yIG90aGVyIHJpb3QgcGFydHMsIGUuZy4gY29tcGlsZXJcbnJpb3QudXRpbCA9IHsgYnJhY2tldHM6IGJyYWNrZXRzLCB0bXBsOiB0bXBsIH1cblxuLyoqXG4gKiBDcmVhdGUgYSBtaXhpbiB0aGF0IGNvdWxkIGJlIGdsb2JhbGx5IHNoYXJlZCBhY3Jvc3MgYWxsIHRoZSB0YWdzXG4gKi9cbnJpb3QubWl4aW4gPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBtaXhpbnMgPSB7fVxuXG4gIC8qKlxuICAgKiBDcmVhdGUvUmV0dXJuIGEgbWl4aW4gYnkgaXRzIG5hbWVcbiAgICogQHBhcmFtICAgeyBTdHJpbmcgfSBuYW1lIC0gbWl4aW4gbmFtZVxuICAgKiBAcGFyYW0gICB7IE9iamVjdCB9IG1peGluIC0gbWl4aW4gbG9naWNcbiAgICogQHJldHVybnMgeyBPYmplY3QgfSB0aGUgbWl4aW4gbG9naWNcbiAgICovXG4gIHJldHVybiBmdW5jdGlvbihuYW1lLCBtaXhpbikge1xuICAgIGlmICghbWl4aW4pIHJldHVybiBtaXhpbnNbbmFtZV1cbiAgICBtaXhpbnNbbmFtZV0gPSBtaXhpblxuICB9XG5cbn0pKClcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgcmlvdCB0YWcgaW1wbGVtZW50YXRpb25cbiAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gICBuYW1lIC0gbmFtZS9pZCBvZiB0aGUgbmV3IHJpb3QgdGFnXG4gKiBAcGFyYW0gICB7IFN0cmluZyB9ICAgaHRtbCAtIHRhZyB0ZW1wbGF0ZVxuICogQHBhcmFtICAgeyBTdHJpbmcgfSAgIGNzcyAtIGN1c3RvbSB0YWcgY3NzXG4gKiBAcGFyYW0gICB7IFN0cmluZyB9ICAgYXR0cnMgLSByb290IHRhZyBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0gICB7IEZ1bmN0aW9uIH0gZm4gLSB1c2VyIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7IFN0cmluZyB9IG5hbWUvaWQgb2YgdGhlIHRhZyBqdXN0IGNyZWF0ZWRcbiAqL1xucmlvdC50YWcgPSBmdW5jdGlvbihuYW1lLCBodG1sLCBjc3MsIGF0dHJzLCBmbikge1xuICBpZiAoaXNGdW5jdGlvbihhdHRycykpIHtcbiAgICBmbiA9IGF0dHJzXG4gICAgaWYgKC9eW1xcd1xcLV0rXFxzPz0vLnRlc3QoY3NzKSkge1xuICAgICAgYXR0cnMgPSBjc3NcbiAgICAgIGNzcyA9ICcnXG4gICAgfSBlbHNlIGF0dHJzID0gJydcbiAgfVxuICBpZiAoY3NzKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY3NzKSkgZm4gPSBjc3NcbiAgICBlbHNlIGlmIChpbmplY3RTdHlsZSkgaW5qZWN0U3R5bGUoY3NzKVxuICB9XG4gIF9fdGFnSW1wbFtuYW1lXSA9IHsgbmFtZTogbmFtZSwgdG1wbDogaHRtbCwgYXR0cnM6IGF0dHJzLCBmbjogZm4gfVxuICByZXR1cm4gbmFtZVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyByaW90IHRhZyBpbXBsZW1lbnRhdGlvbiAoZm9yIHVzZSBieSB0aGUgY29tcGlsZXIpXG4gKiBAcGFyYW0gICB7IFN0cmluZyB9ICAgbmFtZSAtIG5hbWUvaWQgb2YgdGhlIG5ldyByaW90IHRhZ1xuICogQHBhcmFtICAgeyBTdHJpbmcgfSAgIGh0bWwgLSB0YWcgdGVtcGxhdGVcbiAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gICBjc3MgLSBjdXN0b20gdGFnIGNzc1xuICogQHBhcmFtICAgeyBTdHJpbmcgfSAgIGF0dHJzIC0gcm9vdCB0YWcgYXR0cmlidXRlc1xuICogQHBhcmFtICAgeyBGdW5jdGlvbiB9IGZuIC0gdXNlciBmdW5jdGlvblxuICogQHBhcmFtICAgeyBzdHJpbmcgfSAgW2JwYWlyXSAtIGJyYWNrZXRzIHVzZWQgaW4gdGhlIGNvbXBpbGF0aW9uXG4gKiBAcmV0dXJucyB7IFN0cmluZyB9IG5hbWUvaWQgb2YgdGhlIHRhZyBqdXN0IGNyZWF0ZWRcbiAqL1xucmlvdC50YWcyID0gZnVuY3Rpb24obmFtZSwgaHRtbCwgY3NzLCBhdHRycywgZm4sIGJwYWlyKSB7XG4gIGlmIChjc3MgJiYgaW5qZWN0U3R5bGUpIGluamVjdFN0eWxlKGNzcylcbiAgLy9pZiAoYnBhaXIpIHJpb3Quc2V0dGluZ3MuYnJhY2tldHMgPSBicGFpclxuICBfX3RhZ0ltcGxbbmFtZV0gPSB7IG5hbWU6IG5hbWUsIHRtcGw6IGh0bWwsIGF0dHJzOiBhdHRycywgZm46IGZuIH1cbiAgcmV0dXJuIG5hbWVcbn1cblxuLyoqXG4gKiBNb3VudCBhIHRhZyB1c2luZyBhIHNwZWNpZmljIHRhZyBpbXBsZW1lbnRhdGlvblxuICogQHBhcmFtICAgeyBTdHJpbmcgfSBzZWxlY3RvciAtIHRhZyBET00gc2VsZWN0b3JcbiAqIEBwYXJhbSAgIHsgU3RyaW5nIH0gdGFnTmFtZSAtIHRhZyBpbXBsZW1lbnRhdGlvbiBuYW1lXG4gKiBAcGFyYW0gICB7IE9iamVjdCB9IG9wdHMgLSB0YWcgbG9naWNcbiAqIEByZXR1cm5zIHsgQXJyYXkgfSBuZXcgdGFncyBpbnN0YW5jZXNcbiAqL1xucmlvdC5tb3VudCA9IGZ1bmN0aW9uKHNlbGVjdG9yLCB0YWdOYW1lLCBvcHRzKSB7XG5cbiAgdmFyIGVscyxcbiAgICBhbGxUYWdzLFxuICAgIHRhZ3MgPSBbXVxuXG4gIC8vIGhlbHBlciBmdW5jdGlvbnNcblxuICBmdW5jdGlvbiBhZGRSaW90VGFncyhhcnIpIHtcbiAgICB2YXIgbGlzdCA9ICcnXG4gICAgZWFjaChhcnIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBsaXN0ICs9ICcsICpbJyArIFJJT1RfVEFHICsgJz1cIicgKyBlLnRyaW0oKSArICdcIl0nXG4gICAgfSlcbiAgICByZXR1cm4gbGlzdFxuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0QWxsVGFncygpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKF9fdGFnSW1wbClcbiAgICByZXR1cm4ga2V5cyArIGFkZFJpb3RUYWdzKGtleXMpXG4gIH1cblxuICBmdW5jdGlvbiBwdXNoVGFncyhyb290KSB7XG4gICAgdmFyIGxhc3RcblxuICAgIGlmIChyb290LnRhZ05hbWUpIHtcbiAgICAgIGlmICh0YWdOYW1lICYmICghKGxhc3QgPSBnZXRBdHRyKHJvb3QsIFJJT1RfVEFHKSkgfHwgbGFzdCAhPSB0YWdOYW1lKSlcbiAgICAgICAgc2V0QXR0cihyb290LCBSSU9UX1RBRywgdGFnTmFtZSlcblxuICAgICAgdmFyIHRhZyA9IG1vdW50VG8ocm9vdCwgdGFnTmFtZSB8fCByb290LmdldEF0dHJpYnV0ZShSSU9UX1RBRykgfHwgcm9vdC50YWdOYW1lLnRvTG93ZXJDYXNlKCksIG9wdHMpXG5cbiAgICAgIGlmICh0YWcpIHRhZ3MucHVzaCh0YWcpXG4gICAgfSBlbHNlIGlmIChyb290Lmxlbmd0aClcbiAgICAgIGVhY2gocm9vdCwgcHVzaFRhZ3MpICAgLy8gYXNzdW1lIG5vZGVMaXN0XG5cbiAgfVxuXG4gIC8vIC0tLS0tIG1vdW50IGNvZGUgLS0tLS1cblxuICBpZiAodHlwZW9mIHRhZ05hbWUgPT09IFRfT0JKRUNUKSB7XG4gICAgb3B0cyA9IHRhZ05hbWVcbiAgICB0YWdOYW1lID0gMFxuICB9XG5cbiAgLy8gY3Jhd2wgdGhlIERPTSB0byBmaW5kIHRoZSB0YWdcbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gVF9TVFJJTkcpIHtcbiAgICBpZiAoc2VsZWN0b3IgPT09ICcqJylcbiAgICAgIC8vIHNlbGVjdCBhbGwgdGhlIHRhZ3MgcmVnaXN0ZXJlZFxuICAgICAgLy8gYW5kIGFsc28gdGhlIHRhZ3MgZm91bmQgd2l0aCB0aGUgcmlvdC10YWcgYXR0cmlidXRlIHNldFxuICAgICAgc2VsZWN0b3IgPSBhbGxUYWdzID0gc2VsZWN0QWxsVGFncygpXG4gICAgZWxzZVxuICAgICAgLy8gb3IganVzdCB0aGUgb25lcyBuYW1lZCBsaWtlIHRoZSBzZWxlY3RvclxuICAgICAgc2VsZWN0b3IgKz0gYWRkUmlvdFRhZ3Moc2VsZWN0b3Iuc3BsaXQoJywnKSlcblxuICAgIC8vIG1ha2Ugc3VyZSB0byBwYXNzIGFsd2F5cyBhIHNlbGVjdG9yXG4gICAgLy8gdG8gdGhlIHF1ZXJ5U2VsZWN0b3JBbGwgZnVuY3Rpb25cbiAgICBlbHMgPSBzZWxlY3RvciA/ICQkKHNlbGVjdG9yKSA6IFtdXG4gIH1cbiAgZWxzZVxuICAgIC8vIHByb2JhYmx5IHlvdSBoYXZlIHBhc3NlZCBhbHJlYWR5IGEgdGFnIG9yIGEgTm9kZUxpc3RcbiAgICBlbHMgPSBzZWxlY3RvclxuXG4gIC8vIHNlbGVjdCBhbGwgdGhlIHJlZ2lzdGVyZWQgYW5kIG1vdW50IHRoZW0gaW5zaWRlIHRoZWlyIHJvb3QgZWxlbWVudHNcbiAgaWYgKHRhZ05hbWUgPT09ICcqJykge1xuICAgIC8vIGdldCBhbGwgY3VzdG9tIHRhZ3NcbiAgICB0YWdOYW1lID0gYWxsVGFncyB8fCBzZWxlY3RBbGxUYWdzKClcbiAgICAvLyBpZiB0aGUgcm9vdCBlbHMgaXQncyBqdXN0IGEgc2luZ2xlIHRhZ1xuICAgIGlmIChlbHMudGFnTmFtZSlcbiAgICAgIGVscyA9ICQkKHRhZ05hbWUsIGVscylcbiAgICBlbHNlIHtcbiAgICAgIC8vIHNlbGVjdCBhbGwgdGhlIGNoaWxkcmVuIGZvciBhbGwgdGhlIGRpZmZlcmVudCByb290IGVsZW1lbnRzXG4gICAgICB2YXIgbm9kZUxpc3QgPSBbXVxuICAgICAgZWFjaChlbHMsIGZ1bmN0aW9uIChfZWwpIHtcbiAgICAgICAgbm9kZUxpc3QucHVzaCgkJCh0YWdOYW1lLCBfZWwpKVxuICAgICAgfSlcbiAgICAgIGVscyA9IG5vZGVMaXN0XG4gICAgfVxuICAgIC8vIGdldCByaWQgb2YgdGhlIHRhZ05hbWVcbiAgICB0YWdOYW1lID0gMFxuICB9XG5cbiAgaWYgKGVscy50YWdOYW1lKVxuICAgIHB1c2hUYWdzKGVscylcbiAgZWxzZVxuICAgIGVhY2goZWxzLCBwdXNoVGFncylcblxuICByZXR1cm4gdGFnc1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbGwgdGhlIHRhZ3MgaW5zdGFuY2VzIGNyZWF0ZWRcbiAqIEByZXR1cm5zIHsgQXJyYXkgfSBhbGwgdGhlIHRhZ3MgaW5zdGFuY2VzXG4gKi9cbnJpb3QudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBlYWNoKF9fdmlydHVhbERvbSwgZnVuY3Rpb24odGFnKSB7XG4gICAgdGFnLnVwZGF0ZSgpXG4gIH0pXG59XG5cbi8qKlxuICogRXhwb3J0IHRoZSBUYWcgY29uc3RydWN0b3JcbiAqL1xucmlvdC5UYWcgPSBUYWdcbiAgLy8gc3VwcG9ydCBDb21tb25KUywgQU1EICYgYnJvd3NlclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFRfT0JKRUNUKVxuICAgIG1vZHVsZS5leHBvcnRzID0gcmlvdFxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBUX0ZVTkNUSU9OICYmIHR5cGVvZiBkZWZpbmUuYW1kICE9PSBUX1VOREVGKVxuICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuICh3aW5kb3cucmlvdCA9IHJpb3QpIH0pXG4gIGVsc2VcbiAgICB3aW5kb3cucmlvdCA9IHJpb3RcblxufSkodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHZvaWQgMCk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yaW90L3Jpb3QuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy9zcmM6IHNyYy9hcnRpY2xlLnRhZ1xucmlvdC50YWcyKCd3ZXVpLWFydGljbGUnLCAnPHlpZWxkPjwveWllbGQ+JywgJycsICdjbGFzcz1cIndldWlfYXJ0aWNsZVwiJywgZnVuY3Rpb24ob3B0cykge1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcnRpY2xlLnRhZ1xuICoqLyIsIi8vc3JjOiBzcmMvYWN0aW9uLXNoZWV0LnRhZ1xucmlvdC50YWcyKCd3ZXVpLWFjdGlvbi1zaGVldCcsICc8ZGl2IGNsYXNzPVwid2V1aV9tYXNrX3RyYW5zaXRpb24ge3dldWlfZmFkZV90b2dnbGU6IG9wdHMuc2hvd31cIiBzaG93PVwie29wdHMuc2hvd31cIiBvbmNsaWNrPVwie29wdHMub25jbG9zZX1cIj48L2Rpdj4gPGRpdiBjbGFzcz1cIndldWlfYWN0aW9uc2hlZXQge3dldWlfYWN0aW9uc2hlZXRfdG9nZ2xlOiBvcHRzLnNob3d9XCI+IDxkaXYgY2xhc3M9XCJ3ZXVpX2FjdGlvbnNoZWV0X21lbnVcIj4gPHlpZWxkPjwveWllbGQ+IDwvZGl2PiA8ZGl2IGNsYXNzPVwid2V1aV9hY3Rpb25zaGVldF9hY3Rpb25cIj4gPHdldWktYWN0aW9uLXNoZWV0LWNlbGwgb25jbGljaz1cIntvcHRzLm9uY2xvc2V9XCI+5Y+W5raIPC93ZXVpLWFjdGlvbi1zaGVldC1jZWxsPiA8L2Rpdj4gPC9kaXY+JywgJ3dldWktYWN0aW9uLXNoZWV0IC53ZXVpX21hc2tfdHJhbnNpdGlvbixbcmlvdC10YWc9XCJ3ZXVpLWFjdGlvbi1zaGVldFwiXSAud2V1aV9tYXNrX3RyYW5zaXRpb257ZGlzcGxheTpibG9ja30nLCAnJywgZnVuY3Rpb24ob3B0cykge1xuXCJ1c2Ugc3RyaWN0XCI7XG59LCAneyB9Jyk7XG5cbnJpb3QudGFnMignd2V1aS1hY3Rpb24tc2hlZXQtY2VsbCcsICc8eWllbGQ+PC95aWVsZD4nLCAnd2V1aS1hY3Rpb24tc2hlZXQtY2VsbCxbcmlvdC10YWc9XCJ3ZXVpLWFjdGlvbi1zaGVldC1jZWxsXCJde2Rpc3BsYXk6YmxvY2t9JywgJ2NsYXNzPVwid2V1aV9hY3Rpb25zaGVldF9jZWxsXCInLCBmdW5jdGlvbihvcHRzKSB7XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbi1zaGVldC50YWdcbiAqKi8iLCIvL3NyYzogZXhhbXBsZS9hcHAudGFnXG5yaW90LnRhZzIoJ2FwcCcsICc8YXJ0aWNsZT4gPGgyPkFydGljbGUgdGl0bGU8L2gyPiA8L2FydGljbGU+IDxidXR0b24gY2xhc3M9XCJ3ZXVpX2J0biB3ZXVpX2J0bl9wcmltYXJ5XCIgb25jbGljaz1cIntvcGVuQWN0aW9uU2hlZXR9XCI+5omT5byAIEFjdGlvbiBTaGVldDwvYnV0dG9uPiA8d2V1aS1hY3Rpb24tc2hlZXQgc2hvdz1cIntzaG93QWN0aW9uU2hlZXR9XCIgb25jbG9zZT1cIntjbG9zZUFjdGlvblNoZWV0fVwiPiA8d2V1aS1hY3Rpb24tc2hlZXQtY2VsbCBvbmNsaWNrPVwie3BhcmVudC5jbGlja0FjdGlvblNoZWV0TWVudTB9XCI+IDxpPuWFs+mXrSBBY3Rpb24gU2hlZXQ8L2k+IDwvd2V1aS1hY3Rpb24tc2hlZXQtY2VsbD4gPHdldWktYWN0aW9uLXNoZWV0LWNlbGwgb25jbGljaz1cIntwYXJlbnQuY2xpY2tBY3Rpb25TaGVldE1lbnUxfVwiPiA8Yj7oj5zljZXkuIA8L2I+IDwvd2V1aS1hY3Rpb24tc2hlZXQtY2VsbD4gPHdldWktYWN0aW9uLXNoZWV0LWNlbGwgb25jbGljaz1cIntwYXJlbnQuY2xpY2tBY3Rpb25TaGVldE1lbnUyfVwiPiA8aT7oj5zljZXkuow8L2k+IDwvd2V1aS1hY3Rpb24tc2hlZXQtY2VsbD4gPC93ZXVpLWFjdGlvbi1zaGVldD4nLCAnJywgJycsIGZ1bmN0aW9uKG9wdHMpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF90aGlzID0gdGhpcztcblxuLyoqXG4gKiBBY3Rpb24gU2hlZXRcbiAqL1xuXG50aGlzLnNob3dBY3Rpb25TaGVldCA9IGZhbHNlO1xudGhpcy5vcGVuQWN0aW9uU2hlZXQgPSBmdW5jdGlvbiAoZSkge1xuICBfdGhpcy5zaG93QWN0aW9uU2hlZXQgPSB0cnVlO1xuICBjb25zb2xlLmxvZygn5omT5byAIEFjdGlvbiBTaGVldCcpO1xufTtcbnRoaXMuY2xvc2VBY3Rpb25TaGVldCA9IGZ1bmN0aW9uIChlKSB7XG4gIF90aGlzLnNob3dBY3Rpb25TaGVldCA9IGZhbHNlO1xuICBjb25zb2xlLmxvZygn5YWz6ZetIEFjdGlvbiBTaGVldCcpO1xufTtcbnRoaXMuY2xpY2tBY3Rpb25TaGVldE1lbnUwID0gZnVuY3Rpb24gKGUpIHtcbiAgYWxlcnQoJ+eCueWHu+WFs+mXrSBBY3Rpb24gU2hlZXQnKTtcbiAgX3RoaXMuc2hvd0FjdGlvblNoZWV0ID0gZmFsc2U7XG59O1xudGhpcy5jbGlja0FjdGlvblNoZWV0TWVudTEgPSBmdW5jdGlvbiAoZSkge1xuICBhbGVydCgn54K55Ye76I+c5Y2V5LiAJyk7XG59O1xudGhpcy5jbGlja0FjdGlvblNoZWV0TWVudTIgPSBmdW5jdGlvbiAoZSkge1xuICBhbGVydCgn54K55Ye76I+c5Y2V5LqMJyk7XG59O1xufSwgJ3sgfScpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlL2FwcC50YWdcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
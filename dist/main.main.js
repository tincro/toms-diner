/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/main-content.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainContent)
/* harmony export */ });

function mainContent () {
   
/* 
    <div id="main-desc">

        <p> 
            This place is the best diner in the Midwest. Folks come from miles around to eat here.
            Even when passing through, this local grub-hub is the diamond in the rough that is a pleasant surprise to any adventure.
        </p>
    </div>

*/
    const mainContentWrapper = document.createElement('div');

    mainContentWrapper.id = "main-desc";

    const blurb = document.createElement('p');
    blurb.innerText = `This place is the best diner in the Midwest. Folks come from miles around to eat here.
    Even when passing through, this local grub-hub is the diamond in the rough that is a pleasant surprise to any adventure.`;
    
    mainContentWrapper.appendChild(blurb);

    return mainContentWrapper;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tYWluLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0xlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvbXMtZGluZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9tcy1kaW5lci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9tcy1kaW5lci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvbXMtZGluZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b21zLWRpbmVyLy4vc3JjL21haW4tY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbkNvbnRlbnQgKCkge1xuICAgXG4vKiBcbiAgICA8ZGl2IGlkPVwibWFpbi1kZXNjXCI+XG5cbiAgICAgICAgPHA+IFxuICAgICAgICAgICAgVGhpcyBwbGFjZSBpcyB0aGUgYmVzdCBkaW5lciBpbiB0aGUgTWlkd2VzdC4gRm9sa3MgY29tZSBmcm9tIG1pbGVzIGFyb3VuZCB0byBlYXQgaGVyZS5cbiAgICAgICAgICAgIEV2ZW4gd2hlbiBwYXNzaW5nIHRocm91Z2gsIHRoaXMgbG9jYWwgZ3J1Yi1odWIgaXMgdGhlIGRpYW1vbmQgaW4gdGhlIHJvdWdoIHRoYXQgaXMgYSBwbGVhc2FudCBzdXJwcmlzZSB0byBhbnkgYWR2ZW50dXJlLlxuICAgICAgICA8L3A+XG4gICAgPC9kaXY+XG5cbiovXG4gICAgY29uc3QgbWFpbkNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtYWluQ29udGVudFdyYXBwZXIuaWQgPSBcIm1haW4tZGVzY1wiO1xuXG4gICAgY29uc3QgYmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYmx1cmIuaW5uZXJUZXh0ID0gYFRoaXMgcGxhY2UgaXMgdGhlIGJlc3QgZGluZXIgaW4gdGhlIE1pZHdlc3QuIEZvbGtzIGNvbWUgZnJvbSBtaWxlcyBhcm91bmQgdG8gZWF0IGhlcmUuXG4gICAgRXZlbiB3aGVuIHBhc3NpbmcgdGhyb3VnaCwgdGhpcyBsb2NhbCBncnViLWh1YiBpcyB0aGUgZGlhbW9uZCBpbiB0aGUgcm91Z2ggdGhhdCBpcyBhIHBsZWFzYW50IHN1cnByaXNlIHRvIGFueSBhZHZlbnR1cmUuYDtcbiAgICBcbiAgICBtYWluQ29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoYmx1cmIpO1xuXG4gICAgcmV0dXJuIG1haW5Db250ZW50V3JhcHBlcjtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
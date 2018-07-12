!function(e,t){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.compiled.js"],t);else if("undefined"!=typeof exports)t(require("../rhelement/rhelement.compiled.js"));else{t(e.rhelementCompiled),e.rhAccordion={}}}(this,function(e){"use strict";var t,n=(t=e)&&t.__esModule?t:{default:t};function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var o=function e(t,n,a){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,a)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(a):void 0},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(){return Math.random().toString(36).substr(2,9)}Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var a=arguments[1],r=0;r<n;){var i=t[r];if(e.call(a,i,r,t))return r;r++}return-1}});var c=document.createElement("template");c.innerHTML='\n<style>:host {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  margin: 0; }\n\n:host(cp-accordion[data-theme="striped"]) ::slotted(cp-accordion-heading.even) {\n  background-color: var(--white, white); }</style>\n<slot></slot>\n';var u=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"rh-accordion",c))}return s(t,n.default),l(t,null,[{key:"observedAttributes",get:function(){return["data-theme"]}}]),l(t,[{key:"connectedCallback",value:function(){var e=this;o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.setAttribute("role","presentation"),this.setAttribute("defined",""),this.addEventListener("rh-accordion-change",this._changeHandler),this.addEventListener("keydown",this._keydownHandler),Promise.all([customElements.whenDefined("rh-accordion-header"),customElements.whenDefined("rh-accordion-panel")]).then(function(){e._allHeaders().forEach(function(t){var n=e._panelForHeader(t);t.setAttribute("aria-controls",n.id),n.setAttribute("aria-labelledby",t.id)})})}},{key:"disconnectedCallback",value:function(){this.removeEventListener("rh-accordion-change",this._changeHandler),this.removeEventListener("keydown",this._keydownHandler)}},{key:"attributeChangedCallback",value:function(e,t,n){if("data-theme"===e){var r=this.querySelectorAll("rh-accordion-header");"striped"===n?[].concat(a(r)).forEach(function(e,t){var n=t%2?"even":"odd";e.classList.add(n)}):[].concat(a(r)).forEach(function(e,t){e.classList.remove("even","odd")})}}},{key:"toggle",value:function(e){var t=this._allHeaders(),n=this._allPanels(),a=t[e],r=n[e];a&&r&&(a.expanded?(this._collapseHeader(a),this._collapsePanel(r)):(this._expandHeader(a),this._expandPanel(r)))}},{key:"expand",value:function(e){var t=this._allHeaders(),n=this._allPanels(),a=t[e],r=n[e];a&&r&&(this._expandHeader(a),this._expandPanel(r))}},{key:"expandAll",value:function(){var e=this,t=this._allHeaders(),n=this._allPanels();t.forEach(function(t){return e._expandHeader(t)}),n.forEach(function(t){return e._expandPanel(t)})}},{key:"collapse",value:function(e){var t=this._allHeaders(),n=this._allPanels(),a=t[e],r=n[e];a&&r&&(this._collapseHeader(a),this._collapsePanel(r))}},{key:"collapseAll",value:function(){var e=this,t=this._allHeaders(),n=this._allPanels();t.forEach(function(t){return e._collapseHeader(t)}),n.forEach(function(t){return e._collapsePanel(t)})}},{key:"_changeHandler",value:function(e){if(!this.classList.contains("animating")){var t=e.target,n=e.target.nextElementSibling;e.detail.expanded?(this._expandHeader(t),this._expandPanel(n)):(this._collapseHeader(t),this._collapsePanel(n))}}},{key:"_toggle",value:function(e,t){}},{key:"_expandHeader",value:function(e){e.expanded=!0}},{key:"_expandPanel",value:function(e){if(!e.expanded){e.expanded=!0;var t=e.getBoundingClientRect().height;this._animate(e,0,t)}}},{key:"_collapseHeader",value:function(e){e.expanded=!1}},{key:"_collapsePanel",value:function(e){if(e.expanded){var t=e.getBoundingClientRect().height;e.expanded=!1,this._animate(e,t,0)}}},{key:"_animate",value:function(e,t,n){var a=this;e.classList.add("animating"),e.style.height=t+"px",requestAnimationFrame(function(){requestAnimationFrame(function(){e.style.height=n+"px",e.classList.add("animating"),e.addEventListener("transitionend",a._transitionEndHandler)})})}},{key:"_keydownHandler",value:function(e){var t=e.target;if(this._isHeader(t)){var n=void 0;switch(e.key){case"ArrowDown":case"Down":case"ArrowRight":case"Right":n=this._nextHeader();break;case"ArrowUp":case"Up":case"ArrowLeft":case"Left":n=this._previousHeader();break;case"Home":n=this._firstHeader();break;case"End":n=this._lastHeader();break;default:return}n.shadowRoot.querySelector("button").focus()}}},{key:"_transitionEndHandler",value:function(e){e.target.style.height="",e.target.classList.remove("animating"),e.target.removeEventListener("transitionend",this._transitionEndHandler)}},{key:"_allHeaders",value:function(){return[].concat(a(this.querySelectorAll(f.is)))}},{key:"_allPanels",value:function(){return[].concat(a(this.querySelectorAll(v.is)))}},{key:"_panelForHeader",value:function(e){var t=e.nextElementSibling;if(t.tagName.toLowerCase()===v.is)return t;console.error("Sibling element to a header needs to be a panel")}},{key:"_previousHeader",value:function(){var e=this._allHeaders();return e[(e.findIndex(function(e){return e===document.activeElement})-1+e.length)%e.length]}},{key:"_nextHeader",value:function(){var e=this._allHeaders();return e[(e.findIndex(function(e){return e===document.activeElement})+1)%e.length]}},{key:"_firstHeader",value:function(){return this._allHeaders()[0]}},{key:"_lastHeader",value:function(){var e=this._allHeaders();return e[e.length-1]}},{key:"_isHeader",value:function(e){return"rh-accordion-header"===e.tagName.toLowerCase()}}]),t}();window.customElements.define("rh-accordion",u);var h=document.createElement("template");h.innerHTML='\n  <style>\n    :host {\n  display: block;\n  background: var(--gray-nimbus, #ededed); }\n\n:host(.animating) {\n  transition: transform 0.3s ease-in-out; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 1px; }\n\nbutton {\n  padding: 10px;\n  margin: 0;\n  border: 1px solid transparent;\n  font-family: inherit;\n  font-size: 16px;\n  line-height: 1.5;\n  min-height: 3em;\n  height: auto;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n  background: none; }\n\nbutton:focus {\n  outline: 1px solid blue; }\n\nbutton::-moz-focus-inner {\n  border: 0; }\n\n[aria-expanded] {\n  position: relative;\n  display: block;\n  font-weight: normal;\n  padding-left: 2.5em; }\n\n[aria-expanded="false"]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: calc(10px + 0.5em);\n  display: block;\n  border-style: solid;\n  border-width: 0.15em 0.15em 0 0;\n  height: 0.35em;\n  width: 0.35em;\n  transform: rotate(45deg);\n  margin-left: 1em;\n  text-align: center;\n  transition: transform 0.15s; }\n\n[aria-expanded="true"]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: calc(10px + 0.5em);\n  display: block;\n  width: 0.35em;\n  height: 0.35em;\n  border-style: solid;\n  border-width: 0.15em 0.15em 0 0;\n  margin-left: 1em;\n  text-align: center;\n  transition: all 0.15s;\n  transform: rotate(135deg); }\n\n  </style>\n  <button aria-expanded="false" role="tab"></button>\n';var f=function(e){function t(){r(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t.is,h));return e._clickHandler=e._clickHandler.bind(e),e}return s(t,n.default),l(t,null,[{key:"is",get:function(){return"rh-accordion-header"}},{key:"observedAttributes",get:function(){return["aria-expanded"]}}]),l(t,[{key:"connectedCallback",value:function(){o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.hasAttribute("role")||this.setAttribute("role","header"),this.id||(this.id=t.is+"-"+d()),this.button=this.shadowRoot.querySelector("button");var e=this.children[0],n=!1;if(e){switch(e.tagName){case"H1":case"H2":case"H3":case"H4":case"H5":case"H6":n=!0}var a=document.createElement(e.tagName);this.button.innerText=e.innerText,a.appendChild(this.button),this.shadowRoot.appendChild(a)}else this.button.innerText=this.textContent.trim();n||console.warn("The first child in the light DOM must be a Header level tag (h1, h2, h3, h4, h5, or h6)"),this.addEventListener("click",this._clickHandler)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._clickHandler)}},{key:"_clickHandler",value:function(e){this.dispatchEvent(new CustomEvent("rh-accordion-change",{detail:{expanded:!this.expanded},bubbles:!0}))}},{key:"expanded",get:function(){return this.hasAttribute("aria-expanded")},set:function(e){(e=Boolean(e))?(this.setAttribute("aria-expanded",!0),this.button.setAttribute("aria-expanded",!0)):(this.removeAttribute("aria-expanded"),this.button.setAttribute("aria-expanded",!1))}}]),t}();window.customElements.define(f.is,f);var p=document.createElement("template");p.innerHTML='\n  <style>\n    :host {\n  display: none;\n  overflow: hidden;\n  background: white;\n  will-change: height; }\n\n:host([expanded]) {\n  display: block; }\n\n:host(.animating) {\n  display: block;\n  transition: height 0.3s ease-in-out; }\n\n.container {\n  border: 2px solid #f7f7f7;\n  border-top: none;\n  padding: 20px; }\n\n  </style>\n  <div tabindex="-1" role="tabpanel">\n  <div class="container">\n    <slot></slot>\n  </div>\n</div>\n';var v=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t.is,p))}return s(t,n.default),l(t,null,[{key:"is",get:function(){return"rh-accordion-panel"}}]),l(t,[{key:"connectedCallback",value:function(){o(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.hasAttribute("role")||this.setAttribute("role","region"),this.id||(this.id=t.is+"-"+d())}},{key:"expanded",get:function(){return this.hasAttribute("expanded")},set:function(e){Boolean(e)?this.setAttribute("expanded",""):this.removeAttribute("expanded")}}]),t}();window.customElements.define(v.is,v)});
!function(){var t={buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]")};t.buttonStart.addEventListener("click",(function(){e=setInterval(n,1e3),t.buttonStart.setAttribute("disabled",!0)})),t.buttonStop.addEventListener("click",(function(){clearInterval(e),t.buttonStart.removeAttribute("disabled")}));var e=null;function n(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}}();
//# sourceMappingURL=01-color-switcher.c6d7fb4d.js.map

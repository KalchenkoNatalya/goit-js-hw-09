const t={buttonStart:document.querySelector("[data-start]"),buttonStop:document.querySelector("[data-stop]")};t.buttonStart.addEventListener("click",(function(){e=setInterval(o,1e3),t.buttonStart.setAttribute("disabled",!0)})),t.buttonStop.addEventListener("click",(function(){clearInterval(e),t.buttonStart.removeAttribute("disabled")}));let e=null;function o(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}
//# sourceMappingURL=01-color-switcher.cabcc82f.js.map

!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,e.disabled=!0})),t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)}));var a=null}();
//# sourceMappingURL=01-color-switcher.45231b45.js.map
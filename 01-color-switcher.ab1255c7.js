const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");t.addEventListener("click",(function(){clearInterval(d),a()})),e.addEventListener("click",(function(){a(),d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)}));let d=null;function a(){!e.disabled&&t.disabled?(e.disabled=!0,t.disabled=!1):(e.disabled=!1,t.disabled=!0)}t.disabled=!0;
//# sourceMappingURL=01-color-switcher.ab1255c7.js.map

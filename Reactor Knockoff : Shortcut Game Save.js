// ==UserScript==
// @name         Reactor Knockoff : Shortcut Game Save
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       nyannyaru
// @match        *://cwmonkey.github.io/reactor-knockoff/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const keys = [];
    const disableKey = key => keys.push(key);
    ['keypress', 'keydown', 'keyup'].forEach(type=>{
        document.addEventListener(type, e=>{
            if(keys.indexOf(e.key) !== -1) return e.preventDefault();
        });
    });
    disableKey('s');

    window.addEventListener("keydown",function(evt){
        if(evt.ctrlKey && evt.key === "s"){
            document.getElementById("trigger_save").click();
        }
    });
})();

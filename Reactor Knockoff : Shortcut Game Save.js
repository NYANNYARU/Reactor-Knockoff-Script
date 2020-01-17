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

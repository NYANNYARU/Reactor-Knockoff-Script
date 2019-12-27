// ==UserScript==
// @name         Reactor Knockoff : Protium Auto Buy Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       nyannyaru
// @match        *://cwmonkey.github.io/reactor-knockoff/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var SWITCH = "OFF"
    const btn = document.createElement("button");
    btn.setAttribute("id","protium_auto_buy");
    btn.innerHTML = `ProtiumCellAutoBuy : ${SWITCH}`;
    btn.style.displey = "flex";
    btn.addEventListener("click",function(){
        if(SWITCH == "OFF"){
            SWITCH = "ON";
            btn.innerHTML = `ProtiumCellAutoBuy : ${SWITCH}`;
        } else if(SWITCH == "ON"){
            SWITCH = "OFF";
            btn.innerHTML = `ProtiumCellAutoBuy : ${SWITCH}`;
        }
    });
    document.getElementById("auto_buy_toggle").after(btn);

    var actived;
    setInterval(function(){
        var protium_tile = document.getElementsByClassName("tile enabled part_protium3 category_cell spent");
        var protium_tile1 = document.getElementsByClassName("tile enabled part_protium2 category_cell spent");
        var protium_tile2 = document.getElementsByClassName("tile enabled part_protium1 category_cell spent");
        if(SWITCH == "ON"){
            if(document.getElementById("parts").getElementsByClassName("part_active")[0]){
                actived = document.getElementById("parts").getElementsByClassName("part_active")[0];
            }
            for(var i = 0; i < protium_tile.length; i++){
                if(document.getElementsByClassName("part part_protium3")[0].className === "part part_protium3"){
                    document.getElementsByClassName("part part_protium3")[0].click();
                    protium_tile[i].click();
                    actived.click();
                } else if(document.getElementsByClassName("part part_protium3")[0].className === "part part_protium3 part_active"){
                    protium_tile[i].click();
                    actived.click();
                }
            }
            for(var i1 = 0; i1 < protium_tile1.length; i1++){
                if(document.getElementsByClassName("part part_protium2")[0].className === "part part_protium2"){
                    document.getElementsByClassName("part part_protium2")[0].click();
                    protium_tile1[i1].click();
                    actived.click();
                } else if(document.getElementsByClassName("part part_protium2")[0].className === "part part_protium2 part_active"){
                    protium_tile1[i1].click();
                    actived.click();
                }
            }
            for(var i2 = 0; i2 < protium_tile2.length; i2++){
                if(document.getElementsByClassName("part part_protium1")[0].className === "part part_protium1"){
                    document.getElementsByClassName("part part_protium1")[0].click();
                    protium_tile2[i2].click();
                    actived.click();
                } else if(document.getElementsByClassName("part part_protium1")[0].className === "part part_protium1 part_active"){
                    protium_tile2[i2].click();
                    actived.click();
                }
            }
        }
    });
})();
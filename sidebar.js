"use strict";

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementsByClassName("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementsByClassName("main").style.marginLeft= "0";
}
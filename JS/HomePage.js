﻿
//Trulia Tabs - snippet from online

function openProperty(evt, propName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(propName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Click on Calc svg, open the popup
function clickPopup() {
    var popup = document.getElementById("calcPopup");
    popup.classList.toggle("show");
}
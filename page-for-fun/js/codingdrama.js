// variables
var x = document.getElementById("iframeId");
var y = document.getElementById("sectId");
var z = document.getElementById("orientationbtn");
var vert = document.getElementById("portrait");
var hori = document.getElementById("landscape");

/**
* check if the radio button is checked and if its true
* change the size of iframe to the corresponding size.
*/
function phoneView(){
    x.style.width = "320px";
    y.style.height = "480px";
    z.style.display = "block";
}
function tabletView(){
    x.style.width = "80%";
    y.style.height = "90%";
    z.style.display = "block";
}
function desktopView(){
    x.style.width = "100%";
    y.style.height = "90%";
    z.style.display = "none";
}

/**
 * checking orientation buttons, if clicked then 
 * change orientation sizes of the iframe preview
 */
/*function horizontalView(){
    var c;
    c = x.style.width;
    x.style.width = y.style.height;
    y.style.height = c;
}*/
function openTab(evt, tabName){
    //variable
    var i, tabcontent, tablinks;

    //get all elements from class
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");

    //looping thru the classes
    //tbacontent
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    //tablinks
    for(i = 0; tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Showing the current tab, and add active to the button that opened that tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    
}
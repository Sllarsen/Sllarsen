
//hide the elements
function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
//change the css of the active tab
function isToggled(number) {
    document.getElementById("button1").style.backgroundColor = "white";
    document.getElementById("button2").style.backgroundColor = "white";
    document.getElementById("button3").style.backgroundColor = "white";
    document.getElementById("button1").style.transform = "translateY(0px)";
    document.getElementById("button2").style.transform = "translateY(0px)";
    document.getElementById("button3").style.transform = "translateY(0px)";
    document.getElementById("button1").style["boxShadow"] = "0 9px #999";
    document.getElementById("button2").style["boxShadow"] = "0 9px #999";
    document.getElementById("button3").style["boxShadow"] = "0 9px #999";
    document.getElementById("bodyAll").style.backgroundImage = "none";
    document.getElementById("allTabs").style.backgroundImage = "url('none')";
    document.getElementById("button2").style.color = "black";

    if (number == 1) {
        document.getElementById("button1").style.backgroundColor = "#4B7F52";
        document.getElementById("button1").style.transform = "translateY(10px)";
        document.getElementById("button1").style["boxShadow"] = "0 0 5px #999999";
    }
    else if (number == 2) {
        document.getElementById("allTabs").style.backgroundImage = "url('https://thumbs.dreamstime.com/b/corkboard-texture-background-20627837.jpg')";
        document.getElementById("bodyAll").style.backgroundImage = "url('https://thumbs.dreamstime.com/b/corkboard-texture-background-20627837.jpg')";
        document.getElementById("button2").style.backgroundColor = "#4B4237";
        document.getElementById("button2").style.transform = "translateY(10px)";
        document.getElementById("button2").style.color = "white";
        document.getElementById("button2").style["boxShadow"] = "0 0 5px #999999";
    }
    else {
        document.getElementById("button3").style.backgroundColor = "#4B7F52";
        document.getElementById("button3").style.transform = "translateY(10px)";
        document.getElementById("button3").style["boxShadow"] = "0 0 5px #999999";
    }
}
//changes the background color of the picture page

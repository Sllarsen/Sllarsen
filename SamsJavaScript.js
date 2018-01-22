
//hide the elements
function openTab(tabName)
{
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
//change the css of the active tab
function isToggled(number)
{
    document.getElementById("button1").style.backgroundColor = "green";
    document.getElementById("button2").style.backgroundColor = "green";
    document.getElementById("button3").style.backgroundColor = "green";
    document.getElementById("button1").style.transform = "translateY(0px)";
    document.getElementById("button2").style.transform = "translateY(0px)";
    document.getElementById("button3").style.transform = "translateY(0px)";

        if (number == 1)
        {
            document.getElementById("button1").style.backgroundColor = "#A569BD";
            document.getElementById("button1").style.transform = "translateY(10px)";
        }
        else if (number == 2)
        {
            document.getElementById("button2").style.backgroundColor = "#A569BD";
            document.getElementById("button2").style.transform = "translateY(10px)";
        }
        else
        {
            document.getElementById("button3").style.backgroundColor = "#A569BD";
            document.getElementById("button3").style.transform = "translateY(10px)";
        }
}


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
    document.getElementById("button1").style.backgroundColor = "white";
    document.getElementById("button2").style.backgroundColor = "white";
    document.getElementById("button3").style.backgroundColor = "white";
    document.getElementById("button1").style.transform = "translateY(0px)";
    document.getElementById("button2").style.transform = "translateY(0px)";
    document.getElementById("button3").style.transform = "translateY(0px)";
    document.getElementById("bodyAll").style.backgroundImage = "none";
    document.getElementById("allTabs").style.backgroundImage = "url('none')";




        if (number == 1)
        {
            document.getElementById("button1").style.backgroundColor = "#A569BD";
            document.getElementById("button1").style.transform = "translateY(10px)";
        }
        else if (number == 2)
        {
          document.getElementById("allTabs").style.backgroundImage = "url('http://xboxhut.com/wp-content/uploads/2016/06/cork-board-background-template-traditional-compact.jpg')";
          document.getElementById("bodyAll").style.backgroundImage = "url('http://xboxhut.com/wp-content/uploads/2016/06/cork-board-background-template-traditional-compact.jpg')";
          document.getElementById("button2").style.backgroundColor = "#A569BD";
          document.getElementById("button2").style.transform = "translateY(10px)";
        }
        else
        {
            document.getElementById("button3").style.backgroundColor = "#A569BD";
            document.getElementById("button3").style.transform = "translateY(10px)";
        }
}
//changes the background color of the picture page

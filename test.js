window.onscroll = function () {

    if (document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.background = "black";
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.color = "white";
        document.getElementById("navbar-right").style.color = "white";
    }
    else {
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.padding = "90px 10px";
        document.getElementById("logo").style.color = "black";
        document.getElementById("navbar-right").style.color = "black";
    }


}
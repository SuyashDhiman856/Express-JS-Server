document.getElementById("train").addEventListener("click", function() {
    document.getElementById("bus").style.color = "rgb(0, 0, 0)";
    document.getElementById("train").style.color = "red";
    document.getElementsByClassName("banner-container")[0].querySelector("img").src = "assets/train_banner.png";
    document.getElementById("name_change").innerHTML ="India's No.1 Online Train Ticket Booking Site";
    document.getElementById("change_name").innerHTML ="GOVERNMENT TRAINS";
});

document.getElementById("bus").addEventListener("click", function() {
    document.getElementById("train").style.color = "rgb(0, 0, 0)";
    document.getElementById("bus").style.color = "red";
    document.getElementsByClassName("banner-container")[0].querySelector("img").src = "assets/bu_banner.png";
    document.getElementById("name_change").innerHTML ="India's No.1 Online Bus Ticket Booking Site";
    document.getElementById("change_name").innerHTML ="GOVERNMENT BUSES";

});
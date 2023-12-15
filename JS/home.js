function openNav() {
    document.getElementById("sidebar").style.left = "0";
    document.getElementById("bars").style.display = "none";
    document.getElementById("times").style.display = "block";
}

function closeNav() {
    document.getElementById("sidebar").style.left = "-210px";
    document.getElementById("bars").style.display = "block";
    document.getElementById("times").style.display = "none";
}

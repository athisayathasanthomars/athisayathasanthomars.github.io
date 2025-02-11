document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

var text = " Thomars Thuvarangan | ";
  var speed = 300; 
  
  function scrollTitle() {
    document.title = text;
    text = text.substring(1) + text.charAt(0);
    setTimeout(scrollTitle, speed);
  }

  scrollTitle();
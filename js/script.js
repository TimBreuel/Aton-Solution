function mobileNavMenuJs() {
    let x = document.getElementById('mobile-nav-menu-js');
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }  
}

 let myButton = document.getElementById('myBtn');

 window.onscroll = function() {
     scrollFunction()
 };
 function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
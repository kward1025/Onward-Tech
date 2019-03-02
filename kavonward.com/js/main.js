// we are using Jquery library to handle the javascript
// you can read up on it here: http://jqfundamentals.com/chapter/jquery-basics
// Basically, when we use jquery, it makes it very easy to grab
// different elements out of the DOM. So instead of writing something
// like document.getElementById("foo") we can write $("#foo"). 
// It is very cool and very powerful and is used WIDELY in websites.

// you start off using jquery by doing what we do below.
// all of the stuff that you want to do with jquery goes
// within the function brackets. 
$(function(){
    // When you put want to see something in javascript, you 
    // can put console.log(<whatever you want>) and it will 
    // show up on the inspector panel. 
    console.log("Welcome to Kavon Ward.com!");
    
    //so what we are doing here is targeting all of the 
    // LIs that have a class of 'main-menu-item' and adding
    // a event listener that will trigger the function when
    // the user mouses over the LI.
    $('li.main-menu-item').on('mouseover', function(e){
        // each time a user's mouse goves over the LI, 
        // then what we are telling the program to do is 
        // look for the child element's of that LI that are
        // anchor tags and then to add the class "dark-blue-bg"
        // to them.

        //the $(this) refers to the LI that we attached the
        //event listener to before. 
        $(this).children('a').addClass("dark-blue-bg");
        $(this).children('.submenu').show();
    });

    //so what we are doing here is targeting all of the 
    // LIs that have a class of 'main-menu-item' and adding
    // a event listener that will trigger the function when
    // the user's mouse goes away from the LI.
    $('li.main-menu-item').on('mouseout', function(e){
        // basically the same thing that we are doing
        // in the previous function, but this time 
        // we are removing the "dark-blue-bg" class. 
        $(this).children('a').removeClass("dark-blue-bg");
        $(this).children('.submenu').hide();
    });


    $('.print-button').on('click', function(){
      window.print();  
    });

    //var slideIndex = 0;
    ;
    var slides = $(".mySlides");
    console.log(slides);
    showSlides(0, slides);
    $('.dot').on('click', function(evt){
      console.log($(this).data('slide-number'));
    });
    // function plusSlides(n) {
    //   showSlides(slideIndex += n);
    // }

    // function currentSlide(n) {
    //   showSlides(slideIndex = n);
    // }

    function showSlides(n, slides) {
      var i;
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1} 
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[n].style.display = "block"; 
      dots[n].className += " active";
    }
});

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }
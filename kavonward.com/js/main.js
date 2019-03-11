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

    var slideIndex = 0;
    var slides = $(".mySlides");

    showSlides(0, slides);
    $('.dot').on('click', function(evt){
      var n = $(this).data('slide-number');
      slideIndex = showSlides(n, slides);
    });
    $('.next').on('click', plusSlides)
    $('.prev').on('click', minusSlides)
    function plusSlides() {
      slideIndex = showSlides(slideIndex += 1, slides);
    }

    function minusSlides() {
      slideIndex = showSlides(slideIndex -= 1, slides);
    }

    function showSlides(n, slides) {
      var i;
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length - 1) {n = 0} 
      if (n < 0) {n = slides.length - 1}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[n].style.display = "block"; 
      dots[n].className += " active";
      return n;
    }

    setInterval(function(){
      plusSlides()
    }, 2000);

    var $grid = $('.masonry-grid').masonry({
      itemSelector: '.masonry-grid-item',
      percentPosition: true,
      columnWidth: '.masonry-grid-sizer'
    });

    $grid.imagesLoaded().progress(function(){
      $grid.masonry();
    });

    
});
console.log();
function onYouTubeIframeAPIReady(){

  // The first argument of YT.Player is an HTML element ID. YouTube API will replace my <div id="player"> tag with an iframe containing the youtube video.
  new YT.Player('vid1', {
      width: document.getElementById('vid1').offsetWidth -20,
      videoId : '6Dc1C77nra4'
  });
  new YT.Player('vid2', {
    width: document.getElementById('vid2').offsetWidth - 20,
    videoId : '6Dc1C77nra4'
  });
  new YT.Player('vid3', {
    width: document.getElementById('vid3').offsetWidth - 20,
    videoId : '6Dc1C77nra4'
  });

  // The first argument of YT.Player is an HTML element ID. YouTube API will replace my <div id="player"> tag with an iframe containing the youtube video.
  new YT.Player('vid4', {
    width: document.getElementById('vid4').offsetWidth -20,
    videoId : '6Dc1C77nra4'
});
new YT.Player('vid5', {
  width: document.getElementById('vid5').offsetWidth - 20,
  videoId : '6Dc1C77nra4'
});
new YT.Player('vid6', {
  width: document.getElementById('vid6').offsetWidth - 20,
  videoId : '6Dc1C77nra4'
});
}
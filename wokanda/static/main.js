$(function(){
   var selectedCategory = $("#Nav_Category ul li.selected").html();
   var selectedDecade = 1990;
   var first_load = true;
   console.log("the default category is " + selectedCategory);
   $("#Nav_Category ul li" ).on("click", function(e){
      $("#Nav_Category ul li.selected").removeClass("selected") 
      $(e.target).addClass("selected");
      selectedCategory = $(e.target).html();
      first_load = false;
      getNominees(first_load);
   })

   $("#Timeline .bar .bubbles").on("click", function(e){
      console.log(e.target);
      selectedDecade = $(e.target).html().substring(0,4);
      var prev = $("#Timeline .bar .bubbles_selected").removeClass("bubbles_selected");
      prev.addClass("bubbles");
      $(e.target).addClass("bubbles_selected");
      first_load = false;
      getNominees(first_load);
   })


   console.log(first_load);
   function getNominees(first_load){
      if(first_load == false){
         console.log(selectedCategory);
         console.log(selectedDecade);
         $.get("/query_nominees", 
               {category: selectedCategory, decade: selectedDecade}
            ).then((res) => {
               console.log(res);
               $(".returned").html("");
               $(".returned").html(res);
            }, (err) => {
               console.log(err);
         });
      }
   }
});


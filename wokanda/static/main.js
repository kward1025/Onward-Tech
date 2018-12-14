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
   })

   $("#Timeline .bar .bubbles").on("click", function(e){
      console.log(e.target);
      selectedDecade = $(e.target).html();
      var prev = $("#Timeline .bar .bubbles_selected").removeClass("bubbles_selected");
      prev.addClass("bubbles");
      $(e.target).addClass("bubbles_selected");
      first_load = false;
   })

   if(!first_load){
      console.log(selectedCategory);
      console.log(selectedDecade);
      $.get("/query_nominees", 
            {category: selectedCategory, decade: selectedDecade}
         ).then((res) => {
            console.log(res);
         }, (err) => {
            console.log(err);
      });
   }
});


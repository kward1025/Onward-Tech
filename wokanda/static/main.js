$(function(){
   var selectedCategory = $("#Nav_Category ul li.selected").html();
   var selectedDecade = 1990;
   console.log("the default category is " + selectedCategory);
   $("#Nav_Category ul li" ).on("click", function(e){
      $("#Nav_Category ul li.selected").removeClass("selected") 
      $(e.target).addClass("selected");
      selectedCategory = $(e.target).html();
      console.log(selectedCategory);
   })

   $("#Timeline .bar .bubbles").on("click", function(e){
      console.log(e.target);
      selectedDecade = $(e.target).html();
      console.log(selectedDecade);
   })
})


$(function(){
   var selectedCategory, selectedDecade, first_load;
   if(window.location.search != ""){
      var search = window.location.search.substr(1, window.location.search.length);
      var search_split = search.split("&");
      var keys = {};
      for( var i = 0; i < search_split.length; i++){
         var parts = search_split[i].split("=");
         keys[parts[0]] = parts[1];
      }

      if('category' in keys && 'decade' in keys){
         var menus = $("#Nav_Category ul li");
         for(var i = 0; i < menus.length; i++){
            if(menus[i].innerText == keys['category']){
               $("#Nav_Category ul li.selected").removeClass("selected");
               $(menus[i]).addClass("selected");
            }
         }

         var times = $("#Timeline .bar .bubbles");
         for(var i =0; i < times.length; i++){
            if(times[i].innerText.search(keys['decade']) == 0){
               var prev = $("#Timeline .bar .bubbles_selected").removeClass("bubbles_selected");
               prev.addClass("bubbles");
               $(times[i]).addClass("bubbles_selected");
            }
         }
      }

      selectedCategory = keys['category'];
      selectedDecade = keys['decade'];
      first_load = false;
      getNominees(first_load);
   }else{
   
      selectedCategory = $("#Nav_Category ul li.selected").html();
      selectedDecade = 1990;
      first_load = true;

   }
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
         $(".returned").html("<img src='/static/loading.gif' />")
         $.get("/query_nominees", 
               {category: selectedCategory, decade: selectedDecade}
            ).then((res) => {
               console.log(res);
               $(".returned").html("");
               $(".returned").html(res);
            }, (err) => {
               console.log(err);
               $(".returned").html("");
               alert("Something went wrong fetching the nominees! " + err );
         });
      }
   }
});


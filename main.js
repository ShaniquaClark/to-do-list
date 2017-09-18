var count=1;

//On submit for the button
$(".addToList").on("submit", function(e){
  userInput = $("#itemsField").val();
  event.preventDefault();
  //take the value out of the input field and put it into a list
        $("#itemsField").val("");
        $("ul").append("<li>"+userInput+"</li>");
        $("p span").html(count++);
    });

    //clear the list
$("#clearList").on("click",function(){
  $("li").detach();
  $("p span").html(count=0);
});

//completed list items
$("ul").on("click","li",function(){
  $(this).toggleClass("stroked");
});

//clear all completed list items
$("#clearCompleted").on("click",function(){
  //if you click clear completed button, all stroked list items disappear
  $(".stroked").detach();
  $("p span").html($("li").length);
});
//show the add remove BUTTONS

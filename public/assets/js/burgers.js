$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
  
      var newEatState = {
        devoured: newEat
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed devoured to", newEat);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });
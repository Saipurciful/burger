

$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var addBurger = {
      burger_name: $("#addburger")
        .val()
        .trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: addBurger
    }).then(function () {
      console.log("Added new burger");
      location.reload();
    });
  });

  $(".devoured").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredIt = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredIt
    }).then(function () {
      console.log("Burger devoured");
      location.reload();
    });
  });

});
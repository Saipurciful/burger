$(function () {
    $(".devoured-form").on("submit", function (event) {
        event.preventDefault();

        var burger_id = $(this).children(".burger_id").val();

        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then(function (data) {
            console.log("Burger devoured");
            location.reload();
        });
    });
});



$("input").keypress(function(event) {
    if (event.which === 13) {
        var input = $(this).val();
        $(this).val("");
        $("ul").append("<li>"+ input +"<div class='toggleMenu'><div class='done'>Done</div><div class='delete'>Delete</div></div></li>");
        console.log(input);
    }
})

$("#button").on("click", function() {
    var input = $("input").val();
    if (input != "") {
        $("input").val("");
        $("ul").append("<li>"+ input +"<div class='toggleMenu'><div class='done'>Done</div><div class='delete'>Delete</div></div></li>");
    }
});

$("ul").on("click", ".done", function(event) {
    $(this).parent().parent().fadeIn(600, function() {
        $(this).addClass("crossText");
    });
    $(this).siblings().css({marginLeft:"70px"});
    $(this).remove();
    event.stopPropagation();
})

$("ul").on("click", ".delete", function(event) {
    $(this).parent().parent().fadeOut(600, function() {
        $(this).remove();
    });
    event.stopPropagation();
});
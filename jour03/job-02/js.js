function func2(event) {
    const keys = event.key;
    if (keys) {
        $("#div").fadeToggle("fast");
    }
}
document.addEventListener("keydown", func2);

$("#button").dblclick(function () {
    $("#p").fadeToggle(1000);
});
// $("#button").mouseenter(function () {
//     console.log("mouseenter");
//     $("p").add("<p>Exercises</p>").appendTo(document.body);
// });
$("#button").hover(function () {
    console.log("mouseenter");
    $("#Image").show();
}, function () {
    console.log("mouseout");
    $("#Image").hide();
});

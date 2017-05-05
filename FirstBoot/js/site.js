$(function () {
    var $pick = $("#pick");
    $("#dropdown li a").on("click", function () {
        $pick.text(this.text);
    });
    $("#submit").tooltip();
    $(".carousel").carousel('cycle');
})();
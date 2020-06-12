$("#taskModal").css("display", "none");

$(document).ready(function() {
    $("#taskModal").modal("hide");

    // Stops modal from closing when clicked outside
    $("#taskModal").modal({
        backdrop: 'static',
        keyboard: false
    });

})

$("#timeModal").css("display", "none");

$(document).ready(function() {
    $("#timeModal").modal("hide");

    // Stops modal from closing when clicked outside
    $("#timeModal").modal({
        backdrop: 'static',
        keyboard: false
    });

})
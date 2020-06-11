$("#taskModal").css("display", "none");

$(document).ready(function() {
    $("#taskModal").modal("hide");

    // Stops modal from closing when clicked outside
    $("#taskModal").modal({
        backdrop: 'static',
        keyboard: false
    });

})
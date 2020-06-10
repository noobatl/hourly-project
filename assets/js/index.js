// Stops modal from closing when clicked outside


$(document).ready(function() {
    $("#taskModal").addClass('hide');

    $("#taskModal").modal({
        backdrop: 'static',
        keyboard: false
    });

})
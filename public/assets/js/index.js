$("#addTaskBtn").on("click", function () {
    
    $("#taskModal").css("display", "none");

    $(document).ready(function () {
        $("#taskModal").modal("hide");

        // Stops modal from closing when clicked outside
        $("#taskModal").modal({
            backdrop: 'static',
            keyboard: false
        });

    })
})

$("#addTimeBtn").on("click", function () {

    $("#timeModal").css("display", "none");

    $(document).ready(function () {
        $("#timeModal").modal("hide");

        // Stops modal from closing when clicked outside
        $("#timeModal").modal({
            backdrop: 'static',
            keyboard: false
        });

    })
})

$("#addMemberBtn").on("click", function () {

    $("#memberModal").css("display", "none");

    $(document).ready(function () {
        $("#memberModal").modal("hide");

        // Stops modal from closing when clicked outside
        $("#memberModal").modal({
            backdrop: 'static',
            keyboard: false
        });

    })
})
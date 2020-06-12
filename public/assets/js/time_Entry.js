$(document).ready(function () {
    console.log("page loded")
    function getTime() {
        $.get("/api/Time", function (data) {
            renderdata(data);

        });
    }

    getTime();
    function renderdata(data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].Task.Project.title);
            console.log(data[i].Task.taskName);
            console.log(data[i].timespent);
            console.log(data[i].notes)

        }
    }



})
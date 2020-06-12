$(document).ready(function () {
    function getTime() {
        $.get("/api/Time", function (data) {
            renderdata(data);

        });
    }

    getTime();
    function renderdata(data) {

        for (var i = 0; i < data.length; i++) {
            var project = data[i].Task.Project.title;
            var task = data[i].Task.taskName;
            var timespent = data[i].timespent;
            var notes = data[i].notes;
            console.log("deep")
            $("#timeContainer").append(`
            <ul class="list-group list-group-horizontal list-headers" id="listItems">
                        <li class="list-group-item list-group-item-dark ">${project}</li>
                        <li class="list-group-item list-group-item-dark ">${task}</li>
                        <li class="list-group-item list-group-item-dark ">${timespent}</li>
                        <li class="list-group-item list-group-item-dark ">${notes}</li>
                    </ul>
            `)
        }
    }



})
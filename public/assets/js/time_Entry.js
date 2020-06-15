$(document).ready(function () {

    console.log("go to timeEntry")

    function getTime() {
        $.get("/api/Time", function (data) {
            renderdata(data);

        });
    }

    function getTasks() {
        $.get('/api/Task', function (data) {
            renderTasks(data);
        });
    }

    getTime();
    getTasks();

    function renderTasks(data) {
        for (var i=0; i< data.length; i++) {
            var task = data[i].taskName;
            $("#taskSelect").append(`
            <option class="time-entry-active-project-task">${task}</option>
            `)
        }
    }


    function renderdata(data) {

        for (var i = 0; i < data.length; i++) {
            var project = data[i].Task.Project.title;
            var task = data[i].Task.taskName;
            var timespent = data[i].timespent;
            var notes = data[i].notes;
            $("#timeContainer").append(`
            <ul class="list-group list-group-horizontal list-headers" id="listItems">
                        <li class="list-group-item ">${project}</li>
                        <li class="list-group-item ">${task}</li>
                        <li class="list-group-item ">${timespent}</li>
                        <li class="list-group-item ">${notes}</li>
                    </ul>
            `)
        }
    }



})
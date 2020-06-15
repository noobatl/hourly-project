$(document).ready(function () {

    var projectSelect = $("#projectSelect");
    var taskSelect = $("#taskSelect");
    var newTimeEntryAmount = $("#newTimeEntryAmount")
    var notesForNewTimeEntry = $("#notesForNewTimeEntry");
    var newTimeEntryDate = $("#newTimeEntryDate")
    var savebutton = $("#savebutton")
    var selectedProjectId;
    var selectedTaskId;
    var projectdata = [];
    var taskData = [];

    newTimeEntryAmount.keyup(function() {  
        this.value = this.value.replace(/[^0-9\.]/g,''); 
    });

    $("#savebutton").on("click", handleFormSubmit);

    function handleFormSubmit(event) {
        // event.preventDefault();
        if (!Date() || !selectedTaskId || !newTimeEntryAmount.val()) {
            return;
        }

        var timeEntry = {
            date: Date(),
            TaskTaskId: selectedTaskId,
            timespent: parseInt(newTimeEntryAmount.val()),
            notes: notesForNewTimeEntry.val()

        }
        submitTime(timeEntry)

    }
    function submitTime(time) {
        $.post("/api/Time", time, function () {
            $("#timeModal").empty().hide();
            window.location.reload();
        })
    }
    function getProjects() {

        $.get("/api/Project", renderProjectList);
    }

    newTimeEntryDate.attr("placeholder", Date());

    getProjects();

    $('#projectSelect').click(function () {
        $(this).change();
    }).change(function () {
        selectedProjectId = parseInt($(this).val())
        for (i = 0; i < projectdata.length; i++) {
            if (projectdata[i].projectId == selectedProjectId) {
                console.log("selected")
                taskData = projectdata[i].Tasks
                rendertaskList(taskData)
            }
        }
    });

    $('#taskSelect').click(function () {
        $(this).change();
    }).change(function () {
        selectedTaskId = parseInt($(this).val())
    });

    function rendertaskList(data) {
        if (!data.length) {
            return;
        }

        var tasksToAdd = [];
        for (var i = 0; i < data.length; i++) {
            if(i === 0){

                selectedTaskId = data[0].taskId
            }
        
            tasksToAdd.push(createTaskRow(data[i]));

        }
        taskSelect.empty();
        taskSelect.append(tasksToAdd)
    }

    function renderProjectList(data) {
        console.log(data)
        projectdata = data;

        if (!data.length) {
            return;
        }
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {

            if(i === 0){
                
                selectedProjectId = data[0].projectId
            }

            rowsToAdd.push(createProjectRow(data[i]));

        }
        projectSelect.empty();
        projectSelect.append(rowsToAdd);
    }
    function createProjectRow(project) {
        var listOption = $("<option>");
        listOption.attr("value", project.projectId);
        listOption.text(project.title);
        return listOption;
    }

    function createTaskRow(task) {
        var listOption = $("<option>");
        listOption.attr("value", task.taskId);
        listOption.text(task.taskName);
        return listOption;
    }

})

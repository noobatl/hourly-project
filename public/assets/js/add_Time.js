$(document).ready(function () {



    var projectSelect = $("#projectSelect");
    var taskSelect = $("#taskSelect");
    var selectedProjectId;
    var selectedTaskId;
    var projectdata = [];
    var taskData = [];

    // $(timeForm).on("submit", handleFormSubmit);

    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (!projectSelect.val() || !memberSelect.val()) {
    //       return;
    //     }

    function getProjects() {
        
        $.get("/api/Project", renderProjectList);
    }


    getProjects();

    
    $('#projectSelect').click(function () {        
        $(this).change();  
        console.log("click")
    }).change (function () {
        selectedProjectId = parseInt($(this).val())
        for (i =0; i<projectdata.length;i++) {
            if (projectdata[i].projectId == selectedProjectId) {
                console.log("selected")
                taskData = projectdata[i].Tasks
                rendertaskList(taskData)
            }
        }
    });      

    $('#taskSelect').click(function(){
        $(this).change();
    }).change(function(){
        selectedTaskId= parseInt($(this).val())
        console.log("selected task id")
        console.log(selectedTaskId)
    });
     
     
    // console.log(projectdata)

    function rendertaskList(data) {
        console.log(data)

       if (!data.length) {
           return;
       }

       var tasksToAdd = [];
       for (var i = 0; i < data.length; i++) {
           
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

    function createTaskRow(task){
        var listOption = $("<option>");
        listOption.attr("value", task.taskId);
        listOption.text(task.taskName);
        return listOption;
    }

    

})

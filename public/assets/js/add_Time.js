$(document).ready(function () {
console.log("entered")


    var projectSelect = $("#projectSelect");
    

    // $(timeForm).on("submit", handleFormSubmit);
//var projectId;
    

    // getTasks();

    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (!projectSelect.val() || !memberSelect.val()) {
    //       return;
    //     }

    function getProjects() {
        console.log("projects")
        $.get("/api/Project", renderProjectList);
    }

    // function getTasks(){

    //     $.get("/api/Project", renderProjectList)
    // }
    getProjects();

    $('projectSelect').click(function () {        
        $(this).change();  
            
    }).change (function () {
        console.log($(this).val())
        projectId = $(this).val()
    });      
    function renderProjectList(data) {
        console.log(data)
        if (!data.length) {
            // window.location.href = "/home";
        }
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createProjectRow(data[i]));
        }
        projectSelect.empty();
        console.log(rowsToAdd);
        console.log(projectSelect);
        projectSelect.append(rowsToAdd);
        // projectSelect.val(projectId);
    }
    function createProjectRow(project) {
        var listOption = $("<option>");
        listOption.attr("value", project.projectId);
        listOption.text(project.title);
        return listOption;
    }

    

})

// $("#projectSelect").on("click change", function(e) {
//     getProjects();
// });
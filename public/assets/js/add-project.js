//Creating a new project
$(document).ready(function () {
    const titleInput = $("#addProjectName");
    const teamMembers = $("#addProjectTeamMembers");
    const budgetInput = $("#addProjectBudget");
    const descriptionInput = $("#addProjectDesc")
    const statusInput = $("#addProjectStatus");

    let url = window.location.search;
    let projectId;
    let updating = false;

    
    if (url.indexOf("?project_id=") !== -1) {
        projectId = url.split("=")[1];
        getProjectData(projectId, "project");
      }

    $("#projectSave").on("click", function handleSave(event) {
        event.preventDefault();

        if(!titleInput.val().trim() || !teamMembers.val() || !budgetInput.val()) {
            window.alert("Please make sure all fields are filled out.")
            return;
        }

        let newProject = {
            title : titleInput.val().trim(),
            budget : budgetInput.val(),
            description : descriptionInput.val().trim(),
            team : teamMembers.val(),
            status : statusInput.val()
        }

        if (updating) {
            newProject.id = projectId
            updateProject(newProject)
        }
        else{
            saveProject(newProject)
        }

    });

    function saveProject(project){
        $.post("/api/Project", project, function(){
            window.location.href = "/home"
        })
    }

    function getProjectData (id){
        let queryUrl = "/api/Projects/" + id;

        $.get(queryUrl, function(data) {
            titleInput.val(data.title)
            teamMembers.val(data.team)
            budgetInput.val(data.budget)
            descriptionInput.val(data.description)
            statusInput.val(data.status)
            projectId = data.id;

            updating = true;
        })
    }

    function updateProject (project) {
        $.ajax({
            method: "PUT",
            url: "/api/Project",
            data: project
        }).then(function(){
            window.location.href = "/home"
        })
    }
});


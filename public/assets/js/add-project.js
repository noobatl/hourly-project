$(document).ready(function () {
    const titleInput = $("#addProjectName");
    const teamMembers = $("#addProjectTeamMembers");
    const budgetInput = $("#addProjectBudget");
    const descriptionInput = $("#addProjectDesc")
    const statusInput = $("#addProjectStatus");



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

        console.log(newProject)

        $.post("/api/Project", newProject, function(){
            window.alert("Successfully saved!")
        })

    });

});

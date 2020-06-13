//const moment = require("moment");

//Modal Functions
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

//Get Projects
$(document).ready(function () {
    const projectList = $("#projectList")
    let list = [];

    $(document).on("click", "button.delete", handleProjectDelete)



    function deleteProject(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/Project/" + id
        }).then(function () {
            getProject();
        })
    }

    function createRow(project) {
        var formattedDate = new Date(project.createdAt);
        //formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        let updatedLast = new Date(project.updatedAt);
        //updatedLast= moment(updatedLast).format("MMMM Do YYYY, h:mm:ss a");

        let projectCard = projectList.append(
            `<div class="card"><div class="card-header">
            <h3>${project.title}
            <button class="delete btn btn-danger" id="projectDelete"><i class="fas fa-trash delete-project"></i></button>
            <button class="edit btn btn-info" id="projectEdit"><i class="fas fa-edit edit-project"></i></button>
            <h3>
            </div>
            <p>${project.status}</p>
            <small>Created: ${formattedDate}</small>
            <small>Last Updated: ${updatedLast}</small>
            </div>`
        )
        projectCard.data("project", project)

        return projectCard;
    }

    function getProject() {

        $.get("/api/Project", function (data) {

            projectList.empty();
            const projectsToAdd = [];
            for (let i = 0; i < data.length; i++) {
                projectsToAdd.push(createRow(data[i]));
            }

            projectList.append(projectsToAdd)
        })
    }

    function handleProjectDelete() {
        let currentProject = $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .data("project")
        console.log(currentProject)
        deleteProject(currentProject.id)
    }


    getProject();
});



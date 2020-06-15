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
    var projectInfo = [];

    $(document).on("click", "button.delete", handleProjectDelete)
    $(document).on("click", "button.edit", handleProjectEdit)
    $(document).on("click", "#projectTitle", projectDetails)

    let url = window.location.search;
    let projectId;
    if (url.indexOf("?project_id=") !== -1) {
        projectId = url.split("=")[1];
        getProject(projectId);
    }
    else {
        getProject();
    }

    function getProject(id) {
        projectId = id || "";

        if (projectId) {
            projectId = "/?project_id=" + projectId
        }
        $.get("/api/Project" + projectId, function (data) {

            if (!data || !data.length) {
                displayEmpty();
            }
            else {
                projectList.empty();
                projectInfo = [];
                const projectsToAdd = [];
                for (let i = 0; i < data.length; i++) {
                    projectsToAdd.push(createRow(data[i]));
                    projectInfo.push(data[i]);
                }

                projectList.append(projectsToAdd)

            }
        })
    }

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
            `<div class="card" id="${project.title}"><div class="card-header">
            <h3 id="projectTitle"><a href="#">${project.title}</a></h3><button class="delete btn btn-danger" id="projectDelete"><i class="fas fa-trash delete-project"></i></button>
            <button class="edit btn btn-info" id="projectEdit"><i class="fas fa-edit edit-project"></i></button>
            <h3>
            </div>
            <details><p>${project.status}</p>
            <small>Created: ${formattedDate}</small>
            <small>Last Updated: ${updatedLast}</small></details>
            </div>`
        )
        projectCard.data("project", project)

        return projectCard;

    }
    
    function displayEmpty() {
        
        projectList.empty();

        projectList.append(`<p>You have no projects to display</p>`)
        
    }

    function handleProjectEdit() {

        let currentProject = $(this)
            .parent()
            .parent()
            .parent()
            .data("project")
        window.location.href = "/add?project_id=" + currentProject.projectId;
    }

    function handleProjectDelete() {
        let currentProject = $(this)
            .parent().parent().parent().data("project")
        console.log(currentProject)
        deleteProject(currentProject.projectId)
    }
    
    function projectDetails () {
        $(".current-project-details").empty()
        var selectedProject = event.target.innerHTML;
        for(var i = 0;i < projectInfo.length; i++){
            if(projectInfo[i].title == selectedProject){
                selectedProject = projectInfo[i].projectId;
                selectedProject = selectedProject - 1;
            }
        }
        let currentProject = projectInfo[selectedProject];

        $(".current-project-details").append(`
            <h3 class="selected-project">${currentProject.title}</h3>
            <p class="project-status"><strong>Status: </strong><span class="current-project-status">${currentProject.status}</span></p>
            <p class="project-assignees"><strong>Assignees: </strong><span class="current-project-assignees">${currentProject.team}</span></p>
            <p class="project-budget"><strong>Budget (in hours): </strong><span class="current-project-budget">${currentProject.budget}</span></p>
            <p><strong>Description:</strong></p>
            <p class="current-project-desc"> ${currentProject.description}</p>
        `)
        getTasks(currentProject.projectId);
    }
    var tasks;
    var name;

    function getTasks(id) {
        $.when(
            $.get("/api/Task", function (data) {
                tasks = data;
            })
        ).done( function() {
            for (var i =0;i<tasks.length;i++){
                if(tasks[i].projectId == id) {
                    $(".current-project-details").append(`
                    <li class="task-item">
                        <p>
                            <input type="checkbox" class="completed-task">
                            <span class="task-title">${tasks[i].taskName}</span><br/>
                            <strong>Assigned to: </strong><span class="task-assignee">${tasks[i].User.firstname} ${tasks[i].User.lastname}</span><br/>
                        </p>
                    </li>
                    `)
                }
            }
        })
    }

    getProject();
});



$(document).ready(function() {
  var newTaskName = $("#newTaskName");
  var taskForm = $("#task");
  var memberSelect = $("#teamSelect");
  var projectSelect = $("#projectSelect");
  var body = $("#description");

  // on form submit, call function to handle
  $(taskForm).on("submit", handleFormSubmit);
  var url = window.location.search;
  var taskId;
  var memberId;
  var projectId;
  var bodyId;
  var updating = false;


  if (url.indexOf("?task_id=") !== -1) {
    taskId = url.split("=")[1];
    getTaskData(taskId, "task");
  }
  else if (url.indexOf("?member_id=") !== -1) {
    memberId = url.split("=")[1];
  }
  else if (url.indexOf("?project_id=") !== -1) {
    projectId = url.split("=")[1];
  }
  else if (url.indexOf("?body_id=") !== -1) {
    bodyId = url.split("=")[1];
  }

  getMembers();
  getProjects();

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!newTaskName.val().trim() || !body.val().trim() || !projectSelect.val() || !memberSelect.val()) {
      return;
    }

    var newTask = {
      name: newTaskName
        .val()
        .trim(),
      description: body.val(),
      ProjectId: projectSelect.val(),
      MemberId: memberSelect.val()
    };

    if (updating) {
      newTask.id = taskId;
      updateTask(newTask);
    }
    else {
      submitTask(newTask);
    }
  }

  function submitTask(task) {
    $.post("/api/Task", task, function() {
      // window.location.href = "/home";
    });
  }

  function getTaskData(id, type) {
    var queryUrl;
    switch (type) {
    case "task":
      queryUrl = "/api/Task/" + id;
      break;
    case "member":
      queryUrl = "/api/User/" + id;
      break;
    case "project":
      queryURL = "/api/Project" + id;
    default:
      return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.MemberId || data.id);
        newTaskName.val(data.name);
        projectId = data.ProjectId || data.id;
        memberId = data.MemberId || data.id;
        updating = true;
      }
    });
  }

  function getMembers() {
    $.get("/api/User", renderMemberList);
  }

  function getProjects() {
    $.get("/api/Project", renderProjectList);
  }

  function renderMemberList(data) {
    if (!data.length) {
      // window.location.href = "/team";
    }
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createMemberRow(data[i]));
    }
    memberSelect.empty();
    console.log(rowsToAdd);
    console.log(memberSelect);
    memberSelect.append(rowsToAdd);
    memberSelect.val(memberId);
  }
  
  function renderProjectList(data) {
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
    projectSelect.val(projectId);
  }

  function createMemberRow(member) {
    var listOption = $("<option>");
    listOption.attr("value", member.id);
    listOption.text(member.name);
    return listOption;
  }

  function createProjectRow(project) {
    var listOption = $("<option>");
    listOption.attr("value", project.id);
    listOption.text(project.name);
    return listOption;
  }

  function updateTask(task) {
    $.ajax({
      method: "PUT",
      url: "/api/Task",
      data: task
    })
      .then(function() {
        // window.location.href = "/home";
      });
  }
});
$(document).ready(function() {
  var newTaskName = $("#newTaskName");
  var taskForm = $("#task");
  var memberSelect = $("#teamSelect");
  var projectSelect = $("#projectSelect");

  $(taskForm).on("submit", handleFormSubmit);
  var url = window.location.search;
  var taskId;
  var memberId;
  var updating = false;

  if (url.indexOf("?task_id=") !== -1) {
    taskId = url.split("=")[1];
    getTaskData(taskId, "task");
  }
  else if (url.indexOf("?member_id=") !== -1) {
    memberId = url.split("=")[1];
  }

  getMembers();

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!newTaskName.val().trim() || !memberSelect.val()) {
      return;
    }

    var newTask = {
      name: newTaskName
        .val()
        .trim(),
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
    $.post("/api/Task", post, function() {
      window.location.href = "/index";
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
    default:
      return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.MemberId || data.id);
        newTaskName.val(data.title);
        memberId = data.MemberId || data.id;
        updating = true;
      }
    });
  }

  function getMembers() {
    $.get("/api/User", renderMemberList);
  }
  function renderMemberList(data) {
    if (!data.length) {
      window.location.href = "/team";
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

  function createMemberRow(member) {
    var listOption = $("<option>");
    listOption.attr("value", member.id);
    listOption.text(member.name);
    return listOption;
  }

  function updateTask(task) {
    $.ajax({
      method: "PUT",
      url: "/api/Task",
      data: task
    })
      .then(function() {
        window.location.href = "/index";
      });
  }
});
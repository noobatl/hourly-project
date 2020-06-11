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

  // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
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
        // If this post exists, prefill our cms forms with its data
        newTaskName.val(data.title);
        memberId = data.MemberId || data.id;
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // A function to get Authors and then render our list of Authors
  function getMembers() {
    $.get("/api/User", renderMemberList);
  }
  // Function to either render a list of authors, or if there are none, direct the user to the page
  // to create an author first
  function renderMemberList(data) {
    if (!data.length) {
      window.location.href = "/team";
    }
    // $(".hidden").removeClass("hidden");
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

  // Creates the author options in the dropdown
  function createMemberRow(member) {
    var listOption = $("<option>");
    listOption.attr("value", member.id);
    listOption.text(member.name);
    return listOption;
  }

  // Update a given post, bring user to the blog page when done
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
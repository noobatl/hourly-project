// var Sequelize = require('sequelize');
// var sequelize = new Sequelize('hourly_db', 'localhost', 'obomsa12');

$(document).ready(function() {
  var memberSelect = $("#teamSelect");
  var projectSelect = $("#projectSelect");
  var members = [];
  var projects = [];

  var newTaskName = $("#newTaskName");
  var body = $("#description");

  // When saving, add new task to api and append to project
  $("#taskSave").on("click", function handleSave(event) {
    event.preventDefault();

    var newTask = {
      taskName: newTaskName.val().trim(),
      projectId: 2,
      assignedUserID: 2,
      taskDescription: body.val(),
      UserUserId: 1,
    }

    console.log(newTask);

    $.post('/api/Task', newTask, function() {
      $("#taskModal").modal("hide");
    })

  })

  memberData();
  projectData();

  // Populate team members in dropdown menu
  function memberData () {
    $.get('/api/User', function(data) {
      members = data;
      fillDropdown();
    });
  }

  function fillDropdown () {
    memberSelect.empty();
    var rowsToAdd = [];
    for (var i = 0; i<members.length; i++) {
      rowsToAdd.push(createNewRow(members[i]));
    }
    memberSelect.prepend(rowsToAdd);
  }

  function createNewRow(member) {
    var newRow = `<option>${member.firstname} ${member.lastname}</option>`
    return newRow;
  };
  
// Populate projects in dropdown
  function projectData () {
    $.get('/api/Project', function(data) {
      projects = data;
      fillProjectDropdown();
    });
  }

  function fillProjectDropdown () {
    projectSelect.empty();
    var rowsToAdd = [];
    for (var i = 0; i<projects.length; i++) {
      rowsToAdd.push(createNewProjectRow(projects[i]));
    }
    projectSelect.prepend(rowsToAdd);
  }

  function createNewProjectRow(project) {
    var newRow = `<option>${project.title}</option>`
    return newRow;
  };

});
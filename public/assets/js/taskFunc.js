$(document).ready(function() {
  var memberSelect = $("#teamSelect");
  var projectSelect = $("#projectSelect");
  var members = [];
  var projects = [];

  var newTaskName = $("#newTaskName");
  var taskForm = $("#task");
  var body = $("#description");

  
  $(document).on("submit", "#taskForm", insertData);

  function insertData(event) {
    event.preventDefault();
    var task = {
      taskName: newTaskName.val().trim(),
      member: memberSelect,
      project: projectSelect,
      description: body.val()
    }
  }

  // var url = window.location.search;
  // var taskId;
  // var memberId;
  // var projectId;
  // var bodyId;
  // var updating = false;

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
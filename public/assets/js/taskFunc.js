$(document).ready(function() {
  var memberSelect = $("#teamSelect");
  var projectSelect = $("#projectSelect");
  var members = [];
  var projects = [];
  var tasks = [];

  var newTaskName = $("#newTaskName");
  var body = $("#description");

  
  // $(document).on("submit", taskForm, insertData);

  $("#taskSave").on("click", function handleSave(event) {
    event.preventDefault();

    var newTask = {
      taskName: newTaskName.val().trim(),
      projectId: parseInt(projectSelect.val()),
      assignedUserID: parseInt(memberSelect.val()),
      taskDescription: body.val(),
      UserUserId: 1,
    }

    console.log(newTask);

    $.post('/api/Task', newTask, function() {
      $("#taskModal").modal("hide");
    })

  })
  // function insertData(event) {
  //   event.preventDefault();
  //   var task = {
  //     taskName: newTaskName.val().trim(),
  //     projectId: 1,
  //     assignedUserID: 1,
  //     taskDescription: body.val(),
  //     UserUserId: 1,
  //   }

  //   $.post("/api/Task", task, getTasks);
  //   newTaskName.val("");
  //   body.val("");
  //   $("#taskModal").modal("hide");
  // }

  // var url = window.location.search;
  // var taskId;
  // var memberId;
  // var projectId;
  // var bodyId;
  // var updating = false;

  memberData();
  projectData();

  // // get tasks
  // function getTasks() {
  //   $.get('/api/Task', function(data) {
  //     tasks = data;
  //   })
  // }

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
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

    var actualID = projectSelect[0].selectedIndex;
    actualID = actualID +1;
    parseInt(actualID);

    var userID = memberSelect[0].selectedIndex;
    userID = userID +1;
    parseInt(userID);
    // window.alert(actualID);

    var newTask = {
      taskName: newTaskName.val().trim(),
      // hard coded project and user ids for now 
      projectId: actualID,
      assignedUserID: userID,
      taskDescription: body.val(),
      UserUserId: 1,
    }

    console.log(newTask);

    var taskAppend = ` 
    <li class="task-item">
      <p>
          <input type="checkbox" class="completed-task">
          <span class="task-title">${newTask.taskName}</span><br/>
          <strong>Assigned to: </strong><span class="task-assignee">${memberSelect.val()}</span><br/>
      </p>
    </li>
    
      `

      $("#appendTask").prepend(taskAppend);

    $.post('/api/Task', newTask, function() {
      $("#taskModal").modal("hide");
    })

  })

  projectData();
  memberData();


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
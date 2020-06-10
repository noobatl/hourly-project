getTeamMembers();

function getTeamMembers() {
    $.get("/api/members", renderMemberList);
  }

function renderMemberList(data) {
    if (!data.length) {
        window.location.href = "/members"
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createAuthorRow(data[i]));
    }
    authorSelect.empty();
    console.log(rowsToAdd);
    console.log(authorSelect);
    authorSelect.append(rowsToAdd);
    authorSelect.val(authorId);
}
getTeamMembers();

function getTeamMembers() {
    $.get("/api/members", renderMemberList);
  }

function renderMemberList(data) {
    if (!data.length) {
        window.location.href = "/members"
    }
}
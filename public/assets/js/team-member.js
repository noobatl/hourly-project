$(document).ready(function() {
    const userList = $("#userList")

    function createNewCard (member) {
        userList.append(`
        <div class = "card col-md-3" style = "text-align: center;"><div class = "card-header" id = "member-header">
        <h5 style = "color:white;">${member.firstname} ${member.lastname}</h5></div>
        <br>
        <p>Role: ${member.role}</p>
        <p>Email: ${member.email}</p></div>
        `)
    }

    function getMembers () {

        $.get("/api/user", function(data){
            if(!data || !data.length){
                displayEmpty()
            }

            else{
                userList.empty();
                memberInfo = []

                data.forEach(member => {
                    createNewCard(member)
                });
            }
        })
    }

    function displayEmpty() {
        userList.empty();

        userList.append("Please add a team member")
    }

    getMembers();
})
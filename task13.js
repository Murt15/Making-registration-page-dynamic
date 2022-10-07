function savetoCrudStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.emailId.value


    const obj = { name, email }
    axios.post("https://crudcrud.com/api/961ad4aebf6b4a65be8fc3f0e7d68156/appointmentdata", obj)
        .then((response) => {
            showNewUserOnScreen(response.data)
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })



}
function showNewUserOnScreen(response) {

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${response._id}> ${response.name} - ${response.email}
     <button onclick=deleteUser("${response._id}")> Delete</button>
     
 </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/961ad4aebf6b4a65be8fc3f0e7d68156/appointmentdata")
        .then((response) => {
            for (var i = 0; i < response.data.length; i++) {
                showNewUserOnScreen(response.data[i])
            }
        })
        .catch((err) => console.log(err));
})




function deleteUser(responseId) {
    axios.delete(`https://crudcrud.com/api/961ad4aebf6b4a65be8fc3f0e7d68156/appointmentdata/${responseId}`)
        .then((response) => {
            removeUserFromScreen(responseId);
            console.log(response)

        })
        .catch((err) => console.log(err));


}

function removeUserFromScreen(responseId) {
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(responseId);
    if (childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}
//https://crudcrud.com/api/a766ccc5c3084263abe44f1896641c70
function saveToCrudCrudStorage(event) {
    event.preventDefault();
    const amount = event.target.expenseamt.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const obj = {
        amount,
        description,
        category
    }


    axios.post("https://crudcrud.com/api/a766ccc5c3084263abe44f1896641c70/Expensetracker", obj)
        .then((response) => {
            showNewReponseOnScreen(response.data);
        })
        .catch((err) => console.log(err))
}

function showNewReponseOnScreen(response) {
    document.getElementById('amt').value = '';
    document.getElementById('des').value = '';
    document.getElementById("cat").value = " ";

    const parentNode = document.getElementById("allExpenses");
    const childHTML = `<li id=${response._id}>${response.amount}--${response.description}--${response.category}
        <button onClick=editUser("${response._id}","${response.amount}","${response.description}","${response.category}")>Edit</button>
                    <button onClick=deleteUser("${response._id}")>Delete</button></li>`


    parentNode.innerHTML = parentNode.innerHTML + childHTML;

}

function editUser(responseId, amount, description, category) {
    document.getElementById('amt').value = amount;
    document.getElementById('des').value = description;
    document.getElementById('cat').value = category;

    deleteUser(responseId);
}

function deleteUser(responseId) {
    axios.delete(`https://crudcrud.com/api/a766ccc5c3084263abe44f1896641c70/Expensetracker/${responseId}`)
        .then((response) => {
            removeUserFromScreen(responseId);
            console.log(response)
        })
        .catch((err) => console.log(err));


}

function removeUserFromScreen(responseId) {
    const parentNode = document.getElementById("allExpenses");
    const childNodeToBeDeleted = document.getElementById(responseId);
    if (childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }

}

window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/a766ccc5c3084263abe44f1896641c70/Expensetracker")
        .then((response) => {
            for (var i = 0; i < response.data.length; i++) {
                showNewReponseOnScreen(response.data[i])
            }
        })
        .catch((err) => console.log(err));
})
function newElement() {
    const inputValue = document.getElementById('myInput').value;
    const listItem = document.createElement('li');

   if (inputValue === '') {
        alert('You must write something!');
        return;
    }
   
    //checkbox for the list
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'checkBox';
    checkBox.style.alignSelf = 'center';
    checkBox.onclick = function check() {
        listItem.classList.toggle('completed'); 
    };

    //paragraph to hold the text of the task
    const taskText = document.createElement('p');
    taskText.innerHTML = inputValue;

    listItem.appendChild(checkBox);
    listItem.appendChild(taskText);

    document.getElementById('myTasks').appendChild(listItem);
    document.getElementById('myInput').value = '';

}

// Function to clear completed tasks
function clearComplete() {
    const listItems = document.querySelectorAll('#myTasks .completed');
    listItems.forEach(item => item.remove());
}
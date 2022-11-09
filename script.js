let AddToDobutton = document.getElementById('AddToDo');
let toDoContainer = document.getElementById('toDoContainer');
let İnputText = document.getElementById('İnputText');
let ClearToDo = document.getElementById('ClearToDo');

AddToDobutton.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = İnputText.value;
    İnputText.value = "";

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    });
    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph);
    });
    ClearToDo.addEventListener('click', function () {
        paragraph.remove();
        
    });
});

const myInput1 = document.getElementById('myInput');
const todoList = document.querySelector('.todo-list');
const myRestore = document.querySelector('.myRestore');

myInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && myInput.value && e.target.value) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerText = `${myInput1.value}`;
        todoList.append(listItem);

        const myLabel = document.createElement('label');
        myLabel.className = "container1";
        const myInput = document.createElement('input');
        myInput.type = "checkbox";
        myLabel.append(myInput);
        const mySpan = document.createElement('span');
        mySpan.className = "checkmark";
        myLabel.append(mySpan);
        const myList = document.querySelector('.place');
        myList.append(myLabel);

        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");

        span.className = "spann";
        span.appendChild(txt);
        listItem.appendChild(span);

        span.onclick = function () {
            myRestore.classList.remove('d-none');
            myLabel.classList.add('d-none');
            listItem.classList.add('d-none');
        }

        myInput.onclick = function () {
            if (listItem.style.color === 'red') {
                listItem.style.color = 'black';
                listItem.style.textDecoration = 'none';
            }
            else {
                listItem.style.color = 'red';
                listItem.style.textDecoration = 'line-through';
            }
        }
        myInput1.value = '';
        myInput1.focus();
    }

    const myResButton = document.querySelector('.myRestoreButton');
    const listItems = Array.from(document.getElementsByTagName('li'));
    const labels = Array.from(document.getElementsByTagName('label'));
    myResButton.onclick = function () {

        for (let i = 0; i < labels.length; i++) {
            labels[i].classList.remove('d-none');

        }
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove('d-none');
        }
    }
});
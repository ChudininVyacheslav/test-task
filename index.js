const inputNode = document.querySelector('.add-tusk__input');
const btnAddNode = document.querySelector('.add-tusk__btn-add');
const createTaskNode = document.querySelector('.create-task');

btnAddNode.addEventListener("click", () => {
    addTask();
});

const addTask = function () {
    const valueInput = inputNode.value || 'Пример заметки';
    const div = addTaskHtml(valueInput);
    createTaskNode.append(div);
    inputNode.value = '';
    localStorage.setItem(valueInput, valueInput.toString());
}

const addTaskHtml = function (textInput = "Пример заметки") {
    let div = document.createElement("div");
    div.className = 'task';

    let text = document.createElement("p");
    text.className = 'task__text';
    text.innerHTML = textInput;
    div.appendChild(text);

    let btnDelete = document.createElement("button");
    btnDelete.className = 'task__btn-delete';
    btnDelete.innerHTML = 'Удалить';
    div.appendChild(btnDelete);

    let btnEdit = document.createElement("button");
    btnEdit.className = 'task__btn-edit';
    btnEdit.innerHTML = 'Изменить';
    div.appendChild(btnEdit);

    btnDelete.addEventListener("click", () => {
        removeTask(div, textInput);
    });

    btnEdit.addEventListener("click", () => {
        removeTask(div, textInput);
        inputNode.value = text.textContent;
    });  
    return div;
};

const removeTask = function (div, localStorageKey) {
    createTaskNode.removeChild(div);
    localStorage.removeItem(localStorageKey);
};

addTask();

const addTasklocStorHtml = function (value) {
    let textInput = value;

    let div = document.createElement("div");
    div.className = 'task';
    createTaskNode.appendChild(div);

    let text = document.createElement("p");
    text.className = 'task__text';
    text.innerHTML = textInput;
    div.appendChild(text);

    let btnDelete = document.createElement("button");
    btnDelete.className = 'task__btn-delete';
    btnDelete.innerHTML = 'Удалить';
    div.appendChild(btnDelete);

    let btnEdit = document.createElement("button");
    btnEdit.className = 'task__btn-edit';
    btnEdit.innerHTML = 'Изменить';
    div.appendChild(btnEdit);

    if (textInput == 'Пример заметки') {
        removeTask(div, textInput);
    };

    btnDelete.addEventListener("click", () => {
        removeTask(div, textInput);
    });

    btnEdit.addEventListener("click", () => {
        removeTask(div, textInput);
        inputNode.value = text.textContent;
    });
};

const loadingTaskLocStor = function () {
    const items = { ...localStorage }; 
    const arrItems = Object.keys(items);  
    arrItems.forEach(key => {
        addTasklocStorHtml(key)
    });
};

loadingTaskLocStor();
const inputNode = document.querySelector('.add-tusk__input');
const btnAddNode = document.querySelector('.add-tusk__btn-add');
const createTaskNode = document.querySelector('.create-task');
const addTaskNode = document.querySelector('.add-task');

btnAddNode.addEventListener("click", () => {
    addTask();
});

const addTask = function () {
    const valueInput = inputNode.value || 'Пример заметки';
    const div = addTaskHtml(valueInput);
    createTaskNode.append(div);
    inputNode.value = '';
    localStorage.setItem(valueInput, valueInput.toString());
};

const addTaskHtml = function (textInput ) {
    let div = document.createElement("div");
    div.className = 'task';

    let text = document.createElement("p");
    text.className = 'task__text';
    text.innerHTML = textInput;
    div.append(text);

    let btnDelete = document.createElement("button");
    btnDelete.className = 'task__btn-delete';
    btnDelete.innerHTML = 'Удалить';
    div.append(btnDelete);

    let btnEdit = document.createElement("button");
    btnEdit.className = 'task__btn-edit';
    btnEdit.innerHTML = 'Изменить';
    div.append(btnEdit);

    btnDelete.addEventListener("click", () => {
        removeTask(div, textInput);
    });

    btnEdit.addEventListener("click", () => {
        removeTask(div, textInput);
        inputNode.value = text.textContent;
        btnsFont()
    });
    return div;
};

const removeTask = function (div, localStorageKey) {
    createTaskNode.removeChild(div);
    localStorage.removeItem(localStorageKey);
};

const loadingTaskLocStor = function () {
    const items = { ...localStorage };

    const arrItems = Object.keys(items);
    if (arrItems.length === 0) {
        arrItems.push("Пример заметки");
    };
    
    const arrItemsNodes = arrItems.map((textValue) => addTaskHtml(textValue));
    createTaskNode.append(...arrItemsNodes);
};

loadingTaskLocStor();

const btnsFont = function () {
    let italic = document.createElement("button");
    italic.className = 'add-task__btn-italic';
    italic.innerHTML = 'К';
    addTaskNode.appendChild(italic);

    italic.addEventListener("click", () => {
        const text = inputNode.value

    });

    let fat = document.createElement("button");
    fat.className = 'add-task__btn-fat';
    fat.innerHTML = 'Ж';
    addTaskNode.appendChild(fat);
};
const inputNode = document.querySelector('.add-tusk__input');
const btnAddNode = document.querySelector('.add-tusk__btn-add');
const createTaskNode = document.querySelector('.create-task');
const addTaskNode = document.querySelector('.add-task');
const btnItalicNode = document.querySelector('.add-tusk__btn-italic');
const btnBoldNode = document.querySelector('.add-tusk__btn-bold');


btnAddNode.addEventListener("click", () => {
    const value = inputNode.value;
    const isValueExists = localStorage.getItem(value);
    if (value == '') {
        return alert('Вы не ввели текст заметки!');
    } else if (isValueExists) {
        return alert('Такая заметка уже существует!');
    };
    addTask(value);
});

const addTask = (valueInput) => {

    const div = createTask(valueInput);
    inputNode.value = '';
    createTaskNode.append(div);
    localStorage.setItem(valueInput, valueInput.toString());
};

const createTask = (textInput) => {
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

    btnDelete.addEventListener("click", () => {
        removeTask(div, textInput);
    });

    let btnEdit = document.createElement("button");
    btnEdit.className = 'task__btn-edit';
    btnEdit.innerHTML = 'Изменить';
    div.append(btnEdit);

    btnEdit.addEventListener("click", () => {
        inputNode.value = text.textContent;
    });
    return div;
};

const removeTask =  (div, localStorageKey) => {
    createTaskNode.removeChild(div);
    localStorage.removeItem(localStorageKey);
};

const loadingTaskLocStor =  () => {
    const items = { ...localStorage };
    console.log(items)
    const arrItems = Object.keys(items);
    console.log(arrItems)
    if (arrItems.length === 0) {
        arrItems.push("Пример заметки");
    };

    const arrItemsNodes = arrItems.map((textValue) => createTask(textValue));
    createTaskNode.append(...arrItemsNodes);
};

loadingTaskLocStor();

btnItalicNode.addEventListener("click", () => {
    if (btnItalicNode.classList == 'add-tusk__btn-italic') {
        btnItalicNode.classList.remove('add-tusk__btn-italic');
        return btnItalicNode.classList.add('add-tusk__btn-italic-active');
    } if (btnItalicNode.classList == 'add-tusk__btn-italic-active') {
        btnItalicNode.classList.remove('add-tusk__btn-italic-active');
        btnItalicNode.classList.add('add-tusk__btn-italic');
    };
});

btnBoldNode.addEventListener("click", () => {
    if (btnBoldNode.classList == 'add-tusk__btn-bold') {
        btnBoldNode.classList.remove('add-tusk__btn-bold');
        return btnBoldNode.classList.add('add-tusk__btn-bold-active');
    } if (btnBoldNode.classList == 'add-tusk__btn-bold-active') {
        btnBoldNode.classList.remove('add-tusk__btn-bold-active');
        btnBoldNode.classList.add('add-tusk__btn-bold');
    };
});


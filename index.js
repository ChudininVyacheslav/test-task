const inputNode = document.querySelector('.add-tusk__input');
const btnAddNode = document.querySelector('.add-tusk__btn-add');
const addTaskNode = document.querySelector('.add-task');

btnAddNode.addEventListener("click", () => {
    addTags();
});

const addTags = function () {
    let textInput = '';
    textInput += inputNode.value;

    if (textInput == '') {
        textInput = 'Пример заметки';
    };

    let divTag = document.createElement("div");
    divTag.className = 'task';
    addTaskNode.appendChild(divTag);

    let textTag = document.createElement("p");
    textTag.className = 'task__text';
    textTag.innerHTML = textInput;
    divTag.appendChild(textTag);

    let btnDeleteTag = document.createElement("button");
    btnDeleteTag.className = 'task__btn-delete';
    btnDeleteTag.innerHTML = 'Удалить';
    divTag.appendChild(btnDeleteTag);

    let btnDoneTag = document.createElement("button");
    btnDoneTag.className = 'task__btn-done';
    btnDoneTag.innerHTML = 'Изменить';
    divTag.appendChild(btnDoneTag);

    inputNode.value = "";

    btnDeleteTag.addEventListener("click", () => {
        addTaskNode.removeChild(divTag, textTag, btnDeleteTag, btnDoneTag);
        
        localStorage.removeItem(textInput);
    });

    btnDoneTag.addEventListener("click", () => {
        inputNode.value = textTag.textContent;
        addTaskNode.removeChild(divTag, textTag, btnDeleteTag, btnDoneTag);

        localStorage.removeItem(textInput);
    });

    localStorage.setItem(textInput, textInput.toString())
};

addTags();

const locStor = function (value) {

    let textInput = '';
    textInput += value;

    let divTag = document.createElement("div");
    divTag.className = 'task';
    addTaskNode.appendChild(divTag);

    let textTag = document.createElement("p");
    textTag.className = 'task__text';
    textTag.innerHTML = textInput;
    divTag.appendChild(textTag);

    let btnDeleteTag = document.createElement("button");
    btnDeleteTag.className = 'task__btn-delete';
    btnDeleteTag.innerHTML = 'Удалить';
    divTag.appendChild(btnDeleteTag);

    let btnDoneTag = document.createElement("button");
    btnDoneTag.className = 'task__btn-done';
    btnDoneTag.innerHTML = 'Изменить';
    divTag.appendChild(btnDoneTag);

    if (textInput == 'Пример заметки') {
        addTaskNode.removeChild(divTag, textTag, btnDeleteTag, btnDoneTag);
    };

    inputNode.value = "";

    btnDeleteTag.addEventListener("click", () => {
        addTaskNode.removeChild(divTag, textTag, btnDeleteTag, btnDoneTag);
        
        localStorage.removeItem(textInput);
    });

    btnDoneTag.addEventListener("click", () => {
        inputNode.value = textTag.textContent;
        addTaskNode.removeChild(divTag, textTag, btnDeleteTag, btnDoneTag);
    });

    localStorage.setItem(textInput, textInput.toString())
};

const items = { ...localStorage };

const arrItems = Object.keys(items);
arrItems.forEach(key => {
    locStor(key)
});
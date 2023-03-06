const inputNode = document.querySelector('.add-tusk__input');
const btnAddNode = document.querySelector('.add-tusk__btn-add');
const btnChangeNode = document.querySelector('.add-tusk__btn-change');
const btnDeleteNode = document.querySelector('.task__btn-delete');
const btnDoneNode = document.querySelector('.task__btn-done');
const addTaskNode = document.querySelector('.add-task');
const taskNode = document.querySelector('.task');

btnAddNode.addEventListener("click", () => {
    addTags();
});

const addTags = function () {
    let textInput = '';
    textInput += inputNode.value;

    if (textInput == '') {
        textInput = 'Пример заметки'
    }

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
    });

    btnDoneTag.addEventListener("click", () => {
        inputNode.value = textTag.textContent;;
        addTaskNode.removeChild(divTag, textTag, btnDeleteTag, btnDoneTag);
    });
};
addTags();

// console.log(btnDoneNode.textContent)
const inputNode = document.querySelector('.add-tusk__input');
const btnAddNode = document.querySelector('.add-tusk__btn-add');
const createTaskNode = document.querySelector('.create-task');
const addTaskNode = document.querySelector('.add-task');
const btnItalicNode = document.querySelector('.add-tusk__btn-italic');
const btnBoldNode = document.querySelector('.add-tusk__btn-bold');

let style = {};

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

const addTask = (valueInput = 'Пример заметки') => {
    const task = {
        id: Date.now(),
        label: valueInput,
        options: { ...style },
    };

    const div = createTask(valueInput, task.options, task.id);
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    createTaskNode.append(div);

    inputNode.value = '';
    style = {};
    btnItalicNode.classList = 'add-tusk__btn-italic';
    btnBoldNode.classList = 'add-tusk__btn-bold';
    inputNode.classList = 'add-tusk__input';
};

const createTask = (textInput, options, id) => {
    let div = document.createElement("div");
    div.className = 'task';
    div.dataset.id = id;

    let text = document.createElement("p");
    text.innerHTML = textInput;

    if (options.fontWeight) {
        text.style.fontWeight = options.fontWeight;
    }
    if (options.fontStyle) {
        text.style.fontStyle = options.fontStyle;
    };
    div.append(text);

    let btnDelete = document.createElement("button");
    btnDelete.className = 'task__btn-delete';
    btnDelete.innerHTML = 'Удалить';
    div.append(btnDelete);

    btnDelete.addEventListener("click", () => {
        removeTask(div)
    });

    let btnEdit = document.createElement("button");
    btnEdit.className = 'task__btn-edit';
    btnEdit.innerHTML = 'Изменить';
    div.append(btnEdit);

    btnEdit.addEventListener("click", () => {
        changeTask(div)
        inputNode.value = text.textContent;
    });
    return div;
};

// const removeTaskEdit = (div, textInput) => {
//     const tasks = JSON.parse(localStorage.getItem('tasks'));
//     let obj = {
//         id: div.dataset.id,
//         label: textInput
//     };
//     const findTasks = tasks.find(
//         (task) => {
//             if (task.id === Number(obj.id) && task.label === obj.label) {
//              return console.log(obj.label)
//             }
//         }
//     );

const changeTask = (div) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const findTasks = tasks.find(
        (task) => {
            if (task.id === Number(div.dataset.id)) {
                if (task.options.fontWeight) {
                    return inputNode.classList = 'add-tusk__input-bold';
                } else if (task.options.fontStyle) {
                    return inputNode.classList = 'add-tusk__input-italic';
                } else {
                    return inputNode.classList = 'add-tusk__input';
                }
            }
        }
    );

    const filteredTasks = tasks.filter(
        (task) => task.id !== Number(div.dataset.id)
    );
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    createTaskNode.removeChild(div);
};

const removeTask = (div) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const filteredTasks = tasks.filter(
        (task) => task.id !== Number(div.dataset.id)
    );
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    createTaskNode.removeChild(div);
};

const renderTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const taskNodes = tasks.map((task) =>
        createTask(task.label, task.options, task.id)
    );
    createTaskNode.append(...taskNodes);
};

const createDefaultTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks || !tasks?.length) {
        const defaultTasks = [
            { label: 'Пример заметки', id: Date.now(), options: {} },
        ];
        localStorage.setItem('tasks', JSON.stringify(defaultTasks));
    };
};
createDefaultTasks();
renderTasks();

btnItalicNode.addEventListener("click", () => {
    if (style.fontStyle) {
        style.fontStyle = "";
    } else {
        style.fontStyle = "italic";
    };

    if (btnItalicNode.classList == 'add-tusk__btn-italic') {
        inputNode.classList = 'add-tusk__input-italic';
        return btnItalicNode.classList = 'add-tusk__btn-italic-active';
    } if (btnItalicNode.classList == 'add-tusk__btn-italic-active') {
        btnItalicNode.classList = 'add-tusk__btn-italic';
        inputNode.classList = 'add-tusk__input';
    };
});

btnBoldNode.addEventListener("click", () => {
    if (style.fontWeight) {
        style.fontWeight = "";
    } else {
        style.fontWeight = "bold";
    };

    if (btnBoldNode.classList == 'add-tusk__btn-bold') {
        inputNode.classList = 'add-tusk__input-bold';
        return btnBoldNode.classList = 'add-tusk__btn-bold-active';
    } if (btnBoldNode.classList == 'add-tusk__btn-bold-active') {
        btnBoldNode.classList = 'add-tusk__btn-bold';
        inputNode.classList = 'add-tusk__input';
    };
});
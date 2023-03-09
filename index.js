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
    btnItalicNode.classList = 'add-tusk__btn-italic';
    btnBoldNode.classList = 'add-tusk__btn-bold';
    inputNode.classList = 'add-tusk__input';
});

const addTask = (valueInput = 'Пример заметки', font = 'task__text') => {

    const div = createTask(valueInput, font);
    inputNode.value = '';
    createTaskNode.append(div);
    // localStorage.setItem(valueInput, valueInput.toString());
};



const createTask = (textInput, font = 'task__text') => {
    // const id = Date.now();
    // const tasks = [];


    // tasks.push({ label: textInput, id: id, options: { fontStyle: font } });
    // localStorage.setItem(textInput, JSON.stringify(tasks));

    let div = document.createElement("div");
    div.className = 'task';


    // let font = '';


    let text = document.createElement("p");

    if (btnItalicNode.classList == 'add-tusk__btn-italic-active' || font == 'task__text-italic') {
        text.className = 'task__text-italic';

    } else if (btnBoldNode.classList == 'add-tusk__btn-bold-active' || font == 'task__text-bold') {
        text.className = 'task__text-bold';
    } else {
        text.className = 'task__text';
    };

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
        if (text.className == 'task__text-italic') {
            inputNode.classList.remove('add-tusk__input');
            inputNode.classList.add('add-tusk__input-italic');
        } if (text.className == 'task__text-bold') {
            inputNode.classList.remove('add-tusk__input');
            inputNode.classList.add('add-tusk__input-bold');
        }
    });
    let task = { name: textInput, font: text.className };

    localStorage.setItem(textInput, JSON.stringify(task));

    return div;
};

const removeTask = (div, localStorageKey) => {
    createTaskNode.removeChild(div);
    localStorage.removeItem(localStorageKey);
};

const loadingTaskLocStor = () => {


    let items = { ...localStorage };
    let arrItems = Object.values(items);
    if (arrItems.length === 0) {
        addTask("Пример заметки")
    }
    arrItemsNodes = arrItems.map((elem) => {
        let name = JSON.parse(elem).name;
        console.log(name)
        let font = JSON.parse(elem).font;
        console.log(font)
        addTask(name, font)
    })


    // const arrItems = Object.keys(items);
    // if (arrItems.length === 0) {
    //     arrItems.push("Пример заметки");
    // }

    // const arrItemsNodes = arrItems.map((textValue) => createTask(textValue));
    // createTaskNode.append(...arrItemsNodes);


    // const items = { ...localStorage };
    // console.log(typeof(items))
    // let arrItems = Object.keys(items);
    // console.log(typeof(arrItems))


    // const nodes = arrItems.map((task) => {
    //     createTask(task.label)
    // const items = {...localStorage} ;
    // items = JSON.parse(items)
    // const keyLocStor = Object.keys(items)
    // console.log(typeof (keyLocStor))



    // ferstLoad(keyLocStor)



}
// const ferstLoad = (keyLocStor) => {
//     console.log(keyLocStor)
//     tasksStr = localStorage.getItem(keyLocStor);

//     console.log(tasksStr)
//     tasksStr = JSON.parse(tasksStr);
//     if (tasksStr == null || tasksStr.length === 0) {
//         tasksStr = []
//         tasksStr.push("Пример заметки");
//         const nodes = tasksStr.map((task) => createTask(task))
//     createTaskNode.append(...nodes)
//     }
//     const nodes = tasksStr.map((task) => createTask(task))
//     createTaskNode.append(...nodes)

// }   



// console.log(typeof(tasksStr))
// let tasksItem = Object.keys(tasksStr);
// const nodes = tasksStr.map((task) => createTask(task.label))
// createTaskNode.append(...nodes)


// if (tasksStr == null || tasksStr.length === 0) {
//     tasksStr = []
//     tasksStr.push("Пример заметки");

//     console.log(2)
// };
// const nodes = tasksStr.map((task) => createTask(task.label))
// console.log(nodes)
// createTaskNode.append(...nodes);



loadingTaskLocStor();

// addTask()

btnItalicNode.addEventListener("click", () => {
    if (btnItalicNode.classList == 'add-tusk__btn-italic') {
        btnItalicNode.classList.remove('add-tusk__btn-italic');
        inputNode.classList.remove('add-tusk__input');
        inputNode.classList.add('add-tusk__input-italic');
        return btnItalicNode.classList.add('add-tusk__btn-italic-active');
    } if (btnItalicNode.classList == 'add-tusk__btn-italic-active') {
        btnItalicNode.classList.remove('add-tusk__btn-italic-active');
        btnItalicNode.classList.add('add-tusk__btn-italic');
        inputNode.classList.remove('add-tusk__input-italic');
        inputNode.classList.add('add-tusk__input');
    };
});

btnBoldNode.addEventListener("click", () => {
    if (btnBoldNode.classList == 'add-tusk__btn-bold') {
        btnBoldNode.classList.remove('add-tusk__btn-bold');
        inputNode.classList.remove('add-tusk__input');
        inputNode.classList.add('add-tusk__input-bold');
        return btnBoldNode.classList.add('add-tusk__btn-bold-active');
    } if (btnBoldNode.classList == 'add-tusk__btn-bold-active') {
        btnBoldNode.classList.remove('add-tusk__btn-bold-active');
        btnBoldNode.classList.add('add-tusk__btn-bold');
        inputNode.classList.remove('add-tusk__input-bold');
        inputNode.classList.add('add-tusk__input');
    };
});
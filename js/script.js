const form = document.querySelector('.form');
let taskInput = document.querySelector('.task');
let taskId = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (taskInput.value.length < 5) {
        console.log('Deve conter no minimo 5 caracteres');
    } else {
        addTask(taskInput);
    }

    form.reset()
})

function addTask(task) {
    let div = document.createElement('div');
    let container = document.querySelector('.Pending-Tasks');
    taskId++;

    div.classList.add('newTask');
    div.setAttribute('id', `task${taskId}`);
    div.innerHTML = `
        <p>${task.value}</p>
        <img src="./img/correto.png" class="finishTask" alt="">
        <img src="./img/excluir.png" class="deleteTask" alt="">
    `;

    container.appendChild(div);
}

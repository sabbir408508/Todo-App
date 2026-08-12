const taskForm = document.getElementById('f');
const taskInput = document.getElementById('i');
const taskList = document.getElementById('list');
const taskCount = document.getElementById('count');
const clearBtn = document.getElementById('clear');

function updateTaskCount() {
    const totalTasks = taskList.children.length;
    const completedTasks = taskList.querySelectorAll('.done').length;
    
    taskCount.textContent = `${totalTasks} tasks - ${completedTasks} done`;
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="del">X</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = '';
    
    updateTaskCount();
});

taskList.addEventListener('click', (e) => {
    const clickedElement = e.target;
    const li = clickedElement.closest('li');
    
    if (!li) return;
    
    if (clickedElement.classList.contains('del')) { 
        li.remove(); 
        updateTaskCount(); 
    } 
    else if (clickedElement.tagName === 'SPAN') { 
        li.classList.toggle('done'); 
        updateTaskCount(); 
    }
});

clearBtn.addEventListener('click', () => {
    const doneTasks = taskList.querySelectorAll('.done');
    
    doneTasks.forEach(task => {
        task.remove();
    });
    
    updateTaskCount();
});
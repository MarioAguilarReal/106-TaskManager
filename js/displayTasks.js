function showTasks() {
    let tasks = seeOldTask();
    let showCardTasks = '';

    tasks.forEach(task => {
        // console.log(task);
        let icon = showIconImp(task.isImportant);
        // console.log(classIcon)
        showCardTasks += `
            <div class = "task" style="border-color:${task.color}">

                ${icon}    

                <div class="info">
                    <h5>${task.title}</h5>
                    <p>${task.description}</p>
                </div>

                <label class="status"> ${task.status}</label>

                <div class="dates">
                    <label class="budget">$${formatBudget(task.budget)}</label>
                    <label class="due-date">${task.date}</label>
                </div>
                <i class="far fa-trash-alt iDelete" onclick="removeTask(${task.id})"></i>
            </div>
        `;
    });

    $('#list').html(showCardTasks);
}

function showIconImp(fillOrNot) {
    if (fillOrNot) {
        return "<i class='fa-solid icon-important fa-heart'></i>";
    } else {
        return '<i class="fa-regular fa-heart"></i>';
    }
}

function formatBudget(budget) {

    return parseFloat(budget).toFixed(2);
}
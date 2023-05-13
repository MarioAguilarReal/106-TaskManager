let tasks = []
function showTasks(tasks) {
    let showCardTasks = "";

    tasks.forEach(task => {
        if(task.name == 'Mario'){
            
            let icon = showIconImp(task.isImportant);
            let id = task._id
            console.log(id)
            // console.log(classIcon)
            showCardTasks += `
                <div id="${task._id}" class="task" style="border-color:${task.color}">
    
                    ${icon}    
    
                    <div class="info">
                        <h5>${task.title}</h5>
                        <p>${task.description}</p>
                    </div>
    
                    <div class="dates">
                        <label class="budget">$${formatBudget(task.budget)}</label>
                        <label class="status"> ${task.status}</label>
                    </div>
                    <label class="due-date">${task.date}</label>
    
                    <i onclick="removeTask('${task._id}')" class="far fa-trash-alt iDelete" ></i>
                </div>
            `;
        }
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
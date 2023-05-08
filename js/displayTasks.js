function showTasks() {
    let tasks = seeOldTask();
    let showCardTasks = '';

    tasks.forEach(task => {
        // console.log(task);
        let classIcon = showIconImp(task.isImportant);
        // console.log(classIcon)
        showCardTasks += `
            <div class = "col-md-2 col-12 border border-4 rounded p-3 m-2 text-light" style="background-color:${task.color}">
                <div class="d-flex border-bottom">
                    <div class="flex-fill justify-content-center">
                        <p>ID: ${task.id}</p>
                    </div>
                    <div class=" justify-content-center">
                        <i id="iImportant" class="${classIcon} clickable-icon"></i>
                    </div>
                </div>
                <h4>${task.title}</h4>
                <h6>Description:</h6>
                <p class="border-bottom pb-1 border-3">${task.description}</p>
                <h6>Budget:</h6>
                <p class="border-bottom pb-1 border-3">${task.budget}</p>
                <h6>Status:</h6> 
                <p class="border-bottom pb-1 border-3">${task.status}</p>
                <h6 class="pt-2">DueDate:</h6>
                <p class="border-bottom pb-1 border-3">${task.date}</p>
                <div class="d-flex">
                    <button onclick="editTask(${task.id})" class="flex-fill mt-3 p-2 rounded btn-info" data-bs-target="#exampleModal" data-bs-toggle="modal" type="button">Edit</button>
                    <button class="flex-fill mt-3 p-2 rounded btn-danger" onclick="removeTask(${task.id})">Delete</button>
                </div>

            </div>
        `;
    });

    $('#list').html(showCardTasks);
}

function showIconImp(fillOrNot) {
    if (fillOrNot) {
        return 'fa-solid icon-important fa-heart';
    } else {
        return 'fa-regular fa-heart';
    }
}
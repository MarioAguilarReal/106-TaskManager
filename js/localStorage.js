const KEY = 'task';

function saveTask(task) {
    //show to info to verify if all is correct
    // console.log(`
    // ID: ${task.id}
    // Important: ${task.isImportant}
    // Title: ${task.title}
    // Description: ${task.description}
    // Budget: ${task.budget}
    // Status: ${task.status}
    // Color: ${task.color}
    // Date: ${task.date}`);


    let oldTasks = seeOldTask();
    if (task.isImportant == true) {
        oldTasks.unshift(task);
        oldTasks = sortID(oldTasks);
    } else {
        oldTasks.push(task);
        oldTasks = sortID(oldTasks);
    }
    // console.log(oldTasks);
    let val = JSON.stringify(oldTasks);
    localStorage.setItem(KEY, val);
    showTasks();
}

function seeOldTask() {
    let tasks = localStorage.getItem(KEY);
    if (!tasks) {
        return [];
    } else {
        let taskList = JSON.parse(tasks)
        return taskList;
    }
}

function removeTask(id) {
    let tasks = seeOldTask();

    if (tasks == []) {
        alert('Error doesnt exist any task');
    } else {
        for (let i = 0; i < tasks.length; i++) {
            if (id == i){
                tasks.splice(i,1);
            }
        }
        tasks = sortID(tasks);

        localStorage.setItem(KEY, JSON.stringify(tasks));
        showTasks();
    }
    // console.log(tasks)

}
function editTask(id){
    let tasks = seeOldTask();
    let modal = '';
    let edittingTask;

    if (tasks == []) {
        alert('Error doesnt exist any task');
    } else {
        for (let i = 0; i < tasks.length; i++) {
            //mode of the modal
            if (id == i){
                edittingTask = tasks[i];
                console.log(edittingTask)
                modal = `
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Edit: ${edittingTask.title}</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" id="modal">
                                        <form>
                                            <div class="mb-1">
                                                <i id="iImportant-edit" class="fa-regular fa-heart clickable-icon"></i>
                                            </div>
                                            <div class="mb-1">
                                                <label for="title" class="form-label">Title</label>
                                                <input type="text" class="form-control" id="title-edit" aria-describedby="emailHelp">
                                            </div>
                                            <div class="mb-1">
                                                <label for="description" class="form-label">Description</label>
                                                <textarea class="form-control" cols="30" rows="3" id="description-edit"></textarea>
                                            </div>
                                            <div class="mb-1">
                                                <label for="budget" class="form-label">Budget</label>
                                                <input type="text" class="form-control" id="budget-edit">
                                            </div>
                                            <div class="mb-1">
                                                <label for="budget" class="form-label">Status</label>
                                                <select class="form-select" aria-label="Default select example" id="status-edit">
                                                    <option disabled value="" selected>Status</option>
                                                    <option value="new">New</option>
                                                    <option value="inProgress">In progress</option>
                                                    <option value="completed">Completed</option>
                                                    <option value="cancelled">Cancelled</option>
                                                </select>
                                            </div>
                                            <div class="mb-1">
                                                <label for="colorSelect" class="form-label">Color</label>
                                                <input type="color" class="form-control" id="colorSelect-edit">
                                            </div>
                                            <div class="mb-1">
                                                <label for="dueDate" class="form-label">dueDate</label>
                                                <input type="date" class="form-control" id="dueDate-edit">
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="button" class="btn btn-primary" id="save-task" onclick="editInfo(${console.log(JSON.stringify(edittingTask))})">Guardar cambios</button>
                                    </div>
                `;
                $('#modal-container').html(modal);
                //editInfo(edittingTask);
            }
        }
        //tasks = sortID(tasks);

        //localStorage.setItem(KEY, JSON.stringify(tasks));
        //showTasks();
    }
}

function editInfo(task){
    // let isImportant = checkIsImportant();
    task = JSON.parse(task);
    console.log(task);
    console.log('Hola editando info')
    let title = $('#title-edit').val();
    let description = $.trim($(' #description-edit').val());
    let budget = $('#budget-edit').val();
    let status = $('#status-edit').val();
    let color = $('#colorSelect-edit').val();
    let date = $('#dueDate-edit').val();

    task.title = title;
}

function sortID(tasks){
    for (let i = 0; i< tasks.length; i++){
        tasks[i].id = i;
    }
    return tasks;
}
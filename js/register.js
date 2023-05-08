//Class with the constructor to create new task
class Task {
    constructor(id, isImportant, title, description, budget, status, color, date) {
        this.id = id;
        this.isImportant = isImportant;
        this.title = title;
        this.description = description;
        this.budget = budget;
        this.status = status;
        this.color = color;
        this.date = date;
    }

}

//function to create new object task getting the info of the form
//validate the imputs
//show the status of the submit etc
function createNewTask() {
    let isImportant = checkIsImportant();
    console.log(isImportant);
    let title = $('#title').val();
    let description = $.trim($(' #description').val());
    let budget = $('#budget').val();
    let status = $('#status').val();
    let color = $('#colorSelect').val();
    let date = $('#dueDate').val();

    //Making a new task
    let arrayTasks = seeOldTask();
    let newTask = new Task(arrayTasks.length ,isImportant, title, description, budget, status, color, date);

    let infoValid = validateInfo(newTask);
    if (infoValid) {//validate if all inputs has been fill completely 
        saveTask(newTask);//if the befored sentence is true, i will save the new task in an array
        startAlert(infoValid);//La funcion sera ejecutada y mostrara la alerta dependiendo la situacion
        clearForm();//Limpiará el formulario
        console.log(isImportant)
        if(isImportant == true){
            toggleImportant();
        }

    } else {
        // console.log(infoValid);
        startAlert(infoValid);//mostrara la alerta dependiendo la situacion
    }
}

//validate the inputs function
function validateInfo(task) {
    if (task.title != '' && task.budget != '' && task.status != '' && task.date != '') {
        return true;
    } else {
        return false;
    }
}
//function for clear form
function clearForm() {
    $('input').val('');
    $('select').val('');
    $('textarea').val('');
}
//function to show alert, green or red 
function startAlert() {
    console.log("Alert of whatever error");
}

//Funtion to get boolean variable of the important icon
//for my is better have the functios like this 
function checkIsImportant() {
    if (icon.hasClass('icon-important')) {
        //icon.removeClass(iconNoneImportant).addClass(iconImportant);
        return true;
    } else {
        //icon.removeClass(iconImportant).addClass(iconNoneImportant);
        return false
    }
}
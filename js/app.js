let icon;
//this function return a variable type boolean, define the color of the healt
function toggleImportant() {
    const iconImportant = 'fa-solid icon-important';
    const iconNoneImportant = 'fa-regular';

    if (icon.hasClass('fa-regular')) {
        icon.removeClass(iconNoneImportant).addClass(iconImportant);
        return true;
    } else {
        icon.removeClass(iconImportant).addClass(iconNoneImportant);
        return false
    }
}
//This funcion is for show or hide the form, to add new task
function togleForm() {
    $('.collapse').collapse('toggle');
}
//Principal function
function init() {
    //funcion of the button for open the form
    $('.btnAddNewTask-collapse').click(togleForm)
    //selecting the toggle button if is important and saving on the variable ICON
    icon = $('#iImportant');
    icon.click(toggleImportant);//function of the healt selector (toggle)
    //load data and
    $('#addTaskButton').click(createNewTask);
    //assing event
    showTasks();
}

//the function init is executed when the page is loaded
window.onload = init
let icon;

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
function registerNewTask(){
    let isImportant = checkIsImportant();
    // let =$('#').val()
    // let =$('#').val()
    // let =$('#').val()
    // let =$('#').val()
    // let =$('#').val()
}

function checkIsImportant(){
    console.log('hola');
    let variable = true;
    variable = $('.#iImportant').hasClass('fa-solid')
    return variable;
}
function togleForm() {
    $('.collapse').collapse('toggle');
}

function init() {
    //console.log('Task Manager');
    icon = $('#iImportant');
    $('.btnAddNewTask-collapse').click(togleForm)
    //load data

    //assing event
    icon.click(toggleImportant);
    $('#addTaskButton').click(registerNewTask);
}


window.onload = init
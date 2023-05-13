const KEY = 'task';


async   function testRequest (){
    let response = await fetch('http://fsdiapi.azurewebsites.net/');
    console.log(response)

}


async function saveTask(task) {
    
    let response = await fetch("http://fsdiapi.azurewebsites.net/api/tasks/", {
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify(task), ///encode obj to an string
    });

    if(await response.status === 200) {
        // it worked
        console.log(await response.json);//get the object from the response
    }else{
        alert('Error: task was not saved');
    }
    showTasks( await loadTasks());
    console.log(response)
    // if (task.isImportant == true) {
    //     oldTasks.unshift(task);
    //     oldTasks = sortID(oldTasks);
    // } else {
    //     oldTasks.push(task);
    //     oldTasks = sortID(oldTasks);
    // }
    // // console.log(oldTasks);
    // let val = JSON.stringify(oldTasks);
    // localStorage.setItem(KEY, val);
}


async function loadTasks() {
    const response = await fetch("http://fsdiapi.azurewebsites.net/api/tasks/", {
        method: 'GET',
        headers: {
            'accept': "application/json"
        },
    });

    if (await response.status === 200){
        let task = await response.json();
        //showTasks(task);
        console.log(task)
        return await task;
    }else{
        alert("error: tasks were not leaded");
        console.log(await response.json());
    }

    // if (!tasks) {
    //     return [];
    // } else {
    //     let taskList = JSON.parse(tasks)
    //     return taskList;
    // }
}


async function removeTask(id) {
    
    console.log(id)
    const response = await fetch(`http://fsdiapi.azurewebsites.net/api/tasks/${id}/`, {
        method: 'DELETE',
    });
    let taskCard = $('#'+id);

    if(await response.ok){
        console.log('Deleted');
        taskCard.animate({
            left:'250px',
            opacity:0,
            height:0
        }, 400, function(){
            $(this).remove();
        });
    }else{
        alert("Error: Could not delete the task");
        console.log(await response.json());
    }
    // loadTasks()
}
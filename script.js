//wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  
    //selecting Dom elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

     //function to add new task
  function addTask() {
       //retrieve and trim the value from the input field
   const taskText = taskInput.value.trim();
     
   // check if taskText is not empty
    if (taskText !== ''){
      //create a new li element
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

       // create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

       // add click eventy to remove button
    removeButton.addEventListener('click', function() {
        taskList.removeChild(newTask);  // remove the li element
    });

      // append remove button to li
    newTask.appendChild(removeButton);
      
    //  append li to lu
    taskList.appendChild(newTask);
    
     // clear the input field
     taskInput.value = '';
  } else {
       alert('Please enter a task!'); // alert if input field is empty
   }
}
  
  // event listener for click on add task button
  addButton.addEventListener('click', addTask);


   //event listener for keypress (Enter) in taskInput
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' ){
        addTask();
        console.log(addTask);

    }
  });


 document.addEventListener('DOMContentLoaded', () => {
    addTask();

});
});


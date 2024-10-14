/* 
###############Features###################
  $ List of actions :
1- add new task - 
2- view Tasks - 
3- toggle task complete -
4- edit task - 
5- search task -
6- delete task - 
7- end -


  $ functions :
1- input()  : (input function) function to show the alert pop up tap ()
2- exit() function to end the loop
3- addTask(newTask) : function to add task
4- showTasks() : function to view tasks 
5- toggleTask(taskId) : function to toggle the task 
6- editTask(taskId) : function to edit the task 
7- deleteTask(taskId) :function to delete the task (by the id) 
8- search(details)  : function to search in tasks using a word
9- printActionList() : to print the main action list 


#########task object ##############
{
id:1,
desc: "task description",
state: "task state if completed or no",
}
*/


// init the const key and the array
const TASKS_KEY = "TASKS";
let tasks = [];

// check if the local storage have tasks array or not
const storedTasks = localStorage.getItem(TASKS_KEY);
if (storedTasks) {
    tasks = JSON.parse(storedTasks);
} else {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

// function to update the array in localStorage
const updateLocalStorage = () => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

//function to update "tasks" array 
const updateTasks = () => {
    const storedTasks = localStorage.getItem(TASKS_KEY);
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
};

// function to check the entered value and return the value if it true
const input = ()=>{
    const choice =parseInt(prompt("Please Enter Your Choice :"));       
    if(isNaN(choice)||+choice>7||+choice <1)return "Invalid Value! , Try Again " ; 
    else return choice;
};

// to print the Actions list 
const printActionList=()=>{
    console.log(`
Task Manger Menu :
1- Add New Task
2- Show Tasks
3- Toggle Task
4- Edit Task
5- Delete Task
6- Search Task
7- Exit
    `)
};

// to show the tasks
const showTasks=()=>{
    updateTasks();
    if(tasks.length===0) console.log("No Tasks");
    else tasks.forEach((task,index)=>console.log(`${index+1} - ${task.desc} [${task.completed?"Completed":"Not Completed"}]`))  
};

// to add tast
const addTask=()=>{
    const newTask=prompt("Enter Task Description");
    tasks.push({desc:newTask,Completed:false});
    updateLocalStorage();
    console.log("Task Added");
};

// to edit on tasks state
const toggleTask=()=>{
    const taskId=parseInt(prompt("Enter Task id To Update"))-1;
   if(tasks[taskId]){
    tasks[taskId].completed=!tasks[taskId].completed;
    console.log("Task toggle complete")}
   else{
       console.log("Task Not Found");
   }
   updateLocalStorage();
};

// to edit on tast description
const editTask=()=>{
    const taskId=parseInt(prompt("Enter Task id To Update"))-1;
    if(tasks[taskId])
    {
        const newDescription=prompt("Enter New Description :");
        tasks[taskId].desc=newDescription;
        console.log("Task Update Successfuly");
    }else
    {
        console.log('Task Not Found');
    }
    updateLocalStorage();
};

// to delete the task
const deleteTask=()=>{
    const taskId=parseInt(prompt("Enter Task id To Delete"))-1;
    if (tasks[taskId]) {
        tasks.splice(taskId, 1);
        console.log('Task deleted.');
    } else {
        console.log('Task not found.');
    }
    updateLocalStorage();
};

// to search in tasks using term
const search=()=>{
    updateTasks();
    const term = prompt("Enter Search Term");
    const res=tasks.filter((task)=>task.desc.toLowerCase().includes(term.toLowerCase()));
    if(res.length){
        res.forEach((task, index) => {
            console.log(`${index + 1} - ${task.desc} [${task.completed ? '[Completed]' : '[Not Completed]'}]`);
        });
    }else{
        console.log("No Tasks Found");
    }
};


let actionNum=0;
while(actionNum!=7){
    printActionList();
    actionNum=input();
switch (actionNum) {
    case 1:
        addTask();
        break;
    case 2:
        showTasks();
        break;
    case 3:
        toggleTask();
        break;
    case 4:
        editTask();
        break;
    case 5:
        deleteTask();
        break;
    case 6:
        search();
        break;
    case 7:
        console.log("Thanks For Use Tasks Applicatoin");
        break;

    default:
        console.log("Invalid Value , try again");
        break;
}}

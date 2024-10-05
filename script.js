document.getElementsById("addBtn").addEventListener("click", function () { 
    const taskInput=document.getElementById}("taskInput").value; 
  const taskDate=document.getElementById("taskDate").value; 
  
  if (taskInput === "") {
    alert("you must write something");
    return;
  }
  
  const li = document.createElement ("li");
  li.textcontent = taskInput;
  
  // Adding the due date
  if (taskDate) {
    const dateSpan = document.createElement("span");
    dateSpan.textcontent = ' due: ${taskDate}' ;
    li.appendChild(dateSpan);
  }
  
  // Delete button
  const deleteBtn = document.createElement("button");
  deletBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(deleteBtn);
  
  document.getElementById("todoList").appendChild(li)
  
  // Clear input fields
  document.getElementById("taskInput").value="";
  document.getElementById("taskDate").value="";
  });
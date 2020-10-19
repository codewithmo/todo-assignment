document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('greet').innerText = `${localStorage.userName}`;

  // By default, submit button is disabled
  document.getElementById('submit').disabled = true;

  // Enable button only if there is text in the input field
  document.getElementById('task').onkeyup = () => {
      if (document.getElementById('task').value.length > 0)
          document.getElementById('submit').disabled = false;
      else
          document.getElementById('submit').disabled = true;
  };

  document.getElementById('new-task').onsubmit = () => {

      // Create new item for list
      const li = document.createElement('li');

      // Date and month settings 
      var d = new Date();
      var monthArray = new Array();
      monthArray[0] = "Jan";
      monthArray[1] = "Feb";
      monthArray[2] = "Mar";
      monthArray[3] = "Apr";
      monthArray[4] = "May";
      monthArray[5] = "June";
      monthArray[6] = "July";
      monthArray[7] = "Aug";
      monthArray[8] = "Sept";
      monthArray[9] = "Oct";
      monthArray[10] = "Nov";
      monthArray[11] = "Dec";
      var month = monthArray[d.getMonth()];
      var date = d.getDate() + ' ' + month;


      // loading the task content with conditions
      let taskContent = document.getElementById('task').value;
      if (taskContent.length > 10){
        alert(`ToDo can't be too long`)
      }
      if (taskContent.length <= 10){
        li.innerHTML = taskContent + `<span>${date}</span>` ;
        
        // Add new item to task list
        document.getElementById('tasks').append(li); 

        // Clear input field and disable button again
        document.getElementById('task').value = '';
        document.getElementById('submit').disabled = true;

      }
      // Stop form from submitting
      return false;
  };
});


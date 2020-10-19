function check(){
  let userName = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  // localStorage.userName = userName;
  // localStorage.password = password;

  if (userName === localStorage.userName && password === localStorage.password){
    document.getElementById('loginForm').setAttribute('action', 'todo.html')
  }
  else {
    document.getElementById('username').style.backgroundColor = 'red';
    document.getElementById('password').style.backgroundColor = 'red';
    alert('Incorrect username and password')
  }
  return false;
}
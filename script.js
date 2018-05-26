let userText = document.getElementById('userText');
let todoList = document.getElementById('todoList');
let main = document.getElementById('main');
let mainContainer = document.getElementById('mainContainer');
let dateFooter = document.getElementById('dateFooter');
let myArr=[];

let btnAdd = document.getElementById('btnAdd');
let btnClear = document.getElementById('btnClear');

//alert when page onload
mainContainer.onload=function(){
    alert('This app makes use of your current date');
    userText.focus();
}

//creating a class template for user
class userValue{
  constructor(Text){
    this.userText=Text;
  }
  getText(){
    return this.userText;
  }
}

//button event for adding new todos
btnAdd.addEventListener('click',function(e){
  //preventing the form from submitting
  e.preventDefault();
  //instantiating the class template and passing and the user text
  let newValue = new userValue(userText.value);
  //creating the date constructor
  let todayDate = new Date().toLocaleDateString();
  //creating the DOM manipulation 
  let close=document.getElementsByClassName('close');
  let closeEl = document.createElement('span');
  let closeTxt = document.createTextNode('\u00D7');
  let dt=document.getElementsByClassName('dt');
  let dateEl=document.createElement('span');
  let dateTxt=document.createTextNode(todayDate);
  let todoItem = document.createElement('li');
  let todoText =document.createTextNode(newValue.getText());
  closeEl.setAttribute('class','close');
  dateEl.setAttribute('class','dt');
  todoItem.appendChild(todoText);
  closeEl.appendChild(closeTxt);
  todoItem.appendChild(closeEl);
  dateEl.appendChild(dateTxt);
  todoItem.appendChild(dateEl);
  if(userText.value ===''){
      alert('Please enter Todo title ');
  }else{
      todoList.style.display='block';
      todoList.appendChild(todoItem);
      myArr.push(newValue.getText());
      localStorage.setItem('todos',myArr);
  }
  userText.value='';
  userText.focus();

  for(let i=0; i<close.length;i++){
      close[i].onclick=function(){
          let div=this.parentElement;
          let userConfirm=confirm('Do you want to delete this todo');
          if(userConfirm === true){
             div.style.display='none'; 
          }
          return false;
      }
  }
});

//button event for deleting all todos 
btnClear.addEventListener('click',function(e){
    e.preventDefault();
    var li=document.getElementsByTagName('li');
    var userConfirm = confirm('You are about to delete all your todo items');
    if(userConfirm === true){
        window.location.reload();
    }else{
        return false;
    }
});

//current Year for footer
let todayDate = new Date();
dateFooter.textContent=todayDate.getFullYear();